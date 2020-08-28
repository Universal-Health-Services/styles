function superScript(container, target) {
    const c = document.getElementsByClassName(container)
    const t = target // target
    const r = '<sup>'+target+'</sup>' // replacement
    const g = new RegExp(t,"g"); // global
    // all containers (c)
    for(var i = 0; i < c.length; i++){
        // target has been found
        if (c[i].innerHTML.indexOf(t) !== -1) {
            // all child nodes (n) of container (c)
            for(var j = 0; j < c[i].children.length; j++){
                if (c[i].children[j].innerHTML.indexOf(t) !== -1) {
                    var newHTML = c[i].children[j].innerHTML
                    newHTML = newHTML.replace(g, r) // global replace
                    c[i].children[j].innerHTML = newHTML
                }
            }
        }
    }
}