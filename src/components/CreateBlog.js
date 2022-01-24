import { useState } from "react";

const CreateBlog = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')
  const [enteredSubject, setEnteredSubject] = useState('')
  const [enteredBody, setEnteredBody] = useState('')
  
  const titleChangeHandler = (event) => {
     setEnteredTitle(event.target.value) 
  }

  const authorChangeHandler = (event) => {
     setEnteredAuthor(event.target.value) 
  }

  const subjectChangeHandler = (event) => {
     setEnteredSubject(event.target.value) 
  }

  const bodyChangeHandler = (event) => {
     setEnteredBody(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const blogData = {
      title: enteredTitle,
      author: enteredAuthor,
      subject: enteredSubject,
      body: enteredBody
    }
    console.log(blogData);
    props.onSaveBlogData(blogData);
    setEnteredTitle('');
    setEnteredAuthor('');
    setEnteredSubject('');
    setEnteredBody('');

    fetch("http://localhost:8000/blogs/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blogData)
    }).then(res => res.json());
  }

    return (
      <div className="CreateBlog-root">
          <div className='Create-blog-main-container'>
            <h1>Create New Blog</h1>
            <br/>
          <form className="CreateBlog-form" onSubmit={submitHandler}>
            <label for="blog-title" >Blog Title</label>
            <br/>
            <input id="blog-title" type="text" value={enteredTitle} required onChange={titleChangeHandler} />
            <br/>
            <label for="blog-author">Author</label>
            <br/>
            <input type="text" id="blog-author" value={enteredAuthor} required onChange={authorChangeHandler}/>
            <br/>
            <label for="blog-subject">Subject</label>
            <br/>
            <input id= "blog-subject" type="text" value={enteredSubject} required onChange={subjectChangeHandler}/>
            <br/>
            <label for="blog-content">Blog Content</label>
            <br/>
            <textarea required id="blog-content" rows="4" cols="50" value={enteredBody} onChange={bodyChangeHandler}/>
            <br/>
            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
    );
    }

export default CreateBlog
