var getUrlParameters = function getUrlParameter(sParam) {
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
var tech = getUrlParameters('id');

var question_paper_id;
//const ur="http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/"
const API_URL = ur+"testr-api/engine";

var QUESTIONS_URL = API_URL+"/questions/"+tech+"/";
var myQUESTIONS_URL = API_URL+"/myquestions/"+tech+"/";
var abc;
var pre_defined_tags;
var initial_code;
var API_URL2 = ur+"testr-api/engine/papers/";


function viewQuestion(){
    
    //$(document).ready(function(){

        $.ajax({
            url: QUESTIONS_URL,
            type: "GET",
            async: false,
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("access"),
                //"content-type":'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                // "content-length": arrayBuffer.byteLength
            },
            success: function(data)
            {
                $("#question-statement").append(data.description);
                $("#answer-statement").append(data.answer);
                $("#name1").text(data.name)

                if (data.qimage.length!=0) {
                    for (let index = 0; index < data.qimage.length; index++) {
                        let img=document.createElement('img');
                        img.src=data.qimage[index].image;
                        img.style.maxWidth="500px";
                        img.style.maxHeight="500px";
                        // img.style.height="70px";
                        document.getElementById('question-images').appendChild(img);    
                    }    
                }
                else
                {
                    //document.getElementById('question-images').innerHTML="no images";
                }
                
                if (data.aimage.length!=0) {
                    for (let index = 0; index < data.aimage.length; index++) {
                        let img=document.createElement('img');
                        img.src=data.aimage[index].image;
                        img.style.maxWidth="500px";
                        img.style.maxHeight="500px";
                        // img.style.height="70px";
                        document.getElementById('answer-images').appendChild(img);    
                    }
                }
                else
                {
                    //document.getElementById('answer-images').innerHTML="no images";
                }
            },
            error: function(data)
            {
                //alert("Could not load question");
                viewMyQuestion()
            }
        });


        
        

        function getPaperData()
        {
            // $.ajax(
            //     {
            //        type:'GET',
            //        url:"http://apps.testr.pk/testr-api/papers/"+question_paper_id,
            //        success: function(data){
            //             console.log(data);
            //             $("#session1").append(data.session);
            //             $("#paperTitle1").append(data.title);
            //             $("#year1").append(data.year);
                    
                    
            //        }
            //     }
            //  );
        }




    //});// Document ready
}

function viewMyQuestion(){
    
    //$(document).ready(function(){

        $.ajax({
            url: myQUESTIONS_URL,
            type: "GET",
            async: false,
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("access"),
                //"content-type":'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
                // "content-length": arrayBuffer.byteLength
            },
            success: function(data)
            {
                $("#question-statement").append(data.description);
                $("#answer-statement").append(data.answer);
                $("#name1").text(data.name)

                if (data.qimage.length!=0) {
                    for (let index = 0; index < data.qimage.length; index++) {
                        let img=document.createElement('img');
                        img.src=data.qimage[index].image;
                        img.style.maxWidth="500px";
                        img.style.maxHeight="500px";
                        // img.style.height="70px";
                        document.getElementById('question-images').appendChild(img);    
                    }    
                }
                else
                {
                    //document.getElementById('question-images').innerHTML="no images";
                }
                
                if (data.aimage.length!=0) {
                    for (let index = 0; index < data.aimage.length; index++) {
                        let img=document.createElement('img');
                        img.src=data.aimage[index].image;
                        img.style.maxWidth="500px";
                        img.style.maxHeight="500px";
                        // img.style.height="70px";
                        document.getElementById('answer-images').appendChild(img);    
                    }
                }
                else
                {
                    //document.getElementById('answer-images').innerHTML="no images";
                }
            },
            error: function(data)
            {
                alert("Could not load question");
            }
        });


        
        

        function getPaperData()
        {
            // $.ajax(
            //     {
            //        type:'GET',
            //        url:"http://apps.testr.pk/testr-api/papers/"+question_paper_id,
            //        success: function(data){
            //             console.log(data);
            //             $("#session1").append(data.session);
            //             $("#paperTitle1").append(data.title);
            //             $("#year1").append(data.year);
                    
                    
            //        }
            //     }
            //  );
        }




    //});// Document ready
}