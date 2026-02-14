# Quick Start Guide

## For Users Who Just Want to Create Companions

### Option 1: Web Tool Only (No Building Required)

1. Visit https://mjdecker1234.github.io/bannerlord-companion-creator/
2. Create your companion using the web interface
3. Export as XML
4. Manually add the companion to your game

**Pros**: No coding or building required  
**Cons**: Manual XML installation, companions spawn naturally over time

### Option 2: Web Tool + In-Game Spawner Mod (Requires Building)

1. Visit https://mjdecker1234.github.io/bannerlord-companion-creator/
2. Create your companion using the web interface
3. Build and install the in-game mod (see below)
4. Add your companion XML to the mod's ModuleData folder
5. Use MCM menu in-game to spawn companions instantly

**Pros**: Instant spawning, smart detection, easy management  
**Cons**: Requires building the C# mod

---

## Building the In-Game Mod

### Prerequisites

1. **Install .NET 6.0 SDK**
   - Download from: https://dotnet.microsoft.com/download/dotnet/6.0
   - Choose the SDK (not runtime)

2. **Install MCM (Required Dependency)**
   - Download from: https://www.nexusmods.com/mountandblade2bannerlord/mods/612
   - Install via Vortex or manually
   - Enable in game launcher

3. **Set Environment Variable**
   
   **Windows:**
   ```cmd
   set BANNERLORD_GAME_DIR=C:\Program Files (x86)\Steam\steamapps\common\Mount & Blade II Bannerlord
   ```
   
   **Linux/Mac:**
   ```bash
   export BANNERLORD_GAME_DIR="/path/to/Mount & Blade II Bannerlord"
   ```

### Build Steps

**Windows:**
```cmd
build.bat
```

**Linux/Mac:**
```bash
chmod +x build.sh
./build.sh
```

### Installation

1. Copy the entire mod folder to:
   ```
   [Bannerlord Install]/Modules/BannerlordCompanionCreator/
   ```

2. Enable in launcher:
   - Make sure MCM is enabled
   - Enable "Bannerlord Companion Creator"

3. Load or start a campaign

---

## Using the Mod

### Adding Companions

1. Create companions using the web tool
2. Export as XML
3. Open `ModuleData/spcharacters.xml`
4. Copy your companion XML into the file
5. **Important**: Make sure companion ID starts with `companion_`

Example:
```xml
<SPCharacter id="companion_my_warrior" ...>
    <!-- Your companion data -->
</SPCharacter>
```

### Spawning Companions

1. In-game, press **Escape**
2. Click **Mod Options**
3. Select **Companion Creator**
4. Click **"Spawn Custom Companions"** button
5. Your companions will spawn in random taverns!

### Settings

- **Auto-Spawn**: Automatically spawn on campaign start
- **Show Messages**: Display spawn notifications
- **Prevent Dead Respawn**: Keep dead companions from respawning (recommended)

---

## Troubleshooting

### "No custom companions found"
- Check that `ModuleData/spcharacters.xml` exists
- Verify companion IDs start with `companion_`
- Ensure XML is valid (no syntax errors)

### "Build failed"
- Verify BANNERLORD_GAME_DIR is set correctly
- Check .NET 6.0 SDK is installed: `dotnet --version`
- Ensure game DLLs exist in the game directory

### Companions not spawning
- Make sure MCM is installed and enabled
- Verify the mod is enabled in launcher
- Check companion IDs start with `companion_`
- Try restarting the game

### "MCM not found"
- Install MCM from Nexus Mods
- Enable MCM in game launcher before enabling this mod
- Restart the game after enabling MCM

---

## FAQ

**Q: Do I need to build the mod to use the web tool?**  
A: No! The web tool works independently. Building the mod is only needed for in-game spawning.

**Q: Can I use both the web tool and the mod?**  
A: Yes! Create companions with the web tool, then add them to the mod's XML file.

**Q: Will this work with existing saves?**  
A: Yes! You can load an existing campaign and spawn companions.

**Q: What happens if I spawn the same companion twice?**  
A: The mod detects existing companions and skips them automatically.

**Q: Can I remove the mod after spawning companions?**  
A: Yes, but the companions will remain in your save. You won't be able to spawn new ones without the mod.

**Q: Does this work in multiplayer?**  
A: No, this is a singleplayer-only mod.

---

## Support

- Report issues: https://github.com/Mjdecker1234/bannerlord-companion-creator/issues
- Full documentation: [README.md](README.md) and [INSTALLATION.md](INSTALLATION.md)
