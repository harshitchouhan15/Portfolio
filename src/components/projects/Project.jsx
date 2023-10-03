
import photo1 from "../../assets/ig.png"
import photo2 from "../../assets/snaptly.png"
import photo3 from "../../assets/lastBlog.png"
import { useEffect, useState } from "react"
import {toggleTheme} from "../../redux/themeRedux"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

const Container=styled.div`
    padding-top: 7vh;
    display: flex;
   height: max-content;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${props=>props.darkMode?'white':'black'} ;
    background-color: ${props=>props.darkMode?'black':'white'} ;
   @media screen and (max-width:768px) {
    border-bottom: ${props=>props.darkMode&&'8px solid #3a3a3a'};
    flex-direction: column;
     gap: 10px;
     
   }
`
const Track =styled.div`
    width: 90vw;
    height: 90vh;
    display: flex;
    overflow: hidden;
    @media screen and (max-width:768px) {
   height: max-content;
   width: 100vw;
   margin-top: 10px;
   }
`
const SlideContainer =styled.div`
    width: 270vw;
  transform: translateX(-${props=>props.move*90}vw);
    transition: all 1s ease;
    display: flex;
   z-index: 2;
    height: 90vh;
    align-items: center;
    @media screen and (max-width:768px) {
   height: max-content;
   width: 300vw;
  transform: translateX(-${props=>props.move*100}vw);
  transition: all 0.4s ease;

   }
`
const Card =styled.div`
    width: 90vw;

   height: 75%;
   position: relative;
    transition: all 1s ease;
  transform: scale(${props=>props.scale&&1.15});
  display: flex;
  align-items: center;
  gap: 100px;
  justify-content: center;
overflow: hidden;
z-index: 2;
@media screen and (max-width:768px) {
flex-direction: column-reverse;
gap: 10px;
width: 100vw;
   }

`
const Image=styled.img`
   width: 100%;height: 100%;
    transition: all 1s ease;
    @media screen and (max-width:768px) {
  width: 92%;
  height: 40vh;
   }
`
const Box = styled.div`
     width: 42%;
    height: 90%;
    position: relative;
    display: flex;
   justify-content: center;
    gap: 40px;
    opacity: ${props=>props.darkMode?1:0};
    transition: all 0.2s ease;
    align-items: center;   
    animation: ${props=>props.darkMode&&'up 1s ease'} ;
    &:hover{
  &>a{
    &>img{
        transform: scale(1.015);
        transition: all 0.4s ease;
    }
  }
    };
    @media screen and (max-width:768px) {
  min-width: 100%;
  height: 45vh;
   }

@keyframes up {
    0%{
        transform:  translateY(90px);
    }
    100%{
        transform:  translateY(0);
    }
}
`


const Button=styled.button`
    border: none;
    cursor: pointer;
    padding: 10px 15px;
 z-index: 12;
    
    left: ${props=>props.left};
    right: ${props=>props.right};
    font-size: 20px;
    transform: ${props=>props.right==='3vw'&&'rotateY(180deg)'};
    font-weight: 500;
    background-color: white;
   
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: black;
    @media screen and (max-width:768px) {
display: none;
   }
&:hover{
    
}

`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    gap: 20px;align-items: center;
    animation: ${props=>props.darkMode&&'up 1s ease'} ;
    @media screen and (max-width:768px) {
   
   gap: 10px;
   }

@keyframes up {
    0%{
        transform:  translateY(90px);
    }
    100%{
        transform:  translateY(0);
    }
}
    &>h1{
  font-family: 'Pacifico';
  font-weight: 400;
  font-size: 3rem;
 
  @media screen and (max-width:768px) {
   font-size: 28px;
 
   }
    }
`

const Link = styled.a`
    text-decoration: none;
    color: #faf9f9;
    padding:10px 25px;
    font-size: 18px;
    font-weight: 500;
    background: linear-gradient(to right, rgb(233, 21, 223), rgb(164, 78, 240), rgb(246, 16, 16),rgb(244, 138, 25));
    &:hover{
        background: linear-gradient(to left, rgb(233, 21, 223), rgb(164, 78, 240), rgb(246, 16, 16),rgb(244, 138, 25));

    };

    @media screen and (max-width:768px) {
 font-size: 16px;
   }

`
const Title= styled.h1`
    font-family: 'Syne';
    color: white;
    font-weight: 500;
    z-index: 10;
    font-size: 4.5rem;
    position: absolute;
    top: 8%;
    left: 20%;
    opacity: ${props=>props.darkMode?1:0};
    transition: all 0.5s ease;
    transform:  translateY(${props=>props.darkMode?0:'50px'});
    animation: ${props=>props.darkMode&&'up 1s ease'} ;
    @media screen and (max-width:768px) {
   font-size: 40px;
   top: 4%;
   text-align: center;
   margin: auto;
   left: 0;right: 0;
   }
    @keyframes up {
        0%{
            transform:  translateY(90px);
        }
        100%{
            transform:  translateY(0);
        }
    }
`
const Bottom =styled.div`
 margin-block: 15px;
    display: none;
    align-items: center;
    gap: 30px;
    @media screen and (max-width:768px) {
    display: flex;
   }
`
const Dot = styled.div`
    width: 18px;height: 18px;
    border-radius: 50%;
    border: 2px solid white;
    transition: all 0.5s ease;
    background-color: ${props=>props.selected && 'white' };
`



const Project = () => {
    const [num,setNum]=useState(0)
    const dispatch = useDispatch()
    const ref = useRef()
    const darkMode  =useSelector(state=>state.theme)


    const handleClick=(a)=>{
        a==='left'?num>0?setNum(num-1):setNum(2):num===2?setNum(0):setNum(num+1)
    }


    useEffect(()=>{
        const options={
            root:null,
            margin:'0px',
            threshold:0.2
        }

        const intersection = (entries)=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    dispatch(toggleTheme())
                  

                }
                
            })
        }

        const observer = new IntersectionObserver(intersection,options)

        observer.observe(ref?.current)

        return ()=>observer.disconnect()
    },[])

    return (
    <Container darkMode={darkMode} id='projects' ref={ref} >
  
        <Title darkMode={darkMode} >Projects</Title>
    <Button left="3vw"  onClick={()=>handleClick("left")}><KeyboardBackspaceIcon /></Button>
    <Button right="3vw" onClick={()=>handleClick("right")}><KeyboardBackspaceIcon/></Button>
 
<Track>
<SlideContainer   move={num}>
    {data.map((item,i)=>(
        <Card   key={i}  >
     <Info darkMode={darkMode}>
    <h1>{item.title}</h1>
    <Link target="_blank" href={item.url} >View Site</Link>
   </Info>
            
       
     
        <Box darkMode={darkMode} >
        <Anchor target="_blank" href={item.url} >
              <Image src={item.src} scale={num+1===1}/>       
         </Anchor>               
      </Box>
    
    
        </Card>
    ))}
</SlideContainer>
</Track>
<Bottom>
    <Dot selected={num===0} onClick={()=>setNum(0)} />
    <Dot selected={num===1} onClick={()=>setNum(1)} />
    <Dot selected={num===2} onClick={()=>setNum(2)} />
  </Bottom>
</Container>
  )
}

export default Project

const data = [
    {
        src:photo1,
        url:"https://instagram-clone-7d5d2735c8b3.herokuapp.com/",
        title:'Instagram Clone'
    },
    {
        src:photo2,
        url:"https://snaptly-9dd63c8cecea.herokuapp.com/",
        title:'Ecommerce Website'
    },
    {
        src:photo3,
        url:"https://inspireverse-73dceddfcb2e.herokuapp.com/",
        title:'Blog Website'
    }
]


const Anchor = styled.a`
      width: 100%;
    height: 100%;
    position: relative;
    display: flex;
   justify-content: center;
   align-items: center;
 

`




