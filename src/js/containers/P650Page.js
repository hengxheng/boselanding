import 'react-day-picker/lib/style.css';

import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import P650BG from "../../images/p650-right.jpg";
import FileUploader from "../components/FileUploader";
import scrollToElement from 'scroll-to-element';
import axios from 'axios';


export default class P650 extends React.Component {
    render() {
        return (
            <div id="pro2" className="product-page">
                <div className="page-header">
                    <div className="site-inner">
                        <div className="page-header-inner">
                            <h3>Thank you for purchasing</h3>
                            <h2>Lifestyle® 600 home entertainment system.</h2>
                            <p>For a limited time, receive a FREE SoundTouch 20 wireless system when you purchase a Lifestyle® 600 home entertainment system and easily personalise presets for one-touch access to the music you love.</p>
                            {/* <a href="#" id="redeem-btn" className="btn-b" onClick={ (e) => this.scrollToForm(e) }>REDEEM FREE PRODUCT</a> */}
                        </div>
                    </div>
                </div>
                <div className="page-middle">
                    <div className="page-middle-inner">
                        <div className="site-inner">
                            <div className="middle-text-block">
                                <div className="middle-text-inner">
                                    <p><strong>ROOM-FILLING SOUND. COMPACT DESIGN.</strong></p>
                                    <h2>SoundTouch® 20 wireless speaker</h2>
                                    <p>Fill an apartment with sound or flood a home with music. SoundTouch® speakers are made for the way you live—and they’re made to grow with you, too. Once you have one, you can add more at any time. They all work together. So as you go from room to room, your music goes along with you.</p>
                                    <a href="#" className="btn-w" target="_blank">LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="page-middle-bg">
                            <img src={ P650BG } alt="P600" />
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
} 