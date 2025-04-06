import BottomNav from "./bottomnav";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Sidebar (left column) */}
            <div className="hidden md:block md:w-64 text-white min-h-screen p-6">
                <Sidebar />
            </div>

            {/* Main content area */}
            <div className="flex-1 w-full md:w-auto p-4 pb-20 md:pb-4">
                {children}
            </div>

            {/* Bottom navigation for small screens */}
            <div className="fixed bottom-0 w-full md:hidden z-50">
                <BottomNav />
            </div>
        </div>
    );
};

export default Layout;
