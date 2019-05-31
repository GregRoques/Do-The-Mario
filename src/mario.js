import React from 'react'

const Mario = (props)=>{
    console.log(props.jump)
    if(!props.jump){
        return(
            <img className={'mario'} src='./mario1.png'/>
        )
    }else{
        return(
            <img className={'marioJump'} src='./mario2.png'/>
        )
    }
};

export default Mario;