
export const acolors = {
    aer: 16777086,
    terra: 5685248,
    ignis: 16734721,
    aqua: 3986684,
    ordo: 14013676,
    perditio: 4210752,
    vacuos: 8947848,
    lux: 16774755,
    tempestas: 16777215,
    motus: 13487348,
    gelum: 14811135,
    vitreus: 8454143,
    victus: 14548997,
    venenum: 9039872,
    potentia: 12648447,
    permutatio: 5735255,
    metallum: 11908557,
    mortuus: 8943496,
    volatus: 15198167,
    tenebrae: 2236962,
    spiritus: 15461371,
    sano: 16723764,
    iter: 14702683,
    alienis: 8409216,
    praecantatio: 9896128,
    auram: 16761087,
    vitium: 8388736,
    limus: 129024,
    herba: 109568,
    arbor: 8873265,
    bestia: 10445833,
    corpus: 15615885,
    exanimis: 3817472,
    cognitio: 16761523,
    sensus: 1038847,
    humanus: 16766912,
    messis: 14791537,
    perfodio: 14471896,
    instrumentum: 4210926,
    meto: 15641986,
    telum: 12603472,
    tutamen: 49344,
    fames: 10093317,
    lucrum: 15121988,
    fabrico: 8428928,
    pannus: 15395522,
    machina: 8421536,
    vinculum: 10125440,
} as const


export const aspectsObj = {
    aer: null,
    aqua: null,
    ignis: null,
    terra: null,
    ordo: null,
    perditio: null,

    alienis: ['vacuos', 'tenebrae'],
    arbor: ['aer', 'herba'],
    auram: ['praecantatio', 'aer'],
    bestia: ['motus', 'victus'],
    cognitio: ['ignis', 'spiritus'],
    corpus: ['mortuus', 'bestia'],
    electrum: ['potentia', 'machina'],
    fabrico: ['humanus', 'instrumentum'],
    fames: ['victus', 'vacuos'],
    gelum: ['ignis', 'perditio'],
    gula: ['fames', 'vacuos'],
    herba: ['victus', 'terra'],
    humanus: ['bestia', 'cognitio'],
    infernus: ['ignis', 'praecantatio'],
    instrumentum: ['humanus', 'ordo'],
    iter: ['motus', 'terra'],
    limus: ['victus', 'aqua'],
    lucrum: ['humanus', 'fames'],
    lux: ['aer', 'ignis'],
    luxuria: ['corpus', 'fames'],
    machina: ['motus', 'instrumentum'],
    magneto: ['metallum', 'iter'],
    messis: ['herba', 'humanus'],
    metallum: ['terra', 'vitreus'],
    meto: ['messis', 'instrumentum'],
    mortuus: ['victus', 'perditio'],
    motus: ['aer', 'ordo'],
    pannus: ['instrumentum', 'bestia'],
    perfodio: ['humanus', 'terra'],
    permutatio: ['perditio', 'ordo'],
    potentia: ['ordo', 'ignis'],
    praecantatio: ['vacuos', 'potentia'],
    radio: ['lux', 'potentia'],
    sano: ['victus', 'ordo'],
    sensus: ['aer', 'spiritus'],
    spiritus: ['victus', 'mortuus'],
    superbia: ['volatus', 'vacuos'],
    telum: ['instrumentum', 'ignis'],
    tempus: ['vacuos', 'ordo'],
    tenebrae: ['vacuos', 'lux'],
    tutamen: ['instrumentum', 'terra'],
    vacuos: ['aer', 'perditio'],
    venenum: ['aqua', 'perditio'],
    victus: ['aqua', 'terra'],
    vinculum: ['motus', 'perditio'],
    vitium: ['praecantatio', 'perditio'],
    vitreus: ['terra', 'ordo'],
    volatus: ['aer', 'motus'],
} as const
const _typecheck = aspectsObj as { [k in keyof typeof aspectsObj]: null | readonly [keyof typeof aspectsObj, keyof typeof aspectsObj] }


export const aspects = Object.keys(aspectsObj)
    .sort()
    .map(aspect => [aspect, aspectsObj[aspect as keyof typeof aspectsObj]]) as readonly [keyof typeof aspectsObj, null | readonly [keyof typeof aspectsObj, keyof typeof aspectsObj]][]