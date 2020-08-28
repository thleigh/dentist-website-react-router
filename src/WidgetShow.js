import React from 'react'

const WidgetShow = (props) => {
    return (
        <div>
            <h1>You entered this URL Parameter: {props.match.params.id}</h1>
            <p>One procedure that I do is: {props.procedures[props.match.params.id]}</p>
        </div>
    )
}
export default WidgetShow