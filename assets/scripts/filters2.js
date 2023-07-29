// const API_URL = "http://apps.testr.pk/testr-api";
// const QUESTIONS_URL = API_URL+"/questions/";
// let myid1;

const d = new Date();

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


function getAllQuestions(){

    document.getElementById("year-start").value=d.getFullYear()-1;
    document.getElementById("year-end").value=d.getFullYear();

}

