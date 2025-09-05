let mailButton = document.getElementById('mail-button');
let emailDiv = document.getElementById('block-element');

function showDiv(){
    emailDiv.style.display = 'block';
}

mailButton.addEventListener('click',showDiv);
// mobile view responsive
if (window.innerWidth <= 768){
    window.location.href = "mobile.html";
}




