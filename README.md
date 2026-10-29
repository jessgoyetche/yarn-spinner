# Yarn Spinner

An iPad web app that helps 5th graders get unstuck while writing a story. An adult runs it on one shared iPad, sitting with a student. Two spin-the-wheel tools:

- **Find a Better Word** turns a tired word ("good", "said") into a more descriptive one, with a kid-friendly definition and an example sentence.
- **I'm Stuck** suggests what kind of sentence to write next ("Add dialogue", "Make it worse").

The full spec is in [docs/files/writing-spinner-spec.md](docs/files/writing-spinner-spec.md) (an earlier version is in [docs/writing-spinner-spec.md](docs/writing-spinner-spec.md)).

## Put it on the iPad

1. Open **https://jessgoyetche.github.io/yarn-spinner/** in Safari on the iPad.
2. Tap Share, then **Add to Home Screen**. It now opens full-screen like an app.
3. Open it once while online. After that it works with no Wi-Fi.

## For the helper

- **Sound** is off by default. Tap the speaker button in the corner to turn it on.
- **The little dot** in the bottom-right corner is green when the last internet lookup worked and grey when it didn't. It's only there for you.
- **Helper settings:** press and hold the cat on the home screen for about 2 seconds. From there you can download extra words for offline use before a session, see what's saved, or clear it.

## How words are found

1. The built-in word book (about 180 common "tired" words) is always checked first, so most lookups never need the internet. Most words have 16 or more replacements, mixing everyday words with harder ones to stretch vocabulary. Replacements show up in the form the student typed: "walked" gives "stomped", "walking" gives "stomping", "monsters" gives "beasts". Typing "very" or "really" shows a tip to use one strong word instead.
2. Unknown words go to the [Datamuse API](https://www.datamuse.com/api/) for synonyms, filtered for common, kid-appropriate words. Words ending in "-ing" or "-ed" get answers in the same form (giggled → snickered), and an "-ing" word asks whether it's an action or a thing ("was painting" or "the painting"). A word that's almost always a noun ("pizza", "doors") gets a gentle note that the wheel is made for adjectives and verbs, with a "Show me anyway" button. Datamuse decides this from the words that usually come right before it ("the monster" vs. "to scream"), so it only works online.
3. Definitions for those come from [dictionaryapi.dev](https://dictionaryapi.dev/), with Datamuse's own definitions as a backup because the dictionary is sometimes down.
4. Every lookup that works is saved on the device, so it keeps working offline.

Every internet request gives up after 3 seconds. If a lookup fails, the kid sees a friendly message, a few built-in words to try, and a **Make my own wheel** option. They never see an error.

## Editing

It's plain HTML, CSS and JavaScript with no build step.

- **Built-in words** come from two places:
  - `WORDS` near the top of the script in `index.html`: 50 hand-written entries. Each replacement is `[word, definition, example sentence]`, and verbs add a fourth item with their past, -ing and -s forms (`'stomped stomping stomps'`). These win over words.js.
  - `words.js`: the provided word list (177 base words; the format is in its header). It adds every base word that `WORDS` doesn't have. `MORE_WORDS` in `index.html` tops those lists up to about 16 with extra words, definitions and examples. To update the list, replace `words.js` (a copy of the file you were given is in `docs/files/`).
  - A wheel holds 16, so lists longer than that show a random 16.
- **Stuck wheel moves:** edit `STUCK_MOVES` right below it.
- **Blocked words** for online results: edit `BLOCKED`.

After changing files, bump `CACHE` in `sw.js` (for example `yarn-spinner-v2`). Without that, iPads that already installed the app won't pick up the change. They show the update on the second launch after it's deployed.

To try it locally:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Credits

Cat illustration by limoncitosketching on Pixabay (`docs/limoncitosketching-cat-4475583.png`). `img/cat.png` is a smaller copy for the app.
