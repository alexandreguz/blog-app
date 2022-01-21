import { Link } from "react-router-dom";

const BlogItem = (props) => {
    const {blog} = props
    console.log(blog)
    
    return (  
            <div
                id={`blog-item-${blog.id}`}
                className="BlogItem-root"
                >
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <h3>Writen by: {blog.author}</h3>
                    </Link>
            </div>
        )
    };

export default BlogItem;