let principal = $("#principal");
let news = $("#news");
let url = window.location.href
let swDirect = "/PWA-AMS-U2-P2/sw.js"

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        swDirect = "/sw.js"
    }
    navigator.serviceWorker.register(swDirect)  
}else{    
    console.log("error")
}

$(".btn-seguir").on("click", function(e){
    e.preventDefault();
    console.log("pulsar otra vez")
    principal.fadeOut(function(){
        news.slideDown(1000)
    })
});

$(".btn-return").on("click", function(){
    news.fadeOut(function(){
        principal.slideDown(1000)
    })
})