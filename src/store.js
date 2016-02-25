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
	HasListData: false,
	GettingListData: false,
	TitlesListGames: [],
	TitlesListApplications: [],
	NewTitles: [],
	FeaturedTitles: []
}

const actions = {
	GetAllData: ({dispatch, state	}, resolve) => { GetAllData(resolve) },
	GetDetails: ({
		dispatch, state
	}, titleName) => {
		console.log('find:' + titleName)
		console.log('tl:' + state.TitlesList.length)
		var t = _.where(state.TitlesList, {
			Name: titleName
		})
		if (t.length !== 1) {
			return null
		}
		return t[0]
	}
}

const mutations = {}

export default new Vuex.Store({
	state,
	actions,
	mutations
})

// function DataLoaded() {
// 	return state.TitlesList.length > 0
// }

function GetAllData(resolve) {
	console.log('res2=')
	console.log(resolve)

	if (state.HasListData) {
		resolve('already have')
	}

	if (state.GettingListData) {
		return
	}

	GetFeaturedData()
	GetPopularData()
	GetNewData()
	GetListData(resolve)
	state.GettingListData = true
}

function SetData(item) {
	item.HeadImage = (item.Images != null && item.Images.length >= 1) ? item.Images[0].URL : img
	item.Images = (item.Images != null && item.Images.length > 0) ? item.Images : []
	item.Link = '/Titles/Details/' + item.Name
	var i = _.find(md.parse(item.Description), function (v) {
		if (v[0] === 'para' && v.length >= 2) {
			return true
		}
		return false
	})

	if (i != null) {
		item.DescriptionText = i[1]
	} else {
		item.DescriptionText = ''
	}
}


//#region popular
function setPopularAppData(data) {
	data.forEach(function (s) {
		SetData(s)
		state.PopularTitles.push(s)
	})
}

//false means add a firebase callback and add data to cache later
function LocalStorageUsed(key, callback) {
	var timeoutkey = key + '_timeout'
	var timeout = sessionStorage.getItem(timeoutkey)
	var item = JSON.parse(sessionStorage.getItem(key))
	if (!item) {
		return false
	}

	if (timeout) {
		var now = new Date().getTime()
		var diff = now - timeout
		var diffseconds = 30 * 60 * 1000
			//expire
		if (diff > diffseconds) {
			sessionStorage.setItem(timeoutkey, null)
			return false
		}
	}

	sessionStorage.setItem(timeoutkey, new Date().getTime())
	callback(item)
	return true
}

function GetPopularData() {
	var key = 'popular'
	if (!LocalStorageUsed(key, setPopularAppData)) {
		var url = state.baseURL + 'Titles/Popular'
		console.log('popular:' + url)
		var fireb = new Firebase(url)
		fireb.on('value', function (snapshot) {
			setPopularAppData(snapshot.val())
			sessionStorage.setItem(key, JSON.stringify(state.PopularTitles))
		})
	}
}
//#endregion popular

//#region featured
function setFeaturedAppData(data) {
	if (data === null) {
		return
	}

	data.forEach(function (s) {
		SetData(s)
		state.FeaturedTitles.push(s)
	})
}

function GetFeaturedData() {
	var key = 'featured'
	if (!LocalStorageUsed(key, setFeaturedAppData)) {
		var url = state.baseURL + 'Titles/Featured'
		console.log('featured=' + url)
		var fireb = new Firebase(url)
		fireb.on('value', function (snapshot) {
			setFeaturedAppData(snapshot.val())
			sessionStorage.setItem(key, JSON.stringify(state.FeaturedTitles))
		})
	}
}
//#end region featured

//#region new
function setNewAppData(data) {
	if (data === null) {
		return
	}

	data.forEach(function (s) {
		SetData(s)
		state.NewTitles.push(s)
	})
}

function GetNewData() {
	var key = 'new'
	if (!LocalStorageUsed(key, setNewAppData)) {
		var url = state.baseURL + 'Titles/New'
		console.log('new=' + url)
		var fireb = new Firebase(url)
		fireb.on('value', function (snapshot) {
			setNewAppData(snapshot.val())
			sessionStorage.setItem(key, JSON.stringify(state.NewTitles))
		})
	}
}
//#endregion new

//#region list
function SetListData(data) {
	if (data === null) {
		return
	}

	for (var key in data) {
		SetData(data[key])
		state.TitlesList.push(data[key])
		if (data[key].IsGame === true) {
			state.TitlesListGames.push(data[key])
		} else {
			state.TitlesListApplications.push(data[key])
		}
	}
}

function GetListData(resolve) {
console.log('res=')
console.log(resolve)
	var key = 'list'
	if (sessionStorage.getItem(key)) {
		SetListData(JSON.parse(sessionStorage.getItem(key)))
		resolve('get cache')
	} else {
		var url = state.baseURL + 'Titles/List'
		console.log('list=' + url)
		var fireb = new Firebase(url)
		fireb.on('value', function (snapshot) {
			SetListData(snapshot.val())
			sessionStorage.setItem(key, JSON.stringify(state.TitlesList))
			console.log('get2')
			state.HasListData = true
			resolve('ok')
		})
	}
	//#endregion list
}
