//const ur="http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/"
const API_URL = ur+"testr-api/engine";
const QUESTIONS_URL2 = API_URL+"/questions/?ys=2010&ye=2014&discipline=A Level&session=Winter&difficulty=Easy";
let myid1;
var Tag_URL = ur+"testr-api/engine/tags/";


const d = new Date();

document.getElementById("year-start").value=d.getFullYear()-1;
document.getElementById("year-end").value=d.getFullYear();

//const returnLink="https://www.google.com/?code=4%2F0AX4XfWh3h3L3-EGRfBAK8bi3Tbd9U6DKvkMC6Qir6d1_glZ4JCl5_KJhH1h04CDT7EpBuA&scope=email+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=1&prompt=consent";
// console.log(returnLink);
// var code=returnLink.split("code=")[1].split("&")[0];
// console.log(code);


//console.log(typeof(window.location.href));

function default_filters()
{
    document.getElementById("year-start").value=d.getFullYear()-1;
    document.getElementById("year-end").value=d.getFullYear();

    document.getElementById("discipline-option-1").checked=true;

    var subjects= document.getElementsByClassName("subject-option");
    subjects[0].checked=true;
    for(let i=1;i<subjects.length;i++)
    {
        subjects[i].checked=false;
    }

    var sessions= document.getElementsByClassName("sessions-option");
    sessions[0].checked=true;
    for(let i=1;i<sessions.length;i++)
    {
        sessions[i].checked=false;
    }

    var type= document.getElementsByClassName("type-option");
    type[0].checked=true;
    for(let i=1;i<type.length;i++)
    {
        type[i].checked=false;
    }

    var diffi= document.getElementsByClassName("difficulty-options");
    diffi[0].checked=true;
    for(let i=1;i<diffi.length;i++)
    {
        diffi[i].checked=false;
    }


}





function filteredData()
{
    var str_search='/questions/';
    var filter_year_start=document.getElementById("year-start").value;
    var filter_year_end =document.getElementById("year-end").value;
    var filter_discipline =$('input[name=discipline-options]:checked').val();
    var filter_subject=$('input[name=subject-option]:checked').val();
    var filter_session=$('input[name=session-option]:checked').val();
    var filter_type="";
    var filter_diff="";
    selected_str="";
    var selected=$("#tag-filter").val();
    for(j=0;j<selected.length;j++)
    {
        selected_str+=selected[j]+",";
    }
    selected_str=selected_str.slice(0, -1);

    if (selected.length>0)
    {
        // console.log(selected_str)
    }
    else
    {
        // console.log("empty")
    }

    


    var type= document.getElementsByClassName("type-option");
    for(let i=0;i<type.length;i++)
    {
        if(type[i].checked==true  && type[i].value!='all')
        {
            filter_type+=type[i].value+",";
        } 
    }
    filter_type=filter_type.slice(0, -1);
    // console.log(filter_type);


    var diffi= document.getElementsByClassName("difficulty-options");
    for(let i=0;i<diffi.length;i++)
    {
        if(diffi[i].checked==true)
        {
            filter_diff+=diffi[i].value+",";
        } 
    }
    filter_diff=filter_diff.slice(0, -1);






    str_search+="?ys="+filter_year_start+"&";
    str_search+="ye="+filter_year_end+"&";
    str_search+="discipline="+filter_discipline+"&";
    str_search+="session="+filter_session+"&";

    if(filter_subject!='all')
    {
        str_search+="subject="+filter_subject+"&";
    }

    if(filter_type!='all' && filter_type!='')
    {
        str_search+="type="+filter_type+"&";
    }
    str_search+="difficulty="+filter_diff+"&";


    if (selected.length>0)
    {
        str_search+="tag="+selected_str+"&";
    }
    str_search=str_search.slice(0,-1)

    // console.log(str_search);

   

    var search_url=API_URL+str_search;
    // console.log(search_url);


    $.ajax({
        url:search_url ,
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            var mydata=data.results;
                $('#example').DataTable( {
                    data: mydata,
                    "destroy":true,
                    //ajax: QUESTIONS_URL+"?format=datatables",
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'tag[].name' },
                        { data: 'paper.title' },
                        { data: 'difficulty' },
                        // 
                        
                    ]
                    // "columnDefs": [
                    //     { "width": "20%", "targets": 0 }
                    //   ]
            } );



        //     if (data.count==0)
        //  {
            
        //     // alert("Your search yielded no results.")
        //  }
        //  else
        //  {
        //      // try {
        //      //     $('#example').DataTable().fnDestroy();    
        //      // } catch (error) {
        //      //     console.log("nai tha datatable")
        //      // }
             
        //      var mydata=data.results;
        //      $('#example').DataTable( {
        //      data: mydata,
        //      "destroy":true,
        //      //ajax: QUESTIONS_URL2+"&format=datatables",
        //      columns: [
        //          { data: 'id' },
        //          { data: 'name' },
        //          { data: 'tag[].name' },
        //          { data: 'paper' },
        //          // { data: 'discipline' },
        //          // { data: 'subject' },
        //          { data: 'difficulty' },
        //         //  { 
        //         //      data: null,
        //         //      className: "dt-center editor-edit",
        //         //      defaultContent: '<i class="fa fa-eye"/>',
        //         //      orderable: false
        //         //  },
        //          // {
        //          //     data: null,
        //          //     className: "dt-center editor-delete",
        //          //     defaultContent: '<i class="fa fa-trash"/>',
        //          //     orderable: false
        //          // }
        //          ]
        //      } );
     
        //  }




            // var mydata=data.results;
            //     $('#example').DataTable( {
            //         data: mydata,
            //         // ajax: QUESTIONS_URL+"?format=datatables",
            //         columns: [
            //             { data: 'id' },
            //             { data: 'title' },
            //             // 
                        
            //         ]
            //         // "columnDefs": [
            //         //     { "width": "20%", "targets": 0 }
            //         //   ]
            // } );
        }

    });

    // $.get( search_url, function( data ) {
    //     // console.log( typeof data ); // object
    //      //console.log( data );
         
    //      if (data.count==0)
    //      {
            
    //         alert("Your search yielded no results.")
    //      }
    //      else
    //      {
    //          // try {
    //          //     $('#example').DataTable().fnDestroy();    
    //          // } catch (error) {
    //          //     console.log("nai tha datatable")
    //          // }
             
    //          var mydata=data.results;
    //          $('#example').DataTable( {
    //          //data: mydata,
    //          "destroy":true,
    //          ajax: QUESTIONS_URL2+"&format=datatables",
    //          columns: [
    //              { data: 'id' },
    //              { data: 'name' },
    //              { data: 'tag[].name' },
    //              { data: 'paper' },
    //              // { data: 'discipline' },
    //              // { data: 'subject' },
    //              { data: 'difficulty' },
    //              { 
    //                  data: null,
    //                  className: "dt-center editor-edit",
    //                  defaultContent: '<i class="fa fa-eye"/>',
    //                  orderable: false
    //              },
    //              // {
    //              //     data: null,
    //              //     className: "dt-center editor-delete",
    //              //     defaultContent: '<i class="fa fa-trash"/>',
    //              //     orderable: false
    //              // }
    //              ]
    //          } );
     
    //      }
         
 
 
    //  });
     
 
         $('#example').on('click', 'td.editor-delete', function () {
             let myid = $(this).closest("tr").find('td:eq(0)').text();
             // alert(myid);
  
             if ( confirm( "Are you sure you want to delete the selected rows?" ) ){
                 
                 
                     // $.ajax( QUESTIONS_URL2+myid+"/", {
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
             window.location.href='view-question.html?id='+myid1;
         } );



}



















function getAllQuestions(){
    $.ajax({
        url:QUESTIONS_URL2 ,
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {


            var mydata=data.results;
                $('#example').DataTable( {
                    data: mydata,
                    "destroy":true,
                    //ajax: QUESTIONS_URL+"?format=datatables",
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'tag[].name' },
                        { data: 'paper' },
                        { data: 'difficulty' },
                        // 
                        
                    ]
                    // "columnDefs": [
                    //     { "width": "20%", "targets": 0 }
                    //   ]
            } );



        //     if (data.count==0)
        //  {
            
        //      alert("Your search yielded no results.")
        //  }
        //  else
        //  {
             // try {
             //     $('#example').DataTable().fnDestroy();    
             // } catch (error) {
             //     console.log("nai tha datatable")
             // }
             
            //  var mydata=data.results;
            //  $('#example').DataTable( {
            //  data: mydata,
            //  //"destroy":true,
            //  //ajax: QUESTIONS_URL2+"&format=datatables",
            //  columns: [
            //      { data: 'id' },
            //      { data: 'name' },
            //      { data: 'tag[].name' },
            //      { data: 'paper' },
            //      // { data: 'discipline' },
            //      // { data: 'subject' },
            //      { data: 'difficulty' },
            //     //  { 
            //     //      data: null,
            //     //      className: "dt-center editor-edit",
            //     //      defaultContent: '<i class="fa fa-eye"/>',
            //     //      orderable: false
            //     //  },
            //      // {
            //      //     data: null,
            //      //     className: "dt-center editor-delete",
            //      //     defaultContent: '<i class="fa fa-trash"/>',
            //      //     orderable: false
            //      // }
            //      ]
            //  } );
     
         //} else




            // var mydata=data.results;
            //     $('#example').DataTable( {
            //         data: mydata,
            //         // ajax: QUESTIONS_URL+"?format=datatables",
            //         columns: [
            //             { data: 'id' },
            //             { data: 'title' },
            //             // 
                        
            //         ]
            //         // "columnDefs": [
            //         //     { "width": "20%", "targets": 0 }
            //         //   ]
            // } );
        }

    });
    

        $('#example').on('click', 'td.editor-delete', function () {
            let myid = $(this).closest("tr").find('td:eq(0)').text();
            // alert(myid);
 
            if ( confirm( "Are you sure you want to delete the selected rows?" ) ){
                
                
                    // $.ajax( QUESTIONS_URL2+myid+"/", {
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
            window.location.href='view-question2.html?id='+myid1;
        } );

}
getAllTag();
function getAllTag()
    {
        $.ajax({
            url:Tag_URL,
            type: 'GET',
            headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
            success: function(data) {
                for(i=0;i<data.count;i++)
                {
                    $("#tag-filter").append("<option value="+data.results[i].id+">"+data.results[i].name+"</option>")
                }
            },
            error: function(xhr, status, error) {
                if (xhr.status==401) {
                    alert("please log in again");
                    localStorage.clear();
                    window.location.href = "login.html";
                    
                }
              }
        });

    }//function getalltags