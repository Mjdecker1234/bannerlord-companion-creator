// Bannerlord Personality Traits Data
export const traits = {
    mercy: {
        id: 'mercy',
        name: 'Mercy',
        min: -2,
        max: 2,
        negativeLabel: 'Cruel',
        positiveLabel: 'Merciful',
        description: 'Determines how the companion treats defeated enemies and prisoners.'
    },
    valor: {
        id: 'valor',
        name: 'Valor',
        min: -2,
        max: 2,
        negativeLabel: 'Cautious',
        positiveLabel: 'Valorous',
        description: 'Determines the companion\'s bravery and willingness to take risks in battle.'
    },
    honor: {
        id: 'honor',
        name: 'Honor',
        min: -2,
        max: 2,
        negativeLabel: 'Devious',
        positiveLabel: 'Honorable',
        description: 'Determines whether the companion prefers honest dealings or cunning tactics.'
    },
    generosity: {
        id: 'generosity',
        name: 'Generosity',
        min: -2,
        max: 2,
        negativeLabel: 'Closefisted',
        positiveLabel: 'Generous',
        description: 'Determines how willing the companion is to share wealth and resources.'
    },
    calculating: {
        id: 'calculating',
        name: 'Calculating',
        min: -2,
        max: 2,
        negativeLabel: 'Impulsive',
        positiveLabel: 'Calculating',
        description: 'Determines whether the companion acts on instinct or careful planning.'
    }
};

export function getTraitLabel(traitId, value) {
    const trait = traits[traitId];
    if (!trait) return 'Unknown';
    
    if (value < 0) {
        return `${trait.negativeLabel} (${value})`;
    } else if (value > 0) {
        return `${trait.positiveLabel} (+${value})`;
    } else {
        return 'Neutral (0)';
    }
}

export default traits;
