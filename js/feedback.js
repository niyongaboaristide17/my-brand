let displayComments = () => {

    let feedbackContent = document.getElementById("feeds")

    fetch('https://aristide-my-brand-api.herokuapp.com/api/v1/queries')
        .then(res => res.json())
        .then(data => {
            data.reverse().forEach(query => {

                let p = document.createElement("p")
                p.innerHTML = query.message

                let content = document.createElement("div")
                content.className = "feedback-content"
                content.appendChild(p)

                let sentInfo = document.createElement("div")
                sentInfo.className = "sender-info"

                let spanEmail = document.createElement("span")
                spanEmail.innerHTML = query.sender.email
                let spanDate = document.createElement("span")
                let date = new Date(query.created_on + "")
                spanDate.innerHTML = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
                let spanTime = document.createElement("span")
                time = query.date
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
                span3.innerHTML = query.location
                sentInfo.appendChild(span3)
                sentInfo.appendChild(span3)

                let card = document.createElement("div")
                card.className = "feedback-card"
                card.appendChild(content)
                card.appendChild(sentInfo)

                feedbackContent.appendChild(card)

            })
        })


}





displayComments()