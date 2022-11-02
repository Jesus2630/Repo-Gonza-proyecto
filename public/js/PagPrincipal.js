//Efecto del titulo animado
consoleText(['Bienvenido mi nombre es Bot.', 'Te voy a ayudar a armar tu PC.', '¡Estoy para lo que necesites!.'], 'text',['tomato','rebeccapurple','#ff5080;']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  let visible = true;
  let con = document.getElementById('console');
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1500)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//Efecto de que las imagenes capten el height y se aplique el efecto cuando scrolleas
window.onscroll = function() { efectoScroll() };

function efectoScroll() {
  let relleno = document.getElementById("information");
  let distancia_relleno = window.innerHeight - relleno.getBoundingClientRect().top;
  if (distancia_relleno >= 100) {
      document.querySelector('.img-bot').classList.add("img");
     
  }
}


//Efecto que ayuda a que no allan bug en el vinculo de la primera parte
let hipervinculo=document.querySelector('div a')
hipervinculo.addEventListener('click',function(){
  hipervinculo.href='#information'
})