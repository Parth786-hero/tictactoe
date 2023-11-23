let gameOver = false;
let turn = "X";

function changeTurn(){
    return turn === "X" ? "O" : "X";
}

let bag = document.querySelectorAll(".box");
bag = Array.from(bag);

bag.map((ele)=>{
    ele.addEventListener("click" , ()=>{
        ele.innerText = turn;
        turn = changeTurn();
        document.querySelector(".turn").innerText = turn;
        checkWin();
        if(gameOver){
            document.querySelector(".img-box").style.width = "100%";
            turn = changeTurn();
            document.querySelector(".turn").innerText = `${turn} won 💯`;
            document.querySelector(".second-info").style.display="none";
        }
        
    })
});


const btn = document.querySelector(".reset");
btn.addEventListener("click" , ()=>{
    bag.map(ele=>{
        ele.innerText = "";
        turn = "X";
        document.querySelector(".turn").innerText = turn;
        document.querySelector(".img-box").style.width = "0%";
        gameOver = false;
        document.querySelector(".second-info").style.display="";
        
    })

})


function checkWin(){
    
    const winChances = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ];

    winChances.map((arr)=>{
        if(bag[arr[0]].innerText === bag[arr[1]].innerText && bag[arr[1]].innerText === bag[arr[2]].innerText && bag[arr[0]].innerText !== ""){
            
            gameOver = true;
            
        }
       
    })
}
