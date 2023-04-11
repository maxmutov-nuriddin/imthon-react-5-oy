// import { useContext } from "react"
// import { FetchContext } from "../context/Context";
// import { Link } from "react-router-dom";



// const shorts = () => {
//   const { data } = useContext(FetchContext)

//   return (
//     <div>
//       {
//         data.map((fetch, index) => (
//           <div className='d-flex justify-content-center text-center' key={index}>
//             <Link to={`/card/${fetch.video.videoId}`}>
//               <iframe width="300px" height="500" src={`https://www.youtube.com/embed/${fetch.video.videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
//               <div class=" p-0">
//                 <h5 class="card-title fs-6">{fetch.video.title}</h5>
//               </div>
//             </Link>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default shorts