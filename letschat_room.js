var firebaseConfig = {
    apiKey: "AIzaSyCtSmGqF61XB873ocZOSgLsTaoQR5I6d8A",
    authDomain: "lets-chat-e69c1.firebaseapp.com",
    databaseURL: "https://lets-chat-e69c1-default-rtdb.firebaseio.com",
    projectId: "lets-chat-e69c1",
    storageBucket: "lets-chat-e69c1.appspot.com",
    messagingSenderId: "835464314825",
    appId: "1:835464314825:web:fcb789b4b4b221486eb218"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
  title = localStorage.getItem("user_name");
document.getElementById("title").innerHTML = "Welcome" + title;


function logout() {

window.location = "login.html"

}

function addroom() {

code = document.getElementById("code").value
localStorage.setItem("code" , code)

}