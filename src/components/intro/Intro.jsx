import './intro.css'
import { useState } from 'react'
import { useEffect } from 'react'
import hello from "../../assets/hello.svg"
import developer from "../../assets/developerNoBg.png"
import styled from 'styled-components'
import { useSelector } from 'react-redux'
const Intro = () => {
  const [ scrollY,setScrollY] = useState(0)
  const darkMode  =useSelector(state=>state.theme)
  const scrollEvent =()=>{
  setScrollY(window.scrollY)
  }

  

  useEffect(()=>{
    window.addEventListener('scroll',scrollEvent)
    return ()=>window.removeEventListener('scroll',scrollEvent)
  },[])
  

  return (

 <div className="intro" id="home">

  <div className="introleft">
    <Image scrollY={{x:scrollY/1.5,y:scrollY/15}} src={developer} alt="" />
    </div>

  <div className="introright">
<h2 style={{color:darkMode && 'white'}} > <img src={hello}/> Hello, My name is</h2>
<h1>Harshit Chouhan</h1>
<Third darkMode={darkMode} >React Developer</Third>
<Bottom>
  <Link href='#projects' >Projects</Link>
  <Link href='#contact' >Contact me</Link>
</Bottom>

  </div>
 </div>
  )
}

export default Intro

const Third = styled.h3`
   font-size: 40px;
    color: transparent;
    margin-left: 20px;
    position: relative;
    font-weight: 500;
    -webkit-text-stroke:1.5px ${props=>props.darkMode?'white':'#15023a'};
    ::after{
      content:'React Developer';
      color: ${props=>props.darkMode?'white':'#15023a'};
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      transition: all 0.5s linear;
      overflow: hidden;
      white-space: nowrap;
    }
    &:hover{
      ::after{
        width: 100%;
      }
    };
    @media screen and (max-width:768px) {
      color:  ${props=>props.darkMode?'white':'#15023a'};
}
`

const Image = styled.img`
  transform: translate( -${props=>props.scrollY.y}px, -${props=>props.scrollY.y}px);
  transition:all 0.3s ease;
`

const Bottom = styled.div`
  display: none;
  align-self: center;
  align-items: center;
gap: 20px;
margin-top: 20px;

@media screen and (max-width:768px) {
display: flex;
   }
`

const Link = styled.a`
    text-decoration: none;
    color: #faf9f9;
    padding:10px 20px;
    font-size: 18px;
    font-weight: 500;
    display: none;
    background: linear-gradient(to right, rgb(233, 21, 223), rgb(164, 78, 240), rgb(246, 16, 16),rgb(244, 138, 25));
    &:hover{
        background: linear-gradient(to left, rgb(233, 21, 223), rgb(164, 78, 240), rgb(246, 16, 16),rgb(244, 138, 25));

    };

    @media screen and (max-width:768px) {
 font-size: 16px;
 display: block;
   }

`