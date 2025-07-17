//Q1.
console.log(i); //concept of hoisting

var i = 5;

console.log(i);

//O2.
// console.log(x) //concept fo TDZ

// let x= 5;

// console.log(x);

//Q3.
myFunc();   //Functions also follow hoisting

function myFunc(){
	console.log("Hello");
}

myFunc();

//Q4.

var variable = 10;

(()=>{
	console.log(variable);
	variable = 20;
	console.log(variable);
})();

console.log(variable);
var variable = 30;

//Q5.

// foo = 30;

// console.log(foo);

// var foo = 100;

// console.log(foo);

//Q6.
// variable = 10;

// (()=>{
// 	foo=100;
// 	console.log(variable);
// 	var foo = 100;
// 	variable = 20;
// 	console.log(variable);
// })();

// console.log(foo);
// console.log(variable);
// var variable = 30;


//Q7. 
// for(var i = 0;i<10;i++){
// 	setTimeout(()=>console.log(i),0);
// }

//Q8.
var name = "Aniket";

var obj = {

	name: "Dwivedi",

	prop:{
		name:"Prop",
		getName: function(){
			return this.name;
		},
	},

	getName: function(){
		return this.name;
	}
}
var test = obj.prop.getName();
console.log(test);
console.log(name);
obj.name = "ABJ";
console.log(obj.getName());

//Q8.
var one = {
	name:"Aniket",
	getName:function(){
		return this.name;
	}
};

var two = {
	name:"Dwivedi",
	getName:function(){
		return this.name;
	}
};

console.log(one.getName.call(two));

var three = {
	name:"ABC",
	getName: function(){
		console.log(this.name);
	}
}
setTimeout(three.getName.bind(one),3*1000);