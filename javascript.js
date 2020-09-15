
document.getElementById("login").onclick = function()
    {
        swal("Member Login!", "เข้าสู่ระบบ", "success" )
        .then(function(){
            window.location.href = "page2.html";
        });
      }