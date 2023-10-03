import './featured.css'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from "react-redux"
import {exitDarkmode} from "../../redux/themeRedux"
import tick from '../../assets/tick.svg'
import photo1 from '../../assets/css1.png'
import photo2 from '../../assets/react1.png'
import photo3 from '../../assets/js1.png'
import photo4 from '../../assets/node1.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
const darkMode  =useSelector(state=>state.theme)
const dispatch = useDispatch()
const ref = useRef()
const [selected,setSelected] = useState(0)
const [isVisible,setIsVisible] =useState(false)
const [ scrollY,setScrollY] = useState(0)
const screenWidth = window.innerWidth
  const scrollEvent =  ()=>{
  setScrollY(window.scrollY)
  }
 

  useEffect(()=>{
    window.addEventListener('scroll',scrollEvent)
    return ()=>window.removeEventListener('scroll',scrollEvent)
  },[])

  useEffect(()=>{
   if(screenWidth>768)
    { const options={
        root:null,
        margin:'0px',
        threshold:screenWidth>768?0.7:1
    }

    const intersection = (entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                dispatch(exitDarkmode())
                setIsVisible(true)
                
            }else{
              setIsVisible(false)
            
            }
        })
    }

    const observer = new IntersectionObserver(intersection,options)

    observer.observe(ref?.current)

    return ()=>observer.disconnect()}
},[])

  return (


  <Container darkMode={darkMode} ref={ref} id="skills">
    <Bg isVisible={isVisible} darkMode={darkMode} scrollY={scrollY}></Bg>

    <Heading> Technical Skills</Heading>


   <Bottom className="container">

{data.map((item,i)=>(
     <Card key={i}   darkMode={darkMode}>
     <Skill  darkMode={darkMode} className={darkMode?'dark':'title'}>
     <img style={{width:item.width}} src={item.src} alt="" />
    </Skill>
    <Name  onClick={()=>selected===i?setSelected(null):setSelected(i)} >
    <h3>   {screenWidth>768 && i===3?item.last:item.name} </h3>
      <Arrow  selected={selected===i}><KeyboardArrowUpIcon fontSize='large' htmlColor='white' /></Arrow>
    </Name>
    <List selected={selected===i} className='skill-list' darkMode={darkMode}>
      <li> <img src={tick} alt="" /> <p>{item.first}</p></li>
    <li> <img src={tick} alt="" /> <p>{item.second}</p></li>
    <li> <img src={tick} alt="" /> <p>{item.third}</p></li>
      </List>
    </Card>
))}
   </Bottom>
 </Container>
  )
}

export default Featured

const Name = styled.div`
display: flex;
align-items: center;
gap: 4px;
position: relative;
justify-content: center;
@media screen and (max-width:768px) {
  width: 100%;

&>h3{
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: white;
}
}
`

const Arrow  =styled.span`
  display: none;
  font-size: 20px;
position: absolute;
right: 20px;

  @media screen and (max-width:768px) {
display: flex;
align-items: center;
justify-content: center;
transition:all 0.5s ease ;

transform: rotateX(${props=>props.selected ?'0deg' :'180deg'});
}

`

const Bg = styled.div`
height: 100%;
background-color: #222;
width: 200%;
position: absolute;
border-top-right-radius: calc(50% - ${props=>props.scrollY/18}px);
border-top-left-radius: calc(50% - ${props=>props.scrollY/18}px);
top: -20%;
left: -50%;
transform: translateY(${props=>props.scrollY/6}px);
transform: ${props=>props.isVisible&&' translateY( 0)'};
top: ${props=>props.isVisible&&0};
border-radius: ${props=>props.isVisible&&0};
background:${props=>props.darkMode&&'black'};
transition:all 0.3s ease;
@media screen and (max-width:768px) {
top: 0;
border-radius: 0;
transform: translateY(0);
}
`

const Container = styled.div`
    display: flex;
   flex-direction: column;
   gap: 25px;
    justify-content: center;
    align-items: center;
padding: 40px 20px;
 height: 102vh;
 position: relative;
 background-color:${props=>props.darkMode&&'black'};
 transition: all 0.4s ease;
 @media screen and (max-width:768px) {
   height: max-content;
   padding: 10px;
 overflow: hidden;
padding-top: 50px;

   }
`

const Heading = styled.h1`
   text-align: center;
   z-index: 2;
   font-family: 'Syne';
   color:white;
   font-weight: 500;
   font-size: 4.2rem;
   @media screen and (max-width:768px) {
    font-size: 38px;

 }
`

const List =  styled.ul`
@media screen and (max-width:768px){
height:${props=>props.selected?'max-content':0};
width: 100%;
color:white;
overflow: hidden;
border: 1px solid rgb(255, 36, 233);
box-shadow:${props=>props.selected&&'2px 2px 4px 2px rgb(243, 74, 249)'} ;
padding:${props=>props.selected?'10px 2px':0};
transition: all 0.3s ease;
}
`

const Card= styled.div`
 width: 22%; 
transition: all 0.5s ease;
background-color: white;
position: relative;
border: 1px solid rgb(255, 36, 233);
box-shadow: 2px 2px 4px 2px rgb(243, 74, 249);
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
display: flex;
padding: 20px;
overflow: hidden;
z-index: 2;
transition:all 0.4s ease;
color:${props=>props.darkMode?'white':'#222'};

&>h3{
  font-family: 'Ubuntu';
  font-size: 20px;
  color: black;
}

&:hover{
  &>span{
    transform: rotateY(90deg);
  }
};

@media screen and (max-width:768px) {

box-shadow: none;
border: none;
width: 100%;
background-color:transparent;

&>h3{
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;
}
   }
`

const Bottom = styled.div`
   width: 100vw;
    display: flex;
    justify-content: center;
    gap:3vw;
   height: 60vh;
    padding: 40px 60px;
    @media screen and (max-width:768px) {
flex-direction: column;
padding: 5px 2px;
height: max-content;
gap: 11px;
   }
    `

const Skill = styled.span`
 transition:all 0.4s ease;
 position: absolute;

 &>img{
  width: 40%;
 
 };
 
@media screen and (max-width:768px) {
display: none;

   }
`



const data = [
  {
    name:'CSS',
    src:photo1,
    width:'35%',
    first:'Proficient in writing clean and maintainable CSS code for responsive web designs.',
    second:' Experienced in using CSS preprocessors like SCSS to streamline development.',
    third:'Skilled in creating complex CSS animations and transitions to enhance user experiences.'
 
  },
  {
    name:'React.js',
    src:photo2,
    width:'45%',
    first:'Proficient in building interactive and dynamic web applications using React.js.',
    second:' Familiar with state management using Redux, ensuring efficient data flow in applications.',
    third:'Experienced in creating responsive user interfaces with Material UI components.'
 
  },
  {
    name:'Javascript',
    src:photo3,
    width:'78%',
    first:'Strong command of core JavaScript concepts, including ES6 features.',
    second:' Experienced in working with asynchronous JavaScript, including Promises and async/await.',
    third:'Proficient in manipulating the DOM and handling events to create dynamic web pages.'
 
  },
  {
    name:'Node.js',
    src:photo4,
    width:'55%',
    last:'Node.js & MongoDB API Development',
    first:'Proficient in building robust and scalable RESTful APIs using Node.js.',
    second:' Experienced in database modeling, querying, and management with MongoDB.',
    third:'Skilled in handling authentication, authorization, and data validation for secure API endpoints.'
 
  },
]



