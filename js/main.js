document.addEventListener('DOMContentLoaded', function() {

    let lightSwitch = document.querySelector('.switch');
    let theBody = document.querySelector('body')
    let status = document.querySelector('.status')
    lightSwitch.addEventListener('click', function(){
        console.log("I have been clicked");
        lightSwitch.classList.toggle('on');
        lightSwitch.classList.toggle('off');
        theBody.classList.toggle('light')
        theBody.classList.toggle('dark')
        if (lightSwitch.classList.contains('off')){
            status.innerHTML=('Hey! Who turned out the lights!')
        }else{
            status.innerHTML=("It's so bright in here!")
        }
    })





})


