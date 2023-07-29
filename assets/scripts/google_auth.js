var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://apis.google.com/js/platform.js?onload=onLoad');

var meta = document.createElement('meta');
meta.name = "google-signin-client_id";

//api.testr
 meta.content = "169483209995-kef2hkv5irdc7edgvgsq4tro8bf6c1vf.apps.googleusercontent.com";

// dev.testr
//meta.content = "169483209995-ve7joci5c2kk18806imi6are50956caa.apps.googleusercontent.com";
// meta.content = "169483209995-lp9no4a9a8mv4b8jlostpuadetdgsbb5.apps.googleusercontent.com";
//meta.content = "169483209995-n1hfu82hdg1ve0finr5sp3ct6htnqqu2.apps.googleusercontent.com";
document.head.appendChild(meta);
document.head.appendChild(jQueryScript);

var ur2="https://api.testr.pk/";
// var ur2 = "http://ec2-18-219-154-70.us-east-2.compute.amazonaws.com/";
//var ur2 = "http://apps.testr.pk/";
//var ur2 = "http://ec2-3-19-151-183.us-east-2.compute.amazonaws.com/";


function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
  //   console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  //   console.log("Full Name: " + profile.getName());
  //   console.log("Given Name: " + profile.getGivenName());
  //   console.log("Family Name: " + profile.getFamilyName());
  //   console.log("Image URL: " + profile.getImageUrl());
  //   console.log("Email: " + profile.getEmail());
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);
    var arr=
      {
          "auth_token": id_token
      }
    $.ajax({
          url:ur2+'testr-api/social/google/',
          type: 'POST',
          data: JSON.stringify(arr),
          contentType: 'application/json;',
          dataType: 'json',
          success: function(msg) {
              localStorage.setItem("username",profile.getGivenName());
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
            signOut();
            alert(xhr.responseText);
          }
    });
}

function onLoad() {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    });
  }
// function init() {
// gapi.load('auth2', function() {
// /* Ready. Make a call to gapi.auth2.init or some other API */
// });
// }



function signOut() {
    onLoad();
    var auth2 = gapi.auth2.getAuthInstance();
    // console.log(auth2);
    auth2.signOut().then(function () {
    //   console.log('User signed out.');
    });
  }