var firebaseConfig = {
    apiKey: "AIzaSyAiuaI0Iz4cneW3N7VYRy9rey583xtsVnM",
    authDomain: "kwitter-2afdb.firebaseapp.com",
    databaseURL: "https://kwitter-2afdb-default-rtdb.firebaseio.com",
    projectId: "kwitter-2afdb",
    storageBucket: "kwitter-2afdb.appspot.com",
    messagingSenderId: "66743022580",
    appId: "1:66743022580:web:bc5f90dd807e4e7bf57fa1"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  function addUser() {
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";

}
