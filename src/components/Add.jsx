import { useState } from "react"
import "./styles/Add.css"

const Add = function(props) {
    const [addd, setAdded] = useState('ADD')

    function add() {
        setAdded(nNumber => nNumber === 'ADD' ? 'ADDED' : 'ADD')
    }


    return(
        <div className="counter">
            <button class = 'button' onClick={add}>{addd}</button>
        </div>
    )
}

export default Add