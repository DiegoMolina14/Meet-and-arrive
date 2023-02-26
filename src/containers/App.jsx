import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "../pages/Login"
import Registro from '../pages/Registro';

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/Formlogin" element={<Login/>}/>
                <Route path="/FormRegistro" element={<Registro/>}/>       
            </Routes>
        </BrowserRouter>
     );
}

export default App;