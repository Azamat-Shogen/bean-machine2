import TopCell from "./TopCell"
import "./topGrid.css"
import {getTopGrid} from "../utils"
import { useState } from "react"


const topGrid = getTopGrid()

const TopGrid = () => {
   const [topCells, setTopCells] = useState(topGrid)
    
    console.log(topGrid)

    return (
        <div className="topGrid">
          {topCells.map(row => 
            <div className="cellrow-class">
              {row.map( el => {
                  return <TopCell val={el} />
              })}
           </div>
          )}
           
        </div>
    )
}

export default TopGrid