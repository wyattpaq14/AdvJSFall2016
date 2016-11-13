
function getElementContent(selector) {
    var elem = document.querySelector(selector);
    return elem.innerHTML;
}

function isValidInputField() {
    var regx = new RegExp(/^\d+$/);
    var el = document.querySelector('input');
    if (regx.test(el.value))
        return true;
    else
        return false;


}


function getDecorationStyle() {
    var el = document.querySelector('input');
    var elStyle = el.style.textDecoration;
    if (elStyle !== 'overline')
        return true;
    if (elStyle == 'overline')
        return true;
}
