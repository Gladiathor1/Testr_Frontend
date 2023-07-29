//const ur="http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/"
const API_URL = ur+"testr-api/engine";
const QUESTIONS_URL = API_URL+"/myquestions/";
let myid1;
let myid2;

function getAllQuestions(){

    $.ajax({
        url:QUESTIONS_URL+"?format=datatables",
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            var mydata=data.data;
                $('#example').DataTable( {
                    data: mydata,
                    // ajax: QUESTIONS_URL+"?format=datatables",
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'tag[].name' },
                        { data: 'paper.title' },
                        { data: 'difficulty' },
                        { data: 'verify' },
                        { 
                            data: null,
                            className: "dt-center editor-edit",
                            defaultContent: '<i class="fa fa-pencil"/>',
                            orderable: false
                        },
                        { 
                            data: null,
                            className: "dt-center editor-view",
                            defaultContent: '<i class="fa fa-eye"/>',
                            orderable: false
                        },
                        {
                            data: null,
                            className: "dt-center editor-delete",
                            defaultContent: '<i class="fa fa-trash"/>',
                            orderable: false
                        }
                        
                    ]
                    // "columnDefs": [
                    //     { "width": "20%", "targets": 0 }
                    //   ]
            } );
        },
        error: function(xhr, status, error) {
            if (xhr.status==401) {
                alert("please log in again");
                localStorage.clear();
                window.location.href = "login.html";
                
            }
            
            
          }

    });
        $('#example').on('click', 'td.editor-delete', function () {
            let myid = $(this).closest("tr").find('td:eq(0)').text();
            // alert(myid);
 
            if ( confirm( "Are you sure you want to delete the selected rows?" ) ){
                
                
                    $.ajax( QUESTIONS_URL+myid+"/", {
                        type : 'DELETE',
                        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
                        });





                        
                        var table = $('#example').DataTable();
                        table
                            .row($(this).parents('tr'))
                            .remove()
                        .draw();
                }
        } );
    
        $('#example').on('click', 'td.editor-edit', function () {
            myid1 = $(this).closest("tr").find('td:eq(0)').text();
            window.location.href='update.html?id='+myid1;
        } );
        $('#example').on('click', 'td.editor-view', function () {
            myid2 = $(this).closest("tr").find('td:eq(0)').text();
            window.location.href='view-question.html?id='+myid2;
        } );

}

// $.get( QUESTIONS_URL, function( data ) {
    //    // console.log( typeof data ); // object
    //    // console.log( data );
    // //    console.log(data);
    //     var mydata=data.results;
    //     $('#example').DataTable( {
    //         //data: mydata,
    //         ajax: QUESTIONS_URL+"?format=datatables",
    //         columns: [
    //             { data: 'id' },
    //             { data: 'name' },
    //             { data: 'tag' },
    //             { data: 'paper' },
    //             // { data: 'discipline' },
    //             // { data: 'subject' },
    //             { data: 'difficulty' },
    //             { 
    //                 data: null,
    //                 className: "dt-center editor-edit",
    //                 defaultContent: '<i class="fa fa-pencil"/>',
    //                 orderable: false
    //             },
    //             // {
    //             //     data: null,
    //             //     className: "dt-center editor-delete",
    //             //     defaultContent: '<i class="fa fa-trash"/>',
    //             //     orderable: false
    //             // }
    //         ]
    // } );


    // });