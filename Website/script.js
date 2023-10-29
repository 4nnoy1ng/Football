console.log("inside");

document.addEventListener('DOMContentLoaded', function() {
    var output = document.createElement('button');
    button.type = 'button';
    button.innerHTML = 'Press me';
    button.className = 'btn-styled';
 
    button.onclick = function() {
        output++;
    };
 
    var container = document.getElementById('button');
    container.appendChild(button);
}, false);