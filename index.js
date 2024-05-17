const cell=document.querySelectorAll('.cell');
const text=document.querySelector('#head');
const restartBtn = document.querySelector('#restart');
const game=[];
const cir = 'O';
const axe = 'X';
let player=cir;

const draw=()=>{
  cell.forEach((box,i)=>{
    let Str='';
    box.style=Str;
    box.addEventListener('click',Clicked);
  });
};

const Clicked=(e)=>{
  const id = e.target.id;
  console.log(e);
  if (!game[id]){
    console.log(game[id]);
    game[id]=player;
    e.target.innerText=player;
    if(won()){
      text.innerText =`${player} has won!`;
      restart();
      return;
    }
    if(pdraw()) {
      return;
    }
    player=player===cir?axe:cir;
  }
};

const won=()=>{
  if(game[0]===player) {
    if(game[1]===player&&game[2]===player){
      text.innerText=`${player} wins`;
      return true;
    }
    if(game[3]===player&&game[6]===player){
      text.innerText = `${player} wins`;
      return true;
    }
    if(game[4]===player&&game[8]===player){
      text.innerText =`${player} wins`;
      return true;
    }
  }
  if (game[8]===player) {
    if(game[2]===player&&game[5]===player){
      text.innerText=`${player} wins`;
      return true;
    }
    if(game[6]===player&&game[7]===player){
      text.innerText=`${player} wins`;
      return true;
    }
  }
  if(game[4]===player) {
    if(game[1]===player&&game[7]===player){
      text.innerText=`${player} wins`;
      return true;
    }
    if(game[3]===player&&game[5]===player){
      text.innerText=`${player} wins`;
      return true;
    }
    if(game[2]===player&&game[6]===player){
      text.innerText=`${player} wins`;
      return true;
    }
  }
};

const pdraw=()=>{
  let count=0;
  game.forEach((space,i)=>{
    if(game[i]!==null)count++;
  });
  if(count===9){
    text.innerText=`Draw`;
    restart();
  }
};
const restart=()=>{
  setTimeout(()=>{
    game.forEach((space, i)=>{
      game[i]=null;
    });
    cell.forEach((box)=>{
      box.innerText = '';
    });
    text.innerText=`Play`;
    text.innerText=``;
  },1000);
};
restartBtn.addEventListener('click', restart);
restart();
draw();
