# 🛒 Modern E-Commerce Platform & User Dashboard

A high-performance, fully responsive E-commerce web application built with **React.js** and **Tailwind CSS**. This platform features a dynamic user dashboard, a persistent shopping cart system, and real-time profile management.

## 🚀 Key Features

### 👤 User Authentication & Profile
* **Secure Authentication:** Integrated Login/Logout system using React Context API.
* **Real-time Profile Sync:** Updates made in the Dashboard (Name/Email) reflect instantly across the **Navbar** and other components without page refreshes.
* **Persistence:** User sessions and profile data are saved in `LocalStorage` to maintain state after refresh.

### 🛍️ Shopping Experience
* **Product Catalog:** Beautifully designed product grid with category filtering.
* **Product Details:** Dedicated pages for in-depth product information, pricing, and descriptions.
* **Advanced Cart System:** Managed via `CartContext`, allowing users to add/remove items, update quantities, and view real-time price totals.

### 📊 Powerful User Dashboard
* **Order Tracking:** A dedicated Orders section to view full purchase history, dates, and delivery status.
* **Account Management:** Comprehensive settings for updating profile information and security (Password change).
* **System Preferences:** Toggle between **Dark Mode** and Light Mode with a persistent UI state.

### ℹ️ Informational Pages & Support
* **About Us:** Insightful page regarding the company mission and values.
* **FAQ Page:** An interactive Frequently Asked Questions section to provide instant customer support.
* **Contact Support:** Integrated contact channels for direct user inquiries.

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Core Frontend Library |
| **Tailwind CSS** | Utility-first CSS for Modern Styling |
| **Lucide React** | Premium Icon Set |
| **Context API** | Global State Management (Auth & Cart) |
| **React Router** | Client-side Navigation |

## 📥 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI (Navbar, Sidebar, StatCards)
├── context/        # Global State (AuthContext, CartContext)
├── pages/          # Home, Shop, Dashboard, ProductDetails, About, FAQ
├── hooks/          # Custom React Hooks
└── App.jsx         # Main Router & Provider Setup