
import "../App.css";
import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Gal1 from "../image/Gal1.webp";
import Gal2 from "../image/Gal2.png";
import Gal3 from "../image/Gal3.avif";
import Gal4 from "../image/Gal4.jpg";
import image1 from "../image/gal1.jpg";
import image2 from "../image/gal2.jpg";
import image3 from "../image/gal3.jpeg";
import image4 from "../image/gal4.jpeg";
import image5 from "../image/gal5.jpg";
import image6 from "../image/gal6.jpg";
import image7 from "../image/gal7.jpeg";
import image8 from "../image/gal8.jpg";
import image9 from "../image/gal9.jpg";
import image10 from "../image/gal10.jpeg";
import image11 from "../image/gal11.jpg";
import image12 from "../image/gal12.jpeg";
import Scroller from "../Extra-file/ScrollButtons";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12
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
              <img id="Dance-img1" src={Gal1} alt="DanceImage" />
              <img id="Dance-img2" src={Gal2} alt="DanceImage" />
              <img id="Dance-img3" src={Gal3} alt="DanceImage" />
              <img id="Dance-img4" src={Gal4} alt="DanceImage" />
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
