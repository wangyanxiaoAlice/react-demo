





import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './footer.css'



const Footer = () => (
    <footer className="footer">
                <div className="footer-section">
                    <div className="flex-section">
                        <b className="fontSize16">免费声明</b>
                        <p>本平台信息来源于各交易所，信息使用者应遵守法律规定，任何因使用本网站而产生的纠纷、争议、侵权、索赔等损失后果由使用者自行承担，平台及平台所有方不承担任何责任。
                        </p>
                    </div>
                    <div className="flex-section fontSize16">
                        <p>办公地址：北京市东城区和平里兴华路6号院1号楼5层</p>
                        <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编：100013</p>
                        <p>公司名称：中产投科技有限公司</p>
                    </div>
                    <div className="flex-section ">
                        <p className="fontSize16">
                            <Link to="/d">通知公告</Link>
                            <Link to="/ddd">典型案例</Link>
                            <Link to="/dddd">网站地图</Link>
                        </p>
                        <p>客服电话：4001-558-996</p>
                        <p>服务时间：8:30-17:30</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        2016-2017版权所有 本网站发布的信息未经允许不得转载 ICP备案编号：京ICP备11013359号
                    </p>
                </div>
            </footer>
)

export default Footer