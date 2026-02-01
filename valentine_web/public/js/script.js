const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over.."
];

const answers_yes = "Yes";

let i = 0;
let size = 50;
let clicks = 0;

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');

no_button.innerHTML = answers_no[0];
yes_button.innerHTML = answers_yes;

no_button.addEventListener('click', () => {
    // Change banner source on first click
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        // This switches the image from mid.gif to please.png
        banner.src = "./public/images/please.png";
        refreshBanner();
    }
    clicks++;

    // Increase button height and width gradually
    const sizes = [40, 50, 30, 35, 45];
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random];
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    let total = answers_no.length;

    // Logic to cycle through messages
    if (i < total - 1) {
        no_button.innerHTML = answers_no[i];
        i++;
    } else {
        alert(answers_no[i]);
        i = 0;
        no_button.innerHTML = answers_no[0];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    banner.src = "./public/images/yes.gif";
    refreshBanner();

    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";

    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}