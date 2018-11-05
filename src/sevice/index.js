import http from './http.js' // 导入我们封装好的axios对象
import apis from './apis.js' // 导入我们封装好的apis对象

export function getProjectList (params = {} ){
    return http.get(apis.getProjectList, params)
}
