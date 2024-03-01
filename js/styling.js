// function darkmode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }
//
// function toggleDarmode(){
//
// }


// Function to toggle dark mode
function toggleDarkMode() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}

function toggleBlueMode() {
    document.body.style.backgroundColor = "blue"
    document.body.style.color = "white"
}

function toggleWhiteMode() {
    document.body.style.backgroundColor = "White"
    document.body.style.color = "black"
}

// Event listener for the button click

function formCode(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const fName = document.getElementById('fname').value;
    const lName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;


    ///age
    let radioAge = document.getElementsByName("age");
    let selected = null;

    for (let i = 0; i < radioAge.length; i++) {
        if (radioAge[i].checked) {
            selected = radioAge[i].value;
            break;
        }
    }

    if (selected !== null) {
        switch (selected) {
            case "16-17":
                alert("Has a minimum wage of $4.81");
                break;
            case "18-20":
                alert("Has a minimum wage of $5.81");
                break;
            case 21 - 22:
                alert("Has a minimum wage of $6.81");
                break;
            case "21-22":
                alert("Has a minimum wage of $7.81");
                break;
            case "23+":
                alert("Has a minimum wage of $8.81");
                break;
            default:
                alert("no alert");
        }
    }

    // window.alert(`Hello ${fName} ${lName}! Your e-mail ${email} has been added to the mailing list`);
}

function hide() {
    const checkbox = document.getElementById("hide");

    // Check if the checkbox is checked
    if (checkbox.checked) {
        console.log("Checkbox is checked");
    } else {
        console.log("Checkbox is not checked");
    }
}

function blogPost(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Validation
    const title = document.getElementById('title');
    const content = document.getElementById('blogpost');
    const author = document.getElementById('author');

    console.log(title.value);

    // You can add your post creation logic here
}

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for DOMContentLoaded
    // You can initialize any code here that needs to run when the DOM is fully loaded
});




// function blogPost(event){
//
//     event.preventDefault(); // Prevent default form submission behavior
//
//    createPost.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default form submission
//
//         //validation
//         const title = document.getElementById('title').value;
//         const content = document.getElementById('blogpost').value;
//         const author = document.getElementById('author').value;
//
//         console.log(title + ' ' + content + ' ' + author)
//
//     //     //date
//     //     const currentDate = new Date();
//     //     const day = currentDate.getDate();
//     //     const month = currentDate.toLocaleString('default', { month: 'short' });
//     //     const year = currentDate.getFullYear();
//     //     const formattedDate = day + ' ' + month + ' ' + year;
//     //
//     //     //create a new post
//     //     const newPost = document.createElement('div');
//     //     newPost.className = 'post-box';
//     //     newPost.innerHTML = `
//     //         <h1 class="post-title" data-title="${title}" data-date="${formattedDate}" data-description="${content}">
//     //             ${title}
//     //         </h1><br>
//     //         <h2 class="category">${author}</h2><br>
//     //         <span class="post-date">${formattedDate}</span>
//     //         <p class="post-description">${content.substring(0, 100)}...</p>
//     //         <button class="delete-post" data-title="${title}">Delete</button>
//     //     `;
//     //
//     //     // Append the new post to some container, for example, a div with id 'postsContainer'
//     //     const postsContainer = document.getElementById('postsContainer');
//     //     postsContainer.appendChild(newPost);
//     // });
//
//
//     document.addEventListener('DOMContentLoaded', blogPost);
//
// });
