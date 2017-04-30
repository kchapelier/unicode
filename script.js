var input = document.getElementById('input');
var inputValue = document.getElementById('input-value');

var unicode = document.getElementById('unicode');
var plane = document.getElementById('plane');
var block = document.getElementById('block');
var utf8hex = document.getElementById('utf8hex');
var utf8bin = document.getElementById('utf8bin');
var utf16hex = document.getElementById('utf16hex');
var utf16bin = document.getElementById('utf16bin');
var htmldec = document.getElementById('htmldec');
var htmlhex = document.getElementById('htmlhex');
var jsescape = document.getElementById('jsescape');
var cssescape = document.getElementById('cssescape');
var lowercase = document.getElementById('lowercase');
var uppercase = document.getElementById('uppercase');
var blockwikilink = document.getElementById('block-wikipedia-link');
var fileformatlink = document.getElementById('fileformat-link');

// https://gist.github.com/kchapelier/beffd4f7a61f5d82db657d3b60b8f4e7
var unicodeBlocks = [
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 0,
        "rangeMax": 127,
        "name": "Basic Latin",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Basic_Latin_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 128,
        "rangeMax": 255,
        "name": "Latin-1 Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 256,
        "rangeMax": 383,
        "name": "Latin Extended-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Latin_Extended-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 384,
        "rangeMax": 591,
        "name": "Latin Extended-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Latin_Extended-B"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 592,
        "rangeMax": 687,
        "name": "IPA Extensions",
        "wikipediaLink": "https://en.wikipedia.org/wiki/IPA_Extensions"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 688,
        "rangeMax": 767,
        "name": "Spacing Modifier Letters",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Spacing_Modifier_Letters"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 768,
        "rangeMax": 879,
        "name": "Combining Diacritical Marks",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Combining_Diacritical_Marks"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 880,
        "rangeMax": 1023,
        "name": "Greek and Coptic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Greek_and_Coptic"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1024,
        "rangeMax": 1279,
        "name": "Cyrillic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cyrillic_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1280,
        "rangeMax": 1327,
        "name": "Cyrillic Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cyrillic_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1328,
        "rangeMax": 1423,
        "name": "Armenian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Armenian_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1424,
        "rangeMax": 1535,
        "name": "Hebrew",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hebrew_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1536,
        "rangeMax": 1791,
        "name": "Arabic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Arabic_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1792,
        "rangeMax": 1871,
        "name": "Syriac",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Syriac_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1872,
        "rangeMax": 1919,
        "name": "Arabic Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Arabic_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1920,
        "rangeMax": 1983,
        "name": "Thaana",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Thaana_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 1984,
        "rangeMax": 2047,
        "name": "NKo",
        "wikipediaLink": "https://en.wikipedia.org/wiki/NKo_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2048,
        "rangeMax": 2111,
        "name": "Samaritan",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Samaritan_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2112,
        "rangeMax": 2143,
        "name": "Mandaic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mandaic_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2208,
        "rangeMax": 2303,
        "name": "Arabic Extended-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Arabic_Extended-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2304,
        "rangeMax": 2431,
        "name": "Devanagari",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Devanagari_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2432,
        "rangeMax": 2559,
        "name": "Bengali",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Bengali_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2560,
        "rangeMax": 2687,
        "name": "Gurmukhi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Gurmukhi_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2688,
        "rangeMax": 2815,
        "name": "Gujarati",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Gujarati_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2816,
        "rangeMax": 2943,
        "name": "Oriya",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Oriya_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 2944,
        "rangeMax": 3071,
        "name": "Tamil",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tamil_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 3072,
        "rangeMax": 3199,
        "name": "Telugu",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Telugu_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 3200,
        "rangeMax": 3327,
        "name": "Kannada",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Kannada_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 3328,
        "rangeMax": 3455,
        "name": "Malayalam",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Malayalam_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 3456,
        "rangeMax": 3583,
        "name": "Sinhala",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Sinhala_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 3584,
        "rangeMax": 3711,
        "name": "Thai",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Thai_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 3712,
        "rangeMax": 3839,
        "name": "Lao",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Lao_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 3840,
        "rangeMax": 4095,
        "name": "Tibetan",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tibetan_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 4096,
        "rangeMax": 4255,
        "name": "Myanmar",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Myanmar_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 4256,
        "rangeMax": 4351,
        "name": "Georgian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Georgian_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 4352,
        "rangeMax": 4607,
        "name": "Hangul Jamo",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hangul_Jamo_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 4608,
        "rangeMax": 4991,
        "name": "Ethiopic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ethiopic_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 4992,
        "rangeMax": 5023,
        "name": "Ethiopic Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ethiopic_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5024,
        "rangeMax": 5119,
        "name": "Cherokee",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cherokee_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5120,
        "rangeMax": 5759,
        "name": "Unified Canadian Aboriginal Syllabics",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5760,
        "rangeMax": 5791,
        "name": "Ogham",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ogham_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5792,
        "rangeMax": 5887,
        "name": "Runic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Runic_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5888,
        "rangeMax": 5919,
        "name": "Tagalog",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tagalog_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5920,
        "rangeMax": 5951,
        "name": "Hanunoo",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hanunoo_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5952,
        "rangeMax": 5983,
        "name": "Buhid",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Buhid_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 5984,
        "rangeMax": 6015,
        "name": "Tagbanwa",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tagbanwa_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6016,
        "rangeMax": 6143,
        "name": "Khmer",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Khmer_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6144,
        "rangeMax": 6319,
        "name": "Mongolian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mongolian_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6320,
        "rangeMax": 6399,
        "name": "Unified Canadian Aboriginal Syllabics Extended",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Unified_Canadian_Aboriginal_Syllabics_Extended"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6400,
        "rangeMax": 6479,
        "name": "Limbu",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Limbu_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6480,
        "rangeMax": 6527,
        "name": "Tai Le",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tai_Le_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6528,
        "rangeMax": 6623,
        "name": "New Tai Lue",
        "wikipediaLink": "https://en.wikipedia.org/wiki/New_Tai_Lue_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6624,
        "rangeMax": 6655,
        "name": "Khmer Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Khmer_Symbols"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6656,
        "rangeMax": 6687,
        "name": "Buginese",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Buginese_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6688,
        "rangeMax": 6831,
        "name": "Tai Tham",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tai_Tham_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6832,
        "rangeMax": 6911,
        "name": "Combining Diacritical Marks Extended",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_Extended"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 6912,
        "rangeMax": 7039,
        "name": "Balinese",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Balinese_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7040,
        "rangeMax": 7103,
        "name": "Sundanese",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Sundanese_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7104,
        "rangeMax": 7167,
        "name": "Batak",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Batak_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7168,
        "rangeMax": 7247,
        "name": "Lepcha",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Lepcha_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7248,
        "rangeMax": 7295,
        "name": "Ol Chiki",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ol_Chiki_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7296,
        "rangeMax": 7311,
        "name": "Cyrillic Extended-C",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cyrillic_Extended-C"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7360,
        "rangeMax": 7375,
        "name": "Sundanese Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Sundanese_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7376,
        "rangeMax": 7423,
        "name": "Vedic Extensions",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Vedic_Extensions"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7424,
        "rangeMax": 7551,
        "name": "Phonetic Extensions",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Phonetic_Extensions"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7552,
        "rangeMax": 7615,
        "name": "Phonetic Extensions Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Phonetic_Extensions_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7616,
        "rangeMax": 7679,
        "name": "Combining Diacritical Marks Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7680,
        "rangeMax": 7935,
        "name": "Latin Extended Additional",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Latin_Extended_Additional"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 7936,
        "rangeMax": 8191,
        "name": "Greek Extended",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Greek_Extended"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8192,
        "rangeMax": 8303,
        "name": "General Punctuation",
        "wikipediaLink": "https://en.wikipedia.org/wiki/General_Punctuation"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8304,
        "rangeMax": 8351,
        "name": "Superscripts and Subscripts",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Superscripts_and_Subscripts"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8352,
        "rangeMax": 8399,
        "name": "Currency Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Currency_Symbols_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8400,
        "rangeMax": 8447,
        "name": "Combining Diacritical Marks for Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8448,
        "rangeMax": 8527,
        "name": "Letterlike Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Letterlike_Symbols"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8528,
        "rangeMax": 8591,
        "name": "Number Forms",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Number_Forms"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8592,
        "rangeMax": 8703,
        "name": "Arrows",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Arrows_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8704,
        "rangeMax": 8959,
        "name": "Mathematical Operators",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mathematical_Operators"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 8960,
        "rangeMax": 9215,
        "name": "Miscellaneous Technical",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Miscellaneous_Technical"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9216,
        "rangeMax": 9279,
        "name": "Control Pictures",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Control_Pictures"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9280,
        "rangeMax": 9311,
        "name": "Optical Character Recognition",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Optical_Character_Recognition_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9312,
        "rangeMax": 9471,
        "name": "Enclosed Alphanumerics",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Enclosed_Alphanumerics"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9472,
        "rangeMax": 9599,
        "name": "Box Drawing",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Box_Drawing"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9600,
        "rangeMax": 9631,
        "name": "Block Elements",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Block_Elements"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9632,
        "rangeMax": 9727,
        "name": "Geometric Shapes",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Geometric_Shapes"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9728,
        "rangeMax": 9983,
        "name": "Miscellaneous Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Miscellaneous_Symbols"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 9984,
        "rangeMax": 10175,
        "name": "Dingbats",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Dingbat#Unicode"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 10176,
        "rangeMax": 10223,
        "name": "Miscellaneous Mathematical Symbols-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 10224,
        "rangeMax": 10239,
        "name": "Supplemental Arrows-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Supplemental_Arrows-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 10240,
        "rangeMax": 10495,
        "name": "Braille Patterns",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Braille_Patterns"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 10496,
        "rangeMax": 10623,
        "name": "Supplemental Arrows-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Supplemental_Arrows-B"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 10624,
        "rangeMax": 10751,
        "name": "Miscellaneous Mathematical Symbols-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Miscellaneous_Mathematical_Symbols-B"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 10752,
        "rangeMax": 11007,
        "name": "Supplemental Mathematical Operators",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Supplemental_Mathematical_Operators"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11008,
        "rangeMax": 11263,
        "name": "Miscellaneous Symbols and Arrows",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Miscellaneous_Symbols_and_Arrows"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11264,
        "rangeMax": 11359,
        "name": "Glagolitic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Glagolitic_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11360,
        "rangeMax": 11391,
        "name": "Latin Extended-C",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Latin_Extended-C"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11392,
        "rangeMax": 11519,
        "name": "Coptic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Coptic_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11520,
        "rangeMax": 11567,
        "name": "Georgian Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Georgian_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11568,
        "rangeMax": 11647,
        "name": "Tifinagh",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tifinagh_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11648,
        "rangeMax": 11743,
        "name": "Ethiopic Extended",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ethiopic_Extended"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11744,
        "rangeMax": 11775,
        "name": "Cyrillic Extended-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cyrillic_Extended-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11776,
        "rangeMax": 11903,
        "name": "Supplemental Punctuation",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Supplemental_Punctuation"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 11904,
        "rangeMax": 12031,
        "name": "CJK Radicals Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Radicals_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12032,
        "rangeMax": 12255,
        "name": "Kangxi Radicals",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Kangxi_radical#Unicode"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12272,
        "rangeMax": 12287,
        "name": "Ideographic Description Characters",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ideographic_Description_Characters_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12288,
        "rangeMax": 12351,
        "name": "CJK Symbols and Punctuation",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Symbols_and_Punctuation"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12352,
        "rangeMax": 12447,
        "name": "Hiragana",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hiragana_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12448,
        "rangeMax": 12543,
        "name": "Katakana",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Katakana_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12544,
        "rangeMax": 12591,
        "name": "Bopomofo",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Bopomofo_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12592,
        "rangeMax": 12687,
        "name": "Hangul Compatibility Jamo",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hangul_Compatibility_Jamo"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12688,
        "rangeMax": 12703,
        "name": "Kanbun",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Kanbun_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12704,
        "rangeMax": 12735,
        "name": "Bopomofo Extended",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Bopomofo_Extended"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12736,
        "rangeMax": 12783,
        "name": "CJK Strokes",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Strokes_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12784,
        "rangeMax": 12799,
        "name": "Katakana Phonetic Extensions",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Katakana_Phonetic_Extensions"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 12800,
        "rangeMax": 13055,
        "name": "Enclosed CJK Letters and Months",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Enclosed_CJK_Letters_and_Months"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 13056,
        "rangeMax": 13311,
        "name": "CJK Compatibility",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Compatibility"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 13312,
        "rangeMax": 19903,
        "name": "CJK Unified Ideographs Extension A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 19904,
        "rangeMax": 19967,
        "name": "Yijing Hexagram Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Yijing_Hexagram_Symbols"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 19968,
        "rangeMax": 40959,
        "name": "CJK Unified Ideographs",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 40960,
        "rangeMax": 42127,
        "name": "Yi Syllables",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Yi_Syllables"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 42128,
        "rangeMax": 42191,
        "name": "Yi Radicals",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Yi_Radicals"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 42192,
        "rangeMax": 42239,
        "name": "Lisu",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Lisu_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 42240,
        "rangeMax": 42559,
        "name": "Vai",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Vai_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 42560,
        "rangeMax": 42655,
        "name": "Cyrillic Extended-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cyrillic_Extended-B"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 42656,
        "rangeMax": 42751,
        "name": "Bamum",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Bamum_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 42752,
        "rangeMax": 42783,
        "name": "Modifier Tone Letters",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Modifier_Tone_Letters"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 42784,
        "rangeMax": 43007,
        "name": "Latin Extended-D",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Latin_Extended-D"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43008,
        "rangeMax": 43055,
        "name": "Syloti Nagri",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Syloti_Nagri_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43056,
        "rangeMax": 43071,
        "name": "Common Indic Number Forms",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Common_Indic_Number_Forms"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43072,
        "rangeMax": 43135,
        "name": "Phags-pa",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Phags-pa_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43136,
        "rangeMax": 43231,
        "name": "Saurashtra",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Saurashtra_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43232,
        "rangeMax": 43263,
        "name": "Devanagari Extended",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Devanagari_Extended"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43264,
        "rangeMax": 43311,
        "name": "Kayah Li",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Kayah_Li_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43312,
        "rangeMax": 43359,
        "name": "Rejang",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Rejang_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43360,
        "rangeMax": 43391,
        "name": "Hangul Jamo Extended-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hangul_Jamo_Extended-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43392,
        "rangeMax": 43487,
        "name": "Javanese",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Javanese_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43488,
        "rangeMax": 43519,
        "name": "Myanmar Extended-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Myanmar_Extended-B"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43520,
        "rangeMax": 43615,
        "name": "Cham",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cham_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43616,
        "rangeMax": 43647,
        "name": "Myanmar Extended-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Myanmar_Extended-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43648,
        "rangeMax": 43743,
        "name": "Tai Viet",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tai_Viet"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43744,
        "rangeMax": 43775,
        "name": "Meetei Mayek Extensions",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Meetei_Mayek_Extensions"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43776,
        "rangeMax": 43823,
        "name": "Ethiopic Extended-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ethiopic_Extended-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43824,
        "rangeMax": 43887,
        "name": "Latin Extended-E",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Latin_Extended-E"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43888,
        "rangeMax": 43967,
        "name": "Cherokee Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cherokee_Supplement"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 43968,
        "rangeMax": 44031,
        "name": "Meetei Mayek",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Meetei_Mayek_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 44032,
        "rangeMax": 55215,
        "name": "Hangul Syllables",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hangul_Syllables"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 55216,
        "rangeMax": 55295,
        "name": "Hangul Jamo Extended-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hangul_Jamo_Extended-B"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 55296,
        "rangeMax": 56191,
        "name": "High Surrogates",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 56192,
        "rangeMax": 56319,
        "name": "High Private Use Surrogates",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 56320,
        "rangeMax": 57343,
        "name": "Low Surrogates",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 57344,
        "rangeMax": 63743,
        "name": "Private Use Area",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Private_Use_Areas"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 63744,
        "rangeMax": 64255,
        "name": "CJK Compatibility Ideographs",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 64256,
        "rangeMax": 64335,
        "name": "Alphabetic Presentation Forms",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Alphabetic_Presentation_Forms"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 64336,
        "rangeMax": 65023,
        "name": "Arabic Presentation Forms-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Arabic_Presentation_Forms-A"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65024,
        "rangeMax": 65039,
        "name": "Variation Selectors",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65040,
        "rangeMax": 65055,
        "name": "Vertical Forms",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Vertical_Forms"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65056,
        "rangeMax": 65071,
        "name": "Combining Half Marks",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Combining_Half_Marks"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65072,
        "rangeMax": 65103,
        "name": "CJK Compatibility Forms",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Compatibility_Forms"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65104,
        "rangeMax": 65135,
        "name": "Small Form Variants",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Small_Form_Variants"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65136,
        "rangeMax": 65279,
        "name": "Arabic Presentation Forms-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Arabic_Presentation_Forms-B"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65280,
        "rangeMax": 65519,
        "name": "Halfwidth and Fullwidth Forms",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_(Unicode_block)"
    },
    {
        "plane": "Basic Multilingual Plane",
        "rangeMin": 65520,
        "rangeMax": 65535,
        "name": "Specials",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Specials_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 65536,
        "rangeMax": 65663,
        "name": "Linear B Syllabary",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Linear_B_Syllabary"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 65664,
        "rangeMax": 65791,
        "name": "Linear B Ideograms",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Linear_B_Ideograms"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 65792,
        "rangeMax": 65855,
        "name": "Aegean Numbers",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Aegean_Numbers_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 65856,
        "rangeMax": 65935,
        "name": "Ancient Greek Numbers",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ancient_Greek_Numbers"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 65936,
        "rangeMax": 65999,
        "name": "Ancient Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ancient_Symbols"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66000,
        "rangeMax": 66047,
        "name": "Phaistos Disc",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Phaistos_Disc_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66176,
        "rangeMax": 66207,
        "name": "Lycian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Lycian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66208,
        "rangeMax": 66271,
        "name": "Carian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Carian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66272,
        "rangeMax": 66303,
        "name": "Coptic Epact Numbers",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Coptic_Epact_Numbers"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66304,
        "rangeMax": 66351,
        "name": "Old Italic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Old_Italic_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66352,
        "rangeMax": 66383,
        "name": "Gothic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Gothic_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66384,
        "rangeMax": 66431,
        "name": "Old Permic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Old_Permic_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66432,
        "rangeMax": 66463,
        "name": "Ugaritic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ugaritic_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66464,
        "rangeMax": 66527,
        "name": "Old Persian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Old_Persian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66560,
        "rangeMax": 66639,
        "name": "Deseret",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Deseret_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66640,
        "rangeMax": 66687,
        "name": "Shavian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Shavian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66688,
        "rangeMax": 66735,
        "name": "Osmanya",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Osmanya_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66736,
        "rangeMax": 66815,
        "name": "Osage",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Osage_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66816,
        "rangeMax": 66863,
        "name": "Elbasan",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Elbasan_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 66864,
        "rangeMax": 66927,
        "name": "Caucasian Albanian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Caucasian_Albanian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67072,
        "rangeMax": 67455,
        "name": "Linear A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Linear_A_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67584,
        "rangeMax": 67647,
        "name": "Cypriot Syllabary",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cypriot_Syllabary_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67648,
        "rangeMax": 67679,
        "name": "Imperial Aramaic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Imperial_Aramaic_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67680,
        "rangeMax": 67711,
        "name": "Palmyrene",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Palmyrene_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67712,
        "rangeMax": 67759,
        "name": "Nabataean",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Nabataean_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67808,
        "rangeMax": 67839,
        "name": "Hatran",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Hatran_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67840,
        "rangeMax": 67871,
        "name": "Phoenician",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Phoenician_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67872,
        "rangeMax": 67903,
        "name": "Lydian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Lydian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 67968,
        "rangeMax": 67999,
        "name": "Meroitic Hieroglyphs",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Meroitic_Hieroglyphs_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68000,
        "rangeMax": 68095,
        "name": "Meroitic Cursive",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Meroitic_Cursive_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68096,
        "rangeMax": 68191,
        "name": "Kharoshthi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Kharoshthi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68192,
        "rangeMax": 68223,
        "name": "Old South Arabian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Old_South_Arabian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68224,
        "rangeMax": 68255,
        "name": "Old North Arabian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Old_North_Arabian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68288,
        "rangeMax": 68351,
        "name": "Manichaean",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Manichaean_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68352,
        "rangeMax": 68415,
        "name": "Avestan",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Avestan_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68416,
        "rangeMax": 68447,
        "name": "Inscriptional Parthian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Inscriptional_Parthian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68448,
        "rangeMax": 68479,
        "name": "Inscriptional Pahlavi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Inscriptional_Pahlavi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68480,
        "rangeMax": 68527,
        "name": "Psalter Pahlavi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Psalter_Pahlavi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68608,
        "rangeMax": 68687,
        "name": "Old Turkic",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Old_Turkic_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 68736,
        "rangeMax": 68863,
        "name": "Old Hungarian",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Old_Hungarian_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 69216,
        "rangeMax": 69247,
        "name": "Rumi Numeral Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Rumi_Numeral_Symbols"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 69632,
        "rangeMax": 69759,
        "name": "Brahmi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Brahmi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 69760,
        "rangeMax": 69839,
        "name": "Kaithi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Kaithi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 69840,
        "rangeMax": 69887,
        "name": "Sora Sompeng",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Sora_Sompeng_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 69888,
        "rangeMax": 69967,
        "name": "Chakma",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Chakma_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 69968,
        "rangeMax": 70015,
        "name": "Mahajani",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mahajani_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70016,
        "rangeMax": 70111,
        "name": "Sharada",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Sharada_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70112,
        "rangeMax": 70143,
        "name": "Sinhala Archaic Numbers",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Sinhala_Archaic_Numbers"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70144,
        "rangeMax": 70223,
        "name": "Khojki",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Khojki_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70272,
        "rangeMax": 70319,
        "name": "Multani",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Multani_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70320,
        "rangeMax": 70399,
        "name": "Khudawadi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Khudawadi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70400,
        "rangeMax": 70527,
        "name": "Grantha",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Grantha_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70656,
        "rangeMax": 70783,
        "name": "Newa",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Newa_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 70784,
        "rangeMax": 70879,
        "name": "Tirhuta",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tirhuta_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 71040,
        "rangeMax": 71167,
        "name": "Siddham",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Siddham_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 71168,
        "rangeMax": 71263,
        "name": "Modi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Modi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 71264,
        "rangeMax": 71295,
        "name": "Mongolian Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mongolian_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 71296,
        "rangeMax": 71375,
        "name": "Takri",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Takri_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 71424,
        "rangeMax": 71487,
        "name": "Ahom",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ahom_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 71840,
        "rangeMax": 71935,
        "name": "Warang Citi",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Warang_Citi_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 72384,
        "rangeMax": 72447,
        "name": "Pau Cin Hau",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Pau_Cin_Hau_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 72704,
        "rangeMax": 72815,
        "name": "Bhaiksuki",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Bhaiksuki_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 72816,
        "rangeMax": 72895,
        "name": "Marchen",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Marchen_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 73728,
        "rangeMax": 74751,
        "name": "Cuneiform",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cuneiform_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 74752,
        "rangeMax": 74879,
        "name": "Cuneiform Numbers and Punctuation",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Cuneiform_Numbers_and_Punctuation"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 74880,
        "rangeMax": 75087,
        "name": "Early Dynastic Cuneiform",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Early_Dynastic_Cuneiform"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 77824,
        "rangeMax": 78895,
        "name": "Egyptian Hieroglyphs",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Egyptian_Hieroglyphs_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 82944,
        "rangeMax": 83583,
        "name": "Anatolian Hieroglyphs",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Anatolian_Hieroglyphs_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 92160,
        "rangeMax": 92735,
        "name": "Bamum Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Bamum_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 92736,
        "rangeMax": 92783,
        "name": "Mro",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mro_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 92880,
        "rangeMax": 92927,
        "name": "Bassa Vah",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Bassa_Vah_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 92928,
        "rangeMax": 93071,
        "name": "Pahawh Hmong",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Pahawh_Hmong_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 93952,
        "rangeMax": 94111,
        "name": "Miao",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Miao_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 94176,
        "rangeMax": 94207,
        "name": "Ideographic Symbols and Punctuation",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ideographic_Symbols_and_Punctuation"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 94208,
        "rangeMax": 100351,
        "name": "Tangut",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tangut_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 100352,
        "rangeMax": 101119,
        "name": "Tangut Components",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tangut_Components"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 110592,
        "rangeMax": 110847,
        "name": "Kana Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Kana_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 113664,
        "rangeMax": 113823,
        "name": "Duployan",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Duployan_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 113824,
        "rangeMax": 113839,
        "name": "Shorthand Format Controls",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Shorthand_Format_Controls"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 118784,
        "rangeMax": 119039,
        "name": "Byzantine Musical Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Byzantine_Musical_Symbols"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 119040,
        "rangeMax": 119295,
        "name": "Musical Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Musical_Symbols_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 119296,
        "rangeMax": 119375,
        "name": "Ancient Greek Musical Notation",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ancient_Greek_Musical_Notation"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 119552,
        "rangeMax": 119647,
        "name": "Tai Xuan Jing Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Taixuanjing"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 119648,
        "rangeMax": 119679,
        "name": "Counting Rod Numerals",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Counting_Rod_Numerals"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 119808,
        "rangeMax": 120831,
        "name": "Mathematical Alphanumeric Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 120832,
        "rangeMax": 121519,
        "name": "Sutton SignWriting",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Sutton_SignWriting_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 122880,
        "rangeMax": 122927,
        "name": "Glagolitic Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Glagolitic_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 124928,
        "rangeMax": 125151,
        "name": "Mende Kikakui",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mende_Kikakui_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 125184,
        "rangeMax": 125279,
        "name": "Adlam",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Adlam_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 126464,
        "rangeMax": 126719,
        "name": "Arabic Mathematical Alphabetic Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Arabic_Mathematical_Alphabetic_Symbols"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 126976,
        "rangeMax": 127023,
        "name": "Mahjong Tiles",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Mahjong_Tiles_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 127024,
        "rangeMax": 127135,
        "name": "Domino Tiles",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Domino_Tiles"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 127136,
        "rangeMax": 127231,
        "name": "Playing Cards",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Playing_cards_in_Unicode"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 127232,
        "rangeMax": 127487,
        "name": "Enclosed Alphanumeric Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Enclosed_Alphanumeric_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 127488,
        "rangeMax": 127743,
        "name": "Enclosed Ideographic Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Enclosed_Ideographic_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 127744,
        "rangeMax": 128511,
        "name": "Miscellaneous Symbols and Pictographs",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Miscellaneous_Symbols_and_Pictographs"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 128512,
        "rangeMax": 128591,
        "name": "Emoticons",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Emoticons_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 128592,
        "rangeMax": 128639,
        "name": "Ornamental Dingbats",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Ornamental_Dingbats"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 128640,
        "rangeMax": 128767,
        "name": "Transport and Map Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Transport_and_Map_Symbols"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 128768,
        "rangeMax": 128895,
        "name": "Alchemical Symbols",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Alchemical_Symbols_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 128896,
        "rangeMax": 129023,
        "name": "Geometric Shapes Extended",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Geometric_Shapes_Extended"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 129024,
        "rangeMax": 129279,
        "name": "Supplemental Arrows-C",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Supplemental_Arrows-C"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 129280,
        "rangeMax": 129535,
        "name": "Supplemental Symbols and Pictographs",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Supplemental_Symbols_and_Pictographs"
    },
    {
        "plane": "Supplementary Ideographic Plane",
        "rangeMin": 131072,
        "rangeMax": 173791,
        "name": "CJK Unified Ideographs Extension B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_B"
    },
    {
        "plane": "Supplementary Ideographic Plane",
        "rangeMin": 173824,
        "rangeMax": 177983,
        "name": "CJK Unified Ideographs Extension C",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_C"
    },
    {
        "plane": "Supplementary Ideographic Plane",
        "rangeMin": 177984,
        "rangeMax": 178207,
        "name": "CJK Unified Ideographs Extension D",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_D"
    },
    {
        "plane": "Supplementary Ideographic Plane",
        "rangeMin": 178208,
        "rangeMax": 183983,
        "name": "CJK Unified Ideographs Extension E",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Unified_Ideographs_Extension_E"
    },
    {
        "plane": "Supplementary Ideographic Plane",
        "rangeMin": 194560,
        "rangeMax": 195103,
        "name": "CJK Compatibility Ideographs Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/CJK_Compatibility_Ideographs_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 917504,
        "rangeMax": 917631,
        "name": "Tags",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Tags_(Unicode_block)"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 917760,
        "rangeMax": 917999,
        "name": "Variation Selectors Supplement",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Variation_Selectors_Supplement"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 983040,
        "rangeMax": 1048575,
        "name": "Supplementary Private Use Area-A",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Private_Use_Areas"
    },
    {
        "plane": "Supplementary Multilingual Plane",
        "rangeMin": 1048576,
        "rangeMax": 1114111,
        "name": "Supplementary Private Use Area-B",
        "wikipediaLink": "https://en.wikipedia.org/wiki/Private_Use_Areas"
    }
];

function getUnicodeBlock (charCode) {
    var block = null;

    for (var i = 0; i < unicodeBlocks.length && block === null; i++) {
        if (charCode >= unicodeBlocks[i].rangeMin && charCode <= unicodeBlocks[i].rangeMax) {
            block = unicodeBlocks[i];
        }
    }

    return block;
}

function unicodeToUtf8 (charCode) {
    if (charCode <= 0x7F) {
        return charCode;
    } else if (charCode <= 0x07FF) {
        return (0b11000000 | charCode >> 6) * 0x0100 + (0b10000000 | (charCode & 0b00111111));
    } else if (charCode <= 0xFFFF) {
        return (0b11100000 | charCode >> 12) * 0x010000 + (0b10000000 | (charCode >> 6 & 0b00111111)) * 0x0100 + (0b10000000 | (charCode & 0b00111111));
    } else {
        return (0b11110000 | charCode >> 18) * 0x01000000 + (0b10000000 | (charCode >> 12 & 0b00111111)) * 0x010000 + (0b10000000 | (charCode >> 6 & 0b00111111)) * 0x0100 + (0b10000000 | (charCode & 0b00111111));
    }
}

function update () {
    var string = input.value,
        charCode = input.value.charCodeAt(0),
        utf8code = unicodeToUtf8(charCode),
        unicodeBlock = getUnicodeBlock(charCode);

    unicode.innerText = unicode.textContent = charCode;
    plane.innerText = plane.textContent = unicodeBlock ? unicodeBlock.plane : '-';
    block.innerText = block.textContent = unicodeBlock ? unicodeBlock.name : '-';
    blockwikilink.href = unicodeBlock ? unicodeBlock.wikipediaLink : '#';
    blockwikilink.style = unicodeBlock ? '' : 'display:none;';
    fileformatlink.href = 'http://www.fileformat.info/info/unicode/char/'+('0000' + charCode.toString(16)).substr(-4)+'/index.htm';

    var utf8hexContent = '',
        utf8binContent = '';

    for (var i = 3; i >= 0; i--) {
        var byteVal = (utf8code >> (i * 8)) & 0xFF;

        if (byteVal > 0) {
            utf8hexContent += ('00' + byteVal.toString(16)).substr(-2);
            utf8binContent += ' ' + ('00000000' + byteVal.toString(2)).substr(-8);
        }
    }

    utf8hex.innerText = utf8hex.textContent = '0x' + utf8hexContent.toUpperCase();
    utf8bin.innerText = utf8bin.textContent = utf8binContent.toUpperCase();


    utf16hex.innerText = utf16hex.textContent = '0x' + ('0000' + charCode.toString(16)).substr(-4).toUpperCase();
    utf16bin.innerText = utf16bin.textContent = (('00000000' + ((charCode >> 8) & 0xFF).toString(2)).substr(-8) + ' ' + ('00000000' + (charCode & 0xFF).toString(2)).substr(-8)).toUpperCase();
    htmldec.innerText = htmldec.textContent = '&#' + charCode + ';';
    htmlhex.innerText = htmlhex.textContent = '&#x' + charCode.toString(16) + ';';


    jsescape.innerText = jsescape.textContent = '\\u' + ('0000' + charCode.toString(16)).substr(-4).toUpperCase();
    cssescape.innerText = cssescape.textContent = '\\' + ('000000' + charCode.toString(16)).substr(-6).toUpperCase();
    lowercase.innerText = lowercase.textContent = string.toLowerCase();
    uppercase.innerText = uppercase.textContent = string.toUpperCase();
}

input.addEventListener('focus', function () {
    inputValue.parentNode.classList.add('focused');
});

input.addEventListener('blur', function () {
    inputValue.parentNode.classList.remove('focused');
});

input.addEventListener('keyup', function () {
    if (input.value.length > 0) {
        input.value = input.value.substr(input.value.length - 1, 1);
        inputValue.innerText = inputValue.textContent = input.value;
        update();
    } else {
        input.value = inputValue.innerText;
    }
});

update();
