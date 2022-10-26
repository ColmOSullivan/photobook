import { useState } from "react";

const Counter = () =>{
    // initialize state to track the amount of likes.
    const [ likesCount, setLikesCounts ] = useState(0);
    
    // define an event handler which will update state (when calleed)
    const handleClick = () => {
        // when this function is called, we nueed to update state by +1.
        setLikesCounts(likesCount + 1);
    }

    return(
        <section>
            <p>This art page has been liked {likesCount} times</p>
            <button onClick={handleClick} >Click for likes!</button>
        </section>
    )
}

export default Counter;