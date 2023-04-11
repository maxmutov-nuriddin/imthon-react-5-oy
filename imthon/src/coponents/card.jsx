import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  // console.log(id);
  return (
    <div>
      <iframe width="1100" height="550" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <h2></h2>
    </div>
  )
}
export default Video;