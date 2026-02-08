// Skills Module
import { attributes, skills, getSkillsByAttribute } from '../data/skills.js';
import { updateState, getState } from '../app.js';

const FOCUS_POOL = 30;

export function initSkills() {
    renderSkills();
    setupSkillListeners();
    updateFocusPoints();
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.values(attributes).forEach(attr => {
        const group = createSkillGroup(attr);
        container.appendChild(group);
    });
}

function createSkillGroup(attr) {
    const group = document.createElement('div');
    group.className = 'skill-group';
    
    const attrSkills = getSkillsByAttribute(attr.id);
    
    let skillsHTML = '';
    attrSkills.forEach(skill => {
        skillsHTML += createSkillItemHTML(skill);
    });
    
    group.innerHTML = `
        <h3 class="skill-group-title">${attr.name}</h3>
        <div class="skills-list">
            ${skillsHTML}
        </div>
    `;
    
    return group;
}

function createSkillItemHTML(skill) {
    const state = getState();
    const skillData = state.skills[skill.id] || { level: 0, focus: 0 };
    
    let focusButtonsHTML = '';
    for (let i = 1; i <= 5; i++) {
        const isActive = i <= skillData.focus;
        focusButtonsHTML += `<button class="focus-btn ${isActive ? 'active' : ''}" data-focus="${i}">${i}</button>`;
    }
    
    return `
        <div class="skill-item" data-skill="${skill.id}">
            <span class="skill-name">${skill.name}</span>
            <input type="number" class="skill-level-input" value="${skillData.level}" min="0" max="330" />
            <span class="skill-level-label">Level</span>
            <div class="skill-focus" data-skill="${skill.id}">
                ${focusButtonsHTML}
            </div>
        </div>
    `;
}

function setupSkillListeners() {
    const container = document.getElementById('skills-container');
    if (!container) return;
    
    // Skill level input
    container.addEventListener('input', (e) => {
        if (e.target.classList.contains('skill-level-input')) {
            const skillItem = e.target.closest('.skill-item');
            const skillId = skillItem.dataset.skill;
            let level = parseInt(e.target.value) || 0;
            level = Math.max(0, Math.min(330, level));
            updateSkillLevel(skillId, level);
        }
    });
    
    // Focus buttons
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('focus-btn')) {
            const focusContainer = e.target.closest('.skill-focus');
            const skillId = focusContainer.dataset.skill;
            const focusValue = parseInt(e.target.dataset.focus);
            updateSkillFocus(skillId, focusValue);
        }
    });
}

function updateSkillLevel(skillId, level) {
    const state = getState();
    const newSkills = { ...state.skills };
    if (!newSkills[skillId]) {
        newSkills[skillId] = { level: 0, focus: 0 };
    }
    newSkills[skillId].level = level;
    updateState({ skills: newSkills });
}

function updateSkillFocus(skillId, focusValue) {
    const state = getState();
    const currentFocus = state.skills[skillId]?.focus || 0;
    
    // Calculate total focus used
    let totalFocus = 0;
    Object.values(state.skills).forEach(skill => {
        if (skill.focus) totalFocus += skill.focus;
    });
    
    // Calculate change in focus
    const focusChange = focusValue - currentFocus;
    
    // Check if we have enough focus points
    if (focusChange > 0 && totalFocus + focusChange > FOCUS_POOL) {
        return; // Not enough points
    }
    
    // Update state
    const newSkills = { ...state.skills };
    if (!newSkills[skillId]) {
        newSkills[skillId] = { level: 0, focus: 0 };
    }
    newSkills[skillId].focus = focusValue;
    updateState({ skills: newSkills });
    
    // Re-render
    renderSkills();
    updateFocusPoints();
}

function updateFocusPoints() {
    const state = getState();
    let totalFocus = 0;
    Object.values(state.skills).forEach(skill => {
        if (skill.focus) totalFocus += skill.focus;
    });
    const remaining = FOCUS_POOL - totalFocus;
    
    const display = document.getElementById('focus-points-remaining');
    if (display) {
        display.textContent = remaining;
        display.style.color = remaining === 0 ? '#2d5016' : '#c9a84c';
    }
}

export { updateFocusPoints };
