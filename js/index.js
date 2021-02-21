// document.querySelector(".list__body-parent--item").style.color = "blue"
// console.log(li);

// // forEach(function () {
// //     li.addEventListener('click', function () { 
// //         style.color = "blue";
// //     });
// //  });

var input = document.querySelector(".list__header-search");
var btn = document.querySelector(".list__header-btn");
var li = document.querySelector(".list__body-parent--item");
var textBody = document.querySelector(".paragraph");

var clearField = function () {
    input.value = ''
}

btn.addEventListener("click", function () {
  var text = input.value;
  if (text === "") {
    console.log("no input");
  } else {
    var html = ` <li class="list__body-parent--item">
                    <span><input type="checkbox" class="list__body-parent--checkbox"></span>
                    <p class="paragraph">${text}</p>
                    <span class="deleteTodo">
                        <svg class="list__body-parent--icon">
                            <use xlink:href="img/sprite.svg#icon-star-outlined"></use>
                        </svg>
                    </span>
                </li>
`;
    document.querySelector("ul").insertAdjacentHTML("afterbegin", html);
    }
    clearField()
});


var deletetodo = document.querySelector(".deleteTodo");
deletetodo.addEventListener('click', function (e) {
    console.log(deletetodo.parentElement);
    this.parentElement.remove()
    e.stopImmediatePropagation(); 
    
 });

// textBody.addEventListener('toggle', function () {
//     isCrossed == false
//     if (isCrossed = false) {
//         textBody.style.textDecoration = 'line-through'
//     }
//     els
    
//  });
// var isCrossed = false
// textBody.addEventListener('toggle', function () {
//     if
//     textBody.style.textDecoration = "line-through";
// });
 
// input.addEventListener('keypress', function (e) {
//     if (e.which === 13) {
//         //clearField()
//     }
//  });

textBody.addEventListener('click', function () { 
    if (this.style.textDecoration = "none") {
         this.style.textDecoration = "line-through";
    } else {
        this.style.textDecoration = "none";
    }
   
});
