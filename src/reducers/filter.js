const INIT_DATA = 'INIT_DATA' //行业分类

export default function (state, action){
    if(!state){
        state = {
            initDataResult: [],
            initTwoDataResult: [],
            initExchangeResult: []
        }
    }
    
    switch (action.type) {
        case INIT_DATA:
            return {
                initDataResult: action.data.initDataResult,
                initExchangeResult: action.data.initExchangeResult}
      
        default: 
            return state;
    }
}


  export const initData = (data) => {
      console.log('initData', data)
    return { type: INIT_DATA, data }
  }
  
 