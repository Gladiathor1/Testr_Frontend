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
var abc;
var pre_defined_tags;
var initial_code;
var API_URL2 = ur+"testr-api/engine/papers/";


function viewQuestion(){
    
    //$(document).ready(function(){
        $.get( QUESTIONS_URL, function( data ) {
            $("#question1").append(data.description);
            $("#answer1").append(data.answer);
            $("#name1").append(data.name);
            
            $("#discipline1").append(data.discipline);
            $("#subject1").append(data.subject);
            $("#type1").append(data.type);
            
            $("#difficulty1").append(data.difficulty);
            
            var tag=data.tag;
            var tags="";
            for(let i=0;i<tag.length;i++)
            {
                tags+=tag[i]+",";
            }
            tags=tags.slice(0,-1);
            $("#tag1").append(tags);

            question_paper_id=data.paper;

            getPaperData();

            
        });
        

        function getPaperData()
        {
            $.ajax(
                {
                   type:'GET',
                   url:ur+"testr-api/engine/papers/"+question_paper_id,
                   success: function(data){
                        $("#session1").append(data.session);
                        //$("#paperTitle1").append(data.title);
                        $("#year1").append(data.year);
                    
                    
                   }
                }
             );
        }




    //});// Document ready
}
