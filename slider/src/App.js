import React, { useEffect ,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lawnMower from "./lawn-mower-2127637_1280.jpg"
import axios from "axios";
import VideoComponent from "./Youtube";
import videoUrl from "./Youtube";
import ReactPlayer from "./Youtube";
import metadata from "./Youtube";



function SimpleSlider() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 300,

      }
    ]

  };

  const isMobile = window.innerWidth <= 768;
  const [content, setContent] = useState('');
  
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [baseExperience, setBaseExpeperience] = useState();
  
  

  

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
        setBaseExpeperience(response.data.baseExperience)       
      })

    
  }
  
  URL="https://pokeapi.co/api/v2/pokemon/machamp"

  

  return (
    
      <Slider {...settings}>
      
        <div>
          <div className="rounded-t-xl">
            <img src={lawnMower} alt=""/>
          </div>
        </div>

        <div>
          
          <h2>{ name}</h2>
          <img src={data?data.sprites.other.dream_world.front_default:"<p>Loading<p>"} alt=""/>
          <h3>{ baseExperience}</h3>

          <h1>{content}</h1>
        </div>

        <div>
        <VideoComponent videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        <ReactPlayer url={videoUrl} playing={true} controls={true} />
        <h2>{metadata.title}</h2>
        <p>{metadata.description}</p>
        </div>

        

    </Slider>
    
  );
}


console.log(Slider)
export default SimpleSlider;