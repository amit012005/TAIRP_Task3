let filterButtons=document.querySelectorAll(".buttons button");
let filterableCards=document.querySelectorAll(".filterable-cards .card");
// console.log("FilterAbleCrds")
// console.log(filterableCards)
const filterCards=e=>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    // console.log("active")
    filterableCards.forEach(card=>{
        card.classList.add("hide");
        // console.log("hide");
        if(card.dataset.category===e.target.dataset.category || e.target.dataset.category==="all"){
            console.log("answer")
            card.classList.remove("hide");
        }
    })

    
};
filterButtons.forEach(button=>button.addEventListener("click",filterCards));