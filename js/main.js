$(function(){


    getRequest()
function getRequest(){
    $.ajax({
        "url":"http://localhost:3000/user",
        "type":"get",
        beforeSend:function(){

        },

        success:function(data){
    
    
    
        },error: function(e){

        }
    })

}
function getRequestId(){
    $.ajax({
        "url":"http://localhost:3000/user/Id",
        "type":"get",
        beforeSend:function(){

        },

        success:function(data){
    
    
    
        },error: function(e){

        }
    })

}


})