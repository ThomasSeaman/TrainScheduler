  // Initialize Firebase
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
    trainName = $("#trainName-input").val()
    // console.log("name =" + trainName)
    destination = $("#destination-input").val()
    frequency = $("#frequency-input").val()
    nextArrival = $("#first-train-time-input").val()
    // console.log("trainName===>",trainName)
    database.ref().push({

        // name:$("#name").val().trim()
        // name:$("#name").val().trim()
        // name:$("#name").val().trim()
        // name:$("#name").val().trim()

        train:trainName,
        destination:destination,
        frequency:frequency,
        arrival:nextArrival

    })
})

database.ref().on('child_added', function(snap) {
    var minutesAwayCalc = 0
    const {train,destination,frequency,arrival} = snap.val()
    $("#trainName").append("<div>"+train+"</div>")
    // console.log(snap.val().train)
    $("#destination").append("<div>"+destination+"</div>")
    $("#frequency").append("<div>"+frequency+"</div>")
    $("#nextArrival").append("<div>"+arrival+"</div>")
    $("#minutesAway").append("<div>"+minutesAwayCalc+"</div>")
})

database.ref().orderByChild('number').limitToLast(1).on('child_added', function(snapshot) {
    // console.log('hi')
    // console.log(snapshot.val())
})

// var timeArr = tFirstTrain.split(":");
// var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
// var maxMoment = moment.max(moment(), trainTime);

// moment.dif