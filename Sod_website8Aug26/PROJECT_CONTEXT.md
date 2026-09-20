# Swing Out Delhi — Project Context

> Working handoff document for continuing development of the Swing Out Delhi website.
> Written for a fresh Claude Code session with **no access to the original conversation**.
> Last updated: 2026-08-10.

**Read `CLAUDE.md` first** — it is the authoritative brief on brand, voice, values, and content rules. This file records what has actually been *built and decided*, and how to continue.

---

## 1. What this is

The official website for **Swing Out Delhi**, a growing Lindy Hop / swing dance community in Delhi NCR, India, founded by **Shivi Chandna**. It is a community hub and online presence — **not** a commercial dance-academy site.

Core feeling to protect: *"There's a real community here. I could belong."*

Recurring brand lines (use sparingly, don't plaster everywhere):
- **Find your rhythm. Find your people.**
- **Would you like to dance?**

Primary audiences: complete beginners, experienced dancers, people coming alone / without a partner, jazz lovers, visiting/international dancers and teachers, potential volunteers.

Owner/contact email in use across the site: **swingoutdelhi@gmail.com**
Instagram (real, live): **https://www.instagram.com/swingoutdelhi/**

---

## 2. Tech stack & how to run

- **Plain static site.** Vanilla HTML + CSS + a single small vanilla-JS file. **No build step, no framework, no bundler, no package.json.**
- **One external dependency:** Google Fonts (loaded via `<link>` in each page `<head>`). Everything else is local. Note: fonts won't render offline; a fully self-hosted-font pass is a future option.
- **Not deployed anywhere yet.** It only runs locally. To share it or get it on Google / AI search, it must be hosted (Netlify / GitHub Pages / Vercel + ideally a custom domain like swingoutdelhi.com).

Run locally (from project root):
```bash
python3 -m http.server 8123
# then open http://localhost:8123/index.html
```
Any static file server works. Open pages via the server (not `file://`) so relative paths behave.

---

## 3. File structure

```
/  (project root = /Users/yadavchandna/Sod_website8Aug26)
├── CLAUDE.md                 # Brand/voice/content brief — READ FIRST, it overrides defaults
├── PROJECT_CONTEXT.md        # (this file)
├── index.html                # Homepage
├── connect.html              # "Connect" page (global/visiting dancers)
├── what-is-swing.html        # "What is Swing?" explainer (under About)
├── shivi.html                # "Meet Shivi" / founder page (linked as "Team")
├── volunteer.html            # "Help Us Grow" volunteer page
├── styles.css                # ALL styles for every page (single stylesheet)
├── script.js                 # ALL behaviour for every page (single script)
├── data.js                   # Editable content data (window.SOD)
├── assets/
│   ├── img/                  # Web-ready images (renamed copies of originals)
│   └── flyers/               # depot48-19aug.jpg (reference only, not shown on site)
│
│   # --- ORIGINAL SOURCE ASSETS (not referenced by the site; keep for future) ---
├── photos/                   # Original DSC*.jpg community photos + shivi-lindy1.jpg
├── logo/                     # Sod_logo (1) (1).png (original logo)
├── flyers/                   # Original Depot 48 flyers (jpg + mp4)
├── merchandise/              # Tote / t-shirt designs (pdf/png) — not yet used on site
└── background-content/       # SoD-website-content.docx, Frankie Manning scholarship doc/pdf
```

`assets/img/` is what the site actually uses. The originals in `photos/`, `logo/`, etc. were copied and renamed into `assets/` (non-destructive) so HTML/CSS avoid spaces/parentheses in paths.

---

## 4. Information architecture (current)

**Global nav (identical on every page)** — top bar:
`What's On · Community · Jazz · Connect · About ▾`

- **What's On / Community / Jazz** → homepage section anchors (`index.html#whats-on`, `#community`, `#jazz`).
- **Connect** → `connect.html`.
- **About ▾** dropdown → `What is Swing?` (`what-is-swing.html`), `Team` (`shivi.html`), `Volunteer` (`volunteer.html`), `Contact` (`index.html#contact`).
- A gold **"Start dancing"** button (→ `#whats-on`) sits to the right of the nav.
- On mobile the whole thing collapses into a hamburger menu that lists the sections, then an "About" group heading with the four About links.

**Footer nav (every page)** mirrors the same set: What's On, Community, Jazz, Connect, What is Swing?, Team, Volunteer, Contact. Plus a "Come say hi" column: Instagram, WhatsApp group (mailto), Email us (mailto).

**Note:** "Team" intentionally points to the Shivi page — Shivi is currently the whole team. If a real team page is wanted later, create `team.html` and repoint.

---

## 5. Pages & sections

### 5.1 `index.html` — Homepage (section order)
1. **Hero** (`#top`) — full-bleed photo (`hero-couple.jpg`), quiet/editorial. Eyebrow `LINDY HOP · SWING · JAZZ · DELHI NCR`, "Swing Out" (cream) / "Delhi" (mustard), supporting paragraph, **one** gold CTA "Find a class →". No tagline line, no second button, no scroll badge.
2. **What's On** (`#whats-on`) — "Classes & socials". A 4-step "how it works" strip (Find a class → Register → Come along → Dance) + **event cards** rendered from `data.js` classes, each with a **Register** button (opens email).
3. **Community** (`#community`) — heading "Our Community" + "Some moments from the Swing Out Delhi dance floor." + a **horizontal photo carousel** (5 images, group photo first).
4. **Beginners** (`#beginners`) — "Never danced before? Perfect." mustard-accented invite with a circular photo (`smile-dance.jpg`).
5. **Jazz** (`#jazz`) — dark navy split. "We don't just dance to the music. We listen to it." (`feet-move.jpg`).
6. **Final CTA / Contact** (`#contact`) — "Find your rhythm. / Find your people." close + buttons (See what's on / Follow on Instagram) + a line pointing to the email + WhatsApp.

### 5.2 `connect.html` — Connect ("The Swing World")
Navy page. Header + a two-column body: photo (`joy-reach.jpg`) + text with two blocks — **Organizing an event?** (list: workshop demos, community exchange, collaborative events, cultural exchange) and **Visiting Dancers & Teachers** (list: join classes/socials, share workshops, experience Delhi, build friendships). Closes with a "Building global connections" box and a **Get in touch** email button. (Was originally an on-homepage "International" section; moved to its own page and renamed.)

### 5.3 `what-is-swing.html` — What is Swing? (under About)
Explainer page (page-hero + two-column with `partner-smile.jpg`). Verbatim client copy on swing/Lindy Hop origins, music/improvisation/connection, range of expression. **Contains the African American roots acknowledgement** in a highlighted `.heritage` box (see §9). Ends on "Want to know more…? Ask us…" — the previous "Ask us" button was removed at the client's request.

### 5.4 `shivi.html` — Meet Shivi (linked as "Team")
Founder story (page-hero + `.founder` two-column with `shivi.jpg`): Cambridge 2011, danced UK/Europe/Japan/China, 2016 ankle injury, returned to India, found no Delhi scene, started Swing Out Delhi. Mentions the 2026 Thailand Swing Era trip on a Frankie Manning Foundation scholarship (kept understated per CLAUDE.md). Includes a "What she loves about Lindy Hop" list.

### 5.5 `volunteer.html` — Help Us Grow
Page-hero + four category cards (**Event Support, Community Building, Creative & Media, Teaching Support**), each with four bullet points, then a "Join our growing family" box with a **Get involved** email button. Content is hard-coded in the HTML (verbatim client copy).

---

## 6. Design direction (the important part)

The identity to keep pushing: **vintage jazz club + modern Delhi**, editorial, warm, playful, photography-led, poster-like — **contemporary, not costume-retro**. Avoid the "generic dance-academy / SaaS landing page" feel: no walls of equal-sized cards, no sepia/paper-texture/distressed retro clichés.

### Colour (from the logo; defined as CSS vars in `styles.css :root`)
- `--navy: #0B2340` (primary dark), `--navy-900: #06182E`, `--navy-800: #10305A`
- `--mustard: #F2C43D` (gold accent), `--mustard-2: #E7A928` (deeper gold, for small text/links)
- `--cream: #F5F1E6` (page background), `--cream-2: #EDE7D6` (alt sections)
- `--ink: #17222E` (body text), `--muted: #5b6675`
- **Colour rhythm:** sections alternate cream / cream-2 / navy so no two adjacent sections feel the same; mustard is an accent, not a background workhorse.

### Typography (Google Fonts)
- `--f-display: "Fraunces"` — display serif for headings (weights up to 900, has italic).
- `--f-script: "Kaushan Script"` — the handwritten accent (echoes the logo). Used sparingly.
- `--f-cond: "Barlow Semi Condensed"` — uppercase labels / eyebrows / meta.
- `--f-body: "Barlow"` — body + UI. Highly readable; do not sacrifice for style.

**Sizing decisions the client explicitly asked for (do not "restore" these to bigger):**
- The **hero** was deliberately quietened: heading ~35% smaller than the first version, script tagline removed from hero, single CTA only.
- The homepage **display headings were reduced ~25%** (`.display-1`, `.display-2`, `.pullquote`, `.pull`, `.cta__script`). Body/normal text was left as-is. These display classes are used **only on the homepage**, so interior pages were intentionally unaffected.

### Signature motifs
- **Circular photo** (echoes the navy-disc logo) — used on the Beginners invite.
- **Full-bleed / edge photography**, images that anchor sections rather than sit in tidy boxes.
- Poster-ish labels (condensed uppercase eyebrows, mustard bullet markers).

### Motion
Subtle only. A single `IntersectionObserver` fade-up ("reveal") on scroll. `prefers-reduced-motion` is respected (reveals show instantly). **No autoplay, no marquees** (a scrolling ticker + marquee strip existed early and were deliberately removed — do not reintroduce).

---

## 7. Components & where they live

All markup patterns are hand-written HTML; all styling in `styles.css`; all behaviour in `script.js`.

- **Sticky nav + About dropdown** — `.nav`, `.nav__links`, `.nav__dd` / `.nav__ddbtn` / `.nav__ddmenu`. Dropdown opens on hover, click, and keyboard focus; `aria-expanded` tracked; Escape and outside-click close it (JS in `script.js`).
- **Mobile menu** — `.mobile-menu` (toggled by `#navToggle`; `hidden` attribute + `.mobile-menu[hidden]{display:none}`).
- **Event cards** — `.events` / `.event*`. Rendered by `script.js` from `SOD.classes`. Each has a "Register" mailto button.
- **"How it works" steps** — `.steps` / `.step` (static HTML in the What's On section).
- **Photo carousel** — `.carousel` / `.carousel__viewport` / `.carousel__slide` / `.carousel__btn`. CSS scroll-snap for native touch/swipe; JS wires prev/next buttons, keyboard arrows, and a "01 / 05" live counter. **No autoplay.** 5 curated slides, **group photo first**. Desktop slide width `min(720px, 60vw)`, mobile `66vw` with peek (was made ~30% smaller than the first version, at client request). Accessible controls with aria-labels; `aria-live` status line.
- **Page hero band** (interior pages) — `.page-hero` (navy).
- **Heritage/roots box** — `.heritage` (cream-2, mustard left border). Currently on `what-is-swing.html`.
- **Founder two-column** — `.founder` (image + prose). Reused on `what-is-swing.html`.
- **Connect blocks / lists** — `.connect*`.
- **Volunteer category cards** — `.vol-cat*`, `.vol-join`.
- **Buttons** — `.btn`, `.btn--gold`, `.btn--navy`, `.btn--ghost`, `.btn--ghost-light`, `.btn--sm`.
- **Reveal-on-scroll** — add class `reveal` to any element; JS adds `.in` when it enters the viewport.

---

## 8. Data model & functionality

### `data.js` (`window.SOD`)
- `links.instagram` — real IG URL (`https://www.instagram.com/swingoutdelhi/`).
- `links.email` — `swingoutdelhi@gmail.com`.
- `rsvp` — configuration object for Google Sheets (`googleScriptUrl`) or Google Form (`googleFormUrl`).
- `classes[]` — **actively used**: renders the homepage Classes cards. Fields: `id`, `name`, `level`, `tag`, `blurb`, `duration`, `schedule`, `venue`, `price`, `highlights[]`.
- `events[]` — **actively used**: renders the Upcoming Events & Socials ticket cards. Fields: `id`, `title`, `type`, `date` (`month`, `day`, `weekday`), `time`, `venue`, `blurb`, `cover`, `tag`, `note`.
- `instagram[]` — **actively used**: renders the 6 curated photo tiles linking to Instagram posts/profile (`img`, `caption`, `permalink`).
- `history[]`, `volunteer[]` — kept for reference.

### `script.js` (single IIFE, runs on every page; each block guards on element existence)
- Sets footer year.
- Mobile menu toggle.
- About dropdown open/close (hover + click + focus + Escape + outside-click).
- Nav shadow on scroll (`.scrolled`).
- Renders `#events` from `SOD.classes` (homepage).
- Renders `#upcomingEventsList` from `SOD.events` (homepage).
- Renders `#igGrid` from `SOD.instagram` (homepage).
- Controller for `#rsvpModalBackdrop`: opens modal on click of `[data-rsvp]` triggers, auto-populates class/event select dropdown, handles submission to Google Sheets / Google Apps Script or simulated local mode with instant user confirmation.
- Carousel controller for `#carouselViewport` (homepage).
- Reveal-on-scroll via `IntersectionObserver`, with reduced-motion + no-IO fallback (adds `.in` to all).

### Links / RSVP registration behaviour
- **Interactive RSVP Modal**: All "Register" and "RSVP" buttons trigger an on-page modal capturing attendee details directly into a Google Sheet via Google Apps Script (see `GOOGLE_SHEETS_SETUP.md`).
- WhatsApp group access & direct contact remains available via `mailto:swingoutdelhi@gmail.com`.

---

## 9. Content rules (must-follow)

From CLAUDE.md and client direction during the build:
- **Never invent** event dates, prices, venues, statistics, testimonials, teachers, sponsors, awards, or quotes. If unknown, use a clear placeholder or ask.
- **Do NOT treat the Depot 48 flyers as real event data.** They were shared only as a *style* reference. The homepage class times in `data.js` come from the client's content doc and are provisional/editable, not scraped from flyers.
- **African American origin acknowledgement is required content.** Lindy Hop must be credited as an African American dance from 1930s Harlem. It currently lives on **`what-is-swing.html`** (in the `.heritage` box). It previously also sat in the homepage Community intro and on a History page — both were removed for other reasons, so **do not delete it from `what-is-swing.html`**; if that page ever goes, move the acknowledgement somewhere else.
- **Voice:** conversational, warm, concise, human. Avoid corporate/AI clichés ("empowering", "passionate community", "holistic", "unlock your potential", etc.). Some client-supplied copy (e.g. volunteer page "amazing experiences") was kept verbatim because the client provided it directly.
- **Brand spelling is "Swing Out Delhi"** (three words), matching the logo — even though some source docs say "Swingout Delhi".
- Don't reuse a community photo in more than one place (see §10).

---

## 10. Photography

Strongest asset. Real community photos from a Depot 48 shoot (candid, warm, red-walled venue, disco ball, real dancers of all levels; one full-group shot that even includes cake). **Rule the client set: each photo is used at most once across the whole site.**

Current assignments (`assets/img/`):
- `hero-couple.jpg` (DSC07321) → homepage hero
- carousel (homepage, in order): `g-07468.jpg` (the whole-group photo, first) → `floor-wide.jpg` → `two-laugh.jpg` → `two-spin.jpg` → `g-07485.jpg`
- `smile-dance.jpg` (DSC07249) → Beginners circular photo
- `feet-move.jpg` (DSC07519) → Jazz section
- `joy-reach.jpg` (DSC07428) → Connect page
- `partner-smile.jpg` (DSC07275) → What is Swing? page
- `shivi.jpg` (shivi-lindy1) → Meet Shivi page
- `logo.png` → nav/footer/favicon
- **Unused, available:** `g-07257.jpg`, `g-07377.jpg`, `g-07472.jpg`, `g-07497.jpg`, `g-07527.jpg`

Do not swap in generic stock photography. Do not fabricate community scenes.

---

## 11. Things deliberately rejected / removed (don't reintroduce without asking)

- **Loud hero** — the big festival-poster hero was toned down on purpose.
- **Scrolling ticker + marquee strip** — removed; the client said no one uses them and they're repetitive.
- **"Not a dance school." framing** — replaced with the positive "Come for the dancing. Stay for the people." idea.
- **Meet Shivi as a homepage section** — the client explicitly did not want it on the homepage; it lives only on `shivi.html`.
- **Values & Mission** — a `values.html` page existed briefly; the client said "remove for now," and it has been deleted. May be re-added later.
- **History page** — `history.html` existed (Harlem → Swing Era → Revival timeline) and was **deleted** at the client's request ("not required right now, will add later"). The timeline copy still lives in `data.js.history` if it needs rebuilding.
- **Walls of equal cards** and generic tiny-thumbnail carousels — avoid.
- **Instagram live-feed widget** — the client chose to keep simple branded placeholder tiles / plain links rather than add a third-party feed widget; that IG grid was later removed entirely. A true "last 6 posts" feed would need a third-party embed (Behold/SnapWidget) or the IG Graph API + a backend, plus the client's own account setup — flagged but not done.

---

## 12. Known cleanup / technical debt

- **Orphaned CSS** (safe, just dead code): `.values`, `.value`, `.value__num`, `.mission__lead`, `.timeline`, `.tl-*`, `.build__item` and related, `.pullquote`, `.ig-grid`/`.ig-tile*` are no longer used by any page (left over from removed pages/sections). Candidate for a tidy-up pass.
- **Dormant JS/data**: `SOD.history`, `SOD.volunteer`, `SOD.instagram` and their `script.js` renderers have no current targets. Harmless; remove or keep for future features.
- **Duplicated header/footer**: because there's no templating/build step, the nav + footer markup is **copy-pasted into all five HTML files**. Any nav/footer change must be applied to every page. If this becomes painful, introduce a tiny include/build step (or a JS partial-injector) — but only if the client is OK adding tooling (CLAUDE.md favours minimal dependencies).

---

## 13. Outstanding tasks / next steps

Nothing is broken; these are the open threads:
1. **Deploy** (Netlify/GitHub Pages/Vercel) + ideally a custom domain. Required before the site is shareable or discoverable.
2. **SEO / discoverability** (discussed, not yet built): per-page titles/meta are decent but add **Schema.org JSON-LD** (Organization / LocalBusiness + classes), a `sitemap.xml` and `robots.txt` (allow AI crawlers), and keyword-relevant copy ("Lindy Hop Delhi", "swing dance classes Gurgaon"). Off-page work is the client's: **Google Search Console**, **Google Business Profile**, Instagram/listing backlinks. No one can *guarantee* rankings; the site side just needs to be technically clean.
3. **Fill real specifics** as they're confirmed: exact class days/times/venues (in `data.js`), a Townscript/booking link if a real one exists, WhatsApp handling.
4. Optional: History page rebuild, a real Team page, merch section (designs exist in `merchandise/`), self-hosted fonts.

---

## 14. How to continue (quick start for the next session)

1. Read **`CLAUDE.md`** (brand/voice/rules) then this file.
2. Start the local server (§2) and open the pages to see current state.
3. To change **class listings** → edit `data.js` (`classes[]`).
4. To change **nav/footer** → edit the block in **all five** HTML files (they're duplicated).
5. To restyle → `styles.css` (single file; sections are commented and roughly ordered to match the homepage). Respect the **reduced heading sizes** and the **quiet hero** — the client asked for those specifically.
6. Keep the **navy/mustard/cream** palette, the **one-photo-per-use** rule, the **African American acknowledgement**, and the **no-invented-facts** rule.
7. Verify after changes: every link resolves (no `href="#"`, no `data-todo`), no console errors, and it still looks like *Swing Out Delhi* — editorial jazz poster, not a generic dance-school template.
