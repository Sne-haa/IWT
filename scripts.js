document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const contactList = document.getElementById("contact-list");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        addContact(name, email, phone);
        form.reset();
    });

    contactList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-button")) {
            const id = event.target.getAttribute("data-contact-id");
            deleteContact(id);
        }
    });

    function addContact(name, email, phone) {
        const contact = { name, email, phone };

        fetch("add_contact.php", {
            method: "POST",
            body: JSON.stringify(contact),
        })
        .then(response => response.json())
        .then(data => {
            displayContacts();
        });
    }

    function displayContacts() {
        fetch("get_contacts.php")
        .then(response => response.json())
        .then(data => {
            const contactList = document.getElementById("contact-list");
            contactList.innerHTML = ""; // Clear existing list
    
            data.forEach(contact => {
                const contactItem = document.createElement("div");
                contactItem.innerHTML = `
                    <strong>${contact.name}</strong><br>
                    Email: ${contact.email}<br>
                    Phone: ${contact.phone}<br>
                    <button onclick="deleteContact(${contact.id})">Delete</button>
                `;
                contactList.appendChild(contactItem);
            });
        });
    }

    function deleteContact(id) {
        fetch(`delete_contact.php?id=${id}`, {
            method: "DELETE",
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                console.error("Error deleting contact:", data.error);
            } else {
                displayContacts(); // Refresh the contact list
            }
        });
    }

    displayContacts();
});
