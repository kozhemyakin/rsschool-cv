function switchTheme() {
  if(!document.querySelector('.myClass')) {
    document.getElementById("switchButton").classList.add('myClass');
    document.querySelector('body').style.background = '#f6f8e7';
    document.querySelector('body').style.color = '#202023';
    document.querySelector('.hello').style.background = '#f6f8e7';
    document.querySelector('.code').style.background = '#f6f8e7';
  } else {
    document.getElementById("switchButton").classList.remove('myClass');
    document.querySelector('body').style.background = '#202023';
    document.querySelector('body').style.color = '#ffffeb';
    document.querySelector('.hello').style.background = '#424242';
    document.querySelector('.code').style.background = '#564949';
  }
}
