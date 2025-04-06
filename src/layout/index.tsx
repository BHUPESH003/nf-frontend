import useWindowWidth from "src/hooks/useWindowWidth";
import BottomNav from "./bottomnav";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const isCollapsed = useWindowWidth() < 1024;
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Sidebar (left column) */}
            <div
                className={`hidden md:block ${isCollapsed ? "w-16" : "w-64"}  text-white min-h-screen`}
            >
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
