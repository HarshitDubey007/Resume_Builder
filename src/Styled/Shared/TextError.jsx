import React from 'react'

function TextError(props) {
    console.log("error comp",props.children)
    return (
        <p className ='error-message text-danger mb-3' >
        {typeof props.children==="string" && props.children}
        </p>
    )
}

export default TextError