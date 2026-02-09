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
    
    // Download Vortex Mod
    const downloadVortexBtn = document.getElementById('download-vortex-mod');
    if (downloadVortexBtn) {
        downloadVortexBtn.addEventListener('click', downloadVortexMod);
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
    // Generate Bannerlord-compatible XML format with proper heroes XML structure
    const companionId = (state.name?.toLowerCase().replace(/\s+/g, '_') || 'companion');
    
    const xml = `<?xml version="1.0" encoding="utf-8"?>
<SPCharacters>
  <SPCharacter id="${companionId}"
               name="{=companion_${companionId}}${state.name || 'Unnamed Companion'}"
               default_group="Infantry"
               level="1"
               age="${state.appearance.age}"
               is_hero="true"
               occupation="Wanderer"
               culture="Culture.${state.culture || 'vlandia'}">
    
    <!-- Physical Appearance -->
    <face>
      <face_key_template value="BodyProperty.fighter_${state.culture || 'vlandia'}_${state.gender || 'male'}" />
      <BodyProperties version="4" 
                     age="${state.appearance.age / 100}" 
                     weight="${state.appearance.weight / 100}" 
                     build="${state.appearance.build / 100}" />
    </face>
    
    <!-- Skills -->
    <skills>
${Object.entries(state.skills).map(([skillId, data]) => 
        `      <skill id="${skillId.charAt(0).toUpperCase() + skillId.slice(1)}" value="${data.level}" />`
    ).join('\n')}
    </skills>
    
    <!-- Focus Points (Attributes) -->
    <skills>
${Object.entries(state.skills).map(([skillId, data]) => 
        data.focus > 0 ? `      <skill id="${skillId.charAt(0).toUpperCase() + skillId.slice(1)}" value="${data.focus}" />` : ''
    ).filter(line => line).join('\n')}
    </skills>
    
    <!-- Attributes -->
${Object.entries(state.attributes).map(([attrId, value]) => 
        `    <Trait id="${attrId.charAt(0).toUpperCase() + attrId.slice(1)}" value="${value}" />`
    ).join('\n')}
    
    <!-- Personality Traits -->
${Object.entries(state.traits).map(([traitId, value]) => 
        value !== 0 ? `    <Trait id="${traitId.charAt(0).toUpperCase() + traitId.slice(1)}" value="${value}" />` : ''
    ).filter(line => line).join('\n')}
    
    <!-- Equipment Set -->
    <equipmentSet>
${Object.entries(state.equipment).map(([slot, itemId]) => {
            if (itemId && itemId !== 'none' && !itemId.includes('none_')) {
                const slotMap = {
                    headArmor: 'Head',
                    bodyArmor: 'Body',
                    handArmor: 'Gloves',
                    legArmor: 'Leg',
                    cape: 'Cape',
                    weapon1: 'Item0',
                    weapon2: 'Item1',
                    weapon3: 'Item2',
                    weapon4: 'Item3',
                    mount: 'Horse',
                    horseArmor: 'HorseHarness'
                };
                return `      <equipment slot="${slotMap[slot]}" id="Item.${itemId}" />`;
            }
            return '';
        }).filter(line => line).join('\n')}
    </equipmentSet>
    
  </SPCharacter>
</SPCharacters>`;
    
    return xml;
}

function generateSubModuleXML(state) {
    const modName = (state.name || 'Companion').replace(/\s+/g, '');
    const modId = `CustomCompanion_${modName}`;
    
    return `<?xml version="1.0" encoding="utf-8"?>
<Module>
  <Name value="${modName} Companion Mod"/>
  <Id value="${modId}"/>
  <Version value="v1.0.0"/>
  <SingleplayerModule value="true"/>
  <MultiplayerModule value="false"/>
  <Official value="false" />
  <DependedModules>
    <DependedModule Id="Native"/>
    <DependedModule Id="SandBoxCore"/>
    <DependedModule Id="Sandbox"/>
    <DependedModule Id="StoryMode" Optional="true"/>
  </DependedModules>
  <SubModules />
  <Xmls>
    <XmlNode>
      <XmlName id="SPCharacters" path="spcharacters"/>
      <IncludedGameTypes>
        <GameType value = "Campaign"/>
        <GameType value = "CampaignStoryMode"/>
      </IncludedGameTypes>
    </XmlNode>
  </Xmls>
</Module>`;
}

async function downloadVortexMod() {
    const state = getState();
    const modName = (state.name || 'Companion').replace(/\s+/g, '');
    
    // Since we can't use JSZip without dependencies, we'll provide instructions
    // and download the necessary files separately
    
    showNotification('Preparing Vortex mod files...', 'success');
    
    // Generate files
    const subModuleXml = generateSubModuleXML(state);
    const companionsXml = generateBannerlordXML(state);
    
    // Create a README with instructions
    const readme = `# ${modName} Companion Mod for Mount & Blade II: Bannerlord

## Installation Instructions for Vortex Mod Manager

1. **Download all the mod files** (SubModule.xml and spcharacters.xml)
2. **Create the mod folder structure**:
   - Create a folder named: ${modName}Companion
   - Inside it, create a folder named: ModuleData
3. **Place the files**:
   - Put SubModule.xml in the root of ${modName}Companion folder
   - Put spcharacters.xml in the ModuleData folder
4. **Create a ZIP archive**:
   - Select the ${modName}Companion folder and compress it to a .zip file
5. **Install with Vortex**:
   - Open Vortex Mod Manager
   - Go to Mods tab
   - Click "Install From File"
   - Select your created ZIP file
   - Enable the mod in Vortex
   - Launch the game and enable the mod in the launcher

## Manual Installation (Alternative)

1. Navigate to your Bannerlord installation folder
2. Go to Modules folder
3. Create a new folder: ${modName}Companion
4. Inside it, create a ModuleData folder
5. Place SubModule.xml in ${modName}Companion
6. Place spcharacters.xml in ${modName}Companion/ModuleData
7. Launch the game and enable the mod

## Finding Your Companion

Your companion will spawn as a wanderer in taverns across Calradia.
Look for: ${state.name || 'Unnamed Companion'}

---
Generated by Bannerlord Companion Creator
`;
    
    // Download all files
    downloadFile(subModuleXml, 'SubModule.xml', 'application/xml');
    setTimeout(() => {
        downloadFile(companionsXml, 'spcharacters.xml', 'application/xml');
    }, 500);
    setTimeout(() => {
        downloadFile(readme, 'README_INSTALLATION.txt', 'text/plain');
    }, 1000);
    
    showNotification('Vortex mod files downloaded! Check README for installation instructions.', 'success');
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

export { exportJSON, downloadJSON, exportXML, downloadXML, downloadVortexMod, generateLink, importJSON };
