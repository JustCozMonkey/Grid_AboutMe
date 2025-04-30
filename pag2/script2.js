import { posts } from "/posts.js"


document.querySelector(".fa-solid").addEventListener("click", () => {
    document.querySelector(".navBar").classList.toggle("hide");
    console.log("Cartof")
});

const pageAdd = 3;
let currnetDispaly = 3;
const getBlogs = (arr) => {
    const newArr = arr.slice(0, currnetDispaly).map((blogg) => {
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
document.querySelector(".moreView").addEventListener("click", () => {
    if (currnetDispaly >= posts.length) {
        currnetDispaly = 3;
        document.querySelector(".moreView").innerHTML = "View More";
    }
    else {
        currnetDispaly += pageAdd;
        if (currnetDispaly >= posts.length) {
            document.querySelector(".moreView").innerHTML = "View Less";
        }
    }
    console.log(currnetDispaly)
    render()

})
const render = () => {
    document.querySelector(".blogs").innerHTML = getBlogs(posts)
}

render()