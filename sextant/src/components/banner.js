import React from 'react';

const Banner = (props) => {
    return (
            <div class="banner">
                <div class="container">
                    <div class="row">
                    <div class="col-sm-20">
                        <div class="text-bg-dark p-3">
                                <h1><span class="badge bg-secondary">{ props.title}</span></h1> 
                        </div>
                       
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Banner;