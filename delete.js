function deletePopUps(){
    var divs = document.getElementsByTagName('div');

    var divsArr = Array.prototype.slice.call(divs, 0);

    divsArr.forEach(div => {
        if (div.style.border == '1px solid rgb(255, 209, 25)'){
        div.parentNode.removeChild(div)
    }
});
    console.log('Removing popups');
}

setInterval(deletePopUps, 2000);