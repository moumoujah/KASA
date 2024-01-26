import React from 'react';
import Home from './pages/home/Home.jsx';
import Error from './pages/error/Error.jsx';
import Logement from './pages/logement/Logement.jsx';
import About from './pages/about/About.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
                {/* <Route path='*' element={<Home />}/> */}
                <Route path="*" element={<Error />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/logement/:id" element={<Logement />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App