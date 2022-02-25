
    $(function () {

       $("#email_error_message").hide();
       $("#password_error_message").hide();
      
       
       var error_email = false;
       var error_password = false;
      
      
       $("#form_email").focusout(function () {
          check_email();
       });
       $("#form_password").focusout(function () {
          check_password();
       });
       
      

       function check_password() {
          var password = $("#form_password").val().length;
          if (password < 8) {
             $("#password_error_message").html("Atleast 8 Characters");
             $("#password_error_message").show();
             $("#form_password").css("border-bottom", "2px solid #F90A0A");
             error_password = true;
          } else {
             $("#password_error_message").hide();
             $("#form_password").css("border-bottom", "2px solid #34F458");
          }
       }


       function check_email() {
          var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          var email = $("#form_email").val();
          if (pattern.test(email) && email !== '') {
             $("#email_error_message").hide();
             $("#form_email").css("border-bottom", "2px solid #34F458");
          } else {
             $("#email_error_message").html("Invalid Email");
             $("#email_error_message").show();
             $("#form_email").css("border-bottom", "2px solid #F90A0A");
             error_email = true;
          }
       }

       $("#registration_form").submit(function () {
          error_email = false;
          error_password = false;
      

          check_email();
          check_password();

     if (error_email === false && error_password === false) {
             alert("Registration Successfull");
             return register();
             // return true;
          } else {
             alert("Please Fill the form Correctly");
             return false;
          }

          return false;

       });
    });

    function login(event) {
         event.preventDefault()
         console.log("inside login function");
         let url = "http://localhost:8080/user_login";
         let objectReg = {};
         objectReg.email = $("#form_email").val();
         objectReg.password = $("#form_password").val();
         console.log(objectReg);  
         // function AjaxSucceeded(result){
         // }

         if (objectReg) {
            $.ajax({
               url: url,
               contentType: "application/json; charset=utf-8",
               // dataType: "json",
                timeout:6000,
               data: JSON.stringify(objectReg),
               type: "POST",
               success: function (result) {
                  //alert(result);
                  console.log(result);
                  //window.location.replace("../dashboard/Pages/dashboard.html")

               },

               error: function (msg) {
                  //alert(msg);
               
                  localStorage.setItem('token',msg);
                  console.log(msg);
               }
            });
         }
         return true;
         }
      
