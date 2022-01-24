import { useState } from "react";

const CreateBlog = () => {

  // This way update the state for each field separatelly:
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')
  const [enteredSubject, setEnteredSubject] = useState('')
  const [enteredContent, setEnteredContent] = useState('')

  // -v -> This way update the state for all fields together with an object:
    //  const [blogInput, setBlogInput] = useState({
    //   enteredTitle: '',
    //   enteredAuthor: '',
    //   enteredSubject: '',
    //   enteredContent: ''
    //  })




  // const addBlog = (blogObject) =>
  //   fetch("http://localhost:8000/blogs/", {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(blogObject)
  //   }).then(res => res.json());
  
  const titleChangeHandler = (event) => {
     setEnteredTitle(event.target.value) //-> state from each field separatelly
    
    // -v -> this work but is bad practice 
    // setBlogInput({
    //   ...blogInput,
    //   enteredTitle: event.target.value
    // })

    // -v -> passing a function to update the state
      // setBlogInput((prevState) => {
      //   return {...prevState, enteredTitle: event.target.value}
      // });
  }

  const authorChangeHandler = (event) => {
     setEnteredAuthor(event.target.value) //-> state from each field separatelly
    
    // -v -> this work but is bad practice 
    // setBlogInput({
    //   ...blogInput,
    //   enteredAuthor: event.target.value
    // })
  }

  const subjectChangeHandler = (event) => {
     setEnteredSubject(event.target.value) //-> state from each field separatelly
    
    // -v -> this work but is bad practice 
    // setBlogInput({
    //   ...blogInput,
    //   enteredSubject: event.target.value
    // })
    
  }

  const contentChangeHandler = (event) => {
     setEnteredContent(event.target.value) //-> state from each field separatelly
    
    // -v -> this work but is bad practice 
    // setBlogInput({
    //   ...blogInput,
    //   enteredContent: event.target.value
    // })

  }

  const submitHandler = (event) => {
    event.preventDefault();

    const blogData = {
      title: enteredTitle,
      author: enteredAuthor,
      subject: enteredSubject,
      content: enteredContent
    }
    console.log(blogData);
    setEnteredTitle('');
    setEnteredAuthor('');
    setEnteredSubject('');
    setEnteredContent('');
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
            <textarea required id="blog-content" rows="4" cols="50" value={enteredContent} onChange={contentChangeHandler}/>
            <br/>
            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
    );
    }

export default CreateBlog
