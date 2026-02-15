using MCM.Abstractions.Base.Global;
using MCM.Abstractions.Attributes;
using MCM.Abstractions.Attributes.v2;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Library;

namespace BannerlordCompanionCreator
{
    /// <summary>
    /// MCM Settings for Bannerlord Companion Creator
    /// Provides in-game configuration menu
    /// </summary>
    public class Settings : AttributeGlobalSettings<Settings>
    {
        public override string Id => "BannerlordCompanionCreator";
        public override string DisplayName => "Companion Creator";
        public override string FolderName => "BannerlordCompanionCreator";
        public override string FormatType => "json2";

        [SettingPropertyBool(
            "Enable Auto-Spawn on Campaign Start",
            RequireRestart = false,
            HintText = "Automatically spawn custom companions when starting a new campaign.",
            Order = 0)]
        [SettingPropertyGroup("General", GroupOrder = 0)]
        public bool AutoSpawnOnCampaignStart { get; set; } = false;

        [SettingPropertyBool(
            "Show Spawn Messages",
            RequireRestart = false,
            HintText = "Display messages when companions are spawned or skipped.",
            Order = 1)]
        [SettingPropertyGroup("General", GroupOrder = 0)]
        public bool ShowSpawnMessages { get; set; } = true;

        [SettingPropertyBool(
            "Prevent Dead Companion Respawn",
            RequireRestart = false,
            HintText = "Prevent dead companions from respawning (recommended).",
            Order = 2)]
        [SettingPropertyGroup("General", GroupOrder = 0)]
        public bool PreventDeadRespawn { get; set; } = true;

        [SettingPropertyButton(
            "Spawn Custom Companions",
            RequireRestart = false,
            Content = "Click to spawn all custom companions from ModuleData",
            HintText = "Spawns all companions defined in spcharacters.xml that haven't been spawned yet. Dead companions will not respawn.",
            Order = 0)]
        [SettingPropertyGroup("Actions", GroupOrder = 1)]
        public bool SpawnCompanionsButton
        {
            get => false;
            set
            {
                if (Campaign.Current != null)
                {
                    var behavior = Campaign.Current.GetCampaignBehavior<CompanionManagerBehavior>();
                    if (behavior != null)
                    {
                        behavior.SpawnCustomCompanions();
                    }
                    else
                    {
                        InformationManager.DisplayMessage(
                            new InformationMessage(
                                "Error: Companion Manager not initialized!",
                                ColorHelper.Red));
                    }
                }
                else
                {
                    InformationManager.DisplayMessage(
                        new InformationMessage(
                            "Please load a campaign first!",
                            ColorHelper.Yellow));
                }
            }
        }
    }
}
