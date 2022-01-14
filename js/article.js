const getArticles = () => {
    articles = localStorage.getItem('articles');
    if (articles === null || articles.length === 0) {
        localStorage.setItem('articles', [])
        return []
    }
    return JSON.parse(localStorage.getItem('articles'))
}

const creatArticle = (article) => {
    let articles = getArticles()
    articles.push(article)
    localStorage.setItem('articles', JSON.stringify(articles))
}

const getArticle = (index) => {
    return getArticles()[index]
}

const commentArticle = (index, comment) => {
    let articles = getArticles()
    if (articles[index].comments) {
        articles[index].comments.push(comment)
        localStorage.setItem('articles', JSON.stringify(articles))
    }
}

let create = () => {

    console.log('Creating article');
    const title = document.getElementById("title").value
    const content = document.getElementById("content").value

    const image = document.getElementById("article-image").value

    creatArticle({
        title,
        content,
        image,
        comment: []
    })

}