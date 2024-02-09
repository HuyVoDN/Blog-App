import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState('');

  const handleClick = async e => {
    e.preventDefault();


  };

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} />
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
          <input style={{ display: "none" }} type="file" name="" id="file" onChange={e => setImg(e.target.files[0])} />
          <label htmlFor="file" className='file'>Upload Image</label>
          <div className="buttons">
            <button className='save-btn'>Save as a draft</button>
            <button onClick={handleClick} className='update-btn'>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>

          <div className='cat'>
            <input type="radio" name="cat" id="art" value="art" onChange={e => setCat(e.target.value)}/>
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="science" value="science" onChange={e => setCat(e.target.value)} />
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="tech" value="tech" onChange={e => setCat(e.target.value)}/>
            <label htmlFor="tech">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="cinema" value="cinema" onChange={e => setCat(e.target.value)}/>
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="design" value="design" onChange={e => setCat(e.target.value)}/>
            <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" id="food" value="food" onChange={e => setCat(e.target.value)}/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Write