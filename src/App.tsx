import React from 'react';
import { RouterProvider } from "react-router-dom";
import { NotificationProvider } from './providers/NotificationProvider';
import router from "./routes/index";


const App: React.FC = () => {
    return (
        <NotificationProvider>
            <RouterProvider router={router} />
        </NotificationProvider>
    );
};

export default App;
