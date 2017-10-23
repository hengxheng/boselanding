import React from "react";
import P600BG from "../../images/p600-right.jpg";

export default class P600 extends React.Component {
    render() {
        return (
            <div id="pro1" className="product-page">
                <div className="page-header">
                    <div className="site-inner">
                        <div className="page-header-inner">
                            <h3>Thank you for purchasing</h3>
                            <h2>Lifestyle® 600 home entertainment system.</h2>
                            <p>For a limited time, receive a FREE Wave®SoundTouch® music system when you purchase a Lifestyle® 650 home entertainment system.</p>
                            <a href="#" id="redeem-btn" className="btn-b">REDEEM FREE PRODUCT</a>
                        </div>
                    </div>
                </div>
                <div className="page-middle">
                    <div className="page-middle-inner">
                        <div className="site-inner">
                            <div className="middle-text-block">
                                <div className="middle-text-inner">
                                    <p><strong>EXCEPTIONAL PERFORMANCE. ELEGANT DESIGN.</strong></p>
                                    <h2>Wave® SoundTouch® music system IV</h2>
                                    <p>There's a world of music out there. This compact system lets you easily enjoy all of it. Use it to stream millions of songs from music services such as Spotify® and Deezer®, thousands of Internet radio stations and the music stored on your smartphone, tablet or computer.</p>
                                    <a href="#" className="btn-w" target="_blank">LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="page-middle-bg">
                            <img src={ P600BG } alt="P600" />
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
                <div className="page-form">
                    <div className="site-inner">
                        <h3 className="form-header">Please enter your details below to receive FREE Wave®SoundTouch® music system IV</h3>
                        <div className="form-block">
                        <form id="submit-form" action="#" method="post" encType="multipart/form-data">
                            <input type="hidden" id="uploaded-file-name" name="uploaded-file-name" value=""/>
                            <div className="form-ele">
                                <div className="form-col1">
                                    <input id="fullname" type="text" name="fullname" placeholder="Name*" />
                                </div>
                            </div>					
                            <div className="form-ele">
                                <div className="form-col1">
                                    <input id="email" type="email" name="email" placeholder="Email*" />
                                </div>
                            </div>
                            <div className="form-ele">
                                <div className="form-col1">
                                    <input id="c-email" type="email" name="confirm-email" placeholder="Confirm Email*" />
                                </div>
                            </div>
                            <div className="form-ele">
                                <div className="form-col1">
                                    <input id="phone" type="text" name="phone" placeholder="Phone*" />
                                </div>
                            </div>
                            <div className="form-ele">
                                <div className="form-col1">
                                    <input id="state" type="text" name="state" placeholder="State*" />
                                </div>
                            </div>
                            <div className="form-ele">
                                <div className="form-col1">
                                    <div id="file-upload-area">
                                        <div className="box__input">
                                            <p>Drop or <a href="#" id="file-btn">Select</a> photograph to upload</p>
                                            <input id="fileToUpload" type="file" name="upload-photo" />	
                                        </div>
                                        <div id="progress-wrp">
                                            <div className="progress-bar"></div>
                                            <div className="status">0%</div>
                                        </div>
                                        <div id="output"></div>
                                        <a href="#" id="uplaod-btn">UPLOAD</a>
                                    </div>
                                </div>
                            </div>
                            <div id="upload-output"></div>
                            <div className="form-ele">
                                <div className="form-col1">
                                    <input type="checkbox" id="check-1" /><label>Yes, I'd like email updates regarding new products and promotions from Bose®.</label>
                                </div>
                            </div>
                            <div className="form-ele">
                                <input type="submit" value="SUBMIT" id="submit-btn" />
                            </div>
                            <div className="form-ele">
                                <div className="msg"></div>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
} 