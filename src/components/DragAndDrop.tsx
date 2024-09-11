import React, { useEffect, useState, useRef, FC } from 'react';


import '../App.css';

function DragAndDrop() {

  const containerRef = useRef<HTMLDivElement>(null);
  const movableDivRef = useRef<HTMLDivElement>(null);
  const divRef1 = useRef<HTMLDivElement>(null);
  const offsetRef = useRef<any>({});
  const orgMovableDivPos = useRef<any>({});

  const handleMouseMove = (e: any) => {
    e.preventDefault();


    if (movableDivRef.current) {


      movableDivRef.current.style.left = `${e.pageX - offsetRef.current.offsetLeft}px`;
      movableDivRef.current.style.top = `${e.pageY - offsetRef.current.offsetTop}px`;
    }
  }



  const handleMouseDown = (e: any) => {
    e.preventDefault();
    const el = e.target.classList.contains('movable');
    if (el) {

      offsetRef.current.offsetLeft = e.pageX - e.target.getBoundingClientRect().left;
      offsetRef.current.offsetTop = e.pageY - e.target.getBoundingClientRect().top;

      window.addEventListener('mousemove', handleMouseMove);
     
    }

  }

  const handleMouseUp = () => {
    if (movableDivRef.current && divRef1.current) {

     
     
      if ((movableDivRef.current.getBoundingClientRect().left <= divRef1.current?.getBoundingClientRect().right - (divRef1.current?.getBoundingClientRect().width / 2) && movableDivRef.current.getBoundingClientRect().left > divRef1.current?.getBoundingClientRect().left ) ||
        movableDivRef.current.getBoundingClientRect().right == divRef1.current?.getBoundingClientRect().left + (divRef1.current?.getBoundingClientRect().width / 2)
      ) {
        
        movableDivRef.current.style.left = `${divRef1.current?.getBoundingClientRect().left}px`;
        movableDivRef.current.style.top = `${divRef1.current?.getBoundingClientRect().top}px`;

      } else {
        movableDivRef.current.style.left = `${orgMovableDivPos.current.left}px`;
        movableDivRef.current.style.top = `${orgMovableDivPos.current.top}px`;

      }


    }

    window.removeEventListener('mousemove', handleMouseMove);
  }

  useEffect(() => {

    orgMovableDivPos.current = {
      left: movableDivRef.current?.getBoundingClientRect().left,
      top: movableDivRef.current?.getBoundingClientRect().top
    };
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);


    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])


  return (
    <>
      <div ref={containerRef} style={{
        width: '90%', height: '90vh', border: '2px solid black',
        display: 'flex'
      }} >
        <div ref={movableDivRef} className='movable' style={{
          border: '2px solid red',
          cursor: 'grab', position: 'fixed',
          width: '100px', height: '100px'
        }}>
          Movable div
        </div>
        <div style={{ alignSelf: 'flex-end', margin: 'auto' }}>
          <div ref={divRef1} style={{ width: '100px', height: '100px', border: '2px solid black', marginBottom: ' 5px' }}></div>
        </div>




      </div>
    </>
  );


}

export default DragAndDrop;