var md = require('markdown').markdown

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var Firebase = require('firebase')
var img = require('./assets/500x200.png')

const state = {
	baseURL: 'https://intense-inferno-4020.firebaseio.com/Backgrounder/Website/',
	TitlesList: [],
	HasListData: false,
	GettingListData: false,

	PopularTitles: [],

	TitlesListGames: [],
	TitlesListApplications: [],
	NewTitles: [],
	FeaturedTitles: []
}

const actions = {
	GetData: ({
		dispatch, state
	}, resolve) => {
		GetData(resolve)
	},
	GetDetails: ({
		dispatch, state
	}, titleName) => {
		var t = GetTitleFromName(titleName)
		if (t === null) {
			return null
		}
		return t
	}
}

function GetData(resolveParent) {
	if (state.HasListData) {
		resolveParent('already retrieved')
	}

	new Promise(function (resolve) {
		GetListData(resolve)
	}).then(function (data) {
		SetListData(resolveParent, data)
	})
}

//hit firebase and get all data
function GetListData(resolve) {
	var key = 'list'
	if (sessionStorage.getItem(key)) {
		var data = JSON.parse(sessionStorage.getItem(key))
		resolve(data)
	} else {
		var url = state.baseURL + 'Titles'
		console.log('list=' + url)
		var fireb = new Firebase(url)
		fireb.on('value', function (snapshot) {
			var data = snapshot.val()
			sessionStorage.setItem(key, JSON.stringify(data))
			resolve(data)
		})
	}
}

function GetTitleFromId(titleId) {
	for (var t in state.TitlesList) {
		var thisId = state.TitlesList[t].Id
		if (thisId === titleId) {
			return state.TitlesList[t]
		}
	}
	return null
}

function GetTitleFromName(titleName) {
	for (var t in state.TitlesList) {
		var thisName = state.TitlesList[t].Name
		if (thisName === titleName) {
			return state.TitlesList[t]
		}
	}
	return null
}

function SetListData(resolve, data) {
	state.TitlesList = data.List
	state.FeaturedTitles = []
	data.Featured.forEach(function (tid) {
		var found = GetTitleFromId(tid)
		if (found !== null) {
			state.FeaturedTitles.push(SetData(found))
		} else {
			console.log('warning, cant find title id:' + tid)
		}
	})

	data.Popular.forEach(function (tid) {
		var found = GetTitleFromId(tid)
		if (found !== null) {
			state.PopularTitles.push(SetData(found))
		} else {
			console.log('warning, cant find title id:' + tid)
		}
	})

	data.New.forEach(function (tid) {
		var found = GetTitleFromId(tid)
		if (found !== null) {
			state.NewTitles.push(SetData(found))
		} else {
			console.log('warning, cant find title id:' + tid)
		}
	})

	state.HasListData = true
	resolve('ok')
}

function SetData(item) {
	item.HeadImage = (item.Images != null && item.Images.length >= 1) ? item.Images[0].URL : img
	item.Images = (item.Images != null && item.Images.length > 0) ? item.Images : []
	item.Link = '/Titles/Details/' + item.Name
	var mdp = md.parse(item.Description)
	var i = mdp.find(function (v) {
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
	return item
}

export default new Vuex.Store({
	state,
	actions
	//mutations
})
