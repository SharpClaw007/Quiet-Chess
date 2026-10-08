# Quiet Move

A chess learning app that runs entirely in the browser.

## Credits and licenses
- Chess engine: [Stockfish](https://stockfishchess.org) 19, GPLv3. WebAssembly builds from the [stockfish.js](https://github.com/nmrugg/stockfish.js) project. The engine files in `engine/` and the copy embedded in `index.html` are unmodified builds except for one line that lets the embedded copy load its WebAssembly from the page. Source: https://github.com/official-stockfish/Stockfish and https://github.com/nmrugg/stockfish.js
- Move logic: [chess.js](https://github.com/jhlywa/chess.js) 0.10.3, BSD 2-Clause.
- Pieces: Colin M.L. Burnett, CC BY-SA 3.0.
- Fonts: Instrument Sans and Newsreader, SIL Open Font License.

## Files
- `index.html`: the whole app. Also works on its own (single-threaded engine).
- `engine/`: multi-threaded Stockfish, used when the page is served with the headers in `_headers`.
- `_headers`: Cloudflare Pages response headers that enable multi-threading.
- `sw.js`, `manifest.webmanifest`, `icon-*.png`: offline support and install-as-app.
