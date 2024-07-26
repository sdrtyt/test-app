document.addEventListener('DOMContentLoaded', (event) => {
    filterShopsOnLoad();
});

function filterShopsOnLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        document.getElementById('categoryFilter').value = category;
        filterShops();
    }
}

function filterShops() {
    const filter = document.getElementById('categoryFilter').value;
    const categories = document.querySelectorAll('.shop-category');

    categories.forEach(category => {
        if (filter === 'all') {
            category.style.display = 'block';
        } else {
            if (category.id === filter) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        }
    });
}

function searchShops() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const categories = document.querySelectorAll('.shop-category');
    categories.forEach(category => {
        const shops = category.querySelectorAll('li');
        let hasVisibleShops = false;
        shops.forEach(shop => {
            const text = shop.textContent.toLowerCase();
            if (text.includes(input)) {
                shop.style.display = 'list-item';
                hasVisibleShops = true;
            } else {
                shop.style.display = 'none';
            }
        });
        if (hasVisibleShops) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });
}
