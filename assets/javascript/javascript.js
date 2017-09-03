localStorage.setItem("name", "Jason");
localStorage.setItem("country", "USA");




console.log(localStorage);

// localStorage.removeItem("name");

// localStorage.clear();

console.log(localStorage.length);

console.log(localStorage.key(2));

$("<h1>").addClass("container").html("Name: " + localStorage.name).appendTo("body")
$("<h1>").addClass("container").html("Country: " + localStorage.country).appendTo("body")


$("#clickMe").on("click", function(){
    event.preventDefault();

    localStorage.setItem("age",$("#theval").val());
    $("<h1>").addClass("container").html("Age: " + localStorage.age).appendTo("body")
    $('#theval').val("")
})

