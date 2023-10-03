import './app.css'
import Topbar from './navbar/Topbar'
import Intro from './intro/Intro'
import Featured from './featured/Featured'
import About from './about/About'
import Contact from './contact/Contact'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React,{useState} from 'react'
import {useSelector} from "react-redux"
import Project from './projects/Project'
import styled from 'styled-components'


const App = () => {
  const darkMode  =useSelector(state=>state.theme)
  const [menu,setMenu]=useState(false)

  return (
    <Container darkMode={darkMode}>
<Topbar menu={menu} setMenu={setMenu}/>
<Menu menu={menu}setMenu={setMenu}/>

    < Intro />
    < About />
 
    < Featured />
    < Project />
   
    < Contact />

    </Container>
  )
}

export default App

const Container= styled.div`
background-color: ${props=>props.darkMode&&'black'};
color: ${props=>props.darkMode&&'white'};
transition: all 0.5s ease;
scroll-behavior: smooth;
`

function Menu({menu,setMenu}){
  const darkMode  =useSelector(state=>state.theme)
  return(
    <Card darkMode={darkMode} menu={menu}>
      <ul className="list">
       <li onClick={()=>setMenu(false)} className="item"><a href="#home">Home</a></li>
       <li onClick={()=>setMenu(false)} className="item"><a href="#about">About</a></li>
       <li onClick={()=>setMenu(false)} className="item"><a href="#skills">Skills</a></li>
       <li onClick={()=>setMenu(false)} className="item"><a href="#projects">Projects</a></li>
       <li onClick={()=>setMenu(false)} className="item"><a href="#contact">Contact</a></li>
       <div className="profileLinks">
  <a target='_blank' href="https://github.com/harshitchouhan15/"><GitHubIcon    fontSize='large'  htmlColor='white' /></a>
  <a target='_blank' href="https://www.linkedin.com/in/harshit-chouhan-8378ab251/"><LinkedInIcon  fontSize='large'  htmlColor='white'/></a>
</div>
      </ul>
    </Card>
  )
}

const Card = styled.div`
     flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.darkMode?'black':'#15023a'};
    height:55vh;
   
    position: fixed;
    top: 0;
    width: 100vw;
    padding-top: 12px;

    z-index:999;
    right:${props=>props.menu?0:'-105vw'};
  display: none;
    transition: all 0.7s ease;
    @media screen and (max-width:768px) {
      display: flex;
    }
`