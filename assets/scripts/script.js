function redirectTo(url) {
    window.open(url, '_blank');
}
var toggle = false;

function toggleMenu() {
    toggle = !toggle
    if(toggle) {
        document.getElementById('sidebar').classList.add('open')
    } else {
        document.getElementById('sidebar').classList.remove('open')
    }
}