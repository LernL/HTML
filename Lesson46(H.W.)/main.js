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