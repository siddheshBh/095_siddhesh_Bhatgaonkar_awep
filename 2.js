function validate() {
    let username = document.querySelector("#usrId").value

    let password = document.querySelector("#usrPswrd").value

    if (username === "") {

        document.querySelector("#Invalidusr").style.visibility = "visible";
        console.log("Invalid");
    }
    else {
        document.querySelector("#validusr").style.visibility = "visible";
        // console.log("Valid");
    }

    if (password === "") {
        document.querySelector("#Invalidpswd").style.visibility = "visible";
        console.log("Invalid");
    }
    else {
        document.querySelector("#validpswd").style.visibility = "visible";
        console.log("Valid");
    }



    const struct = document.querySelector("#cmntSection").cloneNode(true);
    // struct.parentElement.parentElement.children = username;
    struct.style.visibility = "visible";
    struct.children[0].innerHTML = username;
    struct.children[1].innerHTML = password;

    const section = document.querySelector("#commentArea")
    section.insertBefore(struct, section.firstChild);


    document.querySelector("#usrId").value = "";
    document.querySelector("#usrPswrd").value = "";

}