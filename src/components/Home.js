import { useState, useEffect } from "react";
import BlogItem from './BlogItem'

const Home = () => {

    const [blogs, setBlogs] = useState([])
    const loadData = () => {
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }

    useEffect(() => {
        console.log("useEffect -> home")
        loadData()
    }, [])

    return (
        <div className="Home-root">
            <br />
            <h1>home</h1>
            <h2>Here is the list of Blogs</h2>
            <div>
                {
                    blogs.map(blog => {
                        return <BlogItem key={`blog-item -${blog.id}`} blog={blog}/>
                    })
                }
            </div>
        </div>
    );
}

export default Home