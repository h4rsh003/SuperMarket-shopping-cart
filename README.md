<div align="center">

# 🛒 SuperMarket - Modern Redux Shopping Cart
### Production-ready E-commerce interface with real-time state management.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://super-market-shopping-cart.vercel.app/)
[![React](https://img.shields.io/badge/React_18-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux_Toolkit-593d88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Experience a seamless, interactive shopping journey with persistent cart logic.**

</div>

---

### 📖 Overview
**SuperMarket** is a highly interactive e-commerce shopping cart system built using **React.js** and **Redux Toolkit**. It features a premium UI and production-ready state management to handle complex user interactions across all devices.

---

### ✨ Key Features

- **🎨 Modern UI/UX:** A clean, responsive interface featuring glassmorphism effects and smooth micro-interactions.
- **📱 Responsive Architecture:** Optimized for mobile, tablet, and desktop with custom grid layouts and a responsive navigation menu.
- **💾 State Persistence:** Engineered persistent cart logic using **localStorage**, ensuring user items are retained across sessions and page refreshes.
- **⚡ Real-Time Updates:** Delivered a fast experience with real-time calculations for order totals and item counts.
- **🔔 Interactive Notifications:** Integrated **React Hot Toast** for beautiful success and error notifications during cart actions.
- **🕸️ Sticky Layout:** Smart cart page design featuring a sticky summary box for an effortless checkout experience.

---

### 🛠️ Tech Stack

| **Frontend** | **State Management** | **Styling & Icons** |
| :--- | :--- | :--- |
| **React.js (v18)** | **Redux Toolkit** | **Tailwind CSS** |
| **React Router DOM v6** | **Local Storage API** | **Lucide React** |
| **FakeStore API** | **Redux Slices** | **React Hot Toast** |

---

### 📂 Folder Structure

```text
src/
├── components/
│   ├── Navbar.js       # Responsive glassmorphism header
│   ├── Product.js      # Interactive product card with hover states
│   ├── CartItem.js     # Optimized cart row with quantity controls
│   └── Spinner.js      # Custom neon loading animation
├── pages/
│   ├── Home.js         # Product feed with dynamic API fetching
│   └── Cart.js         # Cart management with sticky summary
├── redux/
│   └── slices/
│       └── CartSlice.js # Redux logic for add/remove and persistence
├── App.js              # Layout and Route definitions
└── index.js            # Entry point with Toaster configuration

```

---

### ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone [https://github.com/h4rsh003/SuperMarket-shopping-cart.git](https://github.com/h4rsh003/SuperMarket-shopping-cart.git)
cd SuperMarket-shopping-cart

```


2. **Install dependencies**
```bash
npm install

```


3. **Start the development server**
```bash
npm start

```


The app will launch at `http://localhost:3000`.

---

### 🔮 Future Roadmap

* [ ] Implement User Authentication (Firebase/JWT).
* [ ] Integrate a Payment Gateway (Stripe).
* [ ] Add Category-based Filtering and Search.
* [ ] Develop a "Wishlist" feature for saving items.

---

### 👨‍💻 Author

**Harsh Shrivastava** * **GitHub:** [@h4rsh003](https://github.com/h4rsh003)

* **LinkedIn:** [Harsh Shrivastava](https://www.linkedin.com/in/harsh-shrivastava003)

---

<p align="center">Made with ❤️ by Harsh Shrivastava</p>
