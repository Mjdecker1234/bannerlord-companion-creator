#!/bin/bash
# Build script for Bannerlord Companion Creator mod

echo "========================================"
echo "Bannerlord Companion Creator - Build Script"
echo "========================================"
echo

# Check if .NET SDK is available
if ! command -v dotnet &> /dev/null; then
    echo "ERROR: .NET SDK not found!"
    echo "Please install .NET 6.0 SDK from https://dotnet.microsoft.com/download"
    echo
    exit 1
fi

# If BANNERLORD_GAME_DIR is not set, build stubs for compilation
if [ -z "$BANNERLORD_GAME_DIR" ]; then
    echo "BANNERLORD_GAME_DIR not set - building with stub reference assemblies..."
    echo "(The compiled DLL will still work with the real game)"
    echo

    dotnet build stubs/TaleWorlds.Library/TaleWorlds.Library.csproj || exit 1
    dotnet build stubs/TaleWorlds.Core/TaleWorlds.Core.csproj || exit 1
    dotnet build stubs/TaleWorlds.Localization/TaleWorlds.Localization.csproj || exit 1
    dotnet build stubs/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem.csproj || exit 1
    dotnet build stubs/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.csproj || exit 1
    dotnet build stubs/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.csproj || exit 1
else
    echo "Using Bannerlord directory: $BANNERLORD_GAME_DIR"
fi
echo

echo "Building the mod..."
echo
dotnet build BannerlordCompanionCreator.csproj --configuration Release

if [ $? -ne 0 ]; then
    echo
    echo "Build FAILED!"
    exit 1
fi

echo
echo "========================================"
echo "Build completed successfully!"
echo "========================================"
echo
echo "The DLL has been built to: bin/Win64_Shipping_Client/BannerlordCompanionCreator.dll"
echo
echo "To install the mod:"
echo "1. Copy this entire folder to your Bannerlord Modules directory"
echo "2. Enable the mod in the Bannerlord launcher"
echo "3. Make sure MCM is also installed and enabled"
echo
