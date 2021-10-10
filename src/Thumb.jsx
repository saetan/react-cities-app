import React from 'react'

export default function Thumb(props) {
    return (
        <>
            <img className="thumb"
                src={props.url}
                alt={props.city} style={
                    { border: props.isSelected ? '4px solid green' : '3px solid #EFEFEF' }
                } id={props.id} />
        </>
    )
}
