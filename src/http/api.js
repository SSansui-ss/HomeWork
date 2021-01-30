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
// 商品列表 - id搜索
function searchID(num) {
	return http({
		url: `manage/product/search.do?listType=search&pageNum=1&productId=${num}`,
		method: 'get',
		hideLoading: false,
	})
}
// 商品列表 - name搜索
function searchName(num) {
	return http({
		url: `manage/product/search.do?listType=search&pageNum=1&productName=${num}`,
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
//上架 - 下架
function ID_ind(id, ind) {
	return http({
		url: `manage/product/set_sale_status.do?productId=${id}&status=${ind}`,
		method: 'get',
		hideLoading: false,
	})
}
//商品详情
function ShopList(id) {
	return http({
		url: `manage/product/detail.do?productId=${id}`,
		method: 'get',
		hideLoading: false,
	})
}
//商品详情 - 二级分类
function ShopListID(id) {
	return http({
		url: `manage/category/get_category.do?categoryId=${id}`,
		method: 'get',
		hideLoading: false,
	})
}
//品类管理 - 修改名称
function ClassUp(id,name) {
	return http({
		url: `manage/category/set_category_name.do?categoryId=${id}&categoryName=${name}`,
		method: 'get',
		hideLoading: false,
	})
}
//订单管理 - 条件查找
function orderSe(id) {
	return http({
		url: `manage/order/search.do?listType=search&pageNum=1&orderNo=${id}`,
		method: 'get',
		hideLoading: false,
	})
}
//订单管理 - 查看
function orderGo(id) {
	return http({
		url: `manage/order/detail.do?orderNo=${id}`,
		method: 'get',
		hideLoading: false,
	})
}

export default {
	login,
	list,
	logout,
	Class,
	order,
  ID_ind,
  ShopList,
  ShopListID,
  searchID,
  searchName,
  ClassUp,
  orderSe,
  orderGo
}
