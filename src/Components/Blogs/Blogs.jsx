import { useEffect } from "react";
import { useState } from "react"

function Blogs() {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then (data => setBlogs(data))
    },[]);
    return (
        <div className="md:w-2/3">
            <h1 className="text-xl">Blogs:{blogs.length}</h1>
        </div>
    )
}

export default Blogs