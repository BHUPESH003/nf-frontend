import { Home, Bell, Plus, MessageSquare } from "lucide-react";
import React from "react";

const BottomNav: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex items-center justify-around py-2 z-50 lg:hidden">
            <button className="text-black">
                <Home size={24} />
            </button>
            <button className="text-gray-500">
                <Bell size={24} />
            </button>
            <button className="text-gray-500">
                <Plus size={24} />
            </button>
            <div className="relative">
                <MessageSquare size={24} className="text-gray-500" />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">
                    16
                </span>
            </div>
            <img
                src="https://placehold.co/32x32"
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
            />
        </div>
    );
};

export default BottomNav;
