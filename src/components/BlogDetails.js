import { useParams } from "react-router";
import { useState, useEffect } from "react";

const BlogDetails = () => {
    console.log(useParams())
    const { id } = useParams()

    const [blog, setBlog] = useState([])
    const loadDataById = () => {
        fetch("http://localhost:8000/blogs/" + id)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
            })
    }

    useEffect(() => {
        console.log("useEffect -> blogdetails")
        loadDataById()
    }, [])

    return (
        <div>
            <h1>{blog.title}</h1>
            <h3>Author: { blog.author}</h3>
            <p>{blog.body}</p>
        </div>
    )
};

export default BlogDetails;