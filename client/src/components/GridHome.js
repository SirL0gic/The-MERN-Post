//BS components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React from 'react';


//extra css
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//custom css
import './custom.css';


var current_date = new Date();
var year = current_date.getFullYear();
var month = current_date.getMonth() + 1;
var day = current_date.getDate();
var hours = current_date.getHours();
var min = current_date.getMinutes();
var seconds = current_date.getSeconds();

var final_date = day + "/" + month + "/" + year + " " + hours + ":" + min  + ":" + seconds + " GMT+0400 (Gulf Standard Time)"; 

let GridHome = () => {
    
    return(
        <Container>
            <Row>
                <Col lg={12}>
                <div className="main-heading">
                    <h1 className="text-center">The MERN Post</h1>
                </div>
                <div className="date-area">
                    <div className="text-center"> 
                    <p className="date-display">{final_date}</p>
                    </div>
                </div>
                    
                </Col>
            </Row>
            <Row>
                <Col>2 of 3</Col>
            </Row>
            <Row>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default GridHome;