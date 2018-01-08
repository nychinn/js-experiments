

//-- DECLARITIVE RENDERING

var app = new Vue({
	el: '#app',
  data: {
  	message: 'Hello Vue!'
  }
});

var app2 = new Vue({
	el: '#app-2',
  data: {
  	message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});


//-- CONDITIONS
//-- by typing app3.seen = false, you can hide this text

var app3 = new Vue({
	el: '#app-3',
  data: {
  	seen: true
  }
});


//-- by typing app.todos.push({ text: 'New item' }) you can add new items to the list

var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
});


//-- HANDLING USER INPUT

var app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Hello Vue.js'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('');
		}
	}
});

var app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
});

















