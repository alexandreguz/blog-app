import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import CreateBlog from './components/CreateBlog.js'
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
        <div className="App-root">
          <Navbar />
          <div className='app-content'>
            <Routes>
               <Route exact path="/" element={ <Home />} />
               <Route exact path="/home" element={ <Home />} />
               <Route exact path="/createblog" element={ <CreateBlog /> } />
               <Route path="*" element={ <NotFound />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
