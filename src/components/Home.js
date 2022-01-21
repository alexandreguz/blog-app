import { useState, useEffect } from "react";
import  BlogItem  from './BlogItem'

const Home = () => {

    // test to show infinit loop thats why we need to make something that just update once -> useEffect

    // const [test,setTest] = useState(null)

    // const testFun = () => {
    //     console.log(`%c test`, "color:blue")
    //     setTest(1)
    // }
    // testFun()


    // To DO - 1 : state
   

    // Mock data to test before request to server
    // const [blogs,setBlogs] = useState([
    //     {
    //         id: 1,
    //         title: "My first blog",
    //         body: "Leaning React witha bit of back-end. And Now wkcnwinccn",
    //         autor: "Moshe"
    //     },
    //     {
    //         id: 2,
    //         title: "My second blog",
    //         body: "Leaning React witha bit of back-end. And Now wkcnwinccn",
    //         autor: "Moshe"
    //     }
    // ])

    // To DO: http request to json-server

    const [blogs,setBlogs] = useState([])
    const loadData = () => {
        fetch("http://localhost:8000/blogs")
        .then(res => res.json())
        .then(data => {
            // console.table(data)
            setBlogs(data)
        })
    }

    useEffect(()=> {
            console.log("useEffect -> home")
        loadData()
    }, [])

    // To do load data once first time amount

    return (
      <div className="Home-root">
          <br/>
          <h1>home</h1>
          <h2>Here is the list of Blogs</h2>

          {/* // To DO - 2: list with map*/}
          
         <div>

            {
                 blogs.map(blog => {
                    return  <BlogItem key={`blog-item -${blog.id}`} blog={blog} />
                 })
            }
            
         </div>
            {/* <button onClick={loadData}>Load data from DB server</button> */}
      </div>
    );
  }

export default Home