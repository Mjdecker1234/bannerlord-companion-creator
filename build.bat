@echo off
REM Build script for Bannerlord Companion Creator mod

echo ========================================
echo Bannerlord Companion Creator - Build Script
echo ========================================
echo.

REM Check if .NET SDK is available
dotnet --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: .NET SDK not found!
    echo Please install .NET 6.0 SDK from https://dotnet.microsoft.com/download
    echo.
    pause
    exit /b 1
)

REM If BANNERLORD_GAME_DIR is not set, build stubs for compilation
if "%BANNERLORD_GAME_DIR%"=="" (
    echo BANNERLORD_GAME_DIR not set - building with stub reference assemblies...
    echo ^(The compiled DLL will still work with the real game^)
    echo.

    dotnet build stubs\TaleWorlds.Library\TaleWorlds.Library.csproj || goto :buildfail
    dotnet build stubs\TaleWorlds.Core\TaleWorlds.Core.csproj || goto :buildfail
    dotnet build stubs\TaleWorlds.Localization\TaleWorlds.Localization.csproj || goto :buildfail
    dotnet build stubs\TaleWorlds.ObjectSystem\TaleWorlds.ObjectSystem.csproj || goto :buildfail
    dotnet build stubs\TaleWorlds.MountAndBlade\TaleWorlds.MountAndBlade.csproj || goto :buildfail
    dotnet build stubs\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.csproj || goto :buildfail
) else (
    echo Using Bannerlord directory: %BANNERLORD_GAME_DIR%
)
echo.

echo Building the mod...
echo.
dotnet build BannerlordCompanionCreator.csproj --configuration Release

if errorlevel 1 goto :buildfail

echo.
echo ========================================
echo Build completed successfully!
echo ========================================
echo.
echo The DLL has been built to: bin\Win64_Shipping_Client\BannerlordCompanionCreator.dll
echo.
echo To install the mod:
echo 1. Copy this entire folder to your Bannerlord Modules directory
echo 2. Enable the mod in the Bannerlord launcher
echo 3. Make sure MCM is also installed and enabled
echo.
pause
exit /b 0

:buildfail
echo.
echo Build FAILED!
pause
exit /b 1
