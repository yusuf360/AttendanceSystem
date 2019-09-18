$(function () {

    // let body=$("body")
    // let devContainer =$('<div/>')
    // body.append(devContainer)
    // devContainer.css({
    //     "background":"red"
    // })
    
    listOfAttendance() 
  
  

    function listOfAttendance() {

        $.ajax({
            "url": "http://localhost:3004/register",
            "type": "get",
            "contentType": "Application/json",
            success: function (data) {
                let list= localStorage.setItem('list',JSON.stringify(data))
                let listOfAttend=''
                $.each(data, function (i, v) {
                     listOfAttend += `
                    <tr>
                    <td>${i+1}</td>
                    <td>${v.firstName}</td>
                    <td>${v.lastName}</td>
                    <td>${v.phoneNumber}</td>
                    <td>${v.email}</td>
                    <td> <button  class="btn btn-danger">delet</button><button class="btn btn-success">update</button> </td>
                </tr> `;
                })

                


                $("#listOfmember").html(listOfAttend);
            },
            error: function (e) {

            }

        })
    }

    $("#button").click(function(e){
        e.preventDefault();
      // 
        $("#button").html('<img src="img/loader1.gif">')
        login()
    })
    
        function login(){
    
        
    
        let getList= localStorage.getItem('list')
            registeredList=JSON.parse(getList)
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
                                alert("you are welcome")
                
                            },
                            error:function(e){
                                alert("", JSON.stringify(e))
                            }
                
                        })
                    }
                    else{
                        alert("you have enter a wrong username or password")
                    }
           
        }
})