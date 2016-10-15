/**
 * Created by elliot on 10/15/16.
 */
var body = document.getElementsByTagName("body")[0];
body.onwheel = move_next_nav;

function move_next_nav(event) {
    "use strict";
    var e = event || window.event;
    var stuff=document.getElementsByClassName("nav_table");
    for(var cur_index = 0; cur_index < stuff.length; cur_index++) {
        var cur = stuff[cur_index];
        if (!cur.hidden) {
            if (e.wheelDelta > 0) {
                cur.hidden = true;
                var index = (cur_index - 1) >= 0 ? cur_index - 1  : (cur_index - 1) + stuff.length;
                stuff[index].hidden = false;
            } else {

                stuff[(cur_index + 1) % stuff.length].hidden = false;
                cur.hidden = true;
            }
            break;
        }
    }
}