/**
 * Created by elliot on 10/15/16.
 */
function is_f2(){
    "use strict";
    var ev= window.event||e;
    if (ev.keyCode === 113) {
        var div = document.getElementsByClassName("can_hide")[0];
        div.hidden = div.hidden == true ? false : true;
    }
}

