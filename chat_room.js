var firebaseConfig = {
    apiKey: "AIzaSyBAWW9yyxMMRoAo8no5x4gkshu2bwjIbRs",
    authDomain: "kwitter-b3390.firebaseapp.com",
    databaseURL: "https://kwitter-b3390-default-rtdb.firebaseio.com",
    projectId: "kwitter-b3390",
    storageBucket: "kwitter-b3390.appspot.com",
    messagingSenderId: "1037123449346",
    appId: "1:1037123449346:web:f584a58038074d74592d1b"
  };
  
  
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
