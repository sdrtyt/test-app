document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('loginBtn').addEventListener('click', function() {
        document.getElementById('loginForm').classList.toggle('hidden');
    });

    function loadContent(page) {
        const content = document.getElementById('content');
        fetch(page)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                content.innerHTML = '<p>Error loading content.</p>';
                console.error('Error loading content:', error);
            });
    }

    window.loadContent = loadContent;
});

function enter() {
    alert('Login function not implemented yet.');
}

function clearInputs() {
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
}
