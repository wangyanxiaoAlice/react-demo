import React, { Component } from 'react'
// import List from '../../components/list/list'
import './recommend.css'
import pic from '../../assets/images/1.jpg'
import start from '../../assets/images/start.png'
import axios from 'axios'

class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [
                {
                    "projectCode": "24ESSB20180162",
                    "businessStatus": "A02", "expireDate": 1541520000000,
                    "imgUrl": "/20181024/D5848BB3305369234C6C2C30848386FF8EB580A1270.jpg",
                    "industryCode": "", "industryName": "", "isGz": "T", "proPriceExplain": "",
                    "proTransId": "D5848BB3305369234C6C2C30848386FF8EB580A1",
                    "projectClassifyCode": "C01", "projectId": "944b344e-f801-450b-a925-4e341dd8c783",
                    "projectName": "一台卧式精密研磨机", "projectPrice": "10", "projectType": "99",
                    "property": "1", "publishDate": 1540396800000, "sellPercent": "",
                    "tradInstitutionId": "INS_013", "tradInstitutionName": "湖南省联合产权交易所有限公司",
                    "tradeDate": "", "tradeValue": "", "webBidDateEnd": 1541642400000,
                    "webBidDateStart": 1540396800000, "zone": "431000", "zoneName": "湖南省"
                },
            ]
        }
    }

    

    componentDidMount() {
        axios.get('/recommend?proId=4283B1E6EFD979B9E3965F2C5FF73BA8EB8CC67B').then((res) => {
            console.log(res)
             
            // result = Object.assign({}, dataJson.dataJson.tradInstitutionId, { data: res.data.result})
            // result1 = Object.assign({}, dataJson.dataJson, { tradInstitutionId:result})
            
            //  this.setState({
            //      data: result1
            //  }, () => {
            //   })
         })
    }

    render() {
        return (
            <div className="container">
                <div className="flex-section-img">
                    <div className="left-pic">
                        <img
                            src={pic} alt=""/>
                    </div>
                    <div className="right-flex-section">
                        <ul>
                            {
                                [1, 2, 3].map((item, index) => {
                                    return (
                                        <li
                                            className="right-pic"
                                            key={index}>
                                            <img src={pic} alt="" />
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
                <div className="recommend-section">
                    <div className="title">推荐项目</div>
                    <div className="recommend-flex">
                        <div>
                            <img src={pic} className="hot-pic" alt="" />
                        </div>
                        <div className="hot-flex-txt">
                            <h1>西峡金泰矿业有限公司100%股权</h1>
                            <div className="section-top-right">
                                <span>有色金属</span>
                                <span>软件技术</span>
                                <span>居民服务</span>
                            </div>
                            <div className="section-bottom">
                                <div>
                                    <span>项目编号：</span>
                                    <span>转让方：</span>
                                    <span class="jys">
                                        <img src={pic} alt="" className="logo-jys"/>
                                        浙江产权交易所
                                    </span>
                                </div>
                                <div>
                                    <span>转让底价：<em className="price">53,303,73</em></span>
                                    <span>项目所在地：河南</span>
                                </div>
                                <div>
                                    <span>推荐指数：<img src={start} alt="" className="start" /></span>
                                    <span>披露时间：</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommend