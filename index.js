// Remember to import the data and Dog class!
import dogs from "./data.js"
import Profile from "./Dog.js"

function getNewDog(){
    const nextDogData = dogs[0]
    return nextDogData ? new Profile(nextDogData) : {}     
}

let newDog = getNewDog()
const profile = document.getElementById("dog-container")
profile.innerHTML = newDog.getProfileHtml()

function checkDogs(){
       if(dogs.length > 0){
       let newDog = getNewDog()
       profile.innerHTML = newDog.getProfileHtml()  
    } else {
        profile.innerHTML = `<p>check back for new dogs later!</p>`
    }
}

document.getElementById("btn-swipe").addEventListener("click", function(){
    newDog.setSwipeStatus(dogs)
    const dog = new Profile(dogs[0])
    profile.innerHTML = dog.getProfileHtml()
    dogs.shift()
    setTimeout(checkDogs, 1000)

   
})

document.getElementById("btn-like").addEventListener("click", function(){
    newDog.setLikeStatus(dogs)
    const dog = new Profile(dogs[0])
    profile.innerHTML = dog.getProfileHtml()
    dogs.shift()
    setTimeout(checkDogs, 1000)
    
})
            



   