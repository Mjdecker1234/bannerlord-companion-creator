using System;
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

namespace BannerlordCompanionCreator
{
    /// <summary>
    /// Main SubModule for the Bannerlord Companion Creator mod.
    /// This allows spawning custom companions in-game.
    /// </summary>
    public class SubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            InformationManager.DisplayMessage(new InformationMessage(
                "Bannerlord Companion Creator loaded!", 
                ColorHelper.Green));
        }

        protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);

            if (game.GameType is Campaign)
            {
                CampaignGameStarter campaignStarter = (CampaignGameStarter)gameStarterObject;
                AddBehaviors(campaignStarter);
            }
        }

        private void AddBehaviors(CampaignGameStarter campaignStarter)
        {
            // Add the companion manager behavior
            campaignStarter.AddBehavior(new CompanionManagerBehavior());
        }
    }

    /// <summary>
    /// Helper class for displaying colored messages
    /// </summary>
    public static class ColorHelper
    {
        public static TaleWorlds.Library.Color Green => new TaleWorlds.Library.Color(0f, 1f, 0f);
        public static TaleWorlds.Library.Color Red => new TaleWorlds.Library.Color(1f, 0f, 0f);
        public static TaleWorlds.Library.Color Yellow => new TaleWorlds.Library.Color(1f, 1f, 0f);
    }
}
