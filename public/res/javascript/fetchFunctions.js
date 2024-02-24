document.addEventListener("DOMContentLoaded", function() {
    let deleteForm = document.querySelector("#delete-form");
    let createForm = document.querySelector("#create-form");
    let readForm = document.querySelector("#read-form");
    let updateForm = document.querySelector("#update-form");
    let loaderBg = document.querySelector('.loader_parent');
    let loader = document.querySelector(".loader");
    let message = document.querySelector(".modal-message");
    let text = document.querySelector(".message-text");
    let messageBtn = document.querySelector(".message-btn");

    // create
    createForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(createForm);
        fetch('/api/users/add', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            text.innerHTML = "User Account Created";
            loaderBg.style.display = "block";
            message.style.display = "block";
            console.log(data);
        })
        .catch((error) => {
            text.innerHTML = "An unexpected error occurred while trying to add a new Worker, try again.";
            loaderBg.style.display = "block";
            message.style.display = "block";
            console.log("Error:", error);
        });
    });

    // delete
    deleteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const deleteUserId = document.getElementById("deleteid").value;
        fetch(`/api/users/delete/${deleteUserId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            text.innerHTML = "User Account Deleted successfully.";
            loaderBg.style.display = "block";
            message.style.display = "block";
            console.log(data);
        })
        .catch((error) => {
            text.innerHTML = "An unexpected error occurred while trying to delete this worker.";
            loaderBg.style.display = "block";
            message.style.display = "block";
            console.log("Error:", error);
        });
    });

    // Read
    readForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userId = document.getElementById("readid").value;
        fetch(`/api/users/read/${userId}`)
            .then(response => response.json())
            .then(data => {
                // view layout
                let userId = document.querySelector(".user-id");
                let userName = document.querySelector(".name");
                let userEmail = document.querySelector(".email");
                let referral = document.querySelector(".brought-by");
                let view_layout = document.querySelector(".read-view");
                console.log(data);
            })
            .catch((error) => {
                text.innerHTML = "An error occurred while trying to read this worker details.";
                loaderBg.style.display = "block";
                message.style.display = "block";
                console.log("Error:", error);
            });
    });

    // update form
    updateForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(updateForm);
        const updateUserId = formData.get('updateid');
        fetch(`/api/users/update/${updateUserId}`, {
            method: 'PUT',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            text.innerHTML = "User Profile Updated successfully.";
            loaderBg.style.display = "block";
            message.style.display = "block";
            console.log(data);
        })
        .catch((error) => {
            text.innerHTML = "An error occurred while trying to update this user.";
            loaderBg.style.display = "block";
            message.style.display = "block";
            console.log("Error:", error);
        });
    });

    messageBtn.addEventListener("click", () => {
        loaderBg.style.display = "none";
    });
});
