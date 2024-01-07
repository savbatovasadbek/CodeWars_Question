// Regex in Javascript
// --------- Sintaksis -------------->
//  -->``/pattern/modifier(s)``
// --------- Modifiers -------------->
// /g - umumiy qidirish;
// /i - katta-kichik harflarni ajratmaslik;
// /m - ko'p qatorli moslashtirishni amalga oshirish
// --------- Brackets -------------->
// [abc] - a,b,c harflarini izlash.
// [^abc] - a,b,c bo'lmaganlarini izlash.
// [0-9] - 0 dan 9 gacha oraliqdagi raqamlarni topadi.
// [^0-9] - 0 dan 9 gacha oraliqdagi bo'lmaganlarni topadi.
// [x|y] - x va y larni topadi.
// ---------- Metacharacters ------------->
// . - barcha belgilarni aniqlash.
// \w - So'zdagi harflarni topadi.
// \w - So'zdagi harf bo'lmaganlarni topadi.
// \d - raqamlarni aniqlaydi.
// \D - raqam bo'lmaganlarni aniqlaydi.
// \s - bo'sh probellarni aniqlaydi.
// \S - bo'sh probel bo'lmaganlarni aniqlaydi.
// \b - berilgan so'z boshidan yoki oxiridan izlash: beginning like this: \bHI, end like this: HI\b
// \B - berilgan so'z boshidan yoki oxirida bo'lmagalarini izlash: beginning like this: \BHI, end like this: HI\B
// \0 - NULL belgisini topish(\0)
// \n - yangi satrga o'tish belgisini (\n) topish
// \f - shakl tasma belgisini toping (\f)
// \r - Karetaning qaytish belgisini toping (\r)
// \t - tab belgisini topish (\t)
// \v - vertical belgisini topish (\v)
// \xxx - satrdagi 8 lik soniga mos belgini izlash (127 => W)
// \xdd - satrdagi 16 lik belgini topish (\x57 => W)
// \udddd- dddd o'n oltilik soni bilan belgilangan Unicode belgisini toping (/\u0057/g => W)
// ---------- Quantifiers ------------->

let text = "I'm A student.\t I was born in 2001. I like this one null`:)`\n";
let pattern = /[a-z]/gi;
let result = text.match(pattern);
console.log(result);
