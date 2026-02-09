// Appearance Module
import { updateState, getState } from '../app.js';

export function initAppearance() {
    renderAppearance();
    setupAppearanceListeners();
}

function renderAppearance() {
    const container = document.getElementById('appearance-container');
    if (!container) return;
    
    const state = getState();
    
    container.innerHTML = `
        <div class="appearance-item">
            <div class="appearance-label">
                <span class="appearance-name">Age</span>
                <span class="appearance-value" id="age-value">${state.appearance.age}</span>
            </div>
            <input type="range" class="appearance-slider" id="age-slider" min="20" max="70" value="${state.appearance.age}" step="1" />
        </div>
        
        <div class="appearance-item">
            <div class="appearance-label">
                <span class="appearance-name">Weight</span>
                <span class="appearance-value" id="weight-value">${state.appearance.weight}</span>
            </div>
            <input type="range" class="appearance-slider" id="weight-slider" min="0" max="100" value="${state.appearance.weight}" step="1" />
            <p class="attribute-desc">0 = Thin, 50 = Average, 100 = Heavy</p>
        </div>
        
        <div class="appearance-item">
            <div class="appearance-label">
                <span class="appearance-name">Build</span>
                <span class="appearance-value" id="build-value">${state.appearance.build}</span>
            </div>
            <input type="range" class="appearance-slider" id="build-slider" min="0" max="100" value="${state.appearance.build}" step="1" />
            <p class="attribute-desc">0 = Slender, 50 = Average, 100 = Muscular</p>
        </div>
    `;
}

function setupAppearanceListeners() {
    const ageSlider = document.getElementById('age-slider');
    const weightSlider = document.getElementById('weight-slider');
    const buildSlider = document.getElementById('build-slider');
    
    if (ageSlider) {
        ageSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            updateAppearance('age', value);
            document.getElementById('age-value').textContent = value;
        });
    }
    
    if (weightSlider) {
        weightSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            updateAppearance('weight', value);
            document.getElementById('weight-value').textContent = value;
        });
    }
    
    if (buildSlider) {
        buildSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            updateAppearance('build', value);
            document.getElementById('build-value').textContent = value;
        });
    }
}

function updateAppearance(property, value) {
    const state = getState();
    const newAppearance = { ...state.appearance };
    newAppearance[property] = value;
    updateState({ appearance: newAppearance });
}

// Randomize appearance
function randomizeAppearance() {
    const state = getState();
    const newAppearance = {
        age: Math.floor(Math.random() * 51) + 20, // 20-70
        weight: Math.floor(Math.random() * 101), // 0-100
        build: Math.floor(Math.random() * 101) // 0-100
    };
    
    updateState({ appearance: newAppearance });
    initAppearance(); // Re-initialize to update display and listeners
}

export { renderAppearance, randomizeAppearance };
