let count = 0 ;

const value = document.getElementById("#value");
const btns = document.getElementById(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click" , funtion(e) {
        const style = e.currentTarget.classList;
        
        if( style.contains("decrease")){
            count--;
        }
        elseif(style.contains("increases")){
            count++;
        } 
        else {
            count=0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })

})