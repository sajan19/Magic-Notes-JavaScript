console.log("Magic Notes Application");
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    console.log("We clicked on add Notes");
    let addTxt = document.getElementById('addTxt');
   console.log("Text area value is : ",addTxt.value);

   let notes = localStorage.getItem("notes");
   if (notes == null){
    notesObj = [];
    // console.log("Notes Object is :", notesObj);
   }
   else{
    // notesObj.push(addTxt.value);
    notesObj= JSON.parse(notes)
   }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = '';
   showNotes();
    
});
// Function to show Notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null){
     notesObj = [];
     // console.log("Notes Object is :", notesObj);
    }
    else{
     // notesObj.push(addTxt.value);
     notesObj= JSON.parse(notes)
    }

    let html = "";
    notesObj.forEach(function(element, index) {

        html += `
        <div class="notesCard card my-2 mx-2" style="width: 18rem;">
            <!-- <img src="..." class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">Note ${index +1}</h5>
              <p class="card-text">${element}</p>
              <button id ="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;                       
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML =`Nothing to show! Use Add notes section to add Notes.`;
    }
              
}

// Function to Delete a Note

function deleteNote(index) {
    console.log("I am deleting a Note", index);
    let notes = localStorage.getItem("notes");
    if (notes == null){
     notesObj = [];
     // console.log("Notes Object is :", notesObj);
    }
    else{
     // notesObj.push(addTxt.value);
     notesObj= JSON.parse(notes)
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

//Function for Search

let search = document.getElementById('searchTxt');
search.addEventListener('input', function() {

    let inputVal = search.value.toLowerCase();
    console.log("Input event is fired", inputVal);
    let noteCards = document.getElementsByClassName('notesCard');
    Array.from(noteCards).forEach(function(element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        
    })
    
})

// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//     let inputVal = search.value.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('notesCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     })
// })