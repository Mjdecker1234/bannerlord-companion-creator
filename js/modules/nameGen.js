// Name Generation Module
import { getRandomName } from '../data/names.js';
import { updateState, getState } from '../app.js';

export function initName() {
    setupNameListeners();
    updateNameDisplay();
    updateGenderDisplay();
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

function randomizeGender() {
    const genders = ['male', 'female'];
    const randomGender = genders[Math.floor(Math.random() * genders.length)];
    selectGender(randomGender);
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

function updateGenderDisplay() {
    const state = getState();
    const currentGender = state.gender || 'male';
    
    // Update UI buttons
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.gender === currentGender) {
            btn.classList.add('active');
        }
    });
}

export { generateRandomName, updateNameDisplay, randomizeGender };
