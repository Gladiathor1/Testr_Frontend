var ur2="https://api.testr.pk/";
// var ur2 = "http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/";
//var ur2 = "http://apps.testr.pk/";
//var ur2 = "http://ec2-3-19-151-183.us-east-2.compute.amazonaws.com/";


    function statusChangeCallback(response) {
      // Called with the results from FB.getLoginStatus().
      //console.log("statusChangeCallback");
      //console.log(response); // The current login status of the person.
      if (response.status === "connected") {
        var arr=
        {
            "auth_token": response.authResponse.accessToken
        }
        // console.log("connected ");
        // console.log(response.authResponse.userID);
        // testAPI(response.authResponse.userID);

        $.ajax({
            url:ur2+'testr-api/social/facebook/',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json;',
            dataType: 'json',
            success: function(msg) {
                localStorage.setItem("username",msg.username);
                localStorage.setItem("refresh",msg.tokens.refresh );
                localStorage.setItem("access",msg.tokens.access );
                localStorage.setItem("userid",msg.id );
                localStorage.setItem("isReviewer",msg.is_reviewer);
                localStorage.setItem("isTeacher",msg.is_teacher);
  
  
                
  
               
                // localStorage.setItem('gapi',JSON.stringify(gapi));
                window.location.assign("view1.html");
                // window.location.href="index.html"
            },
            error: function(xhr, status, error) {
              logout_c();
              alert(xhr.responseText);
            }
        });

        //console.log(response.authResponse.accessToken);
        // Logged into your webpage and Facebook.
        //testAPI();
      } else {
        localStorage.clear();
        logout_c();
        // Not logged into your webpage or we are unable to tell.
        //document.getElementById("status").innerHTML ="Please log " + "into this webpage.";
      }
    }

    FB.login(function(response) {
      console.log(response);
    }, {
        scope: 'email', 
        return_scopes: true
    });

    function checkLoginState() {
      // Called when a person is finished with the Login Button.
      FB.getLoginStatus(function (response) {
        // See the on login handler
        statusChangeCallback(response);
      });
    }

    window.fbAsyncInit = function () {
     // FB.init({
        //   //appId: "1457703867755951",
        //   appId: "5540121042670818",
        //   status:true,
        //   cookie: true, // Enable cookies to allow the server to access the session.
        //   xfbml: true, // Parse social plugins on this webpage.
        //   version: "v5.0", // Use this Graph API version for this call.
        // });

      // checkLoginState();
      FB.getLoginStatus(function (response) {
        
        // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
      });
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    function logout_c(){
        FB.getLoginStatus(function(response) {
          if(response.authResponse!=null)
          {
            
            FB.logout(function(response){
              localStorage.clear();
              //console.log("Logged Out!");
              //window.location = "/";
              });
          }      
        });
    }
    // FB.logout(function(response) {
    //     //alert("logout");
    //  });
    

    // function testAPI(uid) {
    //   // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    //   //console.log("Welcome!  Fetching your information.... ");
    //   console.log("user api");
    //   FB.api(
    //     '/'+uid+'/',
    //     'GET',
    //     {"fields":"id,name,email"},
    //     function(response) {
    //         console.log(response);
    //     }
    //   );
    // }
