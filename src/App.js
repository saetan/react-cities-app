// IMPORT useState
import React, { useState } from 'react';
import './styles.css';
import imagesArr from './imageData';
import Thumb from './Thumb';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 
  const [bigImage, setBigImage] = useState('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  );
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const renderImages = imagesArr.map((record, index) => {
    const { city, img } = record
    return <Thumb city={city} url={img} key={index} />
  })

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails" onClick={(event) => {
          if (event.target.className === 'thumb') {
            setBigImage(event.target.src);
          }
        }}>
          {/* RENDER THE IMAGES ARRAY  */}
          {renderImages}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {/* <img src="" id="bigimage" alt='bigImage'/> */}
        {<img src={bigImage} id="bigimage" alt="BigImage" />}
      </div>
    </div>
  );
}
