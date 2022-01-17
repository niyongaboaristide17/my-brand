let params = (new URL(document.location)).searchParams;
let articleId = params.get("article");

const getArticles = () => {
    let articles = localStorage.getItem('articles');
    if (articles === null || articles.length === 0) {
        localStorage.setItem('articles', [])
        return []
    }
    return JSON.parse(localStorage.getItem('articles'))
}

const getArticle = (index) => {
    // debugger
    return getArticles()[index]

}

const displayArticle = function(id) {

    let article = getArticle(id)
    let pageTitleDiv = document.querySelector('.page-title')
    pageTitleDiv.innerHTML = article.title

    let imageBig = document.querySelector('#image-big')
    imageBig.src = article.image || "https://via.placeholder.com/150"

    let authorImg = document.querySelector('.author-image')
    authorImg.src = article.author.image || "https://via.placeholder.com/150"

    let authorName = document.querySelector('#author-name')
    authorName.innerHTML = article.author.name

    let articleDate = document.querySelector('#article-date')
    let date = new Date(article.date)
    articleDate.innerHTML = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    let blogTitleH2 = document.querySelector('#blog-title')
    blogTitleH2.innerHTML = article.title

    let likes = document.querySelector('.article-like-count')
    likes.innerHTML = article.likes

    let articleContent = document.querySelector('.article-content')
    articleContent.innerHTML = article.content
        // debugger

    let iconLike = document.querySelector('#icon-like')

    let like = parseInt(article.likes) + 1
    iconLike.addEventListener('click', () => {


        let newArticles = [...getArticles()]
        newArticles[id].likes = like

        localStorage.setItem('articles', JSON.stringify(newArticles))

        window.location.href = "/pages/article.html?article=" + id

    })

    let commentBtn = document.querySelector('#comment-btn')
    commentBtn.addEventListener('click', () => {
        let person = document.querySelector('.comment-person').value
        let message = document.querySelector('.comment-content').value

        if (person.toString().trim().length > 0 && message.toString().trim().length > 0) {
            let newArticles = [...getArticles()]
            newArticles[id].comments.push({
                commentBy: person,
                date: new Date(),
                message,
            })
            localStorage.setItem('articles', JSON.stringify(newArticles))

            window.location.href = "/pages/article.html?article=" + id

        } else {
            alert('Either commentator or comment message required')
            console.log({ person, message });
        }


    })

    article.comments.forEach(comment => {
        let commentDiv = document.createElement('div')
        commentDiv.className = 'a-comment'

        let commentHeaderDiv = document.createElement('div')
        commentHeaderDiv.className = 'comment-header'

        let div1 = document.createElement('div')
        let nameSpan = document.createElement('span')
        nameSpan.style.color = '#C4C4C4'
        nameSpan.style.fontSize = '14px'
        nameSpan.innerHTML = comment.commentBy
        div1.appendChild(nameSpan)

        let div2 = document.createElement('div')
        let nameSpan2 = document.createElement('span')
        nameSpan2.style.color = '#C4C4C4'
        nameSpan2.style.fontSize = '14px'
        let date = new Date(comment.date)
        nameSpan2.innerHTML = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        div2.appendChild(nameSpan2)

        commentHeaderDiv.appendChild(div1)
        commentHeaderDiv.appendChild(div2)

        let commentMessageDiv = document.createElement('div')
        commentMessageDiv.className = 'comment-body'
        commentMessageDiv.innerHTML = `${comment.message}`

        commentDiv.appendChild(commentHeaderDiv)
        commentDiv.appendChild(commentMessageDiv)

        document.querySelector('.article-comments').appendChild(commentDiv)

    })

}

displayArticle(parseInt(articleId))
    // debugger