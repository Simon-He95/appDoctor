import { Component } from 'react'
import './index.css'
import ItemList from '../../components/ItemList'

const specailHospital = [
    {
        src: require('./images/慢性乳腺增生@3x.png'),
        des: '慢性乳腺增生'
    },
    {
        src: require('./images/乳腺炎@3x.png'),
        des: '乳腺炎'
    },
    {
        src: require('./images/乳腺纤维瘤@3x.png'),
        des: '乳腺纤维瘤'
    },
    {
        src: require('./images/乳腺囊肿@3x.png'),
        des: '乳腺囊肿'
    }
]
const specailMedical = [
    {
        src: require('./images/用药指导@3x.png'),
        des: '用药指导'
    },
    {
        src: require('./images/用药提醒@3x.png'),
        des: '用药提醒'
    },
    {
        src: require('./images/拍药识方@3x.png'),
        des: '拍药识方'
    },
    {
        src: require('./images/药品知识@3x.png'),
        des: '药品知识'
    }
]
const others = [
    {
        src: require('./images/糖尿病@3x.png'),
        des: '糖尿病'
    },
    {
        src: require('./images/心血管病@3x.png'),
        des: '心血管病'
    },
    {
        src: require('./images/儿童哮喘@3x.png'),
        des: '儿童哮喘'
    },
    {
        src: require('./images/类风湿关节炎@3x.png'),
        des: '类风湿关节炎'
    }
]
export default class Home extends Component {
    render() {
        return (
            <div className="home_container">
                <div className="header">
                    <div className="flex">
                        <div><img style={{width:'11px'}} src={require('./images/返回.png').default} alt=""/></div>
                        <div>乳腺专病中心</div>
                        <div></div>
                    </div>
                    <ItemList items={specailHospital} title="专病病族" content="共20+相关疾病" />
                    {/* 专病医院 */}
                    <div className="wrapper">
                        <div className="head">
                            <div className="title">专病医院</div>
                            <div className="more">更多</div>
                        </div>
                        <div className="content">100+专病医院挂号</div>
                        <div className="main">
                            <div className="box">
                                <img className="img" src={require('./logo@3x.png').default} alt="" />
                            </div>
                            <div className="mainWrap">
                                <div className="name">中国医学科学院北京协和医院</div>
                                <div className="des">全国甲状乳腺外壳No.1</div>
                            </div>
                        </div>
                    </div>
                    {/* 本期特邀 */}
                    <div className="wrapper">
                        <div className="head">
                            <div className="title">本期特邀</div>
                            <div className="more"></div>
                        </div>
                        <div className="bg">
                            <div className="left">
                                <div className="title">瑞金医院乳腺诊治中心</div>
                                <div className="special">乳腺疾病重点专科</div>
                                <div className="content">由多学科群整合组建，是专注于乳腺疾病预防、诊疗的医疗、教学和科研机构。</div>
                            </div>
                            <div className="right">
                                <img src={require('./images/医生@3x.png').default} alt="" />
                                <div className="shadow"></div>
                                <div className="shadowContent">
                                    <div className="name">沈坤伟 <span className="professor">教授</span></div>
                                    <div className="des">乳腺癌专业委员会常委50000+治疗案例</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 专病医生 */}
                    <div className="doctorWrapper">
                        <div className="head">
                            <div className="title">专病医生</div>
                            <div className="more">更多</div>
                        </div>
                        <div className="doctorMain">
                            <div className="zhibo"></div>
                            <div className="doctorList">
                                <div className="person1">
                                    <div className="shadow"></div>
                                    <div className="name">
                                        朱履昌 <span className="des">主任医师</span>
                                    </div>
                                    <div className="content">
                                        上海交通大学医学院附属瑞金医院
                                    </div>
                                    <div className="title">
                                        <div>教授</div>
                                        <div>海外进修</div>
                                    </div>
                                </div>
                                <div className="person2">
                                    <div className="shadow"></div>
                                    <div className="name">
                                        梁艳 <span className="des">主任医师</span>
                                    </div>
                                    <div className="content">
                                        上海交通大学医学院附属瑞金医院
                                    </div>
                                    <div className="title">
                                        <div>海外进修</div>
                                        <div>医学博士</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 专病管理 */}
                    <div className="doctorWrapper">
                        <div className="specailHead">
                            <div className="title">专病管理</div>
                            <div className="des">已有2564人加入管理</div>
                        </div>
                        <div className="items">
                            <div className="itemFlex">
                                <img src={require('./images/快速问诊@3x.png').default} alt="" />
                                <div className="name">就医问诊</div>
                            </div>
                            <div className="itemFlex">
                                <img src={require('./images/健康管理@3x.png').default} alt="" />
                                <div className="name">健康管理</div>
                            </div>
                            <div className="itemFlex">
                                <img src={require('./images/乳腺癌筛查@3x.png').default} alt="" />
                                <div className="name">乳腺癌筛查</div>
                            </div>
                        </div>
                    </div>
                    <ItemList items={specailMedical} title="专病用药" />
                    {/* 专病知识 */}
                    <div className="doctorWrapper" style={{ paddingBottom: '0px' }}>
                        <div className="specailHead">
                            <div className="title">专病知识</div>
                        </div>
                        <div className="items">
                            <div className="videoFlex">
                                <img src={require('./images/video3@3x.png').default} alt="" />
                                <div className="name">挽救视力的激光手术，你到底能不能做？</div>
                            </div>
                            <div className="videoFlex">
                                <img src={require('./images/video1@3x.png').default} alt="" />
                                <div className="name">挽救视力的激光手术，你到底能不能做？</div>
                            </div>
                            <div className="videoFlex">
                                <img src={require('./images/video2@3x.png').default} alt="" />
                                <div className="name">冬季流感肆虐，如何防治宝宝呼吸道感染</div>
                            </div>
                            <div className="videoFlex">
                                <img src={require('./images/video4@3x.png').default} alt="" />
                                <div className="name">家长怎样帮孩子远离近视困扰？</div>
                            </div>
                        </div>
                    </div>
                    <ItemList items={others} title="其他专病" marginBottom="0px" />

                </div>
            </div>
        )
    }
}