import 'react-day-picker/lib/style.css';

import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import P650BG from "../../images/p650-right.jpg";
import FileUploader from "../components/FileUploader";
import scrollToElement from 'scroll-to-element';
import axios from 'axios';


export default class P650 extends React.Component {
    constructor(){
        super();
        this.state = {
            formValue: {
                product: "Lifestyle® 650",
                firstname: "",
                lastname: "",
                email:"",
                phone:"",
                serialNo: "",
                date: "",
                address: "",
                city:"",
                state:"",
                postcode:"",
                country:"",
                newsletter: false,
                color: "Arctic White",
                file:""   
            },
            fileUploaded : false,
            selectedDays : new Date(),
            submitStatus : "",
            formMsg : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDayClick =this.handleDayClick.bind(this);
        this.doneUpdate = this.doneUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        Object.assign(old_state, { date : day.format('YYYY-MM-DD')  });
        this.setState({
            formValue: old_state
        });
    };

    

    doneUpdate(fileName){
        if(fileName != "" && (typeof fileName != "undefined")){
            const old_state = this.state.formValue;
            Object.assign(old_state, { file: fileName });
            this.setState({
                formValue: old_state
            });
        }
    }

    scrollToForm(e){
        e.preventDefault();
        scrollToElement('#page-form', {
            offset: 0,
            duration: 1000
        });
    }

    //handle from submition
    handleSubmit(e) {
        e.preventDefault();
        let data = this.state.formValue;
        let valid = true;
        let errorMsg = [];

        //form validation
        let checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let checkPhone = /^\d+$/;
        let checkSerial = /^(074430|074426).*$/;

        if(data.firstname == ""){
            valid = false;
            errorMsg.push("First name is required.");
        }
        if(data.lastname == ""){
            valid = false;
            errorMsg.push("Last name is required.");
        }
        if(!checkEmail.test(data.email) || data.email == ""){
            valid = false;
            errorMsg.push("Invalid Email");
        }
        if(!checkPhone.test(data.phone) || data.phone == ""){
            valid = false;
            errorMsg.push("Invalid Phone");
        }
        if(!checkSerial.test(data.serialNo) || data.serialNo == ""){
            valid = false;
            errorMsg.push("Invalid Serial Number");
        }
        if(data.date == ""){
            valid = false;
            errorMsg.push("Purchased date is required");
        }
        if(data.address == ""){
            valid = false;
            errorMsg.push("Address is required.");
        }
        if(data.city == ""){
            valid = false;
            errorMsg.push("City is required.");
        }
        if(data.state == ""){
            valid = false;
            errorMsg.push("State is required.");
        }
        if(data.postcode == ""){
            valid = false;
            errorMsg.push("Postcode is required.");
        }
        if(data.country == ""){
            valid = false;
            errorMsg.push("Country is required.");
        }
        if(data.file == ""){
            valid = false;
            errorMsg.push("Please upload the receipt before submitting the form.");
        }

        if(!valid){
            let error = "";
            errorMsg.map( (i) =>{
                error += "<p>"+i+"</p>";
            });
            this.setState({
                submitStatus: "error",
                formMsg: error
            });
        }
        else{
            this.setState({
                submitStatus: "",
                formMsg: ""
            });

            const submited_url = "/server/form.php";
            const params = Object.keys(data).map( (k) => {
                return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
            }).join('&');

            axios.post(submited_url, params)
                .then( res => {
                        console.log(res.data);
                        this.setState({
                            submitStatus: "success",
                            formMsg: "<p>Thank you for submitting a request to redeem a free product. We will be in touch shortly.</p>"
                        });
                    }
                )
                .catch(error => {
                    console.log(error)
                });
        }
    }

    render() {
        return (
            <div id="pro2" className="product-page">
                <div className="page-header">
                    <div className="site-inner">
                        <div className="page-header-inner">
                            <h3>THANK YOU FOR PURCHASING</h3>
                            <h2>Lifestyle® 650 home entertainment system.</h2>
                            <p>For a limited time, receive a FREE Wave®SoundTouch® music system when you purchase a Lifestyle® 650 home entertainment system.</p>
                            {<a href="#" id="redeem-btn" className="btn-b" onClick={ (e) => this.scrollToForm(e) }>REDEEM FREE PRODUCT</a>}
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
                                <a href="https://www.bose.com.au/en_au/products/speakers/multi_room_speakers/wave-soundtouch-music-system.html#v=wms_soundtouch_4_espresso_black_anz" className="btn-w" target="_blank">LEARN MORE</a>
                            </div>
                        </div>
                        </div>
                        <div className="page-middle-bg">
                            <img src={ P650BG } alt="P600" />
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
                <div id="page-form" className="page-form">
                    <div className="site-inner">
                        <div className="form-block">
                        <h3 className="form-header">Please enter your details below to receive FREE Wave®SoundTouch® music system IV</h3>
                            <form id="submit-form" action="#" method="post" encType="multipart/form-data"
                            onSubmit = { (e) => { this.handleSubmit(e) } } >
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <label htmlFor="firstname">FIRST NAME*</label>
                                        <input id="firstname" type="text" value={this.state.formValue.firstname} name="firstname" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-col2">
                                        <label htmlFor="lastname">LAST NAME*</label>
                                        <input id="lastname" type="text" name="lastname" value={this.state.formValue.lastname} onChange={this.handleChange}/>
                                    </div>
                                </div>					
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <label htmlFor="email">EMAIL*</label>
                                        <input id="email" type="email" name="email" value={this.state.formValue.email} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-col2">
                                        <label htmlFor="phone">PHONE*</label>
                                        <input id="phone" type="text" name="phone" value={this.state.formValue.phone} onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <label htmlFor="serialNo">Lifestyle® 650 serial number*</label>
                                        <input id="serialNo" type="text" name="serialNo" value={this.state.formValue.serialNo} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-col2">
                                        <label htmlFor="dop">Date of purchase</label>
                                        <DayPickerInput id="dop" name="date" placeholder="YYYY-MM-DD" format="YYYY-MM-DD" value={this.state.formValue.date} onDayChange={this.handleDayClick}/>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <label htmlFor="address">SHIPPING ADDRESS*</label>
                                        <textarea id="address" name="address" value={ this.state.formValue.address } onChange={this.handleChange} placeholder="Address*"/>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <input id="city" type="text" name="city" onChange={this.handleChange} value={ this.state.formValue.city } placeholder="City/ Town*"/>
                                    </div>
                                    <div className="form-col2">
                                        <select id="state" name="state" onChange={this.handleChange} value={ this.state.formValue.state }>
                                            <option value="">State*</option>
                                            <option value="NSW">NSW</option>
                                            <option value="ACT">ACT</option>
                                            <option value="LHI">LHI</option>
                                            <option value="NSW">NSW</option>
                                            <option value="NT">NT</option>
                                            <option value="QLD">QLD</option>
                                            <option value="SA">SA</option>
                                            <option value="TAS">TAS</option>
                                            <option value="VIC">VIC</option>
                                            <option value="WA">WA</option>
                                            <option value="NZ">NZ</option>
                                        </select>
                                   </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col2">
                                        <input id="postcode" type="text" name="postcode" value={ this.state.formValue.postcode } onChange={this.handleChange} placeholder="Postcode*"/>
                                    </div>
                                    <div className="form-col2">
                                        <select id="country" name="country" value={ this.state.formValue.country } onChange={this.handleChange}>
                                            <option value="">Country*</option>  
                                            <option value="AU">Australia</option>
                                            <option value="NZ">New Zealand</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <label>Submit receipt*</label>
                                        <FileUploader doneUpdate = {this.doneUpdate}/>
                                    </div>
                                </div>
                                <div id="upload-output"></div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <label htmlFor="color">Pick color of FREE Wave® SoundTouch® music system IV</label>
                                        <select id="color" name="color" value={ this.state.formValue.color } onChange={this.handleChange}>
                                            <option value="Arctic White">Arctic White</option>
                                            <option value="ESPRESSO BLACK">ESPRESSO BLACK</option>
                                            <option value="PLATINUM SILVER">PLATINUM SILVER</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                    <label className="forcheck"><input type="checkbox" id="newsletter" name="newsletter" onChange={this.handleChange}/>Yes, I'd like email updates regarding new products and promotions from Bose®.</label>
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <input type="submit" value="SUBMIT" id="submit-btn" />
                                    </div>
                                </div>
                                <div className="form-ele">
                                    <div className="form-col1">
                                        <div className={ "msg "+ this.state.submitStatus }>
                                            <div dangerouslySetInnerHTML={{ __html: this.state.formMsg }} />
                                        </div>
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