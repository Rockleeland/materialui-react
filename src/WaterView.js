import React from 'react';
import Button from "@material-ui/core/Button";


const WaterView = (props) => {
    //reusable functional component that changes 
    //depending on the parent stateful component
    return (
    <div>
        <Button 
            onClick={props.toggle}
        >   
            {props.hideShow} div!
        </Button>
        <div style={props.style}>{props.waterForm}</div>
    </div>
    )

}

export default WaterView;