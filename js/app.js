require('dotenv').config(); 

window.onload = function() {
    var xhr = new XMLHttpRequest();
    var desicion_temp = 20;

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
        desicion_temp++;
        desicion_temp = desicion_temp_check (desicion_temp);
        document.getElementById("desicion_temp").textContent = "変更後の設定温度は" + desicion_temp + "度です。"
    };

    document.getElementById("temp_down_button").onclick = function() {
        desicion_temp--;
        desicion_temp = desicion_temp_check (desicion_temp);
        document.getElementById("desicion_temp").textContent = "変更後の設定温度は" + desicion_temp + "度です。"
    };
/*
    setInterval( function() {
        var url = process.env.ROOM;
        post_data(url, xhr); 
    },5000);

    setInterval( function() {
        var url = process.env.AIRCON;
        post_data(url, xhr); 
    },7000);
  */  
}

function post_data(url, xhr) {
    xhr.open('GET', url);
    xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
    xhr.setRequestHeader("X-Requested-With",process.env.X);
    xhr.send();
 
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("aircon_state").textContent = xhr.responseText
         }
    }
} 

function desicion_temp_check (temp) {

  if (temp < 16) {
      return 16;
  } else if(temp > 30) {
      return 30;
  }
  return temp;

}

