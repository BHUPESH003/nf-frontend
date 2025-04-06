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
import { Button } from "src/components/common/button";
import useWindowWidth from "src/hooks/useWindowWidth";

const Sidebar: React.FC = () => {
    // For demo: hardcoded to collapsed
    const isCollapsed = useWindowWidth() < 1024;

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
        <aside
            className={`flex flex-col ${
                isCollapsed ? "w-16" : "w-64"
            } min-h-screen md:p-4 border-r bg-white text-gray-700 transition-all duration-300`}
        >
            {/* Top Avatar */}
            <div
                className={`flex items-center ${
                    isCollapsed ? "justify-center" : "space-x-3"
                } mb-6`}
            >
                <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="rounded-full w-10 h-10"
                />
                {!isCollapsed && <span className="font-medium">Username</span>}
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-4 flex-1">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center ${
                            isCollapsed ? "justify-center" : "justify-between"
                        } group hover:text-blue-500 cursor-pointer`}
                    >
                        {/* Icon + Badge wrapper */}
                        <div
                            className={`relative flex items-center ${
                                isCollapsed ? "justify-center" : "gap-3"
                            }`}
                        >
                            {/* Icon with badge */}
                            <div className="relative">
                                {item.icon}
                                {item.badge && (
                                    <span className="absolute -top-1 -right-1 text-[9px] bg-[var(--blue)] text-white rounded-full px-1 py-0.5 leading-none shadow">
                                        {item.badge}
                                    </span>
                                )}
                            </div>

                            {/* Label */}
                            {!isCollapsed && (
                                <span className="hidden lg:block">
                                    {item.label}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Button */}
            <Button
                className={`flex items-center ${
                    isCollapsed ? "justify-center" : "justify-evenly"
                } px-2`}
            >
                <Plus size={18} />
                {!isCollapsed && (
                    <span className="hidden lg:block">New Post</span>
                )}
            </Button>
        </aside>
    );
};

export default Sidebar;
