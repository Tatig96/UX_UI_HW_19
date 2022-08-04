console.log("Your index.js file is loaded correctly FOOL!");
$( "#myID" ).on("click", function(){
    $(".fadeMe").fadeToggle("slow");
    console.log("You clicked on #myID");
    alert( "Professional Resume Coming Soon!" );
});