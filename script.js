(function () {
  //selector
  const imojiElement = document.getElementById("imoji");
  const countElement = document.getElementById("count");
  const decrementElement = document.getElementById("decrement");
  const resetElement = document.getElementById("reset");
  const incrementElement = document.getElementById("increment");
  const backgroudElement = document.querySelector(".container");

    let count = 0;
    
    // update background
    function updateBackground() {
  if (count > 0) {
    imojiElement.innerText = "🥰";
    backgroudElement.style.backgroundColor = `hsl(120, ${Math.min(100, count * 10)}%, 80%)`;
  } else if (count < 0) {
    imojiElement.innerText = "😪";
    backgroudElement.style.backgroundColor = `hsl(0, ${Math.min(100, Math.abs(count) * 10)}%, 80%)`;
  } else {
    imojiElement.innerText = "😃";
    backgroudElement.style.backgroundColor = "white";
  }
    }
  
    //increment button
  incrementElement.addEventListener("click", () => {
  count++;
  countElement.innerText = count;
  updateBackground();
});

     //decrement button
decrementElement.addEventListener("click", () => {
  count--;
  countElement.innerText = count;
  updateBackground();
});

     //decrement button
resetElement.addEventListener("click", () => {
  count = 0;
  countElement.innerText = count;
  updateBackground();
});
})();
