// localStorage.setItem("name", "Jason");
// localStorage.setItem("country", "USA");
// console.log("localStorage",localStorage);
// // localStorage.removeItem("name");
// // localStorage.clear();
// console.log("localStorage.length",localStorage.length);
// console.log("localStorage.key(1)",localStorage.key(1));

// $("<h1>").addClass("container").html("Name: " + localStorage.name).appendTo("body")
// $("<h1>").addClass("container").html("Country: " + localStorage.country).appendTo("body")

// $("#clickMe").on("click", function () {
//     event.preventDefault();
//     localStorage.setItem("age", $("#theval").val());
//     $("<h1>").addClass("container").html("Age: " + localStorage.age).appendTo("body")
//     $('#theval').val("")
// })

// var testArray = [];

// var newObjSyn = '[{"firstname" : "jason", "lastname":"navarro"}, {"firstname" : "jess", "lastname":"navarro"}]';
// var test1 = JSON.parse(newObjSyn);
// console.log("JSON parse obj1",test1[0].firstname);
// console.log("JSON parse obj2",test1[1].firstname);


// testArray.push(newObjSyn)

// console.log(testArray);

// var newObjSyn1 = '[{"firstname" : "steve", "lastname":"jobs"}, {"firstname" : "eva", "lastname":"green"}]';

// testArray.push(newObjSyn1)

// console.log(testArray);

// console.log(testArray[0][].firstname);




// var objTest2 = {

//     "test":"hello",
//     "love":{"truth":"Jesus"}
// }

// var objTest3 = {
    
//         test:"hello",
//         love:{truth:"Jesus"}
//     }

// console.log("ObjProp quoted",objTest2.love.truth);
// console.log("ObjProp non-quoted",objTest3.love.truth);

var config = {
    apiKey: "AIzaSyAFiVblE0vGH4K9ttdMdI3rIngiFitdY4M",
    authDomain: "my-first-firebase-project-86.firebaseapp.com",
    databaseURL: "https://my-first-firebase-project-86.firebaseio.com",
    projectId: "my-first-firebase-project-86",
    storageBucket: "my-first-firebase-project-86.appspot.com",
    messagingSenderId: "295406057207"
  };
  firebase.initializeApp(config);

  console.log(firebase);

var users = [];

users.push("jason");
users.push("navarro");

console.log(users);

var jsonUsers = JSON.stringify(users);
console.log(jsonUsers);
localStorage.setItem("users", jsonUsers)

console.log(JSON.parse(localStorage["users"]));


