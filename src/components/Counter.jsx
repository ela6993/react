import { useState } from "react"
import "./styles/Counter.css"

const Counter = function(props) {
    const [number, setNumber] = useState('Add')

    function increment() {
        setNumber(nNumber => nNumber === 'Add' ? 'Added' : 'Add')
    }


    return(
        <div className="counter">
            <button onClick={increment}>{number}</button>
        </div>
    )
}

export default Counter