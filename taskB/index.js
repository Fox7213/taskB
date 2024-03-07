function sendRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000", true);
    
    xhr.onreadystatechange = function() {
       if (xhr.readyState === 4) {
          if (xhr.status === 200) {
             displayStatus("Всё хорошо", "good");
          } else {
             displayStatus("Ошибка сервера", "error");
          }
       }
    }
    
    xhr.send();
 }
 
 function displayStatus(message, className) {
    const statusElement = document.getElementById("status");
    statusElement.innerHTML = message;
    statusElement.className = className;
 }