//const ur="http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/"
var API_URL = ur+"testr-api/engine";
var QUESTIONS_URL = API_URL+"/questions/";
let myid1;


//<option value="2" selected>My Questions</option>
try {
    if (localStorage.getItem("isReviewer")=="true") {
        var verifyOpt=document.createElement("option");
        verifyOpt.setAttribute("value",3);
        verifyOpt.text="Verify";

        document.getElementById("questionSelect").appendChild(verifyOpt);
}
} catch (error) {
    console.log(error);
}





function getAllQuestions(){

    $.ajax({
        url:API_URL+"/questions/?format=datatables",
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            var mydata=data.data;
                $('#example').DataTable( {
                    data: mydata,
                    //ajax: QUESTIONS_URL+"?format=datatables",
                    
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'tag[].name' },
                        { data: 'paper.title' },
                        { data: 'difficulty' },
                        { 
                            data: null,
                            className: "dt-center editor-view",
                            defaultContent: '<i class="fa fa-eye"/>',
                            orderable: false
                        },
                        // { 
                        //     data: null,
                        //     className: "dt-center editor-edit",
                        //     defaultContent: '<i class="fa fa-pencil"/>',
                        //     orderable: false
                        // },
                        
                    ]
                    // "columnDefs": [
                    //     { "width": "20%", "targets": 0 }
                    //   ]
            } );
        }

    });


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

        $('#example').on('click', 'td.editor-delete', function () {
            let myid = $(this).closest("tr").find('td:eq(0)').text();
            // alert(myid);
 
            if ( confirm( "Are you sure you want to delete the selected rows?" ) ){
                
                
                    // $.ajax( QUESTIONS_URL+myid+"/", {
                    //     type : 'DELETE'
                    //     });
                        
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


function getMyQuestions(){


    //MY QUESTIONS OPTIONS///
    $.ajax({
        url:API_URL+"/myquestions/?format=datatables",
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            var mydata=data.data;
                $('#example1').DataTable( {
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
        $('#example1').on('click', 'td.editor-delete', function () {
            let myid = $(this).closest("tr").find('td:eq(0)').text();
            // alert(myid);
 
            if ( confirm( "Are you sure you want to delete the selected rows?" ) ){
                
                
                    $.ajax( API_URL+"/myquestions/"+myid+"/", {
                        type : 'DELETE',
                        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
                        });





                        
                        var table = $('#example1').DataTable();
                        table
                            .row($(this).parents('tr'))
                            .remove()
                        .draw();
                }
        } );
    
        $('#example1').on('click', 'td.editor-edit', function () {
            myid1 = $(this).closest("tr").find('td:eq(0)').text();
            window.location.href='update.html?id='+myid1;
        } );
        $('#example1').on('click', 'td.editor-view', function () {
            myid2 = $(this).closest("tr").find('td:eq(0)').text();
            window.location.href='view-question.html?id='+myid2;
        } );

}
//MY QUESTIONS OPTIONS end///

//VERIFY QUESTIONS QUESTIONS OPTIONS///
function getVerifyQuestions(){

    $.ajax({
        url:API_URL+"/review/?format=datatables",
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            var mydata=data.data;
                $('#example2').DataTable( {
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
                            defaultContent: '<a href="#">review</a>',
                            orderable: false
                        },
                        
                    ]
                    
            } );
        }

    });


        $('#example2').on('click', 'td.editor-delete', function () {
            let myid = $(this).closest("tr").find('td:eq(0)').text();
            // alert(myid);
 
            if ( confirm( "Are you sure you want to delete the selected rows?" ) ){
                
                
                    $.ajax( API_URL+"/review/"+myid+"/", {
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
    
        $('#example2').on('click', 'td.editor-edit', function () {
            myid1 = $(this).closest("tr").find('td:eq(0)').text();
            window.location.href='verify_question.html?id='+myid1;
        } );
        $('#example2').on('click', 'td.editor-view', function () {
            myid2 = $(this).closest("tr").find('td:eq(0)').text();
            window.location.href='view-question.html?id='+myid2;
        } );

}










function questionDisplay_first()
{
    document.getElementById("allQuestions").style.display="none";
    document.getElementById("verify").style.display="none";

    //document.getElementById("myQuestions").style.display="none";
    
}
function questionDisplay()
{
    var question_value=document.getElementById("questionSelect").value;

    if(question_value==1)
    {
        document.getElementById("myQuestions").style.display="none";
        document.getElementById("allQuestions").style.display="block";
        document.getElementById("verify").style.display="none";
    }
    else if(question_value==2)
    {
        document.getElementById("myQuestions").style.display="block";
        document.getElementById("allQuestions").style.display="none";
        document.getElementById("verify").style.display="none";
    }
    else if(question_value==3)
    {
        document.getElementById("myQuestions").style.display="none";
        document.getElementById("allQuestions").style.display="none";
        document.getElementById("verify").style.display="block";
    }
}