# ⚔️ Mount & Blade II: Bannerlord Companion Creator

A complete companion creation system for Mount & Blade II: Bannerlord featuring:
- **Web-based Creator**: Polished single-page application for designing companions
- **In-Game Mod**: C# mod with MCM integration to spawn companions directly in-game

![Bannerlord Companion Creator](https://img.shields.io/badge/Bannerlord-Companion%20Creator-c9a84c?style=for-the-badge)
![Pure HTML/CSS/JS](https://img.shields.io/badge/Tech-HTML%2FCSS%2FJS-blue?style=for-the-badge)
![C# Mod](https://img.shields.io/badge/Tech-C%23%20Mod-purple?style=for-the-badge)

## 🎮 Two Ways to Use

### 🌐 Web Creator (For Designing Companions)
Use the [web tool](https://mjdecker1234.github.io/bannerlord-companion-creator/) to create and customize companions with a beautiful interface.

### 🎯 In-Game Mod (NEW! - For Spawning Companions)
Install the C# mod to spawn your created companions directly in-game with a button click via MCM!

**Features:**
- ✅ Spawn companions with one click in MCM menu
- ✅ Smart detection - only spawns companions that don't exist yet
- ✅ Dead companions stay dead (no resurrection)
- ✅ Works with companions created in the web tool

**[📖 See INSTALLATION.md for in-game mod setup instructions](INSTALLATION.md)**

## 🎮 Web Creator Features

### 💾 Saved Companions System (NEW!)
- **Local Storage Save System**: Save unlimited companions in your browser
- **Quick Save & Load**: Name your saves and load them instantly
- **Companion Library**: Browse all saved companions with detailed cards
- **Persistent Storage**: Companions persist across browser sessions
- **One-Click Management**: Load or delete saved companions with single click
- **Smart Save Cards**: Display character stats, culture, and save date

### 💬 Dialogue & Story System (NEW!)
- **Multiple Greetings**: Add up to 10 custom greeting dialogues for your companion
- **Background Story**: Write detailed origin stories and backgrounds
- **Personality Description**: Define how your companion behaves and speaks
- **Randomize Dialogue**: Generate realistic dialogue with one click
- **Export Support**: Dialogue included in JSON exports and as comments in XML

### 🎲 Randomization System
- **One-Click Full Randomization**: Generate a completely random companion with the "Randomize All" button
- **Per-Section Randomization**: Randomize individual aspects (culture, name, attributes, skills, traits, equipment, appearance, dialogue)
- **Smart Randomization**: 
  - Attributes: Distributes 15 points randomly while respecting limits
  - Skills: Distributes 30 focus points and sets skill levels based on focus
  - Traits: Random values between -2 and +2
  - Equipment: Culture-appropriate random gear selection
  - Dialogue: Realistic greetings, stories, and personality descriptions

### 📦 Vortex Mod Export
- **One-Click Mod Creation**: Download your companion as a complete Bannerlord mod
- **ZIP Download**: Download a ready-to-install ZIP file with proper folder structure (Recommended)
- **Individual Files Option**: Download SubModule.xml, spcharacters.xml, and README separately
- **Vortex Compatible**: Ready for Vortex Mod Manager installation
- **Complete Package**: Includes SubModule.xml, spcharacters.xml, and installation instructions
- **Manual Installation Supported**: Can also be installed directly into game's Modules folder
- **Dialogue Preservation**: Dialogue and story included as XML comments for reference

### Culture Selection
- **6 Bannerlord Cultures**: Vlandia, Sturgia, Empire, Aserai, Khuzait, and Battania
- Each culture displays unique icons, lore descriptions, and gameplay bonuses
- Culture selection filters equipment and influences name generation
- Beautiful card-based selection UI

### Name Generation
- **Culture-appropriate random name generator** with 30+ names per culture per gender
- **Gender toggle** (Male/Female) affecting name suggestions
- **Manual name override** for custom names
- One-click randomization with dice button

### Attributes System
- **6 Core Attributes**: Vigor, Control, Endurance, Cunning, Social, Intelligence
- **15-point attribute pool** to distribute across attributes (0-10 per attribute)
- Visual progress bars showing current attribute levels
- Each attribute displays its associated skills
- Color-coded UI with descriptions and tooltips

### Skills System
- **18 Skills** organized by parent attribute:
  - **Vigor**: One-Handed, Two-Handed, Polearm
  - **Control**: Bow, Crossbow, Throwing
  - **Endurance**: Riding, Athletics
  - **Cunning**: Scouting, Tactics, Roguery
  - **Social**: Charm, Leadership, Trade
  - **Intelligence**: Steward, Medicine, Engineering
- **Focus point system**: 30 focus points to distribute (0-5 focus per skill)
- **Skill levels**: 0-330 range for each skill
- Real-time tracking of remaining focus points

### Personality Traits
- **5 Personality Traits** on a -2 to +2 scale:
  - **Mercy**: Cruel ↔ Merciful
  - **Valor**: Cautious ↔ Valorous
  - **Honor**: Devious ↔ Honorable
  - **Generosity**: Closefisted ↔ Generous
  - **Calculating**: Impulsive ↔ Calculating
- Smooth slider controls with visual feedback
- Each trait displays both extremes

### Equipment Builder
- **3 Equipment Categories**: Armor, Weapons, Mount
- **Comprehensive item database** with accurate Bannerlord stats:
  - **Armor**: Head, Body, Hands, Legs, Cape/Shoulders
  - **Weapons**: 4 weapon slots supporting melee and ranged weapons
  - **Mounts**: Horses and horse armor
- **Culture-based filtering** shows appropriate equipment
- **Tier ratings** (1-6) for all items
- **Real-time stats display** for equipped items
- 100+ unique equipment pieces

### Appearance Customization
- **Age**: 20-70 years
- **Weight**: Thin to Heavy (0-100)
- **Build**: Slender to Muscular (0-100)

### Live Character Summary
- **Real-time sidebar** showing all companion details
- Updates instantly as you make changes
- Displays:
  - Basic info (name, gender, culture, age)
  - All attributes with current values
  - Top 5 skills with focus points
  - Active personality traits
- Collapsible on mobile devices

### Export & Share
- **Download as Vortex Mod**: Export your companion as a complete mod package ready for Vortex Mod Manager
  - **ZIP Download (Recommended)**: One-click download of a complete, ready-to-install ZIP file with proper folder structure
  - **Individual Files Option**: Download SubModule.xml, spcharacters.xml, and README separately
  - Generates SubModule.xml for mod structure
  - Creates spcharacters.xml with proper Bannerlord format
  - Includes installation instructions README
  - Compatible with manual installation and Vortex Mod Manager
  - Dialogue preserved as XML comments
- **Export as JSON**: Full companion data in structured format (includes dialogue)
- **Export as Bannerlord XML**: Mod-ready XML format matching game schema
- **Copy to Clipboard**: One-click copying
- **Download Files**: Save JSON or XML locally
- **Share Links**: Generate encoded URLs to share companions
- **Import**: Load companions from JSON or shared URLs

### Randomization Features
- **Global Randomize All**: Randomize everything with one click from the header button
- **Per-Tab Randomization**: Each section has its own randomize button
  - Randomize Culture: Pick a random culture
  - Randomize Name: Generate random name based on culture and gender
  - Randomize Attributes: Distribute 15 points randomly
  - Randomize Skills: Distribute 30 focus points and set random skill levels
  - Randomize Traits: Set random personality traits (-2 to +2)
  - Randomize Equipment: Pick random culture-appropriate gear
  - Randomize Appearance: Set random age, weight, and build
  - Randomize Dialogue: Generate greetings, story, and personality

## 🎨 Design

### Theme
- **Dark medieval fantasy aesthetic** inspired by Bannerlord
- Deep dark blue/charcoal background (#1a1a2e)
- Gold/amber accents (#c9a84c) for highlights
- Parchment text (#f0e6d3) for readability
- Medieval-style fonts (Cinzel for headings, Raleway for body)

### Layout
- **Tabbed navigation** with 10 sections: Culture, Name, Attributes, Skills, Traits, Equipment, Appearance, Dialogue, Saved, Export
- **Progress indicators** showing completion
- **Responsive design** for desktop, tablet, and mobile
- **Smooth transitions** and hover effects
- **Touch-friendly** controls

## 🚀 Getting Started

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/Mjdecker1234/bannerlord-companion-creator.git
   cd bannerlord-companion-creator
   ```

2. Open `index.html` in your browser:
   ```bash
   # Using Python's built-in server
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server
   ```

3. Navigate to `http://localhost:8000`

### GitHub Pages Deployment
This site is ready for GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to Pages section
3. Select the main branch as the source
4. Your site will be available at `https://yourusername.github.io/bannerlord-companion-creator/`

## 📁 Project Structure

```
/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling (dark medieval theme)
├── js/
│   ├── app.js              # Main application logic & state management
│   ├── data/
│   │   ├── cultures.js     # 6 cultures with bonuses & descriptions
│   │   ├── names.js        # 30+ names per culture/gender
│   │   ├── skills.js       # 18 skills & 6 attributes definitions
│   │   ├── equipment.js    # 100+ equipment items with stats
│   │   └── traits.js       # 5 personality traits
│   ├── modules/
│   │   ├── culture.js         # Culture selection logic
│   │   ├── nameGen.js         # Name generation logic
│   │   ├── attributes.js      # Attribute allocation (15 points)
│   │   ├── skills.js          # Skills & focus points (30 points)
│   │   ├── traits.js          # Trait sliders
│   │   ├── equipment.js       # Equipment builder & filtering
│   │   ├── appearance.js      # Age/weight/build sliders
│   │   ├── dialogue.js        # Dialogue & story system (NEW!)
│   │   ├── savedCompanions.js # Local storage save/load system (NEW!)
│   │   └── export.js          # JSON/XML export & import
│   └── utils/
│       └── helpers.js         # URL encoding, clipboard, notifications
└── README.md                  # This file
```

## 💻 Technical Details

### Technologies
- **Pure HTML5** - Semantic markup
- **Pure CSS3** - No preprocessors, custom properties for theming
- **Vanilla JavaScript (ES6+)** - No frameworks or libraries
- **ES6 Modules** - Clean, modular code organization

### Features
- **Client-side only** - No backend required
- **No external dependencies** - Completely self-contained
- **State management** - Central state with event-driven updates
- **URL-based sharing** - Base64-encoded compressed state
- **Responsive design** - Mobile-first approach
- **Cross-browser compatible** - Works on all modern browsers

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🎯 Usage

### Quick Start with Randomization
1. **Click "Randomize All"** in the top-right corner for an instant random companion
2. **Customize** any aspect you want to change
3. **Export as Vortex Mod** to install in your game

### Manual Creation
1. **Select a Culture**: Choose from 6 Bannerlord cultures
2. **Name Your Companion**: Use the random generator or enter a custom name
3. **Distribute Attributes**: Allocate 15 points across 6 attributes (or click Randomize)
4. **Set Skills**: Assign skill levels and distribute 30 focus points (or click Randomize)
5. **Define Personality**: Adjust 5 trait sliders from -2 to +2 (or click Randomize)
6. **Equip Your Companion**: Choose armor, weapons, and mount (or click Randomize)
7. **Customize Appearance**: Set age, weight, and build (or click Randomize)
8. **Add Dialogue**: Write greetings, background story, and personality (or click Randomize)
9. **Save**: Save your companion to browser storage for later use
10. **Export**: Download as Vortex Mod, JSON/XML, or generate a share link

### Installing Your Companion

#### Using Vortex Mod Manager (Recommended - ZIP Download)
1. Click "Download as ZIP (Recommended)" in the Export tab
2. The ZIP file will be downloaded with the proper folder structure already set up
3. Install via Vortex: Mods → Install From File
4. Select the downloaded ZIP file
5. Enable the mod in Vortex and in the game launcher
6. Find your companion in taverns across Calradia!

#### Using Vortex Mod Manager (Individual Files)
1. Click "Download Individual Files" in the Export tab
2. Create a folder with your companion's name (e.g., "SiegfriedCompanion")
3. Inside it, create a "ModuleData" folder
4. Place SubModule.xml in the root folder
5. Place spcharacters.xml in the ModuleData folder
6. Compress the folder to a .zip file
7. Install via Vortex: Mods → Install From File
8. Enable the mod in Vortex and in the game launcher
9. Find your companion in taverns across Calradia!

#### Manual Installation
1. Download the ZIP file or individual files
2. If you downloaded the ZIP, extract it first
3. Navigate to your Bannerlord installation folder
4. Go to the Modules directory
5. Copy the extracted companion folder into Modules
6. Enable the mod in the game launcher

## 📝 Data Accuracy

All game data (equipment stats, skill descriptions, culture bonuses) is based on Mount & Blade II: Bannerlord. While we strive for accuracy, some values may differ slightly from the current game version.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📜 License

This project is not affiliated with TaleWorlds Entertainment. Mount & Blade II: Bannerlord is a trademark of TaleWorlds Entertainment.

This fan-made tool is provided as-is for the Bannerlord community.

## 🔗 Links

- [Live Demo](https://mjdecker1234.github.io/bannerlord-companion-creator/)
- [Report Issues](https://github.com/Mjdecker1234/bannerlord-companion-creator/issues)
- [Mount & Blade II: Bannerlord](https://www.taleworlds.com/en/Games/Bannerlord)

## ⭐ Acknowledgments

- Inspired by [Butterlord.com](https://butterlord.com/wanderers)
- Built for the Mount & Blade II: Bannerlord community
- Thanks to TaleWorlds Entertainment for creating an amazing game

---

**Made with ⚔️ for the Bannerlord community**