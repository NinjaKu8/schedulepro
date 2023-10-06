
// Arrays of common language used in header information
const dawn =        ['DAWN', 'SUNRISE', 'DAYBREAK']
const morning =     ['MORNING', 'MORN', 'AM', 'A.M.']
const day =         ['DAY', 'DAYLIGHT', 'DAY-LIGHT', 'DAY LIGHT', 'LIGHT', 'NOON']
const afternoon =   ['AFTERNOON', 'AFTER NOON', 'AFTER-NOON', 'PM', 'P.M.']
const dusk =        ['DUSK', 'SUNSET']
const magicHour =   ['MAGIC HOUR', 'TWILIGHT']
const evening =     ['EVENING', 'EVE']
const night =       ['NIGHT', 'NITE', 'MIDNIGHT', 'DARK', 'WEE HOURS', 'LIGHTS OUT', 'LIGHTS-OUT', 'LIGHTSOUT', 'BLACKNESS', 'DARKNESS', 'NOTHINGNESS', 'NOTHING', 'NO LIGHT']
const space =       ['SPACE']
const continuous =  ['CONTINUOUS', 'CONTINUED', 'CONTINUE', 'CONT', "CONT'D", 'LATER', 'TIME PASSES', 'SAME', 'SIMULTANEOUS', 'SIMULTANEOUSLY', 'INTERCUT', 'INTER CUT', 'INTER-CUT', 'CROSSCUT', 'CROSS CUT', 'CROSS-CUT']

// RegEx for parsing header information
const ieRE = /^((?:(?!(\.)|(-)).)*)/g
const dnRE = new RegExp(
  '([\\.\\-]+\\s(.*))+(' + 
  dawn.join('|') + '|' +
  morning.join('|') + '|' +
  day.join('|') + '|' +
  afternoon.join('|') + '|' +
  dusk.join('|') + '|' +
  magicHour.join('|') + '|' +
  evening.join('|') + '|' +
  night.join('|') + '|' +
  space.join('|') + '|' +
  continuous.join('|') + 
  ')'
)
const trailingCharacters = /[\s\-–]+$/g
// const noisyWordsRE = /\b(?:BACK|BEFORE|CRACK|EARLY|FEW|FIRST|LAST|LATE|LITTLE|MID|MIDDLE|MINUTE|MINUTES|NEXT|PREVIOUS|PREVIOUSLY|TIME|WHILE|A|AN|AT|IN|OF|SOME|THE)\b/ig

export function parseScriptHeading(text: string): { ie: string|null, dn: string|null, set: string|null } {
    const str: string = text.toUpperCase()
    const setDn: RegExpMatchArray|null = str.match(dnRE)
    let ie: string|null = getMatchString(str.match(ieRE),0) 
    let dn: string|null = translateDN(getMatchString(setDn,3))
    let set: string|null = removeTrailingCharacters(getMatchString(setDn,2))
    if(ie?.length && set===null) { // protect against headings with no ie (ex: "OPENING SHOT", "TITLE CARD", etc)
      set = ie
      ie = null
    }
    return { ie, dn, set }
}

// HELPER FUNCTIONS
  
function getMatchString(match: RegExpMatchArray|null, position: number): string|null {
  return match?.length && match[position] ? match[position] : null
}

function removeTrailingCharacters(string: string|null): string|null {
  return string?.length ? string.replace(trailingCharacters,'') : null
}

function translateDN(string: string|null): string|null { // translate common dn pseudonyms to standard dn type
  if(!string) return null
  if(dawn.includes(string)) return dawn[0]
  if(morning.includes(string)) return morning[0]
  if(day.includes(string)) return day[0]
  if(afternoon.includes(string)) return afternoon[0]
  if(dusk.includes(string)) return dusk[0]
  if(magicHour.includes(string)) return magicHour[0]
  if(evening.includes(string)) return evening[0]
  if(night.includes(string)) return night[0]
  if(space.includes(string)) return space[0]
  if(continuous.includes(string)) return continuous[0]
  return string
}