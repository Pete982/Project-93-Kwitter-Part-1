function addUser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("username", username);
    window.location="Chatting.html";
}