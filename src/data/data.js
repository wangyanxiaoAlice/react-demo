let data = {
    projectClassifyCode: {
      isShow: false,
      name:'业务分类',
      data: [
        { 
          id:0,
          dataType: '',
          name: '全部',
          flag:true,
          data:[],
          label:[]
        },
        { 
          id:1,
          dataType: 'C02',
          name: '产股权',
          flag:false,
          data: [],
          label: []
        },
        { 
          id:2,
          dataType: 'C01',
          name: '企业资产',
          flag: false,
          data: [{dataType:'',name:'全部'},
          {dataType:'1',name:'房产'},
          {dataType:'2',name:'土地使用权'},
          {dataType:'3',name:'交通运输工具'},
          {dataType:'4',name:'设备'},
          {dataType:'5',name:'在建工程'},
          {dataType:'99',name:'其他'}],
          label: []
        },
        { 
          id:3,
          dataType: 'C03',
          name: '增资扩股' ,
          flag: false,
          data: [],
          label: []
        },
        { 
          id:4,
          dataType: 'jrzc', 
          name: '金融资产' ,
          flag: false,
          data: [],
          label: []
        },
        { 
          id:5,
          dataType: 'C06', 
          name: '不良资产' ,
          flag: false,
          data: [],
          label: []
        },
        { 
          id:6,
          dataType: 'C05', 
          name: '债权' ,
          flag: false,
          data: [],
          label: []
        }
      ]
    }
    
    
    
  }
  let city = {
    name:'热门城市：',
    isShow:true,
    data: [
      {dataType: '', name:'全部'},
      {name: '上海', dataType:'310100'},
      {name: '天津', dataType:'120100'},
      {name: '北京', dataType:'110100'},
      {name: '重庆', dataType:'500100'},
      {name: '成都', dataType:'510101'},
      {name: '杭州', dataType:'330101'},
      {name: '武汉', dataType:'420101'},
      {name: '苏州', dataType:'320501'},
      {name: '西安', dataType:'610101'},
      {name: '南京', dataType:'320101'},
      {name: '郑州', dataType:'410101'},
      {name: '长沙', dataType:'430101'},
      {name: '沈阳', dataType:'210101'},
      {name: '宁波', dataType:'330201'},
      {name: '东莞', dataType:'441900'},
      {name: '无锡', dataType:'320200'}
    ]
  }
  let tradInstitutionId = {
    isShow: false,
    name: '交易所：',
    data: [{ tradInstitutionId: "", tradInstitutionName: "全部" }]
  }
  let zone =  {
    isShow: false,
    name: '所有地区：',
    data: [{ dataType: "", "name": "全部" }, 
    { dataType: "340000", "name": "安徽" },
    { dataType: "820000", "name": "澳门" },
    { dataType: "110000", "name": "北京" },
    { dataType: "500000", "name": "重庆" },
    { dataType: "350000", "name": "福建" },
    { dataType: "620000", "name": "甘肃" },
    { dataType: "440000", "name": "广东" },
    { dataType: "450000", "name": "广西" },
    { dataType: "520000", "name": "贵州" },
    { dataType: "460000", "name": "海南" },
    { dataType: "130000", "name": "河北" },
    { dataType: "410000", "name": "河南" },
    { dataType: "230000", "name": "黑龙江" },
    { dataType: "420000", "name": "湖北", },
    { dataType: "430000", "name": "湖南", },
    { dataType: "220000", "name": "吉林" },
    { dataType: "320000", "name": "江苏" },
    { dataType: "360000", "name": "江西" },
    { dataType: "210000", "name": "辽宁" },
    { dataType: "150000", "name": "内蒙古" },
    { dataType: "640000", "name": "宁夏" },
    { dataType: "630000", "name": "青海" },
    { dataType: "370000", "name": "山东" },
    { dataType: "140000", "name": "山西" },
    { dataType: "610000", "name": "陕西" },
    { dataType: "310000", "name": "上海" },
    { dataType: "510000", "name": "四川" },
    { dataType: "710000", "name": "台湾" },
    { dataType: "120000", "name": "天津" },
    { dataType: "810000", "name": "香港" },
    { dataType: "650000", "name": "新疆" },
    { dataType: "540000", "name": "西藏" },
    { dataType: "530000", "name": "云南" },
    { dataType: "330000", "name": "浙江" }],
  }
  let data1 = {
    projectPrice: {
      isShow: false,
      name: '转让底价',
      data: [
        { dataType: "", name: "全部" },
        { dataType: '1', name: '1万以下' },
        { dataType: '10', name: '1万--10万' },
        { dataType: '50', name: '10万--50万' },
        { dataType: '100', name: '50万--100万' },
        { dataType: '200', name: '100万--200万' },
        { dataType: '500', name: '200万--500万' },
        { dataType: '1000', name: '500万--1000万' },
        { dataType: '5000', name: '1000万--5000万' },
        { dataType: '10000', name: '5000万--1亿' },
        { dataType: '10001', name: '1亿以上' }]
    },
    scale: {
      isShow: false,
      name: '拟转让比例',
      data: [
        {dataType:'',name:'全部'},
        {dataType: '10', name: '10%以下' },
        {dataType:'33',name:'10%-33%'},
        {dataType:'49',name:'33%-49%'},
        {dataType:'100',name:'49%-100%'}
      ]
    },
    tradeDate: {
      isShow: false,
      name: '时间',
      data: [
        {dataType:'',name:'全部'},
        {dataType: '2', name: '2日内' },
        {dataType:'7',name:'近1周'},
        {dataType:'30',name:'近1个月'},
        {dataType:'90',name:'近3个月'}]
    }
  }
  const businessStatus = {
    isShow: false,
    name: '项目属性：',
    data: [
      {dataType:'',name:'正式披露'},
      {dataType: '2', name: '预披露' },
      {dataType:'7',name:'成交公示'}]
  }
  const gz = {
    isShow: false,
    name: '',
    data: [
      {dataType: '2', name: '国资项目' },
      {dataType:'7',name:'非国资项目'}]
  } 
  module.exports = {
    tradInstitutionId,
    dataJson : data,
    data1: data1,
    zone: zone,
    businessStatus,
    gz,
    city
  }