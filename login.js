//firebase.auth().onAuthStateChanged(function(user){
  //if(user){

    //document.getElementById("user_div").style.display="block";
    //document.getElementById("login_div").style.display="none";

    //var user = firebase.auth().currentUser;

    //if (user !=null){
      //var email_id = user.email;
      //var uname = user.displayName;


      //document.getElementById("user_name_from_database").value = uname;
      //document.getElementById("user_email_from_database").value= email_id;

 // }
  //else{
    // document.getElementById("user_div").style.display="none";
    // document.getElementById("login_div").style.display="block";
 // }
//})


function login(){
  var email_address = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(email_address,password).catch(function(error){
    console.log(error);
    if (username === "user" && password === "Arf@78dd") {
      alert("You have successfully logged in.");
      location.href="index.html";
  } else {
      loginErrorMsg.style.opacity = 1;
  }
  });
}

function signup(){
  var email_address = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value;
  firebase.auth().signInWithEmailAndPassword(email_address,password).catch(function(error){
    console.log(error);
    if (username === "user" && password === "Arf@78dd") {
      alert("You have successfully logged in.");
      location.href="index.html";
  } else {
      loginErrorMsg.style.opacity = 1;
  }
  });
}

function logout(){
  firebase.auth().signOut();
}