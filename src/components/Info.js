import React from "react"
import ReactDOM from 'react-dom';

class Info extends React.Component{

render() {
    console.log(this.props.infoTitle);
    return (
        <div>
            <h1>Info</h1>
            <h1>{this.props.infoTitle}</h1>
        </div>
        )
}
    
}


export default Info;
