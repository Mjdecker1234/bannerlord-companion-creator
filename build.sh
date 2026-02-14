#!/bin/bash
# Build script for Bannerlord Companion Creator mod

echo "========================================"
echo "Bannerlord Companion Creator - Build Script"
echo "========================================"
echo

# Check if BANNERLORD_GAME_DIR is set
if [ -z "$BANNERLORD_GAME_DIR" ]; then
    echo "ERROR: BANNERLORD_GAME_DIR environment variable is not set!"
    echo
    echo "Please set it to your Bannerlord installation directory:"
    echo "Example: export BANNERLORD_GAME_DIR=\"/path/to/Mount & Blade II Bannerlord\""
    echo
    exit 1
fi

echo "Using Bannerlord directory: $BANNERLORD_GAME_DIR"
echo

# Check if .NET SDK is available
if ! command -v dotnet &> /dev/null; then
    echo "ERROR: .NET SDK not found!"
    echo "Please install .NET 6.0 SDK from https://dotnet.microsoft.com/download"
    echo
    exit 1
fi

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
echo "1. Copy this entire folder to: $BANNERLORD_GAME_DIR/Modules/BannerlordCompanionCreator/"
echo "2. Enable the mod in the Bannerlord launcher"
echo "3. Make sure MCM is also installed and enabled"
echo
