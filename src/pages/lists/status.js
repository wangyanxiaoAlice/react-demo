import React, { Component } from 'react'

export default class StatusList extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    
    businessStatus() {
        let businessStatus = this.props.data;

        const blue = {
            background:'#28A0F3'
        };
        const red = {
            background:'#DB1004'
        };
        const gray = {
            background:'#2CC884'
        };
        if (businessStatus=== 'A01') {
          return <span className="status" style={blue}>预挂牌</span>;
        }else if(businessStatus==='A02'|| businessStatus==='A03'){
            return <span className="status" style={red}>正在披露</span>;
        }else if(businessStatus === 'A06' || businessStatus === 'A07'){
            return <span className="status" style={gray}>成交公示</span>;
        }
        
    }
    render(){
        return(
            <span>{this.businessStatus()}</span>
        )
    }
}