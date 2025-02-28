# Pokémon Search App - Next.js

## 🚀 Project Setup & Installation

### **1. Clone the Repository**

```sh
git clone https://github.com/JP8390/assignment-1.git
cd assignment-1
```

### **2. Install Dependencies**

```sh
yarn install
# or
npm install
```

### **3. Environment Variables Setup**

Create a `.env` file in the root directory and add the required environment variables:

```env
NEXT_PUBLIC_API_BASE_URL=https://pokeapi.co/api/v2
```

### **4. Run the Development Server**

```sh
yarn dev
# or
npm run dev
```

- App will be available at: **`http://localhost:3000`**

---

## 📂 Project Structure
```
📦 pokemon-search-app
├── 📁 src
│   ├── 📁 app
│   │   ├── 📄 layout.tsx
│   │   ├── 📄 page.tsx
│   │   ├── 📁 pokemon
│   │   │   ├── 📁 [id]
│   │   │   │   ├── 📄 page.tsx  # Pokemon details page
│   │   ├── 📄 globals.css
│   ├── 📁 component
│   │   ├── 📁 card
│   │   │   ├── 📄 PokemonCard.tsx
│   │   ├── 📁 layout
│   │   │   ├── 📄 Navbar.tsx
│   │   ├── 📁 pages
│   │   │   ├── 📄 PokemonDetails.tsx
│   │   │   ├── 📄 PokemonCard.tsx
│   │   │   ├── 📄 PokemonList.tsx
│   ├── 📁 hooks
│   │   ├── 📄 usePokemon.ts # Custom hook for fetching Pokémon
│   ├── 📁 utils
│   │   ├── 📄 fetchPokemon.ts # API utility functions
├── 📁 public
│   ├── 🖼️ assets (images, icons, etc.)
├── 📄 .env
├── 📄 .gitignore
├── 📄 eslint.config.mjs
├── 📄 next-env.d.ts
├── 📄 next.config.ts
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.mjs
├── 📄 tailwind.config.js
├── 📄 tsconfig.json
```

---

## 🚀 Features
- 🔍 **Search Pokémon** by name
- 📜 **View detailed stats**, abilities, types
- 📦 **Load more Pokémon** dynamically
- ⚡ **Fast performance with Next.js & TailwindCSS**
- 🏗️ **Server-Side Rendering (SSR) with API Routes**
- 🛠️ **SEO Optimized Metadata** (Open Graph, Twitter Cards)

---


