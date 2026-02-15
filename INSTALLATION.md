# Bannerlord Companion Creator - In-Game Mod Installation Guide

> ⚠️ **IMPORTANT**: This mod does NOT include a pre-built DLL file. You MUST build the DLL yourself before the mod will work. See [Step 2: Build the Mod](#step-2-build-the-mod) for instructions.

## Overview

This mod allows you to spawn custom companions in Mount & Blade II: Bannerlord directly in-game using the Mod Configuration Menu (MCM).

## Features

✅ **In-Game Companion Spawning**: Spawn custom companions with a button click in MCM  
✅ **Smart Spawn Detection**: Only spawns companions that haven't been spawned yet  
✅ **Dead Companion Protection**: Dead companions stay dead and won't respawn  
✅ **Web Creator Integration**: Use the web tool to create companions, then add them to the mod  
✅ **MCM Integration**: Easy-to-use configuration menu in-game  

## Requirements

1. **Mount & Blade II: Bannerlord** (Latest version recommended)
2. **.NET 6.0 SDK** (Required for building the mod) - [Download here](https://dotnet.microsoft.com/download)
3. **Mod Configuration Menu (MCM)** v5.11.3 or higher (Optional, but recommended for in-game configuration)
   - Download from [Nexus Mods](https://www.nexusmods.com/mountandblade2bannerlord/mods/612)
   - The mod will work without MCM, but you won't have access to the in-game configuration menu

## Installation Steps

### Step 1: Install MCM (Optional, but Recommended)

1. Download [Mod Configuration Menu (MCM)](https://www.nexusmods.com/mountandblade2bannerlord/mods/612) from Nexus Mods
2. Install it using Vortex Mod Manager or manually
3. Enable MCM in the game launcher

**Note**: The mod will work without MCM, but you won't be able to use the in-game configuration menu to spawn companions. You can still manually add companions to the XML files.

### Step 2: Build the Mod

**Option A: Using Visual Studio (Recommended)**

1. Install [Visual Studio 2022](https://visualstudio.microsoft.com/) with .NET 6.0 SDK
2. Clone this repository
3. Set the environment variable `BANNERLORD_GAME_DIR` to your Bannerlord installation path:
   ```
   Example: C:\Program Files (x86)\Steam\steamapps\common\Mount & Blade II Bannerlord
   ```
4. Open `BannerlordCompanionCreator.csproj` in Visual Studio
5. Build the project (Ctrl+Shift+B)
6. The DLL will be output to `bin/Win64_Shipping_Client/BannerlordCompanionCreator.dll`

**Option B: Using .NET CLI**

1. Install [.NET 6.0 SDK](https://dotnet.microsoft.com/download)
2. Clone this repository
3. Set the environment variable `BANNERLORD_GAME_DIR`:
   ```bash
   # Windows
   set BANNERLORD_GAME_DIR=C:\Program Files (x86)\Steam\steamapps\common\Mount & Blade II Bannerlord
   
   # Linux/Mac
   export BANNERLORD_GAME_DIR="/path/to/Mount & Blade II Bannerlord"
   ```
4. Build the project:
   ```bash
   dotnet build BannerlordCompanionCreator.csproj
   ```
5. After a successful build, the DLL will be located at `bin/Win64_Shipping_Client/BannerlordCompanionCreator.dll`

> ✅ **Build Verification**: After building, verify that `bin/Win64_Shipping_Client/BannerlordCompanionCreator.dll` exists in your repository folder. This DLL is required for the mod to load.

### Step 3: Install the Mod

1. Copy the entire mod folder to your Bannerlord Modules directory:
   ```
   [Bannerlord Install]/Modules/BannerlordCompanionCreator/
   ```
   
   The folder structure should look like:
   ```
   Modules/
   └── BannerlordCompanionCreator/
       ├── bin/
       │   └── Win64_Shipping_Client/
       │       └── BannerlordCompanionCreator.dll
       ├── ModuleData/
       │   └── spcharacters.xml
       └── SubModule.xml
   ```

2. Launch Mount & Blade II: Bannerlord
3. Enable "Bannerlord Companion Creator" in the launcher (make sure MCM is also enabled)
4. Start or load a campaign

## How to Use

### Creating Companions with the Web Tool

1. Visit the [Bannerlord Companion Creator Web Tool](https://mjdecker1234.github.io/bannerlord-companion-creator/)
2. Create your custom companion:
   - Select culture, name, attributes, skills, traits, equipment, appearance, and dialogue
   - Use the randomize buttons for quick generation
3. Go to the **Export** tab
4. Click **"Copy XML to Clipboard"** or **"Download XML File"**
5. Add the companion to `ModuleData/spcharacters.xml`

**Important**: Make sure your companion's ID starts with `companion_` (e.g., `companion_siegfried`)

### Spawning Companions In-Game

1. Load a campaign or start a new one
2. Press **Escape** to open the menu
3. Click **"Mod Options"**
4. Select **"Companion Creator"**
5. Click the **"Spawn Custom Companions"** button
6. Your companions will spawn in random taverns across Calradia!

### Settings

In the MCM menu, you can configure:

- **Enable Auto-Spawn on Campaign Start**: Automatically spawn companions when starting a new campaign
- **Show Spawn Messages**: Display messages when companions are spawned or skipped
- **Prevent Dead Companion Respawn**: Keep dead companions from respawning (recommended)

## Adding Multiple Companions

You can add as many companions as you want! Just add more `<SPCharacter>` entries in `ModuleData/spcharacters.xml`:

```xml
<SPCharacters>
    <SPCharacter id="companion_warrior_1" ...>
        <!-- Companion 1 definition -->
    </SPCharacter>
    
    <SPCharacter id="companion_mage_2" ...>
        <!-- Companion 2 definition -->
    </SPCharacter>
    
    <!-- Add more here -->
</SPCharacters>
```

## How It Works

1. **Companion Detection**: The mod scans `ModuleData/spcharacters.xml` for companions with IDs starting with `companion_`
2. **Existence Check**: For each companion, it checks if they already exist in the world
3. **Death Check**: If a companion exists but is dead, they are skipped
4. **Smart Spawning**: Only new, unspawned companions are created
5. **Random Placement**: Companions spawn in random town taverns across Calradia

## Troubleshooting

### Companions Not Spawning

- Make sure companion IDs start with `companion_`
- Check that the XML is valid (no syntax errors)
- Ensure MCM is installed and enabled
- Verify the mod is enabled in the launcher

### "No custom companions found" Message

- Check that `ModuleData/spcharacters.xml` exists
- Verify companion IDs start with `companion_`
- Ensure the XML is properly formatted

### Build Errors

- Verify `BANNERLORD_GAME_DIR` environment variable is set correctly
- Make sure you have .NET 6.0 SDK installed
- Check that all Bannerlord DLL references exist in the game directory

### Game Crashes

- Ensure you're using the correct Bannerlord version
- Update MCM to the latest version
- Check the game logs in `[Documents]/Mount and Blade II Bannerlord/Logs/`

## Compatibility

- **Bannerlord Version**: e1.8.0+ (Latest version recommended)
- **MCM Version**: v5.11.3+
- **Other Mods**: Should be compatible with most mods

## Credits

- Web tool created using vanilla HTML/CSS/JavaScript
- C# mod uses TaleWorlds Entertainment's modding API
- MCM integration by Aragas
- Inspired by Butterlord companion creator

## License

This project is not affiliated with TaleWorlds Entertainment. Mount & Blade II: Bannerlord is a trademark of TaleWorlds Entertainment.

This fan-made tool is provided as-is for the Bannerlord community.

## Support

For issues, questions, or contributions:
- [GitHub Issues](https://github.com/Mjdecker1234/bannerlord-companion-creator/issues)
- [GitHub Repository](https://github.com/Mjdecker1234/bannerlord-companion-creator)

---

**Made with ⚔️ for the Bannerlord community**
