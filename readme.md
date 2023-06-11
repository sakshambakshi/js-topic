## Advance Topics


### AbortController
[Docs](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal) 

The AbortController is a really helpful if you want to cancel WEB API network call and its really helpful to manage un-nessary calling going out and manage wrong cb running and unnesscary load on the server  .


I have used this in reall time sports betting application as user can select any sport page and if the user changes very fast befor previous one is even loaded this can create a  unnessary work to be done both backend and frontend and it will show the previous sport and the next support according how their network are being completed and how ther callbacks are being executed but if user have changed or selected a new sport and aprevious one is not loaded just cancelled it .

Understand this with the **Netflix** example if you select stranger game and you say fuck off lets watch something old school like **friends** and meantime it the stranger game is still being fetched and a spinner on the page and the user clicks on the back button and click your new old school show it will now be loading  both the starger game and friends . But with the help of our hero abortcontroller you can cancel stranger games and only load the friend saving both server resouces and  the client resources.


```js

// a video play example
let controller 

let playbutton = doument.getElementById("play")

let abortButton = document.getElementById("abort")




abortButton.addEventListner('click' , () =>{
    if(controller){

        controller.abort();

    }

})



function fetchVideo(){

    controller = new AbortController();
    const signal = contoller.signal 

    fetch("ENTER_YOUR_URL" , {signal}),then(resp =>{
        controller = null 

    }).catch((err)=> {
        console.error(err);
    })

}





```

### generator in js


### MutationObserver


### Service Worker
[Resources](https://www.youtube.com/@SteveGriffith-Prof3ssorSt3v3)


### IndexDB


---