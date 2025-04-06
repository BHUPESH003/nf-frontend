import React from "react";
import {
    Home,
    Bell,
    MessageCircle,
    Star,
    Users,
    CreditCard,
    User,
    MoreHorizontal,
    Plus,
} from "lucide-react";

const Sidebar: React.FC = () => {
    const navItems = [
        { icon: <Home size={20} />, label: "Home" },
        { icon: <Bell size={20} />, label: "Notifications" },
        { icon: <MessageCircle size={20} />, label: "Messages", badge: 15 },
        { icon: <Star size={20} />, label: "Collections" },
        { icon: <Users size={20} />, label: "Subscriptions" },
        { icon: <CreditCard size={20} />, label: "Add card" },
        { icon: <User size={20} />, label: "My profile" },
        { icon: <MoreHorizontal size={20} />, label: "More" },
    ];

    return (
        <aside className="flex flex-col w-64 min-h-screen p-4 border-r bg-white text-gray-700">
            <div className="flex items-center space-x-3 mb-6">
                <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="rounded-full w-10 h-10"
                />
            </div>

            <nav className="flex flex-col gap-4 flex-1">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between group hover:text-blue-500 cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            {item.icon}
                            <span className="hidden lg:block">
                                {item.label}
                            </span>
                        </div>
                        {item.badge && (
                            <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-0.5 text-center">
                                {item.badge}
                            </span>
                        )}
                    </div>
                ))}
            </nav>

            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition">
                <Plus size={18} />
                <span className="hidden lg:block">New Post</span>
            </button>
        </aside>
    );
};

export default Sidebar;
