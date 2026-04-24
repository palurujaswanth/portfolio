// Typing Effect
const text = "Hi, I'm Jaswanth 👋";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
typing();

// Form Message
function sendMsg() {
    document.getElementById("msg").innerText = "Message Sent Successfully!";
    return false;
}