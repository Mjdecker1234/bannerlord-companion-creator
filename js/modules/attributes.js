// Attributes Module
import { attributes } from '../data/skills.js';
import { updateState, getState } from '../app.js';

const ATTRIBUTE_POOL = 15;

export function initAttributes() {
    renderAttributes();
    setupAttributeListeners();
    updateAttributePoints();
}

function renderAttributes() {
    const container = document.getElementById('attributes-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.values(attributes).forEach(attr => {
        const item = createAttributeItem(attr);
        container.appendChild(item);
    });
}

function createAttributeItem(attr) {
    const state = getState();
    const value = state.attributes[attr.id] || 0;
    
    const item = document.createElement('div');
    item.className = 'attribute-item';
    item.dataset.attribute = attr.id;
    
    const percentage = (value / 10) * 100;
    
    item.innerHTML = `
        <div class="attribute-header">
            <span class="attribute-name">${attr.name}</span>
            <span class="attribute-value">${value}</span>
        </div>
        <div class="attribute-controls">
            <button class="attr-btn attr-minus" data-action="decrease">−</button>
            <div class="attribute-bar">
                <div class="attribute-bar-fill" style="width: ${percentage}%"></div>
            </div>
            <button class="attr-btn attr-plus" data-action="increase">+</button>
        </div>
        <p class="attribute-desc">${attr.description}</p>
        <p class="attribute-skills">Skills: ${attr.skills.join(', ')}</p>
    `;
    
    return item;
}

function setupAttributeListeners() {
    const container = document.getElementById('attributes-container');
    if (!container) return;
    
    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.attr-btn');
        if (!btn) return;
        
        const item = btn.closest('.attribute-item');
        const attributeId = item.dataset.attribute;
        const action = btn.dataset.action;
        
        if (action === 'increase') {
            increaseAttribute(attributeId);
        } else if (action === 'decrease') {
            decreaseAttribute(attributeId);
        }
    });
}

function increaseAttribute(attributeId) {
    const state = getState();
    const currentValue = state.attributes[attributeId] || 0;
    
    // Check if we have points available
    const totalUsed = Object.values(state.attributes).reduce((sum, val) => sum + val, 0);
    if (totalUsed >= ATTRIBUTE_POOL) {
        return; // No points left
    }
    
    // Check max limit
    if (currentValue >= 10) {
        return;
    }
    
    // Update state
    const newAttributes = { ...state.attributes };
    newAttributes[attributeId] = currentValue + 1;
    updateState({ attributes: newAttributes });
    
    // Re-render
    renderAttributes();
    updateAttributePoints();
}

function decreaseAttribute(attributeId) {
    const state = getState();
    const currentValue = state.attributes[attributeId] || 0;
    
    // Check min limit
    if (currentValue <= 0) {
        return;
    }
    
    // Update state
    const newAttributes = { ...state.attributes };
    newAttributes[attributeId] = currentValue - 1;
    updateState({ attributes: newAttributes });
    
    // Re-render
    renderAttributes();
    updateAttributePoints();
}

function updateAttributePoints() {
    const state = getState();
    const totalUsed = Object.values(state.attributes).reduce((sum, val) => sum + val, 0);
    const remaining = ATTRIBUTE_POOL - totalUsed;
    
    const display = document.getElementById('attribute-points-remaining');
    if (display) {
        display.textContent = remaining;
        display.style.color = remaining === 0 ? '#2d5016' : '#c9a84c';
    }
}

export { updateAttributePoints };
