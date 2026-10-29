# Writing Spinner: Build Spec

## Purpose
An iPad web app that helps 5th graders get unstuck while writing a monster story. An adult volunteer runs it on one shared iPad, sitting with a student. It has two "spin the wheel" tools:

1. **Word Wheel**: turns a plain word ("good", "said") into a more descriptive one.
2. **Stuck Wheel**: suggests what kind of sentence to write next ("Add dialogue").

## Platform & Delivery
- Plain HTML/CSS/JS. No framework, no build step.
- Files: `index.html`, `manifest.json`, `sw.js` (service worker), and an app icon.
- Host it as a static site (GitHub Pages or Netlify Drop), then use **Add to Home Screen** in Safari so it launches full-screen like an app.
- Include `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, and `apple-touch-icon` meta tags, plus the viewport tag `width=device-width, initial-scale=1, viewport-fit=cover`.
- The service worker caches all files so the app and its built-in word list work with **no Wi-Fi** after the first load.
- Support both portrait and landscape. Respect safe-area insets.

## App Structure
- Home screen with two large buttons: **Find a Better Word** and **I'm Stuck**.
- Each mode has a clear back button to Home.
- No accounts, no data saved, no analytics.

## Mode 1: Word Wheel
**Flow**
1. The adult types a plain word into a large text field and taps **Make My Wheel**.
2. The app looks the word up in the **built-in list** first (case-insensitive, also matching simple forms such as "walked" → "walk").
3. If the word isn't found **and** the device is online, it falls back to the Datamuse API:
   `https://api.datamuse.com/words?rel_syn=WORD&md=fp&max=40`
   - Keep only single words made of letters, with frequency `f` ≥ 2 per million (from the `md=f` tag), so obscure words are dropped.
   - Prefer results with the same part of speech as the input when the `md=p` tag is available.
   - Filter results through a small blocklist of inappropriate words.
   - If fewer than 4 words remain, also try `rel_trg` / `ml=WORD` results under the same filters.
4. If no results are found, or the device is offline with no match, show a friendly message: "Hmm, I don't know that one yet. Try another word!"
5. The wheel shows **up to 8 words**, picked at random from the results when there are more than 8.
6. The adult taps **Spin**. The wheel lands on a word and a big result card appears showing:
   - the word,
   - a **kid-friendly definition**, shown automatically with no extra tap,
   - an example sentence, if one exists.
7. Below the word, the card asks: "Does this mean what you want to say?" It offers two buttons: **Yes, use it!** (shows a small celebration, then returns to the input screen) and **No, spin again**.

**Definitions**
- Built-in words come with a hand-written definition at a 5th-grade level, under 12 words, that doesn't use harder words than the one being defined. Example: *lumbered: walked in a slow, heavy, clumsy way.*
- For words from the online fallback, fetch the definition from `https://api.dictionaryapi.dev/api/v2/entries/en/WORD`. Show the first definition that matches the part of speech, cut to one sentence.
- If no definition is available, show "No definition found, so ask your helper!" and keep both buttons.
- Show a small **🔊 Hear it** button that reads the word and its definition aloud with `speechSynthesis`.

**Built-in list: use the provided `words.js` (do not regenerate it)**
- Load it with `<script src="words.js">` and include it in the service worker cache.
- It contains 177 base words and 791 replacements, each with a kid-friendly definition. See the header comment for its format.
- Look up the typed word, lowercased and trimmed, in `LOOKUP` to get `[base, form]`. Display each replacement in that same form using `FORMS`. For example, "walked" (past) should show "stomped", not "stomp".
- If the word is in `SPECIAL`, show that message card instead of a wheel.
- Entries with `senses` show the sense chips described below.
- Nouns are allowed (monster, house, etc.).
- The bullets below describe how the list was built, for reference only.
- Include about 50 common "tired" words that 5th graders overuse, covering adjectives (good, bad, big, small, nice, scary, happy, sad, mad, pretty, ugly, fast, slow, loud, quiet, cold, hot, weird, old) and verbs (said, went, walked, ran, looked, saw, got, ate, made, liked, yelled, cried, laughed, grabbed, jumped, moved, hit, fell, came, put, went, ate, thought).
- Give each word 8–12 replacements at a 5th-grade reading level.
- Where a word has several meanings, group the replacements by sense, for example `good → {kind: [...], tasty: [...], skilled: [...]}`. When a word has senses, show sense chips first ("Good like… kind / tasty / skilled") before building the wheel. This keeps the wheel from landing on a word that doesn't fit what the student meant.
- Add a short example sentence for each replacement where practical, with a monster theme where it fits naturally ("The monster **lumbered** across the bridge.").

## Offline & Weak Connection Handling
The app will usually run on a phone hotspot that may be slow, spotty, or connected but without internet. The kid should never see an error or a spinner hang.

- **Don't trust `navigator.onLine`.** It reports "online" when the iPad is connected to a hotspot that has no actual internet. Decide based on whether a real request succeeds.
- **Only go online when needed.** The built-in list is always checked first, so most lookups never touch the network.
- **Use a hard timeout.** Wrap every fetch in an `AbortController` with a 3-second timeout. A timeout counts the same as being offline.
- **Show a quiet loading state.** While fetching, show a short "Looking it up…" animation for up to 3 seconds, never a blank screen.
- **Cache every success.** Store fetched synonyms and definitions in `localStorage`, wrapped in try/catch. If a word worked once, it works offline forever after.
- **Graceful fallback when lookup fails**, with no error wording:
  - Message: "That word isn't in my word book yet."
  - Show up to 3 built-in words that are close in spelling or meaning as tappable chips ("Try: big, huge, scary").
  - Provide a **Make my own wheel** option where the adult types 3–8 replacement words, which builds a wheel immediately. Definitions for these words show "Ask your helper!"
- **Missing definitions only.** If synonyms are cached but a definition fetch fails, still show the wheel and use the definition fallback message.
- **Small status dot.** A subtle dot in a corner shows green when the last request succeeded and grey otherwise. It is for the adult only, with no text and no alerts.
- **Pre-warm (optional).** A hidden adult settings screen lets the adult paste a list of words and tap **Download for offline**. This fetches and caches them while on good Wi-Fi before the session.

## Mode 2: Stuck Wheel
- The wheel is fixed with 8–10 generic writing moves. Each one has a short label for the wheel, a one-line prompt for the kid, and one example sentence.

| Wheel label | Kid prompt | Example |
|---|---|---|
| Dialogue | Have a character say something. | "Who's there?" Mia whispered. |
| Use a Sense | Describe a sound, smell, taste, or touch. | The cave smelled like old socks and wet dirt. |
| Show a Feeling | Show how someone feels without naming the feeling. | Leo's hands shook as he reached for the door. |
| Action! | Make a character do something. | The monster slammed its tail against the wall. |
| Make It Worse | Add a new problem. | Then the flashlight died. |
| Zoom In | Describe one small detail up close. | One yellow claw scraped slowly across the floor. |
| Ask a Question | Have a character wonder something. | Why was the monster crying? |
| Surprise! | Something unexpected happens. | The monster sneezed glitter. |
| Make a Choice | A character decides what to do. | Mia decided to follow the footprints. |
| Move Ahead | Jump forward in time or place. | By sunrise, they reached the mountain. |

- After a spin, the result card shows the prompt and the example in large text, with a **Spin again** button.

## Wheel Behavior (both modes)
- Draw the wheel with SVG or Canvas. Segments are colored with high contrast, and labels are readable without rotating your head (use radial text or a fixed pointer readout below the wheel).
- Pick the winning segment at random **before** animating, then animate a 3–5 second spin with ease-out that lands exactly on that segment. This keeps results fair and the ending accurate.
- Use a fixed pointer at the top.
- Include an optional tick sound and landing sound using the Web Audio API, with a mute toggle that is on by default for classroom use.
- Disable the Spin button while the wheel is spinning.
- Respect `prefers-reduced-motion` by using a short fade instead of a long spin.

## Design
- Bright, playful, and friendly, with a light monster motif (for example, a simple original cartoon monster mascot drawn in SVG).
- Large type (body at least 20px, results at least 40px) and touch targets of at least 48px.
- No hover-only interactions. Prevent double-tap zoom on buttons (`touch-action: manipulation`).
- Support light and dark mode by defining colors as CSS variables.

## Acceptance Criteria
- Works offline for built-in words and the Stuck Wheel after the first load.
- "good" shows sense chips; choosing one builds a wheel of appropriate words.
- An unknown but real word (e.g. "shiny") returns filtered online results when connected.
- Gibberish shows the friendly "don't know that one" message.
- The spin always lands visually on the reported result.
- In Airplane Mode, and on Wi-Fi with no internet, an unknown word shows the friendly fallback within 3 seconds with no error text.
- A word fetched once still works after turning on Airplane Mode.
- Every built-in word shows a kid-friendly definition. Online words show a dictionary definition or the fallback message.
- Usable one-handed by an adult, with readable text for a kid sitting next to them.

## Out of Scope
- Student accounts, saving essays, AI-generated text, and multiple devices.
