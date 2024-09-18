let wrapper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function writingAll (stringTarget, container){
  wrapper = document.querySelector('['+container+']')
  const stringsContainer = document.getElementsByClassName(stringTarget)
     
  while(wrapper){
    for (i=0; i <  stringsContainer.length ; i++){
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(1000)
      await erase()
      await sleep(1000)
    };
  }
};

async function write(text){    
  let index = 0
  while(index < text.length){
    const timeout = 100
    await sleep(timeout)
    index++
    wrapper.innerHTML = text.substring(0, index)
  }
};


async function erase() {
  while(wrapper.textContent.length){
    const timeout = 100
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
};

writingAll('item', 'data-text');



// background


// Some random colors
// const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

// const numBalls = 50;
// const balls = [];

// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
//   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
  
//   balls.push(ball);
//   document.body.append(ball);
// }

// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });