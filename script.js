
function Change(){
    let NameText = document.getElementById("ThankText");
    let NameBack = document.getElementById("ThankBack");
    let Old = document.getElementById("Old");
    let Name = document.getElementById("name").value;
    let Password = document.getElementById("password").value;

    let Psplit = Password.split("");
    let Plenght = Psplit.length;
    
    if(Name == "" & Password == ""){
        alert("Enter your information first");
    }else if(Name == ""){
        alert("Enter you name please");
    }else if(Password == ""){
        alert("Please enter your password");
    }else if(Plenght <= 5){
        alert("The password is too short");
    }else{
    NameBack.style.visibility = "visible";
    Old.style.visibility = "hidden";


    NameText.innerHTML += Name + "!";
    }

    

    





};