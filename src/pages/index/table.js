import React, { Component } from 'react'
// import { ReactDOM } from 'react-dom'
import moment from 'moment'

export default class TableComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: this.props.data
        }
    }
    componentDidMount() {
        console.log(this.props.data)
    }
    GetRender() {
        console.log(this.props.data, 'data')
        // this.state.listData.map((item, index) => {
        //     if(item.projectClassifyCode==='C01'){
        //         return (
        //             <tr key={index}>
        //                         <td>{item.projectClassifyCode}|{item.projectCode}</td>
        //                         <td className="name">{item.projectName}</td>
        //                         <td>{item.projectPrice === '' ? '面议' : item.projectPrice}</td>
        //                         <td>{item.sellPercent}</td>
        //                         <td>{item.property}</td>
        //                         <td>{item.zoneName}</td>
        //                         <td>{moment(item.publishDate).format('YYYY-MM-DD')}/{moment(item.expireDate).format('YYYY-MM-DD')}</td>
        //                     </tr>
        //         )
        //     }else if(item.projectClassifyCode==='C02'){
        //         return (
        //             <tr key={index}>
        //                         <td>{item.projectClassifyCode}|{item.projectCode}</td>
        //                         <td className="name">{item.projectName}</td>
        //                         <td>{item.projectPrice === '' ? '面议' : item.projectPrice}</td>
        //                         <td>{item.sellPercent}</td>
        //                         <td>{item.industryCode}</td>
        //                         <td>{item.zoneName}</td>
        //                         <td>{moment(item.publishDate).format('YYYY-MM-DD')}/{moment(item.expireDate).format('YYYY-MM-DD')}</td>
        //                     </tr>
        //         )
        //     }else {
        //         return (
        //             <tr key={index}>
        //                         <td>{item.projectClassifyCode}|{item.projectCode}</td>
        //                         <td className="name">{item.projectName}</td>
        //                         <td>{item.proPriceExplain}</td>
        //                         <td>{item.totalPercentExplain}</td>
        //                         <td>{item.industryCode}</td>
        //                         <td>{item.zoneName}</td>
        //                         <td>{moment(item.publishDate).format('YYYY-MM-DD')}/{moment(item.expireDate).format('YYYY-MM-DD')}</td>
        //                     </tr>
        //         )
        //     }
        // })
    }
    render() {
        return (
            <tbody>
                {
                    this.state.listData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.projectClassifyCode}|{item.projectCode}</td>
                                <td className="name">{item.projectName}</td>
                                <td>{item.projectPrice === '' ? '面议' : item.projectPrice}</td>
                                <td>{item.sellPercent}</td>
                                <td>{item.property}</td>
                                <td>{item.zoneName}</td>
                                <td>{moment(item.publishDate).format('YYYY-MM-DD')}/{moment(item.expireDate).format('YYYY-MM-DD')}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }

}



