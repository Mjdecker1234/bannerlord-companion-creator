// Export and Import Module
import { getState, loadState } from '../app.js';
import { copyToClipboard, downloadFile, generateShareLink, showNotification } from '../utils/helpers.js';

export function initExport() {
    setupExportListeners();
}

function setupExportListeners() {
    // Export JSON
    const exportJsonBtn = document.getElementById('export-json');
    if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', exportJSON);
    }
    
    // Download JSON
    const downloadJsonBtn = document.getElementById('download-json');
    if (downloadJsonBtn) {
        downloadJsonBtn.addEventListener('click', downloadJSON);
    }
    
    // Export XML
    const exportXmlBtn = document.getElementById('export-xml');
    if (exportXmlBtn) {
        exportXmlBtn.addEventListener('click', exportXML);
    }
    
    // Download XML
    const downloadXmlBtn = document.getElementById('download-xml');
    if (downloadXmlBtn) {
        downloadXmlBtn.addEventListener('click', downloadXML);
    }
    
    // Generate share link
    const generateLinkBtn = document.getElementById('generate-link');
    if (generateLinkBtn) {
        generateLinkBtn.addEventListener('click', generateLink);
    }
    
    // Import JSON
    const importBtn = document.getElementById('import-btn');
    if (importBtn) {
        importBtn.addEventListener('click', importJSON);
    }
}

function exportJSON() {
    const state = getState();
    const json = JSON.stringify(state, null, 2);
    
    copyToClipboard(json).then(success => {
        if (success) {
            showNotification('JSON copied to clipboard!', 'success');
        } else {
            showNotification('Failed to copy to clipboard', 'error');
        }
    });
}

function downloadJSON() {
    const state = getState();
    const json = JSON.stringify(state, null, 2);
    const filename = `${state.name || 'companion'}_${Date.now()}.json`;
    downloadFile(json, filename, 'application/json');
    showNotification('JSON file downloaded!', 'success');
}

function exportXML() {
    const state = getState();
    const xml = generateBannerlordXML(state);
    
    copyToClipboard(xml).then(success => {
        if (success) {
            showNotification('XML copied to clipboard!', 'success');
        } else {
            showNotification('Failed to copy to clipboard', 'error');
        }
    });
}

function downloadXML() {
    const state = getState();
    const xml = generateBannerlordXML(state);
    const filename = `${state.name || 'companion'}_${Date.now()}.xml`;
    downloadFile(xml, filename, 'application/xml');
    showNotification('XML file downloaded!', 'success');
}

function generateBannerlordXML(state) {
    // Generate Bannerlord-compatible XML format
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<NPCCharacter id="${state.name?.toLowerCase().replace(/\s+/g, '_') || 'companion'}"
              name="${state.name || 'Unnamed Companion'}"
              default_group="Infantry"
              age="${state.appearance.age}"
              is_hero="true"
              culture="Culture.${state.culture || 'vlandia'}">
    
    <!-- Attributes -->
    <face>
        <face_key_template value="BodyProperty.fighter_${state.culture || 'vlandia'}_${state.gender || 'male'}" />
        <age value="${state.appearance.age}" />
        <weight value="${state.appearance.weight / 100}" />
        <build value="${state.appearance.build / 100}" />
    </face>
    
    <!-- Skills -->
    <skills>
        ${Object.entries(state.skills).map(([skillId, data]) => 
            `<skill id="${skillId}" value="${data.level}" />`
        ).join('\n        ')}
    </skills>
    
    <!-- Attributes -->
    <Attributes>
        ${Object.entries(state.attributes).map(([attrId, value]) => 
            `<Attribute id="${attrId}" value="${value}" />`
        ).join('\n        ')}
    </Attributes>
    
    <!-- Traits -->
    <Traits>
        ${Object.entries(state.traits).map(([traitId, value]) => 
            `<Trait id="${traitId}" value="${value}" />`
        ).join('\n        ')}
    </Traits>
    
    <!-- Equipment -->
    <equipmentSet>
        ${Object.entries(state.equipment).map(([slot, itemId]) => {
            if (itemId && itemId !== 'none' && !itemId.includes('none_')) {
                return `<equipment slot="${slot}" id="Item.${itemId}" />`;
            }
            return '';
        }).filter(line => line).join('\n        ')}
    </equipmentSet>
    
</NPCCharacter>`;
    
    return xml;
}

function generateLink() {
    const state = getState();
    const link = generateShareLink(state);
    
    if (link) {
        const input = document.getElementById('share-link');
        if (input) {
            input.value = link;
            input.select();
        }
        
        copyToClipboard(link).then(success => {
            if (success) {
                showNotification('Share link copied to clipboard!', 'success');
            }
        });
    } else {
        showNotification('Failed to generate share link', 'error');
    }
}

function importJSON() {
    const textarea = document.getElementById('import-json');
    if (!textarea) return;
    
    const jsonText = textarea.value.trim();
    if (!jsonText) {
        showNotification('Please paste JSON data first', 'error');
        return;
    }
    
    try {
        const data = JSON.parse(jsonText);
        loadState(data);
        showNotification('Companion imported successfully!', 'success');
        textarea.value = '';
    } catch (error) {
        showNotification('Invalid JSON format', 'error');
        console.error('Import error:', error);
    }
}

export { exportJSON, downloadJSON, exportXML, downloadXML, generateLink, importJSON };
