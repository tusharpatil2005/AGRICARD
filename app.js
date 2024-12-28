// app.js

// Register user with fingerprint
function registerFingerprint() {
    const username = document.getElementById('username').value;
    const fingerprintData = "sampleFingerprintData";  // Replace with actual fingerprint data

    // Send registration data to the backend
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fingerprintData }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
}

// Verify fingerprint during login
function verifyFingerprint() {
    const username = document.getElementById('username').value;
    const fingerprintData = "sampleFingerprintData";  // Replace with actual fingerprint data

    // Send login data to the backend
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fingerprintData }),
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
}
