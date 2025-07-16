
import "../App.css";
import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import image from "../image/About.jpg";
import Scroller from "../Extra-file/ScrollButtons";

const images = [
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image
];

const Galleary = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
      loop: false,
      protect: true
    });
  }, []);

  return (
    <>
     <Scroller/>
     <div className="image-box">
            <div className="Dance-img">
              <img id="Dance-img1" src={image} alt="DanceImage" />
              <img id="Dance-img2" src={image} alt="DanceImage" />
              <img id="Dance-img3" src={image} alt="DanceImage" />
              <img id="Dance-img4" src={image} alt="DanceImage" />
            </div>
          </div>
          <></>
    <>
    <>
        <div className="Text-size">
          <h3 className="hd" data-title="YOUR DONATION, THEIR SECOND CHANCE">
            YOUR DONATION, THEIR SECOND CHANCE
          </h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
      </>
   <main className="gallery-main">
      <div className="gallery-container">
        {images.map((url, index) => (
          <div className="gallery-card" key={index}>
            <div className="gallery-card-image">
              <a href={url} data-fancybox="gallery" >
                <img src={url} alt={`Gallery ${index + 1}`} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
    </>
    </>
  
  );
};

export default Galleary;
