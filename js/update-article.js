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
    debugger
    return getArticles()[index]

}

function displaceArticle(id) {


    let article = getArticle(id)
    debugger
    console.log(id);
    debugger
    console.log(article);
    debugger
    let titleInput = document.querySelector('#article-title')
    titleInput.value = article.title
    let contentTextArea = document.querySelector('#article-content')
    contentTextArea.innerHTML = article.content
    let image = document.querySelector('#image-preview')
    image.src = article.image

}

var urlImage

document.getElementById("article-image").addEventListener('change', function() {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {

        urlImage = image.result;
        document.getElementById("image-preview").src = urlImage;
        debugger
    })

})

displaceArticle(parseInt(articleId))

function doUpdate() {

    let articles = getArticles()

    articles[parseInt(articleId)].title = document.querySelector('#article-title').value
    articles[parseInt(articleId)].content = document.querySelector('#article-content').innerHTML
    articles[parseInt(articleId)].image = urlImage

    if (document.querySelector('#article-title').value.length <= 0) {
        return
    }

    if (document.querySelector('#article-content').innerHTML <= 0) {
        return
    }

    if (urlImage == undefined || urlImage == null) {
        alert('Please select image')
        return
    }

    localStorage.setItem('articles', JSON.stringify(articles))


    window.location.href = "/pages/dashboard/view-articles.html"
}