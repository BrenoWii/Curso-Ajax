window.onload = function () {


    var btn_users = document.querySelector('#btn-users');
    var div_users = document.querySelector('#div-users');
    var div_create = document.querySelector('#div-create');
    var div_busca = document.querySelector('#div-busca');


    var form_cadastrar = document.querySelector('#form-cadastrar');
    var form_buscar = document.querySelector('#form-buscar');

    
    
    form_buscar.addEventListener('submit',function (event){
        event.preventDefault();
        var form =  new FormData(form_buscar);
        xmlHttpPost ('ajax/buscar.php',function(){
            beforSend (function (){
                div_busca.innerHTML = 'Aguarde estamos buscando';
                
            });
            success (function (){
                console.log(xhttp.responseText);
                
            });
            
        },form);
    });
    
    form_cadastrar.onsubmit = function () {
        event.preventDefault();
        
        
        var form = new FormData(form_cadastrar);
        xmlHttpPost('ajax/create.php',function (){
            
            beforeSend (function(){
                div_create.innerHTML =`<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> `;

            });
            success (function(){
                var response= xhttp.responseText;
                if (response=='sucesso'){
                    div_create.innerHTML =`Cadastrado com sucesso`;

                }else{
                    div_create.innerHTML =`Falha ao cadastrar`;
                    
                }
            });
        },form);
        
        
    };




    btn_users.onclick = function () {
       debugger;
        
        xmlHttpGet('ajax/user.php',function(){
            
            
            beforeSend(function(){
                div_users.innerHTML =`<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> `;
            });
            
            
            success(function(){
                
                
                console.log(xhttp.responseText);
                
                var users = JSON.parse(xhttp.responseText);
                
                var table = `<table class='table table-striped'>`;

                table += `<thead><tr><td>ID</td><td>Nome</td><td>Email</td></td></thead>`;
                table += `<tbody>`;
                users.forEach(function (user) {
                    table += `<tr>`;
                    table += `<td>${user.id}</td>`;
                    table += `<td>${user.nome}</td>`;
                    table += `<td>${user.email}</td>`;

                    table += `</tr>`;
                });
                table += `</tbody>`;
                table += `</table>`;

                div_users.innerHTML = table;
            });
            error(function(){
                div_users.innerHTML='Ocorreu um erro';
            });
        },'?id=1');
    };
};