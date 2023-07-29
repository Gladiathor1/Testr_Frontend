function addQuestionEditor (){
    //<a data-toggle="tab" href="#tab-eg6-0" class="border-0 btn-transition btn btn-outline-primary active show">Q.No. 1</a>
    let questionDiv = document.getElementById("questions-nav");
    let questionNumber = questionDiv.getElementsByTagName('a').length + 1
    let breakline = document.createElement('br')
    let breakline1 = document.createElement('br')
    let breakline2 = document.createElement('br')
    let breakline3 = document.createElement('br')
    // add button for the new question in the navigator
    let aTag = document.createElement('a');

    let qnaEditorId = "qna-editor-"+questionNumber;

    aTag.setAttribute('id',"qna-"+questionNumber);
    aTag.setAttribute('data-toggle',"tab");
    aTag.setAttribute('href',"#"+qnaEditorId);
    aTag.setAttribute('class',"border-0 btn-transition btn btn-outline-primary show");
    aTag.innerText = "Q & A. " + questionNumber;

    questionDiv.appendChild(aTag);

    // add the question and answer editor
    let qnaAreaDiv = document.getElementById('qna-area')

    let qnaAreaElements = document.createElement('div');
    qnaAreaElements.setAttribute('id', "qna-area-elements-"+questionNumber);
    qnaAreaElements.setAttribute('class', 'tab-pane');
    qnaAreaElements.setAttribute('role', 'tabpanel');

    // TODO: append question name

    let textname = document.createElement('input');
    let text1 = document.createElement('h5');
    text1.innerText = "Question Name";
    textname.setAttribute('id', 'name'+questionNumber);
    textname.setAttribute('class', "form-control");
    textname.style.width="50%";
    qnaAreaElements.appendChild(text1);
    qnaAreaElements.appendChild(textname);
    qnaAreaElements.appendChild(breakline);



    // TODO: append question statement (label)
    let text2 = document.createElement('h5');
    text2.innerText = "Question Statement";
    qnaAreaElements.appendChild(text2);
    qnaAreaElements.appendChild(addEditor('q-textarea-' + questionNumber));
    qnaAreaElements.appendChild(breakline1);
    // TODO: append tags
    let text3 = document.createElement('h5');
    text3.innerText = "Tags";
    let tagname = document.createElement('select');
    tagname.setAttribute('id', 'tag'+questionNumber);
    tagname.setAttribute('class', "js-example-tags");
    tagname.setAttribute('multiple', "multiple");
    tagname.style.width="50%";
    // let option1=document.createElement('option');
    // option1.setAttribute('value', "MOM");
    // option1.innerText="Momentum";
    // let option2=document.createElement('option');
    // option2.setAttribute('value', "LIN");
    // option2.innerText="Linear";
    // tagname.appendChild(option1);
    // tagname.appendChild(option2);
    qnaAreaElements.appendChild(text3);
    qnaAreaElements.appendChild(tagname);
    qnaAreaElements.appendChild(breakline2);
    qnaAreaElements.appendChild(breakline3);



    // TODO: append answer (label)
    let text4 = document.createElement('h5');
    text4.innerText = "Answer Statement";
    
    qnaAreaElements.appendChild(text4);
    qnaAreaElements.appendChild(addEditor('a-textarea-' + questionNumber));

    // TODO: append save / cancel
    let sbutton=document.createElement('button');
    sbutton.setAttribute('id', "sbutton"+questionNumber);
    sbutton.setAttribute('class', "btn-wide btn btn-success");
    sbutton.setAttribute('onclick',"postques()");
    sbutton.innerText="Save";
    sbutton.style.marginRight="5px";
    let cbutton=document.createElement('button');
    cbutton.setAttribute('id', "cbutton"+questionNumber);
    cbutton.setAttribute('class', "btn-wide btn btn-success");
    cbutton.innerText="Cancel";
    let butdiv = document.createElement('div');
    butdiv.setAttribute('class',"d-block text-right card-footer");
    butdiv.appendChild(sbutton);
    butdiv.appendChild(cbutton);
   // butdiv.appendChild(postques('sbutton' + questionNumber));
    
    qnaAreaElements.appendChild(butdiv);





    //
    qnaAreaDiv.appendChild(qnaAreaElements);

    $("#qna-"+questionNumber).click(function () {
        $(".tab-pane").removeClass("active");
        $(".tab-pane").removeClass("show");
        $("#qna-area-elements-"+questionNumber).addClass("active");
        $("#qna-area-elements-"+questionNumber).addClass("show");
    });

    $(".js-example-tags").select2({
        tags: true
        });

}

/**
 * to add ckeditor
  */
function addEditor (editorName){
    let textArea = document.createElement('textarea');
    textArea.setAttribute('name', editorName);
    textArea.setAttribute('id', editorName);
    textArea.innerText = editorName;
    CKEDITOR.replace(textArea);
    return textArea;
}
function postques(buttonid){
    let questionDiv = document.getElementById("questions-nav");
    let questionNumber = questionDiv.getElementsByTagName('a').length;
    var $text = CKEDITOR.instances['q-textarea-'+questionNumber].getData();
    var $name = $('#name'+questionNumber).val();
    var $tag = $('#tag'+questionNumber).find(':selected').text();
    var $discipline = $('#discipline1').val();
    var $subject = $('#subject1').val();
    var $answer = CKEDITOR.instances['a-textarea-'+questionNumber].getData();
    var selected;
    if ($('#tag'+questionNumber).select2('data').length){
    $.each($('#tag'+questionNumber).select2('data'), function(key, item){
        selected+=item.text;
        selected+=","
    });
    }
    selected = selected.replace('undefined', '');
    selected = selected.slice(0, selected.length - 1);
    //console.log(selected);
    //console.log($answer);
    
    
    var ur="https://api.testr.pk/";
    //var ur="https://dev.testr.pk/";
    // var ur = "http://apps.testr.pk/";
    //var ur="http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/"
    var paperval = ur + "engine/papers/";
    
    var tagval = ur + "engine/tag/1/";
    var subjectname = ur + "engine/subject/";
    var subjectname1;
    var disciplinename = ur + "engine/discipline/";
    var disciplinename1;
    var questionname = ur + "engine/questions/";
    var questionname1;
    var tagname = ur + "engine/tag/";
    var tagname1;
    var papername = ur + "engine/papers/";
    var papername1;
    var subjectid = $("#subject1").children("option:selected").attr("name");
    var disciplineid = $("#discipline1").children("option:selected").attr("name");
    var papertitle=$("#papertitle1").val();

    // $.post(ur + 'testr-api/discipline/',
    // {
    //     title: $discipline
    // },
    // function (data, status) {
    //     console.log("Data: " + data + "\nStatus: " + status);

    //     disciplinename1 = disciplinename + data.id + "/";
    //     console.log(disciplinename1)

    // });

    // $.post(ur + 'testr-api/subject/',
    // {
    //     title: $subject
    // },
    // function (data, status) {
    //     console.log("Data: " + data + "\nStatus: " + status);

    //     subjectname1 = subjectname + data.id + "/";
    //     console.log(subjectname1)
    // });

    // $.post(ur + 'testr-api/papers/',
    // {
    //     discipline:disciplinename+disciplineid+"/",
    //     subject:subjectname+subjectid+"/",
    //     title:papertitle
    // },
    // function (data, status) {
    //     console.log("Data: " + data + "\nStatus: " + status);
    //     if(status=="success"){
            
    //     }
    // });

    $.post(ur + 'engine/questions/',
    {
        name: $name,
        description: $text,
        tag:  selected,
        paper: paperval,
        answer: $answer
    },
    function (data, status) {
        //console.log("Data: " + data + "\nStatus: " + status);
        if(status=="success"){
            alert("Question posted")
        }
    });



}
