import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import axios from 'axios';

const VideoComponent = ({ videoUrl }) => {
  const [play, setPlay] = useState(true);
  const [metadata, setMetadata] = useState({ title: '', description: '' });

  const extractVideoId = (url) => {
    if (!url) return null; 
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\n\s]+\/\s*[^\n\s]+\/|(?:v|e(?:mbed)?)\/|\S+?[]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const fetchYouTubeMetadata = async (videoId) => {
    const apiKey = 'AIzaSyAYmat06_Z0cT77ECJuLi3JrYIehAkiPmM'; 
    const url = `https://www.googleapis.com/youtube/v3`;

    try {
      const response = await axios.get(url);
      if (response.data.items.length > 0) {
        setMetadata({
          title: response.data.items[0].snippet.title,
          description: response.data.items[0].snippet.description,
        });
      }
    } catch (error) {
      console.error('Feil ved henting av YouTube video metadata', error);
    }
  };

  useEffect(() => {
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      fetchYouTubeMetadata(videoId);
    }
  }, [videoUrl]);

  return (
    <div className='w- 10vh, '>
      <ReactPlayer url={videoUrl} playing={play} controls={true} muted={true} />
      <h2>{metadata.title}</h2>
      <p>{metadata.description}</p>
    </div>
  );
};

export default VideoComponent;
