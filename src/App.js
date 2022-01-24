import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import CreateBlog from './components/CreateBlog.js'
import NotFound from "./components/NotFound";
import BlogDetails from "./components/BlogDetails";

const App = () => {

  const saveBlogDataHandler = (enteredBlogData) => {
    const blogData ={
      ...enteredBlogData,
    }
    console.log(blogData)
  }

  return (
    <BrowserRouter>
        <div className="App-root">
          <Navbar />
          <div className='app-content'>
            <Routes>
               <Route exact path="/" element={ <Home />} />
               <Route exact path="/home" element={ <Home />} />
               <Route exact path="/createblog" element={ <CreateBlog onSaveBlogData={saveBlogDataHandler}/> } />
               <Route exact path="/blogs/:id" element={ <BlogDetails/> } />
               <Route path="*" element={ <NotFound />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
