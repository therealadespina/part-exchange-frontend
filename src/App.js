import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./application/navigation/Menu"

export default function App() {
    return <BrowserRouter basename={"/"}>
        <Routes>
            <Route exact path='*' element={<Menu/>}/>
        </Routes>
    </BrowserRouter>
}

