@echo off
REM Build script for Bannerlord Companion Creator mod

echo ========================================
echo Bannerlord Companion Creator - Build Script
echo ========================================
echo.

REM Check if BANNERLORD_GAME_DIR is set
if "%BANNERLORD_GAME_DIR%"=="" (
    echo ERROR: BANNERLORD_GAME_DIR environment variable is not set!
    echo.
    echo Please set it to your Bannerlord installation directory:
    echo Example: set BANNERLORD_GAME_DIR=C:\Program Files ^(x86^)\Steam\steamapps\common\Mount ^& Blade II Bannerlord
    echo.
    pause
    exit /b 1
)

echo Using Bannerlord directory: %BANNERLORD_GAME_DIR%
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

echo Building the mod...
echo.
dotnet build BannerlordCompanionCreator.csproj --configuration Release

if errorlevel 1 (
    echo.
    echo Build FAILED!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build completed successfully!
echo ========================================
echo.
echo The DLL has been built to: bin\Win64_Shipping_Client\BannerlordCompanionCreator.dll
echo.
echo To install the mod:
echo 1. Copy this entire folder to: %BANNERLORD_GAME_DIR%\Modules\BannerlordCompanionCreator\
echo 2. Enable the mod in the Bannerlord launcher
echo 3. Make sure MCM is also installed and enabled
echo.
pause
