
import dogs from "./data.js"


class Profile {
    
    constructor(data){
        Object.assign(this, data)

    }
      
    setSwipeStatus(data){
        data[0].hasBeenSwiped = true
        
    }
    
    setLikeStatus(data){
        data[0].hasBeenLiked = true
        
    }
    
    
    
    getBadgeHtml(data){
       if(this.hasBeenSwiped === false && this.hasBeenLiked === false){
            return "" 
        } else if (this.hasBeenSwiped){
            return `<image src="images/badge-nope.png" class="badge-nope">`
        } else {
            return `<image src="images/badge-like.png" class="badge-like">`
        }
    }  
      
      
    
    getProfileHtml(){
        const {name, avatar, age, bio} = this
        const badge = this.getBadgeHtml()
        
        return `<image src=${avatar} alt="dog image" class="avatar">
        <div class="badge" id="badge-id">
        ${badge}
        </div>
        <div class="dog-info">
            <h1 class="dog-details">${name}, ${age}</h1>
            <h2 class="bio">${bio}</h2>
        </div>`
        
    }
    
           
}

        
export default Profile;