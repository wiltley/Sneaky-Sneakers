import { Navbar} from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import { Collections } from './pages/collections/Collections'
import { ViewDesign } from './pages/view-design/ViewDesign'
import { Cart } from './pages/cart/Cart'
import { Checkout } from './pages/checkout/Checkout'
import { Design } from './pages/design/Design'
import { About } from './pages/about/About';
import { Community } from './components/community/Community'
import { ViewDesignCustom } from './pages/view-design/ViewDesignCustom'
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
                        <Route path="/viewdesign/:shoeId" element={<ViewDesign customId={-1}/>}> </Route>
                        <Route path="/cart" element={<Cart/>}> </Route>
                        <Route path="/checkout" element={<Checkout/>}> </Route>
                        <Route path="/design/:shoeId/:shoeSize/:customId?" element={<Design/>}> </Route>
                        <Route path="/about" element={<About/>}> </Route>
                        <Route path="/community" element={<Community/>}> </Route>
                        <Route path="/viewdesign-custom/:shoeId/:customId?" element={<ViewDesignCustom/>}> </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </>
}


export default App;
