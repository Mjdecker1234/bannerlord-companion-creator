// Stub types for TaleWorlds.Core - only used for compilation without the game installed.
// At runtime, the real game DLLs are used instead.
namespace TaleWorlds.Core
{
    public static class InformationManager
    {
        public static void DisplayMessage(InformationMessage message) { }
    }

    public class InformationMessage
    {
        public InformationMessage(string message) { }
        public InformationMessage(string message, TaleWorlds.Library.Color color) { }
    }

    public static class MBRandom
    {
        public static int RandomInt(int maxValue) => 0;
    }

    public class Game
    {
        public object GameType { get; set; }
    }

    public interface IGameStarter
    {
    }
}
