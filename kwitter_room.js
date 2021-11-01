var firebaseConfig = {
      apiKey: "AIzaSyCvqR8bfe_LpuiocHTvPy26kT6JGvUyvL0",
      authDomain: "kwitter-5b508.firebaseapp.com",
      databaseURL: "https://kwitter-5b508-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b508",
      storageBucket: "kwitter-5b508.appspot.com",
      messagingSenderId: "660395388675",
      appId: "1:660395388675:web:e930d4a2a427d4a9368336"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!";

function addRoom () {
      Room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(Room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",Room_name);
      window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname"+Room_names);
row="<div class='room_name' id="+Room_names+" onClick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>" ;
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}