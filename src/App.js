import React from 'react';
import Home from './pages/home/Home.jsx';
import Error from './pages/error/Error.jsx';
import Logement from './pages/logement/Logement.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                {/* <Route path='*' element={<Home />}/> */}
                <Route path="/" element={<Home />}/>
                <Route path="/Error" element={<Error />}/>
                <Route path="/Logement" element={<Logement />}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App