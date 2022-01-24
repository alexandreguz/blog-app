import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import CreateBlog from './components/CreateBlog.js'
import NotFound from "./components/NotFound";
import BlogDetails from "./components/BlogDetails";

const App = () => {

  // this is a customized function to receive data from the child to the parent
  // this is the same idea from taking data from html components to our components
  // we create a function (customized) that will run in the component child
  // inside the component father. In this case runs in CreateBlog component inside the App component
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
