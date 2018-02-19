
//-- THE VUE INSTANCE

//- when vue instance is created, all properties in data object added to vue's *reactivity* system

//- whenever data changes, the view will re-render

// var vm = new Vue({
// 	// options
// 	data: {
// 		a: 1
// 	},
// 	created: function() {
// 		console.log('a is: ' + this.a);
// 	}
// })

var watchExampleVM = new Vue({
	el: '#watch-example',
	data: {
		question: '',
		answer: 'I cannot give you an answer until you ask a question!'
	},
	watch: {
		question: function (newQuestion) {
			this.answer = 'Waiting for you for stop typing...'
			this.getAnswer()
		}
	},
	methods: {
		getAnswer: _.debounce(
			function() {
				if ( this.question.indexOf('?') === -1 ) {
					this.answer = 'Questions usually contain a question mark. ;-)'
					return
				}
				this.answer = 'Thinking...'
				var vm = this
				axios.get('https://yesno.wtf/api')
					.then(function (response) {
						vm.answer = _.capitalize(response.data.answer)
					})
					.catch(function (error) {
						vm.answer = 'Error! Could not reach the API. ' + error
					})
			},
			500
		)
	}
});




var app = new Vue({
	el: '#app',
	data: {
		isActive: true,
		error: null,
		classObject: {
			active: true,
			'text-danger': false
		}
	}
});














