let check = document.querySelectorAll(".checkbox")
let tt = document.querySelectorAll(".textt")
let error = document.querySelector("#warning")
let progressbar = document.querySelector("#inner")
const progressText = document.querySelector('#progress-text')


let allgoal = JSON.parse(localStorage.getItem('allgoal')) || {}
       let completed = Object.values(allgoal).filter((goal) => goal.completed).length;
      const total = tt.length;
       const progress = (completed / total) * 100;
       progressbar.style.width = `${progress}%`;
progressText.innerText = `${completed}/${total} completed`;

 let inpfield = false ;
check.forEach((e) => {


   e.addEventListener("click",(f) =>{
    //  for (let i=0; i<tt.length; i++){
   const allfield = [...tt].every((input) => { return input.value})
   if (allfield){
       e.parentElement.classList.toggle ('completed')
       error.style.display = "none"
       const inpu = e.nextElementSibling.id
      if (allgoal[inpu]) {
    allgoal[inpu].completed = !allgoal[inpu].completed
}
       completed = Object.values(allgoal).filter((goal) => goal.completed).length;
       const total = tt.length;
       const progress = (completed / total) * 100;
       progressbar.style.width = `${progress}%`;
progressText.innerText = `${completed}/${total} completed`;

    localStorage.setItem('allgoal',JSON.stringify(allgoal))


   }else {
       error.style.display = "block"
   }
})
});
 

tt.forEach((inu) => {

   if (allgoal[inu.id]) {
    inu.value = allgoal[inu.id].name;
}

if (allgoal[inu.id].completed){
    inu.parentElement.classList.add ("completed")
}
    
inu.addEventListener("focus", () => {
    error.style.display = "none"
})

inu.addEventListener("input", (e) => {
allgoal [inu.id] = {
    name : inu.value,
    completed: false,
}
    localStorage.setItem('allgoal',JSON.stringify(allgoal))

})
})


  























// console.dir(tt)

// for (let i=0; i<tt.length; i++){
//     console.log(tt[i])
//     if (tt[i].value != ""){
//         console.log("null")
//     }}


// tt.forEach(
//     (t) => {
//         t.addEventListener("input", function(){)
//      if (t === " ")  
//         {
//             let flag = 0
//         } 
//         else {
//             flag = 1
//         }
    
//     }
// )

