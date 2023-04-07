const selectButtons = Array.from(document.querySelectorAll(".button"));

let selectedChoice;

selectButtons.forEach((button)=>{

    button.addEventListener("click", ()=>{
        
        if(button.id == "cross"){
            selectedChoice = "cross"
        }
        else{
            selectedChoice = "circle";
        }

        // now we can use our selectedChoice to different page also.
        localStorage.setItem('selectedChoice', selectedChoice);

        // and now navigate us to different page.
        return window.location.assign('/game.html');

    })
})
