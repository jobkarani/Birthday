window.addEventListener("DOMContentLoaded", function(){
    console.log("hi");
    let name = "";
    let inputForm = document.querySelector("#inputForm");
    let maleGender = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleGender = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    inputForm.addEventListener("submit", function(){
        console.log("hey");
    
        let dateInput = document.querySelector("#dateInput").value;
        console.log(dateInput);

        let genderInput =  document.querySelector("#gender").value;
        console.log(genderInput);
        
    })
})

