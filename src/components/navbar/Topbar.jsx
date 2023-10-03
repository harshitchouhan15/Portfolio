import React from 'react'
import './topbar.css'
import {useSelector} from "react-redux"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
const Topbar = ({menu,setMenu}) => {
  const darkMode  =useSelector(state=>state.theme)
 
  return (
   <Container menu={menu} darkMode={darkMode}>
    <Logo className="logo"> 
    <Box>
    <Name>Harshit</Name>
      </Box>
      <Box>
    <Name> Chouhan</Name>
      </Box>
      </Logo>

    <div className="nav-center">
   <Link  darkMode={darkMode}   href="#home">Home</Link>
   <Link  darkMode={darkMode}   href="#about">About</Link>
   <Link  darkMode={darkMode}   href="#skills">Skills</Link>
   <Link  darkMode={darkMode}   href="#projects">Projects</Link>
   <Link  darkMode={darkMode}   href="#contact">Contact</Link>
    </div>
  
<div className="nav-right">
  <div   className="hamburger" onClick={()=>setMenu(!menu)}>
    <div style={{backgroundColor:darkMode&&'white'}} className={menu?'line active':'line'}></div>
    <div style={{backgroundColor:darkMode&&'white'}} className={menu?'line  hide':'line'}></div>
    <div style={{backgroundColor:darkMode&&'white'}} className={menu?'line rotate':'line'}></div>
  </div>
</div>

<div className="links">
  <a target='_blank' href="https://github.com/harshitchouhan15/"><GitHubIcon    fontSize='large'  htmlColor={darkMode?'white':'black'} /></a>
  <a target='_blank' href="https://www.linkedin.com/in/harshit-chouhan-8378ab251/"><LinkedInIcon  fontSize='large'  htmlColor={darkMode?'white':'black'}/></a>
</div>

   </Container>
  )
}

export default Topbar

const Logo = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 14vw;
  @media screen and (max-width:768px) {
  width: 32vw;
  &>:last-child{
    display: none;
  }
 }
&:hover{
  &>span{
    transform: translateX(-14vw);
    
  }
}
`

const Box = styled.span`
  min-width: 14vw;

display: flex;
align-items: center;
transition: all 0.5s ease;
justify-content: center;
 @media screen and (max-width:768px) {

  min-width: 32vw;
 }
`

const Name = styled.h1`
 text-align: center;
  font-size: 40px;

   font-family: 'Syne';
   @media screen and (max-width:768px) {
font-size:25px;
}
`

const Link=styled.a`
  color: #101010;
  font-size: 18px;
  color: ${props=>props.darkMode&&'white'};
  scroll-behavior: smooth;
`

const Container=styled.div`
  position: sticky;
  width: 100vw;
  background-color: ${props=>props.darkMode||props.menu?props.darkMode?'black':'#15023a':'white'};
  color: ${props=>props.darkMode||props.menu&&'white'};
top: 0;
transition: all  1s  ease;
animation: slideLeft 1s ease;
  display: flex;align-items: center;
  padding: 0 3vw;
  height: 7vh;
  justify-content: space-between;
  z-index: 9999;
  overflow: hidden;
  @keyframes slideLeft {
    from{
        width: 0;
        padding: 0;
    }
    to{
        width: 100vw;
  padding: 0 3vw;

    }
}
`