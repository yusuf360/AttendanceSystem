$(function(){


    $('#submit').click(function(){

        postRequest()
    })




    function postRequest(){
        let  firstName=$('.firstName').val();
        let  lastName=$(' .lastName').val();
        let  userName=$(' .userName').val();
        let  email=$(' .email').val()
        let  address=$(' .address').val();
        let  password=$(' .password').val();
        let  confirmPassword=$(' .confirmPassword').val();
        let regtime= JSON.stringify( Date.now())
        
        

        let data={
            "firstName":firstName,
            "lastName":lastName,
            "userName":userName,
            "email":email,
            "address" :address,
            "password":password,
            "confirmPassword":confirmPassword,
            "regtime":regtime


            
        }
        $.ajax({
            "url":"http://localhost:3004/register",
            "method":"post",
            "contentType":"Application/json",
            "data":JSON.stringify(data),
            
            // beforeSend:function(){

    
            // },
    
            success:function(data){
                
        alert("successful")
        
            },
            error: function(e){
                alert(JSON.stringify(e))
    
            }
        })
    }


})