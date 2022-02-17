const getArticles = () => {
    articles = localStorage.getItem('articles');
    if (articles === null || articles.length === 0) {
        localStorage.setItem('articles', [])
        return []
    }
    return JSON.parse(localStorage.getItem('articles'))
}

const displayArticles = function () {
    let articlesDiv = document.querySelector('.articles')

    let articles = getArticles()

    let count = 0;




    // fetch articles
    fetch('https://aristide-my-brand-api.herokuapp.com/api/v1/articles')
        .then(res => res.json())
        .then(data =>{
            data.forEach(article => {

                let articleImg = document.createElement('img')
                articleImg.src = article.image || "https://via.placeholder.com/150" // Must be added to articleCardDiv
        
                let divContent = document.createElement('div') // Must be added to articleCardDiv
                let articleTitleSpan = document.createElement('span')
                articleTitleSpan.innerHTML = article.title
                articleTitleSpan.className = "article-title"
                let articleDateSpan = document.createElement('span')
                articleDateSpan.innerHTML = new Date(article.created_on).toLocaleDateString("en-UK") || "No date"
                articleDateSpan.className = "article-date"
                divContent.appendChild(articleTitleSpan)
                divContent.appendChild(document.createElement('br'))
                divContent.appendChild(articleDateSpan)
        
                let articleCardDiv = document.createElement('div')
                articleCardDiv.className = "article-card"
        
                articleCardDiv.appendChild(articleImg)
                articleCardDiv.appendChild(divContent)
        
                let articleA = document.createElement('a')
                articleA.href = '/pages/article.html?article=' + article._id
                articleA.appendChild(articleCardDiv)
        
                articlesDiv.appendChild(articleA)
        
            })
        })


    //loop into articles
    // articles.forEach(article => {

    //     let articleImg = document.createElement('img')
    //     articleImg.src = article.image || "https://via.placeholder.com/150" // Must be added to articleCardDiv

    //     let divContent = document.createElement('div') // Must be added to articleCardDiv
    //     let articleTitleSpan = document.createElement('span')
    //     articleTitleSpan.innerHTML = article.title
    //     articleTitleSpan.className = "article-title"
    //     let articleDateSpan = document.createElement('span')
    //     articleDateSpan.innerHTML = article.date || "No date"
    //     articleDateSpan.className = "article-date"
    //     divContent.appendChild(articleTitleSpan)
    //     divContent.appendChild(document.createElement('br'))
    //     divContent.appendChild(articleDateSpan)

    //     let articleCardDiv = document.createElement('div')
    //     articleCardDiv.className = "article-card"

    //     articleCardDiv.appendChild(articleImg)
    //     articleCardDiv.appendChild(divContent)

    //     let articleA = document.createElement('a')
    //     articleA.href = '/pages/article.html?article=' + count++
    //     articleA.appendChild(articleCardDiv)

    //     articlesDiv.appendChild(articleA)

    // })


}

displayArticles()