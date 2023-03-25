var firebaseConfig = {
    apiKey: "AIzaSyCmJfr_w3CLQqb3tiT2RcJeQxlCrk8SfsU",
    authDomain: "school-chats-696aa.firebaseapp.com",
    databaseURL: "https://school-chats-696aa-default-rtdb.firebaseio.com",
    projectId: "school-chats-696aa",
    storageBucket: "school-chats-696aa.appspot.com",
    messagingSenderId: "484403012121",
    appId: "1:484403012121:web:84cf57a16ec5e752310088"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "WELCOME " + user_name + "!" ;

function addRoom() {
        room_name = document.getElementById("room_name").value ;
        firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
        }) ;
        localStorage.setItem("room_name",room_name);
        window.location = "sc_page.html";
      }


      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
        console.log("Room Name -" + Room_names);
        row = "<div class = 'room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row ;    //End code
       });});}
 getData();
 
 function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "sc_page.html";
 }
 
 function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  
  }