import { useParams} from "react-router";
import { useState, useEffect } from "react";
const BlogDetails = () => {
    
    //get id from url
    const {id} = useParams()
    console.log(id)
    
    const [blog,setBlog] = useState([])
    const loadData = () => {
        fetch("http://localhost:8000/blogs/" + id)
        .then(res => res.json())
        .then(data => {
            setBlog(data)
        })
    }

    useEffect(()=> {
        console.log("useEffect -> blogdetails")
        loadData()
}, [])


//http request from server





// mock data ----
// let id = 1
let b = {
    title: "Title",
    body: "body",
    author: "author"
}
// ---------------

    return (  
            <div>
                <h1>{blog.title}</h1>
                <h3>Author: {blog.author}</h3>
                <p>{blog.body}</p>
            </div>
        )
    };

export default BlogDetails;