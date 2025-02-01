import React from 'react'
import Card from './Card'
import { useEffect, useState } from 'react'
function Blogs() {
    const [blogs,setblogs]=useState([]);
    const fectallblogs= async ()=>{
        const res= await fetch('http://127.0.0.1:8000/api/getblogs');
        const result=await res.json();
        setblogs(result.data);
   }
    useEffect(()=>{
       fectallblogs();
    },[])
    return (
        <>
            <div className="container mt-">
                <div className="container d-flex justify-content-between pt-5">
                        <h4>Blogs</h4>
                        <a href='/create' className='btn btn-dark'>Create</a>
                    </div>
                    <div className="row g-3 mt-3">
                        {
                          (blogs) && blogs.map((b)=>(
                           
                             <Card id={b.id} title={b.title} sortDes={b.sortDes} shortDes={b.shortDes} Img={b.image}/>
                          ))
                        // <Card/>
                          
                        }
                       
                        
                

                    </div>
            </div>
        </>
    )
}

export default Blogs