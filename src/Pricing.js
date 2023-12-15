import React from 'react';
import './Pricing.css';

const PricingTable = () => {
    return (
        <div className="wrapper">
            {/* Pricing Card 1 */}
            <div className="pricing-table gprice-single">
                <div className="head">
                    <h4 className="title">Starter</h4>
                </div>
                <div className="content">
                    <div className="price">
                        <h1>$0</h1>
                    </div>
                    <div className="sign-up">
                        <a href="#signup-starter" className="btn bordered radius">
                            Sign up (30-Day Free Trial)
                        </a>
                    </div>
                    <ul>
                        <li>100 runs per month*</li>
                        <li>1 project</li>
                        <li>Individual usage</li>
                        <li>Community support in Discord</li>
                    </ul>
                </div>
            </div>

            {/* Pricing Card 2 */}
            <div className="pricing-table gprice-single">
                <div className="head">
                    <h4 className="title">Professional</h4>
                </div>
                <div className="content">
                    <div className="price">
                        <h1>$199</h1>
                    </div>
                    <div className="sign-up">
                        <a href="#signup-professional" className="btn bordered radius">
                            Sign up (30-day free trial)
                        </a>
                    </div>
                    <ul>
                        <li>10,000 runs per month*</li>
                        <li>Up to 3 projects</li>
                        <li>Only for individual usage</li>
                        <li>Community support in Discord</li>
                        <li>All data loaders included</li>
                    </ul>
                </div>
            </div>

            {/* Pricing Card 3 */}
            <div className="pricing-table gprice-single">
                <div className="head">
                    <h4 className="title">Enterprise</h4>
                </div>
                <div className="content">
                    <div className="price">
                        <h1>Let's talk</h1>
                    </div>
                    <div className="sign-up">
                        <a href="#signup-enterprise" className="btn bordered radius">
                            Sign up (30-day free trial)
                        </a>
                    </div>
                    <ul>
                        <li>100,000 runs per month*</li>
                        <li>Up to 30 projects</li>
                        <li>Up to 5 team members</li>
                        <li>Community support in Discord</li>
                        <li>Dedicated support</li>
                        <li>All features included</li>
                        <li>All data loaders included</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PricingTable;
