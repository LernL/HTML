// function myTima(){
//     let a = prompt("a=")
// }

// let a = document.getElementById("inp1")

// function starWars(){
//     alert("Привет")
// }
// function star2Wars(){
//     alert("Как дела?")
// }
// a.addEventListener("click",starWars)
// a.addEventListener("click", star2Wars)
// let b = document.getElementById("but1")
// class Button{
//     starWars(event){
//         switch(event.type){
//             case "mousedown":
//                 b.innerHTML="Кнопка нажата";
//                 break;
//             case "mouseup":
//                 b.innerHTML="Кнопка выключена";
//                 break;
//         }
//     }
// }
// let c =  new Button();
// b.addEventListener("mousedown",Button);
// b.addEventListener("mouseup",Button);


class Button {
    handleEvent(event) {
     
      let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[method](event);
    }

    onMousedown() {
      elem.innerHTML = "Кнопка мыши нажата";
    }

    onMouseup() {
      elem.innerHTML += "...и отжата.";
    }
  }

  let menu = new Button();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
  //5 кнопок, просмотреть html и css в групе, 2 кнопки при отжатии что-то происходило и при нажатии 