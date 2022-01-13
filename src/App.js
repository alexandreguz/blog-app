import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import CreateBlog from './components/CreateBlog.js'

const App = () => {
  return (
    <BrowserRouter>
         <div className="App-root">
            <Navbar />
            <div className='app-content'>
              <Routes>
                 <Route path="/home" element={ <Home />} />
                 <Route path="/createblog" element={ <CreateBlog /> } />
              </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
