
//"http://127.0.0.1:8000/";
//http://3.139.191.47/

//const ur="http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/";

var API_URL = ur+"testr-api/engine/papers/";
var PaperCodeURL=API_URL+"?code="
var Discipline_URL = ur+"testr-api/engine/disciplines/";
var Subject_URL = ur+"testr-api/engine/subjects/";
var Tag_URL = ur+"testr-api/engine/tags/";
var allPapers;
var allDiscipline;
var allSubject;
var allTag;
var Discipline_id;
var Paper_id;
var Subject_id;


$(document).ready(function(){


    // if(typeof(localStorage.getItem("username"))!=null){
    //     //console.log(localStorage.username);
    //     document.getElementsByClassName("widget-heading")[0].innerHTML=localStorage.username;
    // };




    function getAllTag()
    {
        // $.get( API_URL, function( data ) 
        // {
        //     allPapers=data;

        //     // console.log(data)
        // });
        // // setTimeout(function(){ console.log(papers); }, 3000);
        // $.get(Discipline_URL, function( data ) 
        // {
        //     allDiscipline=data;

        //     // console.log(data)
        // });
        // $.get(Subject_URL, function( data ) 
        // {
        //     allSubject=data;

        //     // console.log(data)
        // });
        // console.log(localStorage.getItem("access"));

        $.ajax({
            url:Tag_URL,
            type: 'GET',
            headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
            success: function(data) {
                for(i=0;i<data.count;i++)
                {
                    $("#tag1").append("<option value="+data.results[i].id+">"+data.results[i].name+"</option>")
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


        // $.get(Tag_URL, function( data ) 
        // {
        //     for(i=0;i<data.count;i++)
        //     {
        //         $("#tag1").append("<option value="+data.results[i].id+">"+data.results[i].name+"</option>")
        //     }
            

        //     // console.log(data)
        // });



        
    
    }//function getalltags


    // function populateCode()
    // {
        
        // console.log(papers)
        // for (i=0; i<papers.count;i++)
        // {
        //     $("#papercode1").append("<option value="+papers.results[i].code+">"+papers.results[i].code+"</option>")
        // }
        
    // }

    


    getAllTag();
    // setTimeout(function()
    // {
        
    //     for (i=0; i<allPapers.count;i++)
    //     {
    //         $("#papercode1").append("<option value="+i+">"+allPapers.results[i].code+"</option>")
    //     }
    // }, 1000);
    //dropdown for all papers population

});
function paper_code_search()
{
    var paperSearchCode=document.getElementById("papercode1").value;
    var searchcode=PaperCodeURL+paperSearchCode;
    $.ajax(
        {
           type:'GET',
           url:searchcode,
           headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
           success: function(data){
            if (data.count==1)
            {
                console.log(data);
                Paper_id=data.results[0].id;
                Discipline_id=data.results[0].discipline.id;
                Subject_id=data.results[0].subject.id;


                // getDiscipline(Discipline_id)
                // getSubject(Subject_id)

                $("#year1").val(data.results[0].year);
                $("#session1").val(data.results[0].session);
                $("#papertitle1").val(data.results[0].title);
                $("#discipline1").val(data.results[0].discipline.title);
                $("#subject1").val(data.results[0].subject.title);

            }
            else
            {
                alert("Code does not exist.");
            }
           },
           error: function(data)
           {
               alert("Could not get the paper details.")
           }
        }
     );

}//function

function getDiscipline(id)
{
    var disciplineCode=Discipline_URL+id;
    $.ajax(
        {
           type:'GET',
           url:disciplineCode,
           headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
           success: function(data){
            
                $("#discipline1").val(data.title);
           },
           error: function(data)
           {
            //    alert("dicipline fail");
               
           }
        }
     );
}

function getSubject(id)
{
    var subjectCode=Subject_URL+id;
    $.ajax(
        {
           type:'GET',
           url:subjectCode,
           headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
           success: function(data){
            
                $("#subject1").val(data.title);
           },
           error: function(data)
           {
            //    alert("subject fail");
           }
        }
     );
}




// function updateField()
//     {
//         var index=document.getElementById("papercode1").value;
       
//         // console.log("i ="+i)
//         // console.log(allPapers.results[i]);
//         //document.getElementById("discipline1").val(allPapers.results[i].discipline)
//         Discipline_id=allPapers.results[index].discipline;
//         Subject_id=allPapers.results[index].subject;
//         Paper_id=allPapers.results[index].id;

//         for(i=0;i<allDiscipline.count;i++)
//         {
//             if(allDiscipline.results[i].id==parseInt(Discipline_id))
//             {
//                 $("#discipline1").val(allDiscipline.results[i].title);
//                 break;
//             }
//         }

//         for(i=0;i<allSubject.count;i++)
//         {
//             if(allSubject.results[i].id==parseInt(Subject_id))
//             {
//                 $("#subject1").val(allSubject.results[i].title);
//                 break;
//             }
//         }




//         //$("#subject1").val(allPapers.results[i].subject);
//         $("#year1").val(allPapers.results[index].year);
//         $("#session1").val(allPapers.results[index].session);
//         $("#papertitle1").val(allPapers.results[index].title);
       

//     }
    




var questionImageArr=[];
var answerImageArr=[];


function questionUploadImage()
{
    
    for(let index=0;index<document.getElementById("qFile").files.length;index++)
    {
        let arr = new FormData();
        arr.append("image", document.getElementById("qFile").files[index]);
        arr.append("subject", Subject_id);
        //arr.append("upload_file", true);
        // var arr=
        // {
        //     "image":""
        // }
        //console.log(arr)
            $.ajax({
            url: ur+"testr-api/engine/images/",
            type: "POST",
            data: arr,
            async: false,
            processData: false,
            contentType: false,
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("access"),
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                //"content-type":'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                // "content-length": arrayBuffer.byteLength
            },
            success: function(data)
            {
                // console.log("success "+data);
                // console.dir(data);
               //console.log(data);
               questionImageArr.push(data.id)
            },
            error: function(data)
            {
                // console.log("error ");
                // console.dir(data);
            }
        });
    }
    console.log("question imagessssssssss "+questionImageArr);    
}




function answerUploadImage()
{
    
    for(let index=0;index<document.getElementById("aFile").files.length;index++)
    {
        let arr = new FormData();
        arr.append("image", document.getElementById("aFile").files[index]);
        arr.append("subject", Subject_id);
        //arr.append("upload_file", true);
        // var arr=
        // {
        //     "image":""
        // }
        //console.log(arr)
            $.ajax({
            url: ur+"testr-api/engine/images/",
            type: "POST",
            data: arr,
            async: false,
            processData: false,
            contentType: false,
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("access"),
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                //"content-type":'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                // "content-length": arrayBuffer.byteLength
            },
            success: function(data)
            {
               answerImageArr.push(data.id)
            },
            error: function(data)
            {
                alert("Could not upload Images")
            }
        });
    }
    console.log("answer imagessssssssss "+answerImageArr);    
}




function myFunc_display()
{   

    questionImageArr=[];
    answerImageArr=[];
    questionUploadImage();
    answerUploadImage();

    //var ur = "http://apps.testr.pk/";
    var $paperTitle = $('#papertitle1').val();

    var $text = CKEDITOR.instances["editor1"].getData();
    var $name = $('#name1').val();
    // var $tag = $('#tag1').find(':selected').text();
    var $discipline = $('#discipline1').val();
    var $subject = $('#subject1').val();
    var $difficulty = $('#difficulty1').val();
    var $session = $('#session1').val();
    var $paperCode = $('#papercode1').val();
    var $paperYear = $('#year1').val();
    var $answer = CKEDITOR.instances["editor12"].getData();
    var $qtype1 = $('#type1').val();

    // var selected="";
    // var selected_arr=document.getElementById("tag1").children;
    // for(i=0 ;i<selected_arr.length;i++)
    // {
    //     selected+=selected_arr[i].value;
    //     selected+=",";
    // }
    // selected = selected.slice(0, selected.length - 1);
   // console.log(selected);





// tags select array

var selected=$("#tag1").val();
for(j=0;j<selected.length;j++)
{
    selected[j]=parseInt(selected[j]);
}
// tags select array end

    var any_field_empty=false;
    var display_str="Please Enter The Following Empty Fields :\n"
    
    if($paperTitle==''){display_str+="    Paper Title Field \n"; any_field_empty=true;}
    if($text==''){display_str+="    Question Field \n"; any_field_empty=true;}
    if($name==''){display_str+="    Question Name Field \n"; any_field_empty=true;}
    if($discipline==''){display_str+="    Discipline Field \n"; any_field_empty=true;}
    if($subject==''){display_str+="    Subject Field \n"; any_field_empty=true;}
    if($paperCode==''){display_str+="    Paper Code Field \n"; any_field_empty=true;}
    if($answer==''){display_str+="    Answer Field \n"; any_field_empty=true;}
    if(selected==''){display_str+="    Tags Field \n"; any_field_empty=true;}
    
   

    

    if(any_field_empty==true)
    {
        alert(display_str)
    }
    else{
        var arr = {
            "paper": Paper_id,
            "name": $name,
            "description": $text,
            "answer": $answer,
            "difficulty": $difficulty,
            "tag": selected,
            "type":$qtype1,
            "discipline":Discipline_id,
            "subject":Subject_id,
            "aimage":answerImageArr,
            "qimage":questionImageArr,
            "author":parseInt(localStorage.getItem("userid"))
            
            };
        $.ajax({
            url: ur + 'testr-api/engine/questions/',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json;',
            dataType: 'json',
            headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
            success: function(msg) {
                alert("Question Posted")
                CKEDITOR.instances["editor1"].setData("");
                CKEDITOR.instances["editor12"].setData("");
                

            },
            error: function(msg)
            {
                alert("Couldn't post the question.\nTry again.");

            }
        });
    }
        // $.post(ur + 'testr-api/questions/',
        // {
        //     //discipline: $discipline,
        //     //subject: $subject,
        //     //qtype: $qtype1
        //     //paperyear: parseInt($paperYear),
        //     // session: $session,
        //     // paper_code:$paperCode,




        //     // name: $name,
        //     // description: $text,
        //     // tag:  [1],
            
        //     // paper: Paper_id,
        //     // answer: $answer,
            
        //     // difficulty: $difficulty,




        //     // "paper": 1,
        //     // "name": "testt",
        //     // "description": "testttttttttt",
        //     // "answer": "testttttttttt",
        //     // "difficulty": "Easy",
        //     // "created": "2021-11-15T05:02:19.499593Z",
        //     // "tag[]": 1
            
        // },
        // function (data, status) {
        //    // console.log("Data: " + data + "\nStatus: " + status);
        //     if(status=="success"){
        //         alert("Question posted")
        //         CKEDITOR.instances["editor12"].setData("");
        //         CKEDITOR.instances["editor1"].setData("");
        //         $('#name1').val("");
        //     }
        //     else{
        //         alert("Check Fields Question NOT Updated");
        //     }
        // });
    //}



        // var authors = [];
        // authors[0] = 1;
        // authors[1] = 2;

        
    
}