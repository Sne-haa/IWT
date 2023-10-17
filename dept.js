// Function to handle form submissions
function handleSubmitForm(formId, url) {
    const form = document.getElementById(formId);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(formDataObject),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                // Handle the response data (e.g., show a success message, redirect, etc.)
                console.log(data);
            } else {
                // Handle errors (e.g., display an error message)
                console.error("Form submission failed.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });
}

// Usage: Handle login and registration form submissions
handleSubmitForm("login-form", "login.php");
handleSubmitForm("register-form", "register.php");
