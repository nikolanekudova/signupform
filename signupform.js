let password_first = document.getElementById('password_input');
let password_second = document.getElementById('password_again');
let invisible_text = document.getElementById('invisible_match');

console.log(invisible_text)

console.log(password_first)
console.log(password_second)


password_second.addEventListener("input", function(event) {
    let password_first_value = password_first.value;
    let password_second_value = event.target.value;

    if (password_first_value != password_second_value) {
        console.log("nerovná se");
        password_second.classList.add("not_match");
        invisible_text.classList.add("text_match");
    } else {
        console.log("rovná se");
        password_second.classList.add("match");
        invisible_text.classList.remove("text_match");
    }
})
