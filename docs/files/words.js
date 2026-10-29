// Writing Spinner word bank. Generated; edit entries.txt/defs.txt and rebuild.
// WORD_BANK[base] = {pos, words:[...]} or {pos, senses:{label:[...]}}
// LOOKUP[typedWord] = [base, form]  form: base|past|ing|third|plural
// FORMS[replacement] = {past, ing, third} for verbs, {plural} for nouns.
//   Show the replacement in the same form the student typed (walked -> stomped).
// DEFS[replacement] = kid-friendly definition.
// SPECIAL[word] = message card shown instead of a wheel.
const WORD_BANK = {
 "good": {
  "pos": "adj",
  "senses": {
   "kind": [
    "kind",
    "caring",
    "gentle",
    "generous",
    "friendly",
    "helpful"
   ],
   "tasty": [
    "tasty",
    "delicious",
    "yummy",
    "scrumptious",
    "mouthwatering"
   ],
   "skilled": [
    "skilled",
    "talented",
    "clever",
    "expert",
    "amazing"
   ],
   "great": [
    "great",
    "wonderful",
    "excellent",
    "terrific",
    "fantastic",
    "awesome"
   ]
  }
 },
 "bad": {
  "pos": "adj",
  "senses": {
   "evil": [
    "evil",
    "wicked",
    "cruel",
    "mean",
    "sinister",
    "villainous"
   ],
   "awful": [
    "awful",
    "terrible",
    "horrible",
    "dreadful",
    "rotten"
   ]
  }
 },
 "nice": {
  "pos": "adj",
  "words": [
   "kind",
   "pleasant",
   "friendly",
   "lovely",
   "sweet",
   "polite",
   "cheerful"
  ]
 },
 "mean": {
  "pos": "adj",
  "words": [
   "cruel",
   "nasty",
   "rude",
   "spiteful",
   "unkind",
   "bossy",
   "grumpy"
  ]
 },
 "big": {
  "pos": "adj",
  "words": [
   "huge",
   "giant",
   "enormous",
   "gigantic",
   "massive",
   "towering",
   "colossal",
   "bulky"
  ]
 },
 "small": {
  "pos": "adj",
  "words": [
   "tiny",
   "little",
   "miniature",
   "petite",
   "teeny",
   "pint-sized"
  ]
 },
 "little": {
  "pos": "adj",
  "words": [
   "tiny",
   "small",
   "miniature",
   "teeny",
   "wee",
   "puny"
  ]
 },
 "scary": {
  "pos": "adj",
  "words": [
   "frightening",
   "terrifying",
   "creepy",
   "spooky",
   "horrifying",
   "eerie",
   "chilling",
   "menacing"
  ]
 },
 "creepy": {
  "pos": "adj",
  "words": [
   "eerie",
   "spooky",
   "unsettling",
   "ghostly",
   "sinister",
   "shadowy"
  ]
 },
 "weird": {
  "pos": "adj",
  "words": [
   "strange",
   "odd",
   "bizarre",
   "peculiar",
   "unusual",
   "mysterious",
   "wacky"
  ]
 },
 "strange": {
  "pos": "adj",
  "words": [
   "odd",
   "weird",
   "unusual",
   "bizarre",
   "peculiar",
   "mysterious"
  ]
 },
 "ugly": {
  "pos": "adj",
  "words": [
   "hideous",
   "gross",
   "grotesque",
   "monstrous",
   "unsightly",
   "lumpy",
   "warty"
  ]
 },
 "pretty": {
  "pos": "adj",
  "words": [
   "beautiful",
   "lovely",
   "gorgeous",
   "sparkling",
   "elegant",
   "charming"
  ]
 },
 "beautiful": {
  "pos": "adj",
  "words": [
   "gorgeous",
   "stunning",
   "lovely",
   "dazzling",
   "magnificent"
  ]
 },
 "cool": {
  "pos": "adj",
  "senses": {
   "awesome": [
    "awesome",
    "amazing",
    "incredible",
    "epic",
    "fantastic",
    "impressive"
   ],
   "cold": [
    "chilly",
    "frosty",
    "crisp",
    "icy",
    "cold"
   ]
  }
 },
 "great": {
  "pos": "adj",
  "words": [
   "wonderful",
   "excellent",
   "fantastic",
   "terrific",
   "amazing",
   "awesome"
  ]
 },
 "awesome": {
  "pos": "adj",
  "words": [
   "amazing",
   "incredible",
   "epic",
   "fantastic",
   "spectacular"
  ]
 },
 "amazing": {
  "pos": "adj",
  "words": [
   "incredible",
   "astonishing",
   "spectacular",
   "unbelievable",
   "marvelous"
  ]
 },
 "terrible": {
  "pos": "adj",
  "words": [
   "awful",
   "horrible",
   "dreadful",
   "disastrous",
   "horrendous"
  ]
 },
 "fun": {
  "pos": "adj",
  "words": [
   "exciting",
   "thrilling",
   "amusing",
   "entertaining",
   "enjoyable",
   "wild"
  ]
 },
 "funny": {
  "pos": "adj",
  "words": [
   "hilarious",
   "silly",
   "goofy",
   "ridiculous",
   "comical",
   "wacky"
  ]
 },
 "crazy": {
  "pos": "adj",
  "words": [
   "wild",
   "wacky",
   "silly",
   "bonkers",
   "zany"
  ]
 },
 "happy": {
  "pos": "adj",
  "words": [
   "joyful",
   "cheerful",
   "glad",
   "delighted",
   "thrilled",
   "excited",
   "overjoyed",
   "gleeful"
  ]
 },
 "excited": {
  "pos": "adj",
  "words": [
   "thrilled",
   "eager",
   "pumped",
   "giddy",
   "overjoyed"
  ]
 },
 "sad": {
  "pos": "adj",
  "words": [
   "unhappy",
   "gloomy",
   "miserable",
   "heartbroken",
   "upset",
   "lonely",
   "teary"
  ]
 },
 "lonely": {
  "pos": "adj",
  "words": [
   "alone",
   "isolated",
   "friendless",
   "abandoned",
   "forgotten"
  ]
 },
 "mad": {
  "pos": "adj",
  "words": [
   "angry",
   "furious",
   "grumpy",
   "cranky",
   "enraged",
   "fuming",
   "irritated"
  ]
 },
 "angry": {
  "pos": "adj",
  "words": [
   "furious",
   "enraged",
   "fuming",
   "livid",
   "cranky",
   "grumpy",
   "irritated"
  ]
 },
 "scared": {
  "pos": "adj",
  "words": [
   "afraid",
   "frightened",
   "terrified",
   "nervous",
   "petrified",
   "panicked",
   "jumpy"
  ]
 },
 "afraid": {
  "pos": "adj",
  "words": [
   "frightened",
   "terrified",
   "scared",
   "fearful",
   "petrified",
   "nervous"
  ]
 },
 "nervous": {
  "pos": "adj",
  "words": [
   "anxious",
   "jittery",
   "worried",
   "uneasy",
   "jumpy",
   "tense"
  ]
 },
 "brave": {
  "pos": "adj",
  "words": [
   "bold",
   "fearless",
   "daring",
   "courageous",
   "heroic",
   "gutsy"
  ]
 },
 "shy": {
  "pos": "adj",
  "words": [
   "timid",
   "bashful",
   "quiet",
   "nervous",
   "meek"
  ]
 },
 "calm": {
  "pos": "adj",
  "words": [
   "peaceful",
   "relaxed",
   "still",
   "gentle",
   "steady"
  ]
 },
 "bored": {
  "pos": "adj",
  "words": [
   "restless",
   "dull",
   "fed-up",
   "uninterested"
  ]
 },
 "surprised": {
  "pos": "adj",
  "words": [
   "shocked",
   "amazed",
   "astonished",
   "stunned",
   "startled"
  ]
 },
 "tired": {
  "pos": "adj",
  "words": [
   "sleepy",
   "exhausted",
   "worn-out",
   "drowsy",
   "weary"
  ]
 },
 "sick": {
  "pos": "adj",
  "words": [
   "ill",
   "queasy",
   "feverish",
   "unwell"
  ]
 },
 "hungry": {
  "pos": "adj",
  "words": [
   "starving",
   "famished",
   "ravenous",
   "greedy"
  ]
 },
 "friendly": {
  "pos": "adj",
  "words": [
   "kind",
   "welcoming",
   "cheerful",
   "warm",
   "gentle",
   "outgoing"
  ]
 },
 "smart": {
  "pos": "adj",
  "words": [
   "clever",
   "brilliant",
   "wise",
   "bright",
   "genius"
  ]
 },
 "evil": {
  "pos": "adj",
  "words": [
   "wicked",
   "sinister",
   "cruel",
   "villainous",
   "dark"
  ]
 },
 "dangerous": {
  "pos": "adj",
  "words": [
   "deadly",
   "risky",
   "perilous",
   "threatening",
   "menacing"
  ]
 },
 "safe": {
  "pos": "adj",
  "words": [
   "secure",
   "protected",
   "unharmed",
   "sheltered"
  ]
 },
 "strong": {
  "pos": "adj",
  "words": [
   "powerful",
   "mighty",
   "muscular",
   "tough",
   "sturdy",
   "unstoppable"
  ]
 },
 "weak": {
  "pos": "adj",
  "words": [
   "feeble",
   "frail",
   "shaky",
   "wobbly",
   "puny",
   "flimsy"
  ]
 },
 "fast": {
  "pos": "adj",
  "words": [
   "quick",
   "speedy",
   "swift",
   "rapid",
   "zippy",
   "lightning-fast"
  ]
 },
 "slow": {
  "pos": "adj",
  "words": [
   "sluggish",
   "lazy",
   "crawling",
   "unhurried",
   "poky"
  ]
 },
 "loud": {
  "pos": "adj",
  "words": [
   "noisy",
   "booming",
   "thunderous",
   "deafening",
   "roaring",
   "shrill"
  ]
 },
 "quiet": {
  "pos": "adj",
  "words": [
   "silent",
   "hushed",
   "soft",
   "still",
   "peaceful",
   "muffled"
  ]
 },
 "dark": {
  "pos": "adj",
  "words": [
   "shadowy",
   "gloomy",
   "murky",
   "pitch-black",
   "dim",
   "shady"
  ]
 },
 "bright": {
  "pos": "adj",
  "words": [
   "shiny",
   "glowing",
   "dazzling",
   "gleaming",
   "sparkling",
   "blazing"
  ]
 },
 "cold": {
  "pos": "adj",
  "words": [
   "freezing",
   "icy",
   "frosty",
   "chilly",
   "frozen",
   "bitter"
  ]
 },
 "hot": {
  "pos": "adj",
  "words": [
   "boiling",
   "burning",
   "scorching",
   "sizzling",
   "steaming",
   "blazing"
  ]
 },
 "wet": {
  "pos": "adj",
  "words": [
   "soaked",
   "soggy",
   "damp",
   "dripping",
   "drenched",
   "slimy"
  ]
 },
 "dirty": {
  "pos": "adj",
  "words": [
   "filthy",
   "muddy",
   "grimy",
   "messy",
   "dusty",
   "stained"
  ]
 },
 "messy": {
  "pos": "adj",
  "words": [
   "sloppy",
   "cluttered",
   "untidy",
   "jumbled",
   "chaotic"
  ]
 },
 "old": {
  "pos": "adj",
  "words": [
   "ancient",
   "crumbling",
   "dusty",
   "worn",
   "rusty",
   "wrinkled"
  ]
 },
 "new": {
  "pos": "adj",
  "words": [
   "fresh",
   "shiny",
   "modern",
   "brand-new",
   "unused"
  ]
 },
 "smelly": {
  "pos": "adj",
  "words": [
   "stinky",
   "rotten",
   "foul",
   "musty",
   "putrid"
  ]
 },
 "sharp": {
  "pos": "adj",
  "words": [
   "pointy",
   "jagged",
   "spiky",
   "razor-sharp",
   "prickly"
  ]
 },
 "huge": {
  "pos": "adj",
  "words": [
   "gigantic",
   "enormous",
   "massive",
   "colossal",
   "towering",
   "mammoth"
  ]
 },
 "tall": {
  "pos": "adj",
  "words": [
   "towering",
   "giant",
   "lanky",
   "gigantic",
   "sky-high"
  ]
 },
 "short": {
  "pos": "adj",
  "words": [
   "tiny",
   "stubby",
   "small",
   "squat",
   "little"
  ]
 },
 "fat": {
  "pos": "adj",
  "words": [
   "chubby",
   "plump",
   "round",
   "bulky",
   "hefty"
  ]
 },
 "thin": {
  "pos": "adj",
  "words": [
   "skinny",
   "bony",
   "slim",
   "scrawny",
   "lanky"
  ]
 },
 "hairy": {
  "pos": "adj",
  "words": [
   "furry",
   "shaggy",
   "fuzzy",
   "woolly",
   "bristly"
  ]
 },
 "slimy": {
  "pos": "adj",
  "words": [
   "gooey",
   "slippery",
   "sticky",
   "oozy",
   "gross"
  ]
 },
 "gross": {
  "pos": "adj",
  "words": [
   "disgusting",
   "revolting",
   "nasty",
   "yucky",
   "slimy",
   "vile"
  ]
 },
 "soft": {
  "pos": "adj",
  "words": [
   "fluffy",
   "fuzzy",
   "silky",
   "squishy",
   "smooth",
   "cuddly"
  ]
 },
 "hard": {
  "pos": "adj",
  "senses": {
   "solid": [
    "solid",
    "firm",
    "rock-hard",
    "stiff",
    "rigid"
   ],
   "difficult": [
    "difficult",
    "tough",
    "tricky",
    "challenging",
    "impossible"
   ]
  }
 },
 "easy": {
  "pos": "adj",
  "words": [
   "simple",
   "effortless",
   "quick",
   "painless"
  ]
 },
 "heavy": {
  "pos": "adj",
  "words": [
   "weighty",
   "massive",
   "bulky",
   "hefty",
   "solid"
  ]
 },
 "mysterious": {
  "pos": "adj",
  "words": [
   "secret",
   "puzzling",
   "strange",
   "unknown",
   "mystifying"
  ]
 },
 "broken": {
  "pos": "adj",
  "words": [
   "cracked",
   "shattered",
   "smashed",
   "busted",
   "ruined"
  ]
 },
 "empty": {
  "pos": "adj",
  "words": [
   "bare",
   "hollow",
   "deserted",
   "vacant",
   "abandoned"
  ]
 },
 "full": {
  "pos": "adj",
  "words": [
   "stuffed",
   "packed",
   "crammed",
   "overflowing",
   "bursting"
  ]
 },
 "yummy": {
  "pos": "adj",
  "words": [
   "delicious",
   "tasty",
   "scrumptious",
   "mouthwatering",
   "delectable"
  ]
 },
 "say": {
  "pos": "verb",
  "words": [
   "whisper",
   "shout",
   "mutter",
   "mumble",
   "explain",
   "announce",
   "reply",
   "exclaim"
  ]
 },
 "yell": {
  "pos": "verb",
  "words": [
   "shout",
   "scream",
   "holler",
   "bellow",
   "shriek",
   "roar",
   "howl"
  ]
 },
 "shout": {
  "pos": "verb",
  "words": [
   "holler",
   "bellow",
   "yell",
   "roar",
   "shriek"
  ]
 },
 "scream": {
  "pos": "verb",
  "words": [
   "shriek",
   "screech",
   "howl",
   "wail",
   "yelp",
   "squeal"
  ]
 },
 "cry": {
  "pos": "verb",
  "words": [
   "sob",
   "weep",
   "wail",
   "whimper",
   "bawl",
   "sniffle"
  ]
 },
 "laugh": {
  "pos": "verb",
  "words": [
   "giggle",
   "chuckle",
   "snicker",
   "cackle",
   "snort",
   "howl"
  ]
 },
 "ask": {
  "pos": "verb",
  "words": [
   "wonder",
   "question",
   "beg",
   "plead",
   "demand",
   "inquire"
  ]
 },
 "whisper": {
  "pos": "verb",
  "words": [
   "murmur",
   "mumble",
   "mutter",
   "breathe",
   "hiss"
  ]
 },
 "tell": {
  "pos": "verb",
  "words": [
   "explain",
   "warn",
   "announce",
   "inform",
   "share"
  ]
 },
 "call": {
  "pos": "verb",
  "words": [
   "shout",
   "holler",
   "summon",
   "beckon"
  ]
 },
 "go": {
  "pos": "verb",
  "words": [
   "head",
   "travel",
   "wander",
   "march",
   "journey",
   "hurry"
  ]
 },
 "walk": {
  "pos": "verb",
  "words": [
   "stomp",
   "tiptoe",
   "march",
   "stroll",
   "wander",
   "trudge",
   "lumber",
   "creep",
   "shuffle"
  ]
 },
 "run": {
  "pos": "verb",
  "words": [
   "dash",
   "sprint",
   "race",
   "bolt",
   "zoom",
   "scramble",
   "scurry",
   "flee"
  ]
 },
 "sneak": {
  "pos": "verb",
  "words": [
   "creep",
   "tiptoe",
   "slink",
   "prowl",
   "lurk"
  ]
 },
 "come": {
  "pos": "verb",
  "words": [
   "arrive",
   "appear",
   "approach",
   "enter"
  ]
 },
 "leave": {
  "pos": "verb",
  "words": [
   "escape",
   "exit",
   "depart",
   "flee",
   "vanish",
   "disappear"
  ]
 },
 "look": {
  "pos": "verb",
  "words": [
   "stare",
   "peek",
   "glance",
   "peer",
   "gaze",
   "glare",
   "squint",
   "spy"
  ]
 },
 "see": {
  "pos": "verb",
  "words": [
   "spot",
   "notice",
   "glimpse",
   "spy",
   "discover",
   "witness"
  ]
 },
 "watch": {
  "pos": "verb",
  "words": [
   "observe",
   "stare",
   "gaze",
   "spy",
   "monitor"
  ]
 },
 "stare": {
  "pos": "verb",
  "words": [
   "gaze",
   "gawk",
   "glare",
   "gape",
   "peer"
  ]
 },
 "hear": {
  "pos": "verb",
  "words": [
   "overhear",
   "detect",
   "notice"
  ]
 },
 "smell": {
  "pos": "verb",
  "words": [
   "sniff",
   "whiff",
   "snuffle",
   "inhale"
  ]
 },
 "feel": {
  "pos": "verb",
  "words": [
   "sense",
   "touch",
   "notice",
   "experience"
  ]
 },
 "touch": {
  "pos": "verb",
  "words": [
   "poke",
   "pat",
   "stroke",
   "tap",
   "brush",
   "nudge"
  ]
 },
 "grab": {
  "pos": "verb",
  "words": [
   "snatch",
   "seize",
   "clutch",
   "grip",
   "grasp",
   "yank",
   "swipe"
  ]
 },
 "take": {
  "pos": "verb",
  "words": [
   "grab",
   "snatch",
   "steal",
   "collect",
   "carry",
   "swipe"
  ]
 },
 "get": {
  "pos": "verb",
  "words": [
   "grab",
   "find",
   "collect",
   "catch",
   "receive",
   "earn"
  ]
 },
 "give": {
  "pos": "verb",
  "words": [
   "hand",
   "offer",
   "pass",
   "deliver",
   "share",
   "toss"
  ]
 },
 "make": {
  "pos": "verb",
  "words": [
   "build",
   "create",
   "invent",
   "craft",
   "construct",
   "cook"
  ]
 },
 "put": {
  "pos": "verb",
  "words": [
   "place",
   "set",
   "drop",
   "toss",
   "shove"
  ]
 },
 "eat": {
  "pos": "verb",
  "words": [
   "gobble",
   "munch",
   "chomp",
   "devour",
   "gulp",
   "nibble",
   "chew",
   "slurp"
  ]
 },
 "drink": {
  "pos": "verb",
  "words": [
   "gulp",
   "sip",
   "slurp",
   "guzzle",
   "chug"
  ]
 },
 "bite": {
  "pos": "verb",
  "words": [
   "chomp",
   "nip",
   "snap",
   "gnaw",
   "munch"
  ]
 },
 "hit": {
  "pos": "verb",
  "words": [
   "smack",
   "punch",
   "whack",
   "slam",
   "bash",
   "swat",
   "thump"
  ]
 },
 "kick": {
  "pos": "verb",
  "words": [
   "boot",
   "stomp",
   "punt",
   "strike"
  ]
 },
 "fall": {
  "pos": "verb",
  "words": [
   "tumble",
   "trip",
   "stumble",
   "topple",
   "collapse",
   "plunge",
   "crash"
  ]
 },
 "jump": {
  "pos": "verb",
  "words": [
   "leap",
   "hop",
   "bounce",
   "spring",
   "pounce",
   "vault",
   "bound"
  ]
 },
 "hop": {
  "pos": "verb",
  "words": [
   "bounce",
   "skip",
   "spring",
   "leap",
   "bound",
   "jump"
  ]
 },
 "crawl": {
  "pos": "verb",
  "words": [
   "creep",
   "slither",
   "wriggle",
   "scramble",
   "inch",
   "scoot",
   "squirm"
  ]
 },
 "climb": {
  "pos": "verb",
  "words": [
   "scramble",
   "scale",
   "clamber",
   "crawl",
   "ascend"
  ]
 },
 "move": {
  "pos": "verb",
  "words": [
   "shift",
   "slide",
   "scoot",
   "budge",
   "wiggle",
   "drift"
  ]
 },
 "fly": {
  "pos": "verb",
  "words": [
   "soar",
   "glide",
   "swoop",
   "zoom",
   "flutter",
   "hover"
  ]
 },
 "swim": {
  "pos": "verb",
  "words": [
   "paddle",
   "splash",
   "float",
   "dive",
   "glide"
  ]
 },
 "push": {
  "pos": "verb",
  "words": [
   "shove",
   "nudge",
   "ram",
   "press",
   "thrust"
  ]
 },
 "pull": {
  "pos": "verb",
  "words": [
   "yank",
   "tug",
   "drag",
   "haul",
   "heave",
   "jerk"
  ]
 },
 "throw": {
  "pos": "verb",
  "words": [
   "toss",
   "hurl",
   "fling",
   "chuck",
   "launch",
   "lob"
  ]
 },
 "catch": {
  "pos": "verb",
  "words": [
   "snag",
   "grab",
   "trap",
   "nab",
   "capture"
  ]
 },
 "break": {
  "pos": "verb",
  "words": [
   "smash",
   "shatter",
   "crack",
   "snap",
   "wreck",
   "crush"
  ]
 },
 "destroy": {
  "pos": "verb",
  "words": [
   "wreck",
   "smash",
   "demolish",
   "crush",
   "ruin",
   "flatten"
  ]
 },
 "open": {
  "pos": "verb",
  "words": [
   "unlock",
   "pry",
   "fling",
   "push",
   "unzip"
  ]
 },
 "close": {
  "pos": "verb",
  "words": [
   "shut",
   "slam",
   "lock",
   "seal"
  ]
 },
 "hide": {
  "pos": "verb",
  "words": [
   "crouch",
   "duck",
   "sneak",
   "lurk",
   "vanish",
   "cover"
  ]
 },
 "find": {
  "pos": "verb",
  "words": [
   "discover",
   "spot",
   "uncover",
   "locate"
  ]
 },
 "try": {
  "pos": "verb",
  "words": [
   "attempt",
   "struggle",
   "strive",
   "test"
  ]
 },
 "want": {
  "pos": "verb",
  "words": [
   "wish",
   "crave",
   "desire",
   "need",
   "hope"
  ]
 },
 "like": {
  "pos": "verb",
  "words": [
   "enjoy",
   "adore",
   "love",
   "appreciate",
   "admire"
  ]
 },
 "love": {
  "pos": "verb",
  "words": [
   "adore",
   "cherish",
   "treasure",
   "worship",
   "enjoy"
  ]
 },
 "hate": {
  "pos": "verb",
  "words": [
   "despise",
   "loathe",
   "detest",
   "dislike"
  ]
 },
 "think": {
  "pos": "verb",
  "words": [
   "wonder",
   "imagine",
   "believe",
   "guess",
   "figure",
   "suppose"
  ]
 },
 "know": {
  "pos": "verb",
  "words": [
   "realize",
   "understand",
   "remember",
   "recognize"
  ]
 },
 "chase": {
  "pos": "verb",
  "words": [
   "hunt",
   "follow",
   "pursue",
   "stalk",
   "track"
  ]
 },
 "attack": {
  "pos": "verb",
  "words": [
   "pounce",
   "charge",
   "strike",
   "ambush",
   "lunge"
  ]
 },
 "fight": {
  "pos": "verb",
  "words": [
   "battle",
   "wrestle",
   "struggle",
   "clash",
   "brawl"
  ]
 },
 "scare": {
  "pos": "verb",
  "words": [
   "frighten",
   "terrify",
   "startle",
   "spook",
   "alarm"
  ]
 },
 "hurt": {
  "pos": "verb",
  "words": [
   "injure",
   "wound",
   "harm",
   "bruise",
   "sting"
  ]
 },
 "roar": {
  "pos": "verb",
  "words": [
   "bellow",
   "howl",
   "thunder",
   "boom",
   "growl"
  ]
 },
 "growl": {
  "pos": "verb",
  "words": [
   "snarl",
   "rumble",
   "grumble",
   "hiss"
  ]
 },
 "shake": {
  "pos": "verb",
  "words": [
   "tremble",
   "shiver",
   "quiver",
   "rattle",
   "wobble",
   "quake"
  ]
 },
 "breathe": {
  "pos": "verb",
  "words": [
   "pant",
   "gasp",
   "wheeze",
   "huff",
   "puff"
  ]
 },
 "smile": {
  "pos": "verb",
  "words": [
   "grin",
   "beam",
   "smirk",
   "giggle"
  ]
 },
 "sit": {
  "pos": "verb",
  "words": [
   "perch",
   "squat",
   "slump",
   "plop",
   "settle",
   "flop"
  ]
 },
 "stand": {
  "pos": "verb",
  "words": [
   "rise",
   "tower",
   "loom",
   "stay"
  ]
 },
 "sleep": {
  "pos": "verb",
  "words": [
   "snooze",
   "nap",
   "doze",
   "rest",
   "snore"
  ]
 },
 "wake": {
  "pos": "verb",
  "words": [
   "stir",
   "awaken",
   "rise",
   "startle"
  ]
 },
 "help": {
  "pos": "verb",
  "words": [
   "rescue",
   "save",
   "assist",
   "protect",
   "support"
  ]
 },
 "stop": {
  "pos": "verb",
  "words": [
   "halt",
   "freeze",
   "pause",
   "quit",
   "end"
  ]
 },
 "start": {
  "pos": "verb",
  "words": [
   "begin",
   "launch",
   "trigger"
  ]
 },
 "turn": {
  "pos": "verb",
  "words": [
   "spin",
   "twist",
   "whirl",
   "swivel",
   "rotate"
  ]
 },
 "hold": {
  "pos": "verb",
  "words": [
   "grip",
   "clutch",
   "hug",
   "cradle",
   "squeeze"
  ]
 },
 "hug": {
  "pos": "verb",
  "words": [
   "squeeze",
   "embrace",
   "cuddle",
   "snuggle"
  ]
 },
 "play": {
  "pos": "verb",
  "words": [
   "frolic",
   "romp",
   "prance",
   "splash"
  ]
 },
 "dance": {
  "pos": "verb",
  "words": [
   "twirl",
   "spin",
   "prance",
   "boogie",
   "wiggle"
  ]
 },
 "sing": {
  "pos": "verb",
  "words": [
   "hum",
   "chant",
   "croon",
   "belt",
   "warble"
  ]
 },
 "wait": {
  "pos": "verb",
  "words": [
   "linger",
   "pause",
   "stay",
   "hover",
   "lurk"
  ]
 },
 "drop": {
  "pos": "verb",
  "words": [
   "dump",
   "spill",
   "release",
   "toss",
   "plop"
  ]
 },
 "live": {
  "pos": "verb",
  "words": [
   "dwell",
   "reside",
   "stay",
   "nest"
  ]
 },
 "fix": {
  "pos": "verb",
  "words": [
   "repair",
   "mend",
   "patch",
   "rebuild"
  ]
 },
 "clean": {
  "pos": "verb",
  "words": [
   "scrub",
   "wash",
   "wipe",
   "sweep",
   "polish"
  ]
 },
 "monster": {
  "pos": "noun",
  "words": [
   "beast",
   "creature",
   "brute",
   "fiend",
   "ogre",
   "giant",
   "critter",
   "mutant"
  ]
 },
 "thing": {
  "pos": "noun",
  "words": [
   "object",
   "creature",
   "gadget",
   "item",
   "shape"
  ]
 },
 "stuff": {
  "pos": "noun",
  "words": [
   "belongings",
   "gear",
   "junk",
   "items",
   "things"
  ]
 },
 "house": {
  "pos": "noun",
  "words": [
   "home",
   "cottage",
   "mansion",
   "cabin",
   "shack"
  ]
 },
 "room": {
  "pos": "noun",
  "words": [
   "chamber",
   "hall",
   "cellar",
   "attic",
   "closet"
  ]
 },
 "forest": {
  "pos": "noun",
  "words": [
   "woods",
   "jungle",
   "woodland",
   "thicket",
   "wilderness"
  ]
 },
 "cave": {
  "pos": "noun",
  "words": [
   "cavern",
   "tunnel",
   "den",
   "lair",
   "burrow"
  ]
 },
 "friend": {
  "pos": "noun",
  "words": [
   "buddy",
   "pal",
   "partner",
   "sidekick",
   "teammate"
  ]
 },
 "noise": {
  "pos": "noun",
  "words": [
   "sound",
   "racket",
   "rumble",
   "clatter",
   "crash",
   "screech"
  ]
 },
 "food": {
  "pos": "noun",
  "words": [
   "snack",
   "meal",
   "treat",
   "feast",
   "grub"
  ]
 },
 "teeth": {
  "pos": "noun",
  "words": [
   "fangs",
   "tusks",
   "chompers"
  ]
 }
};
const LOOKUP = {"good": ["good", "base"], "bad": ["bad", "base"], "nice": ["nice", "base"], "mean": ["mean", "base"], "big": ["big", "base"], "small": ["small", "base"], "little": ["little", "base"], "scary": ["scary", "base"], "creepy": ["creepy", "base"], "weird": ["weird", "base"], "strange": ["strange", "base"], "ugly": ["ugly", "base"], "pretty": ["pretty", "base"], "beautiful": ["beautiful", "base"], "cool": ["cool", "base"], "great": ["great", "base"], "awesome": ["awesome", "base"], "amazing": ["amazing", "base"], "terrible": ["terrible", "base"], "fun": ["fun", "base"], "funny": ["funny", "base"], "crazy": ["crazy", "base"], "happy": ["happy", "base"], "excited": ["excited", "base"], "sad": ["sad", "base"], "lonely": ["lonely", "base"], "mad": ["mad", "base"], "angry": ["angry", "base"], "scared": ["scared", "base"], "afraid": ["afraid", "base"], "nervous": ["nervous", "base"], "brave": ["brave", "base"], "shy": ["shy", "base"], "calm": ["calm", "base"], "bored": ["bored", "base"], "surprised": ["surprised", "base"], "tired": ["tired", "base"], "sick": ["sick", "base"], "hungry": ["hungry", "base"], "friendly": ["friendly", "base"], "smart": ["smart", "base"], "evil": ["evil", "base"], "dangerous": ["dangerous", "base"], "safe": ["safe", "base"], "strong": ["strong", "base"], "weak": ["weak", "base"], "fast": ["fast", "base"], "slow": ["slow", "base"], "loud": ["loud", "base"], "quiet": ["quiet", "base"], "dark": ["dark", "base"], "bright": ["bright", "base"], "cold": ["cold", "base"], "hot": ["hot", "base"], "wet": ["wet", "base"], "dirty": ["dirty", "base"], "messy": ["messy", "base"], "old": ["old", "base"], "new": ["new", "base"], "smelly": ["smelly", "base"], "sharp": ["sharp", "base"], "huge": ["huge", "base"], "tall": ["tall", "base"], "short": ["short", "base"], "fat": ["fat", "base"], "thin": ["thin", "base"], "hairy": ["hairy", "base"], "slimy": ["slimy", "base"], "gross": ["gross", "base"], "soft": ["soft", "base"], "hard": ["hard", "base"], "easy": ["easy", "base"], "heavy": ["heavy", "base"], "mysterious": ["mysterious", "base"], "broken": ["broken", "base"], "empty": ["empty", "base"], "full": ["full", "base"], "yummy": ["yummy", "base"], "say": ["say", "base"], "said": ["say", "past"], "saying": ["say", "ing"], "says": ["say", "third"], "yell": ["yell", "base"], "yelled": ["yell", "past"], "yelling": ["yell", "ing"], "yells": ["yell", "third"], "shout": ["shout", "base"], "shouted": ["shout", "past"], "shouting": ["shout", "ing"], "shouts": ["shout", "third"], "scream": ["scream", "base"], "screamed": ["scream", "past"], "screaming": ["scream", "ing"], "screams": ["scream", "third"], "cry": ["cry", "base"], "cried": ["cry", "past"], "crying": ["cry", "ing"], "cries": ["cry", "third"], "laugh": ["laugh", "base"], "laughed": ["laugh", "past"], "laughing": ["laugh", "ing"], "laughs": ["laugh", "third"], "ask": ["ask", "base"], "asked": ["ask", "past"], "asking": ["ask", "ing"], "asks": ["ask", "third"], "whisper": ["whisper", "base"], "whispered": ["whisper", "past"], "whispering": ["whisper", "ing"], "whispers": ["whisper", "third"], "tell": ["tell", "base"], "told": ["tell", "past"], "telling": ["tell", "ing"], "tells": ["tell", "third"], "call": ["call", "base"], "called": ["call", "past"], "calling": ["call", "ing"], "calls": ["call", "third"], "go": ["go", "base"], "went": ["go", "past"], "going": ["go", "ing"], "goes": ["go", "third"], "walk": ["walk", "base"], "walked": ["walk", "past"], "walking": ["walk", "ing"], "walks": ["walk", "third"], "run": ["run", "base"], "ran": ["run", "past"], "running": ["run", "ing"], "runs": ["run", "third"], "sneak": ["sneak", "base"], "snuck": ["sneak", "past"], "sneaking": ["sneak", "ing"], "sneaks": ["sneak", "third"], "come": ["come", "base"], "came": ["come", "past"], "coming": ["come", "ing"], "comes": ["come", "third"], "leave": ["leave", "base"], "left": ["leave", "past"], "leaving": ["leave", "ing"], "leaves": ["leave", "third"], "look": ["look", "base"], "looked": ["look", "past"], "looking": ["look", "ing"], "looks": ["look", "third"], "see": ["see", "base"], "saw": ["see", "past"], "seeing": ["see", "ing"], "sees": ["see", "third"], "watch": ["watch", "base"], "watched": ["watch", "past"], "watching": ["watch", "ing"], "watches": ["watch", "third"], "stare": ["stare", "base"], "stared": ["stare", "past"], "staring": ["stare", "ing"], "stares": ["stare", "third"], "hear": ["hear", "base"], "heard": ["hear", "past"], "hearing": ["hear", "ing"], "hears": ["hear", "third"], "smell": ["smell", "base"], "smelled": ["smell", "past"], "smelling": ["smell", "ing"], "smells": ["smell", "third"], "feel": ["feel", "base"], "felt": ["feel", "past"], "feeling": ["feel", "ing"], "feels": ["feel", "third"], "touch": ["touch", "base"], "touched": ["touch", "past"], "touching": ["touch", "ing"], "touches": ["touch", "third"], "grab": ["grab", "base"], "grabbed": ["grab", "past"], "grabbing": ["grab", "ing"], "grabs": ["grab", "third"], "take": ["take", "base"], "took": ["take", "past"], "taking": ["take", "ing"], "takes": ["take", "third"], "get": ["get", "base"], "got": ["get", "past"], "getting": ["get", "ing"], "gets": ["get", "third"], "give": ["give", "base"], "gave": ["give", "past"], "giving": ["give", "ing"], "gives": ["give", "third"], "make": ["make", "base"], "made": ["make", "past"], "making": ["make", "ing"], "makes": ["make", "third"], "put": ["put", "base"], "putting": ["put", "ing"], "puts": ["put", "third"], "eat": ["eat", "base"], "ate": ["eat", "past"], "eating": ["eat", "ing"], "eats": ["eat", "third"], "drink": ["drink", "base"], "drank": ["drink", "past"], "drinking": ["drink", "ing"], "drinks": ["drink", "third"], "bite": ["bite", "base"], "bit": ["bite", "past"], "biting": ["bite", "ing"], "bites": ["bite", "third"], "hit": ["hit", "base"], "hitting": ["hit", "ing"], "hits": ["hit", "third"], "kick": ["kick", "base"], "kicked": ["kick", "past"], "kicking": ["kick", "ing"], "kicks": ["kick", "third"], "fall": ["fall", "base"], "fell": ["fall", "past"], "falling": ["fall", "ing"], "falls": ["fall", "third"], "jump": ["jump", "base"], "jumped": ["jump", "past"], "jumping": ["jump", "ing"], "jumps": ["jump", "third"], "hop": ["hop", "base"], "hopped": ["hop", "past"], "hopping": ["hop", "ing"], "hops": ["hop", "third"], "crawl": ["crawl", "base"], "crawled": ["crawl", "past"], "crawling": ["crawl", "ing"], "crawls": ["crawl", "third"], "climb": ["climb", "base"], "climbed": ["climb", "past"], "climbing": ["climb", "ing"], "climbs": ["climb", "third"], "move": ["move", "base"], "moved": ["move", "past"], "moving": ["move", "ing"], "moves": ["move", "third"], "fly": ["fly", "base"], "flew": ["fly", "past"], "flying": ["fly", "ing"], "flies": ["fly", "third"], "swim": ["swim", "base"], "swam": ["swim", "past"], "swimming": ["swim", "ing"], "swims": ["swim", "third"], "push": ["push", "base"], "pushed": ["push", "past"], "pushing": ["push", "ing"], "pushes": ["push", "third"], "pull": ["pull", "base"], "pulled": ["pull", "past"], "pulling": ["pull", "ing"], "pulls": ["pull", "third"], "throw": ["throw", "base"], "threw": ["throw", "past"], "throwing": ["throw", "ing"], "throws": ["throw", "third"], "catch": ["catch", "base"], "caught": ["catch", "past"], "catching": ["catch", "ing"], "catches": ["catch", "third"], "break": ["break", "base"], "broke": ["break", "past"], "breaking": ["break", "ing"], "breaks": ["break", "third"], "destroy": ["destroy", "base"], "destroyed": ["destroy", "past"], "destroying": ["destroy", "ing"], "destroys": ["destroy", "third"], "open": ["open", "base"], "opened": ["open", "past"], "opening": ["open", "ing"], "opens": ["open", "third"], "close": ["close", "base"], "closed": ["close", "past"], "closing": ["close", "ing"], "closes": ["close", "third"], "hide": ["hide", "base"], "hid": ["hide", "past"], "hiding": ["hide", "ing"], "hides": ["hide", "third"], "find": ["find", "base"], "found": ["find", "past"], "finding": ["find", "ing"], "finds": ["find", "third"], "try": ["try", "base"], "tried": ["try", "past"], "trying": ["try", "ing"], "tries": ["try", "third"], "want": ["want", "base"], "wanted": ["want", "past"], "wanting": ["want", "ing"], "wants": ["want", "third"], "like": ["like", "base"], "liked": ["like", "past"], "liking": ["like", "ing"], "likes": ["like", "third"], "love": ["love", "base"], "loved": ["love", "past"], "loving": ["love", "ing"], "loves": ["love", "third"], "hate": ["hate", "base"], "hated": ["hate", "past"], "hating": ["hate", "ing"], "hates": ["hate", "third"], "think": ["think", "base"], "thought": ["think", "past"], "thinking": ["think", "ing"], "thinks": ["think", "third"], "know": ["know", "base"], "knew": ["know", "past"], "knowing": ["know", "ing"], "knows": ["know", "third"], "chase": ["chase", "base"], "chased": ["chase", "past"], "chasing": ["chase", "ing"], "chases": ["chase", "third"], "attack": ["attack", "base"], "attacked": ["attack", "past"], "attacking": ["attack", "ing"], "attacks": ["attack", "third"], "fight": ["fight", "base"], "fought": ["fight", "past"], "fighting": ["fight", "ing"], "fights": ["fight", "third"], "scare": ["scare", "base"], "scaring": ["scare", "ing"], "scares": ["scare", "third"], "hurt": ["hurt", "base"], "hurted": ["hurt", "past"], "hurting": ["hurt", "ing"], "hurts": ["hurt", "third"], "roar": ["roar", "base"], "roared": ["roar", "past"], "roaring": ["roar", "ing"], "roars": ["roar", "third"], "growl": ["growl", "base"], "growled": ["growl", "past"], "growling": ["growl", "ing"], "growls": ["growl", "third"], "shake": ["shake", "base"], "shook": ["shake", "past"], "shaking": ["shake", "ing"], "shakes": ["shake", "third"], "breathe": ["breathe", "base"], "breathed": ["breathe", "past"], "breathing": ["breathe", "ing"], "breathes": ["breathe", "third"], "smile": ["smile", "base"], "smiled": ["smile", "past"], "smiling": ["smile", "ing"], "smiles": ["smile", "third"], "sit": ["sit", "base"], "sat": ["sit", "past"], "sitting": ["sit", "ing"], "sits": ["sit", "third"], "stand": ["stand", "base"], "stood": ["stand", "past"], "standing": ["stand", "ing"], "stands": ["stand", "third"], "sleep": ["sleep", "base"], "slept": ["sleep", "past"], "sleeping": ["sleep", "ing"], "sleeps": ["sleep", "third"], "wake": ["wake", "base"], "woke": ["wake", "past"], "waking": ["wake", "ing"], "wakes": ["wake", "third"], "help": ["help", "base"], "helped": ["help", "past"], "helping": ["help", "ing"], "helps": ["help", "third"], "stop": ["stop", "base"], "stopped": ["stop", "past"], "stopping": ["stop", "ing"], "stops": ["stop", "third"], "start": ["start", "base"], "started": ["start", "past"], "starting": ["start", "ing"], "starts": ["start", "third"], "turn": ["turn", "base"], "turned": ["turn", "past"], "turning": ["turn", "ing"], "turns": ["turn", "third"], "hold": ["hold", "base"], "held": ["hold", "past"], "holding": ["hold", "ing"], "holds": ["hold", "third"], "hug": ["hug", "base"], "hugged": ["hug", "past"], "hugging": ["hug", "ing"], "hugs": ["hug", "third"], "play": ["play", "base"], "played": ["play", "past"], "playing": ["play", "ing"], "plays": ["play", "third"], "dance": ["dance", "base"], "danced": ["dance", "past"], "dancing": ["dance", "ing"], "dances": ["dance", "third"], "sing": ["sing", "base"], "sang": ["sing", "past"], "singing": ["sing", "ing"], "sings": ["sing", "third"], "wait": ["wait", "base"], "waited": ["wait", "past"], "waiting": ["wait", "ing"], "waits": ["wait", "third"], "drop": ["drop", "base"], "dropped": ["drop", "past"], "dropping": ["drop", "ing"], "drops": ["drop", "third"], "live": ["live", "base"], "lived": ["live", "past"], "living": ["live", "ing"], "lives": ["live", "third"], "fix": ["fix", "base"], "fixed": ["fix", "past"], "fixing": ["fix", "ing"], "fixes": ["fix", "third"], "clean": ["clean", "base"], "cleaned": ["clean", "past"], "cleaning": ["clean", "ing"], "cleans": ["clean", "third"], "monster": ["monster", "base"], "monsters": ["monster", "plural"], "thing": ["thing", "base"], "things": ["thing", "plural"], "stuff": ["stuff", "base"], "house": ["house", "base"], "houses": ["house", "plural"], "room": ["room", "base"], "rooms": ["room", "plural"], "forest": ["forest", "base"], "forests": ["forest", "plural"], "cave": ["cave", "base"], "caves": ["cave", "plural"], "friend": ["friend", "base"], "friends": ["friend", "plural"], "noise": ["noise", "base"], "noises": ["noise", "plural"], "food": ["food", "base"], "teeth": ["teeth", "base"]};
const FORMS = {"whisper": {"past": "whispered", "ing": "whispering", "third": "whispers"}, "shout": {"past": "shouted", "ing": "shouting", "third": "shouts"}, "mutter": {"past": "muttered", "ing": "muttering", "third": "mutters"}, "mumble": {"past": "mumbled", "ing": "mumbling", "third": "mumbles"}, "explain": {"past": "explained", "ing": "explaining", "third": "explains"}, "announce": {"past": "announced", "ing": "announcing", "third": "announces"}, "reply": {"past": "replied", "ing": "replying", "third": "replies"}, "exclaim": {"past": "exclaimed", "ing": "exclaiming", "third": "exclaims"}, "scream": {"past": "screamed", "ing": "screaming", "third": "screams"}, "holler": {"past": "hollered", "ing": "hollering", "third": "hollers"}, "bellow": {"past": "bellowed", "ing": "bellowing", "third": "bellows"}, "shriek": {"past": "shrieked", "ing": "shrieking", "third": "shrieks"}, "roar": {"past": "roared", "ing": "roaring", "third": "roars"}, "howl": {"past": "howled", "ing": "howling", "third": "howls"}, "yell": {"past": "yelled", "ing": "yelling", "third": "yells"}, "screech": {"past": "screeched", "ing": "screeching", "third": "screeches", "plural": "screeches"}, "wail": {"past": "wailed", "ing": "wailing", "third": "wails"}, "yelp": {"past": "yelped", "ing": "yelping", "third": "yelps"}, "squeal": {"past": "squealed", "ing": "squealing", "third": "squeals"}, "sob": {"past": "sobbed", "ing": "sobbing", "third": "sobs"}, "weep": {"past": "wept", "ing": "weeping", "third": "weeps"}, "whimper": {"past": "whimpered", "ing": "whimpering", "third": "whimpers"}, "bawl": {"past": "bawled", "ing": "bawling", "third": "bawls"}, "sniffle": {"past": "sniffled", "ing": "sniffling", "third": "sniffles"}, "giggle": {"past": "giggled", "ing": "giggling", "third": "giggles"}, "chuckle": {"past": "chuckled", "ing": "chuckling", "third": "chuckles"}, "snicker": {"past": "snickered", "ing": "snickering", "third": "snickers"}, "cackle": {"past": "cackled", "ing": "cackling", "third": "cackles"}, "snort": {"past": "snorted", "ing": "snorting", "third": "snorts"}, "wonder": {"past": "wondered", "ing": "wondering", "third": "wonders"}, "question": {"past": "questioned", "ing": "questioning", "third": "questions"}, "beg": {"past": "begged", "ing": "begging", "third": "begs"}, "plead": {"past": "pleaded", "ing": "pleading", "third": "pleads"}, "demand": {"past": "demanded", "ing": "demanding", "third": "demands"}, "inquire": {"past": "inquired", "ing": "inquiring", "third": "inquires"}, "murmur": {"past": "murmured", "ing": "murmuring", "third": "murmurs"}, "breathe": {"past": "breathed", "ing": "breathing", "third": "breathes"}, "hiss": {"past": "hissed", "ing": "hissing", "third": "hisses"}, "warn": {"past": "warned", "ing": "warning", "third": "warns"}, "inform": {"past": "informed", "ing": "informing", "third": "informs"}, "share": {"past": "shared", "ing": "sharing", "third": "shares"}, "summon": {"past": "summoned", "ing": "summoning", "third": "summons"}, "beckon": {"past": "beckoned", "ing": "beckoning", "third": "beckons"}, "head": {"past": "headed", "ing": "heading", "third": "heads"}, "travel": {"past": "traveled", "ing": "traveling", "third": "travels"}, "wander": {"past": "wandered", "ing": "wandering", "third": "wanders"}, "march": {"past": "marched", "ing": "marching", "third": "marches"}, "journey": {"past": "journeyed", "ing": "journeying", "third": "journeys"}, "hurry": {"past": "hurried", "ing": "hurrying", "third": "hurries"}, "stomp": {"past": "stomped", "ing": "stomping", "third": "stomps"}, "tiptoe": {"past": "tiptoed", "ing": "tiptoeing", "third": "tiptoes"}, "stroll": {"past": "strolled", "ing": "strolling", "third": "strolls"}, "trudge": {"past": "trudged", "ing": "trudging", "third": "trudges"}, "lumber": {"past": "lumbered", "ing": "lumbering", "third": "lumbers"}, "creep": {"past": "crept", "ing": "creeping", "third": "creeps"}, "shuffle": {"past": "shuffled", "ing": "shuffling", "third": "shuffles"}, "dash": {"past": "dashed", "ing": "dashing", "third": "dashes"}, "sprint": {"past": "sprinted", "ing": "sprinting", "third": "sprints"}, "race": {"past": "raced", "ing": "racing", "third": "races"}, "bolt": {"past": "bolted", "ing": "bolting", "third": "bolts"}, "zoom": {"past": "zoomed", "ing": "zooming", "third": "zooms"}, "scramble": {"past": "scrambled", "ing": "scrambling", "third": "scrambles"}, "scurry": {"past": "scurried", "ing": "scurrying", "third": "scurries"}, "flee": {"past": "fled", "ing": "fleeing", "third": "flees"}, "slink": {"past": "slunk", "ing": "slinking", "third": "slinks"}, "prowl": {"past": "prowled", "ing": "prowling", "third": "prowls"}, "lurk": {"past": "lurked", "ing": "lurking", "third": "lurks"}, "arrive": {"past": "arrived", "ing": "arriving", "third": "arrives"}, "appear": {"past": "appeared", "ing": "appearing", "third": "appears"}, "approach": {"past": "approached", "ing": "approaching", "third": "approaches"}, "enter": {"past": "entered", "ing": "entering", "third": "enters"}, "escape": {"past": "escaped", "ing": "escaping", "third": "escapes"}, "exit": {"past": "exited", "ing": "exiting", "third": "exits"}, "depart": {"past": "departed", "ing": "departing", "third": "departs"}, "vanish": {"past": "vanished", "ing": "vanishing", "third": "vanishes"}, "disappear": {"past": "disappeared", "ing": "disappearing", "third": "disappears"}, "stare": {"past": "stared", "ing": "staring", "third": "stares"}, "peek": {"past": "peeked", "ing": "peeking", "third": "peeks"}, "glance": {"past": "glanced", "ing": "glancing", "third": "glances"}, "peer": {"past": "peered", "ing": "peering", "third": "peers"}, "gaze": {"past": "gazed", "ing": "gazing", "third": "gazes"}, "glare": {"past": "glared", "ing": "glaring", "third": "glares"}, "squint": {"past": "squinted", "ing": "squinting", "third": "squints"}, "spy": {"past": "spied", "ing": "spying", "third": "spies"}, "spot": {"past": "spotted", "ing": "spotting", "third": "spots"}, "notice": {"past": "noticed", "ing": "noticing", "third": "notices"}, "glimpse": {"past": "glimpsed", "ing": "glimpsing", "third": "glimpses"}, "discover": {"past": "discovered", "ing": "discovering", "third": "discovers"}, "witness": {"past": "witnessed", "ing": "witnessing", "third": "witnesses"}, "observe": {"past": "observed", "ing": "observing", "third": "observes"}, "monitor": {"past": "monitored", "ing": "monitoring", "third": "monitors"}, "gawk": {"past": "gawked", "ing": "gawking", "third": "gawks"}, "gape": {"past": "gaped", "ing": "gaping", "third": "gapes"}, "overhear": {"past": "overheard", "ing": "overhearing", "third": "overhears"}, "detect": {"past": "detected", "ing": "detecting", "third": "detects"}, "sniff": {"past": "sniffed", "ing": "sniffing", "third": "sniffs"}, "whiff": {"past": "whiffed", "ing": "whiffing", "third": "whiffs"}, "snuffle": {"past": "snuffled", "ing": "snuffling", "third": "snuffles"}, "inhale": {"past": "inhaled", "ing": "inhaling", "third": "inhales"}, "sense": {"past": "sensed", "ing": "sensing", "third": "senses"}, "touch": {"past": "touched", "ing": "touching", "third": "touches"}, "experience": {"past": "experienced", "ing": "experiencing", "third": "experiences"}, "poke": {"past": "poked", "ing": "poking", "third": "pokes"}, "pat": {"past": "patted", "ing": "patting", "third": "pats"}, "stroke": {"past": "stroked", "ing": "stroking", "third": "strokes"}, "tap": {"past": "tapped", "ing": "tapping", "third": "taps"}, "brush": {"past": "brushed", "ing": "brushing", "third": "brushes"}, "nudge": {"past": "nudged", "ing": "nudging", "third": "nudges"}, "snatch": {"past": "snatched", "ing": "snatching", "third": "snatches"}, "seize": {"past": "seized", "ing": "seizing", "third": "seizes"}, "clutch": {"past": "clutched", "ing": "clutching", "third": "clutches"}, "grip": {"past": "gripped", "ing": "gripping", "third": "grips"}, "grasp": {"past": "grasped", "ing": "grasping", "third": "grasps"}, "yank": {"past": "yanked", "ing": "yanking", "third": "yanks"}, "swipe": {"past": "swiped", "ing": "swiping", "third": "swipes"}, "grab": {"past": "grabbed", "ing": "grabbing", "third": "grabs"}, "steal": {"past": "stole", "ing": "stealing", "third": "steals"}, "collect": {"past": "collected", "ing": "collecting", "third": "collects"}, "carry": {"past": "carried", "ing": "carrying", "third": "carries"}, "find": {"past": "found", "ing": "finding", "third": "finds"}, "catch": {"past": "caught", "ing": "catching", "third": "catches"}, "receive": {"past": "received", "ing": "receiving", "third": "receives"}, "earn": {"past": "earned", "ing": "earning", "third": "earns"}, "hand": {"past": "handed", "ing": "handing", "third": "hands"}, "offer": {"past": "offered", "ing": "offering", "third": "offers"}, "pass": {"past": "passed", "ing": "passing", "third": "passes"}, "deliver": {"past": "delivered", "ing": "delivering", "third": "delivers"}, "toss": {"past": "tossed", "ing": "tossing", "third": "tosses"}, "build": {"past": "built", "ing": "building", "third": "builds"}, "create": {"past": "created", "ing": "creating", "third": "creates"}, "invent": {"past": "invented", "ing": "inventing", "third": "invents"}, "craft": {"past": "crafted", "ing": "crafting", "third": "crafts"}, "construct": {"past": "constructed", "ing": "constructing", "third": "constructs"}, "cook": {"past": "cooked", "ing": "cooking", "third": "cooks"}, "place": {"past": "placed", "ing": "placing", "third": "places"}, "set": {"past": "set", "ing": "setting", "third": "sets"}, "drop": {"past": "dropped", "ing": "dropping", "third": "drops"}, "shove": {"past": "shoved", "ing": "shoving", "third": "shoves"}, "gobble": {"past": "gobbled", "ing": "gobbling", "third": "gobbles"}, "munch": {"past": "munched", "ing": "munching", "third": "munches"}, "chomp": {"past": "chomped", "ing": "chomping", "third": "chomps"}, "devour": {"past": "devoured", "ing": "devouring", "third": "devours"}, "gulp": {"past": "gulped", "ing": "gulping", "third": "gulps"}, "nibble": {"past": "nibbled", "ing": "nibbling", "third": "nibbles"}, "chew": {"past": "chewed", "ing": "chewing", "third": "chews"}, "slurp": {"past": "slurped", "ing": "slurping", "third": "slurps"}, "sip": {"past": "sipped", "ing": "sipping", "third": "sips"}, "guzzle": {"past": "guzzled", "ing": "guzzling", "third": "guzzles"}, "chug": {"past": "chugged", "ing": "chugging", "third": "chugs"}, "nip": {"past": "nipped", "ing": "nipping", "third": "nips"}, "snap": {"past": "snapped", "ing": "snapping", "third": "snaps"}, "gnaw": {"past": "gnawed", "ing": "gnawing", "third": "gnaws"}, "smack": {"past": "smacked", "ing": "smacking", "third": "smacks"}, "punch": {"past": "punched", "ing": "punching", "third": "punches"}, "whack": {"past": "whacked", "ing": "whacking", "third": "whacks"}, "slam": {"past": "slammed", "ing": "slamming", "third": "slams"}, "bash": {"past": "bashed", "ing": "bashing", "third": "bashes"}, "swat": {"past": "swatted", "ing": "swatting", "third": "swats"}, "thump": {"past": "thumped", "ing": "thumping", "third": "thumps"}, "boot": {"past": "booted", "ing": "booting", "third": "boots"}, "punt": {"past": "punted", "ing": "punting", "third": "punts"}, "strike": {"past": "struck", "ing": "striking", "third": "strikes"}, "tumble": {"past": "tumbled", "ing": "tumbling", "third": "tumbles"}, "trip": {"past": "tripped", "ing": "tripping", "third": "trips"}, "stumble": {"past": "stumbled", "ing": "stumbling", "third": "stumbles"}, "topple": {"past": "toppled", "ing": "toppling", "third": "topples"}, "collapse": {"past": "collapsed", "ing": "collapsing", "third": "collapses"}, "plunge": {"past": "plunged", "ing": "plunging", "third": "plunges"}, "crash": {"past": "crashed", "ing": "crashing", "third": "crashes", "plural": "crashes"}, "leap": {"past": "leaped", "ing": "leaping", "third": "leaps"}, "hop": {"past": "hopped", "ing": "hopping", "third": "hops"}, "bounce": {"past": "bounced", "ing": "bouncing", "third": "bounces"}, "spring": {"past": "sprang", "ing": "springing", "third": "springs"}, "pounce": {"past": "pounced", "ing": "pouncing", "third": "pounces"}, "vault": {"past": "vaulted", "ing": "vaulting", "third": "vaults"}, "bound": {"past": "bounded", "ing": "bounding", "third": "bounds"}, "skip": {"past": "skipped", "ing": "skipping", "third": "skips"}, "jump": {"past": "jumped", "ing": "jumping", "third": "jumps"}, "slither": {"past": "slithered", "ing": "slithering", "third": "slithers"}, "wriggle": {"past": "wriggled", "ing": "wriggling", "third": "wriggles"}, "inch": {"past": "inched", "ing": "inching", "third": "inches"}, "scoot": {"past": "scooted", "ing": "scooting", "third": "scoots"}, "squirm": {"past": "squirmed", "ing": "squirming", "third": "squirms"}, "scale": {"past": "scaled", "ing": "scaling", "third": "scales"}, "clamber": {"past": "clambered", "ing": "clambering", "third": "clambers"}, "crawl": {"past": "crawled", "ing": "crawling", "third": "crawls"}, "ascend": {"past": "ascended", "ing": "ascending", "third": "ascends"}, "shift": {"past": "shifted", "ing": "shifting", "third": "shifts"}, "slide": {"past": "slid", "ing": "sliding", "third": "slides"}, "budge": {"past": "budged", "ing": "budging", "third": "budges"}, "wiggle": {"past": "wiggled", "ing": "wiggling", "third": "wiggles"}, "drift": {"past": "drifted", "ing": "drifting", "third": "drifts"}, "soar": {"past": "soared", "ing": "soaring", "third": "soars"}, "glide": {"past": "glided", "ing": "gliding", "third": "glides"}, "swoop": {"past": "swooped", "ing": "swooping", "third": "swoops"}, "flutter": {"past": "fluttered", "ing": "fluttering", "third": "flutters"}, "hover": {"past": "hovered", "ing": "hovering", "third": "hovers"}, "paddle": {"past": "paddled", "ing": "paddling", "third": "paddles"}, "splash": {"past": "splashed", "ing": "splashing", "third": "splashes"}, "float": {"past": "floated", "ing": "floating", "third": "floats"}, "dive": {"past": "dove", "ing": "diving", "third": "dives"}, "ram": {"past": "rammed", "ing": "ramming", "third": "rams"}, "press": {"past": "pressed", "ing": "pressing", "third": "presses"}, "thrust": {"past": "thrust", "ing": "thrusting", "third": "thrusts"}, "tug": {"past": "tugged", "ing": "tugging", "third": "tugs"}, "drag": {"past": "dragged", "ing": "dragging", "third": "drags"}, "haul": {"past": "hauled", "ing": "hauling", "third": "hauls"}, "heave": {"past": "heaved", "ing": "heaving", "third": "heaves"}, "jerk": {"past": "jerked", "ing": "jerking", "third": "jerks"}, "hurl": {"past": "hurled", "ing": "hurling", "third": "hurls"}, "fling": {"past": "flung", "ing": "flinging", "third": "flings"}, "chuck": {"past": "chucked", "ing": "chucking", "third": "chucks"}, "launch": {"past": "launched", "ing": "launching", "third": "launches"}, "lob": {"past": "lobbed", "ing": "lobbing", "third": "lobs"}, "snag": {"past": "snagged", "ing": "snagging", "third": "snags"}, "trap": {"past": "trapped", "ing": "trapping", "third": "traps"}, "nab": {"past": "nabbed", "ing": "nabbing", "third": "nabs"}, "capture": {"past": "captured", "ing": "capturing", "third": "captures"}, "smash": {"past": "smashed", "ing": "smashing", "third": "smashes"}, "shatter": {"past": "shattered", "ing": "shattering", "third": "shatters"}, "crack": {"past": "cracked", "ing": "cracking", "third": "cracks"}, "wreck": {"past": "wrecked", "ing": "wrecking", "third": "wrecks"}, "crush": {"past": "crushed", "ing": "crushing", "third": "crushes"}, "demolish": {"past": "demolished", "ing": "demolishing", "third": "demolishes"}, "ruin": {"past": "ruined", "ing": "ruining", "third": "ruins"}, "flatten": {"past": "flattened", "ing": "flattening", "third": "flattens"}, "unlock": {"past": "unlocked", "ing": "unlocking", "third": "unlocks"}, "pry": {"past": "pried", "ing": "prying", "third": "pries"}, "push": {"past": "pushed", "ing": "pushing", "third": "pushes"}, "unzip": {"past": "unzipped", "ing": "unzipping", "third": "unzips"}, "shut": {"past": "shut", "ing": "shutting", "third": "shuts"}, "lock": {"past": "locked", "ing": "locking", "third": "locks"}, "seal": {"past": "sealed", "ing": "sealing", "third": "seals"}, "crouch": {"past": "crouched", "ing": "crouching", "third": "crouches"}, "duck": {"past": "ducked", "ing": "ducking", "third": "ducks"}, "sneak": {"past": "snuck", "ing": "sneaking", "third": "sneaks"}, "cover": {"past": "covered", "ing": "covering", "third": "covers"}, "uncover": {"past": "uncovered", "ing": "uncovering", "third": "uncovers"}, "locate": {"past": "located", "ing": "locating", "third": "locates"}, "attempt": {"past": "attempted", "ing": "attempting", "third": "attempts"}, "struggle": {"past": "struggled", "ing": "struggling", "third": "struggles"}, "strive": {"past": "strove", "ing": "striving", "third": "strives"}, "test": {"past": "tested", "ing": "testing", "third": "tests"}, "wish": {"past": "wished", "ing": "wishing", "third": "wishes"}, "crave": {"past": "craved", "ing": "craving", "third": "craves"}, "desire": {"past": "desired", "ing": "desiring", "third": "desires"}, "need": {"past": "needed", "ing": "needing", "third": "needs"}, "hope": {"past": "hoped", "ing": "hoping", "third": "hopes"}, "enjoy": {"past": "enjoyed", "ing": "enjoying", "third": "enjoys"}, "adore": {"past": "adored", "ing": "adoring", "third": "adores"}, "love": {"past": "loved", "ing": "loving", "third": "loves"}, "appreciate": {"past": "appreciated", "ing": "appreciating", "third": "appreciates"}, "admire": {"past": "admired", "ing": "admiring", "third": "admires"}, "cherish": {"past": "cherished", "ing": "cherishing", "third": "cherishes"}, "treasure": {"past": "treasured", "ing": "treasuring", "third": "treasures"}, "worship": {"past": "worshipped", "ing": "worshipping", "third": "worships"}, "despise": {"past": "despised", "ing": "despising", "third": "despises"}, "loathe": {"past": "loathed", "ing": "loathing", "third": "loathes"}, "detest": {"past": "detested", "ing": "detesting", "third": "detests"}, "dislike": {"past": "disliked", "ing": "disliking", "third": "dislikes"}, "imagine": {"past": "imagined", "ing": "imagining", "third": "imagines"}, "believe": {"past": "believed", "ing": "believing", "third": "believes"}, "guess": {"past": "guessed", "ing": "guessing", "third": "guesses"}, "figure": {"past": "figured", "ing": "figuring", "third": "figures"}, "suppose": {"past": "supposed", "ing": "supposing", "third": "supposes"}, "realize": {"past": "realized", "ing": "realizing", "third": "realizes"}, "understand": {"past": "understood", "ing": "understanding", "third": "understands"}, "remember": {"past": "remembered", "ing": "remembering", "third": "remembers"}, "recognize": {"past": "recognized", "ing": "recognizing", "third": "recognizes"}, "hunt": {"past": "hunted", "ing": "hunting", "third": "hunts"}, "follow": {"past": "followed", "ing": "following", "third": "follows"}, "pursue": {"past": "pursued", "ing": "pursuing", "third": "pursues"}, "stalk": {"past": "stalked", "ing": "stalking", "third": "stalks"}, "track": {"past": "tracked", "ing": "tracking", "third": "tracks"}, "charge": {"past": "charged", "ing": "charging", "third": "charges"}, "ambush": {"past": "ambushed", "ing": "ambushing", "third": "ambushes"}, "lunge": {"past": "lunged", "ing": "lunging", "third": "lunges"}, "battle": {"past": "battled", "ing": "battling", "third": "battles"}, "wrestle": {"past": "wrestled", "ing": "wrestling", "third": "wrestles"}, "clash": {"past": "clashed", "ing": "clashing", "third": "clashes"}, "brawl": {"past": "brawled", "ing": "brawling", "third": "brawls"}, "frighten": {"past": "frightened", "ing": "frightening", "third": "frightens"}, "terrify": {"past": "terrified", "ing": "terrifying", "third": "terrifies"}, "startle": {"past": "startled", "ing": "startling", "third": "startles"}, "spook": {"past": "spooked", "ing": "spooking", "third": "spooks"}, "alarm": {"past": "alarmed", "ing": "alarming", "third": "alarms"}, "injure": {"past": "injured", "ing": "injuring", "third": "injures"}, "wound": {"past": "wounded", "ing": "wounding", "third": "wounds"}, "harm": {"past": "harmed", "ing": "harming", "third": "harms"}, "bruise": {"past": "bruised", "ing": "bruising", "third": "bruises"}, "sting": {"past": "stung", "ing": "stinging", "third": "stings"}, "thunder": {"past": "thundered", "ing": "thundering", "third": "thunders"}, "boom": {"past": "boomed", "ing": "booming", "third": "booms"}, "growl": {"past": "growled", "ing": "growling", "third": "growls"}, "snarl": {"past": "snarled", "ing": "snarling", "third": "snarls"}, "rumble": {"past": "rumbled", "ing": "rumbling", "third": "rumbles", "plural": "rumbles"}, "grumble": {"past": "grumbled", "ing": "grumbling", "third": "grumbles"}, "tremble": {"past": "trembled", "ing": "trembling", "third": "trembles"}, "shiver": {"past": "shivered", "ing": "shivering", "third": "shivers"}, "quiver": {"past": "quivered", "ing": "quivering", "third": "quivers"}, "rattle": {"past": "rattled", "ing": "rattling", "third": "rattles"}, "wobble": {"past": "wobbled", "ing": "wobbling", "third": "wobbles"}, "quake": {"past": "quaked", "ing": "quaking", "third": "quakes"}, "pant": {"past": "panted", "ing": "panting", "third": "pants"}, "gasp": {"past": "gasped", "ing": "gasping", "third": "gasps"}, "wheeze": {"past": "wheezed", "ing": "wheezing", "third": "wheezes"}, "huff": {"past": "huffed", "ing": "huffing", "third": "huffs"}, "puff": {"past": "puffed", "ing": "puffing", "third": "puffs"}, "grin": {"past": "grinned", "ing": "grinning", "third": "grins"}, "beam": {"past": "beamed", "ing": "beaming", "third": "beams"}, "smirk": {"past": "smirked", "ing": "smirking", "third": "smirks"}, "perch": {"past": "perched", "ing": "perching", "third": "perches"}, "squat": {"past": "squatted", "ing": "squatting", "third": "squats"}, "slump": {"past": "slumped", "ing": "slumping", "third": "slumps"}, "plop": {"past": "plopped", "ing": "plopping", "third": "plops"}, "settle": {"past": "settled", "ing": "settling", "third": "settles"}, "flop": {"past": "flopped", "ing": "flopping", "third": "flops"}, "rise": {"past": "rose", "ing": "rising", "third": "rises"}, "tower": {"past": "towered", "ing": "towering", "third": "towers"}, "loom": {"past": "loomed", "ing": "looming", "third": "looms"}, "stay": {"past": "stayed", "ing": "staying", "third": "stays"}, "snooze": {"past": "snoozed", "ing": "snoozing", "third": "snoozes"}, "nap": {"past": "napped", "ing": "napping", "third": "naps"}, "doze": {"past": "dozed", "ing": "dozing", "third": "dozes"}, "rest": {"past": "rested", "ing": "resting", "third": "rests"}, "snore": {"past": "snored", "ing": "snoring", "third": "snores"}, "stir": {"past": "stirred", "ing": "stirring", "third": "stirs"}, "awaken": {"past": "awakened", "ing": "awakening", "third": "awakens"}, "rescue": {"past": "rescued", "ing": "rescuing", "third": "rescues"}, "save": {"past": "saved", "ing": "saving", "third": "saves"}, "assist": {"past": "assisted", "ing": "assisting", "third": "assists"}, "protect": {"past": "protected", "ing": "protecting", "third": "protects"}, "support": {"past": "supported", "ing": "supporting", "third": "supports"}, "halt": {"past": "halted", "ing": "halting", "third": "halts"}, "freeze": {"past": "froze", "ing": "freezing", "third": "freezes"}, "pause": {"past": "paused", "ing": "pausing", "third": "pauses"}, "quit": {"past": "quit", "ing": "quitting", "third": "quits"}, "end": {"past": "ended", "ing": "ending", "third": "ends"}, "begin": {"past": "began", "ing": "beginning", "third": "begins"}, "trigger": {"past": "triggered", "ing": "triggering", "third": "triggers"}, "spin": {"past": "spun", "ing": "spinning", "third": "spins"}, "twist": {"past": "twisted", "ing": "twisting", "third": "twists"}, "whirl": {"past": "whirled", "ing": "whirling", "third": "whirls"}, "swivel": {"past": "swiveled", "ing": "swiveling", "third": "swivels"}, "rotate": {"past": "rotated", "ing": "rotating", "third": "rotates"}, "hug": {"past": "hugged", "ing": "hugging", "third": "hugs"}, "cradle": {"past": "cradled", "ing": "cradling", "third": "cradles"}, "squeeze": {"past": "squeezed", "ing": "squeezing", "third": "squeezes"}, "embrace": {"past": "embraced", "ing": "embracing", "third": "embraces"}, "cuddle": {"past": "cuddled", "ing": "cuddling", "third": "cuddles"}, "snuggle": {"past": "snuggled", "ing": "snuggling", "third": "snuggles"}, "frolic": {"past": "frolicked", "ing": "frolicking", "third": "frolics"}, "romp": {"past": "romped", "ing": "romping", "third": "romps"}, "prance": {"past": "pranced", "ing": "prancing", "third": "prances"}, "twirl": {"past": "twirled", "ing": "twirling", "third": "twirls"}, "boogie": {"past": "boogied", "ing": "boogieing", "third": "boogies"}, "hum": {"past": "hummed", "ing": "humming", "third": "hums"}, "chant": {"past": "chanted", "ing": "chanting", "third": "chants"}, "croon": {"past": "crooned", "ing": "crooning", "third": "croons"}, "belt": {"past": "belted", "ing": "belting", "third": "belts"}, "warble": {"past": "warbled", "ing": "warbling", "third": "warbles"}, "linger": {"past": "lingered", "ing": "lingering", "third": "lingers"}, "dump": {"past": "dumped", "ing": "dumping", "third": "dumps"}, "spill": {"past": "spilled", "ing": "spilling", "third": "spills"}, "release": {"past": "released", "ing": "releasing", "third": "releases"}, "dwell": {"past": "dwelled", "ing": "dwelling", "third": "dwells"}, "reside": {"past": "resided", "ing": "residing", "third": "resides"}, "nest": {"past": "nested", "ing": "nesting", "third": "nests"}, "repair": {"past": "repaired", "ing": "repairing", "third": "repairs"}, "mend": {"past": "mended", "ing": "mending", "third": "mends"}, "patch": {"past": "patched", "ing": "patching", "third": "patches"}, "rebuild": {"past": "rebuilt", "ing": "rebuilding", "third": "rebuilds"}, "scrub": {"past": "scrubbed", "ing": "scrubbing", "third": "scrubs"}, "wash": {"past": "washed", "ing": "washing", "third": "washes"}, "wipe": {"past": "wiped", "ing": "wiping", "third": "wipes"}, "sweep": {"past": "swept", "ing": "sweeping", "third": "sweeps"}, "polish": {"past": "polished", "ing": "polishing", "third": "polishes"}, "beast": {"plural": "beasts"}, "creature": {"plural": "creatures"}, "brute": {"plural": "brutes"}, "fiend": {"plural": "fiends"}, "ogre": {"plural": "ogres"}, "giant": {"plural": "giants"}, "critter": {"plural": "critters"}, "mutant": {"plural": "mutants"}, "object": {"plural": "objects"}, "gadget": {"plural": "gadgets"}, "item": {"plural": "items"}, "shape": {"plural": "shapes"}, "home": {"plural": "homes"}, "cottage": {"plural": "cottages"}, "mansion": {"plural": "mansions"}, "cabin": {"plural": "cabins"}, "shack": {"plural": "shacks"}, "chamber": {"plural": "chambers"}, "hall": {"plural": "halls"}, "cellar": {"plural": "cellars"}, "attic": {"plural": "attics"}, "closet": {"plural": "closets"}, "jungle": {"plural": "jungles"}, "woodland": {"plural": "woodlands"}, "thicket": {"plural": "thickets"}, "wilderness": {"plural": "wildernesses"}, "cavern": {"plural": "caverns"}, "tunnel": {"plural": "tunnels"}, "den": {"plural": "dens"}, "lair": {"plural": "lairs"}, "burrow": {"plural": "burrows"}, "buddy": {"plural": "buddys"}, "pal": {"plural": "pals"}, "partner": {"plural": "partners"}, "sidekick": {"plural": "sidekicks"}, "teammate": {"plural": "teammates"}, "sound": {"plural": "sounds"}, "racket": {"plural": "rackets"}, "clatter": {"plural": "clatters"}, "snack": {"plural": "snacks"}, "meal": {"plural": "meals"}, "treat": {"plural": "treats"}, "feast": {"plural": "feasts"}, "fangs": {"plural": "fangses"}, "tusks": {"plural": "tuskses"}, "chompers": {"plural": "chomperses"}};
const DEFS = {
 "abandoned": "left behind and alone",
 "admire": "to look up to and think highly of",
 "adore": "to love very much",
 "afraid": "feeling scared",
 "alarm": "to suddenly scare or worry",
 "alone": "with no one else around",
 "amazed": "very surprised in a good way",
 "amazing": "so good it surprises you",
 "ambush": "to hide and attack by surprise",
 "amusing": "funny and fun",
 "ancient": "very, very old",
 "angry": "very upset and mad",
 "announce": "to tell everyone out loud",
 "anxious": "worried and nervous",
 "appear": "to show up or come into view",
 "appreciate": "to be thankful for",
 "approach": "to come closer",
 "arrive": "to get to a place",
 "ascend": "to go up",
 "assist": "to help",
 "astonished": "super surprised",
 "astonishing": "so surprising it's hard to believe",
 "attempt": "to try",
 "attic": "a room at the very top of a house",
 "awaken": "to wake up",
 "awesome": "really great and impressive",
 "awful": "very bad",
 "bare": "empty or with nothing covering it",
 "bash": "to hit hard",
 "bashful": "shy",
 "battle": "to fight",
 "bawl": "to cry loudly",
 "beam": "to smile big and bright",
 "beast": "a big, wild animal or monster",
 "beautiful": "very nice to look at",
 "beckon": "to wave someone over",
 "beg": "to ask again and again, really wanting something",
 "begin": "to start",
 "believe": "to think something is true",
 "bellow": "to shout in a deep, loud voice",
 "belongings": "the things a person owns",
 "belt": "to sing very loudly",
 "bitter": "sharp and stinging, like a cold wind",
 "bizarre": "very strange",
 "blazing": "burning very bright and hot",
 "boiling": "so hot it bubbles",
 "bold": "brave and not afraid",
 "bolt": "to run away suddenly",
 "bonkers": "wild and silly",
 "bony": "so thin you can see bones",
 "boogie": "to dance in a fun way",
 "boom": "to make a deep, loud sound",
 "booming": "very loud and deep",
 "boot": "to kick hard",
 "bossy": "always telling others what to do",
 "bounce": "to spring up and down",
 "bound": "to leap forward",
 "brand-new": "never used before",
 "brawl": "to fight roughly",
 "breathe": "to say very softly, almost like air",
 "bright": "smart and quick to learn",
 "brilliant": "very smart",
 "bristly": "covered in short, stiff hairs",
 "bruise": "to hurt and leave a mark on skin",
 "brush": "to touch lightly",
 "brute": "a big, rough, mean creature",
 "buddy": "a friend",
 "budge": "to move just a little",
 "build": "to put pieces together to make something",
 "bulky": "big and hard to carry",
 "burning": "very hot, like fire",
 "burrow": "a hole an animal digs to live in",
 "bursting": "so full it might pop",
 "busted": "broken",
 "cabin": "a small wooden house",
 "cackle": "to laugh in a loud, witchy way",
 "capture": "to catch and keep",
 "caring": "kind and helpful to others",
 "carry": "to hold and take somewhere",
 "catch": "to grab something that is moving",
 "cavern": "a very big cave",
 "cellar": "a room under a house",
 "challenging": "hard to do",
 "chamber": "a room, often a secret one",
 "chant": "to say or sing the same words over and over",
 "chaotic": "wild and out of control",
 "charge": "to rush forward to attack",
 "charming": "pleasant and easy to like",
 "cheerful": "happy and bright",
 "cherish": "to love and take care of",
 "chew": "to bite food over and over",
 "chilling": "so scary it gives you shivers",
 "chilly": "a little cold",
 "chomp": "to bite down hard",
 "chompers": "teeth",
 "chubby": "round and plump",
 "chuck": "to throw",
 "chuckle": "to laugh quietly",
 "chug": "to drink fast in big gulps",
 "clamber": "to climb using hands and feet",
 "clash": "to fight or bang together",
 "clatter": "a loud, rattling noise",
 "clever": "smart and quick",
 "closet": "a small room for storing things",
 "clutch": "to hold on tight",
 "cluttered": "full of messy stuff",
 "cold": "low in temperature, not warm",
 "collapse": "to fall down suddenly",
 "collect": "to gather together",
 "colossal": "really, really big",
 "comical": "funny",
 "construct": "to build",
 "cook": "to make food with heat",
 "cottage": "a small, cozy house",
 "courageous": "brave",
 "cover": "to hide under something",
 "crack": "to break with a line or a snap",
 "cracked": "has a break or line in it",
 "cradle": "to hold gently in your arms",
 "craft": "to make by hand",
 "crammed": "packed too full",
 "cranky": "grumpy and easily upset",
 "crash": "to smash into something, or a loud smashing sound",
 "crave": "to want very badly",
 "crawl": "to move on hands and knees",
 "crawling": "moving very slowly",
 "create": "to make something new",
 "creature": "a living thing, like an animal or monster",
 "creep": "to move slowly and quietly",
 "creepy": "scary in a strange way",
 "crisp": "cool and fresh",
 "critter": "a small creature",
 "croon": "to sing softly",
 "crouch": "to bend down low",
 "cruel": "mean on purpose",
 "crumbling": "falling apart in little pieces",
 "crush": "to squash flat",
 "cuddle": "to hug close",
 "cuddly": "soft and nice to hug",
 "damp": "a little wet",
 "daring": "brave enough to take risks",
 "dark": "evil or gloomy",
 "dash": "to run quickly",
 "dazzling": "so bright it's hard to look at",
 "deadly": "able to kill",
 "deafening": "so loud it hurts your ears",
 "delectable": "delicious",
 "delicious": "tastes really good",
 "delighted": "very happy",
 "deliver": "to bring to someone",
 "demand": "to ask strongly, not politely",
 "demolish": "to tear down completely",
 "den": "an animal's home or hiding place",
 "depart": "to leave",
 "deserted": "empty, with no people",
 "desire": "to want",
 "despise": "to hate",
 "detect": "to notice",
 "detest": "to hate",
 "devour": "to eat up fast and hungrily",
 "difficult": "hard",
 "dim": "not very bright",
 "disappear": "to go out of sight",
 "disastrous": "really bad, like a disaster",
 "discover": "to find something for the first time",
 "disgusting": "very gross",
 "dislike": "to not like",
 "dive": "to jump headfirst into water",
 "doze": "to sleep lightly",
 "drag": "to pull along the ground",
 "dreadful": "very bad or scary",
 "drenched": "completely soaked",
 "drift": "to move slowly, carried along",
 "dripping": "so wet that drops fall off",
 "drop": "to let fall",
 "drowsy": "sleepy",
 "duck": "to bend down quickly to hide",
 "dull": "boring",
 "dump": "to drop in a pile",
 "dusty": "covered in dust",
 "dwell": "to live somewhere",
 "eager": "excited and ready",
 "earn": "to get by working",
 "eerie": "strange and spooky",
 "effortless": "done without trying hard",
 "elegant": "graceful and fancy",
 "embrace": "to hug",
 "end": "to finish",
 "enjoy": "to like doing something",
 "enjoyable": "fun",
 "enormous": "very big",
 "enraged": "extremely angry",
 "enter": "to go in",
 "entertaining": "fun to watch or do",
 "epic": "huge and amazing",
 "escape": "to get away",
 "evil": "very bad and wicked",
 "excellent": "very, very good",
 "excited": "happy and can't wait",
 "exciting": "makes you feel thrilled",
 "exclaim": "to say suddenly and loudly",
 "exhausted": "totally tired out",
 "exit": "to go out",
 "experience": "to feel or go through",
 "expert": "really good at something",
 "explain": "to tell how or why",
 "famished": "very hungry",
 "fangs": "long, sharp teeth",
 "fantastic": "amazing",
 "fearful": "scared",
 "fearless": "not afraid at all",
 "feast": "a huge meal",
 "fed-up": "tired of something and annoyed",
 "feeble": "very weak",
 "feverish": "hot and sick",
 "fiend": "an evil monster",
 "figure": "to work something out in your head",
 "filthy": "very dirty",
 "find": "to come across something",
 "firm": "hard and doesn't bend",
 "flatten": "to squash flat",
 "flee": "to run away",
 "flimsy": "weak and easy to break",
 "fling": "to throw hard or open fast",
 "float": "to rest on top of water",
 "flop": "to drop down loosely",
 "fluffy": "soft and puffy",
 "flutter": "to flap quickly and lightly",
 "follow": "to go after",
 "forgotten": "no one remembers it",
 "foul": "really bad smelling",
 "frail": "weak and easy to hurt",
 "freeze": "to stop and not move",
 "freezing": "very, very cold",
 "fresh": "new and clean",
 "friendless": "without any friends",
 "friendly": "kind and nice to others",
 "frighten": "to scare",
 "frightened": "scared",
 "frightening": "scary",
 "frolic": "to play happily",
 "frosty": "covered in frost, icy cold",
 "frozen": "turned to ice",
 "fuming": "so angry you feel like steam is coming out",
 "furious": "very angry",
 "furry": "covered in fur",
 "fuzzy": "covered in soft, short hair",
 "gadget": "a small machine or tool",
 "gape": "to stare with your mouth open",
 "gasp": "to suddenly breathe in from surprise",
 "gawk": "to stare rudely",
 "gaze": "to look at for a long time",
 "gear": "equipment or stuff you carry",
 "generous": "happy to share",
 "genius": "super smart",
 "gentle": "soft and kind",
 "ghostly": "like a ghost, pale and spooky",
 "giant": "very big, or a huge creature",
 "giddy": "dizzy with happiness",
 "gigantic": "huge",
 "giggle": "to laugh in a silly way",
 "glad": "happy",
 "glance": "to look quickly",
 "glare": "to stare angrily",
 "gleaming": "shining brightly",
 "gleeful": "full of joy",
 "glide": "to move smoothly",
 "glimpse": "to see for just a second",
 "gloomy": "dark and sad",
 "glowing": "giving off soft light",
 "gnaw": "to bite and chew on something hard",
 "gobble": "to eat fast and greedily",
 "gooey": "soft and sticky",
 "goofy": "silly",
 "gorgeous": "very beautiful",
 "grab": "to take quickly",
 "grasp": "to hold firmly",
 "great": "very good",
 "greedy": "wanting way more than you need",
 "grimy": "covered in dirt",
 "grin": "to smile wide",
 "grip": "to hold tightly",
 "gross": "very yucky",
 "grotesque": "ugly in a weird, twisted way",
 "growl": "to make a low, angry sound",
 "grub": "food",
 "grumble": "to complain in a low voice",
 "grumpy": "in a bad mood",
 "guess": "to think without knowing for sure",
 "gulp": "to swallow fast",
 "gutsy": "brave",
 "guzzle": "to drink fast and greedily",
 "hall": "a long room or hallway",
 "halt": "to stop",
 "hand": "to give with your hand",
 "harm": "to hurt",
 "haul": "to pull something heavy",
 "head": "to go toward a place",
 "heartbroken": "extremely sad",
 "heave": "to lift or pull with lots of effort",
 "hefty": "big and heavy",
 "helpful": "ready to help",
 "heroic": "brave like a hero",
 "hideous": "very ugly",
 "hilarious": "super funny",
 "hiss": "to make a long \"sss\" sound",
 "holler": "to yell",
 "hollow": "empty inside",
 "home": "the place where someone lives",
 "hop": "to jump in small bounces",
 "hope": "to wish something will happen",
 "horrendous": "horribly bad",
 "horrible": "very bad",
 "horrifying": "extremely scary",
 "hover": "to float in one spot in the air",
 "howl": "to make a long, loud cry",
 "huff": "to breathe out hard",
 "hug": "to hold close in your arms",
 "huge": "very big",
 "hum": "to sing with your mouth closed",
 "hunt": "to search for and chase",
 "hurl": "to throw hard",
 "hurry": "to move fast",
 "hushed": "very quiet",
 "icy": "cold like ice",
 "ill": "sick",
 "imagine": "to picture in your mind",
 "impossible": "can't be done",
 "impressive": "amazing to see",
 "inch": "to move a tiny bit at a time",
 "incredible": "hard to believe",
 "inform": "to tell",
 "inhale": "to breathe in",
 "injure": "to hurt",
 "inquire": "to ask",
 "invent": "to make something brand new",
 "irritated": "annoyed",
 "isolated": "alone and far from others",
 "item": "one thing",
 "items": "things",
 "jagged": "with sharp, uneven edges",
 "jerk": "to pull suddenly",
 "jittery": "shaky and nervous",
 "journey": "to travel far",
 "joyful": "full of joy",
 "jumbled": "mixed up",
 "jump": "to push off the ground into the air",
 "jumpy": "easily startled",
 "jungle": "a thick, wild forest",
 "junk": "old, useless stuff",
 "kind": "nice and caring",
 "lair": "a monster's hiding place",
 "lanky": "tall and thin",
 "launch": "to send off with force, or to start",
 "lazy": "not wanting to work or move",
 "leap": "to jump far",
 "lightning-fast": "as fast as lightning",
 "linger": "to stay around longer",
 "little": "small",
 "livid": "super angry",
 "loathe": "to hate",
 "lob": "to throw high and soft",
 "locate": "to find",
 "lock": "to close with a key",
 "lonely": "sad because you're alone",
 "loom": "to stand tall in a scary way",
 "love": "to like very, very much",
 "lovely": "beautiful and pleasant",
 "lumber": "to walk in a slow, heavy, clumsy way",
 "lumpy": "full of bumps",
 "lunge": "to jump forward suddenly",
 "lurk": "to hide and wait",
 "magnificent": "amazing and grand",
 "mammoth": "huge",
 "mansion": "a giant, fancy house",
 "march": "to walk with strong, even steps",
 "marvelous": "wonderful",
 "massive": "very big and heavy",
 "meal": "food eaten at one time",
 "mean": "not kind",
 "meek": "quiet and gentle",
 "menacing": "looking like it might hurt you",
 "mend": "to fix",
 "messy": "not neat",
 "mighty": "very strong",
 "miniature": "very small",
 "miserable": "very unhappy",
 "modern": "new and up to date",
 "monitor": "to keep watching",
 "monstrous": "huge and scary like a monster",
 "mouthwatering": "looks so good it makes you hungry",
 "muddy": "covered in mud",
 "muffled": "quiet, like a sound behind a wall",
 "mumble": "to talk so low it's hard to understand",
 "munch": "to chew noisily",
 "murky": "dark and cloudy",
 "murmur": "to speak softly",
 "muscular": "having big, strong muscles",
 "musty": "smelling old and damp",
 "mutant": "a strange, changed creature",
 "mutter": "to speak low and grumpy",
 "mysterious": "hard to explain or understand",
 "mystifying": "very confusing",
 "nab": "to grab quickly",
 "nap": "to sleep for a short time",
 "nasty": "very mean or gross",
 "need": "to have to have something",
 "nervous": "worried and jittery",
 "nest": "to make a cozy home",
 "nibble": "to take tiny bites",
 "nip": "to give a small, quick bite",
 "noisy": "loud",
 "notice": "to see or become aware of",
 "nudge": "to push gently",
 "object": "a thing",
 "observe": "to watch carefully",
 "odd": "strange",
 "offer": "to hold out to someone",
 "ogre": "a big, ugly giant in stories",
 "oozy": "slowly leaking goo",
 "outgoing": "friendly and loves meeting people",
 "overflowing": "so full it spills over",
 "overhear": "to hear something by accident",
 "overjoyed": "super happy",
 "packed": "completely full",
 "paddle": "to move through water using your arms or an oar",
 "painless": "doesn't hurt",
 "pal": "a friend",
 "panicked": "so scared you can't think",
 "pant": "to breathe fast and hard",
 "partner": "someone you team up with",
 "pass": "to hand to someone",
 "pat": "to tap gently with your hand",
 "patch": "to fix a hole",
 "pause": "to stop for a moment",
 "peaceful": "calm and quiet",
 "peculiar": "strange",
 "peek": "to look quickly or secretly",
 "peer": "to look closely",
 "perch": "to sit on top of something",
 "perilous": "very dangerous",
 "petite": "small",
 "petrified": "so scared you can't move",
 "pint-sized": "very small",
 "pitch-black": "completely dark",
 "place": "to put down carefully",
 "plead": "to beg",
 "pleasant": "nice",
 "plop": "to drop with a soft thud",
 "plump": "nicely round",
 "plunge": "to fall or dive down fast",
 "pointy": "having a sharp point",
 "poke": "to push with a finger",
 "poky": "very slow",
 "polish": "to rub until shiny",
 "polite": "has good manners",
 "pounce": "to jump on suddenly",
 "powerful": "very strong",
 "prance": "to walk or dance with high, happy steps",
 "press": "to push down",
 "prickly": "covered in tiny sharp points",
 "protect": "to keep safe",
 "protected": "kept safe",
 "prowl": "to sneak around hunting",
 "pry": "to force open",
 "puff": "to blow out short breaths",
 "pumped": "really excited",
 "punch": "to hit with a fist",
 "punt": "to kick a ball far",
 "puny": "small and weak",
 "pursue": "to chase",
 "push": "to press against to move it",
 "putrid": "rotten and stinky",
 "puzzling": "confusing",
 "quake": "to shake hard",
 "queasy": "feeling like you might throw up",
 "question": "to ask",
 "quick": "fast",
 "quiet": "not loud",
 "quit": "to stop",
 "quiver": "to shake a little",
 "race": "to run fast",
 "racket": "a loud, annoying noise",
 "ram": "to crash into hard",
 "rapid": "very fast",
 "rattle": "to shake and clatter",
 "ravenous": "extremely hungry",
 "razor-sharp": "sharp enough to cut",
 "realize": "to suddenly understand",
 "rebuild": "to build again",
 "receive": "to get",
 "recognize": "to know who or what something is",
 "relaxed": "calm and easy",
 "release": "to let go",
 "remember": "to think of something from before",
 "repair": "to fix",
 "reply": "to answer",
 "rescue": "to save from danger",
 "reside": "to live somewhere",
 "rest": "to relax or sleep",
 "restless": "can't sit still",
 "revolting": "disgusting",
 "ridiculous": "silly and hard to believe",
 "rigid": "stiff and doesn't bend",
 "rise": "to get up",
 "risky": "might be dangerous",
 "roar": "to make a loud, deep sound",
 "roaring": "very loud like a roar",
 "rock-hard": "as hard as a rock",
 "romp": "to play wildly",
 "rotate": "to turn around in a circle",
 "rotten": "spoiled and gross",
 "round": "shaped like a ball",
 "rude": "not polite",
 "ruin": "to wreck",
 "ruined": "wrecked",
 "rumble": "to make a deep, rolling sound, or a sound like that",
 "rusty": "covered in orange-brown rust",
 "save": "to rescue",
 "scale": "to climb up",
 "scared": "afraid",
 "scoot": "to slide or move a short way",
 "scorching": "super hot",
 "scramble": "to move fast and messily",
 "scrawny": "thin and weak",
 "scream": "to yell in a high, loud voice",
 "screech": "to make a high, sharp sound, or a sound like that",
 "scrub": "to rub hard to clean",
 "scrumptious": "very tasty",
 "scurry": "to run with quick little steps",
 "seal": "to close tight",
 "secret": "hidden from others",
 "secure": "safe",
 "seize": "to grab",
 "sense": "to feel or notice",
 "set": "to put down",
 "settle": "to get comfy and stay",
 "shack": "a small, rough hut",
 "shadowy": "full of shadows",
 "shady": "dark from shade",
 "shaggy": "with long, messy hair",
 "shaky": "trembling",
 "shape": "a form you can see, but not clearly",
 "share": "to give part to others, or to tell",
 "shatter": "to break into many pieces",
 "shattered": "broken into pieces",
 "sheltered": "protected and covered",
 "shift": "to move a little",
 "shiny": "bright and reflecting light",
 "shiver": "to shake from cold or fear",
 "shocked": "very surprised",
 "shout": "to yell",
 "shove": "to push hard",
 "shriek": "to scream in a high voice",
 "shrill": "high and sharp sounding",
 "shuffle": "to walk dragging your feet",
 "shut": "to close",
 "sidekick": "a helper and friend",
 "silent": "making no sound",
 "silky": "soft and smooth",
 "silly": "funny and goofy",
 "simple": "easy",
 "sinister": "evil and threatening",
 "sip": "to drink a tiny bit",
 "sizzling": "hot and crackling",
 "skilled": "very good at something",
 "skinny": "very thin",
 "skip": "to hop from foot to foot",
 "sky-high": "very tall",
 "slam": "to shut or hit hard and loud",
 "sleepy": "tired and ready for bed",
 "slide": "to move smoothly across",
 "slim": "thin",
 "slimy": "covered in slippery goo",
 "slink": "to move quietly so no one sees",
 "slippery": "hard to hold or stand on",
 "slither": "to slide like a snake",
 "sloppy": "messy",
 "sluggish": "slow and tired",
 "slump": "to sit or fall in a tired heap",
 "slurp": "to drink or eat noisily",
 "smack": "to hit with a loud slap",
 "small": "little",
 "smash": "to break into pieces",
 "smashed": "broken to bits",
 "smirk": "to smile in a sneaky way",
 "smooth": "with no bumps",
 "snack": "a small bit of food",
 "snag": "to catch",
 "snap": "to bite or break with a quick, sharp move",
 "snarl": "to growl while showing teeth",
 "snatch": "to grab quickly",
 "sneak": "to move secretly",
 "snicker": "to laugh sneakily",
 "sniff": "to smell quickly",
 "sniffle": "to sniff while crying",
 "snooze": "to nap",
 "snore": "to make noise while sleeping",
 "snort": "to make a noise through your nose",
 "snuffle": "to sniff noisily",
 "snuggle": "to cuddle up close",
 "soaked": "totally wet",
 "soar": "to fly high",
 "sob": "to cry hard",
 "soft": "gentle and not hard",
 "soggy": "wet and mushy",
 "solid": "hard all the way through",
 "sound": "something you hear",
 "sparkling": "shining with little flashes of light",
 "spectacular": "amazing to see",
 "speedy": "fast",
 "spiky": "covered in sharp points",
 "spill": "to let something pour out by accident",
 "spin": "to turn around fast",
 "spiteful": "wanting to hurt others",
 "splash": "to hit water so it flies up",
 "spook": "to scare",
 "spooky": "scary in a ghostly way",
 "spot": "to see",
 "spring": "to jump up suddenly",
 "sprint": "to run as fast as you can",
 "spy": "to watch secretly",
 "squat": "to crouch down low, or short and wide",
 "squeal": "to make a high, happy or scared sound",
 "squeeze": "to press tightly",
 "squint": "to look with eyes almost closed",
 "squirm": "to wiggle around",
 "squishy": "soft and squashy",
 "stained": "marked with spots that won't come off",
 "stalk": "to follow quietly, like a hunter",
 "stare": "to look for a long time",
 "startle": "to surprise suddenly",
 "startled": "suddenly surprised or scared",
 "starving": "super hungry",
 "stay": "to remain in one place",
 "steady": "calm and not shaky",
 "steal": "to take what isn't yours",
 "steaming": "so hot that steam rises",
 "sticky": "gluey",
 "stiff": "hard to bend",
 "still": "not moving",
 "sting": "to hurt with a sharp pain",
 "stinky": "smells bad",
 "stir": "to start to wake and move",
 "stomp": "to step down hard and loud",
 "strange": "unusual",
 "strike": "to hit hard",
 "strive": "to try very hard",
 "stroke": "to pet gently",
 "stroll": "to walk slowly and calmly",
 "struggle": "to try hard against something",
 "stubby": "short and thick",
 "stuffed": "completely full",
 "stumble": "to trip and almost fall",
 "stunned": "so surprised you can't move",
 "stunning": "very beautiful",
 "sturdy": "strong and hard to break",
 "summon": "to call someone to come",
 "support": "to help hold up",
 "suppose": "to think something is probably true",
 "swat": "to hit quickly with your hand",
 "sweep": "to clean with a broom",
 "sweet": "kind and nice",
 "swift": "fast",
 "swipe": "to grab or swing quickly",
 "swivel": "to turn around in place",
 "swoop": "to dive down through the air",
 "talented": "naturally good at something",
 "tap": "to touch lightly",
 "tasty": "good to eat",
 "teammate": "someone on your team",
 "teary": "with tears in your eyes",
 "teeny": "very tiny",
 "tense": "tight and worried",
 "terrible": "very bad",
 "terrific": "great",
 "terrified": "very, very scared",
 "terrify": "to scare badly",
 "terrifying": "extremely scary",
 "test": "to try out",
 "thicket": "a thick clump of bushes",
 "things": "objects or stuff",
 "threatening": "looking like it will hurt you",
 "thrilled": "super excited",
 "thrilling": "very exciting",
 "thrust": "to push hard and fast",
 "thump": "to hit with a heavy thud",
 "thunder": "to make a loud, booming sound",
 "thunderous": "as loud as thunder",
 "timid": "shy and easily scared",
 "tiny": "very small",
 "tiptoe": "to walk quietly on your toes",
 "topple": "to tip over and fall",
 "toss": "to throw lightly",
 "touch": "to feel with your hand",
 "tough": "strong and hard",
 "tower": "to stand very tall above others",
 "towering": "very tall",
 "track": "to follow footprints or clues",
 "trap": "to catch and hold",
 "travel": "to go from place to place",
 "treasure": "to value a lot",
 "treat": "a special snack",
 "tremble": "to shake",
 "tricky": "hard to figure out",
 "trigger": "to start something",
 "trip": "to catch your foot and stumble",
 "trudge": "to walk slowly and heavily",
 "tug": "to pull hard",
 "tumble": "to fall and roll",
 "tunnel": "an underground passage",
 "tusks": "long, pointy teeth that stick out",
 "twirl": "to spin around",
 "twist": "to turn and bend",
 "unbelievable": "hard to believe",
 "uncover": "to find something hidden",
 "understand": "to know what something means",
 "uneasy": "worried",
 "unhappy": "sad",
 "unharmed": "not hurt",
 "unhurried": "slow and calm",
 "uninterested": "not caring about something",
 "unkind": "mean",
 "unknown": "not known",
 "unlock": "to open with a key",
 "unsettling": "makes you feel uneasy",
 "unsightly": "ugly to look at",
 "unstoppable": "can't be stopped",
 "untidy": "messy",
 "unused": "never used",
 "unusual": "not normal",
 "unwell": "sick",
 "unzip": "to open a zipper",
 "upset": "sad or worried",
 "vacant": "empty",
 "vanish": "to disappear suddenly",
 "vault": "to jump over something",
 "vile": "really disgusting",
 "villainous": "evil like a villain",
 "wacky": "silly and strange",
 "wail": "to cry loudly and long",
 "wander": "to walk around without a plan",
 "warble": "to sing in a wobbly, trilling way",
 "warm": "friendly and kind",
 "warn": "to tell about danger",
 "warty": "covered in bumps called warts",
 "wash": "to clean with water",
 "weary": "very tired",
 "wee": "tiny",
 "weep": "to cry",
 "weighty": "heavy",
 "weird": "strange",
 "welcoming": "friendly to people who come",
 "whack": "to hit hard",
 "wheeze": "to breathe with a whistling sound",
 "whiff": "to catch a quick smell",
 "whimper": "to cry softly",
 "whirl": "to spin fast",
 "whisper": "to talk very quietly",
 "wicked": "evil",
 "wiggle": "to move side to side",
 "wild": "out of control",
 "wilderness": "wild land far from people",
 "wipe": "to rub clean",
 "wise": "smart from experience",
 "wish": "to want something to happen",
 "witness": "to see something happen",
 "wobble": "to shake from side to side",
 "wobbly": "shaky",
 "wonder": "to ask yourself about something",
 "wonderful": "very good",
 "woodland": "land covered in trees",
 "woods": "a forest",
 "woolly": "thick and fuzzy like wool",
 "worn": "old and used a lot",
 "worn-out": "totally tired",
 "worried": "thinking something bad might happen",
 "worship": "to love like a hero",
 "wound": "to hurt badly",
 "wreck": "to destroy",
 "wrestle": "to fight by grabbing and pushing",
 "wriggle": "to twist and wiggle",
 "wrinkled": "covered in little folds",
 "yank": "to pull hard and fast",
 "yell": "to shout",
 "yelp": "to make a short, sharp cry",
 "yucky": "gross",
 "yummy": "tasty",
 "zany": "wacky and silly",
 "zippy": "quick",
 "zoom": "to move very fast"
};
const SPECIAL = {
 "very": "Skip \"very\"! Swap \"very\" + a plain word for one strong word. \"very big\" → \"enormous\", \"very scared\" → \"terrified\".",
 "really": "Skip \"really\"! Swap \"really\" + a plain word for one strong word. \"really happy\" → \"overjoyed\", \"really fast\" → \"lightning-fast\"."
};
