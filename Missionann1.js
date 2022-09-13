let eye=document.getElementById("eye");
let password=document.getElementById("password");

eye.addEventListener("click",function(){
if (showPassword==false){
password.setAttribute("type","text");
eye.classList.add("fa-thin fa-eye-slash");
eye.classList.remove("fa-regular fa-eye");
showPassword=true;
}else{
    password.setAttribute("type","password");
eye.classList.remove("fa-thin fa-eye-slash");
eye.classList.add("fa-regular fa-eye");
showPassword=false;
}
}
);

const favColors=["Majenta","Blue","White","Black"];

for(let i=0; i<favColors.length; i++){
    console.log(favColors[i]);
}


