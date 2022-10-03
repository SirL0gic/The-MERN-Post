import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

let NavBar = () => {
    return (
        <ul>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li style="float:right"><a href="#about">About</a></li>
        </ul>

    );
}

