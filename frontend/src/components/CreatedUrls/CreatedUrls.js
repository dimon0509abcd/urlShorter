import React, { Component } from 'react';
//import './App.css';
import axios from 'axios';

class CreatedUrls extends Component {
    constructor(props){
        super(props);
        this.setDataToState = this.setDataToState.bind(this);
    }
    state = {
        data:[]
    };
    setDataToState(data){
        this.setState({data:data})
    }
    componentDidMount(){
        var creator_id = localStorage.getItem('id');
        axios.put('/api/shorten_urls/', {
            creator_id:creator_id,
        })
            .then((response)=> {
                console.log(response);
                this.setDataToState(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    onClick(short) {
        var creator_id = localStorage.getItem('id');
        axios.delete('api/shorten_urls', {params: {short: short,creator_id:creator_id}}
        )
            .then(function (response) {
                axios.put('/api/shorten_urls/', {
                    creator_id:creator_id,
                })
                    .then((response)=> {
                        console.log(response);
                        this.setDataToState(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    renderLine(full,short,stats){
        return(
            <div className="created-url">
                <input className= 'created-urls-list' value={full} readOnly/>
                <input className= 'created-urls-list' value={short} readOnly/>
                <input className= 'created-urls-list' value={stats} readOnly/>
            </div>
        )
    }
    render(){
        console.log(this.state.data);
        return (
            <div className="CreatedUrls">
                {this.state.data.map((element)=>{
                    return this.renderLine(element.full,element.short,element.stats)
                })}
            </div>
        );
    }
}
export default CreatedUrls;