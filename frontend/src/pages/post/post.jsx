import React from 'react'
import "./post.css"
import axios from "axios";

const Post = () => {

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    await axios.post("http://localhost:5001/recipe", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    alert("Recipe Added Successfully");
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <div className='post'>
      <h1>Share My Recipe</h1> 

    <form onSubmit={handleSubmit}>
      <input type="file" name="image" required />
      <input type="text" name="name" placeholder="Name of the dish" required />
      <textarea name="description" placeholder="Description" required />

      <div className="button">
        <button type="reset">Cancel</button>
        <button type="submit">Post</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Post
