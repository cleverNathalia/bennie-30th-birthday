const DUBLIN_TZ = 'Europe/Dublin';
const UNLOCK_HOUR = 18; // 6 PM Dublin time

let contentData = null;
let currentModalDoor = null;
let galleryIndices = {};

// Load content from JSON
async function loadContent() {
    try {
        const response = await fetch('content.json');
        contentData = await response.json();
        renderDoors();
        startCountdownUpdates();
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('doorsGrid').innerHTML = '<p>Error loading content. Please refresh.</p>';
    }
}

// Check if a door should be unlocked based on Dublin time
function isDoorUnlocked(doorIndex) {
    const dublinTime = new Date().toLocaleString('en-US', { timeZone: DUBLIN_TZ });
    const now = new Date(dublinTime);

    const doorDate = new Date(contentData.doors[doorIndex].date);
    doorDate.setHours(UNLOCK_HOUR, 0, 0, 0);

    return now >= doorDate;
}

// Get time until next door unlock
function getTimeUntilUnlock(doorIndex) {
    const dublinTime = new Date().toLocaleString('en-US', { timeZone: DUBLIN_TZ });
    const now = new Date(dublinTime);

    const doorDate = new Date(contentData.doors[doorIndex].date);
    doorDate.setHours(UNLOCK_HOUR, 0, 0, 0);

    const diff = doorDate - now;

    if (diff <= 0) return null;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
        return `Unlocks in ${hours}h ${minutes}m`;
    } else {
        return `Unlocks in ${minutes}m`;
    }
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Render all doors
function renderDoors() {
    const grid = document.getElementById('doorsGrid');
    grid.innerHTML = '';

    contentData.doors.forEach((door, index) => {
        const unlocked = isDoorUnlocked(index);
        const doorEl = createDoorElement(door, index, unlocked);
        grid.appendChild(doorEl);
    });
}

// Create a single door element
function createDoorElement(door, index, unlocked) {
    const doorDiv = document.createElement('div');
    doorDiv.className = 'door';

    const cardDiv = document.createElement('div');
    cardDiv.className = `door-card ${unlocked ? 'unlocked' : 'locked'}`;

    if (unlocked) {
        // Unlocked door - clickable
        cardDiv.style.cursor = 'pointer';
        cardDiv.addEventListener('click', () => openDoorModal(index));
        cardDiv.innerHTML = `
            <div class="door-number">Day ${door.day}</div>
            <div class="door-date">${formatDate(door.date)}</div>
            <div style="font-size: 2rem;">💝</div>
        `;
    } else {
        // Locked door - show countdown
        const countdown = getTimeUntilUnlock(index);
        cardDiv.innerHTML = `
            <div class="door-number">Day ${door.day}</div>
            <div class="door-date">${formatDate(door.date)}</div>
            <div class="padlock-icon">🔒</div>
            ${countdown ? `<div class="countdown">${countdown}</div>` : ''}
        `;
    }

    doorDiv.appendChild(cardDiv);
    return doorDiv;
}

// Open door in modal
function openDoorModal(doorIndex) {
    currentModalDoor = doorIndex;
    galleryIndices[doorIndex] = 0;

    const door = contentData.doors[doorIndex];

    const modalDiv = document.createElement('div');
    modalDiv.className = 'modal active';
    modalDiv.id = 'doorModal';

    let contentHTML = `
        <div class="modal-content">
            <button class="close-modal" onclick="closeDoorModal()">✕</button>
            <div class="door-number" style="text-align: center; margin-bottom: 1rem;">Day ${door.day}</div>
    `;

    if (door.text) {
        contentHTML += `<div class="door-text">${door.text}</div>`;
    }

    if (door.type === 'video' && door.videoLink) {
        contentHTML += `
            <div class="door-video">
                <iframe src="${door.videoLink}" allowfullscreen></iframe>
            </div>
        `;
    }

    if (door.type === 'gallery' && door.photos && door.photos.length > 0) {
        contentHTML += createGalleryHTML(doorIndex, door.photos);
    }

    if (door.type === 'text') {
        // Text-only content (like "Thirty things")
        if (Array.isArray(door.items)) {
            contentHTML += '<div style="text-align: left;">';
            door.items.forEach((item, i) => {
                contentHTML += `<p style="margin-bottom: 0.75rem;"><strong>${i + 1}.</strong> ${item}</p>`;
            });
            contentHTML += '</div>';
        }
    }

    contentHTML += `</div>`;

    modalDiv.innerHTML = contentHTML;
    modalDiv.addEventListener('click', (e) => {
        if (e.target === modalDiv) {
            closeDoorModal();
        }
    });

    document.body.appendChild(modalDiv);

    // Add animation
    const modalContent = modalDiv.querySelector('.modal-content');
    modalContent.classList.add('unlock-animation');
}

// Create gallery HTML
function createGalleryHTML(doorIndex, photos) {
    let html = `
        <div class="door-gallery">
            <div class="gallery-container">
                <div class="gallery-nav">
                    <button class="gallery-btn" onclick="previousPhoto(${doorIndex})">❮</button>
                    <button class="gallery-btn" onclick="nextPhoto(${doorIndex})">❯</button>
                </div>
                <img class="gallery-image" src="${photos[0].url}" alt="Gallery photo" id="galleryImage-${doorIndex}">
                <div class="gallery-counter"><span id="galleryCounter-${doorIndex}">1</span> / ${photos.length}</div>
            </div>
            <div class="gallery-caption" id="galleryCaption-${doorIndex}">${photos[0].caption || ''}</div>
        </div>
    `;
    return html;
}

// Navigate gallery
function previousPhoto(doorIndex) {
    if (!galleryIndices[doorIndex]) galleryIndices[doorIndex] = 0;
    const photos = contentData.doors[doorIndex].photos;
    galleryIndices[doorIndex] = (galleryIndices[doorIndex] - 1 + photos.length) % photos.length;
    updateGalleryDisplay(doorIndex);
}

function nextPhoto(doorIndex) {
    if (!galleryIndices[doorIndex]) galleryIndices[doorIndex] = 0;
    const photos = contentData.doors[doorIndex].photos;
    galleryIndices[doorIndex] = (galleryIndices[doorIndex] + 1) % photos.length;
    updateGalleryDisplay(doorIndex);
}

function updateGalleryDisplay(doorIndex) {
    const photos = contentData.doors[doorIndex].photos;
    const index = galleryIndices[doorIndex];
    const photo = photos[index];

    const imgEl = document.getElementById(`galleryImage-${doorIndex}`);
    const counterEl = document.getElementById(`galleryCounter-${doorIndex}`);
    const captionEl = document.getElementById(`galleryCaption-${doorIndex}`);

    if (imgEl) imgEl.src = photo.url;
    if (counterEl) counterEl.textContent = index + 1;
    if (captionEl) captionEl.textContent = photo.caption || '';
}

// Start auto-play slideshow
function startAutoPlayGallery(doorIndex) {
    const photos = contentData.doors[doorIndex].photos;
    if (!photos || photos.length <= 1) return;

    setInterval(() => {
        if (currentModalDoor === doorIndex) {
            nextPhoto(doorIndex);
        }
    }, 3000);
}

// Close modal
function closeDoorModal() {
    const modal = document.getElementById('doorModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            currentModalDoor = null;
        }, 300);
    }
}

// Update countdowns every minute
function startCountdownUpdates() {
    updateCountdowns();
    setInterval(updateCountdowns, 60000); // Update every minute
}

function updateCountdowns() {
    if (!contentData) return;

    contentData.doors.forEach((door, index) => {
        const unlocked = isDoorUnlocked(index);
        const doorCards = document.querySelectorAll('.door-card');

        if (doorCards[index]) {
            if (unlocked && doorCards[index].classList.contains('locked')) {
                // Door just unlocked - re-render it
                renderDoors();
            } else if (!unlocked) {
                // Update countdown text
                const countdown = getTimeUntilUnlock(index);
                const countdownEl = doorCards[index].querySelector('.countdown');
                if (countdownEl && countdown) {
                    countdownEl.textContent = countdown;
                }
            }
        }
    });
}

// Handle keyboard close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('doorModal')) {
        closeDoorModal();
    }
});

// Load content on page load
window.addEventListener('load', loadContent);
