import React,{useEffect} from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';
import Live from './Live'
import {Link} from "react-router-dom"

export default function Form(props) {
    let allowed = false;
    // useEffect(()=>{
    //     props.GetDataValue(allowed)
    // })
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // video link : https://www.youtube.com/watch?v=FY8sXCsjvf8&t=30s
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn' onClick={()=>{props.GetDataValue(true)}}><Link to="http://localhost:3000/Live" target="_blank">Signup</Link></button>
                </form>
                {/* {allowed&&<Live></Live>} */}

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}