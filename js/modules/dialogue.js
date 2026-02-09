// Dialogue Module
import { getState, updateState } from '../app.js';
import { showNotification } from '../utils/helpers.js';

export function initDialogue() {
    renderDialogue();
    setupDialogueListeners();
}

function renderDialogue() {
    const container = document.getElementById('dialogue-container');
    if (!container) return;
    
    const state = getState();
    
    let html = `
        <div class="dialogue-section">
            <h3 class="dialogue-subsection-title">Greeting Dialogue</h3>
            <p class="section-desc">Add greeting options that your companion will say when you first meet them or when talking to them in your party.</p>
            <div id="greetings-list" class="greetings-list"></div>
            <button id="add-greeting-btn" class="btn-secondary">➕ Add Greeting</button>
        </div>
        
        <div class="dialogue-section">
            <h3 class="dialogue-subsection-title">Background Story</h3>
            <p class="section-desc">Write a background story for your companion. This adds depth and personality to your character.</p>
            <textarea id="companion-story" class="story-textarea" placeholder="Enter your companion's background story...&#10;&#10;Example:&#10;'I was born in a small village near the border. My father was a blacksmith, and I learned to fight when bandits raided our town. I've been traveling ever since, looking for purpose...'">${state.dialogue?.story || ''}</textarea>
        </div>
        
        <div class="dialogue-section">
            <h3 class="dialogue-subsection-title">Personality Description</h3>
            <p class="section-desc">Describe how your companion behaves and speaks. This will help you remember their personality.</p>
            <textarea id="companion-personality" class="personality-textarea" placeholder="Enter personality description...&#10;&#10;Example:&#10;'Gruff and straightforward, speaks little but means every word. Has a dry sense of humor and respects strength.'">${state.dialogue?.personality || ''}</textarea>
        </div>
    `;
    
    container.innerHTML = html;
    renderGreetings();
}

function renderGreetings() {
    const greetingsList = document.getElementById('greetings-list');
    if (!greetingsList) return;
    
    const state = getState();
    const greetings = state.dialogue?.greetings || [];
    
    if (greetings.length === 0) {
        greetingsList.innerHTML = '<p class="no-greetings">No greetings added yet. Add at least one greeting for your companion.</p>';
        return;
    }
    
    let html = '';
    greetings.forEach((greeting, index) => {
        html += `
            <div class="greeting-item">
                <input type="text" class="greeting-input" data-index="${index}" value="${greeting}" placeholder="Enter greeting text...">
                <button class="btn-delete-greeting" data-index="${index}" title="Delete greeting">🗑️</button>
            </div>
        `;
    });
    
    greetingsList.innerHTML = html;
    
    // Add listeners for greeting inputs
    document.querySelectorAll('.greeting-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const index = parseInt(e.target.dataset.index);
            updateGreeting(index, e.target.value);
        });
    });
    
    // Add listeners for delete buttons
    document.querySelectorAll('.btn-delete-greeting').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            deleteGreeting(index);
        });
    });
}

function setupDialogueListeners() {
    // Add greeting button
    const addGreetingBtn = document.getElementById('add-greeting-btn');
    if (addGreetingBtn) {
        addGreetingBtn.addEventListener('click', addGreeting);
    }
    
    // Story textarea
    const storyTextarea = document.getElementById('companion-story');
    if (storyTextarea) {
        storyTextarea.addEventListener('input', (e) => {
            updateDialogueField('story', e.target.value);
        });
    }
    
    // Personality textarea
    const personalityTextarea = document.getElementById('companion-personality');
    if (personalityTextarea) {
        personalityTextarea.addEventListener('input', (e) => {
            updateDialogueField('personality', e.target.value);
        });
    }
}

function addGreeting() {
    const state = getState();
    const greetings = state.dialogue?.greetings || [];
    
    if (greetings.length >= 10) {
        showNotification('Maximum 10 greetings allowed', 'error');
        return;
    }
    
    greetings.push('');
    
    updateState({
        dialogue: {
            ...state.dialogue,
            greetings: greetings
        }
    });
    
    renderGreetings();
}

function updateGreeting(index, value) {
    const state = getState();
    const greetings = [...(state.dialogue?.greetings || [])];
    greetings[index] = value;
    
    updateState({
        dialogue: {
            ...state.dialogue,
            greetings: greetings
        }
    });
}

function deleteGreeting(index) {
    const state = getState();
    const greetings = [...(state.dialogue?.greetings || [])];
    greetings.splice(index, 1);
    
    updateState({
        dialogue: {
            ...state.dialogue,
            greetings: greetings
        }
    });
    
    renderGreetings();
    showNotification('Greeting deleted', 'success');
}

function updateDialogueField(field, value) {
    const state = getState();
    
    updateState({
        dialogue: {
            ...state.dialogue,
            [field]: value
        }
    });
}

export function randomizeDialogue() {
    const randomGreetings = [
        "Greetings, traveler. What brings you to these parts?",
        "Well met! Are you looking for a skilled blade?",
        "I've been waiting for someone like you.",
        "Another day, another battle. What do you need?",
        "You look like you could use someone with my talents.",
        "The road is long. Need a companion?",
        "I've heard tales of your deeds. Perhaps we could travel together?",
        "Fate brings us together, it seems.",
        "Looking for someone who knows their way around a fight?",
        "I'm ready for adventure. Are you?"
    ];
    
    const randomStories = [
        "I was born in a border village, where I learned to fight from a young age. When raiders destroyed my home, I set out to make my own way in the world, seeking purpose and vengeance.",
        "My family served noble lords for generations, but I chose a different path. I wanted to see the world and make my own fortune, not live in someone else's shadow.",
        "I grew up on the streets, learning to survive by my wits and my blade. The city taught me everything I needed to know about the harsh realities of life.",
        "Once, I was a merchant, traveling the trade routes. But bandits took everything from me. Now I travel with blade in hand, taking back what was stolen and more.",
        "I trained with the best warriors in the land, honing my skills for years. Now I seek worthy challenges and companions who can keep up with me.",
        "War orphaned me young. I was taken in by soldiers who taught me their craft. The battlefield became my home, and warriors my family."
    ];
    
    const randomPersonalities = [
        "Gruff and no-nonsense. Speaks plainly and values actions over words. Has a dry wit and respects those who can hold their own in a fight.",
        "Cheerful and optimistic, always looking for the bright side. Makes jokes to lighten the mood and is fiercely loyal to friends.",
        "Quiet and observant. Prefers to listen rather than speak, but when they do, their words carry weight. Thoughtful and strategic.",
        "Bold and confident. Never backs down from a challenge and speaks with authority. Values honor and glory above all else.",
        "Cunning and sarcastic. Always has a quip ready and enjoys outsmarting opponents. Not above bending rules to achieve goals.",
        "Calm and philosophical. Sees the bigger picture and often provides sage advice. Values wisdom and restraint over brute force."
    ];
    
    // Select 2-3 random greetings
    const numGreetings = 2 + Math.floor(Math.random() * 2); // 2-3 greetings
    const selectedGreetings = [];
    const usedIndices = new Set();
    
    while (selectedGreetings.length < numGreetings) {
        const index = Math.floor(Math.random() * randomGreetings.length);
        if (!usedIndices.has(index)) {
            usedIndices.add(index);
            selectedGreetings.push(randomGreetings[index]);
        }
    }
    
    const randomStory = randomStories[Math.floor(Math.random() * randomStories.length)];
    const randomPersonality = randomPersonalities[Math.floor(Math.random() * randomPersonalities.length)];
    
    updateState({
        dialogue: {
            greetings: selectedGreetings,
            story: randomStory,
            personality: randomPersonality
        }
    });
    
    renderDialogue();
    showNotification('Dialogue randomized!', 'success');
}
