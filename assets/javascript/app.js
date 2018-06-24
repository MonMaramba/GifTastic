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
    /*$('<button/>'), {
        text: sportsChamps[i];
        id: 'btn' + i,
        click; function() {
            alert(this.text);
        }
    }*/
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
    //$("button").attr(this.id);
    var champString = (this.id);
    var champArr = champString.split(" ");
    firstName = champArr[0];
    lastName = champArr[1];

    console.log(firstName);
    console.log(lastName);
});

//$(HTMLBodyElement).append(buttonHolder);

//create div to render buttons into

//Function to render champion buttons



//Function to  