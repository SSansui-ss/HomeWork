import axios from 'axios'

const http = axios.create({
	baseURL: '/api',
  timeout: 5000
})

import { Loading } from 'element-ui'


// 请求拦截
http.interceptors.request.use(
	(config) => {
    let cookies = document.cookie
    console.log(cookies)
		 
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
// 响应拦截
http.interceptors.response.use(
	(response) => {
		if (response.status == 200) {
			return response.data // 拦截一个data
		}
	},
	(error) => {
		return Promise.reject(error)
	}
)

export default http
