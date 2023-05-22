$("#submit").click(function(){

    var name = $ ("#name").val();
    var email = $ ("#email").val();
    var message = $ ("#message").val();
    var Schedule = $ ("#Schedule").val();
    var Address = $ ("#Address").val();
    var Mobile = $ ("#Mobile").val();

    if(name == '' || email == '' || message == ''|| Schedule == ''|| Address == ''|| Mobile == ''){
        
        swal({
            title: "Field Empty!",
            text: "Please check the missing fields!",
            icon: "warning",
            button: "Ok",
          });
          
          
    }else{
        swal({
            title: "Successfully submitted!",
            icon: "success",
            button: "Yess!!",
          });
    }
})
function myFunction() {
    document.getElementById("email").removeAttribute("required"); 
    document.getElementById("name").removeAttribute("required"); 
    document.getElementById("message").removeAttribute("required"); 
    document.getElementById("Schedule").removeAttribute("required"); 
    document.getElementById("Address").removeAttribute("required"); 
    document.getElementById("Mobile").removeAttribute("required"); 
  };