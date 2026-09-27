# Bike Rescue · Phase 1

An early foundation for an India-focused two-wheeler roadside assistance platform. This repository currently contains **working previews and a health endpoint**, not live rescue functionality. Phase 2 starts only after Phase 1 is checked on the developer's machine.

## Architecture

| Directory | Responsibility |
| --- | --- |
| `apps/rider` | Expo Router React Native rider preview with a visible SOS action; no booking is submitted yet. |
| `apps/mechanic` | Expo Router React Native partner preview with a local availability switch; no live presence yet. |
| `apps/admin` | React/Vite operations preview; all displayed metrics are labeled placeholders. |
| `services/api` | Express/TypeScript HTTP service exposing `GET /api/v1/health`. |
| `packages/types` | Shared TypeScript contracts. |
| `packages/validation` | Reserved shared validation boundary. |
| `packages/config` | Brand and cross-platform configuration values. |
| `docs` | Architecture and upcoming development decisions. |

The architecture is an npm workspaces monorepo. Future rescue and financial records are intended for PostgreSQL/PostGIS; real-time presence will need an appropriate persistent backend. Neither database nor authentication is connected in Phase 1.

## Requirements

Node.js 20.19+ and npm. For mobile development, install Expo Go or an Android emulator; iOS simulation requires macOS. Use current Expo tooling compatible with the checked-in SDK.

## Windows PowerShell setup

```powershell
git clone https://github.com/Amanmishra0650/SOS-VEHICLE.git
cd SOS-VEHICLE
node --version
npm --version
npm install
npm run typecheck
npm run lint
npm run build
```

Open **four separate PowerShell terminals** in this repository:

```powershell
npm run dev:api
```

Check `http://localhost:4000/api/v1/health` or run `Invoke-RestMethod http://localhost:4000/api/v1/health`. Expected JSON: `{"status":"ok","service":"bike-rescue-api"}`.

```powershell
npm run dev:admin
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

```powershell
npm run dev:rider
```

Scan the QR code using Expo Go or press `a` to open an Android emulator.

```powershell
npm run dev:mechanic
```

Run this in its own terminal and open its QR code or press `a`. Start one app at a time if Metro ports conflict; Expo will offer the next port. For a physical phone, use the same Wi-Fi network as your computer.

## Development notes

Copy the relevant `.env.example` to `.env` only when configuring a local endpoint. For an Android emulator, `localhost` from the emulator points at the emulator itself; use `10.0.2.2` to access the host API. For a real phone, use your computer's LAN IP. No secrets belong in the repository.

The visual identity uses deep navy `#163744`, coral `#ea7955`, and a warm neutral canvas `#f6f8f6`. The admin uses Manrope and DM Sans with a system-font fallback; mobile uses the native system font for dependable rendering.

## Phase 1 limits

There are no real accounts, rescue requests, mechanic verification, location tracking, payments, or live dashboards yet. The SOS button explains this on tap. The mechanic switch changes only its preview screen. The admin numbers are deliberately marked placeholders.
