// Logout button functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Implement logout logic here
    alert('Logout functionality will be implemented here');
});

// Manage Articles link functionality
document.getElementById('articlesLink').addEventListener('click', function() {
    // Load/manage articles page here
    loadArticlesPage();
});

// Manage Users link functionality
document.getElementById('usersLink').addEventListener('click', function() {
    // Load/manage users page here
    loadUsersPage();
});

function loadArticlesPage() {
    fetch("manage_articles.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading articles:", error));
}

function loadUsersPage() {
    fetch("manage_users.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error("Error loading users:", error));
}

document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const articlesLink = document.getElementById('articlesLink');
    const usersLink = document.getElementById('usersLink');

    articlesLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadArticles();
    });

    usersLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadUsers();
    });

    function loadArticles() {
        contentDiv.innerHTML = `
            <h2>Manage Articles</h2>
            <button onclick="createArticle()">Create New Article</button>
            <div id="articlesList">
                <!-- Articles will be listed here -->
            </div>
        `;

        // Load articles dynamically (example content)
        const articlesList = document.getElementById('articlesList');
        articlesList.innerHTML = `
            <ul>
                <li>Article 1 <button onclick="editArticle(1)">Edit</button> <button onclick="deleteArticle(1)">Delete</button></li>
                <li>Article 2 <button onclick="editArticle(2)">Edit</button> <button onclick="deleteArticle(2)">Delete</button></li>
            </ul>
        `;
    }

    function loadUsers() {
        contentDiv.innerHTML = `
            <h2>Manage Users</h2>
            <button onclick="createUser()">Create New User</button>
            <div id="usersList">
                <!-- Users will be listed here -->
            </div>
        `;

        // Load users dynamically (example content)
        const usersList = document.getElementById('usersList');
        usersList.innerHTML = `
            <ul>
                <li>User 1 <button onclick="editUser(1)">Edit</button> <button onclick="deleteUser(1)">Delete</button></li>
                <li>User 2 <button onclick="editUser(2)">Edit</button> <button onclick="deleteUser(2)">Delete</button></li>
            </ul>
        `;
    }

    window.createArticle = function() {
        alert('Create new article');
    };

    window.editArticle = function(id) {
        alert('Edit article ' + id);
    };

    window.deleteArticle = function(id) {
        alert('Delete article ' + id);
    };

    window.createUser = function() {
        alert('Create new user');
    };

    window.editUser = function(id) {
        alert('Edit user ' + id);
    };

    window.deleteUser = function(id) {
        alert('Delete user ' + id);
    };

    // Load default content (e.g., articles)
    loadArticles();
});
