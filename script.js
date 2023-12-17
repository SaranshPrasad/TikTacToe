let p1 = true;
let count = 0;

const boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector("#main");
let newGameBtn = document.querySelector("#new-btn");
let resetBtn =  document.querySelector("#reset");
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

function playSound(name) {
  var audio = new Audio( name + ".mp3");
  audio.play();
}

function drawGame() {
  msg.innerText = `Game is drawn play again ! `;
  msgContainer.classList.remove("hide");
  main.classList.add("hide");
 playSound(lose);

}

boxes.forEach((box) => {
    box.addEventListener("click" , ()=> {
        if (p1) {
            box.innerText = 'O';
            p1 = false;
            box.disabled = true;
            box.style.background = "rgba(0,0,0,0.2)";
            count++;
        }
        else{
            box.innerText = 'X';
            p1 = true;
            box.disabled = true;
            count++;
        }
        if(count === 9){
          drawGame();
        }else{
          checkWinner();
        }
      
    });
    if(count === 9){
      drawGame();
    }

});
const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
 playSound(win);

  };
  
  const newGame = () => {
      window.location.reload(true);
  };

  newGameBtn.addEventListener("click" , () => {
    newGame();
  });

  resetBtn.addEventListener("click", () => {
    newGame();
  });
