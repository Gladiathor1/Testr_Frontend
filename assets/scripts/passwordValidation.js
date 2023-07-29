var ur="https://api.testr.pk/";
//var ur="https://dev.testr.pk/"
// var ur = "http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/";
//var ur = "http://apps.testr.pk/";
//var ur = "http://ec2-3-19-151-183.us-east-2.compute.amazonaws.com/";


const API_URL = ur+"testr-api/";

var form = document.getElementById("signupForm");

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    var flag=validateForm();
    if(flag)
    {
       
        var f1=document.getElementById("validationCustom01");
        var f2=document.getElementById("validationCustom03");
        var pass1=document.getElementById("password1");
        var pass2=document.getElementById("password2");
        var arr=
        {
            "username": f1.value,
            "email": f2.value,
            "password": pass1.value,
        }

        // console.log(arr);
        $.ajax({
            url: API_URL + 'auth/register/',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json;',
            dataType: 'json',
            success: function(msg) {
                alert("Verification Email send!\nPlease Verify your Email and Login.")
                window.location.assign("login.html");
            },
            error: function(data)
            {

               alert(data.status +"\n "+data.responseText);
               //console.log(data);
               
            }
        });

    }
    else
    {
        
    }
    

});


function validateForm()
{
    $('.invalid-feedback').addClass('invalid-cred-shake');
                setTimeout(()=>{
                    $('.invalid-feedback').removeClass('invalid-cred-shake')
                },600);
    
    var f1=$("#validationCustom01");
    // var f2=$("#validationCustom02");
    var f3=$("#validationCustom03");
    var f4=document.getElementById("invalidCheck");
    // if (document.getElementById("invalidCheck").checked==true)
    // {
        if(f1.val()!="" && f3.val()!="" && f4.checked!=false)
        {
            $("#field6").css("display","none");
            var pass1=document.getElementById("password1");
            var pass2=document.getElementById("password2");
            if(pass1.value==pass2.value)
            {
                return checkAlphaNum(pass1);
            }
            else
            {
                
                return false;
            }
        }
        else
        {
            if(f1.val()==""){$("#field1").css("display","block");}else{$("#field1").css("display","none");}
            //if(f2.val()==""){$("#field2").css("display","block");}else{$("#field2").css("display","none");}
            if(f3.val()==""){$("#field3").css("display","block");}else{$("#field3").css("display","none");}
            if(f4.checked==false){$("#field6").css("display","block");}else{$("#field6").css("display","none");}
            if($("#password1").val()==""){$("#password1").css("border","1px solid #d92550");$("#field4").css("display","block")}
            
            $('.invalid-feedback').addClass('invalid-cred-shake');
                setTimeout(()=>{
                    $('.invalid-feedback').removeClass('invalid-cred-shake')
                },600);
            
            
            return false;
        }
    // }
    // else
    // {
    //     $("#field6").css("display","block");
    //     return false;
    // }
    
}


function checkAlphaNum(pass)
{
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;


    if(pass.value.match(upperCaseLetters) && pass.value.match(lowerCaseLetters) && pass.value.match(numbers) && (pass.value.length >= 8))
    {
       
        return true;

    }
    else
    {
        if($("#password1").val()==""){$("#password1").css("border","1px solid #d92550");$("#field4").css("display","block")}
            $('.invalid-feedback').addClass('invalid-cred-shake');
            setTimeout(()=>{
                $('.invalid-feedback').removeClass('invalid-cred-shake')
            },600);
        
        return false;
    }
}







$(document).ready(function(){
    $("#validationCustom01").blur(function()
    {
        
        if($("#validationCustom01").val()!="")
        {

            $("#validationCustom01").css("border","1px solid #3ac47d");
            $("#field1").css("display","none")
        }
        else
        {
            $("#validationCustom01").css("border","1px solid #d92550");
            $("#field1").css("display","block")
        }
    });// event first name






    // $("#validationCustom02").blur(function()
    // {
        
    //     if($("#validationCustom02").val()!="")
    //     {

    //         $("#validationCustom02").css("border","1px solid #3ac47d");
    //         $("#field2").css("display","none")
    //     }
    //     else
    //     {
    //         $("#validationCustom02").css("border","1px solid #d92550");
    //         $("#field2").css("display","block")
    //     }
    // });// event last name


    $("#validationCustom03").blur(function()
    {
        
        if($("#validationCustom03").val()!="")
        {

            $("#validationCustom03").css("border","1px solid #3ac47d");
            $("#field3").css("display","none")
        }
        else
        {
            $("#validationCustom03").css("border","1px solid #d92550");
            $("#field3").css("display","block")
        }
    });// event email







    $("#password1").blur(function()
    {
        
        if( checkAlphaNum(document.getElementById("password1")))
        {

            $("#password1").css("border","1px solid #3ac47d");
            $("#field4").css("display","none")
        }
        else
        {
            $("#password1").css("border","1px solid #d92550");
            $("#field4").css("display","block")
        }
    });//password1


    $("#password2").blur(function()
    {
        
        if(document.getElementById("password1").value ==document.getElementById("password2").value )
        {

            $("#password2").css("border","1px solid #3ac47d");
            $("#field5").css("display","none")
        }
        else
        {
            $("#password2").css("border","1px solid #d92550");
            $("#field5").css("display","block")
        }
    });

    
});