function vowelcheck(){
    let word = document.querySelector(".userwrd").value
    let result = document.querySelector(".res")
    let vowels = "aeiou"
    let vowcnt = 0;
    let cnsnt = 0;
    for(i=0; i < word.length; i++){
        if(word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
            vowcnt += 1
        }else{
            cnsnt +=1
        }
    }
    if (vowcnt > cnsnt) {
        result.innerText = "Vowels Win"
    }else if(cnsnt > vowcnt){
        result.innerText = "Consonants Win"
    }else{
        result.innerText = "A tie"
    }
}


let checkbtn = document.querySelector("#check")
checkbtn.addEventListener("click",()=>{
   vowelcheck()
})