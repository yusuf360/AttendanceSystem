$(function(){


    getRequest()
function getRequest(){
    $.ajax({
<<<<<<< HEAD
        "url":"http://localhost:3000/user",
=======
        "url":"",
>>>>>>> 86235b2d4dfc2dc48bc75489ffd8bcd8fe071ff0
        "type":"get",
        beforeSend:function(){

        },

        success:function(data){
    
    
    
        },error: function(e){

        }
    })

}
<<<<<<< HEAD
function getRequestId(){
    $.ajax({
        "url":"http://localhost:3000/user/Id",
        "type":"get",
=======

function postRequest(){
    let data={
        
    }
    $.ajax({
        "url":"",
        "type":"post",
        
>>>>>>> 86235b2d4dfc2dc48bc75489ffd8bcd8fe071ff0
        beforeSend:function(){

        },

        success:function(data){
    
    
    
        },error: function(e){

        }
    })
<<<<<<< HEAD

}

=======
}
//getting request


 //$("")
>>>>>>> 86235b2d4dfc2dc48bc75489ffd8bcd8fe071ff0

})