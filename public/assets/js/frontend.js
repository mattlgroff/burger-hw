$(document).ready(function(){

  $("#submitBurger").on("click", function(){
    event.preventDefault();

    let name = $("#burgerText").val().trim();
    $("#burgerText").text("");

    if (name === "") {
      alert("You must have a name for the new Burger!");
    }
    else{
      submitBurger(name);
    }
    
  })
});


function submitBurger(name){

    const currentURL = window.location.origin;

    let newBurger = {
      burger_name: name
    }

    // AJAX post the data to the friends API. 
    $.post(currentURL + "/post-burger", newBurger, function(){

      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      alert("Added new burger: " + newBurger.name + " to the list of burgers.");

    });
}