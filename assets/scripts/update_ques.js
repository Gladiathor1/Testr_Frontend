var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
var tech = getUrlParameter('id');
var Paper_id;
//const ur="http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/"
const API_URL = ur+"testr-api/engine";

var QUESTIONS_URL = API_URL+"/myquestions/"+tech+"/";
var abc;
var pre_defined_tags=[];
var initial_code;
var qImage=[];
var aImage=[];
var Subject_id;


function updateQuestion(){
    
    //$(document).ready(function(){
        $.ajax(
            {
               type:'GET',
               url:QUESTIONS_URL,
               headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
               success: function(data){
                    $('#name1').val(data.name);
                    abc=data.description;
                    $('#type1').val(data.type);
                    $("#papercode1").val(data.paper.code)
                    initial_code=data.paper.code;
                    $("#year1").val(data.paper.year);
                    $("#session1").val(data.paper.session);
                    $("#papertitle1").val(data.paper.title);

                    $("#subject1").val(data.subject.title);
                    $("#discipline1").val(data.discipline.title);

                    Subject_id=data.subject.id;

                    
                    $('#difficulty1').val(data.difficulty);
                    Paper_id=data.paper.id;
                    for(let j=0;j<data.tag.length;j++)
                    {
                        pre_defined_tags.push(data.tag[j].id);
                    }
                    
                    
                    
                    if (data.qimage.length!=0) {
                        for (let index = 0; index < data.qimage.length; index++) {
                            qImage.push(data.qimage[index].id);
                            let compo=document.createElement('div');
                            compo.setAttribute("id", "Div"+data.qimage[index].id);
                            compo.style.position="relative";

                            let img=document.createElement('img');
                            img.src=data.qimage[index].image;
                            img.style.maxWidth="100px";
                            img.style.maxHeight="100px";
                            // img.style.height="70px";
                            document.getElementById('question-images').appendChild(compo);
                            document.getElementById('Div'+data.qimage[index].id).appendChild(img); 


                            let btnn=document.createElement('i');
                            btnn.setAttribute("class", "fa fa-times-circle");
                            btnn.style.position="absolute";
                            btnn.style.left="85px";
                            btnn.onclick=function()
                            {
                                qImage=removeFromList(qImage,data.qimage[index].id);
                                this.parentElement.parentElement.removeChild(this.parentElement);

                            }

                            document.getElementById('Div'+data.qimage[index].id).appendChild(btnn);    
                        }    
                    }
                    else
                    {
                        document.getElementById('question-images-out').style.display="none";
                    }
                    
                    if (data.aimage.length!=0) {
                        for (let index = 0; index < data.aimage.length; index++) {
                            aImage.push(data.aimage[index].id);
                            let compo=document.createElement('div');
                            compo.setAttribute("id", "Div"+data.aimage[index].id);
                            compo.style.position="relative";

                            let img=document.createElement('img');
                            img.src=data.aimage[index].image;
                            img.style.maxWidth="100px";
                            img.style.maxHeight="100px";
                            // img.style.height="70px";
                            document.getElementById('answer-images').appendChild(compo);
                            document.getElementById('Div'+data.aimage[index].id).appendChild(img); 


                            let btnn=document.createElement('i');
                            btnn.setAttribute("class", "fa fa-times-circle");
                            btnn.style.position="absolute";
                            btnn.style.left="85px";
                            btnn.onclick=function()
                            {
                                aImage=removeFromList(aImage,data.aimage[index].id);
                                this.parentElement.parentElement.removeChild(this.parentElement);

                            }

                            document.getElementById('Div'+data.aimage[index].id).appendChild(btnn); 

                        }
                    }
                    else
                    {
                        document.getElementById('answer-images-out').style.display="none";
                    }


                    try {
                        //console.log("try start");
                        setTimeout(function()
                        {
                            CKEDITOR.instances["editor12"].setData(data.answer);
                            CKEDITOR.instances["editor1"].setData(data.description);
                        }, 2000);
                        if(CKEDITOR.instances['editor1'].getData()=='' || CKEDITOR.instances['editor12'].getData() =='')
                        {
                            setTimeout(function()
                            {
                                CKEDITOR.instances["editor12"].setData(data.answer);
                                CKEDITOR.instances["editor1"].setData(data.description);
                            }, 2000);
                        }
                          
                        // console.log("try end"); 
                        // CKEDITOR.instances["editor12"].setData(data.answer);
                        // CKEDITOR.instances["editor1"].setData(data.description);  
                        // ckeditor_function(data.answer,data.description)
                    } catch (err) {
                        console.log("error: "+err)
                    }
                    

                   
                    //paper_code_search_start(question_paper_id);
                    getAllTag()
                
    
                
               }
            }
         );

        
}






//"http://127.0.0.1:8000/";
//http://3.139.191.47/

var API_URL2 = ur+"testr-api/engine/papers/";
var PaperCodeURL=API_URL2+"?code=";
var PaperCodeURLOnce=API_URL2;
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



    function getAllTag()
    {
        
        $.ajax(
            {
               type:'GET',
               url:Tag_URL,
               headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
               success: function(data){
                    try
                    {
                        
                        for(i=0;i<data.count;i++)
                        {
                            
                            if (pre_defined_tags.indexOf(data.results[i].id)>=0)
                            {
                                var newOption = new Option(data.results[i].name, data.results[i].id, true, true);
                                $('#tag1').append(newOption).trigger('change');
                            }else
                            {
                                $("#tag1").append("<option value="+data.results[i].id+">"+data.results[i].name+"</option>")
                            }
                        }
                    }
                    catch(err)
                    {
                        
                        //location.reload();
                        //  console.log("error : "+err)
                    }
               }
            }
         );



        

        // ----------LOAD ALL PAPERS-------

        // setTimeout(function()
        // {
        //     //console.log(allPapers)
        //     for (i=0; i<allPapers.count;i++)
        //     {
        //         if (allPapers.results[i].id==question_paper_id)
        //         {
        //         $("#papercode1").append("<option selected value="+i+">"+allPapers.results[i].code+"</option>");
                
        //             firstUpdateField(i);
        //             console.log(i);
                    
        //         }else
        //         {
        //             $("#papercode1").append("<option value="+i+">"+allPapers.results[i].code+"</option>");
        //         }
        //     }
        // }, 1000);

    
    }//getAllTags 




    // function paper_code_search_start(start)
    // {
    //     var searchcode=PaperCodeURLOnce+question_paper_id+"/";
    //     $.ajax(
    //         {
    //            type:'GET',
    //            url:searchcode,
    //            headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
    //            success: function(data){
    //                 Paper_id=data.id;
    //                 Discipline_id=data.discipline;
    //                 Subject_id=data.subject;
    //                 getDiscipline(Discipline_id)
    //                 getSubject(Subject_id)
    //                 $("#papercode1").val(data.code)
    //                 initial_code=data.code;
    //                 $("#year1").val(data.year);
    //                 $("#session1").val(data.session);
    //                 $("#papertitle1").val(data.title);
    
                
    //            }
    //         }
    //      );
    
    // }//function paper code one




function paper_code_search()
{
    var paperSearchCode=document.getElementById("papercode1").value;
    // console.log(initial_code);
    var searchcode=PaperCodeURL+paperSearchCode;
    $.ajax(
        {
           type:'GET',
           url:searchcode,
           headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
           success: function(data){
            if (data.count==1)
            {
                Paper_id=data.results[0].id;
                Discipline_id=data.results[0].discipline.id;
                Subject_id=data.results[0].subject.id;
                initial_code=data.results[0].code;
                $("#discipline1").val(data.results[0].discipline.title);
                $("#subject1").val(data.results[0].subject.title);
                
                $("#year1").val(data.results[0].year);
                $("#session1").val(data.results[0].session);
                $("#papertitle1").val(data.results[0].title);

            }
            else
            {
                alert("Code does not exist.");
                document.getElementById("papercode1").value=initial_code;
            }
           }
        }
     );

}//function Paper code

function getDiscipline(id)
{
    var disciplineCode=Discipline_URL+id+"/";
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
}// Function discipline

function getSubject(id)
{
    var subjectCode=Subject_URL+id+"/";
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
}// Function Subject



// function firstUpdateField(index)
// {
    
//     Discipline_id=allPapers.results[index].discipline;
//     Subject_id=allPapers.results[index].subject;
//     Paper_id=allPapers.results[index].id;

//      for(let i=0;i<allDiscipline.count;i++)
//      {
//          if(allDiscipline.results[i].id==parseInt(Discipline_id))
//          {
//             $("#discipline1").val(allDiscipline.results[i].title);
//             break;
//          }
//      }

//     for(let i=0;i<allSubject.count;i++)
//     {
//         if(allSubject.results[i].id==parseInt(Subject_id))
//         {
//             $("#subject1").val(allSubject.results[i].title);
//            break;
//         }
//     }
//     //$("#subject1").val(allPapers.results[i].subject);
//     $("#year1").val(allPapers.results[index].year);
//     $("#session1").val(allPapers.results[index].session);
//     $("#papertitle1").val(allPapers.results[index].title);
// }

// function updateField()
//     {
//         var index=document.getElementById("papercode1").value;
//         if (index!= 'select code')
//         {
//             // console.log("i ="+i)
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
       
//         }
//         else
//         {
//             $("#discipline1").val("");
//             $("#subject1").val("");
//             //$("#year1").val("");
//             //$("#session1").val("");
//             $("#papertitle1").val("");
//         }
        
      

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
}



function putData(){

    questionImageArr=[];
    answerImageArr=[];
    questionUploadImage();
    answerUploadImage();
    
    var $paperTitle = $('#papertitle1').val();

    var $text = CKEDITOR.instances["editor1"].getData();
    var $name = $('#name1').val();
    var $tag = $('#tag1').find(':selected').text();
    var $discipline = $('#discipline1').val();
    var $subject = $('#subject1').val();
    var $difficulty = $('#difficulty1').val();
    var $session = $('#session1').val();
    var $paperCode = $('#papercode1').val();
    var $paperYear = $('#year1').val();
    var $answer = CKEDITOR.instances["editor12"].getData();
    var $qtype1 = $('#type1').val();
    
//   $('#tag1').find(':selected').children().prevObject[0].innerText;


    // var selected="";
    // var my_tag = $('#tag1').find(':selected');
    // for(i=0 ;i<my_tag.length;i++)
    // {
    //     selected+=$('#tag1').find(':selected').children().prevObject[i].innerText;
    //     selected+=",";

    // }
    // selected = selected.slice(0, selected.length - 1);




    // let mdata =     {
    //         name: $name,
    //         description: $text,
    //         tag:  selected,
    //         //session: $session,
    //         paper:$paperCode,
    //         //paper: $paperTitle,
    //         answer: $answer,
    //         //paperyear: parseInt($paperYear),
    //         difficulty: $difficulty,
    //         //discipline: $discipline,
    //         //subject: $subject,
    //         qtype: $qtype1

    //     }
    
        var selected=$("#tag1").val();
        if(selected!=null){
            for(j=0;j<selected.length;j++)
            {
                selected[j]=parseInt(selected[j]);
            }
        }
        

        var any_field_empty=false;
        var display_str="Please Enter The Following Empty Fields :\n"

        if($paperTitle==''){display_str+="    Paper Title Field \n"; any_field_empty=true;}
        if($text==''){display_str+="    Question Field \n"; any_field_empty=true;}
        if($name==''){display_str+="    Question Name Field \n"; any_field_empty=true;}
        if($discipline==''){display_str+="    Discipline Field \n"; any_field_empty=true;}
        if($subject==''){display_str+="    Subject Field \n"; any_field_empty=true;}
        if($paperCode==''){display_str+="    Paper Code Field \n"; any_field_empty=true;}
        if($answer==''){display_str+="    Answer Field \n"; any_field_empty=true;}
        if(selected==null){display_str+="    Tags Field \n"; any_field_empty=true;}
         
        if(any_field_empty==true)
        {
            alert(display_str);
        }
        else{
            var qImage2=qImage.concat(questionImageArr);
            var aImage2=aImage.concat(answerImageArr);
            
            var arr = {
            "paper": Paper_id,
            "name": $name,
            "description": $text,
            "answer": $answer,
            "difficulty": $difficulty,
            "tag": selected,
            "type":$qtype1,
            "aimage":aImage2,
            "qimage":qImage2,
            "discipline":Discipline_id,
            "subject":Subject_id,
                
                };
                // console.log(arr);
                $.ajax({
                    url: QUESTIONS_URL,
                    type: 'PUT',
                    headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
                    data: JSON.stringify(arr),
                    contentType: 'application/json;',
                    dataType: 'json',
                    success: function(msg) {
                        alert("Question Updated");
                        window.location.assign("view1.html");
                    },
                });
    // $.ajax({
    //     type: 'PUT',
    //     url: QUESTIONS_URL,
        
    //     data: JSON.stringify(arr), // access in body
    //         }).done(function () {
    //            // console.log('SUCCESS');
    //             alert("Question updated")
    //         }).fail(function (msg) {
    //             alert("Check Fields Question NOT Updated");
    //           //  console.log('FAIL');
    //         }).always(function (msg) {
    //            // console.log('ALWAYS');
    //         });

        }

}


function removeFromList(arr, imageId)
{
    
    // console.log("arr : "+arr);
    // console.log("image id removed: "+imageId)
    var index = arr.indexOf(imageId);
    if (index > -1) {
        arr.splice(index, 1);
    }
    // console.log("arr : "+arr);
    return arr;
}

function removeFromArray(){}