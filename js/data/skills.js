// Bannerlord Skills and Attributes Data
export const attributes = {
    vigor: {
        id: 'vigor',
        name: 'Vigor',
        description: 'Represents physical strength and combat prowess in melee combat.',
        skills: ['One-Handed', 'Two-Handed', 'Polearm'],
        color: '#ff6b6b'
    },
    control: {
        id: 'control',
        name: 'Control',
        description: 'Represents precision and accuracy with ranged weapons.',
        skills: ['Bow', 'Crossbow', 'Throwing'],
        color: '#4ecdc4'
    },
    endurance: {
        id: 'endurance',
        name: 'Endurance',
        description: 'Represents physical stamina and the ability to withstand hardship.',
        skills: ['Riding', 'Athletics'],
        color: '#95e1d3'
    },
    cunning: {
        id: 'cunning',
        name: 'Cunning',
        description: 'Represents tactical thinking and the ability to outsmart opponents.',
        skills: ['Scouting', 'Tactics', 'Roguery'],
        color: '#f38181'
    },
    social: {
        id: 'social',
        name: 'Social',
        description: 'Represents interpersonal skills and leadership abilities.',
        skills: ['Charm', 'Leadership', 'Trade'],
        color: '#aa96da'
    },
    intelligence: {
        id: 'intelligence',
        name: 'Intelligence',
        description: 'Represents knowledge and the ability to learn and apply skills.',
        skills: ['Steward', 'Medicine', 'Engineering'],
        color: '#fcbad3'
    }
};

export const skills = {
    // Vigor Skills
    oneHanded: {
        id: 'oneHanded',
        name: 'One-Handed',
        attribute: 'vigor',
        description: 'Proficiency with one-handed weapons like swords, axes, and maces.',
        maxLevel: 330,
        maxFocus: 5
    },
    twoHanded: {
        id: 'twoHanded',
        name: 'Two-Handed',
        attribute: 'vigor',
        description: 'Proficiency with two-handed weapons like greatswords and battle axes.',
        maxLevel: 330,
        maxFocus: 5
    },
    polearm: {
        id: 'polearm',
        name: 'Polearm',
        attribute: 'vigor',
        description: 'Proficiency with polearms like spears, pikes, and glaives.',
        maxLevel: 330,
        maxFocus: 5
    },
    
    // Control Skills
    bow: {
        id: 'bow',
        name: 'Bow',
        attribute: 'control',
        description: 'Proficiency with bows and longbows.',
        maxLevel: 330,
        maxFocus: 5
    },
    crossbow: {
        id: 'crossbow',
        name: 'Crossbow',
        attribute: 'control',
        description: 'Proficiency with crossbows.',
        maxLevel: 330,
        maxFocus: 5
    },
    throwing: {
        id: 'throwing',
        name: 'Throwing',
        attribute: 'control',
        description: 'Proficiency with throwing weapons like javelins and axes.',
        maxLevel: 330,
        maxFocus: 5
    },
    
    // Endurance Skills
    riding: {
        id: 'riding',
        name: 'Riding',
        attribute: 'endurance',
        description: 'Ability to control and maneuver horses in combat.',
        maxLevel: 330,
        maxFocus: 5
    },
    athletics: {
        id: 'athletics',
        name: 'Athletics',
        attribute: 'endurance',
        description: 'Running speed and stamina on foot.',
        maxLevel: 330,
        maxFocus: 5
    },
    
    // Cunning Skills
    scouting: {
        id: 'scouting',
        name: 'Scouting',
        attribute: 'cunning',
        description: 'Ability to track enemies and find advantageous positions on the campaign map.',
        maxLevel: 330,
        maxFocus: 5
    },
    tactics: {
        id: 'tactics',
        name: 'Tactics',
        attribute: 'cunning',
        description: 'Increases party size and improves tactical advantages in battle.',
        maxLevel: 330,
        maxFocus: 5
    },
    roguery: {
        id: 'roguery',
        name: 'Roguery',
        attribute: 'cunning',
        description: 'Criminal activities, hostage negotiation, and bandit camps.',
        maxLevel: 330,
        maxFocus: 5
    },
    
    // Social Skills
    charm: {
        id: 'charm',
        name: 'Charm',
        attribute: 'social',
        description: 'Persuasion in conversations and improving relations.',
        maxLevel: 330,
        maxFocus: 5
    },
    leadership: {
        id: 'leadership',
        name: 'Leadership',
        attribute: 'social',
        description: 'Party morale and troop cohesion bonuses.',
        maxLevel: 330,
        maxFocus: 5
    },
    trade: {
        id: 'trade',
        name: 'Trade',
        attribute: 'social',
        description: 'Better prices when trading and increased income from caravans.',
        maxLevel: 330,
        maxFocus: 5
    },
    
    // Intelligence Skills
    steward: {
        id: 'steward',
        name: 'Steward',
        attribute: 'intelligence',
        description: 'Increases party size and settlement prosperity.',
        maxLevel: 330,
        maxFocus: 5
    },
    medicine: {
        id: 'medicine',
        name: 'Medicine',
        attribute: 'intelligence',
        description: 'Healing rate for wounded troops.',
        maxLevel: 330,
        maxFocus: 5
    },
    engineering: {
        id: 'engineering',
        name: 'Engineering',
        attribute: 'intelligence',
        description: 'Siege equipment construction and effectiveness.',
        maxLevel: 330,
        maxFocus: 5
    }
};

// Helper function to get skills by attribute
export function getSkillsByAttribute(attributeId) {
    return Object.values(skills).filter(skill => skill.attribute === attributeId);
}

export default { attributes, skills, getSkillsByAttribute };
