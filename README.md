# Gacha Tracker

> [!NOTE]
> **Status: early development.** The project is being set up and nothing described under "Planned features" works yet. Watch or star the repository to follow progress.

For **ZZZ players who want to keep their full pull, endgame, and build history**, **Gacha Tracker** will be a **local desktop app** that **imports and archives it automatically**. Unlike **separate sites that need manual input or show only recent data**, it **keeps everything on your PC**.

## Principles

- **Local first.** Your data is stored on your own computer. Nothing is uploaded anywhere.
- **Credentials stay on your PC.** If a feature needs a login, the cookies or tokens are kept in the operating system's credential store and are never sent to any server.
- **Open source.** Read the code, build it yourself, and verify what you run.
- **No game tampering.** The app does not read game memory, inject code, hook the game, or sniff network traffic.

## Planned features

- [ ] Wish history import from the game's local data (no login) and local pity/luck statistics
- [ ] Permanent local archive, with export and import
- [ ] Optional HoYoLAB login to archive endgame runs and builds
- [ ] Build evaluation based on damage simulation

Plans can change. See the [issues](https://github.com/Keit32/gacha-tracker/issues) for current work.

## Development

Prerequisites: [Node.js](https://nodejs.org/) (LTS), [pnpm](https://pnpm.io/), [Rust](https://www.rust-lang.org/tools/install) (stable), and the [Tauri system prerequisites](https://v2.tauri.app/start/prerequisites/) for your OS.

```bash
pnpm install
pnpm tauri dev     # run the app in development mode
pnpm check         # lint and format check (Biome)
pnpm fix           # apply Biome fixes
pnpm build         # type-check and build the frontend
```

Rust checks (run inside `src-tauri/`): `cargo fmt --check`, `cargo clippy --all-targets -- -D warnings`, `cargo test`.

Stack: [Tauri 2](https://tauri.app/), React, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Router + Query, Biome.

## Security

Please report vulnerabilities privately. See [SECURITY.md](SECURITY.md). Never post cookies, tokens, or authkeys in issues or pull requests.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Copyright (C) 2026 Keit

This project is licensed under the GNU General Public License v3.0 or later.
See [LICENSE](LICENSE) for the full text.

## Name and trademark

"Gacha Tracker" and its logo are not licensed under the GPL. Forks and
modified versions must use a different name and must not imply they are
the official project. The only official source is
<https://github.com/Keit32/gacha-tracker>.

## Disclaimer

Unofficial fan project. Not affiliated with or endorsed by HoYoverse.
It may not comply with their terms of service. Use at your own risk.

Zenless Zone Zero, HoYoverse, and related names are trademarks of their respective owners.
