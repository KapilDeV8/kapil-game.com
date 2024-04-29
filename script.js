let num = 0;
let Reset = document.getElementById("Reset");
let move = document.getElementById("move");
let turn = document.getElementById("turns");
let message = document.getElementById("message")
const gameOver = new Audio("gameover.mp3");
const ting = new Audio("ting.mp3");



const changeNum = () => {
    if (num < 9) {
        num += 1
        move.innerText = num;
    }
}
const changeTurn = (e) => {
    if (e.target.innerText == "") {
        ting.play()
        if (num % 2 == 0) {
            e.target.innerText = "X"
            turn.innerText = "O"
        } else {
            e.target.innerText = "O";
            turn.innerText = "X"
        }
    } else {
        document.querySelector(".message").style.display = "flex";
        document.querySelector(".message").innerText = "Box  filled"

        setTimeout(() => {
            document.querySelector(".message").style.display = "none";
            document.querySelector(".message").innerText = ""
        }, 2000);
    }
}
const checkWin = () => {
    let boxes = document.getElementsByClassName("box")
    let wins = [
       [0, 1 ,2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
    ]
    wins.forEach(e => {
        
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== "")){
            document.querySelector(".message").style.display = "flex";
            document.querySelector(".message").innerText = `${boxes[e[0]].innerText} WON`;
            setTimeout(() => {
                gameOver.play()
                
            }, 750);

            setTimeout(() => {
                document.querySelector(".message").style.display = "none";
                document.querySelector(".message").innerText = "";
                for(let i = 0; i<=9; i++){boxes[i].innerText = ""}
                move.innerText = ""
            }, 2000);
        }
    })
}



Reset.addEventListener('click', () => {
    Array.from(document.querySelectorAll(".box")).forEach(e => {
        e.innerText = "";
    });
    move.innerText = "";
})

Array.from(document.querySelectorAll(".box")).forEach((i) => {
    i.addEventListener('click', (e) => {
        changeTurn(e)
        checkWin()
        changeNum()
    })
})
