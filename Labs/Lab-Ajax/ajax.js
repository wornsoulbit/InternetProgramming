// Write a script that places an AJAX call and processes the response here.

//------------------------------
// Functions to create:
//  1) callAjax(): it must be called upon clicking 'Call AJAX' button. It 
//                creates and configures an AJAX request that invokes get_emails.php
// 
//  2) processResponse(): called  by the XHR object you created in 1).
//                        It receives a comma separated list of emails.
//                        It must parse the list (using the split function) and 
//                       display them separately () on the web page (index.html). 
//                       
//                        
//          

/**
 * Creates an HTTP request with a specified URL.
 */
function callAjax() {
    ajaxObj = new XMLHttpRequest();
    ajaxObj.open("GET", "emails.php", true);
    ajaxObj.onreadystatechange = processResponse;
    ajaxObj.send();
}

/**
 * Process the received HTTP response.
 */
function processResponse() {
    if (ajaxObj.readyState == XMLHttpRequest.DONE) {
        let stringResponse = ajaxObj.responseText;
        stringResponse = stringResponse.split(",");
        console.log(stringResponse);
        var ajaxResponse = document.getElementById("ajax_response");

        for (var i = 0; i < stringResponse.length; i++) {
            document.getElementById("ajax_response").innerHTML += 
                "<li>" + stringResponse[i] + "</li>";
        }
    }
}