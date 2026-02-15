// Stub types for TaleWorlds.Localization - only used for compilation without the game installed.
// At runtime, the real game DLLs are used instead.
namespace TaleWorlds.Localization
{
    public class TextObject
    {
        public TextObject() { }
        public TextObject(string text) { }

        public override string ToString() => string.Empty;
    }
}
