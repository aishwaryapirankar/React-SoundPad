import React from 'react';

function Box(props){

    const {text,sound} = props;
    

    return(
        <div id = "box" onClick = {()=>{
            const audio = new Audio(sound);
            audio.play();
        }}>{text}</div>
    )
}

export default Box;