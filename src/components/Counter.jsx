import { useState } from "react"
import "./styles/Counter.css"

const Counter = function(props) {
    const [number, setNumber] = useState(0)

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
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/1374/1374128.png" alt="" />
            <div>{number}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter