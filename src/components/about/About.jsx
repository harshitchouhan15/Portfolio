import './about.css'
import {useSelector, useDispatch} from "react-redux"
import styled from 'styled-components'
import React, { useEffect, useRef, useState } from 'react'
import {toggleTheme,exitDarkmode} from "../../redux/themeRedux"


const About = () => {
  const darkMode  =useSelector(state=>state.theme)
  const ref = useRef()
  const dispatch=useDispatch()
  const [isVisible,setIsVisible]= useState(false)
  useEffect(()=>{
    const options={
        root:null,
        margin:'0px',
        threshold:0.4
    }

    const intersection = (entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
              setIsVisible(true)
              dispatch(exitDarkmode())
            }else{
              setIsVisible(false)
            }
        })
    }

    const observer = new IntersectionObserver(intersection,options)

    observer.observe(ref?.current)

    return ()=>observer.disconnect()
},[])
  return (
    <div ref={ref} className="about" id="about">
      <div className="circle">
      <Heading darkMode={darkMode}>About me</Heading>
      </div>  
      < Container darkMode={darkMode} >
        <p className={isVisible?'showPara':'para'}>Hello! I'm Harshit Chouhan, a passionate and creative React developer with a love for building interactive web
           experiences. I thrive on turning ideas into beautifully designed and functional websites that leave a lasting impression.</p>
        <p className={isVisible?'showPara':'para'}>I'm driven by the desire to create meaningful digital experiences that
           solve real-world problems. I believe that a well-designed website has the power to engage, inform, and inspire users.</p>
        <p className={isVisible?'showPara':'para'}>In the ever-evolving world of web development, I'm committed to continuous learning. I 
          stay up-to-date with the latest trends and technologies, which allows me to deliver cutting-edge solutions to my clients.</p>
          <p>
          I'm always eager to take on new challenges and collaborate with creative minds.
           Whether you have a project in mind or simply want to connect and discuss web development, feel free to reach out.
          </p>
      </Container>
     </div>
  )
}

export default About

const Container = styled.div`
  display: flex;
  flex-direction: column;
 justify-content: space-around;
  box-shadow: 2px 2px 3px 2px #d130f6aa;
  color: ${props=>props.darkMode?'white':'#222'};
  padding: 20px;
  font-size: 20px;
  width: 60vw;
  @media screen and (max-width:768px) {
   width: 100%;
   align-self: center;
   padding: 10px;
   font-size: 15px;
   box-shadow: none;
   z-index: 2;
   margin-bottom: 15px;
   }
`
const Heading = styled.h1`
   text-align: center;
   font-family: 'Syne';
   color: ${props=>props.darkMode?'white':'#222'};

   font-weight: 500;
   font-size: 4.5rem;
   @media screen and (max-width:768px) {
    font-size: 40px;
   }
`


