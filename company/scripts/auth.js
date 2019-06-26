 
 auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
  } else {
    console.log('user logged out');
  }
})


const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  console.log(email)
  console.log(password)
  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
	  swal("Account created", "Welcome To clifi", "success");
	  return db.collection('compuser').doc(cred.user.uid).set({
      type: "Company"
    
  });
});
});
/*
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
*/

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['email_det'].value;
  console.log(email)

  const password = loginForm['pass'].value;
    console.log(password)

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    // document.cookie="userid="+uid
    uid=firebase.auth().currentUser.uid;
    localStorage.setItem("userid", uid);
    window.location.replace("../authenticated/index.html");

	swal("Login sucessful!", "Welcome back", "success");
  }).catch(function(error) {
  	swal("Login Failed!", "sorry", "error");
});
  
  
 

});	