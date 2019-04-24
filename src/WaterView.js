import React from 'react';

const WaterView = (props) => {
    //reusable functional component that changes 
    //depending on the parent stateful component
    return (
    <div>
        <button onClick={props.toggle}>{props.hideShow} div!</button>
        <div style={props.style}>{props.waterForm}</div>
    </div>
    )

}

export default WaterView;