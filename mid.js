// Mobile menu toggle
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = 'none';
});

// Dynamically create featured performers section
const performersData = [
    { name: "Band A", description: "Rock and Roll Legends" },
    { name: "Band B", description: "Indie Rockers" },
    { name: "Band C", description: "Jazz Fusion Masters" },
    { name: "Band D", description: "Pop Stars" }
];

const performersContainer = document.getElementById('performers');

performersData.forEach(performer => {
    const performerDiv = document.createElement('div');
    performerDiv.className = 'performer';
    performerDiv.innerHTML = `<h3>${performer.name}</h3><p>${performer.description}</p>`;
    performersContainer.appendChild(performerDiv);
});
