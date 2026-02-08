// Traits Module
import { traits } from '../data/traits.js';
import { updateState, getState } from '../app.js';

export function initTraits() {
    renderTraits();
    setupTraitListeners();
}

function renderTraits() {
    const container = document.getElementById('traits-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.values(traits).forEach(trait => {
        const item = createTraitItem(trait);
        container.appendChild(item);
    });
}

function createTraitItem(trait) {
    const state = getState();
    const value = state.traits[trait.id] || 0;
    
    const item = document.createElement('div');
    item.className = 'trait-item';
    item.dataset.trait = trait.id;
    
    item.innerHTML = `
        <div class="trait-header">
            <span class="trait-name">${trait.name}</span>
            <span class="trait-value">${value > 0 ? '+' + value : value}</span>
        </div>
        <div class="trait-labels">
            <span class="trait-label-negative">${trait.negativeLabel}</span>
            <span class="trait-label-positive">${trait.positiveLabel}</span>
        </div>
        <input type="range" class="trait-slider" min="${trait.min}" max="${trait.max}" value="${value}" step="1" />
        <p class="attribute-desc">${trait.description}</p>
    `;
    
    return item;
}

function setupTraitListeners() {
    const container = document.getElementById('traits-container');
    if (!container) return;
    
    container.addEventListener('input', (e) => {
        if (e.target.classList.contains('trait-slider')) {
            const item = e.target.closest('.trait-item');
            const traitId = item.dataset.trait;
            const value = parseInt(e.target.value);
            updateTrait(traitId, value);
        }
    });
}

function updateTrait(traitId, value) {
    const state = getState();
    const newTraits = { ...state.traits };
    newTraits[traitId] = value;
    updateState({ traits: newTraits });
    
    // Update display
    const item = document.querySelector(`[data-trait="${traitId}"]`);
    if (item) {
        const valueDisplay = item.querySelector('.trait-value');
        if (valueDisplay) {
            valueDisplay.textContent = value > 0 ? '+' + value : value;
        }
    }
}

export { updateTrait };
