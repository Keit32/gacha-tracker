# Contributing

Thanks for your interest! The project is in early development, so the structure is still changing.

## Before you start

- For anything bigger than a small fix, **open an issue first** so we can agree on the approach before you spend time on it.
- Check existing issues to avoid duplicates.

## Setup

See the Development section of the [README](README.md). Before opening a pull request, run:

```bash
pnpm check
pnpm build
cd src-tauri && cargo fmt --check && cargo clippy --all-targets -- -D warnings && cargo test
```

## Rules for this project

- **No game tampering.** No memory reading, injection, hooks, overlays that attach to the game, or packet sniffing.
- **No leaked or beta game data.** Only use information that is officially released.
- **Credentials never leave the user's computer.** Do not add code that sends cookies, tokens, or authkeys anywhere, and never log them.
- **No official game assets in the repository.** Do not commit game art, icons, or other copyrighted files.
- **Keep dependencies minimal.** Every new dependency needs a clear reason, because each one is supply-chain risk for an app that handles credentials.
- **Never commit secrets or personal data**, including cookies, authkeys, UIDs, or database files.

## Pull requests

- Keep them small and focused, with a clear description of what and why.
- Follow the existing style (Biome and rustfmt enforce formatting).

## License

By contributing, you agree that your contributions are licensed under the project's license, GPL-3.0-or-later.
