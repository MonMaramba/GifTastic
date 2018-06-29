//key uHY92bdnYhXNwpf69CggQTfGW79oMQ1N
//initial array of sports champions
var sportsChamps=["Michael Schumacher", "Tiger Woods", "Roger Federer", "Chris Froome",  "Venus Williams", "Manny Pacquiao", "Lebron James"];

//create divs to hold buttons and gifs plus variable declaration
    var buttonHolder = $('<div>');
    var gifHolder = $('<div>');
    //var athletes;
    
function renderButton() {
    $(buttonHolder).empty();

    for (i=0; i < sportsChamps.length; i++){
   
    //athletes = sportsChamps[i];
    var button = $('<button>' + sportsChamps[i] + '</button>');
    //button.attr("id", sportsChamps[i]);
    button.addClass("button");
    button.text(sportsChamps[i]);
    $(buttonHolder).append(button);
    $(".container").append(buttonHolder);   
} 
};
renderButton();
    
$(document).on('click', ".button",  function(event){
    event.preventDefault();
    var champString = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + /*firstName + "+" + lastName +*/champString + "&api_key=dc6zaTOxFJmzC&limit=5&rating=pg-13";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {
            var results = response.data;

              for (var j=0; j < results.length; j++){

                var gifIMG = $("<img>");
                //gif to display is will be an object with 2 urls...  1 for animated and another for still
                
                gifIMG.attr({
                    "src": results[j].images.fixed_height_still.url,
                    "data-state": "still",
                    "data-still": results[j].images.fixed_height_still.url,
                    "data-animate": results[j].images.fixed_height.url,
                    });

                //pause and play function. Changing data-state
                gifIMG.on("click", function() {

                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                })  

                gifHolder.prepend(gifIMG);

                var rating = results[j].rating;
                var p1 = $("<p>").text("Rating: " + rating);
                gifHolder.prepend(p1);
                console.log(rating);
                        } 
                 })
});

    var star = "";

$(document).ready(function(){
    $("#addChamp").on("click", function(event) {
    event.preventDefault();
    // Input from html form
    star = $("#sportsHero").val().trim();

    sportsChamps.push(star);
    console.log(sportsChamps);
    renderButton();
  })
});

//renderButton();
gifHolder.insertAfter(".container");
