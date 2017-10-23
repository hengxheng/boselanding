import React from "react";
import PropTypes from "prop-types";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { renderRoutes } from 'react-router-config';


export default class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <Header/>
                <div className="page-container">
                    { renderRoutes( this.props.route.routes )}
                </div>
                <Footer/>
            </div>
        );
    }
} 
