import React from 'react'

import { Link, NavLink } from 'react-router-dom';

import { useContext } from "react"
import { FetchContext } from "../context/Context";

import "./examp.css"


const Home = () => {
  const { data } = useContext(FetchContext)

  return (

    <div className='w-75 p-0 dw'>
      <div>
        <h1 className='title'>
          Dollie Blair
        </h1>
      </div>
      <div class="row">
        {
          data.slice(0, 3).map((fetch, index) => (
            <div className='col-4' key={index}>
              <Link to={`/card/${fetch.video.videoId}`}>
                <img src={`${fetch.video.thumbnails[0].url}`} />
                {/* <iframe width="100%" height="200" src={`https://www.youtube.com/embed/${fetch.video.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
                <div class=" p-0">
                  <h5 class="card-title fs-6">{fetch.video.title}</h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      <div>
        <h1 className='titles'>
          Recommended
        </h1>
      </div>
      <div class="row">
        {
          data.slice(80, 83).map((fetch, index) => (
            <div className='col-4 ' key={index}>
              <Link to={`/card/${fetch.video.videoId}`}>
                <img src={`${fetch.video.thumbnails[0].url}`} />
                {/* <iframe width="100%" height="200" src={`https://www.youtube.com/embed/${fetch.video.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
                <div class=" p-0">
                  <h5 class="card-title fs-6">{fetch.video.title}</h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      <div>
        <h1 className='titls'>
          Food & Drink
        </h1>
      </div>
      <div class="row">
        {
          data.slice(0, 3).map((fetch, index) => (
            <div className='col-4 ' key={index}>
              <Link to={`/card/${fetch.video.videoId}`}>
                <img src={`${fetch.video.thumbnails[0].url}`} />
                {/* <iframe width="100%" height="200" src={`https://www.youtube.com/embed/${fetch.video.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
                <div class=" p-0">
                  <h5 class="card-title fs-6">{fetch.video.title}</h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>


  )
}

export default Home