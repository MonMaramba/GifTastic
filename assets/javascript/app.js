//key uHY92bdnYhXNwpf69CggQTfGW79oMQ1N
//initial array of sports champions
var sportsChamps=["Michael Schumacher", "Tiger Woods", "Roger Federer", "Chris Froome",  "Venus Williams", "Manny Pacquiao", "Lindsey Vonn"];

//creates divs to hold buttons and gifs
    //var buttonHolder = $('<div>');
    var gifHolder = $('<div>');
    var i;
    var athletes;
    var button;

for (i=0; i < sportsChamps.length; i++){
   
    //$("buttonHolder").empty();
    $("")
    athletes = sportsChamps[i];
    button = $('<button>' + sportsChamps[i] + '</button>');
    button.attr("id", sportsChamps[i]);
    //button.attr("name", sportsChamps[i]);
    button.text(athletes);
    $(".container").append(button);
    
}; 

//function for onclick event to request for giphy
    
    var firstName;
    var lastName;

$("button").on('click', function(){
    event.preventDefault();
    var champString = (this.id);
    var champArr = champString.split(" ");
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
            JSON.stringify(response);
            console.log(queryURL);
            console.log(response);

        
            for (var i=0; i < response.length; i++){

                var rating = response[i].rating;
                var pR = $("<p>").text("Rating" + rating);
                gifHolder.append(pR);
                console.log(response[i].rating);


                var gifURL = response.images.downsized_still;
                gifURL.attr("data-state", "still");
                gifURL.attr("class", "gif");
                var annimGifURL = response.images.downsized;
                annimGifURL.attr("data-state", "animate");
                annimGifURL.attr("class", "gif");
                
                var gifDisp = $("<img>");
                gifDisp.attr("src", gifURL);

                $(".gif").on("click", function() {
                    var state = $(this).attr("data-state");

                    /*if (state === "still") {
                        $(this).attr("src", $(this).attr("data-state"));
                    }*/
                })


                

            } 
            


        })
    
});
gifHolder.insertAfter(".container");

//$(HTMLBodyElement).append(buttonHolder);

//create div to render buttons into

//Function to render champion buttons



//Function to  