if (typeof pause == 'undefined') pause = false;

//--------------------------------------------------
// KEYBOARD EVENT HELPER permet keys('')
//--------------------------------------------------

var keysObj = {
    27: () => pause = true // esc == pause par defaut
};

function key(keyCode, action) {
    let keycodesArr = Array.isArray(keyCode) ? keycode : [keyCode];
    keycodesArr.forEach(keyC => keysObj[keyC] = action)
}

addEventListener("keydown", function(e) {
    if (isset(keysObj[e.keyCode])) {
        e.preventDefault()
        keysObj[e.keyCode]()
    }
})

var isset = elm => typeof elm != 'undefined' && elm != null;