import type { RuntimeLayout } from '../types';

// Physical key code → DOM element id
export const CODE_TO_ID: Record<string, string> = {
  Backquote:'tilda', Digit1:'1', Digit2:'2', Digit3:'3', Digit4:'4',
  Digit5:'5', Digit6:'6', Digit7:'7', Digit8:'8', Digit9:'9',
  Digit0:'0', Minus:'minus', Equal:'plus',
  KeyQ:'Q', KeyW:'W', KeyE:'E', KeyR:'R', KeyT:'T',
  KeyY:'Y', KeyU:'U', KeyI:'I', KeyO:'O', KeyP:'P',
  BracketLeft:'lsc', BracketRight:'rsc', Backslash:'bckslash',
  KeyA:'A', KeyS:'S', KeyD:'D', KeyF:'F', KeyG:'G',
  KeyH:'H', KeyJ:'J', KeyK:'K', KeyL:'L',
  Semicolon:'ddot', Quote:'apo',
  KeyZ:'Z', KeyX:'X', KeyC:'C', KeyV:'V', KeyB:'B',
  KeyN:'N', KeyM:'M', Comma:'comma', Period:'dot', Slash:'slash',
  Space:'space',
};

// Ukrainian ЙЦУКЕН fallback layout: code → [lo, hi]
export const FALLBACK_LAYOUT: RuntimeLayout = {
  Backquote:["'","ʼ"], Digit1:["1","!"],  Digit2:["2",'"'], Digit3:["3","№"],
  Digit4:["4",";"],    Digit5:["5","%"],  Digit6:["6",":"], Digit7:["7","?"],
  Digit8:["8","*"],    Digit9:["9","("],  Digit0:["0",")"], Minus:["-","_"],
  Equal:["=","+"],
  KeyQ:["й","Й"], KeyW:["ц","Ц"], KeyE:["у","У"], KeyR:["к","К"],
  KeyT:["е","Е"], KeyY:["н","Н"], KeyU:["г","Г"], KeyI:["ш","Ш"],
  KeyO:["щ","Щ"], KeyP:["з","З"], BracketLeft:["х","Х"], BracketRight:["ї","Ї"],
  Backslash:["ґ","Ґ"],
  KeyA:["ф","Ф"], KeyS:["і","І"], KeyD:["в","В"], KeyF:["а","А"],
  KeyG:["п","П"], KeyH:["р","Р"], KeyJ:["о","О"], KeyK:["л","Л"],
  KeyL:["д","Д"], Semicolon:["ж","Ж"], Quote:["є","Є"],
  KeyZ:["я","Я"], KeyX:["ч","Ч"], KeyC:["с","С"], KeyV:["м","М"],
  KeyB:["и","И"], KeyN:["т","Т"], KeyM:["ь","Ь"],
  Comma:["б","Б"], Period:["ю","Ю"], Slash:[".","?"],
  Space:[" "," "],
};

// QWERTY lowercase char → Ukrainian [lo, hi]
// Used to remap KeyboardLayoutMap API results (which always return QWERTY) to Ukrainian
export const QWERTY_TO_UA: Record<string, [string, string]> = {
  "'":["є","Є"], '1':["1","!"],  '2':["2",'"'], '3':["3","№"],
  '4':["4",";"], '5':["5","%"],  '6':["6",":"], '7':["7","?"],
  '8':["8","*"], '9':["9","("],  '0':["0",")"], '-':["-","_"], '=':["=","+"],
  'q':["й","Й"], 'w':["ц","Ц"], 'e':["у","У"], 'r':["к","К"],
  't':["е","Е"], 'y':["н","Н"], 'u':["г","Г"], 'i':["ш","Ш"],
  'o':["щ","Щ"], 'p':["з","З"], '[':["х","Х"], ']':["ї","Ї"], '\\':["ґ","Ґ"],
  'a':["ф","Ф"], 's':["і","І"], 'd':["в","В"], 'f':["а","А"],
  'g':["п","П"], 'h':["р","Р"], 'j':["о","О"], 'k':["л","Л"],
  'l':["д","Д"], ';':["ж","Ж"],
  'z':["я","Я"], 'x':["ч","Ч"], 'c':["с","С"], 'v':["м","М"],
  'b':["и","И"], 'n':["т","Т"], 'm':["ь","Ь"],
  ',':["б","Б"], '.':["ю","Ю"], '/':[".",","],
};

// Finger assignment per physical key code
export type Finger = 'pinky' | 'ring' | 'middle' | 'index' | 'thumb';

export const FINGER_MAP: Record<string, Finger> = {
  Backquote:'pinky', Digit1:'pinky', KeyQ:'pinky', KeyA:'pinky', KeyZ:'pinky',
  Digit2:'ring',  KeyW:'ring',   KeyS:'ring',   KeyX:'ring',
  Digit3:'middle',KeyE:'middle', KeyD:'middle', KeyC:'middle',
  Digit4:'index', Digit5:'index',
  KeyR:'index',   KeyT:'index',  KeyF:'index',  KeyG:'index',
  KeyV:'index',   KeyB:'index',
  Digit6:'index', Digit7:'index',
  KeyY:'index',   KeyU:'index',  KeyH:'index',  KeyJ:'index',
  KeyN:'index',   KeyM:'index',
  Digit8:'middle',KeyI:'middle', KeyK:'middle', Comma:'middle',
  Digit9:'ring',  KeyO:'ring',   KeyL:'ring',   Period:'ring',
  Digit0:'pinky', Minus:'pinky', Equal:'pinky',
  KeyP:'pinky', BracketLeft:'pinky', BracketRight:'pinky', Backslash:'pinky',
  Semicolon:'pinky', Quote:'pinky', Slash:'pinky',
  Space:'thumb',
};

// Home-row keys that get the bump dot
export const HOME_KEY_CODES = new Set(['KeyA', 'KeyJ']);

// Calibration: all typeable codes (no Space — handled separately)
export const CALIB_CODES = Object.keys(CODE_TO_ID).filter(c => c !== 'Space');

// Keyboard row definitions: [code, widthClass?]
export type KeyDef = { code: string; id: string; label?: string; wide?: string };

export const KB_ROW_DEFS: KeyDef[][] = [
  [
    {code:'',       id:'tilda',     label:'~'},
    {code:'Digit1', id:'1'},   {code:'Digit2',id:'2'},   {code:'Digit3',id:'3'},
    {code:'Digit4', id:'4'},   {code:'Digit5',id:'5'},   {code:'Digit6',id:'6'},
    {code:'Digit7', id:'7'},   {code:'Digit8',id:'8'},   {code:'Digit9',id:'9'},
    {code:'Digit0', id:'0'},   {code:'Minus', id:'minus',label:'-'},
    {code:'Equal',  id:'plus', label:'+'},
    {code:'',       id:'backspace', label:'⌫', wide:'wide-2'},
  ],
  [
    {code:'',           id:'tab',      label:'Tab', wide:'wide-1'},
    {code:'KeyQ',id:'Q'},{code:'KeyW',id:'W'},{code:'KeyE',id:'E'},{code:'KeyR',id:'R'},
    {code:'KeyT',id:'T'},{code:'KeyY',id:'Y'},{code:'KeyU',id:'U'},{code:'KeyI',id:'I'},
    {code:'KeyO',id:'O'},{code:'KeyP',id:'P'},
    {code:'BracketLeft', id:'lsc',    label:'['},
    {code:'BracketRight',id:'rsc',    label:']'},
    {code:'Backslash',   id:'bckslash',label:'\\', wide:'wide-1'},
  ],
  [
    {code:'',          id:'capslock', label:'Caps', wide:'wide-2'},
    {code:'KeyA',id:'A'},{code:'KeyS',id:'S'},{code:'KeyD',id:'D'},{code:'KeyF',id:'F'},
    {code:'KeyG',id:'G'},{code:'KeyH',id:'H'},{code:'KeyJ',id:'J'},{code:'KeyK',id:'K'},
    {code:'KeyL',id:'L'},
    {code:'Semicolon', id:'ddot', label:':'},
    {code:'Quote',     id:'apo',  label:"'"},
    {code:'',          id:'enter',label:'↵', wide:'wide-2'},
  ],
  [
    {code:'ShiftLeft',  id:'shiftleft',  label:'⇧', wide:'wide-3'},
    {code:'KeyZ',id:'Z'},{code:'KeyX',id:'X'},{code:'KeyC',id:'C'},{code:'KeyV',id:'V'},
    {code:'KeyB',id:'B'},{code:'KeyN',id:'N'},{code:'KeyM',id:'M'},
    {code:'Comma',  id:'comma', label:','},
    {code:'Period', id:'dot',   label:'.'},
    {code:'Slash',  id:'slash', label:'/'},
    {code:'ShiftRight', id:'shiftright', label:'⇧', wide:'wide-2'},
  ],
  [
    {code:'',id:'controlleft', label:'Ctrl', wide:'wide-1'},
    {code:'',id:'metaleft',    label:'⌘'},
    {code:'',id:'altleft',     label:'Alt'},
    {code:'Space',id:'space',  label:'',    wide:'wide-5'},
    {code:'',id:'altright',    label:'AltGr'},
    {code:'',id:'metaright',   label:'⌘'},
    {code:'',id:'menu',        label:'≣'},
    {code:'',id:'controlright',label:'Ctrl', wide:'wide-1'},
  ],
];
