# Shopeasy (Vue 3 + Vite)

## Run in VS Code
1. Install Node.js (v18+) from https://nodejs.org
2. In VS Code: File > Open Folder > select this `shopeasy-vue` folder
3. Open the terminal (Ctrl + `) and run:

       npm install
       npm run dev

4. Open http://localhost:5173 (it opens automatically).

Recommended extension: Vue - Official (Volar).

## Files
- `src/App.vue`  – template + logic (cart, payment, orders, dashboard, AI box)
- `src/data.js`  – product catalogue, categories, SVG illustrations
- `src/style.css` – all styles

Notes: product photos load from loremflickr.com and fall back to the built-in
SVG drawings if offline. "Ask AI" uses a simple local matcher when run outside Claude.
