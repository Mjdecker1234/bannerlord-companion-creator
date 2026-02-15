// Stub types for TaleWorlds.Core - only used for compilation without the game installed.
// At runtime, the real game DLLs are used instead.
namespace TaleWorlds.Core
{
    public struct Color
    {
        public float Red;
        public float Green;
        public float Blue;
        public float Alpha;

        public Color(float red, float green, float blue, float alpha = 1f)
        {
            Red = red;
            Green = green;
            Blue = blue;
            Alpha = alpha;
        }
    }

    public static class InformationManager
    {
        public static void DisplayMessage(InformationMessage message) { }
    }

    public class InformationMessage
    {
        public InformationMessage(string message) { }
        public InformationMessage(string message, Color color) { }
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
