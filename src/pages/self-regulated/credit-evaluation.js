import React, { Component } from 'react'
import axios from 'axios'
// import Pagination from 'rpaging'
import PageComponent from '../../components/Pagecomponent'
import './selfRegulated.css'

axios.defaults.timeout = 15000;  //超时响应
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 配置请求头（推荐）
 axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'; // 配置请求头
// axios.defaults.baseURL = $core.use('http'); //确认协议和地址
// axios.defaults.withCredentials = true; 


export default class CreditEvaluation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            renderPage: true,
            dataList: [],
            pageConfig: {
                totalPage: ''
            },
            pageSize:10,
            currentPage:1
        }
    }
    getCurrentPage(currentPage) {
        this.getChannelContent({

            page: currentPage,
            pageSize: this.state.pageSize
        })
        this.setState({
           // dataList:data[currentPage-1].name
        })
    }
    async getChannelContent(param) {
        axios.get('http://userinterface.cspea.cn/credits',{ params: param}
        ).then((res) => {
            let data = Object.assign({}, this.state.pageConfig, {
                totalPage: res.data.entity.pages
            })
            this.setState({
                dataList: res.data.entity.list,
                pageConfig: data
            })
        })
    }
    componentWillMount() {

    }
    componentDidMount() {
        // this.getChannelContent({page:1, pageSize:10})

    }

    render() {
        return (
            <div className="content-container">
                <div >
                {
                    this.state.dataList.map((item, index) => {
                        return (
                            <div 
                                className="list-txt-section"
                                key={index}>
                                <div className="flex">
                                    <span>{item.companyName}</span>
                                    <span>{item.creditLevel}</span>
                                </div>
                                <div>
                                    <span>经营范围</span>
                                    <p>{item.scopeBusiness}</p>
                                </div>
                                
                                <span>
                                {item.industryRegAuth}
                                {item.regAddress}
                                </span>
                            </div>
                        )
                    })
                }
                </div>
                <div className="page-container">
                    <PageComponent
                        key={this.state.dataList}
                        pageConfig={this.state.pageConfig}
                        pageCallbackFn={this.getCurrentPage.bind(this)} />
                </div>
            </div>
        )
    }
}

