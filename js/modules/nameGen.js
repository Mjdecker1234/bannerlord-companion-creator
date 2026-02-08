// Name Generation Module
import { getRandomName } from '../data/names.js';
import { updateState, getState } from '../app.js';

export function initName() {
    setupNameListeners();
    updateNameDisplay();
}

function setupNameListeners() {
    // Gender toggle
    const genderButtons = document.querySelectorAll('.gender-btn');
    genderButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const gender = btn.dataset.gender;
            selectGender(gender);
        });
    });
    
    // Randomize button
    const randomizeBtn = document.getElementById('randomize-name');
    if (randomizeBtn) {
        randomizeBtn.addEventListener('click', () => {
            generateRandomName();
        });
    }
    
    // Name input
    const nameInput = document.getElementById('companion-name');
    if (nameInput) {
        nameInput.addEventListener('input', (e) => {
            updateState({ name: e.target.value });
        });
    }
}

function selectGender(gender) {
    updateState({ gender });
    
    // Update UI
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.gender === gender) {
            btn.classList.add('active');
        }
    });
    
    // Generate new name with new gender
    generateRandomName();
}

function generateRandomName() {
    const state = getState();
    const culture = state.culture || 'vlandia';
    const gender = state.gender || 'male';
    
    const name = getRandomName(culture, gender);
    updateState({ name });
    updateNameDisplay();
}

function updateNameDisplay() {
    const nameInput = document.getElementById('companion-name');
    if (nameInput) {
        const state = getState();
        nameInput.value = state.name || '';
    }
}

export { generateRandomName, updateNameDisplay };
