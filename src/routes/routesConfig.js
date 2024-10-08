import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Today from "../pages/Today.jsx";
import App from "../App.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Auth from "../pages/Auth.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "/today",
                element : <Today/>
            },
            
        ]
    },
    {
        path : "/auth/",
        element : <Auth/>,
        children : [
            {
                path : "login/",
                element : <LoginForm/>
            },
            {
                path : "register/",
                element : <RegisterForm/>
            },
        ]
    },
    {
        path: '*',
        element: <h1>404 - Page Not Found</h1>,
    }
]);

export default router; 