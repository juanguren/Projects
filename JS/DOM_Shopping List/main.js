
// Instatiate FORM elements
const item = document.querySelector("#item-submit");
const myForm = document.querySelector("#addForm");
const ul = document.querySelector("#items");
// Create array for storing items
var arrayList = [];

// ADDING ITEMS TO THE LIST
myForm.addEventListener("submit", addItem);

function addItem(b){
    b.preventDefault();
    
    // Prevents white space from being added to the DOM input
    if(item.value === ""){
        console.log("null"); 
    } else if (item.value === " " ){
        console.log("null");
    } else{
        // Create text node coming from the text input
        const listText = document.createTextNode(item.value);
        // Create <li> element
        newLi = document.createElement("li");
        // Add new Items to the list
        newLi.classList.add("list-group-item");
        newLi.appendChild(listText);
        // NOTE Adding values
        for(let i = 0; i<arrayList.length; i++){
            newLi.value = i;
        }
        
        // Appends newly created <li> (with its text) to the <ul>
        ul.appendChild(newLi);
        // Create and append buttons to each added items
        newB = document.createElement("button");
        newB.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
        newB.innerText = "X";
        newLi.appendChild(newB);

        // Store text input in array
        arrayList.push(item.value);
        console.log(arrayList);
        // Clears text field after submitting
        item.value = "";
    }
}

// Instatiate delete button
const b_delete = document.querySelector("#button");

// Event for deleting items
ul.addEventListener("click", removeItem);

function removeItem(c){
    c.preventDefault();
    if (c.target.classList.contains("delete")){
        if (confirm("Are you sure you want to delete it?")) {
            var li = c.target.parentElement;            
            ul.removeChild(li);   
        } // NOTE Loop para eliminar también del arreglo
         for(let i = 0; i<arrayList.length; i++){
            if (arrayList.indexOf(arrayList[i]) === newLi.value) {
                console.log(arrayList.indexOf(arrayList[i]));
                console.log(newLi.value);
                
            }
        }
    }
}

// Instatiate filter input
const search = document.querySelector("#filter");

// Event for filtering added items
search.addEventListener("keyup", searchItem);


function searchItem(x) {
    
    var text = x.target.value.toLowerCase();
    
    // Grab li´s within the UL
    var items = ul.querySelectorAll("li");    
    // Converts li´s to array, given that everything is shown as one html component
    Array.from(items).forEach(function(item) {
        // Grab items exact content. Given that the previous array outputs x ammount of html components (x = ammount of items)
        var itemName = item.firstChild.textContent; // textContent grabs the entire, specific content of the child. --> innerText doesn´t work
        // Compares the typed input with the items exact name and index within the array
        if(itemName.toLowerCase().indexOf(text) != -1){ /* -1 outputs apparently every time there´s no match, so the != implies we´re
            looking for the opposite. WHEN THERE IS ACTUALLY A MATCH. Thus that element occupies the whole section as a block */
            item.style.display = "block";
        } else{ // while there´s no match, unrelated items are kept hidden
            item.style.display = "none";            
        }
        
    })
    
    
}
