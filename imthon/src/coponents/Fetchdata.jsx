import { useContext } from "react"
import { FetchContext } from "../context/Context";

const Fetchdata = () => {
  const { data } = useContext(FetchContext)
  return (
    <div>
      <div>

      </div>
    </div>
  )
}

export default Fetchdata