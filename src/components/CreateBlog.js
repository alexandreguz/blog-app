import { useState } from "react";

const CreateBlog = () => {

  // const [input, setInput] = useState('')
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')


  // const addBlog = (blogObject) =>
  //   fetch("http://localhost:8000/blogs/", {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(blogObject)
  //   }).then(res => res.json());
  


    return (
      <div className="CreateBlog-root">
          <div className='Create-blog-main-container'>
            <h1>Create New Blog</h1>
            <br/>
          <form className="CreateBlog-form">
            <label for="blog-title">Blog Title</label>
            <br/>
            <input id="blog-title" type="text" required  />
            <br/>
            <label for="blog-author">Author</label>
            <br/>
            <input type="text" id="blog-author" required />
            <br/>
            <label for="blog-subject">Subject</label>
            <br/>
            <input id= "blog-subject" type="text" required />
            <br/>
            <label for="blog-content">Blog Content</label>
            <br/>
            <textarea required id="blog-content" rows="4" cols="50" />
            <br/>
            <button>Submit</button>
          </form>
          </div>
        </div>
    );
    }

export default CreateBlog
