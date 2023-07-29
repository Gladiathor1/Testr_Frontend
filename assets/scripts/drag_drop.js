// var qarr=new DataTransfer();
// var aarr=new DataTransfer();


// document.getElementById("qdiv").addEventListener('keydown',function(e)
// {
//     var key = e.keyCode || e.charCode;
//     if( key == 8 )
//     {
//         e.preventDefault();
//     }
//     else if (key == 118 || key == 86){
        
//     }
//     else if (key >= 97 && key <= 122){
//         e.preventDefault();
//     }
//     else if (key >= 65 && key <= 90){
//         e.preventDefault();
//     }
// });
// document.getElementById("adiv").addEventListener('keydown',function(e)
// {
//     e.preventDefault()
// });



// //QUESTION image
// document.getElementById("qdiv").addEventListener("dragover", function( event ) 
// {
// // prevent default to allow drop
//     event.preventDefault();
// }, false);

// //ANSWER image
// document.getElementById("adiv").addEventListener("dragover", function( event ) 
// {
// // prevent default to allow drop
//     event.preventDefault();
// }, false);

// //QUESTION IMAGE UPLOAD
// function fileUpload(e)
// {
//     e.preventDefault();
//     for(let i=0;i<e.target.files.length;i++)
//     {
//         if(e.target.files[i].type.startsWith("image/"))
//         {
//             previewimageq(e.target.files[i]);
//             let file=e.target.files[i];
//             qarr.items.add(file);
//         }
//     }
//     let myFileList=qarr.files;
//     document.getElementById("qFile").files=myFileList;
// }
// //ANSWER IMAGE UPLOAD
// function fileUpload2(e)
// {
//     e.preventDefault();
//     for(let i=0;i<e.target.files.length;i++)
//     {
//         if(e.target.files[i].type.startsWith("image/"))
//         {
//             previewimagea(e.target.files[i]);
//             let file=e.target.files[i];
//             aarr.items.add(file);
//         }
//     }
//     let myFileList=aarr.files;
//     document.getElementById("aFile").files=myFileList;
// }


// //QUESTION IMAGE DROP     
// document.getElementById("qdiv").addEventListener('drop',function(e)
// {
//     e.preventDefault();
//     // console.log(e.dataTransfer.files);
//     // arr.push(e.dataTransfer.files);
//     // document.getElementById("myFile").files=arr[0];
//     for(let i=0;i<e.dataTransfer.files.length;i++)
//     {
//         if(e.dataTransfer.files[i].type.startsWith("image/"))
//         {
//             previewimageq(e.dataTransfer.files[i]);
//             let file=e.dataTransfer.files[i];
//             qarr.items.add(file);
//         }
//     }
//     let myFileList=qarr.files;
//     document.getElementById("qFile").files=myFileList;
// }, false);

// //ANSWER IMAGE DROP     
// document.getElementById("adiv").addEventListener('drop',function(e)
// {
//     e.preventDefault();
//     // console.log(e.dataTransfer.files);
//     // arr.push(e.dataTransfer.files);
//     // document.getElementById("myFile").files=arr[0];
//     for(let i=0;i<e.dataTransfer.files.length;i++)
//     {
//         if(e.dataTransfer.files[i].type.startsWith("image/"))
//         {
//             previewimagea(e.dataTransfer.files[i]);
//             let file=e.dataTransfer.files[i];
//             aarr.items.add(file);
//         }
//     }
//     let myFileList=aarr.files;
//     document.getElementById("aFile").files=myFileList;
// }, false);






// //QUESTION IMAGE PASTE
// document.getElementById("qdiv").addEventListener("paste",function(e)
// {
//     e.stopPropagation();
//     e.preventDefault();
//     // console.log(e.clipboardData.files);
//     // arr.push(e.clipboardData.files);
//     // document.getElementById("myFile").files=arr[0];
//     for(let i=0;i<e.clipboardData.files.length;i++)
//     {
//         if(e.clipboardData.files[i].type.startsWith("image/"))
//         {
//             previewimageq(e.clipboardData.files[i]);
//             // arr2.push(e.clipboardData.files[i]);
//             let file=e.clipboardData.files[i];
//             qarr.items.add(file);
            
//         }
//     }
//     let myFileList=qarr.files;
//     document.getElementById("qFile").files=myFileList;
// });


// //ANSWER IMAGE PASTE
// document.getElementById("adiv").addEventListener("paste",function(e)
// {
//     e.preventDefault();
//     console.log("paste");
//     console.log(e.clipboardData.files);
//     // arr.push(e.clipboardData.files);
//     // document.getElementById("myFile").files=arr[0];
//     for(let i=0;i<e.clipboardData.files.length;i++)
//     {
//         if(e.clipboardData.files[i].type.startsWith("image/"))
//         {
//             previewimagea(e.clipboardData.files[i]);
//             // arr2.push(e.clipboardData.files[i]);
//             let file=e.clipboardData.files[i];
//             aarr.items.add(file);
            
//         }
//     }
//     let myFileList=aarr.files;
//     document.getElementById("aFile").files=myFileList;
// });



// //QUESTION IIMAGE PREVIEW
// function previewimageq(file)
// {
//     var filereader=new FileReader();

//     filereader.readAsDataURL(file);
//     filereader.onload=()=>
//     {
//         let img=document.createElement('img');
//         img.src=filereader.result;
//         img.style.width="70px";
//         img.style.height="70px";
//         document.getElementById('qpre').appendChild(img);

//     }
// }

// //ANSWER IIMAGE PREVIEW
// function previewimagea(file)
// {
//     var filereader=new FileReader();

//     filereader.readAsDataURL(file);
//     filereader.onload=()=>
//     {
//         let img=document.createElement('img');
//         img.src=filereader.result;
//         img.style.width="70px";
//         img.style.height="70px";
//         document.getElementById('apre').appendChild(img);

//     }

// }



// function reset_images_q()
// {
//     document.getElementById("qFile").value="";
//     document.getElementById("qpre").innerHTML="";
// }

// function reset_images_a()
// {
//     document.getElementById("aFile").value="";
//     document.getElementById("apre").innerHTML="";
// }




// NEW PREVIEW



var qarr=new DataTransfer();
var aarr=new DataTransfer();


document.getElementById("qdiv").addEventListener('keydown',function(e)
{
    var key = e.keyCode || e.charCode;
    if( key == 8 )
    {
        e.preventDefault();
    }
    else if (key == 118 || key == 86){
        
    }
    else if (key >= 97 && key <= 122){
        e.preventDefault();
    }
    else if (key >= 65 && key <= 90){
        e.preventDefault();
    }
});
document.getElementById("adiv").addEventListener('keydown',function(e)
{
    var key = e.keyCode || e.charCode;
    if( key == 8 )
    {
        e.preventDefault();
    }
    else if (key == 118 || key == 86){
        
    }
    else if (key >= 97 && key <= 122){
        e.preventDefault();
    }
    else if (key >= 65 && key <= 90){
        e.preventDefault();
    }
});




//QUESTION image
document.getElementById("qdiv").addEventListener("dragover", function( event ) 
{
// prevent default to allow drop
    event.preventDefault();
}, false);

//ANSWER image
document.getElementById("adiv").addEventListener("dragover", function( event ) 
{
// prevent default to allow drop
    event.preventDefault();
}, false);

//QUESTION IMAGE UPLOAD
function fileUpload(e)
{
    e.preventDefault();
    for(let i=0;i<e.target.files.length;i++)
    {
        if(e.target.files[i].type.startsWith("image/"))
        {
            
            let file=e.target.files[i];
            qarr.items.add(file);
        }
    }
    let myFileList=qarr.files;
    document.getElementById("qFile").files=myFileList;
    previewimageq();
}
//ANSWER IMAGE UPLOAD
function fileUpload2(e)
{
    e.preventDefault();
    for(let i=0;i<e.target.files.length;i++)
    {
        if(e.target.files[i].type.startsWith("image/"))
        {
            
            let file=e.target.files[i];
            aarr.items.add(file);
        }
    }
    let myFileList=aarr.files;
    document.getElementById("aFile").files=myFileList;
    previewimagea();
}


//QUESTION IMAGE DROP     
document.getElementById("qdiv").addEventListener('drop',function(e)
{
    e.preventDefault();
    // console.log(e.dataTransfer.files);
    // arr.push(e.dataTransfer.files);
    // document.getElementById("myFile").files=arr[0];
    for(let i=0;i<e.dataTransfer.files.length;i++)
    {
        if(e.dataTransfer.files[i].type.startsWith("image/"))
        {
            
            let file=e.dataTransfer.files[i];
            qarr.items.add(file);
        }
    }
    let myFileList=qarr.files;
    document.getElementById("qFile").files=myFileList;
    previewimageq();
}, false);

//ANSWER IMAGE DROP     
document.getElementById("adiv").addEventListener('drop',function(e)
{
    e.preventDefault();
    // console.log(e.dataTransfer.files);
    // arr.push(e.dataTransfer.files);
    // document.getElementById("myFile").files=arr[0];
    for(let i=0;i<e.dataTransfer.files.length;i++)
    {
        if(e.dataTransfer.files[i].type.startsWith("image/"))
        {
            
            let file=e.dataTransfer.files[i];
            aarr.items.add(file);
        }
    }
    let myFileList=aarr.files;
    document.getElementById("aFile").files=myFileList;
    previewimagea();
}, false);






//QUESTION IMAGE PASTE
document.getElementById("qdiv").addEventListener("paste",function(e)
{
    e.stopPropagation();
    e.preventDefault();
    // console.log(e.clipboardData.files);
    // arr.push(e.clipboardData.files);
    // document.getElementById("myFile").files=arr[0];
    for(let i=0;i<e.clipboardData.files.length;i++)
    {
        if(e.clipboardData.files[i].type.startsWith("image/"))
        {
            
            // arr2.push(e.clipboardData.files[i]);
            let file=e.clipboardData.files[i];
            qarr.items.add(file);
            
        }
    }
    let myFileList=qarr.files;
    document.getElementById("qFile").files=myFileList;
    previewimageq();
});


//ANSWER IMAGE PASTE
document.getElementById("adiv").addEventListener("paste",function(e)
{
    e.preventDefault();
    console.log("paste");
    console.log(e.clipboardData.files);
    // arr.push(e.clipboardData.files);
    // document.getElementById("myFile").files=arr[0];
    for(let i=0;i<e.clipboardData.files.length;i++)
    {
        if(e.clipboardData.files[i].type.startsWith("image/"))
        {
            
            // arr2.push(e.clipboardData.files[i]);
            let file=e.clipboardData.files[i];
            aarr.items.add(file);
            
        }
    }
    let myFileList=aarr.files;
    document.getElementById("aFile").files=myFileList;
    previewimagea();
});



//QUESTION IIMAGE PREVIEW
function previewimageq()
{
    document.getElementById('qpre').innerHTML="";
    let qfile=document.getElementById('qFile').files;
    console.log(qfile);
    for (let index = 0; index < qfile.length; index++) {
        let filereader=new FileReader();

        filereader.readAsDataURL(qfile[index]);
        filereader.onload=()=>
        {
            let compo=document.createElement('div');
            compo.setAttribute("id", "qDiv"+index);
            compo.style.position="relative";

            let img=document.createElement('img');
            img.src=filereader.result;
            img.style.maxWidth="100px";
            img.style.maxHeight="100px";
            // img.style.height="70px";
            document.getElementById('qpre').appendChild(compo);
            document.getElementById('qDiv'+index).appendChild(img); 


            let btnn=document.createElement('i');
            btnn.setAttribute("class", "fa fa-times-circle");
            btnn.style.position="absolute";
            btnn.style.left="85px";
            btnn.onclick=function()
            {
                //aImage=removeFromList(aImage,data.aimage[index].id);
                questionImageRemove(index);
                console.log("id: "+index)
                this.parentElement.parentElement.removeChild(this.parentElement);

            }

            document.getElementById('qDiv'+index).appendChild(btnn); 

            // let img=document.createElement('img');
            // img.src=filereader.result;
            // img.style.width="70px";
            // img.style.height="70px";
            // document.getElementById('qpre').appendChild(img);

        }    
    }
    
}


//ANSWER IIMAGE PREVIEW
function previewimagea()
{
    document.getElementById('apre').innerHTML="";
    let afile=document.getElementById('aFile').files;
    console.log(afile);
    for (let index = 0; index < afile.length; index++) {
        let filereader=new FileReader();

        filereader.readAsDataURL(afile[index]);
        filereader.onload=()=>
        {
            let compo=document.createElement('div');
            compo.setAttribute("id", "aDiv"+index);
            compo.style.position="relative";

            let img=document.createElement('img');
            img.src=filereader.result;
            img.style.maxWidth="100px";
            img.style.maxHeight="100px";
            // img.style.height="70px";
            document.getElementById('apre').appendChild(compo);
            document.getElementById('aDiv'+index).appendChild(img); 


            let btnn=document.createElement('i');
            btnn.setAttribute("class", "fa fa-times-circle");
            btnn.style.position="absolute";
            btnn.style.left="85px";
            btnn.onclick=function()
            {
                //aImage=removeFromList(aImage,data.aimage[index].id);
                answerImageRemove(index);
                console.log("id: "+index)
                this.parentElement.parentElement.removeChild(this.parentElement);

            }

            document.getElementById('aDiv'+index).appendChild(btnn); 

            // let img=document.createElement('img');
            // img.src=filereader.result;
            // img.style.width="70px";
            // img.style.height="70px";
            // document.getElementById('qpre').appendChild(img);

        }    
    }
    
}



function reset_images_q()
{
    document.getElementById("qFile").value="";
    document.getElementById("qpre").innerHTML="";
    let newQFile=new DataTransfer();
    qarr=newQFile;
}

function reset_images_a()
{
    document.getElementById("aFile").value="";
    document.getElementById("apre").innerHTML="";
    let newAFile=new DataTransfer();
    aarr=newAFile;
}



function questionImageRemove(index)
{
    let newQFile=new DataTransfer();
    let qfile=document.getElementById('qFile').files;
    console.log(qfile);
    for (let i = 0; i < qfile.length; i++) 
    {
        if (i!=index) {
            let file=qfile[i];
            newQFile.items.add(file);    
        }
        
    }
    qarr=newQFile;
    let myFileList=newQFile.files;
    document.getElementById("qFile").value=""
    document.getElementById("qFile").files=myFileList;
    previewimageq()
}

function answerImageRemove(index)
{
    let newAFile=new DataTransfer();
    let afile=document.getElementById('aFile').files;
    console.log(afile);
    for (let i = 0; i < afile.length; i++) 
    {
        if (i!=index) {
            let file=afile[i];
            newAFile.items.add(file);    
        }
        
    }
    aarr=newAFile;
    let myFileList=newAFile.files;
    document.getElementById("aFile").value=""
    document.getElementById("aFile").files=myFileList;
    previewimagea()
}