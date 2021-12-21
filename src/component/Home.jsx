import React from 'react';
import Products from './Products';


const Home = () => {
    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assests/bg2.jpg" class="card-img" alt="Background"
                    height="600px" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 class="card-title  display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p class="card-text text-black lead fs-2">
                            CHECK OUT ALL THE TREND
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
};

export default Home;