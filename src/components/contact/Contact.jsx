import './contact.css'
import photo2 from '../../assets/meetnew.png'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()
  const [success,setSuccess]=useState(null)

  useEffect(()=>{
    success && setTimeout(()=>setSuccess(null),4000)
  },[success])

const handleSubmit=(e)=>{
  e.preventDefault();
  emailjs.sendForm('service_tyraj83', 'template_09hmefi', form.current, 'z5T_0h95xtZxsjzPD')
  .then((result) => {
      console.log(result);
      setSuccess('I have recieved your message and will get to you asap :)')
  }, (error) => {
      console.log(error.text);
      setSuccess(false)
  });
  }


  return (

   <div className="contact" id="contact">
<div className="picture">
  <img src={photo2} alt="" />
</div>


<div className="form" onSubmit={handleSubmit}>
  <form ref={form} className="formcontainer">

  <Heading>Contact.</Heading>
  <input type="text" name="name" id="" required placeholder='Your name'/>
<input type="email" name="email" id="" required placeholder='Email'/>
<textarea required name="message" id="" cols="30" rows="8" type='text' placeholder='Message'></textarea>
<button type='submit'>Send</button>

<span>{success}</span>
  </form>

</div>




   </div>
  )
}

export default Contact

const Heading = styled.h1`
   text-align: center;
   
   font-family: 'Syne';
   color: white;
   font-weight: 500;
   font-size: 4.5rem;
`