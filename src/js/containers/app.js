import React from "react";
import PropTypes from "prop-types";
import { Header } from "../components/header";

export default class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Header/>
                <div className="page-container">
                    BOSE
                </div>
            </div>
        );
    }
} 
