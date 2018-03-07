var config = {
    apiKey: "AIzaSyBXYv4DjhNeGrjP--Oi5oV0NJi4jr8oYKs",
    authDomain: "thomasproject-27.firebaseapp.com",
    databaseURL: "https://thomasproject-27.firebaseio.com",
    projectId: "thomasproject-27",
    storageBucket: "thomasproject-27.appspot.com",
    messagingSenderId: "329218194581"
};

firebase.initializeApp(config);

var database = firebase.database()

var trainName
var destination
var frequency
var nextArrival
var minutesAway




$("#submit").on("click", function (){
    event.preventDefault()
    trainName = $("#name").val()
    console.log("name =" + trainName)
    destination = $("#destination").val()
    frequency = $("#frequency").val()
    nextArrival = $("#nextArrival").val()
    minutesAway = $("#minutesAway").val()
    
    database.ref().push({

    //     // name:$("#name").val().trim()
    //     // name:$("#name").val().trim()
    //     // name:$("#name").val().trim()
    //     // name:$("#name").val().trim()

        train:trainName,
        destination:destination,
        frequency:frequency,
        arrival:nextArrival,
        minutes:minutesAway

    })

    
})


database.ref().on('child_added', function(snap) {
    console.log(snap.val())
    $("#trainName").append("<div>"+snap.train+"</div>")
    $("#destination").append("<div>"+snap.destination+"</div>")
    $("#frequency").append("<div>"+snap.frequency+"</div>")
    $("#nextArrival").append("<div>"+snap.arrival+"</div>")
    $("#minutesAway").append("<div>"+snap.minutes+"</div>")
    $("#  ").append("<div>"+snap.  +"</div>")
})

database.ref().orderByChild('number').limitToLast(1).on('child_added', function(snapshot) {
    console.log('hi')
    console.log(snapshot.val())
})



