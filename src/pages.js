import {useLocation} from "react-router-dom";
import Calculator from "./components/Calculator";

export function PageNotFound() {
    let location = useLocation();

    return (
        <div>
            <h1>Nie znaleziono elementu: {location.pathname}</h1>
        </div>
    )
}

export function Home() {
    return (
        <div>
            <h1>Write correct function in web page address path</h1>
        </div>
    )
}

export function CalculatorPage() {
    let location = useLocation();

    return (
        <div>
            <Calculator path={location.pathname} />
        </div>
    )
}