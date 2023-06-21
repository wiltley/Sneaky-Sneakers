import { Navbar} from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import { Collections } from './pages/collections/Collections'
import { ViewDesign } from './pages/view-design/ViewDesign'
import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <>
        <div className="app">
            <div>
                <Navbar />
            </div>
            <div>
                <BrowserRouter >
                    <Routes>
                        <Route path="/" element={<Home/>}> </Route>
                        <Route path="/collections" element={<Collections/>}> </Route>
                        <Route path="/viewdesign" element={<ViewDesign/>}> </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </>
}


export default App;
