// ========================================================
// Welcome experiment (warm) — a friendlier docs front door.
// Loaded between docs-pages.js and docs-app.js so the app boots
// with this home in place. Every other docs page is unchanged.
// Trades the 24-card directory for a hero + a "where to start"
// path + reassurances, leaving the full index to the sidebar.
// ========================================================

PAGES.home = {
  group: 'Start here',
  title: 'Mainstream',
  icon: 'home',
  navTitle: 'Welcome',
  render: () => `
    <div class="home-hero warm-hero">
      <div class="left">
        <div class="eye">Welcome to Mainstream</div>
        <h1>Let's make<br>Linux <em>mainstream.</em></h1>
        <p class="sub">Arch under the hood, Hyprland on the surface, and the polish of macOS on top — one open system that feels right whether it's your first Linux or your tenth. Nothing here needs a terminal, and nothing can't be undone. Make yourself at home.</p>
        <div class="cta-row">
          <a class="btn stream" href="https://mainstreamos.org/download">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m6 10 6 6 6-6"/><path d="M4 21h16"/></svg>
            Download · 2.7 GB
          </a>
          <a class="btn ghost" href="#install-iso">Install guide →</a>
        </div>
      </div>
      <div class="right">
        <figure class="hero-shot"><img src="assets/docs/Welcome-Hero.webp" alt="The Mainstream desktop — bar on top, dock below, and the wallpaper clock beneath the Mainstream mark"></figure>
      </div>
    </div>

    <div class="sec-lbl warm-lbl"><h3>Where would you like to start?</h3></div>
    <div class="path-grid">
      <a class="path" href="#install-iso">
        <div class="ic">${icon('disc')}</div>
        <h4>I'm new — get it running</h4>
        <p>Flash the ISO and click through, or run one command on a fresh Arch box. About ten minutes, and no Linux experience needed.</p>
        <span class="go">Install it →</span>
      </a>
      <a class="path" href="#desktop">
        <div class="ic">${icon('iface')}</div>
        <h4>Just installed — make it yours</h4>
        <p>Meet the bar, the dock, and the launcher, then set your wallpaper, colors, and layout. It starts feeling like your machine fast.</p>
        <span class="go">Take the tour →</span>
      </a>
      <a class="path" href="#quick">
        <div class="ic">${icon('gear')}</div>
        <h4>Here to fine-tune</h4>
        <p>Every setting lives in one place — wallpaper and colors, the UI, display and layout switching, keybinds and updates — a settings app, not a config file, and never a terminal. Snapshots keep experimenting safe.</p>
        <span class="go">Open Settings →</span>
      </a>
    </div>

    <div class="reassure">
      <div><b>Nothing to memorize.</b> Tap <span class="k">Super</span> (the ⊞ Windows or ⌘ Command key) and start typing — apps, files, settings, and answers all show up.</div>
      <div><b>Nothing to fear.</b> Every update backs your system up first; roll back from the boot menu any time you like.</div>
      <div><b>Nothing hidden.</b> Built in the open, installed from a signed package repo you're welcome to inspect.</div>
    </div>

    <div class="ref-line">
      <p>Looking for one specific setting? Every page lives in the sidebar — or press <span class="k">/</span> to search the whole manual.</p>
      <a class="btn ghost sm" href="#quick">Open the settings tour →</a>
    </div>

    <div class="sign-off">Made by people who wanted their families on Linux too.</div>
  `
};

// ---- Hidden pages (in PAGES, deliberately not in NAV_ORDER → no sidebar entry) ----

PAGES['why-mainstream'] = {
  title: 'Why Mainstream',
  icon: 'home',
  navTitle: 'Why Mainstream',
  lede: "Deeply featured, genuinely friendly, and built with the kind of care that makes it feel at home on your mom's laptop and your rendering rig alike.",
  render: () => `
    <h2>Why "Mainstream"?</h2>
    <p>This started as a passion project. Somewhere along the way it turned into something closer to a love letter to the Linux community.</p>
    <p>For a long time there's been a hole where a certain kind of Linux should be: friendly enough that a newcomer finds it as easy as Windows — easier, even — while handing the people who want it the full power of Hyprland, without having to feel like a developer maintaining their own config to get there. Almost nobody builds for <em>both</em> of those people at once. That hole is why Mainstream exists.</p>
    <p>The name is the mission said out loud. Linux has lived in its niche long enough. This is one small push toward making "the year of the Linux desktop" more than a punchline — and helping this community grow out into the world, where it belongs.</p>

    <h2>The idea</h2>
    <p>Arch Linux is one of the most capable, up-to-date systems you can run — and one of the least approachable. Mainstream keeps everything that makes Arch great (a rolling release, a huge software library, total control) and removes the part that asks you to be an expert before you can use your own computer.</p>

    <h2>What that looks like</h2>
    <div class="props">
      <div class="prop"><center><div class="k">No terminal required</div></center><div class="v">Wallpaper, colors, display, power, updates, drives — every setting has a real panel. The terminal is there when you want it, never when you don't.</div></div>
      <div class="prop"><center><div class="k">Safe to explore</div></center><div class="v">Every system update takes a Btrfs snapshot first. Break something? Roll back from the boot menu. You can't paint yourself into a corner.</div></div>
      <div class="prop"><center><div class="k">Curated, not stripped</div></center><div class="v">Sensible defaults out of the box — a tuned Hyprland desktop, creator and gaming stacks a click away — without hiding the power underneath.</div></div>
      <div class="prop"><center><div class="k">Open and verifiable</div></center><div class="v">Everything is built in the open and installed from a signed package repository you're welcome to inspect. Nothing about how your system is made is hidden.</div></div>
    </div>

    <h2>Isn't it just an Arch rice?</h2>
    <p>Fair question — here's the honest answer. The desktop shell is a lean, heavily modified version of end-4's excellent <a href="https://github.com/end-4/dots-hyprland">illogical-impulse</a>, and Mainstream ships it the way Ubuntu ships GNOME: as one credited, continuously-upstream-merged part of a whole operating system. Nobody calls Ubuntu "rebranded GNOME."</p>
    <p>The distro is everything a dotfiles repo can't be — a graphical installer with four paths, a post-install self-check that writes you a health report, a signed package repo (nothing built from the AUR while you install), one-click rollback with a snapshot before every update, GPU auto-config across AMD, Intel, and NVIDIA, and a real settings panel for everything. Credit and the maintainers' own donate links are built into the About page, and fixes go back upstream as pull requests, not private patches.</p>

    <h2>Who it's for</h2>
    <p>People who want a computer that respects them — enthusiasts who want Arch without the babysitting, creators who need their tools to just work, and the family members they set up and would rather not get a support call about. For every home.</p>

    <h2>Who builds it</h2>
    <p>Mainstream is built by Gregory Martin. In the early Android ROM scene I went by blackdroid — I made Ultimate Droid starting with the original Motorola Droid, and later Codename Android in the Galaxy Nexus era. Mainstream is that same passion and obsession pointed at the Linux desktop. Those years also taught me — some of it the hard way — how to hear what people are missing and build it.</p>
    <p>The goal is bigger than one distro: I want the Linux desktop to genuinely go mainstream — a first choice anyone can live on, not an alternative — and I want the projects Mainstream stands on to rise with it. If Mainstream earns attention, the people whose work it builds on should feel it too. Let's make Linux mainstream.</p>

    <h2>How you can help</h2>
    <p>A few things would genuinely help:</p>
    <ul>
      <li><strong>Write code, or want to build something together?</strong> Mainstream is one developer's project for now — and I'd rather it weren't. Pull requests are genuinely welcome (a one-line fix counts), and so is deeper collaboration: on Mainstream itself, or on the upstream projects it's built on. If you'd like to work on something together, reach out.</li>
      <li><strong>Speak another language?</strong> I want Mainstream to feel native well beyond English, and I can't do that alone — translators are wanted and welcome.</li>
      <li><strong>See something wrong?</strong> Nobody contributing to Mainstream should be above reproach. If a decision looks off or something's broken, please say so — questions and criticism are how you make things better.</li>
    </ul>
    <p>And whether you're helping or just curious, the community lives on <a href="https://discord.gg/WJ3AUK5Aqd">Discord</a> — help when you need it, showcases when you're proud, and release news first.</p>

    ${callout('tip','See it for yourself','<p>The fastest way to get it is to look around. Start with <a href="#desktop">The Desktop</a>, or <a href="https://mainstreamos.org/download">download the ISO</a> and try it live before you install.</p>')}
  `
};

PAGES['branding'] = {
  title: 'The Look',
  icon: 'palette',
  navTitle: 'The Look',
  lede: 'Mainstream is designed end to end — the boot splash, the login, and the lock screen all match the desktop, from the first frame to the last.',
  render: () => `
    ${shot('Main-Desktop-UI.webp','The Mainstream desktop — bar, dock, and wallpaper clock','The desktop everything else is designed to match — the look every screen carries, from the first frame to the last.')}

    <p>Most of Mainstream's design lives on the desktop — but the care doesn't start there. Every screen between pressing power and reaching your desktop is themed to match, and so is the one you see when you lock. Here it is, end to end, with the palette that ties it together at the bottom.</p>

    <h2>The boot splash</h2>
    <figure>
      <div class="shot">
        <video src="assets/docs/Boot-Splash-Animation.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>The Mainstream boot splash — the stream sweeping under the progress bar.</figcaption>
    </figure>

    <h2>The login screen</h2>
    <figure>
      <div class="shot">
        <video src="assets/docs/Login-Screen.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>A customized version of the <code>pixie</code> theme, with a couple of Mainstream-specific features added — themed to your wallpaper, per user.</figcaption>
    </figure>

    <h2>The lock screen</h2>
    ${shot('Lock-Screen.webp','The Mainstream lock screen — ring wallpaper, centered clock, and the auth bar','The lock screen — your wallpaper, the clock, session controls, and a media-player widget when something\'s playing.')}

    <h2>Palette — graphite, warm paper, one running stream</h2>
    <p>The palette is quiet on purpose — the stream gradient is the only loud thing in the room, and it only appears where something is <em>flowing</em>: loading, streaming, syncing, transferring. Everything else is warm neutrals.</p>

    <div style="border-radius:14px;padding:22px;margin:16px 0;background:linear-gradient(95deg,#009ca5,#008dc3);color:#fff">
      <div style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;opacity:.72">Signature gradient</div>
      <div style="font-size:26px;font-weight:500;letter-spacing:-0.02em;margin:6px 0 18px;max-width:420px">The Stream — the only color that moves.</div>
      <div style="display:flex;gap:28px;flex-wrap:wrap;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11.5px;opacity:.9">
        <div><b style="display:block;font-family:inherit;font-size:14px;margin-bottom:2px">Stream A · Cyan</b>oklch(0.62 0.13 200)</div>
        <div><b style="display:block;font-family:inherit;font-size:14px;margin-bottom:2px">Stream B · Ocean</b>oklch(0.60 0.14 230)</div>
      </div>
    </div>

    <div style="display:flex;height:24px;border-radius:7px;overflow:hidden;margin:16px 0 4px">
      <div style="flex:55;background:#0b0d12"></div>
      <div style="flex:22;background:#191a1f"></div>
      <div style="flex:9;background:#2a2b32"></div>
      <div style="flex:7;background:#c9ccd4"></div>
      <div style="flex:7;background:linear-gradient(95deg,#009ca5,#008dc3)"></div>
    </div>
    <div class="props">
      <div class="prop"><center><div class="k">Abyss · 55%</div></center><div class="v">Primary surface.</div></div>
      <div class="prop"><center><div class="k">Night · 22%</div></center><div class="v">Panels &amp; cards.</div></div>
      <div class="prop"><center><div class="k">Slate · 9%</div></center><div class="v">Elevated / hover.</div></div>
      <div class="prop"><center><div class="k">Bone · 7%</div></center><div class="v">Text &amp; glyphs.</div></div>
      <div class="prop"><center><div class="k">Stream · 7%</div></center><div class="v">Motion only.</div></div>
    </div>
  `
};

PAGES['blog'] = {
  title: 'Blog',
  icon: 'send',
  navTitle: 'Blog',
  lede: 'Release announcements and project updates.',
  render: () => `
    <div class="eyebrow">Release &middot; 1.3.2 &middot; August 19, 2026</div>
    <h2 id="mainstream-os-1-3-0">Mainstream OS 1.3.2 — a Linux desktop you set up by clicking</h2>

    <p>Mainstream OS is a Linux operating system built on Arch. Its desktop is Hyprland — the software that arranges your windows and decides where they go — and Hyprland is normally set up by hand, by editing text files. Here you set it up by clicking: displays, window layouts, keyboard shortcuts, the bar, the look of the whole interface, updates and repairs each get a proper settings page — a settings app, not a config file, and never a terminal. Pick a wallpaper and the whole desktop takes its colors from it. One keypress hands the machine over to a full-screen Steam session for gaming, and a graphical installer puts it all on your computer in a few minutes. <strong>Deeply featured. Genuinely friendly.</strong></p>

    ${shot('Welcome-Hero.webp','The Mainstream OS desktop — bar along the top, dock below, wallpaper clock between','The desktop. Everything you see takes its colors from whatever wallpaper you pick.')}

    <h2>What Mainstream is made of</h2>
    <p>The shell — the bar, the side panels, the search box — is a lean, heavily modified version of <a href="https://github.com/end-4">end-4</a>'s <a href="https://github.com/end-4/dots-hyprland">illogical-impulse</a>. Mainstream ships it the way Ubuntu ships GNOME: as one openly credited part of a complete operating system. Improvements from the original are still taken in periodically, and fixes found here are offered back rather than kept private. It has grown since: the dock, the app drawer, file search, the bar's layout system and its media handling, and the theme system are largely Mainstream's now. A theme saves the window styling — rounding, gaps, blur, shadows, opacity, animations — along with the per-app window rules, the app style, the icon and cursor themes, the font choices, the wallpaper, and the colors, which are still generated by end-4's color engine. It all exports to one file that imports on another computer, wallpaper included, and themes can be paired, one for day and one for night. So is everything around the shell — the installer, the settings app, the software repository, the backup and repair tools, the gaming session. Every project Mainstream is built with is credited in Settings &rarr; About.</p>

    <h2>One wallpaper, a whole look</h2>
    <ul>
      <li><strong>Colors from your wallpaper.</strong> Pick any wallpaper and the desktop, the settings app, your terminal, your apps — GTK and Qt alike — your folder icons and the lock screen all recolor to match it.</li>
      <li><strong>A wallpaper that rotates.</strong> Point it at a folder instead of one picture and set a timer. The palette follows along with every change, so the whole desktop recolors as it goes.</li>
      <li><strong>Video wallpapers.</strong> A video works as a wallpaper with nothing extra to install — it plays quietly on a loop across every screen, and the color scheme comes from it just the same.</li>
      <li><strong>Themes.</strong> Your whole look — wallpaper, colors, app style, icons, interface changes, and now the shape, transparency, blur, dim, borders, shadow, animations, window rules and which edge the dock sits on as well — saves under a name with a preview, and switches back in one tap.</li>
      <li><strong>Take your look with you.</strong> A theme saves out to a single file you can hand to someone else, wallpaper included, with anything particular to your machine left behind.</li>
      <li><strong>Day and Night.</strong> Pair two themes and let them follow the clock or your night-light schedule.</li>
    </ul>
    <figure>
      <div class="shot">
        <video src="assets/docs/ThemesConfig-theme-switching-example-video.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Switching saved themes — wallpaper, colors and window styling change together.</figcaption>
    </figure>

    <h2>Make it yours</h2>
    <ul>
      <li><strong>A bar you arrange.</strong> Show, hide and reorder every piece of the bar by dragging, move them between the left, middle and right, and drop two together to join them into a single rounded group.</li>
      <li><strong>A dock on any edge.</strong> Put it along the top, bottom, left or right of the screen, and the bar steps aside when you give the dock the edge it was using.</li>
      <li><strong>Title bars, on or off.</strong> On for a familiar desktop, off for a clean one, switched instantly.</li>
      <li><strong>Windows drawn the way you want.</strong> Corner radius, border thickness, the gaps between windows and around the screen, how see-through they are, the blur behind them, the shadow beneath them, how much the ones you are not using dim, and how they animate. Give the borders a gradient of your own or leave them following the wallpaper, and put the lot back with one press.</li>
      <li><strong>App style, icons and pointer.</strong> All three are dropdowns in Settings, with pointer sizes limited to the ones your chosen pointer can actually be drawn at.</li>
      <li><strong>Fonts.</strong> A searchable list that shows each font in its own lettering, and your choice carries into your apps rather than stopping at the desktop.</li>
      <li><strong>A built-in window rule editor.</strong> Most desktops leave per-app rules to a config file you edit by hand. Here it is a page in Settings: teach one app where to open, whether it floats, how see-through it is, and what it is allowed to do.</li>
    </ul>
    ${shot('BarConfig-1.webp','The bar widget layout editor in Settings, showing Simple and Custom modes and the widget list','The bar layout editor. Drag two pieces together and they join into one.')}

    <h2>A desktop and a games console, in one</h2>
    <ul>
      <li><strong>Gaming Mode.</strong> One keypress puts the desktop away and hands the machine to Steam's full-screen mode, the same way a Steam Deck runs, then gives the desktop back. AMD, Intel and NVIDIA alike.</li>
      <li><strong>Console Mode.</strong> An install option that starts straight into the full-screen Steam session and sets up game controllers, turning a computer under the TV into a console — with the desktop still there whenever you want it.</li>
      <li><strong>Windows games, ready to run.</strong> The compatibility layer that runs Windows titles is installed and switched on during setup, so your library works the first time you open it.</li>
    </ul>
    ${shot('Gaming-Big-Picture.webp','Steam Big Picture running as the Mainstream Gaming Mode session','Gaming Mode — the machine really does hand itself over, rather than running Steam in a window.')}

    <h2>Everything in Settings</h2>
    <p>Eighteen pages cover the whole machine, nine of which are Mainstream's own work with no equivalent in the shell it started from.</p>
    <ul>
      <li><strong>Displays.</strong> Arrange your monitors and set resolution, refresh rate, scale, orientation, HDR and color profiles, or mirror one screen onto another.</li>
      <li><strong>A layout per workspace.</strong> Four ways of arranging windows automatically plus a floating mode, and every workspace remembers its own.</li>
      <li><strong>Keyboard shortcuts.</strong> A real editor rather than a printed list — change the ones that ship, add your own, and set them by pressing the keys you want.</li>
      <li><strong>Touchpad gestures.</strong> Choose what each swipe and pinch does, applied the moment you set it.</li>
      <li><strong>Wi-Fi, Bluetooth, sound, power, accounts and services</strong>, each with a proper page instead of a text file.</li>
    </ul>
    <figure>
      <div class="shot">
        <video src="assets/docs/Settings-Tour.mp4" autoplay loop muted playsinline controls preload="metadata" style="width:100%;display:block"></video>
      </div>
      <figcaption>All eighteen pages, one app. Real controls, not a text file.</figcaption>
    </figure>

    <h2>Day to day</h2>
    <ul>
      <li><strong>A ready-made set of apps</strong> — browser, files, editor, calculator, calendar, photos, music, system monitor — each a tick-box during the install, plus a software store with pictures and descriptions for the rest.</li>
      <li><strong>A launcher that finds everything.</strong> Apps, folders, files, quick sums and your clipboard history, all from one search box.</li>
      <li><strong>Zoom out to the whole desktop.</strong> Flick the pointer into the corner and the desktop pulls back into a scrolling map of every workspace — drag windows between them, drop files onto them. Built on <a href="https://github.com/yayuuu/hyprland-scroll-overview">Scroll Overview</a> by <a href="https://github.com/yayuuu">yayuuu</a>.</li>
      <li><strong>Quick settings and notifications</strong> in one panel off the side of the screen.</li>
      <li><strong>Pick up where you left off.</strong> Sign out or restart and your windows reopen on the workspaces they were on. The session is written down as you work, so a crash costs you no more than a tidy sign-out would.</li>
      <li><strong>Move files between your devices.</strong> Send several at once to any phone, tablet, or computer on your network running <a href="https://localsend.org">LocalSend</a>, and receive from them the same way, with live progress and no cloud in the middle. Mainstream builds LocalSend into the desktop rather than bundling the app.</li>
      <li><strong>Auto Mount and Uninstall Apps</strong>, two small apps for the fiddly parts: drives that are ready at every login, and removing software without breaking the desktop.</li>
    </ul>
    <figure>
      <div class="shot">
        <video src="assets/docs/Decorations-Tour.mp4" autoplay loop muted playsinline controls preload="metadata" style="width:100%;display:block"></video>
      </div>
      <figcaption>The Decorations page, top to bottom — window shape, blur, shadow, borders, animations, the system look, fonts, and per-app rules.</figcaption>
    </figure>

    <h2>Getting it installed</h2>
    <ul>
      <li><strong>A graphical installer.</strong> Four ways in — Default Apps, Customize Your Apps, Console Mode and OS Only.</li>
      <li><strong>Dual-boot and encryption.</strong> Install alongside an existing Windows and it joins the start-up menu, or encrypt the whole system behind a passphrase. Both are set up during the install.</li>
      <li><strong>Graphics sorted out for you.</strong> Your card is recognized and given drivers that match it — AMD, Intel or NVIDIA, laptops with two included — based on which model you have rather than just the brand. An experimental legacy edition covers older NVIDIA cards, back to the GeForce 400 series.</li>
      <li><strong>A first-boot welcome</strong> that shows you around and offers one-click installs for the extras you want, including DaVinci Resolve and OBS for anyone making things.</li>
    </ul>
    ${shot('Install_Welcome_Screen.webp','The Mainstream OS installer welcome screen','The installer. Boot from the USB stick, click through it, and you land on the desktop.')}

    <h2>Updates, repair and trust</h2>
    <ul>
      <li><strong>A safety net around every update.</strong> Mainstream saves a restore point before and after any change to your system software, so a bad update is one entry in the start-up menu away from being undone.</li>
      <li><strong>One-click updates.</strong> System software, apps and the desktop all update together from a single button, and a marker on the bar tells you when a new release is out.</li>
      <li><strong>Repair Install.</strong> One button re-runs the desktop setup and rebuilds its parts.</li>
      <li><strong>Signed downloads and software.</strong> Every release is signed with checksums published alongside it, and everything Mainstream adds arrives ready-built and signed — the <a href="#verify">verify page</a> shows how to check yours.</li>
      <li><strong>A self-check after every install</strong> that writes you a health report, so a bad install tells you rather than failing quietly.</li>
    </ul>

    <h2>Get it</h2>
    <p><a href="https://mainstreamos.org/download"><strong>Download Mainstream OS 1.3.2</strong></a> — 2.7&nbsp;GB, for 64-bit PCs. The <a href="#install-iso">install guide</a> walks through every step with pictures, and the <a href="#changelog">changelog</a> lists everything this release changed.</p>

    <h2>Everything that changed</h2>
    <p>This page is what Mainstream is, not what moved in any one release. For that — every version, and the commits behind each one — see the <a href="#changelog">changelog</a>.</p>

    <h2>Join in</h2>
    <p>The community lives on <a href="https://discord.gg/WJ3AUK5Aqd">Discord</a> — help when you need it, showing off when you're pleased with something, and release news first. Development happens in the open on <a href="https://github.com/MainstreamOS">GitHub</a>, and contributions are welcome down to a one-line fix. Translations would help most of all, so Mainstream feels at home beyond English.</p>

    <p style="color:var(--ink-mist);font-size:13.5px;border-top:1px solid var(--line);padding-top:16px;margin-top:28px">Mainstream OS is free and open-source software, licensed GPLv3. The full list of projects it's built with — and the people behind them — lives in Settings &rarr; About and on the <a href="#why-mainstream">Why Mainstream</a> page. Press enquiries: <a href="mailto:mainstreamlinuxos@gmail.com">mainstreamlinuxos@gmail.com</a>.</p>
  `
};

PAGES['donate'] = {
  title: 'Donate',
  icon: 'home',
  navTitle: 'Donate',
  lede: 'Mainstream is free, open-source, and independent. If it earned a place on your machine, you can help keep it going.',
  render: () => `
    <p>This started as a passion project and became something closer to a love letter to the Linux community. It grew into a whole operating system — installer, signed package repo, gaming and creator modes, snapshot rollback, a real settings panel for everything — built and maintained in the open.</p>
    <p>Sponsorship is what keeps it moving. It pays for hardware to test on and the hours behind new features, polish, and keeping everything working across Arch's rolling updates. Even a small amount makes a direct difference to how fast Mainstream gets better.</p>

    <h2>Ways to help</h2>
    <div class="props">
      <div class="prop"><center><div class="k">GitHub Sponsors</div></center><div class="v">Monthly or one-time, at any amount — the simplest way to back ongoing work.</div></div>
      <div class="prop"><center><div class="k">Contribute</div></center><div class="v">Code, docs, translations, bug reports, or just telling a friend — all of it counts, and none of it costs a thing.</div></div>
    </div>

    <div class="cta-row" style="margin-top:6px">
      <a class="btn stream" href="https://github.com/sponsors/MainstreamOS">Donate / Sponsor on GitHub</a>
      <a class="btn ghost" href="https://github.com/MainstreamOS/dots-hyprland">Contribute on GitHub →</a>
    </div>

    ${callout('note','Thank you','<p>Whether you sponsor, contribute, or just use it and tell someone — thank you for helping make Linux mainstream.</p>')}
  `
};

PAGES['privacy'] = {
  title: 'Privacy Policy',
  icon: 'lock',
  navTitle: 'Privacy Policy',
  lede: 'No telemetry, no data collection, no age verification — foundational commitments, in plain terms.',
  render: () => `
    <p style="color:var(--ink-mist);font-size:14px;margin:-6px 0 4px">Effective April 20, 2026 &middot; Last updated April 20, 2026</p>

    <h2>1. Introduction</h2>
    <p>This Privacy Policy describes the data practices of <strong>Mainstream OS</strong>, a custom Arch Linux-based operating system distribution (hereinafter referred to as "Mainstream OS," "the OS," "the Distribution," or "the Software"). By downloading, installing, or using Mainstream OS, you acknowledge that you have read and understood this policy.</p>
    <p>Mainstream OS is built on the Arch Linux framework and is released as free and open-source software. Transparency, user freedom, and respect for privacy are foundational principles of this project.</p>

    <h2>2. No Telemetry</h2>
    <p><strong>This Software collects absolutely no telemetry of any kind.</strong></p>
    <ul>
      <li>No usage statistics are gathered, transmitted, or stored.</li>
      <li>No crash reports are automatically sent to any server or third party.</li>
      <li>No system diagnostics, hardware identifiers, or performance metrics are ever transmitted off-device.</li>
      <li>No background processes exist for the purpose of monitoring, reporting, or profiling user activity.</li>
      <li>No analytics frameworks, tracking SDKs, or data collection libraries have been included in this Distribution.</li>
    </ul>
    <p>Your computing activity remains entirely on your device. Nothing about how you use this Software is ever observed, recorded, or reported by the Distribution or its maintainers.</p>

    <h2>3. No Personal Information Collected, Stored, or Sold</h2>
    <p><strong>The Distribution does not collect, store, process, or sell any personal information.</strong></p>
    <p>This includes, but is not limited to:</p>
    <ul>
      <li>Full name, username, or any form of identity</li>
      <li>Email address or any contact information</li>
      <li>IP addresses or network identifiers</li>
      <li>Device identifiers, MAC addresses, or hardware fingerprints</li>
      <li>Location data of any kind</li>
      <li>Browsing history, application usage, or file access patterns</li>
      <li>Biometric data</li>
      <li>Financial or payment information</li>
    </ul>
    <p>Because no data is collected, there is nothing to sell, share, license, or transfer to any third party — commercial, governmental, or otherwise. <strong>We do not sell your data. We do not have your data.</strong></p>

    <h2>4. Third-Party Software and Repositories</h2>
    <p>This Distribution may provide access to third-party package repositories, software, or services (including but not limited to the Arch User Repository (AUR), Pacman mirrors, or optionally installed applications). This Privacy Policy applies solely to the Distribution itself.</p>
    <p>Third-party software installed by the user is governed by its own respective privacy policies and licenses. Users are encouraged to review the privacy practices of any software they choose to install.</p>

    <h2>5. No Age Verification</h2>
    <p><strong>This Distribution does not implement, enforce, or support age verification of any kind.</strong></p>
    <p>We believe age verification requirements are incompatible with the principles of open-source software, user anonymity, and digital privacy. Implementing such mechanisms would require the collection and processing of personal identity data, which directly contradicts the privacy commitments outlined in this policy.</p>

    <h2>6. Jurisdictional Disclaimer — Age Verification and Mandatory Data Collection Laws</h2>
    <p>Certain states, provinces, countries, or other jurisdictions have enacted or may enact legislation that requires software providers to implement age verification systems, collect user identity information, or comply with data reporting mandates as a condition of lawful use.</p>
    <p><strong>If you are located in a jurisdiction that legally mandates age verification, identity collection, or any form of compulsory data gathering from software providers or their users, you are advised not to use this Software in that jurisdiction.</strong></p>
    <p>This Distribution will not alter its core privacy commitments to comply with such mandates. The maintainers of this Distribution do not accept liability for any user's non-compliance with the laws of their local jurisdiction. It is solely the responsibility of the user to determine whether use of this Software is lawful in their region.</p>
    <p>By using this Software, you represent that you are not subject to any law or regulation that would require this Distribution to collect personal data, implement age verification, or report user activity to any authority.</p>

    <h2>7. Open Source and Code Transparency</h2>
    <p>This Distribution is open source. All source code, build scripts, and configuration files are available for public review. Users, security researchers, and auditors are encouraged to inspect the codebase to independently verify the absence of telemetry, trackers, or data collection mechanisms.</p>
    <p>Any contributions to this project that introduce telemetry, tracking, or data collection in any form will not be accepted.</p>

    <h2>8. Network Activity</h2>
    <p>The Software may make outbound network connections for legitimate system functions, including:</p>
    <ul>
      <li><strong>Package manager updates (Pacman/AUR):</strong> Connecting to configured mirror servers to download package metadata and software updates. These connections are initiated solely by the user and are standard to all Arch-based systems.</li>
      <li><strong>DNS resolution:</strong> Standard name resolution performed by the system or user-configured resolver.</li>
      <li><strong>NTP time synchronization:</strong> Connecting to time servers to synchronize the system clock.</li>
    </ul>
    <p>None of these connections are used to transmit personal information or usage data. Users may configure or disable any of these services at their discretion.</p>

    <h2>9. Security</h2>
    <p>Because no personal data is collected or stored by the Distribution, there is no central database of user information that could be breached, leaked, or misused. User data stays on the user's own hardware, subject to the security practices of the user themselves.</p>
    <p>Users are responsible for securing their own installations, including disk encryption, firewall configuration, and safe software practices.</p>

    <h2>10. Changes to This Policy</h2>
    <p>Any future changes to this Privacy Policy will be published with an updated effective date. Continued use of the Software following the publication of changes constitutes acceptance of those changes. However, the core commitments — <strong>no telemetry, no data collection, no age verification</strong> — are considered foundational and will not be removed or weakened in future versions of this policy.</p>

    <h2>11. Contact</h2>
    <p>For questions, concerns, or to report a potential privacy issue, please open an issue on the <a href="https://github.com/MainstreamOS/dots-hyprland/issues">official project repository</a> or contact the project maintainers through the designated community channels.</p>

    <h2>12. Governing Principles</h2>
    <p>This Privacy Policy is guided by the following principles:</p>
    <ul>
      <li><strong>Freedom:</strong> Users have the right to compute privately and without surveillance.</li>
      <li><strong>Transparency:</strong> Everything about this Distribution is open to public scrutiny.</li>
      <li><strong>Minimalism:</strong> The best data policy is to collect no data at all.</li>
      <li><strong>Sovereignty:</strong> Users own their data. We never touch it.</li>
    </ul>

    <p style="color:var(--ink-mist);font-style:italic;font-size:13.5px;border-top:1px solid var(--line);padding-top:16px;margin-top:28px">This Privacy Policy was written for Mainstream OS, a custom Arch Linux-based distribution, and is provided as a good-faith commitment to user privacy. It is not legal advice. Users should consult qualified legal counsel for jurisdiction-specific compliance questions.</p>
  `
};
