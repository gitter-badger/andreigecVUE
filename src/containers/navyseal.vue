<style lang='sass' local>
.content{
white-space: pre-wrap;
}
</style>
<Template> 

<p>
<button v-on:click="reset">Reset</button>
<button v-on:click="clear">Clear</button>

<p> swear words
<input v-model="values.Swear1">
<input v-model="values.Swear2">
</p>

<p>
Insults
<input v-model="values.Insult1">
<input v-model="values.Insult2">
<input v-model="values.Insult3">
<input v-model="values.Insult4">
<input v-model="values.Insult5">
<input v-model="values.Insult6">
</p>

<p>
Bigups 
<input v-model="values.bigup1">
<input v-model="values.bigup2">
<input v-model="values.bigup3">
<input v-model="values.bigup4">
<input v-model="values.bigup5">
<input v-model="values.bigup6">
<input v-model="values.bigup7">
<input v-model="values.bigup8">
<input v-model="values.bigup9">
</p>

<p>
Threats
<input v-model="values.threat1">
<input v-model="values.threat2">
<input v-model="values.threat3">
<input v-model="values.threat4">
</p>
<br/>


<pre class='content'>
What the {{values.Swear1}} did you just {{values.Swear1}}ing say about me, you little {{values.Swear2}}?<br/>
I’ll have you know I {{values.bigup1}}, and I’ve been involved in {{values.bigup2}}, and I have over 300 {{values.bigup3}}.<br/>
I am trained in {{values.bigup4}} and I’m the top {{values.bigup5}}.<br/>
You are nothing to me but just another {{values.Insult2}}.<br/>
I will wipe you the {{values.Swear1}} out with precision the likes of which has never been seen before on this Earth, mark my {{values.Swear1}}ing words.<br/>
You think you can get away with saying that {{values.Insult1}} to me over the Internet? Think again, {{values.Swear1}}er.<br/>
As we speak I am {{values.bigup6}} of {{values.bigup7}} and your {{values.threat1}} right now so you better {{values.threat2}}, {{values.Insult3}}.<br/>
The storm that wipes out the pathetic little thing you call your life.<br/>
You’re {{values.Swear1}}ing dead, kid.<br/>
I can be anywhere, anytime, and I can {{values.threat3}} you in over seven hundred ways, and that’s just with my {{values.noun1}}.<br/>
Not only am I extensively trained in {{values.bigup8}}, but I have access to the entire {{values.bigup9}} and I will use it to its full extent to {{values.threat4}} off the face of the continent, {{values.Insult4}}.<br/>
If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your {{values.Swear1}}ing tongue.<br/>
But you couldn’t, you didn’t, and now you’re paying the price, you {{values.Insult5}}.<br/>
I will {{values.Insult1}} fury all over you and you {{values.Insult6}}.<br/>
You’re {{values.Swear1}}ing dead, kiddo.<br/>
</pre>
</template>

<script>
function defaultValuesWrap () {
	return { values: defaultValues() }
}

function defaultValues () {
 return {
Swear1: 'fuck',
Swear2: 'bitch',

Insult1: 'shit',
Insult2: 'target',
Insult3: 'maggot',
Insult4: 'you little shit',
Insult5: 'goddamn idiot',
Insult6: 'will drown in it',

bigup1: 'graduated top of my class in the Navy Seals',
bigup2: 'numerous secret raids on Al-Quaeda',
bigup3: 'confirmed kills',
bigup4: 'gorilla warfare',
bigup5: 'sniper in the entire US armed forces',
bigup6: 'contacting my secret network',
bigup7: 'spies across the USA',
bigup8: 'unarmed combat',
bigup9: 'arsenal of the United States Marine Corps',

threat1: 'IP is being traced',
threat2: 'prepare for the storm',
threat3: 'kill',
threat4: 'wipe your miserable ass',

noun1: 'bare hands'
}
}

module.exports = {
	methods: {
		reset: function () {
			this.values = defaultValues()
		},
		clear: function () {
			for (var key in this.values)
			{
				this.values[key] = ''
			}
		}
	},
data: function () {
	return defaultValuesWrap()
}	
}
</script>