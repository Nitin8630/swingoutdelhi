/*
 * Swing Out Delhi — editable content
 * ----------------------------------
 * Everything you'll want to change lives here.
 *
 * Update class info, upcoming events, Google Sheets/Form settings,
 * and Instagram tiles here — the website automatically renders the updates.
 */

window.SOD = {
  // Global links (buttons, footer, contact)
  links: {
    instagram: "https://www.instagram.com/swingoutdelhi/",
    email:     "swingoutdelhi@gmail.com",
    // WhatsApp access is by request or confirmation after RSVP
  },

  /*
   * RSVP / Google Sheets Registration Configuration
   * ------------------------------------------------
   * To send registrations directly into a Google Sheet:
   * 1. Follow the 2-minute instructions in GOOGLE_SHEETS_SETUP.md.
   * 2. Paste your Google Apps Script Web App URL into `googleScriptUrl` below.
   *
   * If `googleScriptUrl` is empty, the site runs an interactive on-page RSVP
   * simulation that confirms the registration and offers a 1-click email confirmation.
   *
   * You can also optionally specify a direct Google Form URL in `googleFormUrl`.
   */
  rsvp: {
    googleScriptUrl: "", // e.g. "https://script.google.com/macros/s/AKfycb.../exec"
    googleFormUrl:   "", // e.g. "https://docs.google.com/forms/d/e/.../viewform"
  },

  /*
   * Regular Classes & Learning Programs
   * Rendered in the "Classes" section with level badges, curriculum highlights, and direct RSVP.
   */
  classes: [
    {
      id: "class-beginners",
      name: "Absolute Beginners",
      level: "No experience needed",
      tag: "Level 1 · Foundations",
      blurb: "Never danced before? Perfect. Learn the core pulse, 6-count rhythm, and foundational turns in a friendly, low-pressure room.",
      duration: "90 minutes",
      schedule: "Saturdays · 4:00–5:30 PM",
      venue: "Rotating venues, Delhi NCR",
      price: "Drop-in ₹600 · 4-Week Block ₹2,000",
      highlights: [
        "Pulse, bounce & swing rhythm",
        "Basic 6-count footwork & turns",
        "Partner connection & leading/following",
        "No partner needed — we rotate constantly",
      ],
    },
    {
      id: "class-intermediate",
      name: "Intermediate Swing",
      level: "Building on basics",
      tag: "Level 2 · Progression",
      blurb: "Ready to expand your vocabulary? Master the iconic 8-count Swing Out, explore musicality, and develop fluid social dancing skills.",
      duration: "90 minutes",
      schedule: "Sundays · 5:00–6:30 PM",
      venue: "Rotating venues, Delhi NCR",
      price: "Drop-in ₹600 · 4-Week Block ₹2,000",
      highlights: [
        "The classic 8-count Swing Out & Lindy Circle",
        "Rhythm variations & syncopations",
        "Musical breaks & listening to the band",
        "Dynamic momentum & comfortable flow",
      ],
    },
    {
      id: "class-solojazz",
      name: "Solo Jazz & Charleston",
      level: "All levels welcome",
      tag: "Solo Rhythm · No partner",
      blurb: "Rhythm and jazz expression on your own two feet! Learn classic authentic jazz steps, Shim Sham routines, and creative footwork styling.",
      duration: "75 minutes",
      schedule: "Alternate Saturdays · 2:30–3:45 PM",
      venue: "Studio spaces, Delhi NCR",
      price: "Drop-in ₹500",
      highlights: [
        "Classic steps: Suzy Q, Shim Sham, Fall Off the Log",
        "Solo body rhythm & Charleston kicks",
        "Improvisation & musical expression",
        "Great for both Leads & Follows",
      ],
    },
    {
      id: "class-practice",
      name: "Community Practice Jam",
      level: "Everyone welcome",
      tag: "Peer Learning & Jam",
      blurb: "A relaxed, community-funded space to review what you've learned in class, ask peers questions, try new moves, or switch roles.",
      duration: "2 hours open floor",
      schedule: "Sundays · 3:30–5:30 PM",
      venue: "Community spaces, Delhi NCR",
      price: "Free / Community funded",
      highlights: [
        "Open dance floor with curated swing playlists",
        "Friendly peer feedback & informal mentoring",
        "Safe space to try both Lead and Follow roles",
        "Meet fellow dancers and hang out",
      ],
    },
  ],

  /*
   * Upcoming Events, Socials & Workshops
   * Rendered in the "Upcoming Events" section with vintage ticket badges and RSVP triggers.
   */
  events: [
    {
      id: "event-depot48-social",
      title: "Lindy Hop Taster & Social Dance Night",
      type: "Class & Social",
      date: {
        month: "AUG",
        day: "19",
        weekday: "Tuesday",
      },
      time: "7:30 PM – 10:30 PM",
      venue: "Depot 48, M Block Market, Greater Kailash II, New Delhi",
      blurb: "A welcoming beginner taster class at 7:30 PM followed by social dancing under the disco ball with DJ Shivi spinning swing classics.",
      cover: "Free entry / F&B at venue",
      tag: "Social Dance",
      note: "No partner required. Wear comfortable flat shoes.",
    },
    {
      id: "event-live-jazz-meet",
      title: "Swing Jazz Night & Community Outing",
      type: "Live Music Meetup",
      date: {
        month: "AUG",
        day: "28",
        weekday: "Friday",
      },
      time: "8:00 PM onwards",
      venue: "The Piano Man Jazz Club, Safdarjung Enclave, New Delhi",
      blurb: "We don't just dance to the music — we listen to it together. Join the community table for an evening of live swing, bebop, and great conversations.",
      cover: "Club entry / cover as per venue",
      tag: "Live Jazz Outing",
      note: "All jazz lovers, listeners, and dancers welcome.",
    },
    {
      id: "event-park-jam",
      title: "Sunset Swing in the Park & Jam",
      type: "Outdoor Social",
      date: {
        month: "SEP",
        day: "06",
        weekday: "Saturday",
      },
      time: "5:00 PM – 7:15 PM",
      venue: "Sunder Nursery Gardens, Nizamuddin, New Delhi",
      blurb: "Golden hour dancing on the grass! Portable speakers, swing jazz tunes, chai, snacks, and open-air swing outs in the park.",
      cover: "Free event (standard park entry applies)",
      tag: "Outdoor Jam",
      note: "Picnic style. Bring a mat and your dance spirit!",
    },
  ],

  /*
   * Instagram Grid — 6 curated community photo tiles.
   * Clicking any tile opens that post or profile on Instagram.
   */
  instagram: [
    {
      img: "assets/img/g-07472.jpg",
      caption: "The floor is warm, the tempo is right. Moments from our Depot 48 dance night ✨",
      permalink: "https://www.instagram.com/swingoutdelhi/",
    },
    {
      img: "assets/img/g-07377.jpg",
      caption: "Mid-turn magic. Lindy Hop is a joyful conversation between two dancers.",
      permalink: "https://www.instagram.com/swingoutdelhi/",
    },
    {
      img: "assets/img/g-07257.jpg",
      caption: "No partner? Perfect. We rotate partners in every class so everyone dances with everyone.",
      permalink: "https://www.instagram.com/swingoutdelhi/",
    },
    {
      img: "assets/img/g-07527.jpg",
      caption: "When the rhythm takes over — finding pure freedom in every syncopated beat.",
      permalink: "https://www.instagram.com/swingoutdelhi/",
    },
    {
      img: "assets/img/g-07497.jpg",
      caption: "Duke Ellington, Count Basie, and endless smiles. Delhi's swing community in motion.",
      permalink: "https://www.instagram.com/swingoutdelhi/",
    },
    {
      img: "assets/img/floor-wide.jpg",
      caption: "Delhi's swing scene is growing, one swing out at a time. Come say hi!",
      permalink: "https://www.instagram.com/swingoutdelhi/",
    },
  ],

  // History timeline (kept for reference / interior page)
  history: [
    {
      era: "1920s–30s",
      title: "Born in Harlem",
      text: "Lindy Hop was born at Harlem's Savoy Ballroom, fusing Charleston, tap and breakaway into something new. Named after Lindbergh's flight, it captured the Jazz Age — energetic, improvised, joyful.",
    },
    {
      era: "1930s–40s",
      title: "The Swing Era",
      text: "The golden age of swing. Count Basie, Duke Ellington and Benny Goodman gave the dance its soundtrack, and the Savoy stayed its home — where integrated crowds danced together in an era of segregation.",
    },
    {
      era: "1980s–now",
      title: "Revival & global spread",
      text: "Original dancers like Frankie Manning taught new generations, keeping the spirit alive. Today Lindy Hop thrives in cities worldwide — including right here in Delhi.",
    },
  ],

  // Volunteer roles (kept for volunteer.html)
  volunteer: [
    { title: "Event support", text: "Help set up socials, welcome newcomers, and keep venues and workshops running smoothly." },
    { title: "Community building", text: "Welcome and include new dancers, organise meetups, and keep the room warm and friendly." },
    { title: "Creative & media", text: "Photography, video, social media and design — help show the world what our nights feel like." },
    { title: "Teaching support", text: "Assist instructors, help with the partner rotation, and cheer on people finding their first steps." },
  ],
};
