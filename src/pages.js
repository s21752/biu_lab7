/*
/about

· /services

· /contact

· /contact/us

· /contact/pl

· /contact/de
*/

import {Link, Outlet, useLocation} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About </Link><br/>
                <Link to="services">Services </Link><br/>
                <Link to="contact">Contact </Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h1>[Services]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
            <nav>
                <Link to="pl">PL </Link>
                <Link to="us">US </Link>
                <Link to="de">DE </Link>
            </nav>
            <Outlet />
        </div>
    );
}

export function ContactPl() {
    return (
        <div>
            <h1>[Kontakt polski]</h1>
        </div>
    );
}
export function ContactUs() {
    return (
        <div>
            <h1>[Contact United States]</h1>
        </div>
    );
}
export function ContactDe() {
    return (
        <div>
            <h1>[der Kontakt]</h1>
        </div>
    );
}

export function PageNotFound() {
    let location = useLocation();

    return (
        <div>
            <h1>Nie znaleziono elementu: {location.pathname}</h1>
        </div>
    )
}