var navMenu=document.querySelectorAll('#menuList a');
var interval;
for( var i=0;i<navMenu.length;i++){
    navMenu[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        interval=setInterval(scrollVertically,50,targetSection);
    });
}


function scrollVertically(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
}


var progressBars=document.querySelectorAll('.skill-progress> div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;


function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}
initialiseBars();
function fillBars(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let intervall=setInterval(()=>{
            if(currentWidth>targetWidth){
                clearInterval(intervall);
                return;
            }
            currentWidth++;
            bar.style.width=currentWidth+'%';
        },10);
    }
}
function checkScroll(){
    var coordinators=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinators.top<window.innerHeight){
        animationDone=true;  
        fillBars();
    }
    else if(coordinators.top > window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}