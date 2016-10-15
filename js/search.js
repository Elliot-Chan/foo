/**
 * Created by elliot on 10/14/16.
 */
function alert_engine(engine) {
    var content = document.getElementById("content")
    switch(engine) {
        case "Google": window.open("https://www.google.com.tw/#newwindow=1&q=" + content.value);break;
        case "Baidu": window.open("https://www.baidu.com/s?wd=" + content.value); break;
        case "Bing": window.open("https://www.bing.com/search?q=" + content.value); break;
        case "WikiPedia(cn)": window.open("https://zh.wikipedia.org/wiki/" + content.value); break;
        case "WikiPedia(en)": window.open("https://en.wikipedia.org/wiki/" + content.value); break;
    }
}

function chang_engine(eng) {
    var engine = document.getElementById("engine");
    engine.innerHTML = eng;
    engine.setAttribute("title", eng);
}

function keyDown(e) {

    var ev= window.event||e;
    if (ev.keyCode == 13) {
        var engine = document.getElementById("engine");
        alert("hello");
        alert_engine(engine.title);
    }
}


