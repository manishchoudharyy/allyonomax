"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  X,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  Search as SearchIcon,
  Star,
  FileText,
  Tag,
  Layers,
  BookmarkPlus,
  Link2,
} from "lucide-react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

/* ── Alert Modal ── */
function AlertModal({ show, type, title, message, onClose }) {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#16161f] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              type === "success"
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {type === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <AlertTriangle className="w-5 h-5" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-white">{title}</h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white transition shrink-0 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={onClose}
          className={`w-full mt-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            type === "success"
              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20"
              : "bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20"
          }`}
        >
          OK
        </button>
      </div>
    </div>
  );
}

/* ── Section Header ── */
function SectionHeader({ icon: Icon, color, title, count, isOpen, onToggle }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2">
        <span
          className={`w-7 h-7 rounded-lg bg-${color}/10 text-${color} flex items-center justify-center`}
        >
          <Icon className="w-3.5 h-3.5" />
        </span>
        {title}
        {count !== undefined && (
          <span className="text-[11px] text-slate-500 font-normal">
            ({count})
          </span>
        )}
      </h2>
      {onToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="text-slate-500 hover:text-white transition p-1"
        >
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}

export default function EditApp({ params }) {
  const { id } = use(params);
  const router = useRouter();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    title: "",
    message: "",
  });
  const [collapsed, setCollapsed] = useState({
    seo: false,
  });

  const toggle = (key) => setCollapsed((p) => ({ ...p, [key]: !p[key] }));

  useEffect(() => {
    fetch("/api/admin/apps")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const app = data.apps.find((a) => String(a.id) === decodeURIComponent(id));
          if (app) {
            if (!app.keywords || !Array.isArray(app.keywords))
              app.keywords = [];
            if (!app.categories || !Array.isArray(app.categories))
              app.categories = app.category ? [app.category] : ['rummy'];
            setFormData(app);
          } else
            setAlert({
              show: true,
              type: "error",
              title: "Not Found",
              message: "App not found.",
            });
        }
        setLoading(false);
      })
      .catch(() => {
        setAlert({
          show: true,
          type: "error",
          title: "Error",
          message: "Failed to load app.",
        });
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryToggle = (cat) => {
    setFormData(prev => {
      const isSelected = prev.categories.includes(cat);
      const newCats = isSelected 
        ? prev.categories.filter(c => c !== cat) 
        : [...prev.categories, cat];
      return { ...prev, categories: newCats };
    });
  };

  const handleDescriptionChange = (val) => {
    setFormData((prev) => ({ ...prev, description: val }));
  };

  const handleKeywords = (e) =>
    setFormData((prev) => ({
      ...prev,
      keywords: e.target.value
        .split(",")
        .map((k) => k.trim())
        .filter((k) => k),
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/apps", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success)
        setAlert({
          show: true,
          type: "success",
          title: "Saved!",
          message: `"${formData.name}" has been updated successfully.`,
        });
      else
        setAlert({
          show: true,
          type: "error",
          title: "Error",
          message: data.error || "Something went wrong.",
        });
    } catch {
      setAlert({
        show: true,
        type: "error",
        title: "Network Error",
        message: "Could not connect. Please try again.",
      });
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg
          className="animate-spin h-6 w-6 text-slate-500"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-400 mb-4">App not found</p>
        <button
          onClick={() => router.push("/admin/apps")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/[0.08] hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Apps
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-2.5 border border-white/10 rounded-xl focus:ring-2 focus:ring-red-500/30 focus:border-red-500/30 outline-none transition bg-white/5 text-white text-sm placeholder-slate-500";

  return (
    <div className="max-w-3xl mx-auto">
      <AlertModal
        {...alert}
        onClose={() => setAlert((p) => ({ ...p, show: false }))}
      />

      {/* Top nav */}
      <div className="flex items-center justify-between mb-5">
        <button
          onClick={() => router.push("/admin/apps")}
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Apps
        </button>
        <a
          href={`/${formData.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition"
        >
          <ExternalLink className="w-3.5 h-3.5" /> View Live Page
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Preview Header */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6 flex items-center gap-4">
          {formData.icon ? (
            <img
              src={formData.icon}
              alt={formData.name}
              className="w-14 h-14 rounded-2xl object-cover border border-white/10"
            />
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 text-lg font-bold border border-white/10">
              {formData.name?.charAt(0)}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-white truncate">{formData.name}</h2>
            <p className="text-xs text-slate-500">
              ID: {formData.id} · /{formData.slug} · {formData.category}
            </p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {formData.isNew && (
              <span className="px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-bold border border-orange-500/20">
                NEW
              </span>
            )}
            {formData.isTrending && (
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                TREND
              </span>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader
            icon={Layers}
            color="red-500"
            title="Basic Information"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                App Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug || ""}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Categories (Multiple)
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "rummy",
                  "slots",
                  "teen-patti",
                  "casino",
                  "bingo",
                  "arcade",
                  "spin",
                  "all",
                ].map((c) => {
                  const isSelected = formData.categories.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => handleCategoryToggle(c)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                        isSelected 
                          ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                          : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Icon Path
              </label>
              <input
                type="text"
                name="icon"
                value={formData.icon || ""}
                onChange={handleChange}
                placeholder="/icons/app-name.webp"
                className={inputCls}
              />
            </div>
            
            {/* Merged Game Details Fields */}
            {[
              { label: "Bonus", name: "bonus" },
              { label: "Min Withdrawal", name: "minWithdrawal" },
              { label: "App Size", name: "appSize" },
              {
                label: "Rating",
                name: "rating",
                type: "number",
                step: "0.1",
                min: "0",
                max: "5",
              },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  {f.label}
                </label>
                <input
                  type={f.type || "text"}
                  name={f.name}
                  value={formData[f.name] || ""}
                  onChange={handleChange}
                  step={f.step}
                  min={f.min}
                  max={f.max}
                  className={inputCls}
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Total Downloads
              </label>
              <input
                type="text"
                name="totalDownloads"
                value={formData.totalDownloads || ""}
                onChange={handleChange}
                placeholder="250K+"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Refer Link
              </label>
              <input
                type="text"
                name="referLink"
                value={formData.referLink || ""}
                onChange={handleChange}
                className={inputCls}
              />
              {formData.referLink === "#" && (
                <p className="text-[11px] text-amber-400 mt-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> Placeholder — replace
                  with real URL
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Flags */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader icon={Tag} color="amber-500" title="Flags" />
          <div className="flex gap-6">
            {[
              { name: "isNew", label: "New App", color: "text-orange-400" },
              {
                name: "isTrending",
                label: "Trending",
                color: "text-emerald-400",
              },
            ].map((f) => (
              <label
                key={f.name}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  name={f.name}
                  checked={formData[f.name] || false}
                  onChange={handleChange}
                  className="w-4 h-4 rounded bg-white/5 border-white/20 text-red-600 focus:ring-red-500/30"
                />
                <span
                  className={`text-sm ${f.color} group-hover:brightness-125 transition`}
                >
                  {f.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader
            icon={FileText}
            color="emerald-500"
            title="Description"
          />
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden [&_.ql-toolbar]:border-none [&_.ql-toolbar]:bg-white/5 [&_.ql-container]:border-none [&_.ql-editor]:min-h-[150px] [&_.ql-editor]:text-sm [&_.ql-editor]:text-slate-300 [&_.ql-editor]:leading-relaxed [&_.ql-toolbar_button]:text-slate-400 [&_.ql-stroke]:stroke-slate-400 [&_.ql-fill]:fill-slate-400 [&_.ql-picker]:text-slate-400">
            <ReactQuill
              theme="snow"
              value={formData.description || ""}
              onChange={handleDescriptionChange}
              modules={{
                toolbar: [
                  [{ 'header': [1, 2, 3, false] }],
                  ['bold', 'italic', 'underline', 'strike'],
                  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                  ['link', 'clean']
                ],
              }}
            />
          </div>
        </div>

        {/* SEO */}
        <div className="rounded-2xl border border-white/5 bg-[#12121a] p-6">
          <SectionHeader
            icon={SearchIcon}
            color="cyan-500"
            title="SEO Settings"
            isOpen={!collapsed.seo}
            onToggle={() => toggle("seo")}
          />
          {!collapsed.seo && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Meta Title
                </label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle || ""}
                  onChange={handleChange}
                  className={inputCls}
                />
                {formData.metaTitle && (
                  <p
                    className={`text-[11px] mt-1 ${formData.metaTitle.length > 60 ? "text-amber-400" : "text-slate-500"}`}
                  >
                    {formData.metaTitle.length}/60 chars{" "}
                    {formData.metaTitle.length > 60 && "⚠ too long"}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Meta Description
                </label>
                <textarea
                  name="metaDescription"
                  value={formData.metaDescription || ""}
                  onChange={handleChange}
                  rows="2"
                  className={inputCls + " resize-y"}
                />
                {formData.metaDescription && (
                  <p
                    className={`text-[11px] mt-1 ${formData.metaDescription.length > 160 ? "text-amber-400" : "text-slate-500"}`}
                  >
                    {formData.metaDescription.length}/160 chars{" "}
                    {formData.metaDescription.length > 160 && "⚠ too long"}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Keywords (comma separated)
                </label>
                <input
                  type="text"
                  value={(formData.keywords || []).join(", ")}
                  onChange={handleKeywords}
                  className={inputCls}
                />
                {formData.keywords?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {formData.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] rounded-full font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push("/admin/apps")}
            className="flex-1 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 font-semibold text-sm hover:bg-white/[0.08] hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex-[2] py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-semibold text-sm transition-all disabled:opacity-50 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
          >
            {saving ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>{" "}
                Saving…
              </>
            ) : (
              <>
                <BookmarkPlus className="w-4 h-4" /> Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
