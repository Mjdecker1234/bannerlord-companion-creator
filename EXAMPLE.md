# Example: Creating and Spawning a Custom Companion

This guide walks you through the complete process of creating a companion with the web tool and spawning them in-game.

## Step 1: Create Your Companion in the Web Tool

1. Visit https://mjdecker1234.github.io/bannerlord-companion-creator/

2. **Culture Tab**: Select "Vlandia"

3. **Name Tab**: 
   - Select "Male"
   - Enter name: "Siegfried the Bold"

4. **Attributes Tab**: Distribute 15 points
   - Vigor: 4
   - Control: 2
   - Endurance: 3
   - Cunning: 2
   - Social: 2
   - Intelligence: 2

5. **Skills Tab**: Set your top skills
   - One-Handed: 150 (Focus: 5)
   - Two-Handed: 120 (Focus: 4)
   - Riding: 100 (Focus: 3)
   - Leadership: 80 (Focus: 3)
   - Distribute remaining focus points as desired

6. **Traits Tab**: Set personality
   - Mercy: 0 (Neutral)
   - Valor: +2 (Very Valorous)
   - Honor: +1 (Honorable)
   - Generosity: 0 (Neutral)
   - Calculating: -1 (Impulsive)

7. **Equipment Tab**: Choose your gear
   - Head: Vlandian Plumed Helmet
   - Body: Heavy Vlandian Armor
   - Hands: Plated Gauntlets
   - Legs: Heavy Boots
   - Weapon 1: Noble Sword
   - Weapon 2: Kite Shield
   - Mount: Destrier

8. **Appearance Tab**:
   - Age: 35
   - Weight: 60
   - Build: 70

9. **Dialogue Tab**: Add personality
   - Greeting 1: "Looking for a strong sword arm? You've found the right man!"
   - Story: "I served as a knight in the royal guard until..."
   - Personality: "Brave and impulsive, values honor above all"

## Step 2: Export Your Companion

1. Go to the **Export** tab

2. Click **"Copy XML to Clipboard"**

3. Your companion XML is now copied!

## Step 3: Add to the In-Game Mod

1. Navigate to your mod folder:
   ```
   [Bannerlord Install]/Modules/BannerlordCompanionCreator/ModuleData/
   ```

2. Open `spcharacters.xml` in a text editor

3. Remove the example companion (or keep it)

4. Paste your copied XML

5. **IMPORTANT**: Change the companion ID to start with `companion_`
   
   Change:
   ```xml
   <SPCharacter id="siegfried_the_bold" ...>
   ```
   
   To:
   ```xml
   <SPCharacter id="companion_siegfried" ...>
   ```

6. Save the file

Your final XML should look like:

```xml
<?xml version="1.0" encoding="utf-8"?>
<SPCharacters>
    <SPCharacter id="companion_siegfried"
                 name="{=companion_siegfried}Siegfried the Bold"
                 default_group="Infantry"
                 is_hero="true"
                 occupation="Wanderer"
                 culture="Culture.vlandia"
                 age="35"
                 is_female="false">
        
        <face>
            <face_key_template value="BodyProperty.fighter_vlandia_male" />
            <BodyProperties version="4" age="35" weight="0.6" build="0.7" />
        </face>

        <skills>
            <skill id="OneHanded" value="150" />
            <skill id="TwoHanded" value="120" />
            <skill id="Riding" value="100" />
            <skill id="Leadership" value="80" />
            <!-- other skills... -->
        </skills>

        <Traits>
            <Trait id="Mercy" value="0" />
            <Trait id="Valor" value="2" />
            <Trait id="Honor" value="1" />
            <Trait id="Generosity" value="0" />
            <Trait id="Calculating" value="-1" />
        </Traits>

        <equipmentSet civilian="false">
            <equipment slot="Item0" id="Item.vlandia_sword_4_t4" />
            <equipment slot="Item1" id="Item.AR_shield_infantry_o2" />
            <equipment slot="Body" id="Item.vlandia_armor_r" />
            <equipment slot="Head" id="Item.vlandia_helmet_m" />
            <equipment slot="Leg" id="Item.vlandia_boots_b" />
            <equipment slot="Gloves" id="Item.plated_gauntlets" />
            <equipment slot="Horse" id="Item.noble_horse" />
        </equipmentSet>
    </SPCharacter>
</SPCharacters>
```

## Step 4: Launch the Game

1. Start Mount & Blade II: Bannerlord

2. In the launcher, verify:
   - ✅ MCM (Mod Configuration Menu) is enabled
   - ✅ Bannerlord Companion Creator is enabled

3. Load your campaign or start a new one

## Step 5: Spawn Your Companion

1. In-game, press **Escape**

2. Click **"Mod Options"**

3. Select **"Companion Creator"**

4. You'll see the settings:
   - Enable Auto-Spawn: ☐ (optional)
   - Show Spawn Messages: ☑ (recommended)
   - Prevent Dead Respawn: ☑ (recommended)

5. Click the **"Spawn Custom Companions"** button

6. You should see a message:
   ```
   Spawned Siegfried the Bold in Varcheg
   Spawned 1 companion(s)
   ```

## Step 6: Find Your Companion

1. Travel to the settlement mentioned in the message (e.g., Varcheg)

2. Enter the tavern

3. Look for **Siegfried the Bold**

4. Talk to him and recruit him to your party!

## Adding More Companions

Want to add more companions? Just repeat the process:

1. Create a new companion in the web tool
2. Export as XML
3. Add to `spcharacters.xml` with a unique ID starting with `companion_`
4. Click "Spawn Custom Companions" in MCM
5. Only the new companion will spawn (existing ones are skipped)

Example with multiple companions:

```xml
<?xml version="1.0" encoding="utf-8"?>
<SPCharacters>
    <SPCharacter id="companion_siegfried" ...>
        <!-- First companion -->
    </SPCharacter>
    
    <SPCharacter id="companion_aria" ...>
        <!-- Second companion - a battanian scout -->
    </SPCharacter>
    
    <SPCharacter id="companion_khuzait_warrior" ...>
        <!-- Third companion - a khuzait horse archer -->
    </SPCharacter>
</SPCharacters>
```

## Tips and Tricks

### Naming Convention
Always use descriptive IDs:
- ✅ `companion_siegfried`
- ✅ `companion_aria_scout`
- ✅ `companion_khuzait_warrior`
- ❌ `companion_1` (not descriptive)
- ❌ `siegfried` (missing companion_ prefix)

### Multiple Spawns
If you click "Spawn Custom Companions" multiple times:
- Existing companions are detected and skipped
- Only new companions are spawned
- Dead companions never respawn (if setting is enabled)

### Managing Your Roster
- Save companions in the web tool for easy re-export
- Keep backups of your `spcharacters.xml` file
- You can remove companions from XML after spawning (they stay in your save)

### Troubleshooting

**"No custom companions found"**
- Check that your ID starts with `companion_`
- Verify the XML file is saved properly
- Make sure the file is in `ModuleData/spcharacters.xml`

**Companion spawned but can't find them**
- Check the message for which town they spawned in
- They appear in the tavern district
- They might be in a different settlement than your current location

**"Already spawned" message**
- This is normal! The mod detected the companion already exists
- You can safely ignore this for companions you've already recruited

---

## Complete Workflow Summary

1. 🌐 **Web Tool**: Design your companion
2. 📋 **Export**: Copy XML from Export tab
3. 📝 **Edit**: Add to `spcharacters.xml` with `companion_` prefix
4. 🎮 **Launch**: Start game with mod enabled
5. 🔘 **Spawn**: Use MCM button to spawn
6. 🏰 **Recruit**: Find and recruit in tavern

That's it! Enjoy your custom companions!
