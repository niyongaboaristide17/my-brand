const getArticles = () => {
    articles = localStorage.getItem('articles');
    if (articles === null || articles.length === 0) {
        localStorage.setItem('articles', [])
        return []
    }
    return JSON.parse(localStorage.getItem('articles'))
}
let token = JSON.parse(localStorage.getItem('AccessToken'))
let deleteData = async function (url = '') {
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    });
    const resData = 'resource deleted...';
    return resData;
}
const displayArticles = function () {

    let articlesDiv = document.querySelector(".articles")
    let count = 0;
    let articles = getArticles()


    fetch('https://aristide-my-brand-api.herokuapp.com/api/v1/articles')
        .then(res => res.json())
        .then(data => {
            data.forEach(article => {

                let articleDiv = document.createElement("div")
                articleDiv.className = "article"
                let articleImg = document.createElement("img")
                articleImg.src = article.image
                let articleTitleDiv = document.createElement("div")
                articleTitleDiv.className = "article-title"
                articleTitleDiv.innerHTML = article.title

                let actionEditDiv = document.createElement("div")
                let editA = document.createElement("a")
                editA.href = "./edit-article.html?article=" + article._id
                let editI = document.createElement("i")
                editI.className = "fa fa-pencil"
                let spanEdit = document.createElement("span")
                spanEdit.appendChild(editI)
                editA.appendChild(spanEdit)
                actionEditDiv.appendChild(editA)

                let actionDeleteDiv = document.createElement("div")
                let deleteA = document.createElement("span")
                deleteA.href = "./view-articles.html"
                // console.log(count);
                let c = count
                deleteA.addEventListener("click", () => {

                    

                    

                    if (confirm("Are you sure you want to delete?") == true) {
                        // debugger
                        deleteData(`https://aristide-my-brand-api.herokuapp.com/api/v1/articles/${article._id}`)
                        .then(data => {
                            console.log(data);
                            window.location.href = "/pages/dashboard/view-articles.html"
                        })

                    }

                })
                let deleteI = document.createElement("i")
                deleteI.className = "fa fa-trash"
                let spanDelete = document.createElement("span")
                spanDelete.appendChild(deleteI)
                deleteA.appendChild(spanDelete)
                actionDeleteDiv.appendChild(deleteA)


                let articleActions = document.createElement("div")
                articleActions.className = "article-actions"
                articleActions.appendChild(actionEditDiv)
                articleActions.appendChild(actionDeleteDiv)

                articleDiv.appendChild(articleImg)
                articleDiv.appendChild(articleTitleDiv)
                articleDiv.appendChild(articleActions)

                articlesDiv.appendChild(articleDiv)

            })
        })


    // articles.forEach(article => {
    //     let articleDiv = document.createElement("div")
    //     articleDiv.className = "article"
    //     let articleImg = document.createElement("img")
    //     articleImg.src = article.image
    //     let articleTitleDiv = document.createElement("div")
    //     articleTitleDiv.className = "article-title"
    //     articleTitleDiv.innerHTML = article.title

    //     let actionEditDiv = document.createElement("div")
    //     let editA = document.createElement("a")
    //     editA.href = "./edit-article.html?article=" + count
    //     let editI = document.createElement("i")
    //     editI.className = "fa fa-pencil"
    //     let spanEdit = document.createElement("span")
    //     spanEdit.appendChild(editI)
    //     editA.appendChild(spanEdit)
    //     actionEditDiv.appendChild(editA)

    //     let actionDeleteDiv = document.createElement("div")
    //     let deleteA = document.createElement("span")
    //     deleteA.href = "./view-articles.html"
    //         // console.log(count);
    //     let c = count
    //     deleteA.addEventListener("click", () => {

    //         currentArticles = [...articles]
    //         currentArticles.splice(c, 1)

    //         if (confirm("Are you sure you want to delete?") == true) {
    //             localStorage.setItem("articles", JSON.stringify(currentArticles))
    //         }

    //         window.location.href = "/pages/dashboard/view-articles.html"

    //     })
    //     let deleteI = document.createElement("i")
    //     deleteI.className = "fa fa-trash"
    //     let spanDelete = document.createElement("span")
    //     spanDelete.appendChild(deleteI)
    //     deleteA.appendChild(spanDelete)
    //     actionDeleteDiv.appendChild(deleteA)


    //     let articleActions = document.createElement("div")
    //     articleActions.className = "article-actions"
    //     articleActions.appendChild(actionEditDiv)
    //     articleActions.appendChild(actionDeleteDiv)

    //     articleDiv.appendChild(articleImg)
    //     articleDiv.appendChild(articleTitleDiv)
    //     articleDiv.appendChild(articleActions)

    //     articlesDiv.appendChild(articleDiv)

    //     // console.log("Hello");
    //     count++
    // })

}

displayArticles()