import React, { useEffect ,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import horse_450 from "./horse_540.jpg"
import axios from "axios";
import VideoComponent from "./Youtube";
import videoUrl from "./Youtube";
import ReactPlayer from "./Youtube";
import metadata from "./Youtube";
import "./App.css"


function Responsive() {
  var settings = {
    dots: true,
    centerMode: true,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 10,

      }
    ]

  };

  const isMobile = window.innerWidth <= 768;
  const [content, setContent] = useState('');
  
  const [data, setData] = useState();
  const [name, setName] = useState();
  
  

  if (isMobile) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setContent(`Latitude: ${position.coords.latitude}, Longtitude: ${position.coords.longitude}`);
    });

    
  } else {
    
      axios.get(URL).then((response) =>{
        console.log(response.data)
        setData(response.data)
        setName(response.data.name)
      })

      .catch((error) => {
        console.error('Feil under Axios-forespørsel:', error);
      });
    
      

    
  }
  
  URL="https://pokeapi.co/api/v2/pokemon/machamp"

  

  return (
    <div class="Slider_container">
      <Slider {...settings}>
        
        <div >
          <img src={horse_450} alt="bildet er tatt av Timur Romanov, Unsplash"/>
          <h2>Foto: Timur Romanov, Unsplash.Com</h2>
        </div>

      <div >
        
        <img src={data?data.sprites.other.dream_world.front_default:"<p>Loading<p>"} alt="<h2>{ name}</h2>"/>
        <h2>{ name}</h2>
        <h1>{content}</h1>
      </div>

      <div className="video-wrapper">
      <VideoComponent videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <ReactPlayer url={videoUrl} playing={true} controls={true} />
      <h2>{metadata.title}</h2>
      <p>{metadata.description}</p>
      </div>

      </Slider>

    </div>
      

    
    
  );
}


console.log(Slider)
export default Responsive;