import React, { Component } from 'react'
import StatusList from './status'
import moment from 'moment'

import './lists.css'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {

    }
    
    
    render(){
        let { data } = this.props
        
        return (
            <div className="list-section">
                <div className="section-top">
                    <div className="section-top-left">
                        <StatusList data={data.businessStatus}/>
                        <span className="name">{data.projectName}</span>
                    </div>
                    <div className="section-top-right">
                    {
                        data.tagName.split(',').map((data,index) => {
                            return (
                                <span key={index}>{data}</span>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="section-bottom">
                    <div>
                        <span>项目编号：{data.projectCode}{data.projectClassifyCode}</span>
                        <span>项目所在地：{data.zoneName}</span>
                    </div>
                    <div>
                        <span>转让底价：<em className="price">{data.projectPrice}</em>万元</span>
                        <span>披露时间：{moment(data.publishDate).format('YYYY-MM-DD')}
                        /{moment(data.expireDate).format('YYYY-MM-DD')}</span>
                    </div>
                    <div>
                        <span>拟转让比例：{data.sellPercent}%</span>
                        <span>项目来源：{data.tradInstitutionName}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;