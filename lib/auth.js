// Hardcoded admin credentials (no DB needed)
export const ADMIN_USER = 'admin';
export const ADMIN_PASS = 'allyonomax@2026';

// Simple token — in production use JWT
export const AUTH_TOKEN_KEY = 'admin_token';
export const VALID_TOKEN = 'aym_secure_session_k9x2m4p7';

export function verifyToken(token) {
  return token === VALID_TOKEN;
}
