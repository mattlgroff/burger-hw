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
    
  });

  $(".devour").on("click", function(){
    console.log("clicked");
    let scope = this;

    let id = $(scope).attr('burger_id');

    devourBurger(id);

  });

});



function submitBurger(name){

    const currentURL = window.location.origin;

    let newBurger = {
      burger_name: name
    }

    // AJAX post the data to the friends API. 
    $.post(currentURL + "/post-burger", newBurger, function(){
      location.reload();
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      //alert("Added new burger: " + newBurger.name + " to the list of burgers.");

    });
}

function devourBurger(id){
  const currentURL = window.location.origin;

  console.log("Burger ID in Frontend: " + id);

  let updateBurger = {
    burger_id: id
  }

  $.ajax({
    url: currentURL + "/put-burger",
    type: 'PUT',
    data: updateBurger,
    success: function(result) {
      console.log(result);
      location.reload();
    }
  });
}