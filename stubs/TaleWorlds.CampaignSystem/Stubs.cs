// Stub types for TaleWorlds.CampaignSystem - only used for compilation without the game installed.
// At runtime, the real game DLLs are used instead.
using System.Collections.Generic;

namespace TaleWorlds.CampaignSystem
{
    public class Campaign
    {
        public static Campaign Current { get; set; }

        public T GetCampaignBehavior<T>() where T : CampaignBehaviorBase => default;
    }

    public class CampaignGameStarter : TaleWorlds.Core.IGameStarter
    {
        public void AddBehavior(CampaignBehaviorBase behavior) { }
    }

    public abstract class CampaignBehaviorBase
    {
        public abstract void RegisterEvents();
        public abstract void SyncData(IDataStore dataStore);
    }

    public interface IDataStore
    {
    }

    public enum Occupation
    {
        None,
        Wanderer,
        Lord,
        Villager,
        Townsfolk,
        RuralNotable,
        Artisan,
        Merchant,
        Gangster,
        PrisonGuard,
        Guard,
        CaravanGuard,
        Bandit,
        Soldier,
        Tavernkeeper,
        TavernWench,
        TavernGameHost,
        Weaponsmith,
        Armorer,
        HorseMerchant,
        GoodsTrader,
        Blacksmith,
        Headman,
        GangLeader,
        RansomBroker,
        Preacher,
        Shopworker,
        NotAssigned
    }

    public class CharacterObject
    {
        public static IEnumerable<CharacterObject> All { get; set; }
        public string StringId { get; set; }
        public Occupation Occupation { get; set; }
        public TaleWorlds.Localization.TextObject Name { get; set; }
    }

    public class Hero
    {
        public enum CharacterStates
        {
            NotSpawned,
            Active,
            Fugitive,
            Prisoner,
            Released,
            Dead,
            Disabled
        }

        public static IEnumerable<Hero> All { get; set; }
        public CharacterObject CharacterObject { get; set; }
        public bool IsDead { get; set; }

        public void ChangeState(CharacterStates newState) { }
    }

    public class Settlement
    {
        public static IEnumerable<Settlement> All { get; set; }
        public bool IsTown { get; set; }
        public bool IsUnderSiege { get; set; }
        public TaleWorlds.Localization.TextObject Name { get; set; }
    }

    public class Clan
    {
    }

    public static class HeroCreator
    {
        public static Hero CreateSpecialHero(
            CharacterObject character,
            Settlement settlement = null,
            Clan clan = null,
            Hero father = null,
            Hero mother = null,
            int age = -1) => new Hero();
    }

    public static class EnterSettlementAction
    {
        public static void ApplyForCharacterOnly(Hero hero, Settlement settlement) { }
    }
}
