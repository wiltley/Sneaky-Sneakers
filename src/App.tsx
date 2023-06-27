import { Navbar} from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import { Collections } from './pages/collections/Collections'
import { ViewDesign } from './pages/view-design/ViewDesign'
import { Cart } from './pages/cart/Cart'
import { Checkout } from './pages/checkout/Checkout'
import { Design } from './pages/design/Design'
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
                        <Route path="/cart" element={<Cart/>}> </Route>
                        <Route path="/checkout" element={<Checkout/>}> </Route>
                        <Route path="/design" element={<Design/>}> </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </>
}


export default App;
