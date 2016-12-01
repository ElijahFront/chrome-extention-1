// Author - Ilya Smetanin, cuprum19930@gmail.com

var indicator = document.getElementById('counter');

chrome.runtime.onMessage.addListener(function(message) {
  indicator.innerHTML = 'Убрано: '+ message;
})
