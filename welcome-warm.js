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
        <figure class="hero-shot"><img src="assets/docs/Main-Desktop-UI.webp" alt="The Mainstream desktop — bar on top, dock below, and the wallpaper clock between"></figure>
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
    <p>The distro is everything a dotfiles repo can't be — a graphical installer with five paths, a post-install self-check that runs 19 tests and writes you a health report, a signed package repo (no AUR-compile roulette), one-click rollback with a snapshot before every update, GPU auto-config across AMD, Intel, and five NVIDIA generations, and a real settings panel for everything. Credit and the maintainers' own donate links are built into the About page, and fixes go back upstream as pull requests, not private patches.</p>

    <h2>Who it's for</h2>
    <p>People who want a computer that respects them — enthusiasts who want Arch without the babysitting, creators who need their tools to just work, and the family members they set up and would rather not get a support call about. For every home.</p>

    <h2>Who builds it</h2>
    <p>Mainstream is built by Gregory Martin. In the early Android ROM scene I went by blackdroid — I made Ultimate Droid starting with the original Motorola Droid, and later Codename Android in the Galaxy Nexus era. Mainstream is that same passion and obsession pointed at the Linux desktop. Those years also taught me — some of it the hard way — how to hear what people are missing and build it.</p>
    <p>The goal is bigger than one distro: I want the Linux desktop to genuinely go mainstream — a first choice anyone can live on, not an alternative — and I want the projects Mainstream stands on to rise with it. If Mainstream earns attention, the people whose work it builds on should feel it too. Let's make Linux mainstream.</p>

    <h2>How you can help</h2>
    <p>Two things would genuinely help:</p>
    <ul>
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
  lede: 'Release announcements, project updates, and write-ups on how Mainstream works — straight from the maintainer.',
  render: () => `
    <div class="eyebrow">Release &middot; July 20, 2026</div>
    <h2 id="mainstream-os-1-0-2">Mainstream OS 1.0.2 — brings support for Hyprland 0.56</h2>

    <p>Hyprland (the software that controls your desktop's windows and visuals) just released a major update, version 0.56. It's a big enough change that most people using it would normally notice something breaking. This new version of Mainstream OS handles all of that for you — whether you're updating an existing system or installing fresh.</p>

    <div class="ribbon"></div>

    <div class="eyebrow">Release &middot; July 19, 2026</div>
    <h2 id="mainstream-os-1-0-1">Mainstream OS 1.0.1 — first-class virtual machines</h2>

    <p>1.0.1 is a small, fast follow-up to 1.0.0, focused on one thing: making Mainstream a first-class citizen inside virtual machines. Trying a distro in a VM is how most people meet it, so that first boot should be just as polished as the real-hardware one.</p>

    <ul>
      <li><strong>Boots in BIOS virtual machines.</strong> VirtualBox and QEMU create BIOS-firmware machines by default, and 1.0.0 assumed UEFI. The live ISO and installed systems now boot under BIOS with nothing to configure — BIOS installs carry a small FAT32 <code>/boot</code> partition, while UEFI installs are unchanged.</li>
      <li><strong>Guest tools included — and tidy.</strong> VMs get the agents for QEMU/KVM, VirtualBox, and VMware out of the box: clipboard sharing, host integration, clean shutdown, each active only under its own hypervisor. Installs on real hardware keep none of them.</li>
      <li><strong>A boot menu that gets out of the way.</strong> The Limine menu now auto-boots reliably and shows snapshot entries on BIOS systems too.</li>
      <li><strong>A smarter installer notice.</strong> On a wired connection the Welcome screen now says you\'re ready to install instead of asking for Wi-Fi.</li>
    </ul>

    <p>As always, images are GPG-signed with checksums published alongside — the <a href="#verify">verify page</a> shows how to check yours in thirty seconds. 1.0.0 remains published unchanged; releases are immutable here.</p>

    <div class="ribbon"></div>

    <div class="eyebrow">Release &middot; July 18, 2026</div>
    <h2 id="mainstream-os-1-0-0">Mainstream OS 1.0.0 is here</h2>

    <p>Mainstream OS 1.0.0 is an Arch-based Linux distribution that pairs a full Hyprland desktop with the polish of macOS — and nothing in it needs a terminal. Flash the ISO, click through the installer, and about eight minutes later you're on a desktop that themes itself to your wallpaper, backs itself up before every update, and turns into a game console on one keypress. This is the first stable release.</p>

    <p>Mainstream ships end-4's <a href="https://github.com/end-4/dots-hyprland">illogical-impulse</a> shell the way Ubuntu ships GNOME — heavily modified, openly credited, continuously merged from upstream, and one component of a full operating system. The people whose work Mainstream stands on are credited in Settings &rarr; About with links to sponsor them, and fixes go back upstream as pull requests.</p>

    ${shot('Main-Desktop-UI.webp','The Mainstream OS desktop — bar on top, dock below, wallpaper clock between','The 1.0.0 desktop. Everything you see recolors from whatever wallpaper you pick.')}

    <h2>One wallpaper, a whole look</h2>
    <p>Pick any wallpaper — a photo, a render, even a video — and the entire desktop recolors to match: the bar, the dock, the apps, the terminal, even your login screen. Save the result as a named theme, switch between saved themes in one tap, or pair a Day and Night theme that follow the clock.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/ThemesConfig-theme-switching-example-video.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Switching saved themes — wallpaper, colors, and decorations change together, in one click.</figcaption>
    </figure>

    <h2>A desktop and a console, in one install</h2>
    <p><code>SUPER</code> + <code>G</code> swaps the desktop for the same full-screen Big Picture session a Steam Deck boots into — a real gamescope session, not a fullscreen window — and one click brings the desktop back, exactly as you left it. Prefer the couch full-time? The installer's <strong>Console Mode</strong> boots straight into it.</p>
    ${shot('Gaming-Big-Picture.webp','Steam Big Picture running as the Mainstream Gaming Mode session','Gaming Mode — AMD and NVIDIA, Proton GE pre-enabled.')}

    <h2>A map of everything you're doing</h2>
    <p>Flick the cursor into the corner and the desktop zooms out into a scrolling map of every workspace. Drag windows between them, drop files onto them, and glide across the whole thing in one motion — combined with the scrolling layout, it's the fastest way to get around the OS.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Hotcorner-Scrolling-Overview.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Gliding across workspaces in the scrolling overview.</figcaption>
    </figure>

    <h2>Every setting, one app</h2>
    <p>Seventeen pages cover the whole machine — displays and layouts, keybinds and gestures, drives, updates, recovery — and every one is a real panel with real controls, never a config file. Snapshots keep experimenting safe.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Settings-Tour.mp4" autoplay loop muted playsinline controls preload="metadata" style="width:100%;display:block"></video>
      </div>
      <figcaption>Quick, Wi-Fi, Bluetooth, Bar, Interface, Background, Themes, Display, Layouts, Keybinds, Mouse, Power, Accounts, Services, Update, Recovery, About — one app.</figcaption>
    </figure>

    <h2>What makes it a distro</h2>
    <p>Everything here is in the box and checkable, not on a roadmap:</p>
    <ul>
      <li><strong>A real settings app for everything</strong> — displays, layouts, keybinds, gestures, drives, updates, recovery. A settings panel, not a config file.</li>
      <li><strong>A graphical installer with five paths</strong> — including install-alongside-Windows dual-boot and one-tick full-disk encryption.</li>
      <li><strong>GPU auto-configuration</strong> — AMD, Intel, and five NVIDIA driver generations, detected and configured at install.</li>
      <li><strong>Install self-verification</strong> — 19 checks run on the finished system and write a health report, so a bad install tells you instead of failing silently.</li>
      <li><strong>Updates with a safety net</strong> — a Btrfs snapshot before every update, and one-click rollback from the boot menu and Settings.</li>
      <li><strong>Made with creators in mind</strong> — one-click installs for OBS and DaVinci Resolve, with GPU encoding on Wayland.</li>
    </ul>

    <h2>Get it</h2>
    <p><a href="https://mainstreamos.org/download"><strong>Download Mainstream OS 1.0.0</strong></a> (x86_64 &middot; 2.7&nbsp;GB), flash it to a USB drive, and boot. The <a href="#install-iso">install guide</a> walks every step, and an <a href="#install-script">install script</a> can dress a fresh Arch install instead. Checksums and signatures for every release live on the <a href="https://sourceforge.net/projects/mainstreamos/files/">downloads page</a>.</p>

    <h2>Verify your download</h2>
    <p>Every Mainstream ISO is GPG-signed. Verifying takes about 30 seconds and proves the image genuinely came from us and wasn't tampered with in transit.</p>
    <pre><code># 1. Fetch the Mainstream signing key
curl -O https://mainstreamos.org/mainstream.pub

# 2. Check its fingerprint BEFORE trusting it — it must be exactly:
#    D644 BEB9 C1B7 668E 3A6C  16DA 8D56 7345 B265 848E
gpg --show-keys mainstream.pub

# 3. Import it, then verify the ISO against its signature
gpg --import mainstream.pub
gpg --verify mainstream-1.0.0.iso.sig mainstream-1.0.0.iso

# 4. (optional) Confirm the download wasn't corrupted
sha256sum -c mainstream-1.0.0.iso.sha256</code></pre>
    <p>A good result shows <strong>Good signature from "MainstreamOS Packages"</strong>. You'll also see a warning that the key "is not certified with a trusted signature" — that's expected; it only means you haven't personally marked the key as trusted. What matters is that the fingerprint matches the one above and the signature reads <em>Good</em>.</p>

    <h2>Built to outlast any one person</h2>
    <p>Mainstream is a solo project, and you deserve a straight answer about what that means. Underneath, it's standard Arch — your system updates from Arch's mirrors no matter what happens to Mainstream. The package repo's build scripts are public, the ISO builder is public, and nothing stops you from ejecting to vanilla Arch. You're never locked in.</p>

    <h2>Join in</h2>
    <p>The community lives on <a href="https://discord.gg/WJ3AUK5Aqd">Discord</a> — help when you need it, showcases when you're proud, and release news first. Development happens in the open on <a href="https://github.com/MainstreamOS">GitHub</a>. Two things would genuinely help: <strong>translations</strong> (Mainstream should feel native beyond English) and <strong>honest feedback</strong> — if a decision looks off, say so.</p>

    ${callout('tip','See it for yourself','<p>The fastest way to get it is to look around. Start with <a href="#desktop">The Desktop</a>, or <a href="https://mainstreamos.org/download">download the ISO</a> and try it live before you install.</p>')}

    <p style="color:var(--ink-mist);font-size:13.5px;border-top:1px solid var(--line);padding-top:16px;margin-top:28px">Mainstream OS is free and open-source software, licensed GPLv3. The full list of projects it builds on — with sponsor links — lives in Settings &rarr; About and on the <a href="#why-mainstream">Why Mainstream</a> page.</p>
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
