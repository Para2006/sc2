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
    room_name = localStorage.getItem("room_name");

    function send() 
    {
     msg=document.getElementById("msg").value ;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
     document.getElementById("msg").value = "";
     

    }