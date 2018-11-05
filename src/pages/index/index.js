import React, { Component } from 'react'
import axios from 'axios'
import TableComponent from './table'
import moment from 'moment'
import { NavLink, Link } from 'react-router-dom'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './index.css'
import imgjpg1 from '../../assets/images/1.jpg'
import img_1 from '../../assets/images/img1.png'
import img_2 from '../../assets/images/img2.png'
import img_3 from '../../assets/images/img3.png'
import img_4 from '../../assets/images/img4.png'
import img_5 from '../../assets/images/img5.png'
import img_6 from '../../assets/images/img6.png'

// axios.defaults.timeout = 15000;  //超时响应
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'; // 配置请求头



class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            swiperList: [],
            dataList: {
                C02: [],
                C01: [],
                C03: []
            },
            dataTitle:[
                {
                    titleName: '产股权项目',
                    trList: ['项目编号', '项目名称', '转让底价(万元)','拟转让比例','所属行业','项目所在地','披露起始日期']
                },
                
                {
                    titleName: '企业资产项目',
                    trList: ['项目编号', '项目名称', '转让底价(万元)','保证金','资产类别','项目所在地','披露起始日期']
                },
                {
                    titleName: '企业增资项目',
                    trList: ['项目编号', '项目名称', '拟募集资金金额(万元)','对应持股比例','所属行业','项目所在地','披露起始日期']
                }
               
            ],
            dataNews: {
                news: [],
                news1:[],
                news2: []
            },
            flag: false
        }


    }
    componentWillMount() {
        axios.get('http://cms.cspea.cn/api/ad/getByType.jspx?type=1').then((res) => {
            this.setState({
                swiperList: res.data
            }, () => {
                new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,    // 允许点击跳转
                    }
                });
            })
        })
        let C02 = axios.get('/projectInterface/project/listProjects',
            { params: { filter_projectClassifyCode: 'C02', sysCode: 1, pageSize: 6, filter_businessStatus: 
            'GPZ' } })
        let C01 = axios.get('/projectInterface/project/listProjects',
            { params: { filter_projectClassifyCode: 'C01', sysCode: 1, pageSize: 6, filter_businessStatus: 
            'GPZ' } })
        let C03 = axios.get('/projectInterface/project/listProjects',
            { params: { filter_projectClassifyCode: 'C03', sysCode: 1, pageSize: 6 , filter_businessStatus: 
            'GPZ'} })

        Promise.all([C01, C02, C03]).then((res) => {
            let dataList = Object.assign({}, this.state.dataList,
                
                { C02: JSON.parse(res[1].data.result.data) },
                { C03: JSON.parse(res[2].data.result.data) },
                { C01: JSON.parse(res[0].data.result.data) }
            )
            this.setState({
                dataList: dataList,
                flag: true
            }, () => {
                console.log('this.state.dataList',this.state.dataList)
            })
        })

        //this.timer = setInterval(this._move, 1000);

    }
    componentDidMount() {
        let ids = [455,456,782]  // 典型案例，政策法规，信用承诺
        let result = []
        for(let id of ids){
            result.push(axios.get(`http://userinterface.cspea.cn/channel/${id}/contents?page=1&pageSize=8`))
        }
        Promise.all(result).then((res) => {
            let newsList = Object.assign({}, this.state.dataNews,
                { news: res[0].data.entity.list },
                { news1: res[1].data.entity.list },
                { news2: res[2].data.entity.list }
            )
            this.setState({
                dataNews: newsList,
                flag: true
            }, () => {
                console.log(this.state.dataNews)
            })
        })

    }
    handleMouseOver() {
        // clearInterval(this.timer);
    }
    handleMouseOut() {
        //this.timer = setInterval(this._move, 5);
    }
    _move() {
        let lis = document.querySelector('.news-list').querySelectorAll('li')


    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
        // if (this.swiper) { // 销毁swiper
        //     this.swiper.destroy()
        // }
    }
    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <div className="swiper-container" >
                    <div className="swiper-wrapper">
                        {
                            this.state.swiperList.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <div className="swiper-slide-div" style={{ backgroundImage: `url(${item.image_url})` }}></div>
                                    </div>
                                )
                            })
                        }
                        <div className='swiper-pagination'></div>
                    </div>
                </div>
                <div className="index-carousel">
                    <div className="ccontainer-index carousel">
                        <div className="index-title">最新公告</div>
                        <div className="index-txt">
                            <ul className="news-list"
                                onMouseOver={this.handleMouseOver}
                                onMouseOut={this.handleMouseOut} >
                                <li>公正透明，8月10日起山东省属企业全面实行阳光采购,全国产权行业大数据汇集、共享与应用研讨会在京成功召开</li>
                                <li>光采购,全国产权行业大数据汇集、共享与应用研讨会在京成功召开</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="container">
                    {
                        this.state.flag?
                        Object.keys(this.state.dataList).map((key, index) => {
                            return (
                                <div key={key}>
                                    <div className="title">{this.state.dataTitle[index].titleName}</div>
                                    <div>
                                        <table width="100%">
                                            <thead>
                                                <tr>
                                                    {
                                                        this.state.dataTitle[index].trList.map((item,index) => {
                                                            return (
                                                                <th key={index}>{item}</th>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            </thead>
                                            <TableComponent
                                                key={key}
                                                data={this.state.dataList[key]} />
                                        </table>
                                    </div>
                                </div>
                            )
                        }):''
                    }
                </div>
                <div className="ad-wrap">
                    <img src={imgjpg1} alt="" height="150px;" width="1200px" />
                </div>
                <div className="margintop10">
                    <div className="title">
                        今年以来全国产权行业成交数据公示专区（2018-01-01 至 2018-10-30）
                    </div>
                    <div style={{height:'520px',background:'blue'}}>

                    </div>
                </div>
                <div className="margintop10">
                    <div className="title">产权交易资本市场服务专区</div>
                    <div className="flex-section-jg">
                            <div>
                                <img src={img_1} alt=""/>
                                <span>交易机构</span>
                            </div>
                            <div>
                                <img src={img_2} alt=""/>
                                <span>资本投资运营分会</span>
                            </div>
                            <div>
                                <img src={img_3} alt=""/>
                                <span>市场服务专业分会</span>
                            </div>
                            <div>
                                <img src={img_4} alt=""/>
                                <span>董事分会</span>
                            </div>
                            <div>
                                <img src={img_5} alt=""/>
                                <span>农村产权服务分会</span>
                            </div>
                            <div>
                                <img src={img_6} alt=""/>
                                <span>专家服务</span>
                            </div>
                    </div>
                </div>
                <div className="flex-section-index">
                    {
                        Object.keys(this.state.dataNews).map((key) => {
                            return (
                                <div className="flex-section-news" key={key}>
                                    <div className="title">典型案例</div>
                                    <ul>
                                        {
                                            this.state.dataNews[key].map((item,index) => {
                                                return (
                                                    <li 
                                                        key={index}>
                                                        <span><NavLink to={`/app/news/${item.jcContentExt.contentId}`}>{item.jcContentExt.title}</NavLink></span>
                                                        <span>{moment(item.jcContentExt.releaseDate).format('YYYY-MM-DD')}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                    
                </div>
                </div>
            </div>
        )
    }
}

export default Index