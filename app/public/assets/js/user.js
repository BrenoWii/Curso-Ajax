window.onload = function(){
    
    
    var btn_users = document.querySelector('#btn-users');
    var div_users = document.querySelector('#div-users');

    var xhttp = new XMLHttpRequest();
  
  
  btn_users.onclick = function(){
      
      if(xhttp.readyState == 4 && xhttp.status==200){
          
          var users = JSON.parse(xhttp.responseText);
          console.log(users);
      }
      
      xhttp.open('GET','user.php',true);
    
      xhttp.send();  
      
  };
    
};