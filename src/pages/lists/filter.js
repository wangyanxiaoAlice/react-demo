import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initData } from '../../reducers/filter'
//import http from '../../sevice/index'  // , initExchange, initTwoData
import { dataJson, zone, data1, tradInstitutionId, businessStatus, gz, city } from '../../data/data.js'
// import logger from 'redux-logger'
import Http from '../../sevice/http'


import './lists.css'
// import { relative } from 'path';

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
            dataJson: '',
            initDataTwo: [],
            initDataTwoFlg: false,
            showTagData: [],
            showTagDataFlag: false,
            checked: false,
            zone: zone,
            data1: data1,
            tradInstitutionId: tradInstitutionId,
            jysFlag: false,
            isShowFlag: false  // 行业二级是否显示
        }
        // this.toggleClick = this.toggleClick.bind(this)
    }

    componentWillMount() {
        //this.getInitData()
        this.setState({
            dataJson: dataJson
        })
    }

    componentDidMount() {
        //

    }

    handleClick(item, key) {
        const id = Date.now();
        if (key === 'tradInstitutionId') {
            this.props.selected[key] = {
                tradInstitutionId: item.tradInstitutionId,
                tradInstitutionName: item.tradInstitutionName
            }
            let data = Object.assign({}, this.state.activeList, {
                tradInstitutionId: {
                    tradInstitutionName: item.tradInstitutionName,
                    tradInstitutionId: item.tradInstitutionId
                }
            })
            this.setState({
                activeList: data
            })
            this.props.activeArr.map((data, index) => {
                if (data.key === key) {
                    this.props.activeArr.splice(index, 1)
                }
            });
            this.props.activeArr.push(
                {
                    id: id,
                    name: item.tradInstitutionName,
                    key: key,
                    value: item.tradInstitutionId
                }
            )
        } else if (key === 'tagCode') {
            this.props.selected[key] = {
                dataType: item.tagCodeC,
                name: item.tagCodePname
            }
            let data = Object.assign({}, this.state.activeList, {
                [key]: {
                    dataType: item.tagCodeC,
                    name: item.tagCodePname
                }
            })
            this.setState({
                activeList: data
            })
            this.props.activeArr.map((data, index) => {
                if (data.key === key) {
                    this.props.activeArr.splice(index, 1)
                }
            });
            this.props.activeArr.push(
                {
                    id: id,
                    name: item.tagCodePname,
                    key: key,
                    value: item.tagCodeC
                }
            )
        } else if (key === 'industryCode' || key === 'industryTwoCode') {
            this.props.selected[key] = {
                dataType: item.industryCode,
                name: item.industryName
            }
            let data = Object.assign({}, this.state.activeList, {
                [key]: {
                    dataType: item.industryCode,
                    name: item.industryName
                }
            })
            this.setState({
                activeList: data
            })
            this.props.activeArr.map((data, index) => {
                if (data.key === key) {
                    this.props.activeArr.splice(index, 1)
                }
            });
            this.props.activeArr.push(
                {
                    id: id,
                    name: item.industryName,
                    key: key,
                    value: item.industryCode
                }
            )
        } else {
            this.props.selected[key] = {
                dataType: item.dataType,
                name: item.name
            }
            let data = Object.assign({}, this.state.activeList, {
                [key]: {
                    dataType: item.dataType,
                    name: item.name
                }
            })
            this.setState({
                activeList: data
            })
            this.props.activeArr.map((data, index) => {
                if (data.key === key) {
                    this.props.activeArr.splice(index, 1)
                }
            });
            this.props.activeArr.push(
                {
                    id: id,
                    name: item.name,
                    key: key,
                    value: item.dataType
                }
            )
        }
        this.props.getActive(this.props.selected, this.props.activeArr)
    }
    getInitData() {
        let t = [{ tradInstitutionId: "", tradInstitutionName: "全部" }]
        let d = [{ industryCode: "", industryName: "全部" }]
        let result2, result1

        let promise1 = Http.get('/proxy/projectInterface/project/initData')
        let promise2 = Http.get('/proxy/projectInterface/project/initOrgData')
        Promise.all([promise1, promise2]).then((res1) => {
            result2 = d.concat(res1[0].result)
            result1 = t.concat(res1[1].result)
            this.props.initData(result2, result1)
            dataJson.projectClassifyCode.data[1].data = dataJson.projectClassifyCode.data[1].data.concat(result2)
            dataJson.projectClassifyCode.data[3].data = dataJson.projectClassifyCode.data[3].data.concat(result2)

            Http.get('/projectInterface/project/initDataTwo?dataType=J').then((res) => {
                dataJson.projectClassifyCode.data[4].data = dataJson.projectClassifyCode.data[4].data.concat(res.result)
            })


        })

    }
    getInitTwoData(item, key) {
        this.handleClick(item, key)
        Http.get(`/projectInterface/project/initDataTwo?dataType=${item.industryCode}`).then((res) => {
            this.setState({
                initDataTwo: res.result,
                initDataTwoFlg: true
            })
        })
    }
    _isShow(item, key, index) {
        this.handleClick(item, key)
        dataJson.projectClassifyCode.data.map((item, i) => {
            item.flag = false
            if (i === index) {
                item.flag = true
            }
        })
        if (!this.state.isShowFlag) {
            this.setState({
                isShowFlag: true,
                dataJson: dataJson
            })
        }
        Http.get(`/projectInterface/project/showTag?tagType=${item.dataType}`).then((res) => {
            this.setState({
                showTagData: res.result,
                showTagDataFlag: true
            })
        })

        if (item.dataType === 'C02' || item.dataType === 'C03') {
            this.setState({
                initDataTwoFlg: true
            })
        } else {
            this.setState({
                initDataTwoFlg: false
            })
        }

    }

    toggleClick() {
        this.setState({
            jysFlag: !this.state.jysFlag
        }, () => {
            console.log(this.state.jysFlag)
        })
    }

    handleToggleClick(){
        
    }

    render() {
        let { dataJson, selected, initDataResult, initExchangeResult } = this.props
        return (
            <div>
                <div className="top-filter">
                    {
                        Object.keys(dataJson).map((key) => {
                            return (

                                <div key={key}>
                                    <div className="top-filter-row">
                                        <div className="top-filter-key">{dataJson[key].name}：</div>
                                        <div className="top-filter-value">
                                            <ul className="condition">
                                                {
                                                    dataJson[key].data.map((item, index) => {
                                                        let checked = false
                                                        if (this.state.activeList[key].dataType === item.dataType) {
                                                            checked = true
                                                        } else {
                                                            checked = false
                                                        }
                                                        return (
                                                            <li
                                                                className={checked ? 'active' : ''}
                                                                onClick={this._isShow.bind(this, item, key, index)}
                                                                data-show={item.flag}
                                                                key={index}>
                                                                <em>{item.name}</em>
                                                                {/* onClick={this.handleClick.bind(this, item, key)} */}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {
                                        this.state.showTagDataFlag ?
                                            <div className="top-filter-row">
                                                <div className="top-filter-key">热门标签：</div>
                                                <div className="top-filter-value">
                                                    <span className="note-btn" onClick={this.toggleClick}><i>dd</i></span>

                                                    <ul className="condition">
                                                        {
                                                            this.state.showTagData.map((item, index) => {
                                                                let checked = false
                                                                if (selected.label.dataType === item.tagCodeC) {
                                                                    checked = true
                                                                } else {
                                                                    checked = false
                                                                }
                                                                return (
                                                                    <li
                                                                        className={checked ? 'active' : ''}
                                                                        onClick={this.handleClick.bind(this, item, 'tagCode')}
                                                                        key={index}>
                                                                        <em>{item.tagCodePname}</em>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div> : ''
                                    }
                                    {
                                        this.state.isShowFlag ?
                                            this.state.dataJson[key].data.map((itemData, i) => {

                                                return (
                                                    itemData.flag ?
                                                        <div className="top-filter-row" key={i}>
                                                            <div className="top-filter-key">{itemData.data.length > 0 ? '业务分类：' : ''}</div>
                                                            <div className="top-filter-value">
                                                                <ul className="condition">
                                                                    {

                                                                        itemData.data.map((item, index) => {

                                                                            let checked = false
                                                                            if (selected.industryCode.dataType === item.industryCode) {
                                                                                checked = true
                                                                            } else {
                                                                                checked = false
                                                                            }
                                                                            return (
                                                                                <li
                                                                                    className={checked ? 'active' : ''}
                                                                                    onClick={this.getInitTwoData.bind(this, item, 'industryCode')}
                                                                                    data-show={item.flag}
                                                                                    key={index}>
                                                                                    <em>{item.name}{item.industryName}</em>
                                                                                    {/* onClick={this.handleClick.bind(this, item, key)} */}
                                                                                </li>
                                                                            )
                                                                        })

                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div> : ''
                                                )
                                            }) : ''
                                    }

                                </div>

                            )


                        })
                    }
                    {
                        this.state.initDataTwoFlg ?
                            <div className="top-filter-row">
                                <div className="top-filter-key">行业二级分类：</div>
                                <div className="top-filter-value">
                                    <span className="note-btn" onClick={this.toggleClick}><i>dd</i></span>
                                    <ul className="condition">
                                        {
                                            this.state.initDataTwo.map((item, index) => {
                                                let checked = false
                                                if (selected.industryTwoCode.dataType === item.industryCode) {
                                                    checked = true
                                                } else {
                                                    checked = false
                                                }
                                                return (
                                                    <li
                                                        className={checked ? 'active' : ''}
                                                        onClick={this.handleClick.bind(this, item, 'industryTwoCode')}
                                                        // onClick={this.getInitTwoData.bind(this, item, 'industryTwoCode')}
                                                        key={index}>
                                                        <em>{item.industryName}</em>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div> : ''
                    }
                    {
                        <div className="top-filter-row">
                            <div className="top-filter-key">交易所：</div>
                            <div className="top-filter-value" style={{ position: 'relative' }}>
                                <div className={this.state.jysFlag ? 'show' : 'hide'}>
                                    <span className="note-btn" ref='note-btn' onClick={this.toggleClick.bind(this)}><i></i></span>
                                    <ul className="condition" >
                                        {
                                            initExchangeResult.map((item, index) => {
                                                let checked = false
                                                console.log(selected.tradInstitutionId.tradInstitutionId)
                                                if (selected.tradInstitutionId.tradInstitutionId === item.tradInstitutionId) {
                                                    checked = true
                                                } else {
                                                    checked = false
                                                }
                                                return (
                                                    <li
                                                        className={checked ? 'active' : ''}
                                                        onClick={this.handleClick.bind(this, item, 'tradInstitutionId')}
                                                        key={index}>
                                                        <em>{item.tradInstitutionName}</em>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                        </div>
                    }
                    <div className="top-filter-row">
                        <div className="top-filter-key">{city.name}</div>
                        <div className="top-filter-value">
                            <span className="note-btn" onClick={this.toggleClick}><i>dd</i></span>
                            <ul className="condition">
                                {
                                    city.data.map((item, index) => {
                                        let checked = false
                                        if (selected.city.dataType === item.dataType) {
                                            checked = true
                                        } else {
                                            checked = false
                                        }
                                        return (
                                            <li
                                                className={checked ? 'active' : ''}
                                                onClick={this.handleClick.bind(this, item, 'city')}
                                                key={index}>
                                                <em>{item.name}</em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="top-filter-row">
                        <div className="top-filter-key">{this.state.zone.name}</div>
                        <div className="top-filter-value">
                            <span className="note-btn" onClick={this.toggleClick}><i>dd</i></span>
                            <ul className="condition">
                                {
                                    this.state.zone.data.map((item, index) => {
                                        let checked = false
                                        if (selected.zone.dataType === item.dataType) {
                                            checked = true
                                        } else {
                                            checked = false
                                        }
                                        return (
                                            <li
                                                className={checked ? 'active' : ''}
                                                onClick={this.handleClick.bind(this, item, 'zone')}
                                                key={index}>
                                                <em>{item.name}</em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {
                        Object.keys(data1).map((key) => {
                            return (
                                <div className="top-filter-row" key={key}>
                                    <div className="top-filter-key">{data1[key].name}：</div>
                                    <div className="top-filter-value">
                                        <span className="note-btn" onClick={this.toggleClick}><i>dd</i></span>

                                        <ul className="condition">
                                            {
                                                data1[key].data.map((item, index) => {
                                                    let checked
                                                    if (selected[key].dataType === item.dataType) {
                                                        checked = true
                                                    } else {
                                                        checked = false
                                                    }
                                                    return (
                                                        <li
                                                            className={checked ? 'active' : ''}
                                                            onClick={this.handleClick.bind(this, item, key)}
                                                            key={index}>
                                                            <em>{item.name}</em>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="top-filter-row">
                        <div className="top-filter-key">{businessStatus.name}</div>
                        <div className="top-filter-value no-bottom">
                            <span className="note-btn" onClick={this.toggleClick}><i>dd</i></span>
                            <ul className="condition">
                                {
                                    businessStatus.data.map((item, index) => {
                                        // let checked = false
                                        // if (selected[key].dataType === item.dataType) {
                                        //     checked = true
                                        // } else {
                                        //     checked = false
                                        // }
                                        return (
                                            <li
                                                // className={checked ? 'active' : ''}
                                                onClick={this.handleClick.bind(this)}
                                                key={index}>
                                                <em><input type="radio" />{item.name}</em>
                                            </li>
                                        )
                                    })
                                }|
                                {
                                    gz.data.map((item, index) => {
                                        // let checked = false
                                        // if (selected[key].dataType === item.dataType) {
                                        //     checked = true
                                        // } else {
                                        //     checked = false
                                        // }
                                        return (
                                            <li
                                                // className={checked ? 'active' : ''}
                                                onClick={this.handleClick.bind(this)}
                                                key={index}>
                                                <em><input type="radio" name="isGz" />{item.name}</em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="s-more" 
                    onClick={this.handleToggleClick}>
                    <span>
                        收起
                    </span>
                    <i></i>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initDataResult: state.filterDataState.initDataResult,
        initExchangeResult: state.filterDataState.initExchangeResult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (initDataResult, initExchangeResult) => {
            dispatch(initData({ initDataResult, initExchangeResult }))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)