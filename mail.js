const firebaseConfig = {
  apiKey: "AIzaSyCuapaFA3q4cC1-43zgpG6Sb9MiQ-WzVvg",
  authDomain: "get-set-learn-3c026.firebaseapp.com",
  databaseURL: "https://get-set-learn-3c026-default-rtdb.firebaseio.com",
  projectId: "get-set-learn-3c026",
  storageBucket: "get-set-learn-3c026.appspot.com",
  messagingSenderId: "638724122626",
  appId: "1:638724122626:web:3755fd6bc57a6d116a5f1b",
  measurementId: "G-08T5FK5N2N"
    //   copy your firebase config informations
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };