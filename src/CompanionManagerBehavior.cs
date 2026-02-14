using System;
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Localization;
using TaleWorlds.ObjectSystem;

namespace BannerlordCompanionCreator
{
    /// <summary>
    /// Campaign behavior for managing custom companion spawning
    /// </summary>
    public class CompanionManagerBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            // Register any campaign events if needed
        }

        public override void SyncData(IDataStore dataStore)
        {
            // Sync any persistent data if needed
        }

        /// <summary>
        /// Spawns custom companions from the ModuleData/spcharacters.xml file
        /// Only spawns companions that don't already exist or are not dead
        /// </summary>
        public void SpawnCustomCompanions()
        {
            try
            {
                if (Campaign.Current == null)
                {
                    InformationManager.DisplayMessage(new InformationMessage(
                        "Cannot spawn companions: No active campaign!", 
                        ColorHelper.Red));
                    return;
                }

                // Get all character objects that are custom companions
                var customCompanions = CharacterObject.All
                    .Where(c => c.Occupation == Occupation.Wanderer && 
                                c.StringId.StartsWith("companion_"));

                if (!customCompanions.Any())
                {
                    InformationManager.DisplayMessage(new InformationMessage(
                        "No custom companions found in ModuleData!", 
                        ColorHelper.Yellow));
                    return;
                }

                int spawnedCount = 0;
                int skippedCount = 0;

                foreach (var companionCharacter in customCompanions)
                {
                    // Check if this companion already exists
                    Hero existingHero = Hero.FindFirst(h => h.CharacterObject == companionCharacter);

                    if (existingHero != null)
                    {
                        // Hero exists - check if they're dead
                        if (existingHero.IsDead)
                        {
                            InformationManager.DisplayMessage(new InformationMessage(
                                $"Skipping {companionCharacter.Name}: Companion is dead", 
                                ColorHelper.Yellow));
                            skippedCount++;
                            continue;
                        }
                        else
                        {
                            InformationManager.DisplayMessage(new InformationMessage(
                                $"Skipping {companionCharacter.Name}: Already spawned", 
                                ColorHelper.Yellow));
                            skippedCount++;
                            continue;
                        }
                    }

                    // Spawn the companion
                    if (SpawnCompanion(companionCharacter))
                    {
                        spawnedCount++;
                    }
                    else
                    {
                        skippedCount++;
                    }
                }

                // Display summary message
                string message = $"Spawned {spawnedCount} companion(s)";
                if (skippedCount > 0)
                {
                    message += $", skipped {skippedCount}";
                }
                InformationManager.DisplayMessage(new InformationMessage(message, ColorHelper.Green));
            }
            catch (Exception ex)
            {
                InformationManager.DisplayMessage(new InformationMessage(
                    $"Error spawning companions: {ex.Message}", 
                    ColorHelper.Red));
            }
        }

        /// <summary>
        /// Spawns a single companion in a random town settlement
        /// </summary>
        private bool SpawnCompanion(CharacterObject companionCharacter)
        {
            try
            {
                // Find a random town to spawn the companion in
                var settlements = Settlement.All
                    .Where(s => s.IsTown && !s.IsUnderSiege)
                    .ToList();

                if (!settlements.Any())
                {
                    InformationManager.DisplayMessage(new InformationMessage(
                        "No valid settlements found for spawning!", 
                        ColorHelper.Red));
                    return false;
                }

                Settlement targetSettlement = settlements[MBRandom.RandomInt(settlements.Count)];

                // Create the hero from the character object
                Hero newHero = HeroCreator.CreateSpecialHero(
                    companionCharacter,
                    targetSettlement,
                    null,  // Clan - null for wanderers
                    null,  // Father
                    null,  // Mother
                    -1     // Age - -1 means use default from character
                );

                // Set the hero as a wanderer (recruitable companion)
                newHero.ChangeState(Hero.CharacterStates.Active);
                
                // Place the hero in the settlement
                EnterSettlementAction.ApplyForCharacterOnly(newHero, targetSettlement);

                InformationManager.DisplayMessage(new InformationMessage(
                    $"Spawned {companionCharacter.Name} in {targetSettlement.Name}", 
                    ColorHelper.Green));

                return true;
            }
            catch (Exception ex)
            {
                InformationManager.DisplayMessage(new InformationMessage(
                    $"Failed to spawn {companionCharacter.Name}: {ex.Message}", 
                    ColorHelper.Red));
                return false;
            }
        }
    }
}
