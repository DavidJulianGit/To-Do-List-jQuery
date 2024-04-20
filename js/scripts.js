
function newItem() {

   //1. Adding a new item to the list of items: 
   let li = $('<li class="list-group-item text-truncate align-items-center"></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   // check for existing input
   if (inputValue === '') {
      alert("You must write something!");
   }
   else {
      let list = $('#list');
      list.append(li);
   }

   //2. Crossing out an item from the list of items:
   function crossOut() {
      li.toggleClass('text-decoration-line-through');
   }

   // Add eventlistener to li
   li.on('dblclick', crossOut);

   //3(i). Adding the delete button "X" to li
   let crossOutButton = $('<button type="button" class="btn-close ms-auto" aria-label="Close"></button>');
   //crossOutButton.append(document.createTextNode("X"));
   li.append(crossOutButton);

   // Add eventlistener to crossOutButton
   crossOutButton.on("click", deleteListItem);

   //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem() {
      //li.addClass("delete")
      li.remove();
   }

   // 4. Making listIems reorder-able 
   $('#list').sortable();

   $('#input').val('');
}

$(document).ready(function () {
   $('#clear-input').click(function () {
      $('#input').val('');
   });
});

$(document).ready(function () {
   $('#input').keypress(function (event) {
      // Check if Enter key is pressed (key code 13)
      if (event.which === 13) {
         event.preventDefault();
         // Trigger click event of the Add button
         $('#button').click();
      }
   });
});