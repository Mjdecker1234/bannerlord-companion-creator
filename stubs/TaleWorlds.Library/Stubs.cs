// Stub types for TaleWorlds.Library - only used for compilation without the game installed.
// At runtime, the real game DLLs are used instead.
namespace TaleWorlds.Library
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
}
