import http from './request'

// 登录
function login(data) {
	return http({
		url: 'user/login.do',
		method: 'POST',
		params: data,
		hideLoading: false,
	})
}
// 退出
function logout() {
	return http({
		url: 'user/logout.do',
		method: 'POST',
		hideLoading: false,
	})
}
// 商品列表
function list(num) {
	return http({
		url: `manage/product/list.do?pageNum=${num}`,
		method: 'get',
		hideLoading: false,
	})
}
//品类列表
function Class(num) {
	return http({
		url: `manage/category/get_category.do?categoryId=${num}`,
		method: 'get',
		hideLoading: false,
	})
}
//订单列表
function order(num) {
	return http({
		url: `manage/order/list.do?pageNum=${num}`,
		method: 'get',
		hideLoading: false,
	})
}

export default {
	login,
	list,
  logout,
  Class,
  order
}
