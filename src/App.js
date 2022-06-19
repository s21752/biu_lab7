import './App.css';
import {useRoutes} from "react-router";
import {Home, CalculatorPage, PageNotFound} from "./pages";

export default function App() {
  let element = useRoutes([
    {path: "/", element: <Home/>},
    {path: "add/*", element: <CalculatorPage/>},
    {path: "sub/*", element: <CalculatorPage/>},
    {path: "div/*", element: <CalculatorPage/>},
    {path: "mul/*", element: <CalculatorPage/>},
    {path: "*", element: <PageNotFound/>},
  ]);

  return element;
}