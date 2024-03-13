import { useEffect } from "react";
import { useState } from "react"
import Blog from './../Blog/blog';
import { PropTypes } from 'prop-types';
function Blogs({handleAddToBookmark}) {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=> res.json())
        .then (data => setBlogs(data))
    },[]);
    return (
        <div className="md:w-2/3">
            <h1 className="text-xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog=> <Blog
                key={blog.id}
                blog={blog}
                handleAddToBookmark={()=>handleAddToBookmark(blog)}
                ></Blog>)
            }
        </div>
    )
}


export default Blogs
