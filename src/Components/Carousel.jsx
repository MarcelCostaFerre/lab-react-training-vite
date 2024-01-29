/* eslint-disable react/prop-types */
import { useState } from "react";

function Carousel(props) {
    const [count, setCount] = useState(0);
    return(
        <>
            <button onClick={()=>{setCount(count === 0 ? (props.images.length -1) : count -1)}} style={{color: 'black'}}>Left</button>
            <img src={props.images[count]} />
            <button onClick={()=>{setCount((count + 1)%props.images.length)}} style={{color: 'black'}}>Right</button>
        </>
    )
}

export default Carousel;