import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import './news.css'

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '',
            title: '',
            origin: '',
            releaseDate:''
        }
    }
    componentWillMount(){

        axios.get('http://userinterface.cspea.cn/content/695').then((res) => {
            this.setState({
                content: res.data.entity.jcContentTxt.txt,
                title: res.data.entity.jcContentExt.title,
                origin: res.data.entity.jcContentExt.origin,
                releaseDate:res.data.entity.jcContentExt.releaseDate
            }, () => {
            })
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <div className="w-newscont">
                    <div className="w-news-page" >
                        <h1>{this.state.title}</h1>
                        <span className="source">来源： {this.state.origin}
                            时间：{moment(this.state.releaseDate).format('YYYY-MM-DD')}</span> 
                        <div className="pageCont">
                        <div dangerouslySetInnerHTML={{
                                __html: `${this.state.content}`
                            }}>
                        </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default News