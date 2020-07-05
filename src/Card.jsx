import React from 'react';
const Card=(props)=>{
    return(
    <>
                            <div className='col-md-4 col-10 mx-auto'>
                                <div className="card " >
                                    <img src={props.imgsrc} className="card-img-top size" alt={props.imgsrc}/>
                                    <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up</p>
                                        <a href={props.visit} className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
        </>
    );
};

export default Card;