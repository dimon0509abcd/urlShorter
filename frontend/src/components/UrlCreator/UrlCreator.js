import React, { Component } from 'react';
//import './App.css';
import axios from 'axios';

class UrlCreator extends Component {
    OnClick() {
        var full = document.getElementById('url-creator-input-full').value;
        console.log(full);
        axios.post('/api/shorten_urls/', {
            full:full,
        })
            .then(function (response) {
                console.log(response);
                var short = response.data.short;
                document.getElementById('url-creator-output-short').value = short;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="UrlCreator">
                <h1>Short URL Creator</h1>
                <input className= 'urlCreator-input' id='url-creator-input-full'/>
                <button onClick={this.OnClick}>Generate</button>
                <input className= 'urlCreator-input' id='url-creator-output-short'/>
            </div>
        );
    }

}
export default UrlCreator;