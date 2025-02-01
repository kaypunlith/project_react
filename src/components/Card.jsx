import React from 'react'
import { toast } from 'react-toastify';
function Card(props) {
    const showImage=(img)=>{
        return (img) ? 'http://127.0.0.1:8000/uploads/blogs/'+img : 'https://placehold.co/600x400';
    }
    const DeleteBlogs=(id)=>{
        if(confirm("Do you wnat to delete blogs ")){
            const res=fetch('http://127.0.0.1:8000/api/delete/'+id,{
                method:"DELETE"
            })
            toast("Delete blogs successfully");
        }
    }
    return (
        <>
        {/* <h1>Card</h1> */}
         <div className="col-12 col-md-2 col-lg-3">
            <div className="card border-0 shadow-lg">
                    <img src={showImage(props.Img)} alt="" height={200} />
                    <div className="card-body">
                        <div className='h5'>{props.title}</div>
                        <p>{props.shortDes}</p>
                        <div className='d-flex justify-content-between'>
                            <a href={`/detail/${props.id}`} className='btn btn-dark'>Detail</a>
                            <a href={`/edidt-blogs/${props.id}`} className='btn btn-warning'>
                                  Update
                            </a>
                            <a href="" onClick={()=>DeleteBlogs(props.id)} className='btn btn-danger'>Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card