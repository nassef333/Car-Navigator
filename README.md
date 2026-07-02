# Aura Software Studio

**The first integrated design-and-build environment for in-vehicle Android head units.**

For decades, customizing a car's digital cockpit meant reverse-engineering factory firmware, editing XML by hand, and hoping nothing bricked on install. Aura changes that. It is a browser-based software studio where you design, preview, and ship a complete in-car experience — live, at full display resolution, before a single byte touches hardware.

Built for **FYT** head units running **UIS7862**, **UIS7862S**, and **UIS8581A** chipsets.

---

## What makes this different

| Before Aura | With Aura |
|---|---|
| Edit resources blindly in APK toolchains | See every pixel in a live 1280×720 / 1920×720 canvas |
| Guess PiP window placement on a bench | Drag, snap, and export exact coordinates |
| Separate tools for design, build, and deploy | One studio → one config → one USB installer |
| No vehicle data in the preview | CAN bus widgets, climate, doors, ambient light — simulated in real time |

Nothing like this has existed for the aftermarket head-unit ecosystem. Aura is the first studio that treats an in-car Android screen as a first-class software platform.

---

## Project structure

```
fyt-theme/
├── theme.config.json      ← master configuration (colors, layout, PiP, vehicle data)
├── studio/                ← Aura Software Studio (React, full-resolution preview)
├── assets/                ← wallpapers, icons, visual resources
│   ├── wallpapers/day/
│   ├── wallpapers/night/
│   ├── icons/
│   └── bottom-bar/
├── scripts/
│   ├── build-theme.js     ← compile configuration into a deployable package
│   └── build-installer.js ← produce a USB-ready FYT installer
└── output/                ← build artifacts
```

---

## Quick start

```bash
cd fyt-theme
npm run setup      # install dependencies
npm run dev        # open Aura Software Studio
```

Open your browser at **http://localhost:5174**

---

## The Studio

Aura Software Studio is a full in-car interface workbench:

- **Live preview** at native resolution — 1280×720, 1920×720, or 1920×1080
- **Color system** — primary, accent, background, surface, status bar, PiP chrome
- **Spatial editor** — widget columns, center panel, CarPlay zone, PiP rectangle, bottom bar
- **Day / night modes** — preview how the interface adapts to ambient light
- **Vehicle simulation** — speed, doors, climate, ambient lighting via CAN bus data
- **CarPlay / ZLink zone** — position and size the wireless CarPlay surface
- **AI dashboard panel** — intelligence layer alongside driving data
- **Export** — save `theme.config.json` and ship

Design once. Preview exactly what the driver will see. Deploy with confidence.

---

## Build & deploy

### Compile the software package

```bash
npm run build-theme
```

Outputs to `output/<name>/`:

- `theme.config.json` — full configuration
- `colors/theme_colors.xml` — Android resource values
- `wallpapers/` — day and night backgrounds
- `INSTALL.md` — deployment notes

### Build the USB installer

```bash
npm run build-installer
```

Produces a FAT32-ready ZIP in `output/`. Copy it to a USB drive, plug it into the head unit, and installation begins automatically within ~5 seconds.

---

## Adding wallpapers

1. Day background → `assets/wallpapers/day/wallpaper.jpg` (match your target resolution)
2. Night background → `assets/wallpapers/night/wallpaper.jpg`

Rebuild after adding assets.

---

## Supported displays

| Resolution | Typical use |
|---|---|
| 1920×720 | Wide cinematic (most common) |
| 1280×720 | Compact wide |
| 1920×1080 | 2K panels |

---

## Author

**Ahmed Nassef** — أحمد ناصف

Aura Software Studio · v3.0.0

---

## Links

- [FYT Factory](https://fytfactory.mariodantas.com)
- [XDA FYT Forum](https://xdaforums.com/f/fyt-android-head-units.12445/)
# Car-Navigator
