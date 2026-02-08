# ⚔️ Mount & Blade II: Bannerlord Companion Creator

A complete, polished, single-page web application for creating custom companions and wanderers for Mount & Blade II: Bannerlord. Inspired by the Butterlord companion creator, this tool provides a dark medieval-themed interface for fully customizing every aspect of your companion.

![Bannerlord Companion Creator](https://img.shields.io/badge/Bannerlord-Companion%20Creator-c9a84c?style=for-the-badge)
![Pure HTML/CSS/JS](https://img.shields.io/badge/Tech-HTML%2FCSS%2FJS-blue?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-green?style=for-the-badge)

## 🎮 Features

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
- **Export as JSON**: Full companion data in structured format
- **Export as Bannerlord XML**: Mod-ready XML format matching game schema
- **Copy to Clipboard**: One-click copying
- **Download Files**: Save JSON or XML locally
- **Share Links**: Generate encoded URLs to share companions
- **Import**: Load companions from JSON or shared URLs

## 🎨 Design

### Theme
- **Dark medieval fantasy aesthetic** inspired by Bannerlord
- Deep dark blue/charcoal background (#1a1a2e)
- Gold/amber accents (#c9a84c) for highlights
- Parchment text (#f0e6d3) for readability
- Medieval-style fonts (Cinzel for headings, Raleway for body)

### Layout
- **Tabbed navigation** with 8 sections
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
│   │   ├── culture.js      # Culture selection logic
│   │   ├── nameGen.js      # Name generation logic
│   │   ├── attributes.js   # Attribute allocation (15 points)
│   │   ├── skills.js       # Skills & focus points (30 points)
│   │   ├── traits.js       # Trait sliders
│   │   ├── equipment.js    # Equipment builder & filtering
│   │   ├── appearance.js   # Age/weight/build sliders
│   │   └── export.js       # JSON/XML export & import
│   └── utils/
│       └── helpers.js      # URL encoding, clipboard, notifications
└── README.md               # This file
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

1. **Select a Culture**: Choose from 6 Bannerlord cultures
2. **Name Your Companion**: Use the random generator or enter a custom name
3. **Distribute Attributes**: Allocate 15 points across 6 attributes
4. **Set Skills**: Assign skill levels and distribute 30 focus points
5. **Define Personality**: Adjust 5 trait sliders from -2 to +2
6. **Equip Your Companion**: Choose armor, weapons, and mount
7. **Customize Appearance**: Set age, weight, and build
8. **Export**: Save as JSON/XML or generate a share link

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