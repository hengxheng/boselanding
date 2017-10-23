import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            hoverState: "none",
        };
    }

    hoverLeft(){
        this.setState({
            hoverState: "left",
        });
    }

    hoverRight(){
        this.setState({
            hoverState: "right",
        });
    }

    hoverNone(){
        this.setState({
            hoverState: "none",
        });
    }

    render() {
        return (
            <div className="home-page">
                <div className="home-banner-wrapper" onMouseLeave= { () => { this.hoverNone() } }>
                    <div id="p1" className={ "home-banner "+this.state.hoverState } onMouseEnter={ () => { this.hoverLeft() } }>
                        <div className="home-banner-content" onMouseEnter={ () => { this.hoverLeft() } }>
                            <div className="home-banner-text">
                                <h3>I JUST PURCHASED</h3>
                                <h2>Lifestyle 600<br/>system</h2>
                                <p>Get your FREE SoundTouch® 20<br/>wireless system</p>
                                <Link to="/product-600" className="btn-w">CLICK HERE</Link>
                            </div>
                        </div>
                    </div>
                    <div id="p2" className={ "home-banner "+this.state.hoverState } onMouseEnter={ () => { this.hoverRight() } }>
                        <div className="home-banner-content" onMouseEnter={ () => { this.hoverRight() } }>
                            <div className="home-banner-text">
                                <h3>I JUST PURCHASED</h3>
                                <h2>Lifestyle 650<br/>system</h2>
                                <p>Get your FREE SoundTouch® 20<br/>wireless system</p>
                                <Link to="/product-650" className="btn-w">CLICK HERE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 