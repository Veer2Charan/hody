function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -"+ room_names)
   row="<div class='room_name' id="+room_names+" onclick='redirectToRoomNmae(this.id'>+room_names</div>"
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();
function addRoom() {
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
       purpose:"adding room name"
   });
   localStorage.setItem("room_name",room_name)
   window.location="kwitter_page.html"
}
function redirectToRoomName() {
   console.log(name);
   localStorage.setItem("room_name", room_name)
   window.location="kwitter_page.html"
}