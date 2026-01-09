import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Bell,
  Settings,
  LogOut,
  ArrowLeft,
  CreditCard,
  User,
  Lock,
  Moon,
  Menu, // Ku dar halkan
  X, // Ku dar halkan
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Dashboard() {
  const { user, logout, updateUser } = useAuth();
  const { totalItems, totalPrice, orders } = useCart();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  // --- 1. STATE-KA MOBILE MENU ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- 2. SETTINGS STATE ---
  const [darkMode, setDarkMode] = useState(true);
  const [profileData, setProfileData] = useState({
    name: user?.name || "cimran",
    email: user?.email || "cimran@gmail.com",
    currentPassword: "",
    newPassword: "",
  });

  // --- 3. DARK MODE LOGIC ---
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSave = () => {
    const updatedData = {
      ...user,
      name: profileData.name,
      email: profileData.email,
    };
    updateUser(updatedData);
    alert("Profile-kaaga waa la cusboonaysiiyay!");
  };

  const totalSpent = orders?.reduce((sum, order) => sum + order.amount, 0) || 0;

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "orders", label: "Orders", icon: Package },
    { id: "cart", label: "Cart", icon: ShoppingCart, badge: totalItems },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-slate-950 flex flex-col md:flex-row text-slate-600 dark:text-slate-400 font-sans transition-colors duration-300">
      {/* --- MOBILE HEADER (Kaliya mobile-ka ayaa arki kara) --- */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/5 sticky top-0 z-50">
        <h2 className="font-black text-slate-900 dark:text-white text-xl">
          ElectroHub
        </h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-slate-100 dark:bg-white/5 rounded-lg text-slate-600 dark:text-white"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- SIDEBAR (Responsive Logic) --- */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-white/5 flex flex-col p-4 transition-transform duration-300 transform
        md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }
      `}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-all mb-4"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "cart") navigate("/cart");
                else {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false); // Xir sidebar-ka markii la gujiyo mobile-ka
                }
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                  : "hover:bg-slate-50 dark:hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {item.badge > 0 && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    activeTab === item.id
                      ? "bg-white text-sky-500"
                      : "bg-sky-100 text-sky-500"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-all border-t border-slate-100 dark:border-white/5 pt-4"
        >
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* OVERLAY: Marka sidebar-ka mobile-ka uu furan yahay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto text-left">
        <header className="mb-8 mt-2 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white capitalize">
            {activeTab} Page
          </h1>
          <p className="text-slate-500 mt-1 text-sm md:text-base">
            Welcome back, {user?.name || "cimran"}! Here is your account
            overview.
          </p>
        </header>

        {activeTab === "dashboard" ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
              <StatCard
                icon={Package}
                color="bg-blue-500"
                label="Total Orders"
                value={orders?.length || 0}
              />
              <StatCard
                icon={ShoppingCart}
                color="bg-emerald-500"
                label="Items in Cart"
                value={totalItems}
              />
              <StatCard
                icon={CreditCard}
                color="bg-sky-500"
                label="Total Spent"
                value={`$${totalSpent}`}
              />
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden mb-8 shadow-sm">
              <div className="p-6 border-b border-slate-100 dark:border-white/5 flex justify-between items-center text-slate-900 dark:text-white font-bold text-left">
                Recent Orders
              </div>
              <div className="overflow-x-auto">
                {orders && orders.length > 0 ? (
                  <OrdersTableMarkup orders={orders.slice(0, 5)} />
                ) : (
                  <EmptyState />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <ActionCard
                icon={ShoppingCart}
                color="bg-sky-500"
                title="Continue Shopping"
                desc="Browse our latest electronics."
                onClick={() => navigate("/products")}
              />
              <ActionCard
                icon={Package}
                color="bg-emerald-500"
                title="Track Your Shipments"
                desc="Check delivery status."
                onClick={() => setActiveTab("orders")}
              />
            </div>
          </>
        ) : activeTab === "orders" ? (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-white/5 font-bold text-slate-900 dark:text-white text-lg text-left">
              Your Full Order History
            </div>
            <div className="overflow-x-auto">
              {orders && orders.length > 0 ? (
                <OrdersTableMarkup orders={orders} />
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        ) : activeTab === "settings" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-500">
            {/* Profile & Security Card */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <User className="text-sky-500" size={20} />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Profile & Security
                </h3>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) =>
                        setProfileData({ ...profileData, name: e.target.value })
                      }
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-white/5 rounded-xl mt-2 border border-slate-100 dark:border-white/5 outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          email: e.target.value,
                        })
                      }
                      className="w-full text-sm p-3 bg-slate-50 dark:bg-white/5 rounded-xl mt-2 border border-slate-100 dark:border-white/5 outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div className="pt-2 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock size={14} className="text-slate-400" />
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Change Password
                    </span>
                  </div>
                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-white/5 rounded-xl mb-3 border border-slate-100 dark:border-white/5 focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full text-sm p-3 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 focus:ring-1 focus:ring-sky-500 outline-none"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-500/20 transition-all active:scale-[0.98]"
                >
                  Save Changes
                </button>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-8 text-left">
                System Preferences
              </h3>
              <div className="flex items-center justify-between p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-4 text-left">
                  <Moon size={20} className="text-sky-500" />
                  <div>
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      Dark Mode
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Switch app appearance
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full transition-all flex items-center px-1 ${
                    darkMode ? "bg-sky-500" : "bg-slate-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      darkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-20 text-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-white/10">
            {activeTab} content is coming soon...
          </div>
        )}
      </main>
    </div>
  );
}

// --- HELPER COMPONENTS (Waa siday ahaayeen) ---
function OrdersTableMarkup({ orders }) {
  return (
    <table className="w-full text-left text-sm">
      <thead className="bg-slate-50 dark:bg-white/5 text-[10px] uppercase font-bold text-slate-400">
        <tr>
          <th className="px-6 py-4">Order ID</th>
          <th className="px-6 py-4">Status</th>
          <th className="px-6 py-4">Date</th>
          <th className="px-6 py-4 text-right">Amount</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-white/5">
        {orders.map((o) => (
          <tr
            key={o.id}
            className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
          >
            <td className="px-6 py-4 text-sky-500 font-bold">{o.id}</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 uppercase">
                {o.status}
              </span>
            </td>
            <td className="px-6 py-4 text-slate-500">
              {o.date || "2024-03-21"}
            </td>
            <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">
              ${o.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function EmptyState() {
  return (
    <div className="p-16 text-center text-slate-400">
      <Package size={40} className="mx-auto mb-4 opacity-20" />
      <p className="font-medium">No orders yet.</p>
    </div>
  );
}

function StatCard({ icon: Icon, color, label, value }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm text-left">
      <div
        className={`w-10 h-10 ${color}/10 rounded-xl flex items-center justify-center mb-4`}
      >
        <Icon className={color.replace("bg-", "text-")} size={20} />
      </div>
      <p className="text-xs font-medium text-slate-400">{label}</p>
      <p className="text-2xl font-black text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function ActionCard({ icon: Icon, color, title, desc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group"
    >
      <div
        className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}
      >
        <Icon size={24} />
      </div>
      <h4 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
      <p className="text-xs text-slate-400">{desc}</p>
    </button>
  );
}
