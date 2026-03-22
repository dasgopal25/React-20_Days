# 🚀 Swiggy Clone - Deployment Guide

## 📁 Project Structure (Final)

```
swiggy-clone/
├── index.html              ✅ Entry point
├── package.json            ✅ Dependencies
├── vite.config.js          ✅ Vite config
├── tailwind.config.js      ✅ Tailwind config
├── postcss.config.js       ✅ PostCSS config
├── eslint.config.js        ✅ ESLint config
├── vercel.json             ✅ Vercel routing fix
├── netlify.toml            ✅ Netlify routing fix
├── .gitignore              ✅ Git ignore
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── assets/
    ├── components/
    │   ├── Store/
    │   │   ├── Store.jsx
    │   │   └── Slice.jsx
    │   ├── Headers.jsx
    │   ├── Home.jsx
    │   ├── Restaurant.jsx
    │   ├── RestCard.jsx
    │   ├── RestHeader.jsx
    │   ├── RestaurantMenu.jsx
    │   ├── FoodOption.jsx
    │   ├── FoodCard.jsx
    │   ├── GroceryOption.jsx
    │   ├── GroceryCard.jsx
    │   ├── DineOutOption.jsx
    │   ├── DineOutCard.jsx
    │   ├── SearchFood.jsx
    │   ├── ItemsCard.jsx
    │   ├── CheckOut.jsx
    │   ├── Selecter.jsx
    │   ├── Recommadation.jsx
    │   ├── Shimmer.jsx
    │   └── Shimmer2.jsx
    └── Utils/
        ├── FoodData.js
        ├── GroceryData.js
        └── DineOut.js
```

---

## 🛠️ Step 1: Project Setup (Local)

### Pehli baar setup karte waqt:

```bash
# 1. Ek naya folder banao
mkdir swiggy-clone
cd swiggy-clone

# 2. Ye saari config files yahan rakho (jo download ki hain)
# index.html, package.json, vite.config.js, etc.

# 3. src/ folder apna paste karo
# (apna poora src folder yahan paste karo)

# 4. Dependencies install karo
npm install

# 5. Local pe chalao (test karne ke liye)
npm run dev
```

Browser mein khulega: `http://localhost:5173`

---

## 🌐 Option A: Vercel pe Deploy (Recommended - FREE)

### Method 1: GitHub se (Best Way)

```bash
# 1. Git initialize karo
git init
git add .
git commit -m "first commit"

# 2. GitHub pe naya repository banao
# github.com → New Repository → "swiggy-clone"

# 3. Push karo
git remote add origin https://github.com/YOUR_USERNAME/swiggy-clone.git
git branch -M main
git push -u origin main
```

**Vercel pe:**
1. `vercel.com` pe jao → Sign up with GitHub
2. **"Add New Project"** click karo
3. Apna `swiggy-clone` repo select karo
4. **Deploy** click karo ✅
5. 2 minute mein live ho jayega!

### Method 2: Direct Upload (GitHub ke bina)

```bash
# 1. Vercel CLI install karo
npm install -g vercel

# 2. Project folder mein jao
cd swiggy-clone

# 3. Deploy karo
vercel

# Follow the prompts - sab default rehne do
# Deploy ho jayega!
```

---

## 🌐 Option B: Netlify pe Deploy (FREE)

### Method 1: Drag & Drop (Sabse Aasan!)

```bash
# 1. Pehle build karo
npm run build
```

1. `netlify.com` pe jao → Sign up
2. Dashboard mein **"Sites"** tab pe jao
3. `dist/` folder ko **drag & drop** karo browser mein
4. Done! ✅ Live link mil jayega!

### Method 2: GitHub se

1. GitHub pe push karo (upar wala Step)
2. Netlify → **"Add new site"** → **"Import from Git"**
3. GitHub repo select karo
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. **Deploy** click karo ✅

---

## 🔧 Build Command Reference

```bash
npm run dev      # Local development server chalao
npm run build    # Production build banao (dist/ folder)
npm run preview  # Build ka preview dekho locally
```

---

## ⚠️ Important Notes

1. **React Router** - `vercel.json` aur `netlify.toml` already set hain, routes kaam karenge ✅

2. **Swiggy API** - Aapka project Swiggy ki live API use kar raha hai. Ye kabhi kabhi CORS error de sakti hai. Agar error aaye toh:
   - Development mein `vite.config.js` mein proxy add karna padega
   - Production mein CORS issue aa sakta hai (Swiggy restrict kar sakti hai)

3. **Images** - Swiggy CDN images use ho rahi hain, internet chahiye

---

## 🎉 Deployment Checklist

- [ ] `npm install` run kiya
- [ ] `npm run dev` se locally test kiya
- [ ] `npm run build` successfully chala
- [ ] GitHub pe push kiya
- [ ] Vercel/Netlify pe deploy kiya
- [ ] Live URL pe test kiya

---

**🌟 Congratulations! Aapka Swiggy Clone live ho jayega!**
