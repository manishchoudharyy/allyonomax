import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== RANDOM GENERATORS ==========
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomBonus = () => `₹${getRandomNumber(31, 200)}`;

const getRandomSize = () => `${getRandomNumber(35, 75)}MB`;

const getRandomRating = () => {
  const main = getRandomNumber(4, 4);
  const decimal = getRandomNumber(0, 7);
  return parseFloat(`${main}.${decimal}`);
};

const getRandomDownloads = () => {
  const options = ['100K+', '250K+', '500K+', '750K+', '1M+', '1.5M+', '2M+'];
//   return pick(options);
  return `${getRandomNumber(100, 990)}K+`;
};

const getDefaultDescription = (name, category, bonus) => {
  const n = name || "This App";
  const b = bonus || "₹100";
  const cat = category || "rummy";

  const intros = [
    `${n} is one of the fastest-growing ${cat} gaming platforms in India that allows users to earn real cash while playing.`,
    `If you're looking for a trusted ${cat} earning app, ${n} is currently trending among Indian players.`,
    `${n} has quickly gained popularity as a reliable real money gaming app with smooth gameplay and instant rewards.`,
    `${n} is designed for players who want both entertainment and real cash winnings in one place.`,
  ];

  const features = [
    `The platform offers multiple game modes, low entry tables, and high-reward competitions for both beginners and pro users.`,
    `Users can enjoy seamless gameplay with optimized performance even on low-end devices and slow networks.`,
    `With fast servers and smooth UI, the experience remains lag-free during gameplay sessions.`,
  ];

  const security = [
    `${n} uses secure payment systems with SSL encryption and fair gameplay algorithms.`,
    `All transactions are protected with advanced security layers and verified payment gateways.`,
    `The app ensures fair results using certified RNG systems and transparent gameplay.`,
  ];

  const withdrawal = [
    `Players can withdraw their earnings instantly using UPI, Paytm, or bank transfer.`,
    `Withdrawal requests are processed quickly, usually within minutes.`,
    `The minimum withdrawal is low, making it easy for users to cash out anytime.`,
  ];

  const closing = [
    `Additionally, the referral program allows users to earn passive income by inviting friends.`,
    `With regular bonuses, login rewards, and cashback offers, users always have earning opportunities.`,
    `${n} continues to attract new users daily due to its fast withdrawals and rewarding system.`,
  ];

  return `
${pick(intros)}

${pick(features)}

New users get a welcome bonus of ${b}, along with daily login rewards and deposit offers.

${pick(security)}

${pick(withdrawal)}

${pick(closing)}
  `.trim();
};

const getDefaultFaqs = (name, bonus, minWithdrawal) => {
  const n = name || "this app";
  const b = bonus || "₹100";
  const min = minWithdrawal || "₹100";

  const faqPool = [
    {
      q: `What is ${n} and how does it work?`,
      a: `${n} is a real money gaming app where users can play skill-based games and earn cash rewards. It offers multiple game modes, secure transactions, and a smooth user experience for both beginners and advanced players.`
    },
    {
      q: `How to download ${n} APK safely?`,
      a: `To download ${n}, click the official link, install the APK file, and register using your mobile number. Make sure to enable unknown sources in your device settings before installation.`
    },
    {
      q: `What is the minimum withdrawal in ${n}?`,
      a: `The minimum withdrawal amount in ${n} is ${min}. Users can withdraw their earnings instantly through UPI, Paytm, or bank transfer.`
    },
    {
      q: `Is ${n} real or fake?`,
      a: `${n} is a trusted platform used by thousands of players. It provides secure payments, fast withdrawals, and fair gameplay systems.`
    },
    {
      q: `How can I earn money from ${n}?`,
      a: `You can earn money by playing games, winning matches, participating in events, and using the referral program to invite friends.`
    },
    {
      q: `Does ${n} provide a welcome bonus?`,
      a: `Yes, new users get a welcome bonus of ${b} after registration. Additional rewards are available through login bonuses and promotions.`
    },
    {
      q: `Is ${n} safe to use?`,
      a: `${n} uses encrypted payment systems and secure login methods to protect user data and transactions.`
    },
    {
      q: `How long do withdrawals take in ${n}?`,
      a: `Withdrawals in ${n} are typically processed within 10-30 minutes. VIP users get priority processing within 5 minutes.`
    },
    {
      q: `Can I play ${n} without depositing money?`,
      a: `Yes, you can use the welcome bonus and daily login rewards to play games without making an initial deposit.`
    },
    {
      q: `What games are available in ${n}?`,
      a: `${n} offers rummy, teen patti, slots, bingo, and arcade games. New games are added regularly.`
    },
    {
      q: `Does ${n} have a referral program?`,
      a: `Yes, you can earn up to 25% commission on your friends' deposits. Referral rewards are credited instantly to your wallet.`
    },
    {
      q: `Is ${n} available for iOS?`,
      a: `Currently ${n} is optimized for Android devices. iOS users can access via web browser.`
    },
    {
      q: `How do I contact ${n} customer support?`,
      a: `You can contact support via in-app live chat 24/7 or email support@${n.toLowerCase().replace(/ /g, '')}.com.`
    },
    {
      q: `What is the maximum withdrawal limit in ${n}?`,
      a: `Standard users can withdraw up to ₹50,000 per day. VIP members have limits up to ₹5,00,000 per day.`
    },
    {
      q: `Does ${n} have daily bonuses?`,
      a: `Yes, daily login bonuses, streak rewards, and free spins are available for active players.`
    },
    {
      q: `Is KYC required for withdrawal in ${n}?`,
      a: `Basic mobile verification is enough for withdrawals up to ₹10,000. For larger amounts, simple KYC is required.`
    },
    {
      q: `Can I play ${n} on multiple devices?`,
      a: `Yes, you can log in to your account on multiple devices, but only one device can be active at a time.`
    }
  ];

  // Shuffle function
  const shuffled = [...faqPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return random 5-6 FAQs
  const count = Math.floor(Math.random() * 2) + 5; // 5 or 6
  return shuffled.slice(0, count).map(f => ({ question: f.q, answer: f.a }));
};

const getDefaultFeatures = () => {
  const pool = [
    // Payment & Withdrawal (8)
    "Instant UPI Withdrawal",
    "Fast Bank Transfer",
    "Zero Fee Transactions",
    "24/7 Withdrawal Available",
    "Multiple Payment Options",
    "Auto Cashout Feature",
    "Same Day Payouts",
    "No Hidden Charges",

    // Bonuses & Rewards (8)
    "Daily Login Rewards",
    "Refer & Earn Commission",
    "Welcome Bonus Available",
    "Weekly Cashback Offers",
    "Festival Bonus Events",
    "Lucky Spin Rewards",
    "VIP Exclusive Bonuses",
    "Streak Bonus Rewards",

    // Game Features (8)
    "Low Entry Tables",
    "High Reward Matches",
    "Multiple Game Variants",
    "Private Tables for Friends",
    "Practice Mode Available",
    "Tournament Entry",
    "Live Dealer Games",
    "Quick Match Making",

    // Technical & Security (8)
    "Smooth Gameplay",
    "Secure Payments",
    "Anti-Cheat System",
    "Data Encryption",
    "Low Data Usage",
    "Lightweight App",
    "Regular Updates",
    "Fast Loading Time",

    // Support & Community (8)
    "24/7 Customer Support",
    "Hindi Language Support",
    "Multi Language UI",
    "Player Community Chat",
    "Dedicated VIP Manager",
    "Email Support Available",
    "Live Chat Support",
    "FAQ & Help Center"
  ];

  // Shuffle function
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Return random 6-8 features
  const count = Math.floor(Math.random() * 3) + 6; // 6, 7, or 8
  return shuffled.slice(0, count);
};

const getDefaultHowToDownload = (appName, bonus) => {
  const stepsSet = [
    [
      `Click the "Download ${appName}" button to get the APK file`,
      `Enable "Install from Unknown Sources" in your phone's Security settings`,
      `Open the downloaded APK file from your notification panel`,
      `Tap "Install" and wait for the installation to complete`,
      `Open ${appName} from your home screen after installation`,
      `Tap "Register" and enter your mobile number to create an account`,
      `Enter the OTP sent to your phone to verify your number`,
      `Your ${bonus} welcome bonus will be credited to your wallet instantly`
    ],
    [
      `Tap the green "Download ${appName}" button to start downloading`,
      `Go to Settings > Security and enable "Unknown Sources"`,
      `Swipe down and tap on the downloaded ${appName} APK file`,
      `Press "Install" and wait a few seconds for the process to finish`,
      `Tap "Open" to launch ${appName} on your device`,
      `Click "Sign Up" and type your mobile number`,
      `Enter the OTP received via SMS to verify your account`,
      `${bonus} welcome bonus will be added to your wallet automatically`
    ],
    [
      `Click the "Get ${appName}" button to download the official APK`,
      `Enable "Unknown Sources" in Settings > Security > Unknown Sources`,
      `Locate the downloaded file in your file manager`,
      `Tap on the file and select "Install" to begin`,
      `Wait a few seconds for installation to complete`,
      `Open ${appName} by tapping "Open" on the installation screen`,
      `Click "Register" and enter your mobile number`,
      `Enter OTP to verify and get ${bonus} welcome bonus instantly`
    ],
    [
      `Click the "Install ${appName}" button to get the APK file`,
      `Go to Settings > Security and enable "Install from Unknown Sources"`,
      `Find the downloaded ${appName.toLowerCase().replace(/ /g, '-')}.apk in your Downloads folder`,
      `Tap the file and press "Install" to start`,
      `After installation, tap "Open" to launch ${appName}`,
      `Tap "Sign Up" and enter your mobile number`,
      `Enter the OTP code sent via SMS to verify`,
      `Your ${bonus} welcome bonus will be credited automatically`
    ],
    [
      `Click the "${appName} Download" button to save the APK file`,
      `Enable "Unknown Sources" in your device's Security settings`,
      `Open the downloaded APK file and tap "Install"`,
      `Wait for installation to complete (10-15 seconds)`,
      `Tap "Open" once installation is complete to launch ${appName}`,
      `Click "Register" and enter your mobile number`,
      `Enter the OTP sent to your mobile number for verification`,
      `${bonus} welcome bonus will be added to your main wallet instantly`
    ],
    [
      `Click the "Download ${appName}" button to get the APK file`,
      `Allow installation from unknown sources in Settings > Security`,
      `Open the downloaded APK file from your notification bar`,
      `Tap "Install" and wait for the installation to complete`,
      `Launch ${appName} from your app drawer or home screen`,
      `Tap "New User? Register" and enter your mobile number`,
      `Enter the OTP code sent via SMS to verify your account`,
      `Your ${bonus} welcome bonus will be credited automatically`
    ],
    [
      `Click the "${appName} APK Download" button to start`,
      `Enable "Unknown Sources" in your phone's security settings`,
      `Tap on the downloaded APK file to begin installation`,
      `Press "Install" and wait for the process to finish`,
      `Open ${appName} by tapping "Open" after installation`,
      `Register using your mobile number (OTP verification required)`,
      `Enter the OTP sent to your phone to verify your identity`,
      `${bonus} welcome bonus will be added to your wallet instantly`
    ],
    [
      `Click the "${appName} Install" button to download APK`,
      `Go to Settings > Security > Enable "Unknown Sources"`,
      `Locate the APK in your Downloads folder or notification panel`,
      `Tap the file and select "Install" to proceed`,
      `After installation, tap "Open" to launch ${appName}`,
      `Click "Sign Up" and enter your active mobile number`,
      `Request OTP and enter the code received via SMS`,
      `Your ${bonus} welcome bonus will be credited automatically`
    ],
    [
      `Click the "Get ${appName}" button to download the APK file`,
      `Enable installation from unknown sources in your device settings`,
      `Open the downloaded APK file from your file manager`,
      `Tap "Install" and wait a few seconds for completion`,
      `Launch ${appName} by tapping "Open" on the installation screen`,
      `Register with your mobile number (OTP verification required)`,
      `Enter the verification code sent to your phone via SMS`,
      `${bonus} welcome bonus will be instantly credited to your wallet`
    ],
    [
      `Click the "${appName} Download" button to get the APK`,
      `Enable "Unknown Sources" in Settings > Security`,
      `Find the downloaded APK in your notification panel`,
      `Tap the file and press "Install" to begin`,
      `Wait for installation to complete (10-15 seconds)`,
      `Tap "Open" to launch ${appName} on your device`,
      `Click "Register" and enter your mobile number`,
      `Enter the OTP sent to your phone to get ${bonus} welcome bonus`
    ]
  ];

  const randomIndex = Math.floor(Math.random() * stepsSet.length);
  return stepsSet[randomIndex];
};

const getDefaultSeo = (name, bonus, category) => {
  const n = name || "App";
  const b = bonus || "₹100";
  const cat = category || "rummy";
  const clean = n.toLowerCase();

  return {
    metaTitle: `${n} APK Download - ${b} Signup Bonus | All Yono Max - Real Cash`,
    metaDescription: `Download ${n} APK and get ${b} signup bonus. Play skill based games, instant withdrawal, real earning app 2026.`,
    keywords: [
      `${clean} apk download`,
      `${clean} app download`,
      `${clean} real or fake`,
      `${clean} earning app`,
      `${clean} withdrawal proof`,
      `${clean} referral code`,
      `${clean} latest version`,
      `${clean} bonus`,
      `${clean} review`,
      `${clean} real money app`,
      `${clean} apk 2026`,
    ],
  };
};

// ========== MAIN SCRIPT ==========
async function autoAddApps() {
  console.log('\n🚀 Starting Auto App Adder...\n');

  // Read apps from JSON file
  const appsFilePath = path.join(process.cwd(), 'lib/onlyAppLinkData.json');
  
  if (!fs.existsSync(appsFilePath)) {
    console.error('❌ onlyAppsLinkData.json file not found!');
    console.log('📁 Expected path:', appsFilePath);
    return;
  }
  
  const appsData = JSON.parse(fs.readFileSync(appsFilePath, 'utf8'));

  console.log(`📋 Found ${appsData.length} apps to add\n`);

  let successCount = 0;
  let failCount = 0;

  const fixedApps = [];

  for (let i = 0; i < appsData.length; i++) {
    const app = appsData[i];
    const bonus = getRandomBonus();
    const size = getRandomSize();
    const rating = getRandomRating();
    const downloads = getRandomDownloads();
    const seo = getDefaultSeo(app.name, bonus);
    const slug = app.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
    const icon = `/icons/${slug}.webp`;

    const fullAppData = {
      id: i+1,
      name: app.name,
      slug: slug,
      category: app.category,
      icon: icon,
      referLink: app.referLink,
      bonus: bonus,
      minWithdrawal: '₹100',
      appSize: size,
      rating: rating,
      totalDownloads: downloads,
      description: getDefaultDescription(app.name, app.category, bonus),
      isNew: true,
      isTrending: getRandomNumber(0, 1) === 1,
      features: getDefaultFeatures(),
      howToDownload: getDefaultHowToDownload(app.name, bonus),
      faq: getDefaultFaqs(app.name, bonus, '₹100'),
      metaTitle: seo.metaTitle,
      metaDescription: seo.metaDescription,
      keywords: seo.keywords
    };

    fixedApps.push(fullAppData);
    console.log(`✅ [${i + 1}/${appsData.length}] Processed: ${app.name}`);
  
  }

  fs.writeFileSync(path.join(process.cwd(), 'fixed.json'), JSON.stringify(fixedApps, null, 2));
  console.log(`\n📊 Summary: ${successCount} added, ${failCount} failed\n`);
}

// Run the script
autoAddApps();