document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const queryType = document.querySelector('input[name="query-type"]:checked').value;
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked ? 'Yes' : 'No';

    displayFormData(firstName, lastName, email, queryType, message, consent);
}

function displayFormData(firstName, lastName, email, queryType, message, consent) {
    const formDataDiv = document.getElementById('form-data');
    formDataDiv.innerHTML = `
        <h2>Submitted Information</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Query Type:</strong> ${queryType}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Consent:</strong> ${consent}</p>
    `;
}
