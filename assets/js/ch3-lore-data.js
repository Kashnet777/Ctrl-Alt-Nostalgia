/* ═══════════════════════════════════════════
   III·b — FULL CONVERSATION ARCHIVE (data + renderer)
   Lives inside Chapter III · Message Fragments.
   Raw excerpts, inserted verbatim. Do not
   "clean up" spelling/grammar/emoji in here —
   that's the whole point of this section.
═══════════════════════════════════════════ */

const LORE_DATA = [
  {
    emoji: '🌙',
    title: 'Late Night Convos',
    convos: [
      {
        title: 'Late Night Convo #1',
        date: '13 Jul 2025 • 2:33 AM',
        messages: [
          { who: 'YOU', text: "Okay\nSpartan riz will always be ready to talk" },
          { who: 'YOU', text: "But I have a question" },
          { who: 'THEM', text: "Sure" },
          { who: 'YOU', text: "Ohh sorry" },
          { who: 'THEM', text: "Shoot" },
          { who: 'THEM', text: "For?" },
          { who: 'YOU', text: "Maine aadya ko bataya tha\nMai actually apne ek cousin ke birthday party me tha" },
          { who: 'YOU', text: ".." },
          { who: 'THEM', text: "Me not aadya" },
          { who: 'YOU', text: "Jab what's app abb hai tera personal then Instagram pe kya zarurat??" },
          { who: 'THEM', text: "But ok" },
          { who: 'YOU', text: "Yeah I figured" },
          { who: 'THEM', text: "Sherlock" },
          { who: 'THEM', text: "Idk" },
          { who: 'THEM', text: "Some ppl prefer other apps" },
          { who: 'THEM', text: "🤷🏻‍♀️" },
          { who: 'THEM', text: "So Wp for baatein\nIg for reels" }
        ]
      },
      {
        title: 'Late Night Convo #2',
        date: '13 Jul 2025 • 2:37 AM',
        messages: [
          { who: 'YOU', text: "That tool is for OSINT\nBasically information gathering me use hota hai" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'YOU', text: "But it isn't that effective" },
          { who: 'THEM', text: "What are these💀" },
          { who: 'YOU', text: "Kya hua??" },
          { who: 'YOU', text: "Emoji ka bada bhai\nEmoja" },
          { who: 'THEM', text: "Kon bnata hai ye sab chize" },
          { who: 'YOU', text: "Velle log" },
          { who: 'THEM', text: "(⁠✷⁠‿⁠✷⁠)" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'YOU', text: "Don't say you made it" },
          { who: 'THEM', text: "😂😂😂" },
          { who: 'YOU', text: "Yup\nYou can gift your phone to me\nAs it is all moh maaya😂😂" }
        ]
      },
      {
        title: 'Late Night Convo #3',
        date: '20 Jul 2025 • 1:00 AM',
        messages: [
          { who: 'THEM', text: "hmmm" },
          { who: 'THEM', text: "ohhoo\nthanks shubh!" },
          { who: 'THEM', text: "you are sooooo noble" },
          { who: 'YOU', text: "i know right" },
          { who: 'YOU', text: "Mujhe pata hai yaar" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'THEM', text: "Mr. cillian says no" },
          { who: 'YOU', text: "mai tom cruise ya fir shakshaat Oppenheimer mahoday ko fek ke marunga!!!!" },
          { who: 'THEM', text: "hawwwww" },
          { who: 'YOU', text: "<Media omitted>" },
          { who: 'THEM', text: "sharamless" },
          { who: 'YOU', text: "woh tu hai" },
          { who: 'THEM', text: "oh right" },
          { who: 'THEM', text: "*bina sharam ka prani!" },
          { who: 'THEM', text: "dude college ka pta nhi, hum dono ko pehle psychologist ke paas jana chahiye" },
          { who: 'YOU', text: "mai ye baat tujhe literally pichhle 1.25 years se kehe raha hoon" }
        ]
      },
      {
        title: 'Late Night Convo #4',
        date: '26 Jul 2025 • 1:00 AM',
        messages: [
          { who: 'THEM', text: "you go do whatever you do" },
          { who: 'THEM', text: "byr" },
          { who: 'YOU', text: "<Media omitted>" },
          { who: 'YOU', text: "<Media omitted>" },
          { who: 'YOU', text: "<Media omitted>" },
          { who: 'YOU', text: "Okh" },
          { who: 'YOU', text: "Byr" },
          { who: 'THEM', text: "gajab insaan ho tum" },
          { who: 'THEM', text: "log insaano ki fotu ko ghoorte hai" },
          { who: 'THEM', text: "tum calc ko" },
          { who: 'YOU', text: "Koi shak" },
          { who: 'THEM', text: "(bengali accent)" },
          { who: 'YOU', text: "Price dekh" },
          { who: 'THEM', text: "nohi" },
          { who: 'YOU', text: "Stuti original id se aao" },
          { who: 'THEM', text: "aaaaaaaaaaand you had to ruin it" },
          { who: 'THEM', text: "katti" },
          { who: 'YOU', text: "Teri patty khatti" },
          { who: 'THEM', text: "tf" },
          { who: 'YOU', text: "Yup" },
          { who: 'THEM', text: "please dont tell me you said this as kid" },
          { who: 'THEM', text: "its somehow cringer than 'pencil-teri shadi cancel'" },
          { who: 'YOU', text: "Nope" },
          { who: 'YOU', text: "Someone used to say this" }
        ]
      }
    ]
  },
  {
    emoji: '😂',
    title: 'Hall of Dumb Ideas',
    convos: [
      {
        title: 'Hall of Dumb Ideas #1',
        date: '10 May 2026 • 1:45 PM',
        messages: [
          { who: 'YOU', text: "Shit" },
          { who: 'YOU', text: "I just got a really bad idea" },
          { who: 'YOU', text: "Maybe a good one\nI don't know" },
          { who: 'THEM', text: "Ikr" },
          { who: 'THEM', text: "But sab kha rahe the\nI had no choice ☹️" },
          { who: 'THEM', text: "Bata" },
          { who: 'YOU', text: "Ohh" },
          { who: 'THEM', text: ".." },
          { who: 'YOU', text: "How about dipping ice cream in Momo. Chutney 😅" },
          { who: 'YOU', text: "I know bohot Ganda idea hai😅" },
          { who: 'YOU', text: "It is good" },
          { who: 'YOU', text: "But still. Mid" },
          { who: 'THEM', text: "EW" },
          { who: 'THEM', text: "JAIL" },
          { who: 'YOU', text: "Like I said a really bad idea" }
        ]
      },
      {
        title: 'Hall of Dumb Ideas #2',
        date: '18 Jun 2026 • 7:06 PM',
        messages: [
          { who: 'YOU', text: "Condo weird ya Plushie weird" },
          { who: 'YOU', text: "Ohh waise" },
          { who: 'THEM', text: "Neither" },
          { who: 'YOU', text: "The yeah" },
          { who: 'YOU', text: "Good" },
          { who: 'THEM', text: "Silly lil fun" },
          { who: 'YOU', text: "Because dono equally khatarnak hai😅" },
          { who: 'THEM', text: "Silly is the word i would say" },
          { who: 'THEM', text: "Ik" },
          { who: 'YOU', text: "Okay then" },
          { who: 'YOU', text: "Ira lemme. Show you her pic" },
          { who: 'THEM', text: "." },
          { who: 'THEM', text: "Who now?" },
          { who: 'YOU', text: "<Media omitted>" },
          { who: 'YOU', text: "Koi nahi that I can handle" },
          { who: 'THEM', text: "Your fling for this yr?" }
        ]
      },
      {
        title: 'Hall of Dumb Ideas #3',
        date: '9 Feb 2026 • 1:37 AM',
        messages: [
          { who: 'THEM', text: "Good idea vaise" },
          { who: 'THEM', text: "(nahi, jyada khush Mt ho)" },
          { who: 'YOU', text: "Aakhir idea kiska hai" },
          { who: 'YOU', text: "Naah woh toh aadya ka kaam. Hai" },
          { who: 'YOU', text: "Meri. Wali" },
          { who: 'THEM', text: "Mera mind rn is at 1" },
          { who: 'THEM', text: "So that makes your idea at 4" },
          { who: 'THEM', text: "Being good category starts at 5" },
          { who: 'THEM', text: "Hehe" },
          { who: 'THEM', text: "Oye hoyeeee" },
          { who: 'THEM', text: "Tu jaan buch ke krta hai na ye" },
          { who: 'YOU', text: "Not meri wali" },
          { who: 'YOU', text: "But meri wali" },
          { who: 'THEM', text: "😂" },
          { who: 'YOU', text: "No😭😭😭" }
        ]
      },
      {
        title: 'Hall of Dumb Ideas #4',
        date: '13 May 2026 • 8:41 AM',
        messages: [
          { who: 'YOU', text: "Abb I'll ask her 😂" },
          { who: 'THEM', text: "Mast" },
          { who: 'THEM', text: "You know what" },
          { who: 'THEM', text: "Nice idea" },
          { who: 'THEM', text: "Ab I'll ragebait you 😂😂" },
          { who: 'YOU', text: "What?" },
          { who: 'YOU', text: "Huh?" },
          { who: 'THEM', text: "The reel bro" },
          { who: 'YOU', text: "Matbal" },
          { who: 'YOU', text: "Usse kya ragebait karegi" },
          { who: 'THEM', text: "I send stuff like that to jha and paridhi" },
          { who: 'YOU', text: "Ohh" }
        ]
      },
      {
        title: 'Hall of Dumb Ideas #5',
        date: '30 Dec 2025 • 9:30 PM',
        messages: [
          { who: 'THEM', text: "Laugh at my dumb joke 🔪" },
          { who: 'THEM', text: ":)" },
          { who: 'YOU', text: "No" },
          { who: 'YOU', text: "Actually it is made for the exact opposite thing" },
          { who: 'YOU', text: "I was actually laughing" },
          { who: 'THEM', text: "Oh good" },
          { who: 'THEM', text: ":)" },
          { who: 'YOU', text: "The name is IntentGuard" },
          { who: 'THEM', text: "interesting" },
          { who: 'YOU', text: "I know bohot bekar Naam hai" },
          { who: 'YOU', text: "Not that kind of Intent" },
          { who: 'THEM', text: "Did Mr. Iron Halo take part in the naming process by any chance?" },
          { who: 'YOU', text: "Umm" },
          { who: 'YOU', text: "Well he suggested some names and I mated both the names" },
          { who: 'THEM', text: "..I didn't even say anything this time" },
          { who: 'YOU', text: ".." },
          { who: 'YOU', text: "." },
          { who: 'THEM', text: "Interesting doesn't give any ideas" },
          { who: 'YOU', text: "It does" },
          { who: 'YOU', text: "And you know it" },
          { who: 'YOU', text: "But maybe here I was overthinking" },
          { who: 'THEM', text: "Shubh, we probably have more words in that damn dust collecting dictionary than 'mated' for this use" },
          { who: 'THEM', text: "Here, yes." }
        ]
      }
    ]
  },
  {
    emoji: '🏷',
    title: 'Nickname Arc',
    convos: [
      {
        title: 'Nickname Arc #1 — Kanya Kumari',
        date: '2 Jul 2026',
        messages: [
          { who: 'YOU', text: "wait who called you that?" },
          { who: 'THEM', text: "Akshit in class started it" },
          { who: 'THEM', text: "And others used to copy" },
          { who: 'YOU', text: "ohh" },
          { who: 'THEM', text: "There was no other kumari" },
          { who: 'THEM', text: "So i was kanya kumari" },
          { who: 'YOU', text: "ohh 😂" },
          { who: 'THEM', text: "And well...i AM a kanya" },
          { who: 'THEM', text: "So i never protested" },
          { who: 'YOU', text: "new nickname noted" },
          { who: 'THEM', text: "More like old one unlocked" }
        ]
      },
      {
        title: 'Nickname Arc #2 — Iron Halo × Feliz',
        date: '8 Jul 2025',
        messages: [
          { who: 'YOU', text: "give this ss to feliz" },
          { who: 'YOU', text: "i gave it to iron halo and it kinda did something" },
          { who: 'YOU', text: "i told iron halo about you and feliz" },
          { who: 'YOU', text: "he didn't change it a bit" },
          { divider: '⋯ 17 Jul 2025 ⋯' },
          { who: 'THEM', text: "lowercasechaosinitalics set your nickname to Friend of Iron Halo." },
          { who: 'THEM', text: "lowercasechaosinitalics set their own nickname to Friend of Feliz." }
        ]
      },
      {
        title: 'Nickname Arc #3 — Goldfish',
        date: null,
        messages: [
          { who: 'THEM', text: "Bola na" },
          { who: 'THEM', text: "My memory is" },
          { who: 'THEM', text: "50- goldfish" },
          { who: 'THEM', text: "50- details to the MAXXX" },
          { who: 'THEM', text: "So" },
          { who: 'THEM', text: "You finalising this ya aur soche?" },
          { who: 'YOU', text: "But 50% goldfish is dominant now a days" },
          { who: 'YOU', text: "Right?" },
          { who: 'YOU', text: "Aur sochte hain😅" },
          { who: 'THEM', text: "Nah" },
          { who: 'THEM', text: "Lately I've been REMEMBERINGGGG" },
          { who: 'YOU', text: "So time before that" },
          { who: 'THEM', text: "Oh okay (why did I think it would be that easy 😮‍💨)" },
          { who: 'YOU', text: "Because your are an idiota my friend" },
          { who: 'THEM', text: "Ask iron halo once 😭" }
        ]
      }
    ]
  },
  {
    emoji: '🌌',
    title: 'Random 2 AM Thoughts',
    convos: [
      {
        title: 'Random 2 AM Thought #1 — Tea Tutorial',
        date: '23 Feb 2026 • 12:05 AM',
        messages: [
          { who: 'THEM', text: "Oye" },
          { who: 'THEM', text: "U want tea?" },
          { who: 'YOU', text: "Hell yeah" },
          { who: 'THEM', text: "Be patient okay" },
          { who: 'THEM', text: "Only react" },
          { who: 'THEM', text: "No reply till end" },
          { who: 'THEM', text: "So" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'THEM', text: "Then" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'THEM', text: "Fir" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'THEM', text: "Finally" },
          { who: 'THEM', text: "<Media omitted>" },
          { who: 'THEM', text: "For ya" },
          { who: 'THEM', text: "🤗" },
          { who: 'YOU', text: "You know mujhe 2nd sticker ke Baad hi samajh Aa gaya tha" },
          { who: 'YOU', text: "Waise you do know you are not supposed to put baking soda in tea" },
          { who: 'YOU', text: "Right?" }
        ]
      },
      {
        title: 'Random 2 AM Thought #2 — Laptop Philosophy',
        date: '4 Jan 2026 • Afternoon (not 2 AM, but definitely random enough)',
        messages: [
          { who: 'THEM', text: "Didn't know my lappy also journaled 🥹✍️" },
          { who: 'THEM', text: "He is asking for attention" },
          { who: 'THEM', text: "I get eet" },
          { who: 'THEM', text: "Yeahh" },
          { who: 'YOU', text: "Well even mine does" },
          { who: 'YOU', text: "As you on now it doesn't have a memory like me" },
          { who: 'YOU', text: "I think you're right and not left" },
          { who: 'THEM', text: "I think too" },
          { who: 'THEM', text: "Yeahh" }
        ]
      },
      {
        title: 'Random 2 AM Thought #3 — Maps & Gol Chakkar',
        date: '19 Jun 2026 • 10:00 PM',
        messages: [
          { who: 'THEM', text: "This is so funny 😆" },
          { who: 'THEM', text: "You dk how happy this made me" },
          { who: 'YOU', text: "Gives more confidence and you prepare yourself in advance ki aage kab kya kya cut honge" },
          { who: 'THEM', text: "I am learninggggg" },
          { who: 'THEM', text: "Also you'll be pleasantly surprised when I tell ya that I am much better at reading maps than I was that day.(The thekua distribution day) hehe" },
          { who: 'YOU', text: "Maybe I do (even I learned that in a similar way)" },
          { who: 'THEM', text: "Thanks broooo" },
          { who: 'YOU', text: "You haven't seen me when I was new to maps*" },
          { who: 'THEM', text: "Idk" },
          { who: 'THEM', text: "U said 3rd exit" },
          { who: 'THEM', text: "So i assumed the 1st and 2nd one" },
          { who: 'THEM', text: "I think the 4th one will be the way back one?" },
          { who: 'YOU', text: "And most of the people I encounter can't make sense out of this" },
          { who: 'YOU', text: "Believe me😭" },
          { who: 'THEM', text: "That's what I've been telling papa 😆" },
          { who: 'THEM', text: "Gol chakkarrr" },
          { who: 'YOU', text: "Don't tell. Me. Even you do😭" },
          { who: 'YOU', text: "It feels soo good to. Say" },
          { who: 'YOU', text: "Gol chakkar😅" }
        ]
      }
    ]
  },
  {
    emoji: '😂',
    title: 'Inside Jokes',
    convos: [
      {
        title: 'Inside Joke #1 — Una vs MS. Goldfish',
        date: '26 Dec 2025',
        messages: [
          { who: 'YOU', text: "Well you must already know that" },
          { who: 'YOU', text: "Like I said" },
          { who: 'THEM', text: ":)" },
          { who: 'YOU', text: "I wasn't sure if this was Una talking or ms goldfish 😅" },
          { who: 'THEM', text: "I am disappointed" },
          { who: 'YOU', text: "Why?" },
          { who: 'THEM', text: "Oh and Una is Una" },
          { who: 'THEM', text: "But Goldfish is MS. goldfish?" },
          { who: 'YOU', text: "Yeah" },
          { who: 'THEM', text: "Matlab if she doesn't know anything then she gets respect" },
          { who: 'THEM', text: "But the unfiltered version doesn't" },
          { who: 'YOU', text: "Tujhe izzat nahi digest hoti hai na" },
          { who: 'THEM', text: "😭😭" },
          { who: 'THEM', text: "And ye mera dialogue hai" },
          { who: 'YOU', text: "You know unfiltered version has so. Much respect that can't be shown" }
        ]
      },
      {
        title: 'Inside Joke #2 — Yo Jesus',
        date: '12 Jul 2025',
        messages: [
          { who: 'THEM', text: "Yo jesus" },
          { who: 'THEM', text: "It's mEEeee" },
          { who: 'THEM', text: "Not mArRriOo" },
          { who: 'YOU', text: "I will tell ya later" },
          { who: 'THEM', text: "My intro to jesus" },
          { who: 'YOU', text: "Do it" },
          { who: 'YOU', text: "I figured" },
          { who: 'YOU', text: "But just remember" },
          { who: 'YOU', text: "I could have reported you to cyber cell" },
          { who: 'THEM', text: "Kr dia Hai" },
          { who: 'THEM', text: "Bro ab to bio me naam likh dia hai maine" },
          { who: 'THEM', text: "And use jesus aur kon bulaega hum logo ke alava?" },
          { who: 'THEM', text: "Also she herself introduced like 'yo am jesus'" },
          { who: 'YOU', text: "She identifies herself as Jesus" },
          { who: 'THEM', text: "Ik" }
        ]
      },
      {
        title: 'Inside Joke #3 — Bambarbola vs Susucucumber',
        date: null,
        messages: [
          { who: 'THEM', text: "Hi" },
          { who: 'THEM', text: "I am nitya" },
          { who: 'YOU', text: "Hi" },
          { who: 'THEM', text: "And you are?" },
          { who: 'YOU', text: "Kashyap" },
          { who: 'THEM', text: "Why are you texting me" },
          { who: 'THEM', text: "MOM THERES A (is that a PERSON!?!?)" },
          { who: 'THEM', text: "AAAAHHHH-" },
          { who: 'THEM', text: "okay I'll stop being dramatic" },
          { who: 'YOU', text: "I donno" },
          { who: 'THEM', text: "Behki behki baatein" },
          { who: 'YOU', text: "Bambarbola" },
          { who: 'THEM', text: "You mean susucucumber?" },
          { who: 'YOU', text: "Damn" },
          { who: 'YOU', text: "I thought I was invisible" },
          { who: 'THEM', text: "*do you mean moving around in neon orange clothing?" }
        ]
      },
      {
        title: 'Inside Joke #2 — Una The Forgetter',
        date: null,
        messages: [
          { who: 'THEM', text: "🤛🏻" },
          { who: 'YOU', text: "🤜" },
          { who: 'THEM', text: "Tf" },
          { who: 'THEM', text: "Correct answer wrong time dude" },
          { who: 'THEM', text: "Mukka mara tha abhi 😞" },
          { who: 'THEM', text: "Oh wait u already did" },
          { who: 'THEM', text: "I forgot 🙂" },
          { who: 'THEM', text: "*sneakily turns into a fist bump" },
          { who: 'YOU', text: "Una The Forgetter" },
          { who: 'THEM', text: "Now I get how all the gods got like 180 names" },
          { who: 'THEM', text: "Harkate krte rho" },
          { who: 'THEM', text: "Naam milte jainge" }
        ]
      }
    ]
  }
];

/* ---- renderer ----
   Each conversation renders as a .fragment-card (same class the
   chapter already uses) wrapped in <details> so tapping it expands
   in place. Collapsed state shows the first 2-3 real messages;
   expanded state shows the full conversation, styled with the
   chapter's existing .msg-line / .msg-who / .msg-bubble classes.
*/
(function () {
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  function toBubbleHtml(text) {
    return escapeHtml(text).replace(/\n/g, '<br>');
  }

  function messageLineHtml(m) {
    if (m.divider) {
      return `<div class="lore-divider">${escapeHtml(m.divider)}</div>`;
    }
    return `
      <div class="msg-line${m.who === 'THEM' ? ' right' : ''}">
        <span class="msg-who">${m.who === 'YOU' ? 'Shubh' : 'Nitya'}</span>
        <div class="msg-bubble">${toBubbleHtml(m.text)}</div>
      </div>`;
  }

  function buildConvo(convo) {
    const realMsgs = convo.messages.filter(m => !m.divider);
    // 2-3 message preview: 3 if there are enough messages, otherwise whatever exists (min 2)
    const previewCount = realMsgs.length >= 3 ? 3 : Math.min(2, realMsgs.length);
    const previewSet = new Set(realMsgs.slice(0, previewCount));

    // Build preview using only the first N real messages, in original order
    let seen = 0;
    const previewHtml = convo.messages
      .filter(m => !m.divider)
      .slice(0, previewCount)
      .map(messageLineHtml)
      .join('');

    const fullHtml = convo.messages.map(messageLineHtml).join('');

    const dateHtml = convo.date ? `<span class="fragment-meta">${escapeHtml(convo.date)}</span>` : '';

    const details = document.createElement('details');
    details.className = 'lore-convo fragment-card';
    details.innerHTML = `
      <summary>
        <div class="fragment-time-bar">
          <span class="fragment-time">${escapeHtml(convo.title)}</span>
          ${dateHtml}
          <span class="lore-convo-arrow">→</span>
        </div>
        <div class="lore-preview">
          ${previewHtml}
          <div class="lore-hint">tap to open full conversation</div>
        </div>
      </summary>
      <div class="lore-full">${fullHtml}</div>
    `;
    return details;
  }

  function buildSection(cat) {
    const section = document.createElement('div');
    section.className = 'lore-section';
    section.innerHTML = `
      <div class="lore-section-title">
        <span>${cat.emoji} ${escapeHtml(cat.title)}</span>
        <span class="lore-section-count">${cat.convos.length} convo${cat.convos.length === 1 ? '' : 's'}</span>
      </div>
    `;
    const list = document.createElement('div');
    list.className = 'lore-section-convos';
    cat.convos.forEach(convo => list.appendChild(buildConvo(convo)));
    section.appendChild(list);
    return section;
  }

  function render() {
    const root = document.getElementById('lore-root');
    if (!root) return;
    LORE_DATA.forEach(cat => root.appendChild(buildSection(cat)));

    // Only one conversation open at a time keeps the chapter scannable
    root.addEventListener('toggle', function (e) {
      if (!e.target.matches('.lore-convo') || !e.target.open) return;
      root.querySelectorAll('.lore-convo[open]').forEach(other => {
        if (other !== e.target) other.open = false;
      });
    }, true);

    // Subtle reveal as each conversation scrolls into view
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lore-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      root.querySelectorAll('.lore-convo').forEach(el => io.observe(el));
    } else {
      root.querySelectorAll('.lore-convo').forEach(el => el.classList.add('lore-visible'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
