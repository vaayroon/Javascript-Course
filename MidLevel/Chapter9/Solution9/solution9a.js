/* Get form and form input submit elements */
const form = document.getElementById("testFormId");
// Get the submit button from form const
const submitButton = form.elements["submit"];

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the form input elements
    const firstName = form.elements["firstName"];
    const lastName = form.elements["lastName"];
    const email = form.elements["email"];

    if (!email.validity.valid)
    {
        
    }
    

    /* const phone = form.elements["phone"].value;
    const password = form.elements["password"].value;
    const confirmPassword = form.elements["confirmPassword"].value;
    const address = form.elements["address"].value;
    const city = form.elements["city"].value;
    const state = form.elements["state"].value;
    const zip = form.elements["zip"].value;
    const country = form.elements["country"].value;
    const terms = form.elements["terms"].checked;
    const newsletter = form.elements["newsletter"].checked; */
    
    // Create an object to store the form values
    const formData = {
        firstName,
        lastName,
        email,
        /* phone,
        password,
        confirmPassword,
        address,
        city,
        state,
        zip,
        country,
        terms,
        newsletter, */
    };
    
    console.log(formData);
});

// Create a function to validate the form inputs
function validateForm() {
    // Get the form input elements
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const email = form.elements["email"].value;
    
    // Create an object to store the form values
    const formData = {
        firstName,
        lastName,
        email,
    };

    
    // Create an array to store the error messages
    const errorMessages = [];
    
    // Check if the first name is empty
    if (firstName === "") {
        errorMessages.push("Please enter your first name.");
    }
    
    // Check if the last name is empty
    if (lastName === "") {
        errorMessages.push("Please enter your last name.");
    }
    
    // Check if the email is empty
    if (email === "") {
        errorMessages.push("Please enter your email.");
    }
}
