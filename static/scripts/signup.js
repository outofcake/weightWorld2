(function() {
	// Initialize Firebase
	  var config = {
		apiKey: "AIzaSyC4veNMKpc2XyEtQJxg_5ZGNwmfBAexu8c",
		authDomain: "weightworld-67d35.firebaseapp.com",
		databaseURL: "https://weightworld-67d35.firebaseio.com",
		projectId: "weightworld-67d35",
		storageBucket: "weightworld-67d35.appspot.com",
		messagingSenderId: "360326042761"
	  };
	  firebase.initializeApp(config);
}());



window.onload=function(){
  var testBtn = document.getElementById('newSignUp2');
  const txtEmail =document.getElementById('newEmail');
  const txtPassword = document.getElementById('newPassword');


  testBtn.addEventListener('click', function(){
    var email = txtEmail.value;
    var pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    promise.then(user => {
      user.sendEmailVerification();
      alert('Please verify email before logging in')
      console.log("Email sent")
      }).catch(error => console.log);
      });
    }
