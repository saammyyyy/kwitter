
const firebaseConfig = {
      apiKey: "AIzaSyBE8n7AexR6gnlK5Uqp63ZQ_jzS2hl4xgk",
      authDomain: "class-oooo.firebaseapp.com",
      projectId: "class-oooo",
      storageBucket: "class-oooo.appspot.com",
      messagingSenderId: "597101759554",
      appId: "1:597101759554:web:55bcf6f928e2b7bfa2f1db",
      measurementId: "G-FTYW706V87"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) '  >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}