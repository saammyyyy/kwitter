function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

       window.location = "kwitter_room.html";
}
const firebaseConfig = {
    apiKey: ""



  
}

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });

}