var API_URL = ur+"testr-api/engine";
// var QUESTIONS_URL = API_URL+"/subjects/";

function getAllTags(){

    $.ajax({
        url:API_URL+"/tags/?format=datatables" ,
        type:'GET',
        contentType: 'application/json;',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            console.log(data);
            var mydata=data.data;
                $('#example1').DataTable( {
                    data: mydata,
                    //ajax: QUESTIONS_URL+"/?format=datatables",
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'subject' },
                        // 
                        
                    ]
                    // "columnDefs": [
                    //     { "width": "20%", "targets": 0 }
                    //   ]
            } );
        }

    });
}

function getAllDiscipline(){
    $.ajax({
        url:API_URL+"/disciplines/?format=datatables" ,
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            var mydata=data.data;
                $('#example2').DataTable( {
                    data: mydata,
                    //ajax: QUESTIONS_URL+"?format=datatables",
                    columns: [
                        { data: 'id' },
                        { data: 'title' },
                        // 
                        
                    ]
                    // "columnDefs": [
                    //     { "width": "20%", "targets": 0 }
                    //   ]
            } );
        }

    });
}

function getAllSubjects(){

    $.ajax({
        url:API_URL+"/subjects/?format=datatables",
        type:'GET',
        headers: {"Authorization": "Bearer "+localStorage.getItem("access")},
        success:function(data)
        {
            var mydata=data.data;
                $('#example3').DataTable( {
                    data: mydata,
                    // ajax: QUESTIONS_URL+"?format=datatables",
                    columns: [
                        { data: 'id' },
                        { data: 'title' },
                        // 
                        
                    ]
                    // "columnDefs": [
                    //     { "width": "20%", "targets": 0 }
                    //   ]
            } );
        }

    });
}