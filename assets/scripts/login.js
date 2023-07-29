if(localStorage.getItem("username")!=null){
    window.location.assign("my_question.html")
}

var ur="https://api.testr.pk/";
//var ur="https://dev.testr.pk/";
// var ur = "http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/";
//var ur = "http://apps.testr.pk/";
//var ur = "http://ec2-3-19-151-183.us-east-2.compute.amazonaws.com/";




//var ur = "http://apps.testr.pk/testr-api/";

var form = document.getElementById("loginForm");

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    var user=document.getElementById("validationCustom01");
    var pass=document.getElementById("validationCustom03");





    var arr=
        {
            
            "email": user.value,
            "password": pass.value
        }


        $.ajax({
            url: ur + 'testr-api/auth/login/',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json;',
            dataType: 'json',
            success: function(msg) {
                
                //console.log(msg.user);
                //console.log(msg.user.username);
                // console.log(msg);
                // console.log(msg.tokens.refresh);
                // console.log(msg.tokens.access);
                localStorage.setItem("username",msg.username );
                localStorage.setItem("refresh",msg.tokens.refresh );
                localStorage.setItem("access",msg.tokens.access );
                localStorage.setItem("userid",msg.id);
                localStorage.setItem("isReviewer",msg.is_reviewer);
                localStorage.setItem("isTeacher",msg.is_teacher);
                window.location.assign("view1.html");
            },
            error: function(data)
            {
                $("#invalidCred").css("display","block");
                //$("#invalidCred")
                $('#invalidCred').addClass('invalid-cred-shake');
                setTimeout(()=>{
                    $('#invalidCred').removeClass('invalid-cred-shake')
                },600);
                
                
               
               
            }
        });



});