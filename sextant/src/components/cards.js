import React from 'react';
//import Exhibit from './components/exhibit';

const Cards = () => {
    return(
        <div className="container">
      <h1 className="my-4">Exhibit</h1>
        <ul>
                    <li>
                        <div class="card text-bg-primary mb-3">
                             <div class="card border-secondary mb-3">
                                <div class="card-body text-secondary">
                                <h5 class="card-title">Secondary Data card </h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                         <div class="card text-bg-primary mb-3">
                                <div class="card border-blue mb-3" >
                                    <div class="card-body text-secondary">
                                        <h5 class="card-title">Tertiary Data card </h5>
                                    </div>
                                    </div>
                        </div>
                    </li>
                    <li>
                         <div class="card text-bg-primary mb-3">
                                 <div class="card border-dark mb-3">
                                    <div class="card-body text-secondary">
                                        <h5 class="card-title">Quaternary Dark card </h5>
                                    </div>
                                    </div>
                        </div>
                
                   </li>
        </ul>
     </div>
    )
}
export default Cards;