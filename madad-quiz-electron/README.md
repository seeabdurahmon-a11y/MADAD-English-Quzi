# 🎓 MADAD English Quiz — Windows Dasturi

MADAD IT Academy uchun interaktiv ingliz tili o'rganish dasturining **Windows Setup.exe** versiyasi.

Bu Electron loyihasi — HTML/JS ilovani **haqiqiy Windows dasturiga** aylantirib beradi (xuddi VS Code, WhatsApp Desktop, Discord kabi).

---

## ✨ Xususiyatlar

- ✅ To'liq **offline** ishlaydi (internet kerak emas)
- ✅ Ma'lumotlar **kompyuterda saqlanadi** (rate limit yo'q)
- ✅ Windows **Setup.exe** o'rnatuvchi fayl
- ✅ Rabochiy stolda va Start menyusida shortcut
- ✅ **10-15 o'qituvchi** uchun tayyor

---

## 🛠 Setup.exe yasash — qadamba qadam

### 📋 Nima kerak (bir marta)

1. **Node.js** — https://nodejs.org — **LTS versiyasini** yuklab olib o'rnating (default sozlamalar bilan)

Tekshirish (buyruq satrida):
```
node --version
npm --version
```
Ikkalasi ham raqam ko'rsatishi kerak (masalan `v20.10.0`).

---

### 🚀 1-qadam: Papkani ochish

1. Bu loyihani (`madad-quiz-electron`) kompyuteringizga yuklab oling
2. ZIP bo'lsa — Extract qiling
3. Windows Explorer'da papkani oching

### 🚀 2-qadam: Buyruq satrini ochish

1. Papkaning **manzil satriga** bosing (yuqoridagi yo'l)
2. Yozing: `cmd` → **Enter**
3. Yoki: Shift + o'ng tugma → **"Open PowerShell window here"**

### 🚀 3-qadam: Kutubxonalarni o'rnatish (bir marta, ~2-3 daqiqa)

```
npm install
```

Kutamiz — 200-500 MB yuklab olinadi. Progress ko'rinadi.

### 🚀 4-qadam: Dasturni sinash

```
npm start
```

Dastur oynasi ochilishi kerak — sinab ko'ring, hammasi to'g'ri ishlasa yoping.

### 🚀 5-qadam: Setup.exe yasash

```
npm run build
```

**5-10 daqiqa** kuting (birinchi safar Electron'ni yuklab oladi).

### ✅ Tayyor!

`dist/` papkasini oching. Ichida:

```
📦 dist/
  📄 MADAD-Quiz-Setup-1.0.0.exe   ← O'qituvchilarga BERINADIGAN fayl
  📄 win-unpacked/                 ← Portable versiya (papka)
```

---

## 📤 O'qituvchilarga tarqatish

**`MADAD-Quiz-Setup-1.0.0.exe`** faylni:

1. **Telegram'da** yuborish (~100 MB atrofida)
2. **Google Drive / Yandex Disk** orqali link ulashish
3. **USB fleshka** orqali o'tkazish

### O'qituvchi tomonida:

1. `MADAD-Quiz-Setup.exe` ni ikki marta bosadi
2. Windows Defender ogohlantirsa → "**More info**" → "**Run anyway**"
   > Bu odatiy holat — dastur imzolangan emas. Xavfsiz.
3. Setup ochiladi (Topsavdo o'rnatishga o'xshash)
4. **"Next"** → papka tanlash → **"Install"**
5. **"Finish"** → dastur ishga tushadi
6. Rabochiy stolda va Start menyu'da shortcut paydo bo'ladi

---

## ⚙️ Loyihada nima bor

```
madad-quiz-electron/
├── 📄 package.json          # dependencies + build sozlamalari
├── 📄 main.js               # Electron asosiy fayl (oyna yaratadi)
├── 📁 src/
│   ├── 📄 index.html        # Sizning quiz saytingiz
│   └── 🖼 icon-*.png        # Iconlar
├── 📁 build/
│   ├── 🖼 icon.ico          # Windows uchun icon
│   └── 🖼 icon.png          # Manba icon
├── 📄 README.md             # Bu fayl
└── 📄 .gitignore
```

---

## 🔧 Kerak bo'lganda o'zgartirish

### Savollarni yangilash

`src/index.html` ni tahrirlang → savol qo'shing/o'chiring → qayta build qiling:
```
npm run build
```

### Icon o'zgartirish

- `build/icon.png` (512x512) — asosiy
- `build/icon.ico` (Windows uchun ICO format) — [convertio.co](https://convertio.co/) da PNG'ni ICO'ga o'giring

### Nomni o'zgartirish

`package.json` da:
- `productName` — dastur nomi
- `version` — versiya raqami
- `appId` — noyob ID

---

## 🆘 Muammolar

### `npm install` xato beradi

- Internetni tekshiring
- **Node.js LTS** versiyasini o'rnatganingizga ishonch hosil qiling
- `node_modules` papkasini o'chirib qayta urining: `rmdir /s node_modules` → `npm install`

### `npm run build` uzoq davom etadi

- Birinchi safarda **normal** — Electron 100+ MB yuklab oladi
- Keyingi safarlar tezroq bo'ladi

### Setup ochilmaydi

- Windows Defender'ni tekshiring
- **Microsoft SmartScreen** blokirovka qilgan bo'lishi mumkin → "More info" → "Run anyway"

### O'qituvchida ishlamayapti

- Windows 10 yoki yangi versiya kerak
- 4 GB RAM, 500 MB bo'sh joy

---

## 📞 Yordam

Yordam kerak bo'lsa — Claude'ga yozing.

**MADAD IT Academy — Qo'qon, O'zbekiston**
