const { body } = document;
const titleColor = document.getElementById('titleColor');
const textColor = document.getElementById('textColor');

function changeBackground(number) {
  // check if backgroung is already showing
  let previousBackground;

  if (body.className) {
    previousBackground = body.className;
  }

  body.className = '';
  switch (number) {
    case '1':
      if (previousBackground === 'background-1') {
        changeColor('#333');
        return false;
      } else {
        changeColor('#fff');
        body.classList.add('background-1');
      }
      break;
    case '2':
      changeColor('#333');
      return previousBackground === 'background-2' ? false : body.classList.add('background-2');
    case '3':
      if (previousBackground === 'background-3') {
        changeColor('#333');
        return false;
      } else {
        changeColor('#fff');
        body.classList.add('background-3');
      }
      break;
    default:
      break;
  }
}

function changeColor(color) {
  titleColor.style.color = color;
  textColor.style.color = color;
}
