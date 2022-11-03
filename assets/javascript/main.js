/*==VARIABLES==*/
let input = document.getElementById('input');
let listArr = [];

/*==KEYBOARD ACTIVATED EVENT==*/
input.addEventListener('keyup', (e) => {

    /*==EVENT ACTIVATED BY THE ENTER KEY==*/
    if (e.keyCode === 13) {
        if (input.value != '') {
            let inValue = e.target.value;
            listArr.push(inValue.replace(/\s/g, ''));
            let newTagLi = '';
            listArr.forEach((element, index) => {
                newTagLi += `<span># ${element}<i class="fa fa-times" onclick="ondelete(${index})"></i></span>`;
            });
            document.querySelector('.tags').innerHTML = newTagLi;
            input.value = '';
        } else {
            alert('Please input something')
        }
    }
})

/*==FUCNTION TO REMOVE TAG==*/
function ondelete(index) {
    listArr.splice(index, 1)
    let newTagLi = '';
    listArr.forEach((element, index) => {
        newTagLi += `<span># ${element}<i class="fa fa-times" onclick="ondelete(${index})"></i></span>`;
    });
    document.querySelector('.tags').innerHTML = newTagLi;
}