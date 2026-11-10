# LEBCO Website - Client Guide & Instructions

Welcome to the **LEBCO Website** project source code. This document explains how to set up the project locally and edit any content or products.

---

## 1. Quick Start (Running Locally)

### Prerequisites
Make sure [Node.js](https://nodejs.org/) (version 18 or higher) is installed on your computer.

### Steps to Run
1. Open a terminal or command prompt inside this project folder.
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

---

## 2. How to Edit Website Content

### A. Products & Catalogue Information
All product details, specifications, prices, descriptions, images, and category assignments are managed in a single central file:
👉 **`src/data/products.ts`**

- **Change Product Name / Description**: Update `name`, `cardSummary`, or `description`.
- **Edit Specifications**: Update the `specifications` array for any product.
- **Edit Dimensions / Sizes**: Update the `variantsTables` grid.
- **Change Business Contact Details**: Update `businessInfo` at the top of `src/data/products.ts` (Phone, WhatsApp, Email, Address, Business Hours).

### B. Pages
- **Home Page**: `src/routes/index.tsx` (Hero banner, badges, featured products, why LEBCO points).
- **About Page**: `src/routes/about.tsx` (Company information, applications).
- **Contact Page**: `src/routes/contact.tsx` (Contact form, contact cards).
- **Products Catalog**: `src/routes/products.index.tsx` (Category filter chips, grid layout).
- **Product Detail Template**: `src/components/site/ProductDetail.tsx` (Layout and sections for product detail pages).

### C. Images & Media
- Product images: `src/assets/products/<product-slug>/`
- Hero images & logos: `src/assets/hero/` and `public/assets/`

---

## 3. Building for Production

When you are ready to deploy to production (Netlify, Vercel, or any static hosting):
```bash
npm run build
```
This generates the optimized production build ready for deployment.
