const header = document.querySelector("h1"),
      left = document.querySelector(".left"),
      right = document.querySelector(".right"),
      btn = document.querySelector(".btn");   

    function playNow(num, box){
        if(num == 1){
            box.innerHTML = '<div class="one"></div>';
        } else if(num == 2){
            box.innerHTML = '<div class="two"></div><div class="three"></div>';
        } else if(num == 3){
            box.innerHTML = '<div class="one"></div><div class="two"></div><div class="three"></div>';
        } else if(num == 4){
            box.innerHTML = '<div class="two"></div><div class="three"></div> \
                             <div class="four"></div><div class="five"></div>';
        } else if(num == 5){
            box.innerHTML = '<div class="one"></div><div class="two"></div><div class="three"></div> \
                             <div class="four"></div><div class="five"></div>';
        } else{
            box.innerHTML = '<div class="two"></div><div class="three"></div><div class="four"></div> \
                             <div class="five"></div><div class="six"></div><div class="seven"></div>';
        } 
    }

    btn.addEventListener("click", ()=>{
        let randomLeft = Math.floor(Math.random()*6+1),
            randomRight = Math.floor(Math.random()*6+1);
        
        if(randomLeft > randomRight){
        header.innerText = "Win Player 1 !!!";
        } else if(randomLeft < randomRight){
        header.innerText = "Win Player 2 !!!";
        } else {header.innerText = "It is draw 😋";
        }    
        
        playNow(randomLeft, left);
        playNow(randomRight, right);
    });

    

    
