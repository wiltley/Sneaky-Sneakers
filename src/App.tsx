import { Navbar} from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import "./App.css";

function App() {
  return <>
        <div className="app">
            <div>
                <Navbar />
            </div>
            <div>
                <Home/>
            </div>
        </div>
    </>
}

export default App;
