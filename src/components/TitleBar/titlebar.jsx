import React from 'react';
const TitleBar = (props) => {
    return (
        <React.Fragment>
        <div className="text-center">
            <h1>dCC Card Shop</h1>
        </div>
        <div className="left">
            <h2>{props.currentCollection}</h2>
        </div>
    </React.Fragment>
    );
}



export default TitleBar;