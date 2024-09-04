const modal = document.querySelector('.modal')
const submitBtn = document.querySelector('.submit-btn')
const form = document.querySelector('#form')
const inputs = document.querySelectorAll('.input')
const radioBtns = document.querySelectorAll('.radio')
const check = document.querySelector('.checkbox')
const text = document.querySelector('.text')

form.onsubmit = (e) => {
    e.preventDefault()
    // Inputs validation
    inputs.forEach(input => {
        const errorPhar = input.parentNode.querySelector('.error')
        if(input.value === ''){
            input.classList.add('input-error')
            errorPhar.style.display = 'block'
        } else {
            if(input.id === 'email'){
                // console.log(emailErrorPhar)
                if(!validateEmail(input.value)){
                    const emailErrorPhar = input.parentNode.querySelector('.email-error')
                    console.log(emailErrorPhar)
                    input.classList.add('input-error')
                    emailErrorPhar.style.display = 'block'
                }else{
                    const emailErrorPhar = input.parentNode.querySelector('.email-error')
                    console.log(emailErrorPhar)
                    input.classList.remove('input-error')
                    emailErrorPhar.style.display = 'none'
                }
            }
            else{
                input.classList.remove('input-error')
                errorPhar.style.display = 'none'
            }
        }
    })
    // Radios validation
    const radioError = radioBtns[0].parentNode.parentNode.parentNode.parentNode.querySelector('.error')
    const isAnyChecked = Array.from(radioBtns).some(radio => radio.checked);

    if (isAnyChecked) {
        // console.log('Jedno od radio dugmadi je označeno.');
        radioError.style.display = 'none'
    } else {
        // console.log('Nijedno radio dugme nije označeno.');
        radioError.style.display = 'block'
    }
    // Textbox
    const textErrorPhar = text.parentNode.querySelector('.text-error')
    if(text.value === ''){
        text.classList.add('input-error')
        textErrorPhar.style.display = 'block'
    }else{
        textErrorPhar.style.display = 'none'
    }
    // Checkbox
    const checkErrorPhar = check.parentNode.parentNode.parentNode.querySelector('.check-error')
    if(check.checked){
        checkErrorPhar.style.display = 'none'
        
    }else{
        checkErrorPhar.style.display = 'block'

    }
    // Open modal
    const anyInputEmpty = Array.from(inputs).some(input => input.value = '');


    if(isAnyChecked && text.value !== '' && check.checked && anyInputEmpty === false){
        inputs.forEach(input => input.value = '')
        radioBtns.forEach(radio => radio.checked = false)
        text.value = ''
        check.checked = false
        openModal()
    }
}

// Email validator
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }

radioBtns.forEach(radio => {
    radio.onclick = () => {
        radioBtns.forEach(r => {
            r.parentNode.parentNode.classList.remove('active-radio')
        })
        radio.parentNode.parentNode.classList.add('active-radio')
    }
});

const openModal = (e) => {
    modal.showModal()
}
// Close Modal
// modalClose.onclick = () => {
//     modal.close()
// }

if(modal){

    modal.onclick = (e) => {

        const dialogDimensions = modal.getBoundingClientRect()
        if(
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) { modal.close()}
    }
}