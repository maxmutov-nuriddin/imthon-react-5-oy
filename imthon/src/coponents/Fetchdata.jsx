import { useContext } from "react"
import { FetchContext } from "../context/Context";

const Fetchdata = () => {
  const { data } = useContext(FetchContext)
// console.log(data);
  // data.map((item) => {
  //   console.log(item.video.thumbnails[0].url);
  // })
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default Fetchdata