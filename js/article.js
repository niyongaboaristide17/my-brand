var urlImage

document.getElementById("article-image").addEventListener('change', function() {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {

        urlImage = image.result;
        document.getElementById("img-preview").src = urlImage;
        debugger
    })



})

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

const create = () => {

    navigator.geolocation.getCurrentPosition((success) => {

    }, (error) => {

    })

    const title = document.getElementById("title").value
    const content = document.getElementById("content").value

    const author = {...JSON.parse(localStorage.getItem("user")) }
    delete author.isLoggedIn
    delete author.password

    creatArticle({
        author,
        title,
        content,
        image: urlImage,
        comments: [],
        likes: 0,
        date: new Date()
    })

    window.location.href = "/pages/dashboard/view-articles.html"
    debugger
}