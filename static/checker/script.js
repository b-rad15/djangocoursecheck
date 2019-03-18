'use strict';

let recCount = 0;
let avoidSecCount = 0;
let pickSecCount = 0;
let emailTags = [];
let phoneTags = [];
let avoidTags = [];
let pickTags = [];


function toJavaScriptVar(variable) {
    return variable;
}

function f() {
    removePC('recipientsDiv', 'recipient0');
    removePC('recipientsDiv', 'button0');
}

function removePC(parent, child, type) {
    let p = document.getElementById(parent);
    let c = document.getElementById(child);
    p.removeChild(c);
    switch (type) {
        case "e":
            emailTags.splice(emailTags.indexOf(c),1);
            break;
        case "ph":
            phoneTags.splice(phoneTags.indexOf(c),1);
            break;
        case "a":
            avoidTags.splice(avoidTags.indexOf(c),1);
            break;
        case "p":
            pickTags.splice(pickTags.indexOf(c),1);
            break;
        default:
            console.log("It was Nothing")
            break;
    }
}

function addEmail() {
    let count = recCount;
    let emailsDiv = document.getElementById("emailsDiv");
    let input = document.createElement("input");
    input.id = "email" + count;
    input.type = "text";
    input.name = "email" + count;
    input.value = document.getElementById("email").value;
    document.getElementById("email").value = "";
    let button = document.createElement("button");
    button.id = "button" + count;
    button.type = "button";
    button.innerHTML = "&#10006;";
    button.onclick = function() {
        removePC('emailsDiv', 'email'+count);
        removePC('emailsDiv', 'button'+count);
        removePC('emailsDiv', 'br'+count);
    };
    emailsDiv.appendChild(input);
    emailTags.push(input);
    emailsDiv.appendChild(button);
    let br = document.createElement("br");
    br.id = "br" + count;
    emailsDiv.appendChild(br);
    recCount++;
}

function addPhone() {
    let count = recCount;
    let phonesDiv = document.getElementById("phonesDiv");
    let input = document.createElement("input");
    input.id = "phone" + count;
    input.type = "text";
    input.name = "phone" + count;
    input.value = document.getElementById("phone").value;
    document.getElementById("phone").value = "";
    let button = document.createElement("button");
    button.id = "button" + count;
    button.type = "button";
    button.innerHTML = "&#10006;";
    button.onclick = function() {
        removePC('phonesDiv', 'phone'+count);
        removePC('phonesDiv', 'button'+count);
        removePC('phonesDiv', 'br'+count);
    };
    phonesDiv.appendChild(input);
    phoneTags.push(input);
    phonesDiv.appendChild(button);
    let br = document.createElement("br");
    br.id = "br" + count;
    phonesDiv.appendChild(br);
    recCount++;
}

function addAvoidSec() {
    let count = avoidSecCount;
    let avoidSecsDiv = document.getElementById("avoidSecsDiv");
    let input = document.createElement("input");
    input.id = "avoidSec" + count;
    input.type = "text";
    input.name = "avoidSec" + count;
    input.value = document.getElementById("avoidSec").value;
    document.getElementById("avoidSec").value = "";
    let button = document.createElement("button");
    button.id = "button" + count;
    button.type = "button";
    button.innerHTML = "&#10006;";
    button.onclick = function() {
        try {
            removePC('avoidSecsDiv', 'avoidSec'+count);
        } catch (e) {
            console.log(e)
        }
        try {
            removePC('avoidSecsDiv', 'button'+count);
        } catch (e) {
            console.log(e)
        }
        try {
            removePC('avoidSecsDiv', 'br'+count);
        } catch (e) {
            console.log(e)
        }
    };
    avoidSecsDiv.appendChild(input);
    avoidTags.push(input);
    avoidSecsDiv.appendChild(button);
    let br = document.createElement("br");
    br.id = "br" + count;
    avoidSecsDiv.appendChild(br);
    avoidSecCount++;
}

function addPickSec() {
    let count = pickSecCount;
    let pickSecsDiv = document.getElementById("pickSecsDiv");
    let input = document.createElement("input");
    input.id = "pickSec" + count;
    input.type = "text";
    input.name = "pickSec" + count;
    input.value = document.getElementById("pickSec").value;
    document.getElementById("pickSec").value = "";
    let button = document.createElement("button");
    button.id = "button" + count;
    button.type = "button";
    button.innerHTML = "&#10006;";
    button.onclick = function() {
        removePC('pickSecsDiv', 'pickSec'+count);
        removePC('pickSecsDiv', 'button'+count);
        removePC('pickSecsDiv', 'br'+count);
    };
    pickSecsDiv.appendChild(input);
    pickTags.push(input);
    pickSecsDiv.appendChild(button);
    let br = document.createElement("br");
    br.id = "br" + count;
    pickSecsDiv.appendChild(br);
    pickSecCount++;
}

function submitForm(form) {
    let term = form.term.value;
    let course = form.course.value;
    console.log(term);
    console.log(course);
    let emails = [];
    emailTags.forEach(function(entry) {
        emails.push(entry.value)
    });
    emails.push(form.email.value);
    let phones = [];
    phoneTags.forEach(function(entry) {
        phones.push(entry.value)
    });
    phones.push(form.phone.value);
    let avoidSecs = [];
    avoidTags.forEach(function(entry) {
        avoidSecs.push(entry.value);
    });
    recipients.push(form.avoidSec.value);
    let pickSecs = [];
    pickTags.forEach(function(entry) {
        pickSecs.push(entry.value);
        console.log(entry.value);
    });
    recipients.push(form.pickSec.value);
    post("/runScript", {"term": term,
                        "course": course,
                        "emails": emails,
                        "phones": phones,
                        "avoidSecs": avoidSecs,
                        "pickSecs": pickSecs})
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);
            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

window.addEventListener('load', function () {

  console.log("Hello World!");

});