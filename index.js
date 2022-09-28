// function createParagraph() {
//     var para = document.createElement('p');
//     para.textContent = 'You clicked the button!';
//     document.body.appendChild(para);
//   }
   
//    var buttons = document.querySelectorAll('button');
   
//   for (var i = 0; i < buttons.length ; i++) {
//     buttons[i].addEventListener('click', createParagraph);
//   }

  function showhide(){
    //var x = document.getElementsByClassName("sidebar");
    var x = document.getElementById("aaaaaaa");
    var togglebutton = document.getElementById("togglebutton")
    if (x.style.display === "none") {
        x.style.display = "block";
        togglebutton.innerHTML ="hide";
    } else {
        x.style.display = "none";
        togglebutton.innerHTML = "show";
    }
  }
 function popUp() {
  var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
 }
