// fetch('https://swapi.dev/api/people',{
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "AyeHenz"
//     })
// })
// .then(res => {
//     return res.json()})
// .then(data => console.log(data))


let orgnnbx = document.getElementById('charnm')
let newbx = document.getElementById('charname')
let height  = document.getElementById('charhght')
let gender = document.getElementById('chargnd')
let singlwrp = document.querySelector('.single-wrap')
let baseUrl = 'https://swapi.dev/api/people/7'

let viewbtn = document.querySelector(".view").addEventListener('click',(event) =>{
    event.preventDefault()
    console.log('here');
    singlwrp.style.visibility = "visible"
})
let closebtn = document.querySelector('.close').addEventListener('click',(event) => {
    event.preventDefault()
    singlwrp.style.visibility = "hidden"
})


fetch(baseUrl)
.then(res => res.json())
.then(json => {
    console.log(json)
    newbx.innerText = json.name
    orgnnbx.innerText = json.name
    height.innerText = json.height
    gender.innerText = json.gender
})
