import { useState } from "react"
import "./styles/Counter.css"

const Counter = function(props) {
    const [number, setNumber] = useState(false)

    function increment() {
        setNumber(number + 1)
    }

    function decrement() {
        if(number > 0){
            setNumber(number-1)
        }
    }


    return(
        <div className="counter">
            <button onClick={increment}>Add</button>
        </div>
    )
}

export default Counter