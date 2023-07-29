//contact

window.addEventListener("DOMContentLoaded", function () {
    menu()
    aboutTab()
    frequentAskedQuestions()
    //managesection()
})

function frequentAskedQuestions() {
    // question 
    const contentContainer = document.querySelectorAll(".content-container");
    //console.log(contentContainer)
    for (i = 0; i < contentContainer.length; i++) {
        contentContainer[i].addEventListener("click", function () {
            this.classList.toggle("muuji")
        })
    }
}


// about
function aboutTab() {
    const about = document.querySelector(".about");
    const btns = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".content");

    about.addEventListener("click", function (e) {
        const id = e.target.dataset.id
        if (id) {
            btns.forEach(function (btn) {
                btn.classList.remove("active")
                e.target.classList.add("active")
            })
            contents.forEach(function (article) {
                article.classList.remove("active")
            })
            const element = document.getElementById(id)
            element.classList.add("active")
        }
    })
}
//manage


const dhaqaji = document.querySelectorAll(".dhaqaji")

let observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entries)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})

dhaqaji.forEach((element) => observer.observe(element))





//================================================

const date = document.querySelector(".date")
date.innerHTML = new Date().getFullYear()
//date.innerHTML = date


//=====================================================

function menu(){
    const menubtn = document.querySelector(".menu-btn")
const navmenu = document.querySelector(".nav-menu")

menubtn.addEventListener("click", function(){
    if(navmenu.classList.contains("open")){
        navmenu.classList.remove("open")
        navmenu.classList.remove("z-index")
    }else{
        navmenu.classList.add("open")
        navmenu.classList.add("z-index")
    }
})

menubtn.addEventListener("scroll", function(){
    if(navmenu.classList.contains("open")){
    }
})







}












