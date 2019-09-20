$(function () {

    // let body=$("body")
    // let devContainer =$('<div/>')
    // body.append(devContainer)
    // devContainer.css({
    //     "background":"red"
    // })
    $('.search_btn').click(function(){
       let search= $('.search').val()
      
        GetAttendanceList(search)
        $(".main_table").hide(-100)
        $(".filter_table").show(100)
        

    })
    function GetAttendanceList(search) {

        $.ajax({
            "url": `http://localhost:3000/register/?userName=${search}`,
            "type": "get",
            "contentType": "Application/json",
            success: function (data) {
                let list = localStorage.setItem('list', JSON.stringify(data))
                let listOfAttend = ''
                $.each(data, function (i, v) {
                    listOfAttend += `
                    <tr>
                    <td>${i + 1}</td>
                    <td>${v.firstName}</td>
                    <td>${v.lastName}</td>
                    <td>${v.phoneNumber}</td>
                    <td>${v.email}</td>
                    <td> <button value='${v.id}' class="btn btn-danger delete ">delet</button><button value='${v.id}' class="btn btn-success update">update</button> </td>
                </tr> `;
                })




                $("#member").html(listOfAttend);
            },
            error: function (e) {

            }

        })
    }

    
    listOfAttendance()

    $('[data-toggle="tooltip"]').tooltip();   

    function listOfAttendance() {

        $.ajax({
            "url": "http://localhost:3000/register",
            "type": "get",
            "contentType": "Application/json",
            success: function (data) {
                let list = localStorage.setItem('list', JSON.stringify(data))
                let listOfAttend = ''
                $.each(data, function (i, v) {
                    listOfAttend += `
                    <tr>
                    <td>${i + 1}</td>
                    <td>${v.firstName}</td>
                    <td>${v.lastName}</td>
                    <td>${v.phoneNumber}</td>
                    <td>${v.email}</td>
                    <td> <button value='${v.id}' class="btn btn-danger delete ">delet</button><button value='${v.id}' class="btn btn-success update">update</button> </td>
                </tr> `;
                })




                $("#listOfmember").html(listOfAttend);
            },
            error: function (e) {

            }

        })
    }

    $("#button").click(function (e) {
        e.preventDefault();
        // 
        $(".loader").show()
        login()
    })

    function login() {



        let getList = localStorage.getItem('list')
        registeredList = JSON.parse(getList)
        let loginCred = {
            "name": $('.username').val(),
            "email": $('.password').val()
        }

        if (registeredList.username === loginCred.username) {
            $.ajax({
                "url": " http://localhost:3000/login",
                "contentType": "Application/json",
                "method": "post",
                "data": JSON.stringify(loginCred),

                success: function (data) {
                    $(".loader").hide();

                    alert("you are welcome");
                    listOfAttendance();

                },
                error: function (e) {
                    alert("", JSON.stringify(e))
                }

            })
        }
        else {
            alert("you have enter a wrong username or password")
        }

    }


    // update function
    $("body").on('click', '.update', function (e) {

        e.preventDefault()

   


        let userData = localStorage.getItem('list');
        let userDataObj = JSON.parse(userData)

        $.each(userDataObj, function (i, v) {



            
         $('.firstName').val(v.firstName);
         $(' .lastName').val(v.lastName);
        $(' .userName').val(v.userName);
         $(' .email').val(v.email)
        $(' .address').val(v.address);
         $(' .password').val(v.password);
         $(' .confirmPassword').val(v.password);
           
        })

        $(".update_display").toggle()


    })

    $("body").on('click', '#update', function (e) {

        e.preventDefault()
        listOfAttendance()
        let id = $(this).val();
        listOfAttendance();

        let firstName = $('.firstName').val();
        let lastName = $(' .lastName').val();
        let userName = $(' .userName').val();
        let email = $(' .email').val()
        let address = $(' .address').val();
        let password = $(' .password').val();
        let confirmPassword = $(' .confirmPassword').val();
        let regtime = JSON.stringify(Date.UTC())

        let data = {
            "firstName": firstName,
            "lastName": lastName,
            "userName": userName,
            "email": email,
            "address": address,
            "password": password,
            "confirmPassword": confirmPassword,
            "regtime": regtime



        }

        update(id, data)
    })

    function update(id, data) {
       

        $.ajax({
            "url": " http://localhost:3000/register/" + id,
            "contentType": "Application/json",
            "method": "PUT",
            "data": JSON.stringify(data),

            success: function (data) {

                alert("updated")

            },
            error: function (e) {
                alert("", JSON.stringify(e))
            }

        })

    }
    

    // delete function
    $("body").on("click",'.delete',function(){
    let id=   $(this).val()
        update(id)
    })

    function update(id) {
       
        $.ajax({
            "url": " http://localhost:3000/register/" + id,
            "contentType": "Application/json",
            "method": "delete",
            success: function (data) {
                listOfAttendance();
                alert("deleted")

            },
            error: function (e) {
                alert("", JSON.stringify(e))
            }

        })

    }

})


