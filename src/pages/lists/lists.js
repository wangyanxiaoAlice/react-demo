import React, { Component } from 'react'
import List from './list'
import ListenScroll from './listenScroll'
import TabsControl from './tabControl'
import Condition from './condition'
import Filter from './filter'
import Http from '../../sevice/http'
// import { getProjectList } from '../../sevice/index'
// import Http from '../../sevice/index'

import { dataJson } from '../../data/data.js'
import './lists.css'

export default class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterData: {
                filter_projectName: '',
                filter_isGz: '',
                filter_projectClassifyCode: '',
                filter_projectType: '',
                filter_industryCode: '',
                filter_industryCodeTwo: '',
                filter_businessStatus: '',
                filter_zone: '',
                filter_tradInstitutionId: '',
                filter_projectPrice: '',
                filter_publishDate: '',
                filter_tradeDate: '',
                pageIndex: 1,
                pageSize: 10,
                sysCode: 1,
            },
            data: dataJson,
            scrollBottomNum: 10,
            currentPage: 1,
            bool: false,
            activeArr: [],
            activeList: {
                projectClassifyCode:
                {
                    id: 0,
                    dataType: '',
                    name: '全部',
                },
                label: { dataType: '', name: '全部' },
                industryCode: { dataType: '', name: '全部' },
                industryTwoCode: { dataType: '', name: '全部' },
                city: { dataType: '', name: '全部' },
                zone: { dataType: '', name: '全部' },
                projectPrice: { dataType: '', name: '全部' },
                tradInstitutionId: { tradInstitutionId: '', tradInstitutionName: '全部' },
                scale: { dataType: '', name: '全部' },
                tradeDate: { dataType: '', name: '全部' },
                businessStatus: { dataType: '', name: '正式披露' },
                gz: { dataType: '2', name: '国资' }
            },
            dataList: [],
            totalData: ''
        }
        this.handleBoolean = this.handleBoolean.bind(this)
        this.deleteLabel = this.deleteLabel.bind(this)
        this.getActive = this.getActive.bind(this)
    }
    componentWillMount() {
    }
    componentDidMount() {
        this._getData(1)
    }
    _getData(currentPage) {
        console.log(currentPage)
        let data = Object.assign({}, this.state.filterData, { pageIndex: currentPage })
        this.setState({
            filterData: data
        })
        Http.post('/proxy/projectInterface/project/listProjects',
            data).then((res) => {
                this.setState({
                    totalData: res.result.totalData,
                    dataList: this.state.dataList.concat(JSON.parse(res.result.data)),
                    currentPage: currentPage
                }, () => {
                    console.log(this.state.dataList)
                })
            })
    }

    _getFavorite() {
        Http.get('/api/favorite', {deviceId: '20181026143132317VINYYR'}).then((res) => {
            console.log(res)
        })
    }
    
    handleBoolean(bool) {
        this.setState({ bool: bool })
    }

    deleteLabel(id, key) {
        let { activeArr, activeList } = this.state
        let data
        if (key === 'tradInstitutionId') {
            data = Object.assign({}, activeList, { [key]: { tradInstitutionId: '', tradInstitutionName: '全部' } })
        } else {
            data = Object.assign({}, activeList, { [key]: { dataType: '', name: '全部' } })
        }
        this.setState({
            activeArr: activeArr.filter((item) => {
                if (item.id !== id) {
                    return item;
                }
            }),
            activeList: data
        })
    }

    getActive(selected, activeArr) {
        // console.log('filterDatathis.state.activeList',activeArr)

        this.setState({
            activeList: selected,
            activeArr: activeArr
        })
        // console.log(Object.entries(activeArr))
        for (let data of activeArr) {
            let value = data.value
            let key = `filter_${data.key}`
            // console.log(data)
            let datas = Object.assign({}, this.state.filterData,
                { [key]: value })
            this.setState({ filterData: datas, dataList: [] }, () => { console.log('dd', this.state.filterData) })


        }
        // console.log('get',this.state.filterData)
        // this._getData(1)
    }

    render() {
        let { activeArr } = this.state

        return (
            <div className="container">
                <div className="active-box">
                    {
                        activeArr.map((item, index) => {
                            return (
                                <Condition
                                    data={item}
                                    key={index}
                                    deleteLabel={this.deleteLabel}
                                    handleBoolean={this.handleBoolean} >
                                </Condition>
                            )
                        })
                    }
                </div>

                <Filter
                    selected={this.state.activeList}
                    dataJson={this.state.data}
                    activeArr={this.state.activeArr}
                    getActive={this.getActive}>
                </Filter>
                <div className="list-wrap">
                    <TabsControl handleGetFavorite={this._getFavorite}>
                        <div name="最新" >
                            <div className="list-box">
                                <span>共有{this.state.totalData}宗符合条件的信息</span>
                                {
                                    this.state.dataList.map((item, index) => {
                                        return (
                                            <List
                                                key={index}
                                                data={item}>
                                            </List>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div name="猜你喜欢" >
                        </div>
                        <div name="热门">
                        </div>
                        <div name="转让底价">
                        </div>
                            
                    </TabsControl>
                </div>

                <ListenScroll
                    scrollCallback={this._getData.bind(this, this.state.currentPage + 1)}
                    num={this.state.scrollBottomNum} />
            </div>
        )
    }
}
