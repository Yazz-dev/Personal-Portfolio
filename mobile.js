let bar = document.getElementById("bar");
let mobilediv = document.getElementById('mobileDiv');

function toggleMenu(){
    if (mobilediv.style.display === 'block'){
        mobilediv.style.display = 'none'
    }
    else{
        mobilediv.style.display = 'block'
    }

}

bar.addEventListener('click',toggleMenu);

// form div show

let connectButton = document.getElementById('connect');
let form = document.getElementById('form');

function showForm(){
    if(form.style.display === 'block'){
        form.style.display = 'none';
    }
    else{
        form.style.display = 'block';
    }
}
connectButton.addEventListener('click',showForm);