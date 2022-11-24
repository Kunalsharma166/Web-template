const firebaseConfig = {
    apiKey: "AIzaSyDcX-wXsWXZP1LsTQ_Kf-B8iDVMpxUekPg",
    authDomain: "redstore-73495.firebaseapp.com",
    projectId: "redstore-73495",
    storageBucket: "redstore-73495.appspot.com",
    messagingSenderId: "870122205871",
    appId: "1:870122205871:web:ebe39efc62d461795dda5a",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("User_data");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, subject, message);

    saveContactInfo(name, email, subject, message);

    document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        User_name: name,
        User_email: email,
        subject: subject,
        message: message,
    });
}