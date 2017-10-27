import React from "react";
import Dropzone from 'react-dropzone';
import axios from 'axios';

export default class FileUploader extends React.Component {
    constructor(){
        super();
        this.state = {
            droped: false,
            uploading: false,
            uploaded: false,
            file: undefined,
            uploadedFile: "",
            percentCompleted: 0,
            outputMessage: ""
        }
        this.onDrop = this.onDrop.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
        this.onUpload = this.onUpload.bind(this);
    }

    onDrop(file){
        this.setState({
            ...this.state,
            droped: true,
            uploading: false,
            outputMessage: "",
            file
        });
    }

    onDropRejected(){
        this.setState({
            ...this.state,
            droped: false,
            outputMessage: "Maximum file upload size is 4MB"
        });
    }

    onUpload(e){
        e.preventDefault();
        
        if(Array.isArray(this.state.file)){
            e.stopPropagation();

            //change state for showing progress bar
            this.setState({
                ...this.state,
                uploading: true    
            });

            const f = this.state.file[0];
            const formFile = new FormData();
            formFile.append('uploadfile', f, f.name);

            //server upload progress url
            // const file_url = document.location.origin+"/bose_landing/server/ajax-file-upload.php";
            const file_url = "/server/ajax-file-upload.php";
            const config = {
                onUploadProgress: (progressEvent) => {
                    let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    this.setState({
                        ...this.state,
                        percentCompleted: percent
                    })
                }
            };

            axios.post(file_url, formFile, config)
                .then(res => {
                    console.log(res);
                    this.props.doneUpdate(res.data);
                })
                .catch(error => {
                    console.log(error)
                });
        }
        
    }

    render(){
        let DropAreaStyle = {
            outline: "1px dashed #888",
            width: "100%",
            height: "160px",
            boxSizing: "border-box",
            padding: "30px",
            fontSize: "18px",
            cursor: "pointer"
        }

        let progressWidth = {
            width: this.state.percentCompleted+"%"
        };
            
        return (
            <div id="file-upload-zone" className={ this.state.uploading? "uploading" : (this.state.droped?"droped":"waiting")}>
                <Dropzone id="file-upload-area" style={ DropAreaStyle } accept="image/jpeg, image/png, application/pdf" maxSize={5097152} onDrop={this.onDrop} onDropRejected={this.onDropRejected}>
                    <div className="box__input">
                        <p>{ this.state.droped? (Array.isArray(this.state.file)? this.state.file[0].name : ""): "Drop or click to upload"}</p>
                    </div>
                    <div id="progress-wrp">
                        <div className="progress-bar" style={ progressWidth }></div>
                        <div className="status">{ this.state.percentCompleted }%</div>
                    </div>
                    <div id="output">{ this.state.outputMessage }</div>
                    <a href="#" id="uplaod-btn" onClick={ (e) => { this.onUpload(e) } }>UPLOAD</a>
                </Dropzone>
            </div>
        );
    }
}
