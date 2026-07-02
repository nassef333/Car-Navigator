# FYT Theme — ثيم شاشة السيارة

مشروع تصميم وتطوير ثيم مخصص لشاشات Android للسيارات من نوع **FYT** (UIS7862 / UIS8581A).

## المحتويات

```
fyt-theme/
├── theme.config.json      ← إعدادات الثيم (ألوان، أبعاد، خلفيات)
├── studio/                ← استوديو معاينة React (1920×720)
├── assets/                ← صور وموارد الثيم
│   ├── wallpapers/day/
│   ├── wallpapers/night/
│   ├── icons/
│   └── bottom-bar/
├── scripts/
│   └── build-theme.js     ← بناء حزمة الثيم
└── output/                ← المخرجات الجاهزة
```

## البدء السريع

```bash
cd fyt-theme
npm run setup      # تثبيت dependencies
npm run dev        # فتح استوديو التصميم
```

افتح المتصفح على: **http://localhost:5174**

## استوديو التصميم

الاستوديو يتيح لك:

- **معاينة حية** للثيم بدقة 1920×720 (أو 1280×720 / 1920×1080)
- **تعديل الألوان** — أساسي، تمييز، خلفية، شريط سفلي، PiP
- **ضبط الأبعاد** — القائمة الجانبية، شريط A/V، شريط الحالة
- **وضع نهار/ليل** — معاينة الثيم في الإضاءة المختلفة
- **قوالب جاهزة** — Midnight, Ocean, Sport, Neon
- **تصدير** — حفظ `theme.config.json`

## بناء حزمة الثيم

```bash
npm run build-theme
```

ينشئ مجلد في `output/` يحتوي على:
- `theme.config.json`
- `colors/theme_colors.xml` — لدمجها في APK
- `wallpapers/` — مجلدات الخلفيات
- `INSTALL.md` — تعليمات التثبيت

## إضافة خلفيات

1. ضع صورة الخلفية النهارية في:
   `assets/wallpapers/day/wallpaper.jpg` (1920×720 px)

2. ضع صورة الخلفية الليلية في:
   `assets/wallpapers/night/wallpaper.jpg` (1920×720 px)

## التثبيت على شاشة FYT

### الخيار 1: Launcher66 (موصى به)

[Launcher66](https://github.com/vasyl91/FYT-Launcher-Mod) launcher معدّل يدعم:
- Skins مخصصة للـ widgets وشريط التحكم
- Night mode تلقائي
- PiP متعدد
- Layout creator

```bash
# فك APK
apktool d launcher66.apk -o launcher66

# استبدل الموارد
cp output/midnight-drive/wallpapers/day/* launcher66/res/drawable/
cp output/midnight-drive/colors/theme_colors.xml launcher66/res/values/

# إعادة البناء والتوقيع
apktool b launcher66 -o themed-launcher.apk
apksigner sign --ks platform.jks themed-launcher.apk
# كلمة المرور: android
```

### الخيار 2: FYT Factory

1. [FYT Factory](https://fytfactory.mariodantas.com) — launchers جاهزة
2. اختر launcher يناسب دقة شاشتك
3. عدّل APK بالموارد من `output/`

### الخيار 3: USB Install

1. انسخ installer ZIP إلى فلاشة USB (FAT32)
2. وصّل الفلاشة بشاشة السيارة
3. التثبيت يبدأ تلقائياً بعد 5 ثوانٍ

## معرفة Launcher الحالي

في شاشة FYT:
- **Settings** → Factory menu (password: `3368`)
- **Home Launcher** — اختر أو شاهد Launcher الحالي
- Package name مثل: `com.android.launcher37`

## الدقات المدعومة

| الدقة | الاستخدام |
|-------|-----------|
| 1920×720 | الأكثر شيوعاً (Tesla style) |
| 1280×720 | شاشات أصغر |
| 1920×1080 | شاشات 2K |

## روابط مفيدة

- [FYT Factory](https://fytfactory.mariodantas.com)
- [Launcher66 Mod](https://github.com/vasyl91/FYT-Launcher-Mod)
- [XDA FYT Forum](https://xdaforums.com/f/fyt-android-head-units.12445/)
# Car-Navigator
# Car-Navigator
