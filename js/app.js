require('dotenv').config(); 

window.onload = function() {
    var post_code = "off";
    var url = process.env.URL;
    var xhr = new XMLHttpRequest();

    document.getElementById("cool_button").onclick = function() {
        post_code = "c";
        post_data(url, xhr, post_code);   
    };

    document.getElementById("hot_button").onclick = function() {
        post_code = "ruby";
        post_data(url, xhr, post_code);  
    };

    document.getElementById("off_button").onclick = function() {
        post_code = "php";
        post_data(url, xhr, post_code); 
    };

    document.getElementById("temp_up_button").onclick = function() {
        post_code = "javascript";
        post_data(url, xhr, post_code); 
    };

    document.getElementById("temp_down_button").onclick = function() {
        post_code = "python";
        post_data(url, xhr, post_code); 
    };
/*
    setInterval( function() {
        data.post_code = "temp_check"
        post_data(data);
    },5000);

    setInterval( function() {
 
    },7000);
    */
}

function post_data(url, xhr, data) {
    url = url + "q=" + data;
    alert(url);
    xhr.open('GET', url);
    xhr.send();
 
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("aircon_state").textContent = xhr.responseText
         }
    }
} 