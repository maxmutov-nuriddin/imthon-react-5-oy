import { useContext } from "react"
import { FetchContext } from "../context/Context";
import { Link } from "react-router-dom";



const card = () => {
  const { data } = useContext(FetchContext)
  // console.log(data);
  return (
    <div>
      <div>
        {
          data.map((fetch, index) => (
            <div className='col-4' key={index}>
              <Link to={`/card/${fetch.video.videoId}`}>
                <iframe width="100%" height="200" src={`https://www.youtube.com/embed/${fetch.video.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <div className=" p-0">
                  <h5 className="card-title fs-6">{fetch.video.title}</h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
  return (
    <div>
    </div>
  )
}

export default card