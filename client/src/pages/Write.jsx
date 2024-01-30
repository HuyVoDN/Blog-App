import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
        
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" name="" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input type="radio" name="cat" id="art" value="art"/>
          <label htmlFor="art">ART</label>
          <input type="radio" name="cat" id="science" value="science"/>
          <label htmlFor="science">Science</label>
          <input type="radio" name="cat" id="tech" value="tech"/>
          <label htmlFor="tech">Technology</label>
          <input type="radio" name="cat" id="cinema" value="cinema"/>
          <label htmlFor="cinema">Cinema</label>
          <input type="radio" name="cat" id="design" value="design"/>
          <label htmlFor="design">Design</label>
          <input type="radio" name="cat" id="food" value="food"/>
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  )

}

export default Write