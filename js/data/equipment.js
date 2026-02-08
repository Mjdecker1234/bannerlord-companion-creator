// Bannerlord Equipment Database
export const equipment = {
    // HEAD ARMOR
    headArmor: [
        { id: 'none_head', name: 'None', culture: 'all', tier: 0, armor: 0 },
        { id: 'padded_coif', name: 'Padded Coif', culture: 'all', tier: 1, armor: 8 },
        { id: 'leather_cap', name: 'Leather Cap', culture: 'all', tier: 1, armor: 10 },
        { id: 'steppe_helmet', name: 'Steppe Helmet', culture: 'khuzait', tier: 2, armor: 18 },
        { id: 'desert_turban', name: 'Desert Turban with Mail', culture: 'aserai', tier: 2, armor: 16 },
        { id: 'northern_helmet', name: 'Northern Helmet', culture: 'sturgia', tier: 3, armor: 24 },
        { id: 'imperial_helmet', name: 'Imperial Infantry Helmet', culture: 'empire', tier: 3, armor: 28 },
        { id: 'vlandian_kettle', name: 'Vlandian Kettle Helmet', culture: 'vlandia', tier: 3, armor: 30 },
        { id: 'battanian_helm', name: 'Battanian Reinforced Helm', culture: 'battania', tier: 3, armor: 26 },
        { id: 'lordly_helmet', name: 'Lordly Plumed Helmet', culture: 'vlandia', tier: 4, armor: 38 },
        { id: 'lamellar_helmet', name: 'Lamellar Helmet over Mail', culture: 'khuzait', tier: 4, armor: 35 },
        { id: 'royal_helmet', name: 'Royal Guard Helmet', culture: 'empire', tier: 5, armor: 45 },
        { id: 'crowned_helmet', name: 'Crowned Helmet', culture: 'all', tier: 6, armor: 50 }
    ],
    
    // BODY ARMOR
    bodyArmor: [
        { id: 'none_body', name: 'None', culture: 'all', tier: 0, armor: 0 },
        { id: 'linen_tunic', name: 'Linen Tunic', culture: 'all', tier: 1, armor: 4 },
        { id: 'padded_cloth', name: 'Padded Cloth', culture: 'all', tier: 1, armor: 10 },
        { id: 'leather_armor', name: 'Leather Armor', culture: 'all', tier: 2, armor: 18 },
        { id: 'tribal_armor', name: 'Battanian Tribal Armor', culture: 'battania', tier: 2, armor: 20 },
        { id: 'steppe_armor', name: 'Steppe Armor', culture: 'khuzait', tier: 2, armor: 22 },
        { id: 'mail_hauberk', name: 'Mail Hauberk', culture: 'all', tier: 3, armor: 32 },
        { id: 'chainmail', name: 'Northern Chainmail', culture: 'sturgia', tier: 3, armor: 34 },
        { id: 'scale_armor', name: 'Scale Armor', culture: 'empire', tier: 3, armor: 36 },
        { id: 'lamellar', name: 'Lamellar Cuirass', culture: 'khuzait', tier: 4, armor: 40 },
        { id: 'desert_mail', name: 'Desert Mail Hauberk', culture: 'aserai', tier: 4, armor: 38 },
        { id: 'plate_armor', name: 'Vlandian Plate Armor', culture: 'vlandia', tier: 5, armor: 52 },
        { id: 'imperial_armor', name: 'Imperial Scale Armor', culture: 'empire', tier: 5, armor: 48 },
        { id: 'lordly_armor', name: 'Lordly Decorated Armor', culture: 'vlandia', tier: 6, armor: 60 },
        { id: 'cataphract', name: 'Imperial Cataphract Armor', culture: 'empire', tier: 6, armor: 58 }
    ],
    
    // HAND ARMOR
    handArmor: [
        { id: 'none_hands', name: 'None', culture: 'all', tier: 0, armor: 0 },
        { id: 'wrapped_hands', name: 'Wrapped Hands', culture: 'all', tier: 1, armor: 2 },
        { id: 'leather_gloves', name: 'Leather Gloves', culture: 'all', tier: 2, armor: 6 },
        { id: 'mail_mittens', name: 'Mail Mittens', culture: 'all', tier: 3, armor: 10 },
        { id: 'plated_gloves', name: 'Plated Leather Gloves', culture: 'vlandia', tier: 4, armor: 14 },
        { id: 'gauntlets', name: 'Steel Gauntlets', culture: 'vlandia', tier: 5, armor: 18 },
        { id: 'lordly_gauntlets', name: 'Lordly Gauntlets', culture: 'all', tier: 6, armor: 22 }
    ],
    
    // LEG ARMOR
    legArmor: [
        { id: 'none_legs', name: 'None', culture: 'all', tier: 0, armor: 0 },
        { id: 'wrapped_shoes', name: 'Wrapped Shoes', culture: 'all', tier: 1, armor: 4 },
        { id: 'leather_boots', name: 'Leather Boots', culture: 'all', tier: 2, armor: 10 },
        { id: 'steppe_boots', name: 'Steppe Boots', culture: 'khuzait', tier: 2, armor: 12 },
        { id: 'mail_chausses', name: 'Mail Chausses', culture: 'all', tier: 3, armor: 16 },
        { id: 'splinted_greaves', name: 'Splinted Greaves', culture: 'vlandia', tier: 4, armor: 22 },
        { id: 'plated_boots', name: 'Plated Boots', culture: 'vlandia', tier: 5, armor: 28 },
        { id: 'lordly_greaves', name: 'Lordly Greaves', culture: 'all', tier: 6, armor: 34 }
    ],
    
    // CAPES/SHOULDERS
    cape: [
        { id: 'none_cape', name: 'None', culture: 'all', tier: 0, armor: 0 },
        { id: 'tattered_cape', name: 'Tattered Cape', culture: 'all', tier: 1, armor: 2 },
        { id: 'fur_cape', name: 'Fur-Lined Cape', culture: 'sturgia', tier: 2, armor: 4 },
        { id: 'pauldrons', name: 'Shoulder Pauldrons', culture: 'vlandia', tier: 3, armor: 8 },
        { id: 'decorated_cape', name: 'Decorated Cape', culture: 'all', tier: 4, armor: 6 },
        { id: 'lordly_pauldrons', name: 'Lordly Pauldrons', culture: 'all', tier: 5, armor: 12 }
    ],
    
    // ONE-HANDED WEAPONS
    oneHanded: [
        { id: 'none_1h', name: 'None', culture: 'all', tier: 0, damage: 0, speed: 0, reach: 0 },
        { id: 'cudgel', name: 'Cudgel', culture: 'all', tier: 1, damage: 18, speed: 92, reach: 60 },
        { id: 'falchion', name: 'Falchion', culture: 'all', tier: 2, damage: 32, speed: 88, reach: 75 },
        { id: 'vlandian_sword', name: 'Vlandian Arming Sword', culture: 'vlandia', tier: 3, damage: 42, speed: 94, reach: 85 },
        { id: 'battanian_axe', name: 'Battanian War Axe', culture: 'battania', tier: 3, damage: 48, speed: 84, reach: 70 },
        { id: 'khuzait_saber', name: 'Khuzait Saber', culture: 'khuzait', tier: 3, damage: 45, speed: 96, reach: 80 },
        { id: 'aserai_mace', name: 'Aserai Mace', culture: 'aserai', tier: 3, damage: 40, speed: 88, reach: 75 },
        { id: 'empire_sword', name: 'Imperial Spatha', culture: 'empire', tier: 4, damage: 50, speed: 92, reach: 88 },
        { id: 'northern_axe', name: 'Northern War Axe', culture: 'sturgia', tier: 4, damage: 54, speed: 82, reach: 72 },
        { id: 'noble_sword', name: 'Noble Long Sword', culture: 'vlandia', tier: 5, damage: 58, speed: 94, reach: 95 },
        { id: 'fine_steel_mace', name: 'Fine Steel Mace', culture: 'empire', tier: 5, damage: 52, speed: 90, reach: 80 },
        { id: 'legendary_blade', name: 'Legendary Blade', culture: 'all', tier: 6, damage: 68, speed: 98, reach: 100 }
    ],
    
    // TWO-HANDED WEAPONS
    twoHanded: [
        { id: 'none_2h', name: 'None', culture: 'all', tier: 0, damage: 0, speed: 0, reach: 0 },
        { id: 'wooden_staff', name: 'Wooden Staff', culture: 'all', tier: 1, damage: 22, speed: 90, reach: 140 },
        { id: 'two_handed_axe', name: 'Two-Handed Axe', culture: 'sturgia', tier: 2, damage: 55, speed: 78, reach: 110 },
        { id: 'falx', name: 'Rhomphaia', culture: 'empire', tier: 3, damage: 62, speed: 82, reach: 125 },
        { id: 'long_axe', name: 'Long Axe', culture: 'battania', tier: 3, damage: 65, speed: 80, reach: 115 },
        { id: 'greatsword', name: 'Vlandian Greatsword', culture: 'vlandia', tier: 4, damage: 72, speed: 84, reach: 135 },
        { id: 'great_axe', name: 'Northern Great Axe', culture: 'sturgia', tier: 4, damage: 75, speed: 78, reach: 120 },
        { id: 'two_handed_sword', name: 'Two-Handed Sword', culture: 'empire', tier: 5, damage: 78, speed: 86, reach: 140 },
        { id: 'maul', name: 'Heavy Maul', culture: 'all', tier: 5, damage: 82, speed: 74, reach: 105 }
    ],
    
    // POLEARMS
    polearms: [
        { id: 'none_pole', name: 'None', culture: 'all', tier: 0, damage: 0, speed: 0, reach: 0 },
        { id: 'pitchfork', name: 'Pitchfork', culture: 'all', tier: 1, damage: 20, speed: 85, reach: 160 },
        { id: 'spear', name: 'Spear', culture: 'all', tier: 2, damage: 32, speed: 88, reach: 180 },
        { id: 'javelin', name: 'Javelin', culture: 'all', tier: 2, damage: 38, speed: 90, reach: 160 },
        { id: 'pike', name: 'Pike', culture: 'empire', tier: 3, damage: 42, speed: 82, reach: 220 },
        { id: 'lance', name: 'Light Lance', culture: 'vlandia', tier: 3, damage: 45, speed: 86, reach: 200 },
        { id: 'glaive', name: 'Glaive', culture: 'battania', tier: 3, damage: 50, speed: 84, reach: 185 },
        { id: 'menavlion', name: 'Menavlion', culture: 'empire', tier: 4, damage: 55, speed: 80, reach: 230 },
        { id: 'heavy_lance', name: 'Heavy Lance', culture: 'vlandia', tier: 4, damage: 60, speed: 82, reach: 210 },
        { id: 'long_glaive', name: 'Long Glaive', culture: 'khuzait', tier: 5, damage: 62, speed: 86, reach: 195 },
        { id: 'kontos', name: 'Imperial Kontos', culture: 'empire', tier: 5, damage: 68, speed: 84, reach: 240 }
    ],
    
    // RANGED WEAPONS
    ranged: [
        { id: 'none_ranged', name: 'None', culture: 'all', tier: 0, damage: 0, accuracy: 0, speed: 0 },
        { id: 'hunting_bow', name: 'Hunting Bow', culture: 'all', tier: 1, damage: 28, accuracy: 85, speed: 88 },
        { id: 'light_crossbow', name: 'Light Crossbow', culture: 'vlandia', tier: 2, damage: 42, accuracy: 90, speed: 70 },
        { id: 'steppe_bow', name: 'Steppe Bow', culture: 'khuzait', tier: 2, damage: 32, accuracy: 88, speed: 92 },
        { id: 'short_bow', name: 'Short Bow', culture: 'battania', tier: 2, damage: 35, accuracy: 86, speed: 90 },
        { id: 'longbow', name: 'Battanian Longbow', culture: 'battania', tier: 3, damage: 48, accuracy: 92, speed: 82 },
        { id: 'nomad_bow', name: 'Nomad Bow', culture: 'khuzait', tier: 3, damage: 42, accuracy: 90, speed: 94 },
        { id: 'crossbow', name: 'Crossbow', culture: 'vlandia', tier: 3, damage: 55, accuracy: 95, speed: 68 },
        { id: 'composite_bow', name: 'Composite Bow', culture: 'aserai', tier: 4, damage: 52, accuracy: 94, speed: 88 },
        { id: 'heavy_crossbow', name: 'Heavy Crossbow', culture: 'vlandia', tier: 4, damage: 68, accuracy: 98, speed: 62 },
        { id: 'noble_bow', name: 'Noble Longbow', culture: 'battania', tier: 5, damage: 58, accuracy: 96, speed: 84 },
        { id: 'khuzait_bow', name: 'Khuzait Heavy Bow', culture: 'khuzait', tier: 5, damage: 56, accuracy: 95, speed: 90 }
    ],
    
    // SHIELDS
    shields: [
        { id: 'none_shield', name: 'None', culture: 'all', tier: 0, armor: 0, speed: 0 },
        { id: 'wooden_shield', name: 'Wooden Shield', culture: 'all', tier: 1, armor: 100, speed: 85 },
        { id: 'round_shield', name: 'Round Shield', culture: 'all', tier: 2, armor: 180, speed: 88 },
        { id: 'kite_shield', name: 'Kite Shield', culture: 'vlandia', tier: 3, armor: 240, speed: 82 },
        { id: 'oval_shield', name: 'Imperial Oval Shield', culture: 'empire', tier: 3, armor: 230, speed: 84 },
        { id: 'heater_shield', name: 'Heater Shield', culture: 'vlandia', tier: 4, armor: 280, speed: 86 },
        { id: 'tower_shield', name: 'Tower Shield', culture: 'empire', tier: 4, armor: 320, speed: 78 },
        { id: 'reinforced_shield', name: 'Reinforced Kite Shield', culture: 'vlandia', tier: 5, armor: 350, speed: 84 },
        { id: 'scutum', name: 'Imperial Scutum', culture: 'empire', tier: 5, armor: 360, speed: 80 }
    ],
    
    // AMMUNITION
    ammunition: [
        { id: 'none_ammo', name: 'None', culture: 'all', tier: 0, quantity: 0 },
        { id: 'arrows', name: 'Arrows (30)', culture: 'all', tier: 2, quantity: 30 },
        { id: 'bodkin_arrows', name: 'Bodkin Arrows (25)', culture: 'battania', tier: 3, quantity: 25 },
        { id: 'barbed_arrows', name: 'Barbed Arrows (28)', culture: 'khuzait', tier: 3, quantity: 28 },
        { id: 'bolts', name: 'Bolts (24)', culture: 'vlandia', tier: 2, quantity: 24 },
        { id: 'steel_bolts', name: 'Steel Bolts (20)', culture: 'vlandia', tier: 4, quantity: 20 },
        { id: 'javelins', name: 'Javelins (5)', culture: 'all', tier: 2, quantity: 5 },
        { id: 'throwing_axes', name: 'Throwing Axes (4)', culture: 'sturgia', tier: 3, quantity: 4 }
    ],
    
    // MOUNTS
    mounts: [
        { id: 'none_mount', name: 'None', culture: 'all', tier: 0, speed: 0, maneuver: 0, charge: 0, hp: 0 },
        { id: 'sumpter_horse', name: 'Sumpter Horse', culture: 'all', tier: 1, speed: 35, maneuver: 38, charge: 8, hp: 100 },
        { id: 'saddle_horse', name: 'Saddle Horse', culture: 'all', tier: 2, speed: 40, maneuver: 42, charge: 12, hp: 120 },
        { id: 'steppe_horse', name: 'Steppe Horse', culture: 'khuzait', tier: 2, speed: 45, maneuver: 50, charge: 10, hp: 110 },
        { id: 'desert_horse', name: 'Desert Horse', culture: 'aserai', tier: 3, speed: 44, maneuver: 48, charge: 14, hp: 130 },
        { id: 'courser', name: 'Courser', culture: 'vlandia', tier: 3, speed: 42, maneuver: 44, charge: 18, hp: 140 },
        { id: 'hunter', name: 'Hunter', culture: 'battania', tier: 3, speed: 43, maneuver: 46, charge: 15, hp: 135 },
        { id: 'charger', name: 'Charger', culture: 'vlandia', tier: 4, speed: 40, maneuver: 42, charge: 24, hp: 160 },
        { id: 'warhorse', name: 'Warhorse', culture: 'vlandia', tier: 5, speed: 38, maneuver: 40, charge: 30, hp: 180 },
        { id: 'cataphract_horse', name: 'Cataphract Horse', culture: 'empire', tier: 5, speed: 39, maneuver: 41, charge: 28, hp: 175 },
        { id: 'noble_horse', name: 'Noble Horse', culture: 'all', tier: 6, speed: 42, maneuver: 45, charge: 32, hp: 200 }
    ],
    
    // HORSE ARMOR
    horseArmor: [
        { id: 'none_horse_armor', name: 'None', culture: 'all', tier: 0, armor: 0 },
        { id: 'leather_harness', name: 'Leather Horse Harness', culture: 'all', tier: 2, armor: 10 },
        { id: 'padded_harness', name: 'Padded Horse Harness', culture: 'all', tier: 3, armor: 20 },
        { id: 'mail_barding', name: 'Mail Barding', culture: 'vlandia', tier: 4, armor: 35 },
        { id: 'scale_barding', name: 'Scale Barding', culture: 'empire', tier: 4, armor: 38 },
        { id: 'plate_barding', name: 'Plate Barding', culture: 'vlandia', tier: 5, armor: 50 },
        { id: 'cataphract_barding', name: 'Cataphract Barding', culture: 'empire', tier: 5, armor: 48 }
    ]
};

// Filter equipment by culture
export function filterEquipmentByCulture(equipmentArray, culture) {
    return equipmentArray.filter(item => 
        item.culture === 'all' || item.culture === culture
    );
}

export default equipment;
