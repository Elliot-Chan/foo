/**
 * Created by elliot on 10/15/16.
 */
var body = document.getElementsByTagName("body")[0];
body.onwheel = move_next_nav;

function move_next_nav(event) {
    "use strict";
    var e = event || window.event;
    var no = document.getElementsByClassName("nav_no");
    var stuff = document.getElementsByClassName("nav_table");
    for(var cur_index = 0; cur_index <= stuff.length; cur_index++) {
        var cur = stuff[cur_index];
        if (!cur.hidden) {
            cur.hidden = true;
            var index;
            if (e.wheelDelta > 0) {
                index = (cur_index - 1) >= 0 ? cur_index - 1  : cur_index -1 + stuff.length;
                stuff[index].hidden = false;
            } else {
                stuff[(cur_index + 1) % stuff.length].hidden = false;
                index = (cur_index + 1) % stuff.length;
            }
            for (var p = 0; p <= no.length; p++) {
                //no[p].style.position = "fixed";
                if (p == index) {
                    no[p].style.color = "rgba(255, 255, 255, 0.5)";
                }
                else {
                    no[p].style.color = "rgba(255, 255, 255, 0)";
                }
            }
            break;
        }
    }
}

function change_nav(title) {
    var num = parseInt(title) - 1;
    var stuff = document.getElementsByClassName("nav_table");
    for(var cur_index = 0; cur_index <= stuff.length; cur_index++) {
        var cur = stuff[cur_index];
        if (!cur.hidden) {
            cur.hidden = true;
            stuff[num].hidden = false;
            break;
        }
    }
}