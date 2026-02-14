# System Architecture & Workflow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    BANNERLORD COMPANION CREATOR SYSTEM                   │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────┐      ┌──────────────────────────────┐
│       WEB CREATOR TOOL          │      │      IN-GAME MOD (C#)         │
│    (HTML/CSS/JavaScript)        │      │  (Bannerlord Plugin)         │
├─────────────────────────────────┤      ├──────────────────────────────┤
│                                 │      │                              │
│  • Culture Selection            │      │  • SubModule.cs              │
│  • Name Generation              │      │    └─> Mod Entry Point       │
│  • Attributes (15 points)       │      │                              │
│  • Skills (30 focus points)     │◄────►│  • CompanionManager.cs       │
│  • Traits (-2 to +2)            │      │    └─> Spawning Logic        │
│  • Equipment Builder            │      │       ├─> Detect existing    │
│  • Appearance Customization     │      │       ├─> Check if dead      │
│  • Dialogue & Story             │      │       └─> Random placement   │
│  • Save/Load System             │      │                              │
│  • Export Options:              │      │  • Settings.cs               │
│    ├─> JSON                     │      │    └─> MCM Integration       │
│    ├─> XML                      │      │       ├─> Spawn Button       │
│    ├─> Vortex Mod               │      │       └─> Configuration      │
│    └─> Share Link               │      │                              │
│                                 │      │  Dependencies:               │
│  URL: mjdecker1234.github.io/  │      │  • MCM v5.11.3+              │
│       bannerlord-companion-     │      │  • .NET 6.0                  │
│       creator                   │      │  • Bannerlord e1.8.0+        │
└─────────────────────────────────┘      └──────────────────────────────┘
            │                                          │
            │                                          │
            ▼                                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         COMPANION DATA (XML)                             │
├─────────────────────────────────────────────────────────────────────────┤
│  ModuleData/spcharacters.xml                                            │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ <SPCharacter id="companion_siegfried" ...>                        │  │
│  │   <skills>...</skills>                                            │  │
│  │   <Traits>...</Traits>                                            │  │
│  │   <equipmentSet>...</equipmentSet>                                │  │
│  │ </SPCharacter>                                                    │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    MOUNT & BLADE II: BANNERLORD                          │
├─────────────────────────────────────────────────────────────────────────┤
│  In-Game:                                                                │
│  1. Press ESC → Mod Options → Companion Creator                         │
│  2. Click "Spawn Custom Companions" button                              │
│  3. Companions appear in taverns across Calradia                        │
│  4. Recruit them to your party!                                         │
└─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════
                              WORKFLOW OPTIONS
═══════════════════════════════════════════════════════════════════════════

OPTION 1: WEB TOOL ONLY (Traditional Method)
────────────────────────────────────────────────────────
  1. Create companion in web tool
  2. Export as Vortex Mod (ZIP)
  3. Install via Vortex Mod Manager
  4. Enable in launcher
  5. Wait for companion to spawn naturally in game
  
  ✓ No building required
  ✗ Slower (natural spawning takes time)
  ✗ No control over spawn timing


OPTION 2: WEB TOOL + IN-GAME MOD (Recommended)
────────────────────────────────────────────────────────
  1. Create companion in web tool
  2. Export as XML
  3. Add XML to ModuleData/spcharacters.xml
  4. Use MCM button in-game to spawn instantly
  
  ✓ Instant spawning
  ✓ Smart detection (no duplicates)
  ✓ Dead protection
  ✗ Requires building C# mod


═══════════════════════════════════════════════════════════════════════════
                           FEATURE COMPARISON
═══════════════════════════════════════════════════════════════════════════

Feature                      │ Web Only │ Web + Mod │ Notes
─────────────────────────────┼──────────┼───────────┼─────────────────────
Create Companions            │    ✓     │     ✓     │ Both use web tool
Instant Spawning             │    ✗     │     ✓     │ Mod only
Control Spawn Timing         │    ✗     │     ✓     │ Mod only
Prevent Duplicates           │    ✗     │     ✓     │ Mod checks existing
Dead Companion Protection    │    ✗     │     ✓     │ Mod prevents respawn
Multiple Companions          │    ✓     │     ✓     │ Both support
Save/Load Designs            │    ✓     │     ✓     │ Web tool feature
No Building Required         │    ✓     │     ✗     │ Mod needs .NET SDK
In-Game Settings Menu        │    ✗     │     ✓     │ MCM integration


═══════════════════════════════════════════════════════════════════════════
                          TECHNICAL ARCHITECTURE
═══════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────┐
│                         C# MOD ARCHITECTURE                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌────────────────┐         ┌──────────────────┐                       │
│  │  SubModule.cs  │────────►│  Campaign Start  │                       │
│  │  (Entry Point) │         └──────────────────┘                       │
│  └────────────────┘                   │                                 │
│                                       ▼                                 │
│                        ┌──────────────────────────┐                     │
│                        │ CompanionManagerBehavior │                     │
│                        │      (Main Logic)        │                     │
│                        └──────────────────────────┘                     │
│                                       │                                 │
│                  ┌────────────────────┼────────────────────┐            │
│                  ▼                    ▼                    ▼            │
│         ┌────────────────┐  ┌────────────────┐  ┌────────────────┐    │
│         │ Load Companion │  │ Check Existing │  │ Spawn in Town  │    │
│         │      XMLs      │  │  Heroes (Dict) │  │   Settlement   │    │
│         └────────────────┘  └────────────────┘  └────────────────┘    │
│                  │                    │                    │            │
│                  └────────────────────┴────────────────────┘            │
│                                       │                                 │
│                                       ▼                                 │
│                        ┌──────────────────────────┐                     │
│                        │   Display Messages to    │                     │
│                        │        Player            │                     │
│                        └──────────────────────────┘                     │
│                                                                          │
│  ┌────────────────┐         ┌──────────────────┐                       │
│  │  Settings.cs   │────────►│   MCM Menu       │                       │
│  │ (MCM Settings) │         │  - Spawn Button  │                       │
│  └────────────────┘         │  - Auto-spawn    │                       │
│                             │  - Show Messages │                       │
│                             │  - Death Protect │                       │
│                             └──────────────────┘                       │
└─────────────────────────────────────────────────────────────────────────┘


═══════════════════════════════════════════════════════════════════════════
                            DATA FLOW DIAGRAM
═══════════════════════════════════════════════════════════════════════════

  User Creates      Web Tool        Export           Add to Mod
  Companion    ──►  Customizes  ──►  to XML     ──►  spcharacters.xml
                    Character
                                                          │
  ┌─────────────────────────────────────────────────────┘
  │
  ▼
  Game Loads XML
  │
  ▼
  Mod Detects "companion_*" IDs
  │
  ├──► For Each Companion:
  │    │
  │    ├──► Check if Hero.FindFirst(companion) exists
  │    │    │
  │    │    ├──► If NULL: Create and Spawn ✓
  │    │    │
  │    │    └──► If EXISTS:
  │    │         │
  │    │         ├──► If Dead: Skip (No Respawn) ✗
  │    │         │
  │    │         └──► If Alive: Skip (Already Exists) ✗
  │    │
  │    └──► Display Result Message
  │
  └──► Show Summary: "Spawned X, Skipped Y"


═══════════════════════════════════════════════════════════════════════════
                        FILE STRUCTURE OVERVIEW
═══════════════════════════════════════════════════════════════════════════

bannerlord-companion-creator/
├── Web Tool (HTML/CSS/JS)
│   ├── index.html                    # Main web interface
│   ├── css/styles.css                # Styling
│   └── js/
│       ├── app.js                    # Main application
│       ├── modules/                  # Feature modules
│       ├── data/                     # Game data (cultures, items, etc)
│       └── utils/                    # Helper functions
│
├── C# Mod Source
│   ├── src/
│   │   ├── SubModule.cs              # Mod entry point
│   │   ├── CompanionManagerBehavior.cs  # Spawning logic
│   │   └── Settings.cs               # MCM settings
│   ├── BannerlordCompanionCreator.csproj  # Project file
│   └── SubModule.xml                 # Mod manifest
│
├── Companion Data
│   └── ModuleData/
│       └── spcharacters.xml          # Companion definitions
│
├── Build Tools
│   ├── build.bat                     # Windows build script
│   └── build.sh                      # Linux/Mac build script
│
├── Documentation
│   ├── README.md                     # Main overview
│   ├── INSTALLATION.md               # Setup guide
│   ├── QUICKSTART.md                 # Quick reference
│   ├── EXAMPLE.md                    # Step-by-step tutorial
│   ├── IMPLEMENTATION.md             # Technical details
│   └── ARCHITECTURE.md               # This file
│
└── Build Output (Generated)
    └── bin/Win64_Shipping_Client/
        └── BannerlordCompanionCreator.dll  # Compiled mod


═══════════════════════════════════════════════════════════════════════════
                         INSTALLATION OVERVIEW
═══════════════════════════════════════════════════════════════════════════

┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│  Prerequisites  │  ──► │   Build Mod     │  ──► │  Install & Use  │
└─────────────────┘      └─────────────────┘      └─────────────────┘
        │                         │                         │
        ▼                         ▼                         ▼
   • .NET 6.0 SDK          • Set ENV var         • Copy to Modules/
   • MCM installed         • Run build.bat       • Enable in launcher
   • Bannerlord            • Wait for compile    • Load campaign
                                                 • Open MCM menu
                                                 • Click spawn button


═══════════════════════════════════════════════════════════════════════════
                              SUMMARY
═══════════════════════════════════════════════════════════════════════════

This system provides two complementary tools:

1. WEB TOOL: Design and customize companions with a beautiful interface
2. IN-GAME MOD: Spawn companions instantly with intelligent detection

Both tools work together seamlessly, giving users the flexibility to choose
their preferred workflow while maintaining full compatibility with each other.

The architecture is modular, maintainable, and follows Bannerlord modding
best practices while keeping the web tool completely independent for users
who prefer the simpler, traditional installation method.
