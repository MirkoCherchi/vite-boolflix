import { reactive } from "vue";
import config from "./config";

export const store = reactive({
  searchKey: "",
  searchResultFilm: [],
  searchResultTv: [],
  config,
  language: "it-IT",
  languageMap: {
    aa: "dj",
    af: "za",
    ak: "gh",
    ar: "arab",
    sq: "al",
    am: "et",
    hy: "am",
    az: "az",
    bm: "ml",
    be: "by",
    bn: "bd",
    bi: "vu",
    bs: "ba",
    bg: "bg",
    my: "mm",
    ca: "ad",
    zh: "cn",
    hr: "hr",
    cs: "cz",
    da: "dk",
    dv: "mv",
    nl: "nl",
    dz: "bt",
    en: "gb",
    et: "ee",
    fj: "fj",
    fil: "ph",
    fi: "fi",
    fr: "fr",
    gaa: "gh",
    ka: "ge",
    de: "de",
    el: "gr",
    gu: "in",
    ht: "ht",
    he: "il",
    hi: "in",
    ho: "pg",
    hu: "hu",
    is: "is",
    ig: "ng",
    id: "id",
    ga: "ie",
    it: "it",
    ja: "jp",
    kr: "ne",
    kk: "kz",
    km: "kh",
    kmb: "ao",
    rw: "rw",
    kg: "cg",
    ko: "kr",
    kj: "ao",
    ku: "iq",
    ky: "kg",
    lo: "la",
    la: "va",
    lv: "lv",
    ln: "cg",
    lt: "lt",
    lu: "cd",
    lb: "lu",
    mk: "mk",
    mg: "mg",
    ms: "my",
    mt: "mt",
    mi: "nz",
    mh: "mh",
    mn: "mn",
    mos: "bf",
    ne: "np",
    nd: "zw",
    nso: "za",
    no: "no",
    nb: "no",
    nn: "no",
    ny: "mw",
    pap: "aw",
    ps: "af",
    fa: "ir",
    pl: "pl",
    pt: "pt",
    pa: "in",
    qu: "wh",
    ro: "ro",
    rm: "ch",
    rn: "bi",
    ru: "ru",
    sg: "cf",
    sr: "rs",
    srr: "sn",
    sn: "zw",
    si: "lk",
    sk: "sk",
    sl: "si",
    so: "so",
    snk: "sn",
    nr: "za",
    st: "ls",
    sw: "tz",
    es: "es",
    ss: "sz",
    sv: "se",
    tl: "ph",
    tg: "tj",
    ta: "lk",
    te: "in",
    tet: "tl",
    th: "th",
    ti: "er",
    tpi: "pg",
    ts: "za",
    tn: "bw",
    tr: "tr",
    tk: "tm",
    uk: "ua",
    umb: "ao",
    ur: "pk",
    uz: "uz",
    ve: "za",
    vi: "vn",
    cy: "gb",
    wo: "sn",
    xh: "za",
    zu: "za",
  },
});
