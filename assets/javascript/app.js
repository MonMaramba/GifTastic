//key uHY92bdnYhXNwpf69CggQTfGW79oMQ1N
//initial array of sports champions
var sportsChamps=["Michael Schumacher", "Tiger Woods", "Roger Federer", "Chris Froome",  "Venus Williams", "Manny Pacquiao",];

//create divs to hold buttons and gifs plus variable declaration
    var buttonHolder = $('<div>');
    var gifHolder = $('<div>');
    var star="";
    var athletes;
    var button;

function renderButton() {
    $(buttonHolder).empty();

    for (i=0; i < sportsChamps.length; i++){
   
    athletes = sportsChamps[i];
    button = $('<button>' + sportsChamps[i] + '</button>');
    button.attr("id", sportsChamps[i]);
    //button.attr("name", sportsChamps[i]);
    button.text(athletes);
    $(buttonHolder).append(button);
    $(".container").append(buttonHolder);
    
} 
};
renderButton();


//function for onclick event to request from giphy
    
    var firstName;
    var lastName;
    var champArr = [];
$("button").on('click', function(){
    event.preventDefault();
    var champString = (this.id);
    champArr = champString.split(" ");
    firstName = champArr[0];
    lastName = champArr[1];

    console.log(firstName);
    console.log(lastName);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + firstName + "+" + lastName + "&api_key=dc6zaTOxFJmzC&limit=5&rating=pg-13";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {
            //JSON.stringify(response);
            console.log(queryURL);
            console.log(response);

            var results = response.data;

            for (var j=0; j < results.length; j++){

                var gifIMG = $("<img>");
                //gifURL.attr("src", results[j].images.fixed_height_still.url);
                gifIMG.attr({
                    "src": results[j].images.fixed_height_still.url,
                    "data-state": "still",
                    "data-still": results[j].images.fixed_height_still.url,
                    "data-animate": results[j].images.fixed_height.url,
                    });

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

$("#addChamp").on("click", function() {
    event.preventDefault();
    // Input from html form
    star = $("#sportsStar").val().trim;

    sportsChamps.push(star);

    renderButton();
  });

//renderButton();
gifHolder.insertAfter(".container");


