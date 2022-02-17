var urlImage

document.getElementById("article-image").addEventListener('change', function () {
    const image = new FileReader();
    image.readAsDataURL(this.files[0]);
    image.addEventListener("load", () => {

        urlImage = image.result;
        document.getElementById("img-preview").src = urlImage;

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




    // let location;
    // navigator.geolocation.getCurrentPosition((position) => {
    //     location = {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //     }
    //     newArticle.location = location
    //     creatArticle(newArticle)
    //         // debugger
    // }, (error) => {
    //     creatArticle(newArticle)
    // })

    const title = document.getElementById("title").value
    const content = document.getElementById("content").value
    const image = document.getElementById("article-image").files[0]
    console.log(image);
    let token = JSON.parse(localStorage.getItem('AccessToken'))
    const formData = new FormData();
    formData.append('image', image);
    formData.append("title", title);
    formData.append("content", content);
    let check = fetch('https://aristide-my-brand-api.herokuapp.com/api/v1/articles', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        body: formData
    })
    .then((res) => res.json())
    .then((data) => {
            console.log(data)
            window.location.href = "/pages/dashboard/view-articles.html"
        });
    // if (check) {

    //     debugger
        // window.location.href = "/pages/dashboard/view-articles.html"
    // } else {
    //     alert("Artice not created");
    // }

    // const author = {...JSON.parse(localStorage.getItem("user")) }
    // delete author.isLoggedIn
    // delete author.password

    // creatArticle({
    //     author,
    //     title,
    //     content,
    //     image: urlImage,
    //     comments: [],
    //     likes: 0,
    //     date: new Date()
    // })

    // window.location.href = "/pages/dashboard/view-articles.html"
    // debugger
}

