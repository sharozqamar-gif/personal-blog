// ===== Dynamic Greeting Based on Time =====
const greeting = document.createElement('p');
const now = new Date();
const hour = now.getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning! Welcome to my blog 🌞";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon! Enjoy reading my blog 🌤";
} else {
    greeting.textContent = "Good Evening! Relax and read my blog 🌙";
}

// Insert greeting below header
const header = document.querySelector('header');
header.appendChild(greeting);


// ===== Expand/Collapse Blog Posts =====
const articles = document.querySelectorAll('article');

articles.forEach(article => {
    // Initially hide content after first paragraph
    const pTags = article.querySelectorAll('p');
    if (pTags.length > 1) {
        for (let i = 1; i < pTags.length; i++) {
            pTags[i].style.display = 'none';
        }

        // Add "Read More" button
        const btn = document.createElement('button');
        btn.textContent = 'Read More';
        btn.style.marginTop = '10px';
        btn.style.padding = '5px 10px';
        btn.style.cursor = 'pointer';
        btn.style.backgroundColor = '#4CAF50';
        btn.style.color = 'white';
        btn.style.border = 'none';
        btn.style.borderRadius = '5px';

        article.appendChild(btn);

        btn.addEventListener('click', () => {
            for (let i = 1; i < pTags.length; i++) {
                if (pTags[i].style.display === 'none') {
                    pTags[i].style.display = 'block';
                    btn.textContent = 'Show Less';
                } else {
                    pTags[i].style.display = 'none';
                    btn.textContent = 'Read More';
                }
            }
        });
    }
});
