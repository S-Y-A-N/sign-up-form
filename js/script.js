// DOM Variables

const form = document.querySelector('form')
const pw = document.getElementById('pw')
const pwConfirm = document.getElementById('pw-confirm')
const errorMsg = document.getElementById('error')

// Event Listeners

pw.addEventListener('input', matchPassword)
pwConfirm.addEventListener('input', matchPassword)
form.addEventListener('submit', matchPassword)

// Function

function matchPassword(event) {
    if (pw.value != pwConfirm.value) {
        errorMsg.textContent = '* Passwords do not match';
        event.preventDefault();
        return false;
    } else {
        errorMsg.textContent = '';
        return true;
    }
}

