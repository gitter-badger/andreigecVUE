var _ = require('underscore-node')
var md = require('markdown').markdown

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var Firebase = require('firebase')
var img = require('./assets/500x200.png')

const state = {
	baseURL: 'https://intense-inferno-4020.firebaseio.com/Backgrounder/Website/',
	PopularTitles: [],
	TitlesList: [],
	TitlesListGames: [],
	TitlesListApplications: [],
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
	item.Link = '/Titles/Details/' + item.Name
	
	var i = _.find(md.parse(item.Description), function(v) {
		if (v[0] === 'para' && v.length >= 2) {
			return true
		}
		return false
	})

if (i != null) {
	item.DescriptionText = i[1]
}
else {
	item.DescriptionText = ''
}
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
		if (data[key].IsGame === true) {
			state.TitlesListGames.push(data[key])
		}
		else {
			state.TitlesListApplications.push(data[key])
		}
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
