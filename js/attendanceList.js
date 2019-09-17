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
            "url": "http://localhost:3001/register",
            "type": "get",
            "contentType": "Application/json",
            success: function (data) {
                let listOfAttend=''
                $.each(data, function (i, v) {
                     listOfAttend += `
                    <tr>
                    <td>${i+1}</td>
                    <td>${v.firstName}</td>
                    <td>${v.lastName}</td>
                    <td>${v.phoneNumber}</td>
                    <td>${v.email}</td>
                    <td>Action</td>
                </tr> `;
                })

                


                $("#listOfmember").append(listOfAttend);
            },
            error: function (e) {

            }

        })
    }
})