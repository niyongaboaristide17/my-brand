function getComments() {
    let comments = localStorage.getItem('comments')
    if (comments === null || comments.length === 0) {
        localStorage.setItem("comments", JSON.stringify([]))
        return []
    }
    return JSON.parse(localStorage.getItem('comments'))


}

let userLoc;


let displayComments = () => {

    let feedbackContent = document.getElementById("feeds")

    getComments().forEach(comment => {


        fetch('https://api.ipregistry.co/?key=zhix4uxegf7m3066')
            .then(function(response) {
                return response.json();
            })
            .then(function(payload) {
                loc = payload.location.country.name
                let p = document.createElement("p")
                p.innerHTML = comment.message


                let content = document.createElement("div")
                content.className = "feedback-content"
                content.appendChild(p)

                let sentInfo = document.createElement("div")
                sentInfo.className = "sender-info"

                let spanEmail = document.createElement("span")
                spanEmail.innerHTML = comment.email
                let spanDate = document.createElement("span")
                date = new Date(comment.date)
                spanDate.innerHTML = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
                let spanTime = document.createElement("span")
                time = comment.date
                spanTime.innerHTML = date.getHours() + ':' + date.getMinutes()
                let br = document.createElement("br")
                let br1 = document.createElement("br")
                sentInfo.appendChild(spanEmail)
                sentInfo.appendChild(br)
                sentInfo.appendChild(spanDate)
                sentInfo.appendChild(br1)
                sentInfo.appendChild(spanTime)
                sentInfo.appendChild(document.createElement("br"))
                let span3 = document.createElement('span')
                span3.innerHTML = loc
                sentInfo.appendChild(span3)
                sentInfo.appendChild(span3)

                let card = document.createElement("div")
                card.className = "feedback-card"
                card.appendChild(content)
                card.appendChild(sentInfo)

                feedbackContent.appendChild(card)
                console.log(payload.location.country.name + ', ' + payload.location.city);
            });




    });
}





displayComments()