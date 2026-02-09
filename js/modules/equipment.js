// Equipment Module
import { equipment, filterEquipmentByCulture } from '../data/equipment.js';
import { updateState, getState } from '../app.js';

let currentCategory = 'armor';

export function initEquipment() {
    renderEquipment();
    setupEquipmentListeners();
}

function setupEquipmentListeners() {
    // Category tabs
    const tabs = document.querySelectorAll('.equipment-tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            switchCategory(category);
        });
    });
    
    // Equipment selects
    const container = document.getElementById('equipment-container');
    if (container) {
        container.addEventListener('change', (e) => {
            if (e.target.classList.contains('equipment-select')) {
                const slot = e.target.dataset.slot;
                const itemId = e.target.value;
                updateEquipmentSlot(slot, itemId);
            }
        });
    }
}

function switchCategory(category) {
    currentCategory = category;
    
    // Update tab buttons
    document.querySelectorAll('.equipment-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    renderEquipment();
}

function renderEquipment() {
    const container = document.getElementById('equipment-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (currentCategory === 'armor') {
        renderArmorSlots(container);
    } else if (currentCategory === 'weapons') {
        renderWeaponSlots(container);
    } else if (currentCategory === 'mount') {
        renderMountSlots(container);
    }
}

function renderArmorSlots(container) {
    const slots = [
        { slot: 'headArmor', label: 'Head Armor', items: equipment.headArmor },
        { slot: 'bodyArmor', label: 'Body Armor', items: equipment.bodyArmor },
        { slot: 'handArmor', label: 'Hand Armor', items: equipment.handArmor },
        { slot: 'legArmor', label: 'Leg Armor', items: equipment.legArmor },
        { slot: 'cape', label: 'Cape / Shoulders', items: equipment.cape }
    ];
    
    slots.forEach(slotData => {
        const slotEl = createEquipmentSlot(slotData.slot, slotData.label, slotData.items);
        container.appendChild(slotEl);
    });
}

function renderWeaponSlots(container) {
    const slots = [
        { slot: 'weapon1', label: 'Weapon Slot 1', items: [...equipment.oneHanded, ...equipment.twoHanded, ...equipment.polearms] },
        { slot: 'weapon2', label: 'Weapon Slot 2', items: [...equipment.oneHanded, ...equipment.twoHanded, ...equipment.polearms] },
        { slot: 'weapon3', label: 'Weapon Slot 3 (Ranged)', items: equipment.ranged },
        { slot: 'weapon4', label: 'Weapon Slot 4 (Shield/Ammo)', items: [...equipment.shields, ...equipment.ammunition] }
    ];
    
    slots.forEach(slotData => {
        const slotEl = createEquipmentSlot(slotData.slot, slotData.label, slotData.items);
        container.appendChild(slotEl);
    });
}

function renderMountSlots(container) {
    const slots = [
        { slot: 'mount', label: 'Mount', items: equipment.mounts },
        { slot: 'horseArmor', label: 'Horse Armor', items: equipment.horseArmor }
    ];
    
    slots.forEach(slotData => {
        const slotEl = createEquipmentSlot(slotData.slot, slotData.label, slotData.items);
        container.appendChild(slotEl);
    });
}

function createEquipmentSlot(slot, label, items) {
    const state = getState();
    const culture = state.culture || 'vlandia';
    const filteredItems = filterEquipmentByCulture(items, culture);
    const selectedId = state.equipment[slot] || 'none';
    
    const slotEl = document.createElement('div');
    slotEl.className = 'equipment-slot';
    
    let optionsHTML = '';
    filteredItems.forEach(item => {
        const selected = item.id === selectedId ? 'selected' : '';
        optionsHTML += `<option value="${item.id}" ${selected}>${item.name} ${item.tier > 0 ? '(Tier ' + item.tier + ')' : ''}</option>`;
    });
    
    slotEl.innerHTML = `
        <label class="equipment-slot-label">${label}</label>
        <select class="equipment-select" data-slot="${slot}">
            ${optionsHTML}
        </select>
        <div class="equipment-stats" id="stats-${slot}">
            ${getEquipmentStats(selectedId, items)}
        </div>
    `;
    
    return slotEl;
}

function getEquipmentStats(itemId, items) {
    const item = items.find(i => i.id === itemId);
    if (!item || item.tier === 0) return 'No item equipped';
    
    let stats = `<strong>${item.name}</strong><br>`;
    stats += `Culture: ${item.culture}<br>`;
    stats += `Tier: ${item.tier}<br>`;
    
    if (item.armor !== undefined) stats += `Armor: ${item.armor}<br>`;
    if (item.damage !== undefined) stats += `Damage: ${item.damage}<br>`;
    if (item.speed !== undefined) stats += `Speed: ${item.speed}<br>`;
    if (item.reach !== undefined) stats += `Reach: ${item.reach}<br>`;
    if (item.accuracy !== undefined) stats += `Accuracy: ${item.accuracy}<br>`;
    if (item.quantity !== undefined) stats += `Quantity: ${item.quantity}<br>`;
    if (item.maneuver !== undefined) stats += `Maneuver: ${item.maneuver}<br>`;
    if (item.charge !== undefined) stats += `Charge: ${item.charge}<br>`;
    if (item.hp !== undefined) stats += `HP: ${item.hp}<br>`;
    
    return stats;
}

function updateEquipmentSlot(slot, itemId) {
    const state = getState();
    const newEquipment = { ...state.equipment };
    newEquipment[slot] = itemId;
    updateState({ equipment: newEquipment });
    
    // Update stats display
    const statsEl = document.getElementById(`stats-${slot}`);
    if (statsEl) {
        // Find the right items array
        let items = [];
        if (currentCategory === 'armor') {
            const slotMapping = {
                headArmor: equipment.headArmor,
                bodyArmor: equipment.bodyArmor,
                handArmor: equipment.handArmor,
                legArmor: equipment.legArmor,
                cape: equipment.cape
            };
            items = slotMapping[slot] || [];
        } else if (currentCategory === 'weapons') {
            items = [...equipment.oneHanded, ...equipment.twoHanded, ...equipment.polearms, ...equipment.ranged, ...equipment.shields, ...equipment.ammunition];
        } else if (currentCategory === 'mount') {
            items = slot === 'mount' ? equipment.mounts : equipment.horseArmor;
        }
        
        statsEl.innerHTML = getEquipmentStats(itemId, items);
    }
}

// Randomize equipment
function randomizeEquipment() {
    const state = getState();
    const culture = state.culture || 'vlandia';
    const newEquipment = { ...state.equipment };
    
    // Helper function to get random item from filtered list
    const getRandomItem = (items, culture) => {
        const filtered = filterEquipmentByCulture(items, culture);
        if (filtered.length <= 1) return filtered[0]?.id || 'none';
        // Skip the "none" option at index 0
        const validItems = filtered.slice(1);
        if (validItems.length === 0) return filtered[0]?.id || 'none';
        return validItems[Math.floor(Math.random() * validItems.length)].id;
    };
    
    // Randomize armor
    newEquipment.headArmor = getRandomItem(equipment.headArmor, culture);
    newEquipment.bodyArmor = getRandomItem(equipment.bodyArmor, culture);
    newEquipment.handArmor = getRandomItem(equipment.handArmor, culture);
    newEquipment.legArmor = getRandomItem(equipment.legArmor, culture);
    newEquipment.cape = getRandomItem(equipment.cape, culture);
    
    // Randomize weapons
    const allMeleeWeapons = [...equipment.oneHanded, ...equipment.twoHanded, ...equipment.polearms];
    newEquipment.weapon1 = getRandomItem(allMeleeWeapons, culture);
    newEquipment.weapon2 = getRandomItem(allMeleeWeapons, culture);
    newEquipment.weapon3 = getRandomItem(equipment.ranged, culture);
    newEquipment.weapon4 = getRandomItem([...equipment.shields, ...equipment.ammunition], culture);
    
    // Randomize mount
    newEquipment.mount = getRandomItem(equipment.mounts, culture);
    newEquipment.horseArmor = getRandomItem(equipment.horseArmor, culture);
    
    updateState({ equipment: newEquipment });
    renderEquipment();
}

export { renderEquipment, randomizeEquipment };
