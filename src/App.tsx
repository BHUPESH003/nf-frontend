import React from "react";
import { RouterProvider } from "react-router-dom";
import { NotificationProvider } from "./providers/NotificationProvider";
import router from "./routes/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <JotaiProvider>
            <QueryClientProvider client={queryClient}>
                <NotificationProvider>
                    <RouterProvider router={router} />
                </NotificationProvider>
            </QueryClientProvider>
        </JotaiProvider>
    );
};

export default App;
