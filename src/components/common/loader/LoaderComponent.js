import React from 'react';
import loading from '../../../assets/loader.svg'

const LoaderComponent = () => {
    return (
        <div style={{height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={loading} style={{width:'60px'}}/>
        </div>
    );
};

export default LoaderComponent;
