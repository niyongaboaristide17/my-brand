function checkEmail() {
    const val = document.getElementById("email").value;
    return val.length > 0
}

function checkName() {
    const val = document.getElementById("name").value;
    return val.length > 0
}

function checkMessage() {
    const val = document.getElementById("message").value;
    return val.length > 0
}

// function getComments() {
//     let comments = localStorage.getItem('comments')
//     if (comments === null || comments.length === 0) {
//         localStorage.setItem("comments", JSON.stringify([]))
//         return []
//     }
//     return JSON.parse(localStorage.getItem('comments'))


// }

// const createComment = (comment) => {
//     let comments = getComments()
//     comments.push(comment)
//     localStorage.setItem("comments", JSON.stringify(comments))
// }

let loc = {};
const submitContact = () => {
    if (checkEmail() == false && checkName() == false && checkMessage() == false) {
        document.getElementById("email").placeholder = "Valid Email required"
        document.getElementById("email").style.border = "1px solid red"
        document.getElementById("name").placeholder = "Name required"
        document.getElementById("name").style.border = "1px solid red"
        document.getElementById("message").placeholder = "Message required"
        document.getElementById("message").style.border = "1px solid red"
        return false
    }

    if (checkName() == false) {
        document.getElementById("name").placeholder = "Name required"
        document.getElementById("name").style.border = "1px solid red"
        return false
    }

    if (checkEmail() == false) {
        document.getElementById("email").placeholder = "Email Required"
        document.getElementById("email").style.border = "1px solid red"
        return false
    }

    if (checkMessage() == false) {
        document.getElementById("message").placeholder = "Message required"
        document.getElementById("message").style.border = "1px solid red"
        return false
    }


    // addLocation()

    fetch('https://api.ipregistry.co/?key=zhix4uxegf7m3066')
        .then(function (response) {
            console.log('Heeeeyyyyyyyyyyyyyy');
            debugger
            return response.json();
        })
        .then(function (payload) {
            console.log(payload);
            const country = payload.location.country.name
            const city = payload.location.city ? payload.location.city : payload.location.country.capital
            let message = {
                sender:{
                    name: document.getElementById("name").value,
                    email: document.getElementById("email").value
                },
                message: document.getElementById("message").value,
                location: country + ', ' + city
            }
            console.log(message);
            
            async function postData(url = '', data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                return response.json(); // parses JSON response into native JavaScript objects
              }
              debugger
              postData('https://aristide-my-brand-api.herokuapp.com/api/v1/queries', message)
                .then(data => {
                //   console.log(data); 
                    alert('Message sent')
                  window.location.href = '/pages/contact.html'
                });
            // console.log(payload.location.country.name + ', ' + payload.location.city);
        });






    // navigator.geolocation.getCurrentPosition((position) => {
    //     loc = {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //     }
    //     createComment({
    //         name: document.getElementById("name").value,
    //         email: document.getElementById("email").value,
    //         message: document.getElementById("message").value,
    //         date: new Date(),
    //         loc,
    //     })
    //     console.log(loc);
    // }, error => {
    //     loc = {}
    //     createComment({
    //         name: document.getElementById("name").value,
    //         email: document.getElementById("email").value,
    //         message: document.getElementById("message").value,
    //         date: new Date(),
    //         loc,
    //     })
    // })



    // window.location.href = '/pages/contact.html'
}

// function addLocation() {

// }