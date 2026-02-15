// Stub types for TaleWorlds.MountAndBlade - only used for compilation without the game installed.
// At runtime, the real game DLLs are used instead.
namespace TaleWorlds.MountAndBlade
{
    public abstract class MBSubModuleBase
    {
        protected virtual void OnSubModuleLoad() { }
        protected virtual void OnGameStart(TaleWorlds.Core.Game game, TaleWorlds.Core.IGameStarter gameStarterObject) { }
    }
}
