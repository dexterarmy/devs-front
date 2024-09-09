import React, {useEffect, useState,useRef,FC} from 'react';


import './App.css';

function App() {

  const containerRef = useRef<HTMLDivElement>(null);
  const movableDivRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<any>({});

  const handleMouseMove = (e:any) => {
    e.preventDefault();

      
  if(movableDivRef.current){

  
    movableDivRef.current.style.left=`${e.pageX - offsetRef.current.offsetLeft}px`;
    movableDivRef.current.style.top = `${e.pageY - offsetRef.current.offsetTop}px`;
  }
  }



  const handleMouseDown = (e:any) => {
    e.preventDefault();
     const el = e.target.classList.contains('movable');
    if(el){
      
       offsetRef.current.offsetLeft = e.pageX - e.target.getBoundingClientRect().left;
       offsetRef.current.offsetTop = e.pageY - e.target.getBoundingClientRect().top;      
      window.addEventListener('mousemove', handleMouseMove);
      console.log(e.pageX , e.clientX)
    }

  }

  const handleMouseUp = () =>{
    window.removeEventListener('mousemove', handleMouseMove);
  } 

  useEffect(() => {

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
     
    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  },[])
  

  return (
    <>
      <div ref={containerRef} style={{width: '90%', height: '90vh' , border: '2px solid black'}} >
        <div ref={movableDivRef} className='movable' style={{  border: '2px solid red' ,
         cursor: 'grab', position: 'fixed',
         width: '100px', height : '100px'}}>
          Movable div
        </div>


          
         
      </div>
    </>
  );
  

}

export default App;
