import './App.css';
import {useRoutes} from "react-router";
import {About, Contact, ContactDe, ContactPl, ContactUs, Home, PageNotFound, Services} from "./pages";

export default function App() {
    let element = useRoutes([
        {path: "/", element: <Home/>},
        {path: "about", element: <About/>},
        {path: "services", element: <Services/>},
        {
            path: "contact", element: <Contact/>, children: [
                {path: "pl", element: <ContactPl/>},
                {path: "us", element: <ContactUs/>},
                {path: "de", element: <ContactDe/>},
            ]
        },
        {path: "*", element: <PageNotFound/>}
    ]);

    return element;
}

