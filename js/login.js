

$(function(){
   
$("#button").click(function(e){
    e.preventDefault();
  // 
    $("#button").html('<img src="AttendanceSystem/img/loader1.gif">')
    login()
})

    function login(){

    

    let getList= localStorage.getItem('list')
        registeredList=JSON.parse(getList)
        var username=$('.username').val()
        let loginCred={
                "name": $('.username').val(),
                "email": $('.password').val()
              }
        
                if(registeredList.username===loginCred.username)
                {
                    $.ajax({
                        "url":" http://localhost:3004/login",
                        "contentType":"Application/json",
                        "method":"post",
                        "data":JSON.stringify(loginCred),
                       
                        success:function(data){
                            $("#button").html('Login')
                              $('.welcome').html(' <p>welcome Mr <span>Mr '+username+' </span> </p>',1000)
                            alert("you are welcome")
            
                        },
                        error:function(e){
                            alert("Error :", JSON.stringify(e))
                        }
            
                    })
                }
                else{
                    alert("you have enter a wrong username or password")
                }
       
    }
})