import React, { Component } from 'react';
//import './App.css';
import axios from 'axios';

class CreatedUrls extends Component {
    state = {
        data:[]
    };
    componentDidMount(){
        var creator_id = localStorage.getItem('id');
        var vm = this;
        axios.put('/api/shorten_urls/', {
            creator_id:creator_id,
        })
            .then(function (response) {
                console.log(response);
                vm.setState({data:response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    onClick(){

    }
    renderLine(full,short,stats){
        return(
            <div className="created-url">
                <input className= 'created-urls-list' value={full} readOnly/>
                <input className= 'created-urls-list' value={short} readOnly/>
                <input className= 'created-urls-list' value={stats} readOnly/>
                <button onClick={this.onClick.bind(this)}>remove</button>
            </div>
        )
    }
    render(){
        console.log(this.state.data);
        var vm = this;
        return (
            <div className="created-urls">
                {this.state.data.map(function(element){
                    return vm.renderLine(element.full,element.short,element.stats)
                })}
            </div>
        );
    }
}
export default CreatedUrls;