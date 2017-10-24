import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import P600BG from "../../images/p600-right.jpg";
import 'react-day-picker/lib/style.css';

export default class P600 extends React.Component {
    constructor(){
        super();
        this.state = {
            formValue: {
                firstname: "",
                lastname: "",
                email:"",
                phone:"",
                serialNo: "",
                // state:"",
                // street:"",
                // postcode:"",
                newsletter: false,
                color: "Arctic White",   
            },
            selectedDays : new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDayClick =this.handleDayClick.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log( this.state.formValue );
    }

    handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const old_state = this.state.formValue;
        Object.assign(old_state, { [name] : value });
        this.setState({
            formValue: old_state
        });
    }

    handleDayClick(day){
        const old_state = this.state.formValue;
        Object.assign(old_state, { date : day.format('DD/MM/YYYY')  });
        this.setState({
            formValue: old_state
        });
    };

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
                        <div className="form-block">
                        <h3 className="form-header">Please enter your details below to receive FREE Wave®SoundTouch® music system IV</h3>
                            <form id="submit-form" action="#" method="post" encType="multipart/form-data"
                            onSubmit = { (e) => { this.handleSubmit(e) } } >
                                <input type="hidden" id="uploaded-file-name" name="uploaded-file-name" value=""/>
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <label htmlFor="firstname">FIRST NAME*</label>
                                        <input id="firstname" type="text" name="firstname" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-col2">
                                        <label htmlFor="lastname">LAST NAME*</label>
                                        <input id="lastname" type="text" name="lastname" onChange={this.handleChange}/>
                                    </div>
                                </div>					
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <label htmlFor="email">EMAIL*</label>
                                        <input id="email" type="email" name="email" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-col2">
                                        <label htmlFor="phone">PHONE*</label>
                                        <input id="phone" type="text" name="phone" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <label htmlFor="serialNo">Lifestyle® 650 serial number*</label>
                                        <input id="serialNo" type="text" name="serialNo" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-col2">
                                        <label htmlFor="dop">Date of purchase</label>
                                        <DayPickerInput id="dop" name="date" placeholder="DD/MM/YYYY" format="DD/MM/YYYY" onDayChange={this.handleDayClick} value={ this.state.formValue.date } />
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <label htmlFor="shipping-address">SHIPPING ADDRESS*</label>
                                        <textarea id="shipping-address" name="shippingAddress" value={ this.state.formValue.shippingAddress } onChange={this.handleChange}/>
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
                                        <input type="checkbox" id="newsletter" name="newsletter" onChange={this.handleChange}/><label className="forcheck">Yes, I'd like email updates regarding new products and promotions from Bose®.</label>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <label htmlFor="color">Pick color of FREE Wave® SoundTouch® music system IV</label>
                                        <select id="color" name="color" value={ this.state.formValue.color } onChange={this.handleChange}>
                                            <option value="Arctic White">Arctic White</option>
                                            <option value="Black">Black</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <input type="submit" value="SUBMIT" id="submit-btn" />
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <div className="msg"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 