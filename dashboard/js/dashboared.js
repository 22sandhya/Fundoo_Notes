

console.log('hi there')
function myFunction() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('demo').style.display = "none";
}

let addBtn = document.getElementById('addBtn');
  addBtn.addEventListener("click", function(e){

  let url = "http://localhost:8080/users/saveNote/";
  let noteObj = {};


    noteObj.content = $("#addNote").val();
    noteObj.title = $("#addTitle").val();



    console.log(noteObj);
     function AjaxSucceeded(result){

     }

    if(noteObj){
      console.log("inside if");
        $.ajax({
            url: url,
            contentType:"application/json; charset=utf-8",
            timeout: 6000,
            data: JSON.stringify(noteObj),
            type:"POST",
            headers: { "token": localStorage.getItem('token') },
            success: function (result){
                // alert(result);
                console.log(result);
              
                
            },
             error: function (msg){
                // alert(msg);
                console.log(msg);

             }
        });
        e.preventDefault();
        return false;
    }


})
 
  
// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
//   let html = "";
//   notesObj.forEach(function (element, index) {
//     html += `
//     <div class="edit_hover_class d-flex justify-content-center py-2">
//       <form id="hello">
    
//         <div class="form-control form-input2 py-2">
//           <div class="container-f py-2">
//           <p id="${index}" onclick="editNote(this.id)" class="card-title">${element.title}</p>
//           <p id="${index}" onclick="editNote(this.id)" class="card-text">${element.note}</p>
    
//              <div class="container-y py-2" >
//               <i class="fa fa-bell"></i><i class="fa fa-user-plus px-4">
//               </i><i class="fa fa-file-image-o px-2"></i>
//               <i class="fa fa-archive px-4"></i>
//               <i id="${index}" onclick="deleteNote(this.id)" class="fa fa-trash-o px-2"></i>
//               <i id="${index}" onclick="deleteNote(this.id)" class=""
//              </div>
//           </div>  
//         </div> 
//       </form>
//     </div>
    
//     `;
//   })

//   let notesElm = document.getElementById('notes');
//   if (notesObj.length != 0) {
//     notesElm.innerHTML = html;
//   } else {
//     notesElm.innerHTML = "";

//   }


// }

// function deleteNote(index) {
//   console.log(index);

//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   }
//   else {
//     notesObj = JSON.parse(notes);
//   }

//   notesObj.splice(index, 1);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   showNotes();
// }





