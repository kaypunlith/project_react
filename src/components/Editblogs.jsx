import { useEffect, useState } from 'react';
import Editor from 'react-simple-wysiwyg';
import { useForm} from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react'
function Editblogs() {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
    const param= useParams();
    const navigate=useNavigate();
    const [html, setHtml] = useState('');
     const [imageId,setimageid]=useState('');
     const [blog,setoneblogs]=useState('');
    console.log(imageId);
    function onChange(e) {
      // console.log(e.target.value);
       setHtml(e.target.value);
      
    }
    //upload image
      const handeFileChange=async(e)=>{
        const file=e.target.files[0]
        const formdata=new FormData();
        formdata.append("image",file);
        const res=await fetch('http://127.0.0.1:8000/api/save-image/',{
          method:'POST',
          body:formdata
        });
        const result= await res.json();
        console.log(result);
        if(result.status==false){
          alert(result.errors.image);
          e.target.value=null
        }
        setimageid(result.iamge.id);
      }
    const formSubmit= async (data)=>{
      const newdata={...data,"description":html,image_id:imageId}
      const res=await fetch("http://127.0.0.1:8000/api/edidt-blogs/"+param.id,{
          method:"PUT",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(newdata)
      });
      toast("Update data successfiully!");
      navigate('/');
      // console.log(newdata);
    }
    const fectoneblogs= async ()=>{
        const res= await fetch('http://127.0.0.1:8000/api/getoneblogs/'+param.id);
        const result=await res.json();
        setoneblogs(result.data);
        reset(result.data);
        setHtml(result.data.description);
   }
    useEffect(()=>{
        fectoneblogs();
    },[])
  return (
   <>
       <div className="container">
          <div className="d-flex justify-content-between pt-5">
                  <h4>Update Blogs</h4>
                  <a href='/' className='btn btn-dark'>Back</a>
          </div>
           <form onSubmit={handleSubmit(formSubmit)}>
           <div className="card p-3 mt-1">
              <label className='form-label'>Enter Title</label>
              <input
                  {...register('title',{required:true})}
                 type="text" 
                 className='form-control' 
                 placeholder='Enter title' />
                  {errors.title && <p>This field is required</p>}
              <label className='form-label'>short description</label>
              <textarea 
               {...register('shortDes',{required:true})}
                   rows='5' cols='10' 
                   className='form-control' 
                   placeholder='Enter short description'
                   onChange={onChange}
                  // 
                    />
                     {errors.shortDes && <p>This field is required</p>}

              <label className='form-label'>Enter Description</label>
                <Editor  containerProps={{ style: { height: '300px' } }} value={html} onChange={onChange} />   
               <label>Profile</label>
               <input type="file" onChange={handeFileChange}/>
               <label className='form-label'
                 {...register('auther',{required:true})}
               >Auther</label>
               <input
                type="text" 
                {...register('auther',{required:true})}
                className='form-control'
                placeholder='Enter Auther' 
                />
                  {errors.auther && <p>This field is required</p>}
                <br />
               <button  className='btn btn-primary'>Create</button>
          </div>
        
           </form>
      </div>
   </>
  )
}

export default Editblogs