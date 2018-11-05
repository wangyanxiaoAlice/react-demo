import React, { Component } from 'react'

export default class TabsControl extends Component{

    constructor(){
        super();
        this.state={ 
            currentIndex : 0
        };
    }

    check_tittle_index(index){
        return index===this.state.currentIndex ? "Tab_tittle current" : "Tab_tittle";
    }

    check_item_index(index){
        return index===this.state.currentIndex ? "Tab_item show" : "Tab_item";
    }
    getFavorite(){
        console.log(this.props)
        this.props.handleGetFavorite()
    }

    render(){
        return(
            <div>
                <ul className="list-title">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            <li onClick={this.getFavorite.bind(this)} className={ this.check_tittle_index(index) }>{ element.props.name }</li>
                            );
                            // onClick={ () => { this.setState({currentIndex : index}) } }
                    }) }
                </ul>
                <div className="Tab_item_wrap">
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <div className={ this.check_item_index(index) }>{ element }</div>
                            );
                    })}
                </div>
            </div>
            );
    }
}

