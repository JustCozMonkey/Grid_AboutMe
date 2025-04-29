import { posts } from "/posts.js"

const getBlogs = (arr) => {
    const newArr = arr.map((blogg) => {
        const { img, date, blog, text } = blogg
        return `<div class="blog">
                    <img src=${img}>
                    <p>${date}</p>
                    <h2>${blog}</h2>
                    <p>${text}</p>
                </div>`
    }).join("")
    return newArr
}

const render = () => {
    document.querySelector(".blogs").innerHTML = getBlogs(posts)
}

render()