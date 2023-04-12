import { Link, useParams } from "react-router-dom";
import { FetchContext } from "../context/Context";
import { useContext, useState } from "react";



import './card.css'

const Video = () => {
  const { data } = useContext(FetchContext)
  const { id } = useParams();

  const video = data.find((item) => item.id === id);
  return (
    <div>
      <iframe className="iframe" height="550" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      {/* <h2>{video.title}</h2> */}
      <Link className="back" to="/">
        <svg className="icons" width="65" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="56" height="40" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M32.7982 8L22 20L32.7982 32L34 30.6645L24.4035 20L34 9.33552L32.7982 8Z" fill="#161A2B" />
        </svg>
      </Link>
    </div>
  )
}
export default Video;
