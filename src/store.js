var _ = require('underscore-node')
_.truncate = function (string, length, truncation) {
	length = length || 30
	truncation = _.isUndefined(truncation) ? '...' : truncation
	return string.length > length ? string.slice(0, length - truncation.length) + truncation : String(string)
}

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var Firebase = require('firebase')
var img = require('./assets/500x200.png')

const state = {
	baseURL: 'https://intense-inferno-4020.firebaseio.com/Backgrounder/Website/',
	PopularTitles: [],
	TitlesList: [],
	NewTitles: [],
	FeaturedTitles: [],
	newTodo:	'',
	editedTodo: null,
	visibility:	'all'
}

const actions = {
	GetAllData: GetAllData,
	GetDetails: ({dispatch, state }, titleName) => {
var t = _.where(state.TitlesList, {Name: titleName})
return t[0]
}
}

const mutations = {}

export default new Vuex.Store({
	state,
	actions,
	mutations
})

function GetAllData () {
	GetFeaturedData()
	GetPopularData()
	GetNewData()
	GetListData()
}

function SetData (item) {
	item.HeadImage = (item.Images != null && item.Images.length >= 1) ? item.Images[0].URL : img
	item.Images = (item.Images != null && item.Images.length > 1) ? item.Images.slice(1) : null
	var td = _.truncate(item.Description, 100, '...')
	item.HeadDescription = item.Description != null ? td : ''
	item.Link = '/Titles/Details/' + item.Name
}


//#region popular
function setPopularAppData (data) {
	data.forEach (function (s) {
		SetData(s)
		state.PopularTitles.push(s)
	})
}

function GetPopularData () {
	var key = 'popular'
	if (localStorage.getItem(key)) {
		setPopularAppData(JSON.parse(localStorage.getItem(key)))
	}
	else {
		var fireb = new Firebase(state.baseURL + 'Titles/Popular')
		fireb.on('value', function (snapshot) {
			setPopularAppData(snapshot.val())
			localStorage.setItem(key, JSON.stringify(state.PopularTitles))
		})
	}
}
//#endregion popular

//#region featured
function setFeaturedAppData (data) {
	data.forEach (function (s) {
		SetData(s)
		state.FeaturedTitles.push(s)
	})
}

function GetFeaturedData () {
	var key = 'new'
	if (localStorage.getItem(key)) {
		setFeaturedAppData(JSON.parse(localStorage.getItem(key)))
	}
	else {
		var fireb = new Firebase(state.baseURL + 'Titles/New')
		fireb.on('value', function (snapshot) {
			setFeaturedAppData(snapshot.val())
			localStorage.setItem(key, JSON.stringify(state.FeaturedTitles))
		})
	}
}
//#end region featured

//#region new
function setNewAppData (data) {
	data.forEach (function (s) {
		SetData(s)
		state.NewTitles.push(s)
	})
}

function GetNewData () {
	var key = 'new'
	if (localStorage.getItem(key)) {
		setNewAppData(JSON.parse(localStorage.getItem(key)))
	}
	else {
		var fireb = new Firebase(state.baseURL + 'Titles/New')
		fireb.on('value', function (snapshot) {
			setNewAppData(snapshot.val())
			localStorage.setItem(key, JSON.stringify(state.NewTitles))
		})
	}
}
//#endregion new

//#region list
function SetListData (data) {
	for (var key in data) {
		SetData(data[key])
		state.TitlesList.push(data[key])
	}
}

function GetListData () {
	var key = 'list'
	if (localStorage.getItem(key)) {
		SetListData(JSON.parse(localStorage.getItem(key)))
	}
	else {
		var fireb = new Firebase(state.baseURL + 'Titles/List')
		fireb.on('value', function (snapshot) {
			SetListData(snapshot.val())
			localStorage.setItem(key, JSON.stringify(state.TitlesList))
		})
	}
	//#endregion list
}
