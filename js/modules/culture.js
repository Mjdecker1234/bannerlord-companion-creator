// Culture Selection Module
import { cultures } from '../data/cultures.js';
import { updateState, getState } from '../app.js';

export function initCulture() {
    renderCultureGrid();
    setupCultureListeners();
}

function renderCultureGrid() {
    const grid = document.getElementById('culture-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.values(cultures).forEach(culture => {
        const card = createCultureCard(culture);
        grid.appendChild(card);
    });
}

function createCultureCard(culture) {
    const card = document.createElement('div');
    card.className = 'culture-card';
    card.dataset.culture = culture.id;
    
    const state = getState();
    if (state.culture === culture.id) {
        card.classList.add('selected');
    }
    
    card.innerHTML = `
        <div class="culture-icon">${culture.icon}</div>
        <h3 class="culture-name">${culture.name}</h3>
        <p class="culture-desc">${culture.description}</p>
        <div class="culture-bonus">${culture.bonus}</div>
    `;
    
    return card;
}

function setupCultureListeners() {
    const grid = document.getElementById('culture-grid');
    if (!grid) return;
    
    grid.addEventListener('click', (e) => {
        const card = e.target.closest('.culture-card');
        if (!card) return;
        
        const cultureId = card.dataset.culture;
        selectCulture(cultureId);
    });
}

function selectCulture(cultureId) {
    // Update state
    updateState({ culture: cultureId });
    
    // Update UI
    document.querySelectorAll('.culture-card').forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.culture === cultureId) {
            card.classList.add('selected');
        }
    });
}

export function getCulture() {
    return getState().culture;
}
