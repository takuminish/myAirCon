require('dotenv').config(); 

window.onload = function() {
    var xhr = new XMLHttpRequest();

    document.getElementById("cool_button").onclick = function() {
        var url = process.env.COOL;
        post_data(url, xhr);   
    };

    document.getElementById("hot_button").onclick = function() {
        var url = process.env.HOT;
        post_data(url, xhr);  
    };

    document.getElementById("off_button").onclick = function() {
        var url = process.env.OFF;
        post_data(url, xhr); 
    };

    document.getElementById("temp_up_button").onclick = function() {
        var url = process.env.UP;
        post_data(url, xhr); 
    };

    document.getElementById("temp_down_button").onclick = function() {
        var url = process.env.OFF;
        post_data(url, xhr); 
    };

    setInterval( function() {
        var url = process.env.ROOM;
        post_data(url, xhr); 
    },5000);

    setInterval( function() {
        var url = process.env.AIRCON;
        post_data(url, xhr); 
    },7000);
    
}

function post_data(url, xhr) {
    alert(url);
    xhr.open('GET', url);
    xhr.send();
 
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("aircon_state").textContent = xhr.responseText
         }
    }
} 