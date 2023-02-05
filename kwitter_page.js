const firebaseConfig = {
      apiKey: "AIzaSyBE8n7AexR6gnlK5Uqp63ZQ_jzS2hl4xgk",
      authDomain: "class-oooo.firebaseapp.com",
      projectId: "class-oooo",
      storageBucket: "class-oooo.appspot.com",
      messagingSenderId: "597101759554",
      appId: "1:597101759554:web:55bcf6f928e2b7bfa2f1db",
      measurementId: "G-FTYW706V87"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
  });
  document.getElementById("msg").value = "";
}