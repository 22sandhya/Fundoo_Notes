
$(function () {

   $("#email_error_message").hide();
   $("#firstName_error_message").hide();
   $("#lastName_error_message").hide();
   $("#password_error_message").hide();


   var error_email = false;
   var error_firstName = false;
   var error_lastName = false;
   var error_password = false;

   $("#form_email").focusout(function () {
      check_email();
   });

   $("#form_firstName").focusout(function () {
      check_firstName();
   });
   $("#form_lastName").focusout(function () {
      check_lastName();
   });

   $("#form_password").focusout(function () {
      check_password();
   });



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




   function check_firstName() {
      var pattern = /^[a-zA-Z]*$/;
      var firstName = $("#form_firstName").val();
      if (pattern.test(firstName) && firstName !== '') {
         $("#firstName_error_message").hide();
         $("#form_firstName").css("border-bottom", "2px solid #34F458");
      } else {
         $("#firstName_error_message").html("Should contain only Characters");
         //    $("#firstName_error_message").css("color","#00FF00")
         $("#firstName_error_message").show();
         $("#form_firstName").css("border-bottom", "2px solid #F90A0A");
         error_firstName = true;
      }
   }


   function check_lastName() {
      var pattern = /^[a-zA-Z]*$/;
      var lastName = $("#form_lastName").val()
      if (pattern.test(lastName) && lastName !== '') {
         $("#lastName_error_message").hide();
         $("#form_lastName").css("border-bottom", "2px solid #34F458");

      } else {
         $("#lastName_error_message").html("Should contain only Characters");
         $("#lastName_error_message").show();
         $("#form_lastName").css("border-bottom", "2px solid #F90A0A");
         error_firstName = true;
      }
   }

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



   $("#registration_form").submit(function () {
      error_email = false;
      error_firstName = false;
      error_lastName = false;
      error_password = false;

      check_email();
      check_firstName();
      check_lastName();
      check_password();



      if (error_email === false && error_firstName === false && error_lastName === false && error_password === false) {
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
function register(event) {
   // event.preventDefault()
   console.log("inside register function");
   let url = "http://localhost:8080/register";
   let objectReg = {};
   objectReg.email = $("#form_email").val();
   objectReg.firstName = $("#form_firstName").val();
   objectReg.lastName = $("#form_lastName").val()
   objectReg.password = $("#form_password").val();
   console.log(objectReg);

   if (objectReg) {
      $.ajax({
         url: url,
         contentType: "application/json; charset=utf-8",
         timeout: 6000,
         data: JSON.stringify(objectReg),
         type: "POST",
         success: function (result) {
            console.log(result);
           
            
         },
         error: function (msg) {

            console.log("error");
           console.log(msg);
             alert(msg);
         }
      });
   }
   return false;

}
