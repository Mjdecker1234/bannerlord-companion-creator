// Saved Companions Module - Local Storage Management
import { getState, loadState } from '../app.js';
import { showNotification } from '../utils/helpers.js';

const STORAGE_KEY = 'bannerlord_saved_companions';

export function initSavedCompanions() {
    renderSavedCompanions();
    setupSavedCompanionsListeners();
}

function renderSavedCompanions() {
    const container = document.getElementById('saved-companions-container');
    if (!container) return;
    
    const savedCompanions = getSavedCompanions();
    
    let html = `
        <div class="saved-companions-header">
            <div class="save-controls">
                <input type="text" id="save-companion-name" class="save-name-input" placeholder="Enter a name for this save...">
                <button id="save-companion-btn" class="btn-primary">💾 Save Current Companion</button>
            </div>
            <p class="section-desc">Saved companions are stored in your browser's local storage. You have ${savedCompanions.length} saved companion(s).</p>
        </div>
        
        <div class="saved-companions-grid">
    `;
    
    if (savedCompanions.length === 0) {
        html += '<div class="no-saved-companions"><p>No saved companions yet. Create a companion and save it above!</p></div>';
    } else {
        savedCompanions.forEach((companion, index) => {
            html += createCompanionCard(companion, index);
        });
    }
    
    html += '</div>';
    
    container.innerHTML = html;
}

function createCompanionCard(companion, index) {
    const data = companion.data;
    const savedDate = new Date(companion.savedAt).toLocaleDateString();
    const savedTime = new Date(companion.savedAt).toLocaleTimeString();
    
    // Get top 3 skills
    const topSkills = Object.entries(data.skills || {})
        .filter(([_, skillData]) => skillData.level > 0)
        .sort((a, b) => b[1].level - a[1].level)
        .slice(0, 3)
        .map(([skillId, skillData]) => {
            const skillName = skillId.charAt(0).toUpperCase() + skillId.slice(1).replace(/([A-Z])/g, ' $1');
            return `${skillName}: ${skillData.level}`;
        });
    
    return `
        <div class="saved-companion-card" data-index="${index}">
            <div class="saved-companion-header">
                <h3 class="saved-companion-name">${companion.name}</h3>
                <div class="saved-companion-actions">
                    <button class="btn-load-companion" data-index="${index}" title="Load this companion">📂</button>
                    <button class="btn-delete-saved" data-index="${index}" title="Delete this save">🗑️</button>
                </div>
            </div>
            <div class="saved-companion-info">
                <div class="info-row">
                    <span class="info-label">Character:</span>
                    <span class="info-value">${data.name || 'Unnamed'} (${data.gender || 'male'})</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Culture:</span>
                    <span class="info-value">${data.culture || 'vlandia'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Age:</span>
                    <span class="info-value">${data.appearance?.age || 30}</span>
                </div>
                ${topSkills.length > 0 ? `
                <div class="info-row">
                    <span class="info-label">Top Skills:</span>
                    <span class="info-value">${topSkills.join(', ')}</span>
                </div>
                ` : ''}
                <div class="info-row saved-date">
                    <span class="info-label">Saved:</span>
                    <span class="info-value">${savedDate} ${savedTime}</span>
                </div>
            </div>
        </div>
    `;
}

function setupSavedCompanionsListeners() {
    // Save companion button
    const saveBtn = document.getElementById('save-companion-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveCurrentCompanion);
    }
    
    // Add event delegation for dynamic buttons
    const container = document.getElementById('saved-companions-container');
    if (container) {
        container.addEventListener('click', (e) => {
            // Load companion
            if (e.target.classList.contains('btn-load-companion') || e.target.closest('.btn-load-companion')) {
                const btn = e.target.classList.contains('btn-load-companion') ? e.target : e.target.closest('.btn-load-companion');
                const index = parseInt(btn.dataset.index);
                loadCompanion(index);
            }
            
            // Delete companion
            if (e.target.classList.contains('btn-delete-saved') || e.target.closest('.btn-delete-saved')) {
                const btn = e.target.classList.contains('btn-delete-saved') ? e.target : e.target.closest('.btn-delete-saved');
                const index = parseInt(btn.dataset.index);
                deleteCompanion(index);
            }
        });
    }
}

function getSavedCompanions() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Error loading saved companions:', error);
        return [];
    }
}

function saveCurrentCompanion() {
    const nameInput = document.getElementById('save-companion-name');
    const saveName = nameInput ? nameInput.value.trim() : '';
    
    if (!saveName) {
        showNotification('Please enter a name for this save', 'error');
        return;
    }
    
    const state = getState();
    const savedCompanions = getSavedCompanions();
    
    // Check if name already exists
    const existingIndex = savedCompanions.findIndex(c => c.name === saveName);
    if (existingIndex !== -1) {
        if (!confirm(`A save with the name "${saveName}" already exists. Overwrite it?`)) {
            return;
        }
        savedCompanions.splice(existingIndex, 1);
    }
    
    // Check limit (max 50 saves)
    if (savedCompanions.length >= 50) {
        showNotification('Maximum 50 saved companions. Delete some to save more.', 'error');
        return;
    }
    
    const companionSave = {
        name: saveName,
        data: state,
        savedAt: new Date().toISOString()
    };
    
    savedCompanions.unshift(companionSave); // Add to beginning
    
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedCompanions));
        showNotification(`Companion "${saveName}" saved successfully!`, 'success');
        
        // Clear input
        if (nameInput) nameInput.value = '';
        
        // Re-render
        renderSavedCompanions();
    } catch (error) {
        console.error('Error saving companion:', error);
        showNotification('Failed to save companion. Storage might be full.', 'error');
    }
}

function loadCompanion(index) {
    const savedCompanions = getSavedCompanions();
    
    if (index < 0 || index >= savedCompanions.length) {
        showNotification('Invalid companion index', 'error');
        return;
    }
    
    const companion = savedCompanions[index];
    
    if (confirm(`Load companion "${companion.name}"? This will replace your current companion.`)) {
        loadState(companion.data);
        showNotification(`Loaded companion "${companion.name}"`, 'success');
    }
}

function deleteCompanion(index) {
    const savedCompanions = getSavedCompanions();
    
    if (index < 0 || index >= savedCompanions.length) {
        showNotification('Invalid companion index', 'error');
        return;
    }
    
    const companion = savedCompanions[index];
    
    if (confirm(`Delete saved companion "${companion.name}"? This cannot be undone.`)) {
        savedCompanions.splice(index, 1);
        
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(savedCompanions));
            showNotification(`Deleted companion "${companion.name}"`, 'success');
            renderSavedCompanions();
        } catch (error) {
            console.error('Error deleting companion:', error);
            showNotification('Failed to delete companion', 'error');
        }
    }
}

export function exportAllCompanions() {
    const savedCompanions = getSavedCompanions();
    
    if (savedCompanions.length === 0) {
        showNotification('No saved companions to export', 'error');
        return;
    }
    
    const dataStr = JSON.stringify(savedCompanions, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bannerlord_companions_backup_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    showNotification('All companions exported!', 'success');
}

export function importAllCompanions(jsonData) {
    try {
        const companions = JSON.parse(jsonData);
        
        if (!Array.isArray(companions)) {
            throw new Error('Invalid format');
        }
        
        if (confirm(`Import ${companions.length} companion(s)? This will add to your existing saves.`)) {
            const existing = getSavedCompanions();
            const combined = [...existing, ...companions];
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(combined));
            showNotification(`Imported ${companions.length} companion(s)!`, 'success');
            renderSavedCompanions();
        }
    } catch (error) {
        console.error('Error importing companions:', error);
        showNotification('Failed to import companions. Invalid file format.', 'error');
    }
}
