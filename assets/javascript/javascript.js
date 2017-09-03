localStorage.setItem("name", "Jason");
localStorage.setItem("country", "USA");
localStorage.setItem("Age", "31");
$("<h1>").addClass("container").html(localStorage.name).appendTo("body")
$("<h1>").addClass("container").html(localStorage.country).appendTo("body")
$("<h1>").addClass("container").html(localStorage.Age).appendTo("body")
