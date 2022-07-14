let calk = document.querySelector(`.calk`)
let dis = document.querySelector(`.display`)

let fistNum = ``;
let secondNum = ``;
let action =``;
let result =``;
let firstTime = 1;



const clear = function (){
    dis.innerHTML = ``;
    fistNum = ``;
    secondNum = ``;
    action =``;
    result =``;
}

const displayResult = function(){
    if (result !== ``) {
        fistNum = result;
        actionF();
        dis.innerHTML  = result;
    } else {
        actionF();
        dis.innerHTML  = result;
    }
   
}

const actionF = function () {
    firstTime = 1;
    if ( action == `+`) {
        result = +fistNum + +secondNum;
    } else if (action == `-`){
        result = +fistNum - +secondNum;
    } else if (action == `/`){
        result = +fistNum / +secondNum;
    } else if (action == `X`){
        result = +fistNum * +secondNum;
    } 
    
}

const takeBtn = function (buttonClick){
    if  (
        buttonClick === `1` ||
        buttonClick === `2` ||
        buttonClick === `3` ||
        buttonClick === `4` ||
        buttonClick === `5` ||
        buttonClick === `6` ||
        buttonClick === `7` ||
        buttonClick === `8` ||
        buttonClick === `9` ||
        buttonClick === `0`
    ) { secondNum += buttonClick; 
    }

}

calk.addEventListener(`click`, ev => {
    if (ev.target.className == `btn`){
        btn = ev.target.textContent;
        btnDefenit (btn);
    } else if ( ev.target.className == `btn nanBtns`){
        action = ev.target.textContent;
        dis.innerHTML = action;
        
    }
    else if ( ev.target.className == `btn nanBtns result`){
        displayResult();
    }
    else if ( ev.target.className == `btn nanBtns clear`){
        clear();
    }

})

const btnDefenit = function (buttonClick) {
    
    if ( action !== `` ) {
        if (firstTime) {
            fistNum = secondNum;
            secondNum =``;
            firstTime = 0;
            takeBtn(buttonClick);
        } else {
            takeBtn(buttonClick);
            }
        } else if (fistNum !== `` && action == `` ) {
            takeBtn(buttonClick);
            } else { takeBtn(buttonClick);
                }
    
    dis.innerHTML = secondNum;
        
}



