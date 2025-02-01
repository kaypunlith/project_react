import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Blogs from './Blogs';

function BlogsDetail() {
    const [oneblogs,setoneblogs]=useState('');
    const param= useParams();
    const fectoneblogs= async ()=>{
        const res= await fetch('http://127.0.0.1:8000/api/getoneblogs/'+param.id);
        const result=await res.json();
        setoneblogs(result.data);
   }
    useEffect(()=>{
        fectoneblogs();
    },[])
  return (
      <>
         <div className="container mt-2">
         <div className="container d-flex justify-content-between pt-5">
                        <h4>Blogs</h4>
                        <a href='/' className='btn btn-dark'>Back</a>
                    </div>
              <div className="row mt-3">
                  <div className="col-xl-12">
                        <div className="card">
                            <div className='d-flex'>
                                  {
                                    <img src={`http://127.0.0.1:8000/uploads/blogs/${oneblogs.image}`} width={600} height={500}/>
                                   }
                                   <div className="card-body">
                                     <h3> {oneblogs.title}</h3>
                                     <p>{oneblogs.shortDes}</p>
                                     <p>{oneblogs.description}</p>
                                     <p>Creaeby User <b>{oneblogs.auther}</b> </p>
                                     <p>Date {oneblogs.created_at}</p>
                                </div>
                            </div>
                             
                        </div>
                  </div>
              </div>
         </div>
      
      </>
  )
}

export default BlogsDetail;