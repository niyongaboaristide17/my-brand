// let params = (new URL(document.location)).searchParams;
// let articleId = params.get("article");
// var urlImage
// const getArticles = () => {
//     let articles = localStorage.getItem('articles');
//     if (articles === null || articles.length === 0) {
//         localStorage.setItem('articles', [])
//         return []
//     }
//     return JSON.parse(localStorage.getItem('articles'))
// }

// const getArticle = (index) => {
//     debugger
//     return getArticles()[index]

// }

// function displaceArticle(id) {


//     let article = getArticle(id)

//     console.log(id);

//     console.log(article);

//     let titleInput = document.querySelector('#article-title')
//     titleInput.value = article.title
//     let contentTextArea = document.querySelector('#article-content')
//     contentTextArea.innerHTML = article.content
//     let image = document.querySelector('#image-preview')
//     image.src = article.image
//     urlImage = article.image

// }



document.getElementById("article-image").addEventListener('change', function () {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {

        urlImage = image.result;
        document.getElementById("image-preview").src = urlImage;
        debugger
    })

})

// displaceArticle(parseInt(articleId))

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const article_id = urlParams.get('article')

function doUpdate() {

    // let articles = getArticles()

    const title = document.querySelector('#article-title').value
    const content = document.querySelector('#article-content').innerHTML
    // articles[parseInt(articleId)].image = urlImage

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

    const image = document.getElementById("article-image").files[0]
    console.log(article_id);
    // console.log(image);
    let token = JSON.parse(localStorage.getItem('AccessToken'))
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image)
    let check = fetch(`https://aristide-my-brand-api.herokuapp.com/api/v1/articles/${article_id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        body: formData
    })
    .then((res) => res.json())
    .then((data) => {
        debugger
            console.log(data)
            window.location.href = "/pages/dashboard/view-articles.html"
        });
}



// -----------------------------------------------


fetch('https://aristide-my-brand-api.herokuapp.com/api/v1/articles/' + article_id)
    .then(res => res.json())
    .then(article => {

        let titleInput = document.querySelector('#article-title')
        titleInput.value = article.title
        let contentTextArea = document.querySelector('#article-content')
        contentTextArea.innerHTML = article.content
        let image = document.querySelector('#image-preview')
        image.src = article.image
        urlImage = article.image
    })