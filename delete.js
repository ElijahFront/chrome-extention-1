// Author - Ilya Smetanin, cuprum19930@gmail.com
popup = {
  number:0
};
function deletePopUps(){
    var divs = document.getElementsByTagName('div');

    var divsArr = Array.prototype.slice.call(divs, 0);


    divsArr.forEach(div => {
        if (div.style.border == '1px solid rgb(255, 209, 25)'){
          popup.number++;
          div.parentNode.removeChild(div)
    }
});
    chrome.runtime.sendMessage(popup.number, function () {
      console.log(`Removed ${popup.number} elem`);
    })

}

setInterval(deletePopUps, 2000);
