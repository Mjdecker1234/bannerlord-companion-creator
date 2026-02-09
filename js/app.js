// Main Application
import { initCulture } from './modules/culture.js';
import { initName, generateRandomName } from './modules/nameGen.js';
import { initAttributes, randomizeAttributes } from './modules/attributes.js';
import { initSkills, randomizeSkills } from './modules/skills.js';
import { initTraits, randomizeTraits } from './modules/traits.js';
import { initEquipment, randomizeEquipment } from './modules/equipment.js';
import { initAppearance, randomizeAppearance } from './modules/appearance.js';
import { initExport } from './modules/export.js';
import { parseUrlState } from './utils/helpers.js';

// Application State
let state = {
    culture: 'vlandia',
    name: '',
    gender: 'male',
    attributes: {
        vigor: 0,
        control: 0,
        endurance: 0,
        cunning: 0,
        social: 0,
        intelligence: 0
    },
    skills: {
        oneHanded: { level: 0, focus: 0 },
        twoHanded: { level: 0, focus: 0 },
        polearm: { level: 0, focus: 0 },
        bow: { level: 0, focus: 0 },
        crossbow: { level: 0, focus: 0 },
        throwing: { level: 0, focus: 0 },
        riding: { level: 0, focus: 0 },
        athletics: { level: 0, focus: 0 },
        scouting: { level: 0, focus: 0 },
        tactics: { level: 0, focus: 0 },
        roguery: { level: 0, focus: 0 },
        charm: { level: 0, focus: 0 },
        leadership: { level: 0, focus: 0 },
        trade: { level: 0, focus: 0 },
        steward: { level: 0, focus: 0 },
        medicine: { level: 0, focus: 0 },
        engineering: { level: 0, focus: 0 }
    },
    traits: {
        mercy: 0,
        valor: 0,
        honor: 0,
        generosity: 0,
        calculating: 0
    },
    equipment: {
        headArmor: 'none_head',
        bodyArmor: 'none_body',
        handArmor: 'none_hands',
        legArmor: 'none_legs',
        cape: 'none_cape',
        weapon1: 'none_1h',
        weapon2: 'none_2h',
        weapon3: 'none_ranged',
        weapon4: 'none_shield',
        mount: 'none_mount',
        horseArmor: 'none_horse_armor'
    },
    appearance: {
        age: 30,
        weight: 50,
        build: 50
    }
};

// Current tab
let currentTab = 'culture';
const tabs = ['culture', 'name', 'attributes', 'skills', 'traits', 'equipment', 'appearance', 'export'];

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Check for shared data in URL
    const urlState = parseUrlState();
    if (urlState) {
        loadState(urlState);
    } else {
        // Generate initial random name
        generateRandomName();
    }
    
    // Initialize all modules
    initCulture();
    initName();
    initAttributes();
    initSkills();
    initTraits();
    initEquipment();
    initAppearance();
    initExport();
    
    // Setup tab navigation
    setupTabNavigation();
    
    // Setup character summary
    setupSummary();
    
    // Setup randomize button listeners
    setupRandomizeButtons();
    
    // Update summary
    updateSummary();
});

// Tab Navigation
function setupTabNavigation() {
    // Tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            switchTab(tab);
        });
    });
    
    // Next/Previous buttons
    const nextBtn = document.getElementById('next-tab');
    const prevBtn = document.getElementById('prev-tab');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const currentIndex = tabs.indexOf(currentTab);
            if (currentIndex < tabs.length - 1) {
                switchTab(tabs[currentIndex + 1]);
            }
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const currentIndex = tabs.indexOf(currentTab);
            if (currentIndex > 0) {
                switchTab(tabs[currentIndex - 1]);
            }
        });
    }
}

function switchTab(tab) {
    currentTab = tab;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        }
    });
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    const activeContent = document.getElementById(`tab-${tab}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }
    
    // Update navigation buttons
    const currentIndex = tabs.indexOf(currentTab);
    const prevBtn = document.getElementById('prev-tab');
    const nextBtn = document.getElementById('next-tab');
    
    if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentIndex === tabs.length - 1;
        nextBtn.textContent = currentIndex === tabs.length - 2 ? 'Export →' : 'Next →';
    }
}

// Character Summary
function setupSummary() {
    const toggleBtn = document.getElementById('summary-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const content = document.getElementById('summary-content');
            if (content) {
                content.classList.toggle('collapsed');
                toggleBtn.textContent = content.classList.contains('collapsed') ? '▼' : '▲';
            }
        });
    }
}

// Setup randomize buttons
function setupRandomizeButtons() {
    // Global randomize all button
    const randomizeAllBtn = document.getElementById('randomize-all');
    if (randomizeAllBtn) {
        randomizeAllBtn.addEventListener('click', randomizeAll);
    }
    
    // Culture randomize button
    const randomizeCultureBtn = document.getElementById('randomize-culture');
    if (randomizeCultureBtn) {
        randomizeCultureBtn.addEventListener('click', () => {
            const cultureCards = document.querySelectorAll('.culture-grid .culture-card');
            if (cultureCards.length > 0) {
                const randomIndex = Math.floor(Math.random() * cultureCards.length);
                cultureCards[randomIndex].click();
            }
        });
    }
    
    // Attributes randomize button
    const randomizeAttributesBtn = document.getElementById('randomize-attributes');
    if (randomizeAttributesBtn) {
        randomizeAttributesBtn.addEventListener('click', randomizeAttributes);
    }
    
    // Skills randomize button
    const randomizeSkillsBtn = document.getElementById('randomize-skills');
    if (randomizeSkillsBtn) {
        randomizeSkillsBtn.addEventListener('click', randomizeSkills);
    }
    
    // Traits randomize button
    const randomizeTraitsBtn = document.getElementById('randomize-traits');
    if (randomizeTraitsBtn) {
        randomizeTraitsBtn.addEventListener('click', randomizeTraits);
    }
    
    // Equipment randomize button
    const randomizeEquipmentBtn = document.getElementById('randomize-equipment');
    if (randomizeEquipmentBtn) {
        randomizeEquipmentBtn.addEventListener('click', randomizeEquipment);
    }
    
    // Appearance randomize button
    const randomizeAppearanceBtn = document.getElementById('randomize-appearance');
    if (randomizeAppearanceBtn) {
        randomizeAppearanceBtn.addEventListener('click', randomizeAppearance);
    }
}

function updateSummary() {
    const summaryContent = document.getElementById('summary-content');
    if (!summaryContent) return;
    
    let html = '<div class="summary-section">';
    html += `<div class="summary-section-title">Basic Info</div>`;
    html += `<div class="summary-item"><span class="summary-label">Name:</span><span class="summary-value">${state.name || 'Unnamed'}</span></div>`;
    html += `<div class="summary-item"><span class="summary-label">Gender:</span><span class="summary-value">${state.gender}</span></div>`;
    html += `<div class="summary-item"><span class="summary-label">Culture:</span><span class="summary-value">${state.culture}</span></div>`;
    html += `<div class="summary-item"><span class="summary-label">Age:</span><span class="summary-value">${state.appearance.age}</span></div>`;
    html += '</div>';
    
    // Attributes
    html += '<div class="summary-section">';
    html += `<div class="summary-section-title">Attributes</div>`;
    Object.entries(state.attributes).forEach(([attr, value]) => {
        const capitalizedAttr = attr.charAt(0).toUpperCase() + attr.slice(1);
        html += `<div class="summary-item"><span class="summary-label">${capitalizedAttr}:</span><span class="summary-value">${value}</span></div>`;
    });
    html += '</div>';
    
    // Top Skills
    html += '<div class="summary-section">';
    html += `<div class="summary-section-title">Top Skills</div>`;
    const topSkills = Object.entries(state.skills)
        .filter(([_, data]) => data.level > 0)
        .sort((a, b) => b[1].level - a[1].level)
        .slice(0, 5);
    
    if (topSkills.length > 0) {
        topSkills.forEach(([skillId, data]) => {
            const skillName = skillId.charAt(0).toUpperCase() + skillId.slice(1).replace(/([A-Z])/g, ' $1');
            html += `<div class="summary-item"><span class="summary-label">${skillName}:</span><span class="summary-value">${data.level} (${data.focus}★)</span></div>`;
        });
    } else {
        html += '<p style="color: var(--text-muted); font-size: 0.85rem;">No skills assigned yet</p>';
    }
    html += '</div>';
    
    // Traits
    const activeTraits = Object.entries(state.traits).filter(([_, value]) => value !== 0);
    if (activeTraits.length > 0) {
        html += '<div class="summary-section">';
        html += `<div class="summary-section-title">Traits</div>`;
        activeTraits.forEach(([traitId, value]) => {
            const traitName = traitId.charAt(0).toUpperCase() + traitId.slice(1);
            html += `<div class="summary-item"><span class="summary-label">${traitName}:</span><span class="summary-value">${value > 0 ? '+' : ''}${value}</span></div>`;
        });
        html += '</div>';
    }
    
    summaryContent.innerHTML = html;
}

// State Management
export function updateState(newState) {
    state = { ...state, ...newState };
    updateSummary();
}

export function getState() {
    return state;
}

export function loadState(newState) {
    state = { ...state, ...newState };
    
    // Re-initialize all modules with new state
    initCulture();
    initName();
    initAttributes();
    initSkills();
    initTraits();
    initEquipment();
    initAppearance();
    
    updateSummary();
}

// Randomize all companion data
export function randomizeAll() {
    // Randomize name
    generateRandomName();
    
    // Randomize attributes
    randomizeAttributes();
    
    // Randomize skills
    randomizeSkills();
    
    // Randomize traits
    randomizeTraits();
    
    // Randomize equipment
    randomizeEquipment();
    
    // Randomize appearance
    randomizeAppearance();
    
    updateSummary();
}

// Export randomizeAll for use in other modules
export { randomizeAll };
