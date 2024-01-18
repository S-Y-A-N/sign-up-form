// DOM Variables

const pw = document.getElementById('pw')
const pwConfirm = document.getElementById('pw-confirm')
const errorMsg = document.getElementById('error')

// Event Listeners

pw.addEventListener('keyup', matchPassword)
pwConfirm.addEventListener('keyup', matchPassword)

// Functions

function matchPassword() {
    if (pw.value != pwConfirm.value) {
        errorMsg.textContent = '* Passwords do not match'
        return false;
    } else {
        errorMsg.textContent = '';
        return true;
    }
}

