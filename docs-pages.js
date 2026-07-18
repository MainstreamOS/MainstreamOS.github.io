// ========================================================
// Mainstream docs — page registry
// Each page: { id, group, title, lede, icon (svg path or 'name'), body: HTML string }
// ========================================================

// tiny helpers for inline SVG icons (sidebar + cards)
const I = {
  home:    '<path d="M3 12 12 4l9 8"/><path d="M5 10v10h14V10"/>',
  rocket:  '<path d="M5 13c0-5 6-10 14-10 0 8-5 14-10 14l-4-4Z"/><path d="M9 16l-4 4"/><circle cx="15" cy="9" r="1.5"/>',
  disc:    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
  sliders: '<line x1="4" y1="7" x2="20" y2="7"/><circle cx="9" cy="7" r="2"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="15" cy="17" r="2"/>',
  wrench:  '<path d="M20 7a5 5 0 0 1-6.6 4.7L7 18a2.1 2.1 0 0 1-3-3l6.3-6.3A5 5 0 0 1 16 2l-2.8 2.8 2.5 2.5L18.5 4.5A5 5 0 0 1 20 7Z"/>',
  wifi:    '<path d="M5 12a11 11 0 0 1 14 0"/><path d="M8.5 15a6 6 0 0 1 7 0"/><circle cx="12" cy="18" r="1"/>',
  bluetooth:'<path d="M8 6l8 6-4 3v-12l4 3-8 6"/>',
  bar:     '<rect x="3" y="5" width="18" height="3" rx="1"/><rect x="3" y="13" width="10" height="8" rx="1.5"/><rect x="15" y="13" width="6" height="8" rx="1.5"/>',
  iface:   '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/>',
  bg:      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 14l5-4 4 3 4-5 5 5"/>',
  themes:  '<path d="M12 3a9 9 0 0 0 0 18c5 0 4-4 6-5s3-3 3-5a9 9 0 0 0-9-8Z"/><circle cx="7" cy="10" r="1"/><circle cx="10" cy="6.5" r="1"/><circle cx="15" cy="6.5" r="1"/>',
  display: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/>',
  layout:  '<rect x="3" y="3" width="7" height="18" rx="1.5"/><rect x="12" y="3" width="9" height="8" rx="1.5"/><rect x="12" y="13" width="9" height="8" rx="1.5"/>',
  mouse:   '<rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/>',
  power:   '<path d="M7 8a7 7 0 1 0 10 0"/><path d="M12 3v9"/>',
  user:    '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',
  gear:    '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
  update:  '<path d="M3 12a9 9 0 0 1 15-6l3-3v6h-6"/><path d="M21 12a9 9 0 0 1-15 6l-3 3v-6h6"/>',
  recover: '<path d="M9 3h6l1 4-2 2h-4l-2-2 1-4Z"/><path d="M8 10v11h8V10"/><path d="M10 14h4M10 17h4"/>',
  quick:   '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  overview:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
  limine:  '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 9h3M7 12h6M7 15h4"/>',
  film:    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M3 16h18M8 4v16M16 4v16"/>',
  cam:     '<rect x="3" y="6" width="14" height="12" rx="2"/><path d="M17 10l4-2v8l-4-2"/>',
  game:    '<rect x="2" y="7" width="20" height="10" rx="4"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1.5"/><path d="M6 10v4M4 12h4"/>',
  book:    '<path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4Z"/><path d="M4 4a4 4 0 0 1 4 4v12"/>',
  dock:    '<rect x="2" y="13" width="20" height="7" rx="3"/><circle cx="7" cy="16.5" r="1"/><circle cx="12" cy="16.5" r="1"/><circle cx="17" cy="16.5" r="1"/>',
  keyboard:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12"/>',
  info:    '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  shield:  '<path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  sidebar: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M15 4v16"/>',
  send:    '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/>',
};

const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${I[name] || I.disc}</svg>`;

// Shot helper
const shot = (src, alt, cap) => `
  <figure>
    <div class="shot">
      <img src="assets/docs/${src}" alt="${alt}"/>
    </div>
    ${cap ? `<figcaption>${cap}</figcaption>` : ''}
  </figure>`;

const twoShot = (a, ac, b, bc) => `
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:1000px;margin:0 0 32px">
    <figure style="margin:0"><div class="shot"><img src="assets/docs/${a}" alt=""/></div>${ac ? `<figcaption>${ac}</figcaption>` : ''}</figure>
    <figure style="margin:0"><div class="shot"><img src="assets/docs/${b}" alt=""/></div>${bc ? `<figcaption>${bc}</figcaption>` : ''}</figure>
  </div>`;

const callout = (kind, title, body) => `
  <div class="callout ${kind}">
    <div class="ic">${ kind==='note'?'i':kind==='tip'?'✓':kind==='warn'?'!':'✦'}</div>
    <div class="callout-body">
      <div class="callout-title">${title}</div>
      ${body}
    </div>
  </div>`;

// ========================================================
// PAGES
// ========================================================

const PAGES = {};

// ---------- HOME ----------
PAGES.home = {
  group: 'Start here',
  title: 'Mainstream',
  icon: 'home',
  navTitle: 'Welcome',
  render: () => `
    <div class="home-hero">
      <div class="left">
        <div class="eye">Mainstream Docs · 1.0.0</div>
        <h1>A desktop that <em>flows</em> with you.</h1>
        <p class="sub">Everything you need to install, configure, and live inside Mainstream — the Arch-based Hyprland distribution built for every home. Set it up once, tune it any time.</p>
        <div class="cta-row">
          <a class="btn stream" href="#install-iso">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12"/><path d="m6 10 6 6 6-6"/><path d="M4 21h16"/></svg>
            Install Mainstream
          </a>
          <a class="btn ghost" href="#quick">Open settings tour</a>
        </div>
      </div>
      <div class="right">
        <div class="hero-pill"><div class="ic">${icon('disc')}</div><div><b>Bootable ISO</b><span>Flash it, boot it, done — no prior Linux knowledge required.</span></div></div>
        <div class="hero-pill"><div class="ic">${icon('rocket')}</div><div><b>One-line script install</b><span>Onto any fresh Arch system in under 10 minutes.</span></div></div>
        <div class="hero-pill"><div class="ic">${icon('recover')}</div><div><b>Snapshot-protected updates</b><span>Every update is a Btrfs snapshot. Roll back from Limine at any time.</span></div></div>
      </div>
    </div>

    <div class="sec-lbl"><h3>Get started</h3></div>
    <div class="card-grid">
      ${card('install-iso','Install from ISO','disc','Download the live image, flash to USB, boot and click through.', true)}
      ${card('install-script','Install via script','rocket', 'Run one command on any fresh Arch install. Takes ~10 minutes.', true)}
      ${card('quick','Quick settings','quick','The first place to go: wallpaper, colors, bar position, and theme mode.')}
    </div>

    <div class="sec-lbl"><h3>The desktop</h3><a href="#desktop">Take the tour →</a></div>
    <div class="card-grid">
      ${card('desktop','The Desktop','iface','The bar, the dock, and title bars — the pieces you live with every day.', true)}
      ${card('overview-launcher','Overview & Launcher','overview','A zoomed-out map of every workspace and a launcher that finds everything.')}
      ${card('sidebars','Sidebars','sidebar','Intelligence on the left; toggles, notifications, and calendar on the right.')}
      ${card('sharing','Sharing','send','Send and receive files with any device on your network — no cloud.')}
      ${card('desktop-apps','Desktop Apps','dock','Auto Drive Mount and Uninstall Apps: system chores without a terminal.')}
    </div>

    <div class="sec-lbl"><h3>Settings reference</h3><a href="#quick">Open settings →</a></div>
    <div class="card-grid">
      ${card('bar','Bar',           'bar',    'Position, pills, workspaces, weather, tray.')}
      ${card('interface','Interface','iface',  'Decorations, dock, sidebars, fonts, lock screen.')}
      ${card('background','Background','bg',   'Wallpaper panning, clock widget, weather widget.')}
      ${card('themes','Themes',     'themes',  'Snapshot your current look and switch between saved themes.')}
      ${card('display','Display',   'display', 'Arrangement, modes, scale, HDR, color management.')}
      ${card('layouts','Layouts',   'layout',  'Dwindle, Master, Scrolling, Monocle, Float — per workspace.')}
      ${card('mouse','Mouse',       'mouse',   'Pointer speed, acceleration, scroll direction.')}
      ${card('power','Power',       'power',   'Power modes, suspend, battery thresholds.')}
      ${card('accounts','Accounts', 'user',    'Users, avatars, shared app settings.')}
      ${card('services','Services', 'gear',    'Language, music recognition, save paths.')}
      ${card('update','Update',     'update',  'System updates with automatic safety snapshots.')}
      ${card('recovery','Recovery', 'recover', 'Rollbacks from Limine and manual restore.')}
      ${card('security','Security', 'shield',  'Why the AUR is off by default, and the signed [mainstream] repo that replaces it.')}
    </div>

    <div class="sec-lbl"><h3>Creative & play</h3></div>
    <div class="card-grid">
      ${card('davinci','Set up DaVinci Resolve','film','GPU + OpenCL setup, AV1 hardware encode, and render presets for Resolve Studio.')}
      ${card('obs','Set up OBS','cam','Native bundle: Wayland game capture, a virtual camera, and GPU encoding.')}
      ${card('gaming','Set up Gaming','game','Steam + Proton, GameMode, controllers, Vulkan drivers, and VRR.')}
    </div>
  `
};

function card(id, title, ic, desc, featured=false) {
  return `<a class="doc-card" href="#${id}"${featured?' data-featured="true"':''}>
    <div class="ic">${icon(ic)}</div>
    <h4>${title}</h4>
    <p>${desc}</p>
  </a>`;
}

// ---------- INSTALL: SCRIPT ----------
PAGES['install-script'] = {
  group: 'Installation', title: 'Install via script', icon: 'rocket',
  navTitle: 'Script',
  lede: 'The Arch-native path: turn any fresh Arch install into Mainstream with a single command. Recommended for anyone comfortable bringing up base Arch.',
  render: () => `
    ${shot('Mainstream_OS_Script_Install.webp', 'The Mainstream installer running in a terminal', 'The one-command installer runs three idempotent steps — dependencies, permissions and services, then config files.')}
    <h2>Before you begin</h2>
    <p>You should have a working Arch Linux install with a user account, <code>sudo</code> access, and an internet connection. Mainstream installs Hyprland, Quickshell, GPU drivers (detected automatically for your hardware), and everything else on top.</p>

    ${callout('info','Fresh install or existing Arch?', '<p>The script is idempotent and safe to rerun, but we strongly recommend running it on a <strong>fresh Arch install</strong> the first time. If you already have Hyprland configured, the installer backs up clashing configs to <code>~/original-dots-backup</code> automatically before replacing them.</p>')}

    <h2>One-line install</h2>
    <p>Open a terminal and run:</p>
<pre><code><span class="c"># Clone and run the Mainstream installer</span>
<span class="k">bash</span> &lt;(<span class="k">curl</span> -fsSL https://mainstreamos.org/install.sh)</code></pre>

    <p>Or clone it manually if you'd rather read the script first:</p>
<pre><code><span class="k">git</span> clone --branch mainstream \\
    https://github.com/MainstreamOS/dots-hyprland.git
<span class="k">cd</span> dots-hyprland
./setup install</code></pre>

    <h2>Install options</h2>
    <p>Add any of these flags after <code>./setup install</code> to change how — and what — the installer sets up. To use them with the one-line command, put them after a <code>--</code> separator. Run <code>./setup install -h</code> for the full list.</p>
    <ul>
      <li><code>--os-only</code> — installs just the Mainstream desktop and <strong>skips the bundled default apps</strong> (the Mainstream extras). Mirrors the ISO's "OS Only" method and never removes packages you already installed — pick this to bring your own browser, editor, and utilities.</li>
      <li><code>--console</code> — the <strong>gaming / console install</strong>: adds Steam and the 32-bit gaming stack, <strong>boots straight into the Steam gamescope session</strong>, and pre-fetches the Steam Deck client so the first launch is instant. Mirrors the ISO's "Console" method.</li>
      <li><code>--verbose</code> — runs the installer in <strong>interactive mode</strong> instead of the default clean visual view: it asks <em>"confirm every command before it runs?"</em>, then lets you approve each step. Handy for auditing exactly what runs, or for troubleshooting a step that failed.</li>
    </ul>
<pre><code><span class="c"># all optional — plain ./setup install is the full desktop</span>
./setup install --os-only
./setup install --console
./setup install --verbose

<span class="c"># with the one-liner, flags go after "--"</span>
<span class="k">bash</span> &lt;(<span class="k">curl</span> -fsSL https://mainstreamos.org/install.sh) -- --console</code></pre>

    <p>Whichever method you pick, the installer echoes it back in its headers — e.g. <strong>Mainstream installer · --console</strong> — so you can confirm at a glance that the right one is running.</p>

    <h2>What the script does</h2>
    <ol>
      <li>Enables the signed <code>[mainstream]</code> package repository.</li>
      <li>Installs the Hyprland + Quickshell desktop stack.</li>
      <li>Detects your GPU and installs the right drivers — AMD, Intel, or NVIDIA, including the legacy branch for older cards.</li>
      <li>Enables the Bluetooth, network discovery (Avahi), CUPS printing, and audio services.</li>
      <li>On qualifying systems (UEFI + Btrfs) replaces the bootloader with Limine and configures Snapper — automatic snapshots before every update, restorable from the boot menu. In <code>--verbose</code> mode you're asked before this step.</li>
      <li>Replaces your configs with the Mainstream dotfiles (clashing files are backed up to <code>~/original-dots-backup/</code> first).</li>
    </ol>

    <h2>Reboot and go</h2>
    <p>When the script finishes, reboot. You'll land on the Mainstream login screen. Pick your user, enter your password, and the desktop will be ready.</p>

    ${callout('tip','Troubleshooting', '<p>If your screen is black after reboot, switch to a TTY with <code>Ctrl</code>+<code>Alt</code>+<code>F2</code> and check <code>journalctl -xb</code>.</p>')}

    <h2>First boot</h2>
    <p>On first boot the <strong>Welcome</strong> app opens and does three jobs. First, it offers a few quick options to get your desktop personalized and shares some info about the OS. Next, a page gives you one-click installs for some of the most wanted — but normally more involved — user experiences: Gaming, Video Editing, and Content Creation. Then a short tour teaches you how to use the desktop with little practice exercises: switching workspaces, using the dock and app drawer, dragging apps and files between workspaces, and where Files, Settings, and the App Store live.</p>
    <p>All of it is skippable and nothing is final: every choice lives in <a href="#quick">Settings</a> too, and you can reopen the tour any time from the app grid.</p>

    <h2>Changing graphics cards</h2>
    <p>If you swap in a different graphics card later, run <code>gpu-drivers</code> from a terminal — it re-detects the GPU and installs the matching drivers, no password needed. Reboot afterward.</p>

    <h2>Updating later</h2>
    <p>After install, all updates go through <strong>Settings → Update</strong> or <code>sudo mainstream-update-helper</code> from a terminal. You never need to run the installer again.</p>
  `
};

// ---------- INSTALL: ISO ----------
PAGES['install-iso'] = {
  group: 'Installation', title: 'Install from ISO', icon: 'disc',
  navTitle: 'ISO',
  lede: 'No Linux experience required. Download the Mainstream live image, flash it to a USB stick, and the installer walks you through disk setup, user creation, and first boot.',
  render: () => `
    ${shot('Install_Welcome_Screen.webp','Mainstream installer welcome screen','The Mainstream installer. The sidebar is the whole journey — Welcome, Location, Keyboard, Partitions, Users, Get Started, Apps, then a Summary before anything touches your disk.')}

    <h2>Download</h2>
    <p>Grab the latest ISO from <a href="https://mainstreamos.org/download" style="color:var(--stream-a);text-decoration:underline">mainstreamos.org/download</a>. Every image is signed — <a href="#verify" style="color:var(--stream-a);text-decoration:underline">verifying your download</a> takes about thirty seconds and proves it\'s exactly what we published.</p>

    <table class="t">
      <thead><tr><th>Image</th><th>Size</th><th>Best for</th></tr></thead>
      <tbody>
        <tr><td><b>mainstream-1.0.0.iso</b></td><td>2.7 GB</td><td>Most modern laptops &amp; desktops</td></tr>
        <tr><td><b>mainstream-nvidia-1.0.0.iso</b></td><td>3.7 GB</td><td>NVIDIA GTX 10-series and older (experimental support)</td></tr>
      </tbody>
    </table>

    ${callout('note','All versions & checksums','<p>Looking for a specific release, the NVIDIA edition, or the <code>.sha256</code> and signature files? Browse <a href="https://sourceforge.net/projects/mainstreamos/files/" style="color:var(--stream-a);text-decoration:underline">every download on SourceForge</a>.</p>')}

    <h2>Flash to USB</h2>
    <p>Flash the downloaded ISO file to a USB stick. Any USB stick 4 GB or larger works.</p>
    <p>A few apps you can use to do this:</p>
    <ul>
      <li><a href="https://etcher.balena.io" style="color:var(--stream-a);text-decoration:underline">balenaEtcher</a> (recommended) or <a href="https://unetbootin.github.io" style="color:var(--stream-a);text-decoration:underline">UNetbootin</a> — <strong>both work on any platform<br/>(Linux, macOS, or Windows)</strong></li>
      <li><strong>Other Linux options</strong>: Impression, GNOME Disks, or Ventoy</li>
      <li><strong>Other Windows options</strong>: Rufus in DD mode, or Ventoy</li>
    </ul>

    <h2>Boot the installer</h2>
    <p>Plug the USB into the target machine and boot it (you may need to press <code>F12</code>, <code>F2</code>, or <code>Del</code> to pick the boot device). On the Limine menu select <strong>Mainstream Live</strong>, wait for the desktop. A Welcome app appears where you can set your resolution and monitor scale, and connect to Wi-Fi if you aren't on Ethernet. Once you've applied your settings, click <strong>Start install</strong>.</p>

    <h2>Installer walkthrough</h2>
    <p>The welcome screen picks your language — and keeps support, known issues, and release notes one click away. From there the sidebar walks you through every step in order, and nothing is written to disk until you approve the final Summary:</p>
    <ol>
      <li><b>Location &amp; Keyboard</b> — timezone, region formats, and keyboard layout.</li>
      <li><b>Partitions</b> — pick where Mainstream lives (details below).</li>
      <li><b>Users</b> — create your account and computer name. This user gets administrator rights.</li>
      <li><b>Get Started &amp; Apps</b> — choose the kind of system you want (details below).</li>
      <li><b>Summary &rarr; Install</b> — one review screen, then it runs on its own: ~8 minutes on an SSD to copy the system, set up the bootloader with snapshot support, and reboot. <br/>(Setup can take much longer if you choose to install a lot of apps during a custom install.)</li>
    </ol>

    <h3>Pick where Mainstream lives</h3>
    ${shot('Installer_Partitions_Screen.webp','Partitions step of the installer','Three ways in — shrink another OS and install alongside it, replace a single partition, or erase the whole disk. The Current/After bars preview exactly what will change before you commit.')}
    <p>Keeping Windows or another Linux? <strong>Install alongside</strong> shrinks it to make room and both systems appear in the boot menu. Dedicating the machine? <strong>Erase disk</strong> takes it all. Tick <strong>Encrypt system</strong> and the whole install is protected with a passphrase you enter at boot. Either way Mainstream lands on Btrfs, which is what makes the <a href="#recovery">snapshot rollbacks</a> recovery system work out of the box.</p>

    <h3>Choose the kind of system you want</h3>
    ${shot('Installer_Installation_Method_Screen.webp','Get Started step of the installer','Four setups, one click. Default Apps is the right answer for most people — and every choice can be changed later.')}
    <div class="props">
      <div class="prop"><center><div class="k">Default Apps</div></center><div class="v">Everything needed for a complete desktop, ready out of the box. Ideal for new Linux users and family computers.</div></div>
      <div class="prop"><center><div class="k">Customize Your Apps</div></center><div class="v">Hand-pick from a curated selection of popular Linux applications — you choose exactly what gets installed.</div></div>
      <div class="prop"><center><div class="k">Console Mode</div></center><div class="v">The same apps as Default, but the computer boots straight into Steam's Big Picture like a game console. A console experience that still allows you to switch to the desktop at any time from the menu.</div></div>
      <div class="prop"><center><div class="k">OS Only</div></center><div class="v">A clean slate — just the base system and desktop, for experienced users who like to build their own setup.</div></div>
    </div>

    <h3>Hand-pick your apps</h3>
    ${shot('Install_Custom_Install_Screen.webp','Apps step of the installer','Choosing Customize opens the Apps step: recommended extras come pre-selected, and browsers, dev tools, media, office, gaming, creative, streaming, and chat apps are a checkbox each.')}
    <p>Only shown if you chose <strong>Customize Your Apps</strong>. <strong>Included Extras</strong> starts checked with the recommended set — uncheck anything you don\'t want, then expand the categories to add more. Everything here downloads and installs from the official Arch Linux repositories or from Mainstream\'s <a href="#security">signed repository</a>, never from third-party sources or the AUR (Arch User Repository).</p>

    <h2>First boot</h2>
    <p>On first boot the <strong>Welcome</strong> app opens and does three jobs. First, it offers a few quick options to get your desktop personalized and shares some info about the OS. Next, a page gives you one-click installs for some of the most wanted — but normally more involved — user experiences: Gaming, Video Editing, and Content Creation. Then a short tour teaches you how to use the desktop with little practice exercises: switching workspaces, using the dock and app drawer, dragging apps and files between workspaces, and where Files, Settings, and the App Store live.</p>
    <p>All of it is skippable and nothing is final: every choice lives in <a href="#quick">Settings</a> too, and you can reopen the tour any time from the app grid.</p>

    ${callout('tip','Dual-booting with Windows', '<p>The installer preserves existing operating system entries. After install, Limine will list your other operating systems automatically. If Windows doesn\'t appear, run <code>sudo limine-update</code> from a terminal and reboot.</p>')}

    <h2>Changing graphics cards</h2>
    <p>If you swap in a different graphics card later, run <code>gpu-drivers</code> from a terminal — it re-detects the GPU and installs the matching drivers, no password needed. Reboot afterward.</p>

    <h2>Updating later</h2>
    <p>After install, all updates go through <strong>Settings → Update</strong> or <code>sudo mainstream-update-helper</code> from a terminal. You never need to run the installer again.</p>
  `
};

// ---------- QUICK ----------
PAGES.quick = {
  group: 'Settings', title: 'Quick', icon: 'quick',
  lede: 'Quick is the first screen of Settings — the dial-in knobs you\'ll touch most often. Wallpaper, color scheme, bar position, and rounded corners, all in one place.',
  render: () => `
    ${shot('QuickConfig.webp','Quick settings page','Settings → Quick is the everyday entry point. Every control on this page has a deeper counterpart elsewhere in Settings if you want to fine-tune.')}

    <h2>Wallpaper &amp; Colors</h2>
    <p>Pick from the built-in wallpapers, or hit <strong>Choose file</strong> to use your own — a still image or a video. Mainstream extracts a Material You palette from whatever you pick and propagates the colors through the bar, sidebars, and system apps. Your login screen matches too, color scheme and all — it follows your wallpaper automatically, and each user gets their own, with no separate login background to set.</p>

    <div class="props">
      <div class="prop"><center><div class="k">Default Wallpaper</div></center><div class="v">Select it to restore the default Mainstream wallpaper at any time.</div></div>
      <div class="prop"><center><div class="k">Choose file</div></center><div class="v">Pick any image. <code>Ctrl</code>+<code>SUPER</code> (the ⊞ Windows or ⌘ Command key)+<code>T</code> is the keyboard shortcut.</div></div>
      <div class="prop"><center><div class="k">Light / Dark</div></center><div class="v">Hard-switch between Mainstream's warm Day theme and the default Night. Pair with <a href="#interface">Auto theme</a> in Interface settings to follow sunrise/sunset.</div></div>
      <div class="prop"><center><div class="k">Palette style</div></center><div class="v"><span class="tag">Auto</span> <span class="tag">Content</span> <span class="tag">Expressive</span> <span class="tag">Fidelity</span> <span class="tag">Fruit Salad</span> <span class="tag">Monochrome</span> <span class="tag">Neutral</span> <span class="tag">Rainbow</span> <span class="tag">Tonal Spot</span><br/>Different Material You tonal maps. Expressive pops color the most; Monochrome strips it entirely.</div></div>
      <div class="prop"><center><div class="k">Transparency</div></center><div class="v">Toggles translucent surfaces (sidebars, notifications, dock). Turn off if you\'re on a slower GPU or prefer flat surfaces.</div></div>
    </div>

    <h2>Bar &amp; screen</h2>
    <p>The quick path to moving the bar around. For every option (workspace indicators, utility buttons, weather, tray, clock format) jump to the full <a href="#bar">Bar</a> page.</p>

    <div class="props">
      <div class="prop"><center><div class="k">Bar position</div></center><div class="v"><b>Top</b> (default) · <b>Left</b> · <b>Bottom</b> · <b>Right</b></div></div>
      <div class="prop"><center><div class="k">Bar style</div></center><div class="v"><span class="tag">Hug</span> touches the screen edges.&nbsp; <span class="tag">Float</span> (default) floats with a gap around it.&nbsp; <span class="tag">Rect</span> is a flat rectangle.</div></div>
      <div class="prop"><center><div class="k">Screen round corner</div></center><div class="v">Draws subtle rounded corners at the edges of your monitor. <b>When not fullscreen</b> disables them automatically while a window is fullscreened.</div></div>
    </div>

  `
};

// ---------- WIFI ----------
PAGES.wifi = {
  group: 'Settings', title: 'Wi-Fi', icon: 'wifi',
  lede: 'Scan, connect, and manage saved Wi-Fi networks. Uses NetworkManager under the hood so any command-line tool you already know still works.',
  render: () => `
    ${shot('WiFiConfig.webp','Wi-Fi settings page')}

    <h2>Connecting to a network</h2>
    <ol>
      <li>Toggle <strong>Enable Wi-Fi</strong> on.</li>
      <li>Hit <strong>Scan</strong> to refresh the list.</li>
      <li>Click any network to expand it. Enter the password and hit Connect.</li>
      <li>Tick <strong>Connect automatically</strong> to save it as a preferred network.</li>
    </ol>

    <h2>Reading the network list</h2>
    <p>Each row shows the SSID, security type, and band at a glance:</p>
    <ul>
      <li><b>WPA2</b> / <b>WPA3</b> / <b>Open</b> — security. Prefer WPA3 when both are available.</li>
      <li><b>2.4 GHz</b> vs <b>5 GHz</b> — 5 GHz is faster but has shorter range. Most routers broadcast both.</li>
      <li>The signal icon fills from 1 to 4 bars. Mainstream de-emphasizes networks below 2 bars.</li>
    </ul>

    <h2>Hidden networks &amp; enterprise Wi-Fi</h2>
    <p>Scroll to the bottom of the list. <strong>Add hidden network</strong> lets you enter the SSID manually. <strong>Enterprise (802.1x)</strong> opens a form with identity, anonymous identity, CA cert, and inner auth — useful for university and corporate networks.</p>
  `
};

// ---------- BLUETOOTH ----------
PAGES.bluetooth = {
  group: 'Settings', title: 'Bluetooth', icon: 'bluetooth',
  lede: 'Pair headphones, keyboards, speakers, and controllers.',
  render: () => `
    ${shot('BluetoothConfig.webp','Bluetooth settings page')}

    <h2>Pairing a device</h2>
    <ol>
      <li>Flip <strong>Enable Bluetooth</strong> on if it isn\'t already.</li>
      <li>Put your device in pairing mode (usually hold the power button for 3-5 seconds).</li>
      <li>The device appears in <strong>Available Devices</strong>. Click it, hit <strong>Pair</strong>, confirm the PIN if prompted.</li>
    </ol>

    <h2>Modes</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Enable Bluetooth</div></center><div class="v">Master power switch. The Bluetooth icon in the top bar mirrors this state.</div></div>
      <div class="prop"><center><div class="k">Discoverable</div></center><div class="v">Makes <em>this</em> machine visible to other devices. Turn on only when you\'re sending files or using the machine as a speaker.</div></div>
      <div class="prop"><center><div class="k">Pairable</div></center><div class="v">Controls whether other devices can initiate pairing with you. Independent of Discoverable.</div></div>
    </div>

    <h2>Device management</h2>
    <p>Click any paired device in the list to expand it. You\'ll get:</p>
    <ul>
      <li><b>Connect / Disconnect</b> — toggle the active connection without forgetting the device.</li>
      <li><b>Pair / Forget</b> — one tap pairs a new device, connects it, and trusts it so it reconnects on its own from then on. <b>Forget</b> removes the pairing entirely — the device goes back to the Available list, ready to pair fresh.</li>
    </ul>

    ${callout('note','Gaming controllers', '<p>DualShock, DualSense, Xbox, and most 8BitDo pads pair natively. See the <a href="#gaming">Gaming</a> page for tuning and vibration fixes.</p>')}
  `
};

// ---------- BAR ----------
PAGES.bar = {
  group: 'Settings', title: 'Bar', icon: 'bar',
  lede: 'The top bar is Mainstream\'s status center. Everything from workspace indicators to GPS weather to utility buttons lives here, and every module can be toggled or repositioned.',
  render: () => `
    ${twoShot('BarConfig-1.webp','Time, date, position, workspaces.','BarConfig-2.webp','Utility buttons, weather, tray, volume.')}

    <h2>Time &amp; Date</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Time Format</div></center><div class="v"><span class="tag">24h</span> 14:32 &nbsp; <span class="tag">12h am/pm</span> 2:32 pm &nbsp; <span class="tag">12h AM/PM</span> 2:32 PM (default)</div></div>
      <div class="prop"><center><div class="k">Date Format</div></center><div class="v"><span class="tag">Date First</span> 20/04 &nbsp; <span class="tag">Month First</span> 04/20 (default)</div></div>
    </div>

    <h2>Positioning</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Bar position</div></center><div class="v"><b>Top</b> is default. Left/Right orient the bar vertically — handy on ultrawide monitors. Bottom is classic macOS/Chrome OS.</div></div>
      <div class="prop"><center><div class="k">Automatically hide</div></center><div class="v">When <b>Yes</b>, the bar slides away when a window touches it and reappears on hover. Great for fullscreen work.</div></div>
      <div class="prop"><center><div class="k">Corner style</div></center><div class="v"><span class="tag">Hug</span> flush to the screen edge. &nbsp; <span class="tag">Float</span> floats with margin on all sides (default). &nbsp; <span class="tag">Rect</span> full-width rectangle, no rounding.</div></div>
      <div class="prop"><center><div class="k">Group style</div></center><div class="v"><span class="tag">Pills</span> separate clusters for each module group (default). &nbsp; <span class="tag">Line-separated</span> one continuous bar split by thin dividers.</div></div>
    </div>

    <h2>Resource usage module</h2>
    <p>Flip this on to show CPU, RAM, and (if detected) GPU usage live in the bar. Clicking the module pops a mini-graph with a 60-second history.</p>

    <h2>Workspaces</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Always show numbers</div></center><div class="v">Off by default — only shows the number for the focused workspace. Turn on if you jump between workspaces by number a lot.</div></div>
      <div class="prop"><center><div class="k">Show app icons</div></center><div class="v">Draws the icon of whatever app is on each workspace. Quick visual map.</div></div>
      <div class="prop"><center><div class="k">Tint app icons</div></center><div class="v">Tints the icons with your Material You accent for a unified look.</div></div>
      <div class="prop"><center><div class="k">Workspaces shown</div></center><div class="v">How many workspace dots render in the bar. Default 10.</div></div>
      <div class="prop"><center><div class="k">Number show delay</div></center><div class="v">When you hold <code>SUPER</code> (the ⊞ Windows or ⌘ Command key), how long before the number overlay appears on each workspace. Default 300 ms.</div></div>
    </div>

    <h2>Utility buttons</h2>
    <p>Small inline launchers in the bar for everyday actions:</p>
    <ul>
      <li><b>Screen snip</b> — region screenshot (<code>SUPER</code>+<code>Shift</code>+<code>S</code>).</li>
      <li><b>Color picker</b> — eyedropper that copies the hex under your cursor.</li>
      <li><b>Keyboard toggle</b> — shows the on-screen keyboard. Useful on touchscreens.</li>
      <li><b>Mic toggle</b> — mute/unmute the default source system-wide.</li>
      <li><b>Dark/Light toggle</b> — one-click theme flip.</li>
      <li><b>Performance Profile toggle</b> — cycles Performance / Balanced / Power Saver.</li>
      <li><b>Record</b> — starts a screen recording, with visible recording indicator.</li>
    </ul>

    <h2>Weather</h2>
    <p>Powered by Open-Meteo. When <strong>GPS based location</strong> is on, Mainstream uses GeoClue. Otherwise, type a city in the <em>City name</em> field. <strong>Polling interval</strong> is how often (in minutes) the widget refreshes.</p>

    <h2>Tray</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Make icons pinned by default</div></center><div class="v">New status icons (Slack, Discord, Syncthing, etc.) always appear. When off, tray icons live in a collapse menu until you pin them.</div></div>
      <div class="prop"><center><div class="k">Tint icons</div></center><div class="v">Recolors tray icons to match your accent. Very polished, but some apps ship non-square icons that tint poorly — turn off if they look odd.</div></div>
    </div>

    <h2>Volume Control</h2>
    <p><strong>Show volume icon in bar</strong> adds a speaker pill. Scroll on it to adjust volume, click to open the mixer, right-click for the output device picker.</p>
  `
};

// ---------- INTERFACE ----------
PAGES.interface = {
  group: 'Settings', title: 'Interface', icon: 'iface',
  lede: 'Everything that affects window chrome, the dock, sidebars, fonts, and the lock screen. This is where Mainstream feels the most like your machine.',
  render: () => `
    ${shot('InterfaceConfig-1.webp','Decorations, dock, sidebars.','Decorations set window chrome. The Dock section controls the app launcher at the bottom. Left and Right Sidebars hold Mainstream\'s AI assistant and quick toggles.')}

    <h2>Decorations</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Animations</div></center><div class="v">Workspace slides, window open/close, sidebar reveals. Disable for absolute minimum latency.</div></div>
      <div class="prop"><center><div class="k">Blur</div></center><div class="v">Blur behind translucent surfaces. Gorgeous, GPU-light on modern hardware. Turn off for battery savings on integrated graphics.</div></div>
      <div class="prop"><center><div class="k">Shadows</div></center><div class="v">Soft drop shadow under focused windows.</div></div>
      <div class="prop"><center><div class="k">Borders</div></center><div class="v">A colored border around active and inactive windows — helpful for telling floating windows apart, optional for tiling.</div></div>
      <div class="prop"><center><div class="k">Rounded Corners</div></center><div class="v">Rounds the corners of windows and the bar to your theme radius.</div></div>
      <div class="prop"><center><div class="k">Title Bars</div></center><div class="v">On by default, so every window keeps its close and maximize buttons. Turn off for a chromeless look — the same toggle as on the <a href="#layouts">Layouts</a> page.</div></div>
    </div>

    <h2>Dock</h2>
    ${twoShot('Dock-Right-Click-Per-App.webp','Right-click a dock icon — per-app view.','Dock-Right-Click-Per-Window.webp','Per-window view shows open instances individually with live volume sliders.')}

    <div class="props">
      <div class="prop"><center><div class="k">Enable</div></center><div class="v">Master toggle for the bottom app dock.</div></div>
      <div class="prop"><center><div class="k">Hover to reveal</div></center><div class="v">The dock stays hidden while a window is focused and slides up when your cursor touches the bottom edge. Off: it only appears on an empty workspace, not on hover.</div></div>
      <div class="prop"><center><div class="k">Pinned on startup</div></center><div class="v">Starts the session with the dock pinned open — always visible, reserving its space at the bottom — until you unpin it.</div></div>
      <div class="prop"><center><div class="k">Right-click volume control</div></center><div class="v">Adds a volume slider and mute toggle to the right-click menu of a dock icon for any app currently playing audio. <b>Per window</b> gives each window its own slider — handy for browsers or Discord where different windows play different sound; <b>Per app</b> groups them into one.</div></div>
      <div class="prop"><center><div class="k">Tint app icons</div></center><div class="v">Desaturates each icon and washes it with your accent color for a uniform look. Keep off for brand-accurate icons.</div></div>
    </div>

    <h2>Left Hot Corner</h2>
    <p>The very top-left corner of the screen is a hot corner — sweep your cursor into it and the overview opens.</p>
    <div class="props">
      <div class="prop"><center><div class="k">Ripple Animation</div></center><div class="v">The little water-ripple animation that plays when you hit the corner.</div></div>
      <div class="prop"><center><div class="k">Trigger overview</div></center><div class="v">What the corner opens: <span class="tag">Default Overview</span> the built-in grid &nbsp; <span class="tag">Scrolling Overview</span> the niri-style panning view &nbsp; <span class="tag">Off</span> disables the corner.</div></div>
    </div>

    <h3>Scrolling Overview</h3>
    <p>Shown when the corner is set to Scrolling Overview.</p>
    <div class="props">
      <div class="prop"><center><div class="k">Layout</div></center><div class="v">Lay the workspace previews out <b>Vertical</b> or <b>Horizontal</b>.</div></div>
      <div class="prop"><center><div class="k">Workspace gap</div></center><div class="v">Pixels between workspace previews. Default 100.</div></div>
      <div class="prop"><center><div class="k">Workspace scale</div></center><div class="v">How much each preview shrinks — lower fits more workspaces on screen. Default 50%.</div></div>
    </div>

    <h2>Overview</h2>
    <p>Settings for the built-in overview grid (<a href="#overview-launcher">Overview &amp; Launcher</a>).</p>
    <div class="props">
      <div class="prop"><center><div class="k">Enable</div></center><div class="v">Master toggle for the overview.</div></div>
      <div class="prop"><center><div class="k">Scale (%)</div></center><div class="v">How large the overview appears on screen.</div></div>
      <div class="prop"><center><div class="k">Rows / Columns</div></center><div class="v">The shape of the workspace grid. Default 2 rows by 5 columns.</div></div>
      <div class="prop"><center><div class="k">Pre-load overview</div></center><div class="v">Keeps the overview built in the background so it opens instantly, at a small memory cost.</div></div>
    </div>

    <h2>Left Sidebar</h2>
    <div class="props">
      <div class="prop"><center><div class="k">AI</div></center><div class="v"><span class="tag">No</span> disables the assistant entirely. <span class="tag">Yes</span> turns it on, connecting to whichever provider you set up with your own API key. Google Gemini, Anthropic's Claude, and OpenAI's Codex can all be used in the left sidebar, each over its official API. Full plan (subscription) integration for each is coming later. <span class="tag">Local only</span> restricts it to a local Ollama model, so nothing leaves your machine.</div></div>
      <div class="prop"><center><div class="k">Translator</div></center><div class="v">Click-to-translate selected text, powered by Gemini or a local LibreTranslate server.</div></div>
    </div>

    <h2>Right Sidebar</h2>
    ${shot('InterfaceConfig-2.webp','Quick toggles, timer, lock screen.')}
    <div class="props">
      <div class="prop"><center><div class="k">Quick toggles</div></center><div class="v"><span class="tag">Classic</span> a horizontal row of pills. <span class="tag">Android</span> a 2-column grid like modern Android Quick Settings.</div></div>
      <div class="prop"><center><div class="k">Columns</div></center><div class="v">How many columns when Android style is selected. Default 5.</div></div>
      <div class="prop"><center><div class="k">Sliders</div></center><div class="v">Choose which quick sliders — Brightness, Volume, and Microphone — appear in the right sidebar. Toggle each on or off, or turn the whole set off.</div></div>
    </div>

    <h3>Timer &amp; Pomodoro</h3>
    <p>Built-in Pomodoro with customizable focus blocks, short and long breaks, and cycle counts. Alarms can be independently muted for Pomodoro and generic timers.</p>

    <h3>Lock screen</h3>
    <div class="props">
      <div class="prop"><center><div class="k">Automatic Lock</div></center><div class="v">Lock after <b>Delay</b> minutes of inactivity. Default 5.</div></div>
      <div class="prop"><center><div class="k">Launch on startup</div></center><div class="v">Boot straight into the lock screen instead of the desktop.</div></div>
      <div class="prop"><center><div class="k">Require password to power off / restart</div></center><div class="v">Blocks unauthorized shutdowns when the screen is locked.</div></div>
      <div class="prop"><center><div class="k">Also unlock keyring</div></center><div class="v">Unlocking the screen also unlocks GNOME Keyring — no second password for Wi-Fi, Git creds, etc.</div></div>
      <div class="prop"><center><div class="k">Use varying shapes for password characters</div></center><div class="v">Each password dot becomes a different subtle shape. Purely cosmetic.</div></div>
      <div class="prop"><center><div class="k">Enable blur (Blurred style)</div></center><div class="v">Kawase blur behind the unlock prompt.</div></div>
    </div>

    <h2>On-screen display</h2>
    <p>The little popup that appears when you press a brightness or volume key.</p>
    <div class="props">
      <div class="prop"><center><div class="k">Timeout (ms)</div></center><div class="v">How long the popup lingers after the last key press.</div></div>
    </div>

    <h2>Fonts</h2>
    ${shot('InterfaceConfig-3.webp','Font family overrides.')}

    <p>Mainstream uses <strong>Google Sans Flex</strong> and <strong>JetBrains Mono NF</strong> by default. Every surface (main UI, numbers, titles, monospace, nerd-font icons, reading text) can be individually overridden. Font names are resolved via fontconfig, so anything in <code>fc-list</code> is fair game.</p>
  `
};

// ---------- BACKGROUND ----------
PAGES.background = {
  group: 'Settings', title: 'Background', icon: 'bg',
  lede: 'Wallpaper behavior and the two overlay widgets that live on top of it — the big clock on the right, and the optional weather card.',
  render: () => `
    ${twoShot('BackgroundConfig-1.webp','Wallpaper panning, Clock widget.','BackgroundConfig-2.webp','Digital clock styling, Weather widget.')}

    <h2>Wallpaper panning</h2>
    <p>Controls how the wallpaper moves as you switch workspaces and toggle sidebars. The default feel is a gentle parallax that echoes the ripples in the mark.</p>

    <div class="props">
      <div class="prop"><center><div class="k">Vertical</div></center><div class="v">Pans up/down instead of left/right. Pair with a tall wallpaper if you use Scrolling layout.</div></div>
      <div class="prop"><center><div class="k">Depends on workspace</div></center><div class="v">Pans as you change workspaces. On by default.</div></div>
      <div class="prop"><center><div class="k">Depends on sidebars</div></center><div class="v">Slides the wallpaper when the left/right sidebars open, revealing more of it underneath.</div></div>
      <div class="prop"><center><div class="k">Preferred wallpaper zoom (%)</div></center><div class="v">Baseline zoom level. 100% shows the image at screen size; &gt;100% crops in and gives panning more room.</div></div>
    </div>

    <h2>Widget: Clock</h2>
    <p>The giant time readout is the signature of the default Mainstream wallpaper. Everything about it is adjustable — position, style, font, whether it shows the date, whether it's only visible when the screen is locked.</p>

    <div class="props">
      <div class="prop"><center><div class="k">Enable</div></center><div class="v">Master toggle.</div></div>
      <div class="prop"><center><div class="k">Draggable / Least busy / Most busy</div></center><div class="v">Where the clock sits. <b>Least busy</b> auto-picks the emptiest corner; <b>Most busy</b> sits inside your window cluster as a deliberate hero element; <b>Draggable</b> lets you pin it by hand.</div></div>
      <div class="prop"><center><div class="k">Show only when locked</div></center><div class="v">Clock hides when the desktop is active and reappears on the lock screen.</div></div>
      <div class="prop"><center><div class="k">Clock style</div></center><div class="v"><span class="tag">Digital</span> numeric (default) &nbsp; <span class="tag">Cookie</span> analog pie-chart style. Lock-screen style is chosen separately.</div></div>
    </div>

    <h3>Digital clock settings</h3>
    <div class="props">
      <div class="prop"><center><div class="k">Vertical</div></center><div class="v">Stack hours over minutes for a portrait orientation.</div></div>
      <div class="prop"><center><div class="k">Animate time change</div></center><div class="v">Numbers roll over each minute instead of snapping.</div></div>
      <div class="prop"><center><div class="k">Show date</div></center><div class="v">The small date label under the clock.</div></div>
      <div class="prop"><center><div class="k">Use adaptive alignment</div></center><div class="v">Left-aligns on the right side of the screen, right-aligns on the left. Keeps the readout from touching the edge.</div></div>
      <div class="prop"><center><div class="k">Font family</div></center><div class="v">Default <b>Google Sans Flex</b>. Any fontconfig family with variable axes works.</div></div>
      <div class="prop"><center><div class="k">Font weight / size / width / roundness</div></center><div class="v">Live sliders that drive Google Sans Flex\'s variable axes. Roundness is the signature axis — sliding it right gives you the default soft, open numerals.</div></div>
    </div>

    <h3>Cookie clock settings</h3>
    <p>These appear when the clock style is set to <b>Cookie</b> — an analog clock drawn as a rounded, many-sided cookie shape.</p>
    <div class="props">
      <div class="prop"><center><div class="k">Auto styling with Gemini</div></center><div class="v">Lets Gemini look at your wallpaper and pick a matching cookie preset.<br/>Needs a Gemini API key (set in the left sidebar).</div></div>
      <div class="prop"><center><div class="k">Sides</div></center><div class="v">How many corners the cookie has. Default 14.</div></div>
      <div class="prop"><center><div class="k">Dial style</div></center><div class="v"><span class="tag">Numbers</span> (default) &nbsp; <span class="tag">Dots</span> &nbsp; <span class="tag">Full</span> &nbsp; or none at all.</div></div>
      <div class="prop"><center><div class="k">Hour / Minute / Second hand</div></center><div class="v">Pick a style for each hand independently — or hide any of them.</div></div>
      <div class="prop"><center><div class="k">Date style</div></center><div class="v">How the date renders inside the clock: bubble (default), border, rectangle, or hidden.</div></div>
      <div class="prop"><center><div class="k">Hour marks / Digits in the middle</div></center><div class="v">Extra dial detail — each is offered with the dial styles it looks right on.</div></div>
      <div class="prop"><center><div class="k">Use old sine wave cookie</div></center><div class="v">The earlier, softer cookie shape — more consistent at any side count, with less dramatic morphing.</div></div>
      <div class="prop"><center><div class="k">Constantly rotate</div></center><div class="v">Keeps the cookie spinning at all times. Very heavy on the GPU — a fun demo, not a daily driver.</div></div>
    </div>

    <h3>Quote</h3>
    <p>Enable it and a quote string appears beneath the clock. Useful for a personal mantra on the lock screen.</p>

    <h2>Widget: Weather</h2>
    <p>A compact weather card with icon, temperature, and forecast. Same data source as the bar\'s weather module. Positioning controls mirror the Clock widget — Draggable / Least busy / Most busy.</p>
  `
};

// ---------- THEMES ----------
PAGES.themes = {
  group: 'Settings', title: 'Themes', icon: 'themes',
  lede: 'A theme is a snapshot of your entire look — wallpaper, colors, UI tweaks, decorations. Save as many as you want and switch between them instantly.',
  render: () => `
    ${shot('ThemesConfig.webp','Themes page')}

    <h2>What a theme captures</h2>
    <p>A theme is a full snapshot of your desktop as it stands — not just the wallpaper and colors. Switching themes switches all of this at once:</p>
    <div class="props">
      <div class="prop"><center><div class="k">Wallpaper</div></center><div class="v">The image file itself is copied into the theme, so the theme keeps working even if you later move or delete the original.</div></div>
      <div class="prop"><center><div class="k">Colors</div></center><div class="v">Your <strong>Material You palette style</strong> (Expressive, Monochrome, …) and <strong>Light/Dark</strong> choice. On apply, the palette is regenerated from the theme\'s wallpaper — and it reaches further than the shell: GTK apps follow the light/dark switch and the terminal recolors too.</div></div>
      <div class="prop"><center><div class="k">Every Settings option</div></center><div class="v">The complete shell configuration as it stood when you saved: <strong>bar</strong> position, style, and modules; the <strong>dock</strong> — including which apps are pinned; <strong>background widgets</strong> (clock, weather, quote); <strong>fonts</strong> and sizes; <strong>transparency</strong>; interface and launcher tweaks. If it lives in Settings, the theme carries it.</div></div>
      <div class="prop"><center><div class="k">Window decorations</div></center><div class="v">Animations, blur, shadows, borders and gaps, rounded corners, and title bars — applied live, so windows re-dress the moment you switch.</div></div>
      <div class="prop"><center><div class="k">Preview</div></center><div class="v">A screenshot taken at save time becomes the theme\'s thumbnail in the grid.</div></div>
    </div>

    <h2>Saving your first theme</h2>
    <ol>
      <li>Dial in your look — wallpaper, palette style, font, and any other interface settings you care to change.</li>
      <li>Hit <strong>Save current as theme</strong>.</li>
      <li>Name it. Themes appear as thumbnails in the page you can click to switch instantly.</li>
    </ol>

    <h2>Switching</h2>
    <p>Click any saved theme tile to apply it — the whole desktop re-skins in under a second with a soft crossfade. <strong>Update</strong> on the active theme overwrites it with whatever you\'ve tweaked since.</p>

    <figure>
      <div class="shot">
        <video src="assets/docs/ThemesConfig-theme-switching-example-video.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Switching live: one click and the wallpaper, colors, bar, dock, and widgets all follow in a single motion.</figcaption>
    </figure>

    <h2>Day/Night Themes</h2>
    ${shot('ThemesConfig-DayNight.webp','Day/Night Themes section of the Themes page','Pair two saved themes to time of day — a bright one for daytime, a dark one for night — and Mainstream switches between them on its own.')}
    <p>Pick a <strong>Day</strong> theme and a <strong>Night</strong> theme from your saved collection, then choose how the switch happens:</p>
    <div class="props">
      <div class="prop"><center><div class="k">Follow Night Light</div></center><div class="v">Switches together with the Night Light schedule — day theme at sunrise, night theme at sunset. (This option only shows if Night Light is enabled.)</div></div>
      <div class="prop"><center><div class="k">Custom times</div></center><div class="v">Set your own day-start and night-start times if you\'d rather not follow the sun.</div></div>
      <div class="prop"><center><div class="k">Off</div></center><div class="v">No automatic switching — the desktop keeps whichever theme you applied last.</div></div>
    </div>

    ${callout('tip','Two workflows, one OS', '<p>Build a "Focus" theme with muted grays, no blur, minimal chrome; and a "Weekend" theme with a photo wallpaper, expressive colors, and the clock widget enabled. Switch with one click depending on what you\'re doing — or let Day/Night switch for you.</p>')}

    <h3>Sharing themes</h3>
    <p>Each theme is a self-contained folder at <code>~/.config/mainstream/themes/&lt;name&gt;/</code> — the settings snapshot, the decoration flags, the wallpaper file, and the preview thumbnail, all together. Zip the folder to share it — or drop one into <code>~/.config/mainstream/themes/</code> to install a theme someone sent you.</p>
  `
};

// ---------- DISPLAY ----------
PAGES.display = {
  group: 'Settings', title: 'Display', icon: 'display',
  lede: 'Arrange monitors, pick resolutions and refresh rates, enable VRR and 10-bit color, and dial in color management per monitor — including HDR.',
  render: () => `
    ${shot('DisplayConfig-1.webp','Display arrangement and primary monitor settings')}

    <h2>Display Arrangement</h2>
    <p>The top card draws your monitors to scale — a 3840×2160 panel visually dwarfs a 1920×1080 one. To arrange them, use the <strong>Position</strong> dropdown under each monitor (<em>To Right of Default Display</em>, <em>Below Default Display</em>, and so on).</p>

    <h2>Per-monitor settings</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Enabled</div></center><div class="v">Disable a monitor without unplugging it. The home icon on the right pins it as the <b>Default</b> (primary) display.</div></div>
      <div class="prop"><center><div class="k">Mode</div></center><div class="v">Resolution × refresh rate, picked from the modes your monitor advertises.</div></div>
      <div class="prop"><center><div class="k">Scale</div></center><div class="v">UI scale. The menu shows only the steps that render pixel-perfectly on that monitor — up to ten of them between 100% and 200% — so whichever you pick stays sharp.</div></div>
      <div class="prop"><center><div class="k">Orientation</div></center><div class="v">Landscape / Portrait / Landscape (Flipped) / Portrait (Flipped).</div></div>
      <div class="prop"><center><div class="k">VRR</div></center><div class="v">Variable Refresh Rate. <b>Always On</b> for GSync/FreeSync monitors — smoother gaming. <b>Fullscreen Only</b> saves power on the desktop. Greys out if your display or driver can\'t do it.</div></div>
      <div class="prop"><center><div class="k">10-bit</div></center><div class="v">Enables 10-bit color output. Greys out if your display or driver doesn\'t support it.</div></div>
    </div>

    <p>Nothing changes until you press <strong>Apply changes</strong> — every monitor\'s edits apply together, then a countdown asks whether to <strong>Keep</strong> the new settings. Don\'t like what you see (or can\'t see anything at all)? Wait it out or press <strong>Revert</strong> and everything returns to how it was.</p>

    ${shot('DisplayConfig-2.webp','Secondary monitor with color management')}

    <h2>Workspaces per monitor</h2>
    <p>By default workspaces 1-10 are shared across monitors. <strong>Custom</strong> pins specific workspaces to a monitor — useful for multi-monitor setups where you want workspace 1 always on the left screen. The <strong>+</strong> and <strong>−</strong> beside the rows add or remove another block of ten workspaces, same as on the <a href="#layouts">Layouts</a> page.</p>

    <h2>Color Management</h2>
    ${shot('DisplayConfig-Color-Management.webp','Color Management panel with HDR fine-tuning')}

    <div class="props">
      <div class="prop"><center><div class="k">Color profile</div></center><div class="v"><span class="tag">Auto</span> <span class="tag">DCI P3</span> <span class="tag">Adobe RGB</span> <span class="tag">Apple RGB</span> — plus <span class="tag">BT2020</span> and <span class="tag">HDR</span> when your monitor supports them.<br/>Picks the output color space. For print work choose Adobe RGB; for video grading choose DCI P3 or BT2020.</div></div>
      <div class="prop"><center><div class="k">HDR Mode</div></center><div class="v"><b>Fullscreen Only</b> (default) turns HDR on just for fullscreen apps — games and movies get it, the desktop stays SDR. <b>Always On</b> forces HDR everywhere.</div></div>
    </div>

    <h3>Fine Tune — SDR</h3>
    <ul>
      <li><b>SDR Brightness</b> — how bright SDR content appears in HDR mode (1.000 = reference).</li>
      <li><b>SDR Saturation</b> — saturation multiplier for SDR content.</li>
      <li><b>SDR Minimum / Max Luminance</b> — nit range SDR content maps into.</li>
    </ul>

    <h3>Fine Tune — HDR</h3>
    <ul>
      <li><b>HDR Minimum / Maximum / Average Luminance</b> — your monitor\'s nit capabilities. Defaults usually read from EDID; override for tonemapping.</li>
    </ul>

    <p><strong>Calibrate Monitor for HDR</strong> opens the interactive calibration wizard — a series of test patterns that measures what your panel can actually do and fills in the fine-tune values for you.</p>

    <h3>Import ICC Profile</h3>
    <p>Have a profile from a colorimeter or your monitor vendor? <strong>Import ICC Profile</strong> loads it and overrides the color-management picker above with your measured profile.</p>

    <h2>Night Light</h2>
    ${shot('DisplayConfig-3.webp','VRR, 10-bit, color management, and Night Light')}
    <p>Warm the screen to cut blue light — easier on the eyes in the evening. <strong>Schedule night light</strong> runs it on its own (<b>Automatic</b>) or on your hours (<b>Set hours</b>), and <strong>Intensity</strong> controls how warm it gets.</p>

    ${callout('warn','NVIDIA and HDR', '<p>HDR on NVIDIA requires the 555+ driver series. If the HDR toggle is greyed out, update your driver and reboot.</p>')}
  `
};

// ---------- LAYOUTS ----------
PAGES.layouts = {
  group: 'Settings', title: 'Layouts', icon: 'layout',
  lede: 'Hyprland ships several tiling modes. Mainstream surfaces them all and lets you pick a different one per workspace — scroll for reading, dwindle for general work, monocle for focus.',
  render: () => `
    ${shot('LayoutsConfig-1.webp','Window layout picker')}

    <h2>The five layouts</h2>
    <table class="t">
      <thead><tr><th>Layout</th><th>Behavior</th><th>Best for</th></tr></thead>
      <tbody>
        <tr><td><b>Dwindle</b> <span class="chip">default</span></td><td>Each new window splits the last in half, alternating horizontal and vertical.</td><td>General desktop use. Predictable, recursive tiling.</td></tr>
        <tr><td><b>Master</b></td><td>One large "main" window plus a side stack. Shift windows into the main slot with a keybind.</td><td>Writing, coding — a primary focus window plus references.</td></tr>
        <tr><td><b>Scrolling</b></td><td>Horizontally scrollable column of windows, niri-style. Windows have fixed widths; panning moves the viewport.</td><td>Browser-heavy workflows. Feels like tabs but spatial.</td></tr>
        <tr><td><b>Monocle</b></td><td>One focused fullscreen window at a time; all others stack invisibly.</td><td>Pure focus. Like macOS Stage Manager minus the clutter.</td></tr>
        <tr><td><b>Float</b></td><td>All windows float freely on the desktop.</td><td>Graphics work, casual desktop use, specific apps.</td></tr>
      </tbody>
    </table>

    <h3>Title Bars</h3>
    <p>Title bars are on by default, so every window keeps its familiar close and maximize buttons. If you prefer the cleaner look, or you already live in tiling layouts and keybinds, the <strong>Title Bars</strong> toggle turns them off instantly.</p>

    <h2>Per-workspace layouts</h2>
    ${shot('LayoutsConfig-2.webp','Per-workspace layout matrix')}

    <p>Select <strong>Per Workspace</strong> and a table appears with a row for each workspace, and each row offers the same five layouts — tap the one you want for that workspace. Ten workspaces are controlled out of the box; the <strong>+</strong> and <strong>−</strong> beside <strong>Workspace Layouts</strong> add or remove another block of ten, matching the workspace controls on the <a href="#display">Display</a> page.</p>

    ${callout('tip','A common recipe', '<ul style="margin:4px 0 0;padding-left:20px"><li><b>1 Main</b> — Dwindle (default productivity)</li><li><b>2 Web</b> — Scrolling (browser tabs as columns)</li><li><b>3 Writing</b> — Monocle (one window, nothing else)</li><li><b>4 Design</b> — Float (Figma, Inkscape, reference images)</li><li><b>5-10</b> — Dwindle (catch-all)</li></ul>')}
  `
};

// ---------- KEYBINDS ----------
PAGES.keybinds = {
  group: 'Settings', title: 'Keybinds', icon: 'keyboard',
  lede: 'Every keyboard shortcut in one searchable place — browse the defaults, tweak the ones you use, and add your own, without hand-editing a config file.',
  render: () => `
    ${shot('KeybindsConfig.webp','Keybinds page — searchable, grouped by action')}

    <h2>Finding a shortcut</h2>
    <p>Type in <strong>Filter keybinds…</strong> to narrow the list. Bindings are grouped by what they do: Launch Application, Window Management, Workspace Navigation, Focus and Move Windows, and so on.</p>

    <h2>Editing a default</h2>
    <p>Every built-in binding shows a <strong>lock</strong> icon and a <strong>pencil</strong>. The lock means it\'s a Mainstream default — you can\'t delete it, but the pencil lets you change its keys. Your change is written to your personal keybinds file as an override, so the default stays intact and a future update won\'t clobber your customization.</p>

    <h2>Adding your own</h2>
    <p>Hit <strong>Add</strong> to create a shortcut: enter the key combination, then choose the action (run a command, focus a window, switch a workspace…). Bindings you add show a <strong>trash</strong> icon so you can remove them later.</p>

    <h2>Hidden bindings</h2>
    <p>A separate <strong>Hidden</strong> group at the bottom collects bindings tagged <code>[hidden]</code> in your config — they stay active, but are kept off the cheatsheet.</p>
  `
};

// ---------- MOUSE ----------
PAGES.mouse = {
  group: 'Settings', title: 'Mouse', icon: 'mouse',
  lede: 'Pointer speed, button layout, acceleration, and scroll direction — separately for mice and touchpads.',
  render: () => `
    ${shot('MouseConfig.webp','Mouse settings page')}

    <h2>General</h2>
    <p><strong>Primary Button</strong> — which physical button is the primary click. <b>Left</b> is the default; switch to <b>Right</b> for left-hand use.</p>

    <h2>Mouse</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Pointer Speed</div></center><div class="v">Slower / Slow / Default / Fast / Faster. Operates as a multiplier on top of the hardware DPI.</div></div>
      <div class="prop"><center><div class="k">Mouse Acceleration</div></center><div class="v">Off by default for accurate gaming. Turning it on lets you make slow, precise movements when needed but lets you easily move your mouse across a massive screen without having to lift your mouse.</div></div>
      <div class="prop"><center><div class="k">Scroll Direction</div></center><div class="v"><b>Traditional</b> — scrolling moves the viewport (scroll up = page scrolls up). <b>Natural</b> — scrolling moves the content (scroll up = content moves up, like on mobile).</div></div>
    </div>

    <h2>Touchpad</h2>
    ${shot('MouseConfig-2.webp','Touchpad settings — scroll direction and gesture pickers','Scroll direction and every gesture, remappable from one panel.')}

    <p><strong>Scroll Direction</strong> works exactly like the mouse setting but is stored separately — touchpads default to <strong>Natural</strong> scrolling (the phone and tablet feel) while mice default to <strong>Traditional</strong>, and you can override either.</p>

    <h3>Gestures</h3>
    <p>Every touchpad gesture is remappable, right from this page — pick what each one does from its dropdown:</p>
    <div class="props">
      <div class="prop"><center><div class="k">Three-finger swipe</div></center><div class="v"><span class="tag">Move window</span> (default) &nbsp; <span class="tag">Switch workspaces</span> &nbsp; <span class="tag">Resize window</span> &nbsp; <span class="tag">Do Nothing</span></div></div>
      <div class="prop"><center><div class="k">Three-finger pinch</div></center><div class="v"><span class="tag">Toggle floating</span> (default) &nbsp; <span class="tag">Fullscreen</span> &nbsp; <span class="tag">Close window</span> &nbsp; <span class="tag">Do Nothing</span></div></div>
      <div class="prop"><center><div class="k">Four-finger swipe sideways</div></center><div class="v"><span class="tag">Switch workspaces</span> (default) &nbsp; <span class="tag">Special workspace</span> &nbsp; <span class="tag">Do Nothing</span></div></div>
      <div class="prop"><center><div class="k">Four-finger swipe up</div></center><div class="v"><span class="tag">Open overview</span> (default) &nbsp; <span class="tag">Fullscreen</span> &nbsp; <span class="tag">Special workspace</span> &nbsp; <span class="tag">Do Nothing</span></div></div>
      <div class="prop"><center><div class="k">Four-finger swipe down</div></center><div class="v"><span class="tag">Close overview</span> (default) &nbsp; <span class="tag">Close window</span> &nbsp; <span class="tag">Do Nothing</span></div></div>
    </div>
    <p>Changes apply instantly — no logout needed.</p>
  `
};

// ---------- POWER ----------
PAGES.power = {
  group: 'Settings', title: 'Power', icon: 'power',
  lede: 'Power modes, suspend behavior, battery thresholds, audible warnings, and window restore. Applies to laptops and desktops alike.',
  render: () => `
    ${shot('PowerConfig.webp','Power settings page')}

    <h2>Power Mode</h2>
    <table class="t">
      <thead><tr><th>Profile</th><th>What it does</th></tr></thead>
      <tbody>
        <tr><td><b>Performance</b></td><td>Lets the hardware run as fast as it wants — best framerates, more fan noise.</td></tr>
        <tr><td><b>Balanced</b> <span class="chip">default</span></td><td>The everyday sweet spot — full speed when you need it, quiet when you don\'t.</td></tr>
        <tr><td><b>Power Saver</b></td><td>Trades speed for battery life and silence.</td></tr>
      </tbody>
    </table>

    <p>The <a href="#bar">bar</a>\'s <em>Performance Profile toggle</em> button cycles these without opening Settings.</p>

    <h2>General</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Power Button Behavior</div></center><div class="v"><span class="tag">Suspend</span> (default) &nbsp; <span class="tag">Hibernate</span> &nbsp; <span class="tag">Shut Down</span> &nbsp; <span class="tag">Do Nothing</span></div></div>
    </div>

    <h2>Power Saving</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Automatic Screen Blank</div></center><div class="v">Turns the display off after <b>Delay</b> of inactivity. Default 10 minutes.</div></div>
      <div class="prop"><center><div class="k">Automatic Suspend</div></center><div class="v">Puts the whole system to sleep after <b>Delay</b>. Default 15 minutes.</div></div>
    </div>

    <h2>Battery</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Low warning (%)</div></center><div class="v">First warning popup. Default 20%.</div></div>
      <div class="prop"><center><div class="k">Critical warning (%)</div></center><div class="v">Second, urgent warning. Default 5%.</div></div>
      <div class="prop"><center><div class="k">Automatic suspend at (%)</div></center><div class="v">Auto-suspend threshold to protect your data. Default 3%.</div></div>
      <div class="prop"><center><div class="k">Full warning (%)</div></center><div class="v">Notifies when the battery is "full" — useful if you use charge-limit tools to hold at 80%. Set to match your limit.</div></div>
    </div>

    <h3>Battery Indicator Popup</h3>
    <p>What the bar\'s battery indicator shows when you hover it:</p>
    <div class="props">
      <div class="prop"><center><div class="k">Time remaining</div></center><div class="v">Estimated time until empty (or until full while charging). On by default.</div></div>
      <div class="prop"><center><div class="k">Battery drain</div></center><div class="v">Live power draw in watts.</div></div>
      <div class="prop"><center><div class="k">Battery health</div></center><div class="v">Current maximum capacity compared to when the battery was new.</div></div>
    </div>

    <h2>Sounds</h2>
    <p><strong>Battery</strong> plays a soft chime at each warning threshold. Turn off for silent warnings.</p>

    <h2>Window Restore</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Restore windows on login</div></center><div class="v">Remembers the windows you had open when you log out and reopens them on your next login, each sent back to its original workspace. Best-effort: the occasional app that can\'t be relaunched from a command may be skipped.</div></div>
    </div>
  `
};

// ---------- ACCOUNTS ----------
PAGES.accounts = {
  group: 'Settings', title: 'Accounts', icon: 'user',
  lede: 'User accounts on this machine. Create additional users, manage passwords, and customize login avatars — all without leaving Settings.',
  render: () => `
    ${shot('AccountsConfig.webp','Accounts settings page')}

    <h2>Current user</h2>
    <p>At the top, your own account is shown with a <strong>You</strong> badge and a <em>Signed in</em> indicator. Expand it for password and login-image controls.</p>

    <h2>Managing an existing account</h2>
    <p>Expanding any row exposes:</p>
    <div class="props">
      <div class="prop"><center><div class="k">Change Password</div></center><div class="v">Sets a new login password. Requires your <em>current</em> password for confirmation.</div></div>
      <div class="prop"><center><div class="k">Change Login Name</div></center><div class="v">Renames the user on disk. The home directory is moved, so the system briefly locks out open sessions for that user.</div></div>
      <div class="prop"><center><div class="k">Change Login Image</div></center><div class="v">The picture shown on the greeter. Square images 256 px and up work well.</div></div>
      <div class="prop"><center><div class="k">Remove Account</div></center><div class="v">Deletes the user. You\'re asked separately whether to keep or delete the home directory.</div></div>
    </div>

    <h2>Add an Account</h2>
    <ol>
      <li>Enter a <strong>Login name</strong> — lowercase, no spaces.</li>
      <li>Set a password.</li>
      <li>Choose whether to <strong>set up a personal folder</strong> (<code>/home/&lt;name&gt;</code>) for the new account.</li>
      <li>Optionally <strong>copy your app settings</strong> so the new account starts with your <code>~/.config</code> as a base.</li>
      <li>Hit <strong>Create Account</strong>.</li>
    </ol>

    ${callout('tip','Protected by a password prompt', '<p>Creating, renaming, or deleting an account — or changing a password — asks for an administrator\'s password before it happens. Anyone can browse the list; only an admin can change it.</p>')}
  `
};

// ---------- SERVICES ----------
PAGES.services = {
  group: 'Settings', title: 'Services', icon: 'gear',
  lede: 'Language settings, translation generation, music recognition, networking agent, launcher search, weather, and where screenshots and screen recordings are saved.',
  render: () => `
    ${shot('ServicesConfig.webp','Services settings page')}

    <h2>Language</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Interface Language</div></center><div class="v">Default is <b>Auto (System)</b>, which reads your locale. Pick any bundled translation from the dropdown.</div></div>
      <div class="prop"><center><div class="k">Generate translation with Gemini</div></center><div class="v">Enter a locale code (<code>en_US</code>, <code>fr_FR</code>, <code>zh_CN</code>…) and Mainstream generates a full translation pack using Gemini. Takes ~2 minutes. Useful for locales Mainstream doesn\'t ship yet.</div></div>
    </div>

    <h2>Music Recognition</h2>
    <p>Mainstream can listen through your default audio input and identify what\'s playing — tied to the bar\'s music module.</p>
    <div class="props">
      <div class="prop"><center><div class="k">Total duration timeout (s)</div></center><div class="v">How long to listen before giving up if no track is matched. Default 16 s.</div></div>
      <div class="prop"><center><div class="k">Polling interval (s)</div></center><div class="v">How often to sample the audio fingerprint. Default 4 s.</div></div>
    </div>

    <h2>Networking</h2>
    <p>A custom <strong>User agent</strong> string used for services that need one (weather API, music recognition, update checks). Override if your network blocks non-browser traffic.</p>

    <h2>Save paths</h2>
    <div class="props">
      <div class="prop"><center><div class="k">Video Recording Path</div></center><div class="v">Where <b>Record</b> (bar button) saves videos. Default <code>~/Videos</code>.</div></div>
      <div class="prop"><center><div class="k">Screenshot Path</div></center><div class="v">Where snips save. Default <code>~/Pictures/Screenshots</code>.</div></div>
    </div>

    <h2>Search</h2>
    <p>Controls for what the <a href="#overview-launcher">launcher search</a> covers and how you talk to it.</p>
    <div class="props">
      <div class="prop"><center><div class="k">File and folder search</div></center><div class="v">Searches your home folder live as you type in the launcher. Apps stay at the top of the results; files and folders appear below them.</div></div>
      <div class="prop"><center><div class="k">Prefixes</div></center><div class="v">The characters that jump the search straight to one kind of result: <code>/</code> actions, <code>;</code> clipboard history, <code>:</code> emojis, <code>=</code> math, <code>$</code> run a command, <code>?</code> web search. Each one can be changed to whatever you\'d rather type.</div></div>
      <div class="prop"><center><div class="k">Web search</div></center><div class="v">The search engine the launcher hands your query to. Google by default — swap the base URL for any engine you prefer.</div></div>
    </div>

    <h2>Weather</h2>
    <p>Feeds the weather shown on the <a href="#bar">bar</a>.</p>
    <div class="props">
      <div class="prop"><center><div class="k">Enable GPS based location</div></center><div class="v">Finds your location automatically so the forecast follows you. Turn it off to use a fixed city instead.</div></div>
      <div class="prop"><center><div class="k">Fahrenheit unit</div></center><div class="v">Switch from °C to °F. Takes a few seconds to apply.</div></div>
      <div class="prop"><center><div class="k">City name</div></center><div class="v">The place to show weather for when GPS based location is off.</div></div>
      <div class="prop"><center><div class="k">Polling interval (m)</div></center><div class="v">How often the forecast refreshes, in minutes.</div></div>
    </div>
  `
};

// ---------- UPDATE ----------
PAGES.update = {
  group: 'Settings', title: 'Update', icon: 'update',
  lede: 'Mainstream updates are snapshot-protected. Before anything installs, a snapshot of the system is taken — the snapshot skips your personal folders like Documents and Pictures, but backs up your programs, settings, and the OS itself — so if something stops working, you roll back from the boot screen without your files ever being touched.',
  render: () => `
    ${shot('UpdateConfig.webp','Update settings page')}

    <h2>Before &amp; after the update</h2>
    <p>The tip box at the top is worth reading before you click the button the first time: test the things you rely on <em>before</em> the update, and test the same things again after. Most updates come and go without a hitch, but knowing what to check makes it obvious if something stopped working.</p>

    <h2>How updating works</h2>
    <p>Type your password, hit <strong>Start update</strong>, and the steps run in order:</p>
    <ol>
      <li><strong>System packages</strong> — everything from the Arch and [mainstream] repositories (<code>pacman -Syu</code>). Snapshots are taken automatically right before and right after packages change.</li>
      <li><strong>Flatpak apps</strong> — system-wide and per-user installs.</li>
      <li><strong>Mainstream desktop</strong> — the desktop itself updates, but only when a new Mainstream release has been published.</li>
      <li><strong>Developer extras</strong> — a pass that catches developer-tool ecosystems (cargo, pipx, npm, nix, and friends), if you use them.</li>
    </ol>
    <p>If you\'ve added Snap yourself, it updates in the same run. AUR packages are more deliberate: even with an AUR helper installed, that step stays off by default — flip it on under the advanced options if you want AUR packages updated too. Everything streams into the output pane as it happens, a copy button (top-right) grabs the whole log, and the run ends with a plain <em>"Update completed successfully"</em> — or an honest note about which step needs a look.</p>

    ${callout('tip','Show advanced options', '<p>Enable the advanced options list to pick and choose which parts of the update run — a checklist shows exactly what the update will include.</p>')}

    <h2>If something breaks</h2>
    <p>Don\'t panic. You have a snapshot. Head over to <a href="#recovery">Recovery</a> to walk through rolling back from the Limine boot screen.</p>

    <h2>CLI equivalent</h2>
<pre><code><span class="c"># Identical to pressing "Start update"</span>
<span class="k">sudo</span> mainstream-update-helper

<span class="c"># With skip flags (any combination)</span>
<span class="k">sudo</span> mainstream-update-helper --skip-aur --skip-flatpak</code></pre>
  `
};

// ---------- RECOVERY ----------
PAGES.recovery = {
  group: 'Settings', title: 'Recovery', icon: 'recover',
  lede: 'Your safety net. If an update, a configuration experiment, or a manual package install wrecks the system, you can roll back to any recent snapshot from the boot screen in under a minute.',
  render: () => `
    ${shot('RecoveryConfig.webp','Recovery settings page')}

    <h2>If something breaks</h2>
    <p>The highlighted banner at the top is the essential message: <strong>your pre-update snapshot is waiting for you. Simply reboot your computer to recover.</strong></p>

    <h2>Recovering from your boot screen (Limine)</h2>
    ${shot('Limine-Snapshots-Config.webp','Limine boot screen — Snapshots menu expanded')}

    <ol>
      <li>Reboot. When the Limine boot screen appears, use the <code>↑</code>/<code>↓</code> arrow keys to find <strong>Snapshots</strong>.</li>
      <li>Press <code>Enter</code> to expand the list — each entry is a date-time stamped snapshot.</li>
      <li>Choose the snapshot taken <em>before</em> the update that broke things.</li>
      <li>Press <code>Enter</code> again to boot into that snapshot.</li>
      <li>Test the system. If issues persist, reboot and try an earlier snapshot.</li>
      <li>When satisfied, return to <strong>Settings → Recovery</strong> and run <strong>Restore Snapshot</strong> to make the current state permanent.</li>
      <li>Reboot once more and use the normal <strong>"linux"</strong> boot entry.</li>
    </ol>

    ${callout('warn','Booting a snapshot is read-only until you Restore', '<p>While you\'re booted into a snapshot, changes you make are discarded on the next reboot. This is intentional — it lets you shop around different snapshots non-destructively. <strong>Restore Snapshot</strong> is the commit.</p>')}

    <h2>System Restore</h2>
    <p>The lower panel shows the live output when you hit <strong>Restore Snapshot</strong>. <strong>Copy</strong> grabs the log, <strong>Clear output</strong> wipes the pane.</p>

    <h2>Manual snapshot management</h2>
<pre><code><span class="c"># List all snapshots</span>
<span class="k">snapper</span> list

<span class="c"># Take a named snapshot right now (before a risky experiment)</span>
<span class="k">sudo</span> snapper create -d <span class="s">"before-nvidia-555-test"</span>

<span class="c"># Delete a snapshot by number to reclaim space</span>
<span class="k">sudo</span> snapper delete <span class="s">42</span></code></pre>

    ${callout('info','How snapshots are stored', '<p>Mainstream uses Btrfs subvolume snapshots via <code>snapper</code>. They cost nothing while unchanged; as you modify files, COW grows the snapshot only by the delta. Even dozens of snapshots on a busy system add up to just a few GB.</p>')}
  `
};

// ---------- SECURITY ----------
PAGES.security = {
  group: 'Security', title: 'Security', icon: 'shield',
  lede: 'Every package on a Mainstream system is prebuilt, tested, and cryptographically signed. The Arch User Repository (AUR) — brilliant, but unvetted by design — is deliberately left off the default install. Here\'s why, and what replaces it.',
  render: () => `
    <h2>The short version</h2>
    <p>Mainstream never builds software recipes on your machine and never installs from an unvetted source. Everything comes from four signed repositories: Arch\'s own <code>core</code>, <code>extra</code>, and <code>multilib</code>, plus <strong>[mainstream]</strong> — our own curated, prebuilt repository that stands in for the AUR. No <code>yay</code>, no <code>paru</code>, no compiling at install time.</p>

    ${callout('note','Still full Arch underneath', '<p>Nothing here is locked down. Experienced users can opt into the AUR at any time (see the bottom of this page) — it just isn\'t the default, because the AUR\'s safety model asks more of you than a newcomer can reasonably give.</p>')}

    <h2>Why the AUR isn\'t enabled by default</h2>
    <p>The AUR is one of the best things about Arch. It carries tens of thousands of packages, keeps pace with upstream faster than almost anywhere else, and every recipe is a plain-text <code>PKGBUILD</code> you can read end to end. We use it — to <em>build</em> things, once, on our side. What we don\'t do is point your machine at it.</p>
    <p>The reason is in the name: it\'s a <em>user</em> repository, and it is not secure <em>by design</em>. That\'s not a flaw — it\'s how it\'s meant to work — but it assumes a level of vigilance that shouldn\'t be a requirement for using your computer:</p>
    <ul>
      <li><strong>Recipes are unvetted and run as you.</strong> Arch doesn\'t review or test AUR content. Building a package runs arbitrary shell code from a stranger with your privileges, and install hooks routinely touch root.</li>
      <li><strong>Nothing is signed.</strong> There\'s no cryptographic link between what\'s published and who published it, the way official packages have.</li>
      <li><strong>Accounts get taken over.</strong> A compromised maintainer account — or an <em>orphaned</em> package quietly re-adopted by a bad actor — can push a malicious update into something you already trust.</li>
      <li><strong>Helpers hide the one safeguard.</strong> Tools like <code>yay</code> collapse the whole thing into one command. The AUR\'s only real defense is that you read each <code>PKGBUILD</code> first — and one-command installs make it trivial to never look.</li>
    </ul>

    ${callout('warn','Built for seasoned users', '<p>The AUR\'s safety model is <em>manual review, every time</em>: read the <code>PKGBUILD</code> and any <code>.install</code> hook, follow the source URLs, and re-check on every update because the recipe can change. That asks the reader to spot a malicious build step in shell script they may not write. Shipping it on by default would hand a newcomer a loaded tool whose one line of defense they may not be equipped to use.</p>')}

    <p>There are practical costs, too. On-device builds aren\'t reproducible — two people installing &ldquo;the same&rdquo; package can get different results. They fail in opaque ways when a mirror dies or a build runs out of memory, they make first boot slow and fragile, and a later partial upgrade can break a package that was compiled against older libraries. None of that fits a distro meant to just work.</p>

    <h2>What replaces it: the [mainstream] repository</h2>
    <p>Instead of asking your machine to build recipes, we build them <strong>once, on our side</strong>, into a curated binary repository called <strong>[mainstream]</strong>. Each package is compiled, tested against the exact library versions the rest of the system ships, signed, and published. Your computer installs a finished, verified binary with plain <code>pacman</code> — the same trusted path as any official Arch package.</p>

    <table class="t">
      <thead><tr><th>Concern</th><th>AUR</th><th>[mainstream]</th></tr></thead>
      <tbody>
        <tr><td>Who builds it</td><td>Your machine, at install time</td><td>Us, once, ahead of time</td></tr>
        <tr><td>Reviewed &amp; tested</td><td>No</td><td>Yes, before it ships</td></tr>
        <tr><td>Cryptographically signed</td><td>No</td><td><span class="chip stream">Signed</span></td></tr>
        <tr><td>Reproducible</td><td>Varies per machine</td><td>Identical for everyone</td></tr>
        <tr><td>Runs code at install</td><td>Yes — arbitrary build scripts</td><td>No — just unpacks a binary</td></tr>
      </tbody>
    </table>

    ${callout('note','Built in the open, not a black box', '<p>You don\'t have to take <strong>[mainstream]</strong> on faith. Its entire build system lives publicly on GitHub, and the finished packages are published there in the open, on GitHub\'s own servers — so anyone can see exactly how each package is made, where it\'s served from, and confirm it matches its signature. Nothing about how your software is built or delivered is hidden.</p>')}

    <h3>Baked into the image</h3>
    <p>The same thing happens when the ISO is built. Our build system compiles every dependency that would otherwise come from the AUR into <strong>[mainstream]</strong> and bakes it straight into the image. The installer uses <code>pacman</code> and nothing else — it explicitly refuses any package that isn\'t in a configured repository, because the installer does not touch the AUR. A fresh Mainstream install has never run an AUR helper and never compiled a recipe on your disk.</p>

    <h3>Signed and verified</h3>
    <p>Trust is checked the same way Arch checks its own packages — with signatures.</p>
    <ul>
      <li><code>core</code>, <code>extra</code>, and <code>multilib</code> are verified against Arch\'s keyring.</li>
      <li><strong>[mainstream]</strong> is verified against the Mainstream signing key, which your system imports and trusts the first time it boots. From then on every update from <strong>[mainstream]</strong> is signature-checked — a tampered package simply won\'t install.</li>
    </ul>
    <p>The install image carries a local, offline copy of <strong>[mainstream]</strong> so you can install with no network at all. On first boot, once the signing key is imported and trusted, the system switches to the online signed repository for updates and reclaims the space the offline copy used. If the key ever fails to import, it safely stays on the verified local copy rather than trusting anything unsigned.</p>

    ${callout('tip','Verify it yourself', '<p>The Mainstream package key is trusted in your local <code>pacman</code> keyring. To inspect it:</p><pre><code><span class="k">pacman-key</span> --finger <span class="s">D644BEB9C1B7668E3A6C16DA8D567345B265848E</span></code></pre><p>Every <strong>[mainstream]</strong> package is signed by that key, and <code>pacman</code> refuses anything that doesn\'t match.</p>')}

    <h2>Want the AUR anyway?</h2>
    <p>It\'s still Arch. If you know what the AUR is and you accept the responsibility that comes with it, nothing stops you — install <code>yay</code> or <code>paru</code> yourself and use them as you always would. Mainstream\'s update tool will even pick a helper up and refresh your AUR packages alongside system updates if it finds one; if there isn\'t one, it simply skips that step.</p>

    ${callout('warn','The review is yours now', '<p>The moment you install from the AUR, its safety model is in your hands: read every <code>PKGBUILD</code> before you build it, and remember that AUR packages sit outside the tested, signed baseline — a later system update can leave one needing a rebuild.</p>')}
  `
};

// ---------- ABOUT ----------
PAGES.about = {
  group: 'Settings', title: 'About', icon: 'info',
  lede: 'Where Mainstream comes from, where to get help, and credit to the open-source projects it\'s built on.',
  render: () => `
    ${shot('AboutConfig.webp','About page — distro links and project credits')}

    <h2>Distro</h2>
    <p>The top of the page links straight to what you\'ll want when you need it:</p>
    <div class="props">
      <div class="prop"><center><div class="k">Documentation</div></center><div class="v">This site — <a href="https://mainstreamos.org/">mainstreamos.org</a>.</div></div>
      <div class="prop"><center><div class="k">Issues</div></center><div class="v">Report a bug or request a feature on the tracker.</div></div>
      <div class="prop"><center><div class="k">Discord</div></center><div class="v">Live help and community — questions, showcases, and release news.</div></div>
      <div class="prop"><center><div class="k">Privacy Policy</div></center><div class="v">What Mainstream does and doesn\'t collect.</div></div>
      <div class="prop"><center><div class="k">Donate</div></center><div class="v">Like where this is going? Help it get there.</div></div>
    </div>

    <h2>Forked Projects</h2>
    <p>Mainstream is built with excellent open-source, and the About page credits each project with a link to the original (and a Donate link where the maintainers accept support). The big ones:</p>
    <table class="t">
      <thead><tr><th>Project</th><th>By</th><th>What it is</th></tr></thead>
      <tbody>
        <tr><td><b><a href="https://github.com/end-4/dots-hyprland">illogical-impulse</a></b></td><td>end-4 (<a href="https://github.com/sponsors/end-4">Donate</a>)</td><td>The dotfiles Mainstream\'s desktop is forked from.</td></tr>
        <tr><td><b><a href="https://git.outfoxxed.me/quickshell/quickshell">Quickshell</a></b></td><td>outfoxxed</td><td>The Qt/QML shell framework the whole UI is built on.</td></tr>
        <tr><td><b><a href="https://github.com/yayuuu/hyprland-scroll-overview">Scroll Overview</a></b></td><td>yayuuu</td><td>The Hyprland plugin behind the workspace overview.</td></tr>
        <tr><td><b><a href="https://calamares.io">Calamares</a></b></td><td>Calamares Team</td><td>The graphical installer.</td></tr>
        <tr><td><b><a href="https://github.com/ful1e5/Bibata_Cursor">Bibata Cursor</a></b></td><td>ful1e5 (<a href="https://github.com/sponsors/ful1e5">Donate</a>)</td><td>The default cursor theme.</td></tr>
        <tr><td><b><a href="https://github.com/xCaptaiN09/pixie-sddm">Pixie</a></b></td><td>xCaptaiN09</td><td>The SDDM login theme.</td></tr>
        <tr><td><b><a href="https://github.com/BlueManCZ/hyprmod">hyprmod</a></b></td><td>BlueManCZ</td><td>The keybind editor behind Settings → Keybinds.</td></tr>
        <tr><td><b><a href="https://archlinux.org">Arch Linux</a></b></td><td>Arch Linux team (<a href="https://github.com/sponsors/archlinux">Donate</a>)</td><td>The base distribution.</td></tr>
      </tbody>
    </table>

  `
};

// ---------- DAVINCI ----------
PAGES.davinci = {
  group: 'Creative', title: 'Set up DaVinci Resolve', icon: 'film',
  lede: 'Mainstream installs DaVinci Resolve for you — GPU detection, OpenCL, the download, and the fiddly Arch-specific fixes are all automatic. Pick it in the welcome screen or run one command.',
  render: () => `
    ${shot('Davinci-Resolve.webp','DaVinci Resolve Studio running on Mainstream')}

    <p>DaVinci Resolve is proprietary Blackmagic software, so you still supply it yourself — but Mainstream automates the whole finicky Linux setup: GPU detection, the right OpenCL runtime, the download from Blackmagic, packaging, and the Arch-specific fixes that normally send people down a two-hour rabbit hole.</p>

    <h2>Install it</h2>
    <p>Two ways — both run the same installer.</p>

    <h3>Welcome screen</h3>
    ${shot('Davinci-Welcome-Install.webp','The Welcome app Set up your apps page with DaVinci Resolve Studio ticked')}
    <p>Open <em>Set up your apps</em> and tick <strong>DaVinci Resolve</strong> or <strong>DaVinci Resolve Studio</strong>. It installs in the background while you finish the tour, and notifies you when it\'s done.</p>

    <h3>Terminal</h3>
    <p>Any time:</p>
<pre><code><span class="c"># free edition</span>
install-davinci-resolve

<span class="c"># Studio (needs your license to unlock)</span>
install-davinci-resolve --studio</code></pre>

    <p>Either way, the installer:</p>
    <ul>
      <li>Detects your GPU and installs the matching <strong>OpenCL</strong> runtime.</li>
      <li>On <strong>AMD RDNA4</strong> (RX 9070-class) it automatically pins <strong>ROCm 7.1.1</strong> — ROCm 7.2 currently breaks Resolve on these cards.</li>
      <li>Downloads the latest Resolve from Blackmagic (it asks for a registration name + email — Blackmagic\'s gate, not ours).</li>
      <li>Builds it into a proper pacman package and applies the Arch runtime fixes (system glib, the runtime folders Resolve needs), so it launches instead of crashing.</li>
      <li><strong>Studio</strong> also gets the open-source VAAPI encoder plugin, so AMD/Intel can hardware-encode (see below).</li>
    </ul>

    ${callout('note','What to have ready', '<p>A <strong>Studio license</strong> if you picked Studio (the free edition needs none). Room for the download — Resolve is large (Studio ~13 GB) and needs roughly <strong>50 GB</strong> free during the build, reclaimed afterwards. And be online for the download and, for Studio, first-launch activation. Re-running the installer is always safe: the download is cached, so it resumes rather than starting over.</p>')}

    ${callout('note','Hardware encode on Linux, in one line', '<p>Resolve\'s <em>own</em> encoder does hardware H.264/H.265/AV1 only on <strong>NVIDIA</strong>. For <strong>AMD/Intel</strong>, the installer adds a VAAPI encoder plugin (Studio only) that routes export through Mesa — so you still get hardware encode, just by a different path.</p>')}

    <h2>First launch</h2>
    <p>Open <strong>DaVinci Resolve</strong> from your apps. It creates its project database, shows the splash briefly, then drops you on the Media page. Studio verifies its license on first launch, so be online the first time.</p>

    <h2>Handling H.264 / H.265 / AAC</h2>
    <p>Linux Resolve intentionally doesn\'t ship consumer-codec decoders. You have two paths:</p>
    <ol>
      <li><strong>Free version</strong> — no H.264/H.265 in or out. Transcode sources to a Resolve-friendly DNxHR-LB intermediate first (DNxHR needs 4:2:2, so force the pixel format):
<pre><code><span class="k">ffmpeg</span> -i ./my-clip.mp4 -c:v dnxhd -profile:v dnxhr_lb \\
  -vf format=yuv422p -c:a pcm_s16le ./my-clip.dnxhr.mov</code></pre>
        Then import <code>my-clip.dnxhr.mov</code> into Resolve.
      </li>
      <li><strong>Resolve Studio</strong> (paid) — imports and exports H.264/H.265 natively. For AAC in MP4/MOV, add the community FOSS Resolve AAC FDK plugin (needs <code>libfdk-aac</code>), or deliver PCM audio and mux with <code>ffmpeg</code> afterwards.</li>
    </ol>

    <h2>AV1 &amp; hardware encode</h2>
    <table class="t">
      <thead><tr><th>GPU</th><th>Hardware encode in Resolve on Linux</th></tr></thead>
      <tbody>
        <tr><td><b>NVIDIA Ada / RTX 40+</b></td><td>Native NVENC, incl. <strong>AV1</strong>, in the Deliver page (Studio, Resolve 18.1+; RTX 50 needs Resolve 20+). Works out of the box.</td></tr>
        <tr><td><b>NVIDIA RTX 20 / 30</b></td><td>Native NVENC H.264 / H.265 (these cards have no AV1 engine).</td></tr>
        <tr><td><b>AMD · Intel (Studio)</b></td><td>Through the <strong>VAAPI encoder plugin the installer adds</strong> — H.264 / H.265 / AV1 via Mesa VAAPI, right in the Deliver tab. (The free edition can\'t load plugins.)</td></tr>
      </tbody>
    </table>
    ${callout('warn','AV1 on Linux delivers to MP4', '<p>Native AV1 is offered under the <strong>MP4</strong> container only — MOV and MKV aren\'t AV1 targets in Resolve on Linux (remux an MP4 with <code>ffmpeg</code> if you need MKV). And since Resolve has no AAC on Linux, pair AV1 with <strong>PCM</strong> audio or transcode the audio afterwards.</p>')}

    <h2>Rendering</h2>
    ${shot('Davinci-Resolve-Encoding.webp','Deliver page with custom render preset')}

    <p>Jump to the <strong>Deliver</strong> page. Recommended starter presets:</p>

    <table class="t">
      <thead><tr><th>Target</th><th>Format</th><th>Codec</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td><b>YouTube (1080p / 4K)</b></td><td>MP4</td><td>H.264 High / H.265 Main10</td><td>NVENC on NVIDIA; the VAAPI plugin on AMD/Intel Studio.</td></tr>
        <tr><td><b>AV1 (YouTube / archive)</b></td><td>MP4</td><td>AV1</td><td>NVENC AV1 on RTX 40+, else the VAAPI plugin (Studio). Pair with PCM audio.</td></tr>
        <tr><td><b>Archival</b></td><td>MOV</td><td>DNxHR HQX</td><td>Visually lossless, huge files.</td></tr>
        <tr><td><b>Proxies</b></td><td>MOV</td><td>DNxHR LB</td><td>Tiny files, fast scrubbing.</td></tr>
      </tbody>
    </table>

    ${callout('tip','If something\'s off', '<p>The installer already sets up OpenCL and the runtime folders, so first-launch crashes are rare. On AMD RDNA4 it pins ROCm 7.1.1 automatically — to undo that later, run <code>install-davinci-resolve --rocm-unpin</code>. Still stuck? <code>clinfo</code> should list your GPU; if not, re-run the installer.</p>')}
  `
};

// ---------- OBS ----------
PAGES.obs = {
  group: 'Creative', title: 'Set up OBS', icon: 'cam',
  lede: 'Mainstream runs OBS on Wayland via PipeWire. Screen capture, windowed capture, and webcam capture all work natively — and GPU encoding is a checkbox, not a config-file safari.',
  render: () => `
    ${shot('Obs-Default-Scene.webp', 'OBS on Mainstream capturing a game live with a webcam overlay and the audio mixer running', 'OBS on Mainstream, mid-session: a game captured live at a full 60 fps through the Wayland Vulkan path — barely touching the CPU — with a webcam picture-in-picture, the mixer running, and scenes ready to switch. The whole streamer layout, working out of the box.')}

    <h2>Install</h2>
    <p>OBS ships on Mainstream as the <code>mainstream-obs</code> bundle — OBS Studio with Wayland/OpenGL game capture, a preconfigured virtual camera, and the creator plugins already wired in. If you picked <strong>Streaming</strong> during install it\'s already here; otherwise the Welcome app offers it on first login:</p>
    ${shot('Obs-Welcome-Install.webp', 'The Welcome app app-setup page with OBS Studio offered', 'The Welcome app\'s <em>Set up your apps</em> page offers OBS Studio — tick it and the bundle installs in the background while you finish the tour.')}
    <p>Or from a terminal:</p>
<pre><code><span class="k">sudo</span> pacman -S mainstream-obs</code></pre>
    <p>That pulls OBS Studio plus <code>obs-vkcapture</code> (low-overhead Vulkan/OpenGL game capture), <code>v4l2loopback</code> (the virtual camera), the <strong>Browser Source</strong> plugin (web overlays, alerts, and custom browser docks), and the <code>move-transition</code>, <code>source-record</code>, <code>source-clone</code>, <code>composite-blur</code>, and <code>shaderfilter</code> plugins.</p>

    <h2>Screen &amp; game capture on Wayland</h2>
    <p>For your desktop, add a <strong>Source</strong> → <strong>Screen Capture (PipeWire)</strong>. A portal dialog asks which monitor or window to share; OBS remembers the choice across restarts via the portal token.</p>
    ${twoShot('Obs-Pipewire-Portal-Window-1.webp', 'The source starts empty — click Open Selector to choose what to share.', 'Obs-Pipewire-Portal-Window-2.webp', 'The system portal lists your monitors and windows. Pick one and hit Share.')}
    <p>This portal dialog is Wayland-native and comes from the desktop, not OBS — so a first-time capture looks a little different from other systems, but nothing is wrong: click <strong>Open Selector</strong>, choose your monitor or window, and share.</p>
    <h3>Set up Game Capture</h3>
    <p>For a single game, a direct Vulkan/OpenGL capture is far lighter than grabbing the whole screen. <code>obs-vkcapture</code> ships with <code>mainstream-obs</code>, so there is nothing to install:</p>
    <ol>
      <li><strong>Add the source.</strong> In OBS, add a <strong>Source</strong> to your scene and pick <strong>Game Capture (Linux Vulkan/OpenGL)</strong>.</li>
      <li><strong>Apply the launch option.</strong> Right-click the game in Steam → <strong>Properties</strong>, and paste <code>env OBS_VKCAPTURE=1 %command%</code> into the <em>Launch Options</em> field.</li>
      <li><strong>Launch the game.</strong> <code>obs-vkcapture</code> hands the frames straight to OBS and the Game Capture source fills in automatically.</li>
    </ol>
    ${callout('tip','Capture and tune at once', '<p>Launch options stack — chain the capture with a performance wrapper: <code>env OBS_VKCAPTURE=1 gamemoderun %command%</code>. See <a href="#gaming">Set up Gaming</a> for the full ordering rule.</p>')}

    <h2>GPU encoding</h2>
    <p>Open <strong>Settings → Output</strong>. The hardware encoders only appear once you switch <strong>Output Mode</strong> from Simple to <strong>Advanced</strong>:</p>
    ${twoShot('Obs-Encoder-Settings-1.webp', 'Switch the Output Mode dropdown (highlighted) from Simple to Advanced.', 'Obs-Encoder-Settings-2.webp', 'The Video Encoder dropdown then lists your GPU\'s hardware encoders.')}
    <p>Pick the encoder that matches your GPU.</p>

    ${callout('note','Linux encoder names', '<p>On Linux, AMD hardware encode is labelled <b>VAAPI</b> (not AMF), and Intel is <b>QuickSync via oneVPL</b> — both are set up by Mainstream\'s GPU driver install.</p>')}

    <h2>Virtual camera</h2>
    <p>The bundle preconfigures <code>v4l2loopback</code> as <code>/dev/video10</code> labelled &ldquo;OBS Virtual Camera&rdquo;, so the <strong>Start Virtual Camera</strong> button works immediately — no manual <code>modprobe</code>. Any app (browser, Zoom, Discord) can then pick &ldquo;OBS Virtual Camera&rdquo; as its webcam.</p>

    <h2>Webcam capture</h2>
    <p>Add a <strong>Source</strong> → <strong>Video Capture Device (V4L2)</strong>. Your webcam appears in the dropdown.</p>
  `
};

// ---------- GAMING ----------
PAGES.gaming = {
  group: 'Creative', title: 'Set up Gaming', icon: 'game',
  lede: 'One package and one keybind: install the gaming stack from Welcome or with pacman, then press <code>SUPER</code> (the ⊞ Windows or ⌘ Command key) + <code>G</code> for a SteamOS-style Big Picture session. Proton, GameMode, MangoHud, ntsync, controllers, VRR and HDR all come configured.',
  render: () => `
    ${shot('Gaming-Big-Picture.webp', 'Steam Big Picture running as the Mainstream Gaming Mode session', 'Gaming Mode: Steam Big Picture, rendered full-screen by gamescope. One tap of <code>SUPER</code> + <code>G</code> from the desktop.')}

    <h2>Install the stack</h2>
    <p>On Mainstream, gaming is one metapackage — <code>mainstream-gaming</code>. It brings the gamescope Big Picture session, the Gaming Mode switch, GameMode, MangoHud, the Vulkan loaders, and the <code>ntsync</code> kernel module. Steam and the 32-bit Vulkan stack are pulled the first time you enter Gaming Mode, so the base install stays lean.</p>

    <h3>From the Welcome app</h3>
    ${shot('Gaming-Welcome-Install.webp', 'The Welcome app Set up your apps page with a Gaming option checked', 'On first login, the Welcome app\'s <em>Set up your apps</em> page offers <strong>Desktop Gaming</strong> (Steam, Proton, and GPU drivers) and <strong>Desktop + Big Picture</strong> (the same, plus a console-style gamescope session on <code>SUPER</code> + <code>G</code>). Tick either — they install in the background while you finish the tour, and a notification lands when each one is ready.')}
    <p><strong>Desktop + Big Picture</strong> does a little more than <strong>Desktop Gaming</strong>: it also pulls Steam and the 32-bit stack up front, so your very first <code>SUPER</code>+<code>G</code> drops straight into Big Picture with nothing left to download.</p>

    <h3>From the terminal</h3>
<pre><code><span class="k">sudo</span> pacman -S mainstream-gaming</code></pre>

    ${callout('note','Drivers are already set up', '<p>You don\'t pick a GPU driver by hand. Mainstream configures it at install time — NVIDIA proprietary, AMD and Intel on mesa — and the Vulkan loaders plus 32-bit libraries come with the gaming stack. Just install and play.</p>')}

    <h2>Gaming Mode — <code>SUPER</code>+<code>G</code></h2>
    <p>Press <code>SUPER</code>+<code>G</code> from the desktop to drop into <strong>Steam Big Picture</strong>, rendered by gamescope as its own session — the same console-style experience as a Steam Deck, with VRR and HDR handled for you.</p>
    <ul>
      <li><strong>First press</strong> opens a quick <em>Gaming Mode Setup</em> menu. It introduces the one-time Steam download and lets you choose where <code>SUPER</code>+<code>G</code> returns to and whether to boot straight into gaming. Hit <strong>Start Gaming</strong> to go.</li>
      <li><strong><code>Ctrl</code>+<code>SUPER</code>+<code>G</code></strong> reopens the Setup menu any time, without switching sessions.</li>
      <li><strong>To leave</strong>, open Steam's power menu and pick <em>Switch to Desktop</em> — you land back in your Hyprland session exactly as you left it.</li>
    </ul>

    ${shot('Gaming-Big-Picture-Power-Menu.webp', 'The Steam Big Picture power menu', 'Leaving is one click from the couch — open Steam\'s power menu in Big Picture and pick Switch to Desktop to drop back into Hyprland.')}

    ${callout('tip','Console Mode', '<p>Choose <strong>Console Mode</strong> on the installer\'s session screen (or set the boot target in Gaming Mode Setup) and the machine boots straight into Gaming Mode every time — turning any mini-PC into a couch console. The full desktop is always one <em>Switch to Desktop</em> away.</p>')}

    ${callout('warn','NVIDIA and Wayland', '<p>Driver 555+ is required for good Wayland gaming (VRR, HDR, explicit sync). <code>nvidia-dkms</code> on Mainstream tracks the latest stable — run an update before your first game session.</p>')}

    <h2>Steam + Proton</h2>
    <p><strong>Proton GE comes installed and enabled by default.</strong> Steam Play is switched on for every title and Proton GE is the default compatibility tool, so most Windows games launch straight from your library with nothing to configure.</p>
    <ol>
      <li>Launch Steam, sign in.</li>
      <li>Install a game and press <strong>Play</strong> — Proton GE handles the rest.</li>
      <li>If a title doesn\'t start, right-click the game → <em>Properties</em> → <em>Compatibility</em> and try a different Proton version.</li>
    </ol>

    <h3>More Proton versions, with Proton Plus</h3>
    <p>Steam bundles a few Proton versions and Proton GE covers most of the rest, but now and then a game wants a specific or newer build. <strong>Proton Plus</strong> makes that painless. Search for it in the <strong>Software</strong> app and install it, then open it up: the main view lists Proton versions you can download with a click. Once you\'ve grabbed the ones you want, switch to the <strong>Games</strong> tab — it lists your Steam library and lets you set which compatibility tool each game runs with, right from there.</p>

    <h3>Launch options that matter</h3>
    <table class="t">
      <thead><tr><th>Option</th><th>Effect</th></tr></thead>
      <tbody>
        <tr><td><code>gamemoderun %command%</code></td><td>Runs the game under GameMode — CPU governor jumps to performance, kernel scheduler prioritizes the process, GPU throttles relax.</td></tr>
        <tr><td><code>MANGOHUD=1 %command%</code></td><td>Overlay FPS, frame times, CPU/GPU temps.</td></tr>
        <tr><td><code>PROTON_ENABLE_NVAPI=1 %command%</code></td><td>Enables DLSS frame generation on NVIDIA under Proton.</td></tr>
        <tr><td><code>DXVK_ASYNC=1 %command%</code></td><td>Pre-compile shaders asynchronously. Reduces stutter on first load.</td></tr>
        <tr><td><code>PROTON_FSR4_UPGRADE=1 %command%</code></td><td>Upgrades a game's upscaling to <strong>FSR 4</strong> on RDNA 4 (RX 9000) and other standard GPUs — sharper image, better frame generation.</td></tr>
        <tr><td><code>PROTON_FSR4_RDNA3_UPGRADE=1 %command%</code></td><td>Enables the <strong>FSR 4</strong> upgrade path on RDNA 3 (RX 7000) GPUs.</td></tr>
      </tbody>
    </table>

    <h3>Stacking several at once</h3>
    <p>Combine as many of these as you like in one Launch Options line. The rule: <strong>environment variables</strong> (<code>NAME=value</code>) go first, any <strong>wrapper commands</strong> (<code>gamemoderun</code>, <code>mangohud</code>) go next, and <code>%command%</code> — the game itself — always comes last.</p>
<pre><code><span class="c"># FSR 4 upscaling, under GameMode, with the MangoHud overlay</span>
PROTON_FSR4_UPGRADE=1 gamemoderun mangohud %command%</code></pre>
    ${twoShot('Gaming-Steam-Properties.webp', 'Right-click a game → Properties', 'Gaming-Steam-Launch-Options.webp', 'Paste your options into the Launch Options field')}

    <h2>Controllers</h2>
    <p>Plug or pair your controller (see <a href="#bluetooth">Bluetooth</a>). Steam Input auto-handles DualSense, DualShock, Xbox, Switch Pro, and 8BitDo pads, and the <code>ntsync</code> module that ships with the stack keeps Proton's synchronization fast.</p>

    <h2>VRR &amp; HDR in games</h2>
    <p>Turn on <strong>VRR</strong> in <a href="#display">Settings → Display</a> for your primary monitor. Run games fullscreen or borderless (Hyprland treats borderless-fullscreen the same as real fullscreen). HDR requires a driver with explicit-sync (NVIDIA 555+, RADV on mesa 24+).</p>

    ${callout('tip','Lutris for non-Steam games',
      '<p>For GOG, Epic, Battle.net, and other stores install <code>lutris</code> and <code>wine-staging</code>. Lutris scripts auto-configure most titles — the install page is practically one click.</p>')}

    <h2>Benchmarking and troubleshooting</h2>
    <ul>
      <li><strong>MangoHud</strong> — live overlay. Press <code>Shift</code>+<code>F12</code> to toggle.</li>
      <li><strong>glxinfo / vulkaninfo</strong> — verify the driver is actually in use.</li>
      <li><strong>protontricks</strong> — per-game registry and DLL tweaks for edge-case titles.</li>
    </ul>
  `
};

// end

// ---------- DESKTOP ----------
PAGES.desktop = {
  group: 'Desktop', title: 'The Desktop', icon: 'iface', navTitle: 'The Desktop',
  lede: 'One bar, one dock, and windows that stay out of your way. This page is the tour of the pieces you look at all day.',
  render: () => `
    ${shot('Main-Desktop-UI.webp','The Mainstream desktop: bar on top, dock on the bottom, clock widget on the wallpaper','The whole desktop at rest — bar up top, dock below, and the wallpaper clock in between.')}

    <h2>The bar</h2>
    <p>Everything lives in one strip: your workspace widget in the center, the media widget to its left, and the clock, utility tools, and weather on the right.</p>
    <p>The workspace widget shows which apps are open on each workspace and which one you're on right now. Scroll your mouse wheel over it — or hold <code>SUPER</code> (the ⊞ Windows or ⌘ Command key) and scroll anywhere — to move through your workspaces.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Bar-Overview-Animation.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>The current workspace stays highlighted as you scroll between them, with app icons on the workspaces that have windows open.</figcaption>
    </figure>
    ${shot('Bar-Time-And-Tools.webp','The bar clock with the time and date beside the screenshot, screen-record, color-picker, and microphone tools','The clock sits beside the utility tools — screenshot, screen record, color picker, and microphone.')}
    ${shot('Bar-Media-Player.webp','The bar media widget expanded into a full player','The media widget grows into a full player when you need it — art, seek bar, volume, and track controls.')}

    <h2>The dock</h2>
    <p>Pinned apps, running windows, and a launcher button — with animations that make it feel alive. Right-click any icon for per-app volume, pin controls, and a workspace menu that always shows the ten workspaces around you.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Dock-Animations.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>The dock in motion.</figcaption>
    </figure>

    <h2>Title bars, your call</h2>
    <p>Tiling purists keep windows clean; everyone else can flip on familiar title bars with a close button. It\'s one toggle in <strong>Settings → Interface → Decorations</strong>, and it applies to every window instantly — no logout, no reload.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Toggleable-Title-Bars.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Title bars flipping on and off live from Settings.</figcaption>
    </figure>

    ${callout('tip','Make it yours','<p>Everything on this page is tunable: bar position and style in <a href="#bar">Settings → Bar</a>, dock behavior in <a href="#interface">Settings → Interface</a>, and the wallpaper clock in <a href="#background">Settings → Background</a>.</p>')}
  `
};

PAGES.shortcuts = {
  group: 'Desktop', title: 'Shortcuts', icon: 'keyboard', navTitle: 'Shortcuts',
  lede: 'You never have to memorize anything — one shortcut brings up a searchable list of every other. This is the page to read first.',
  render: () => `
    <h2>Every shortcut, one key away</h2>
    <p>Press <code>SUPER</code> (the ⊞ Windows or ⌘ Command key) + <code>TAB</code> at any time for a searchable cheat sheet of every keybind on the system. Start typing to filter it down — launching apps, moving windows, switching workspaces, screenshots, Gaming Mode, the lot. It\'s the fastest way to learn Mainstream, and the one shortcut worth knowing on day one.</p>
    ${shot('Keybind-Cheatsheet.webp','The SUPER + TAB cheat sheet: a search box above every shortcut, grouped by Shell, Window, Workspace, Apps, and more','SUPER + TAB brings up a searchable list of every shortcut, grouped by what it does.')}

    <h2>The essentials</h2>
    <p>A handful worth committing to memory — the rest are always a <code>SUPER</code> + <code>TAB</code> away.</p>
    <div class="props">
      <div class="prop"><center><div class="k">Super</div></center><div class="v">Search and launch anything — apps, files, quick math.</div></div>
      <div class="prop"><center><div class="k">Super + Scroll ↑/↓</div></center><div class="v">Switch between workspaces.</div></div>
      <div class="prop"><center><div class="k">Super + E</div></center><div class="v">File manager.</div></div>
      <div class="prop"><center><div class="k">Super + B</div></center><div class="v">Browser.</div></div>
      <div class="prop"><center><div class="k">Super + Q</div></center><div class="v">Close the focused window.</div></div>
      <div class="prop"><center><div class="k">Super + W</div></center><div class="v">Wallpaper switcher.</div></div>
      <div class="prop"><center><div class="k">Print</div></center><div class="v">Screenshot to clipboard and file.</div></div>
      <div class="prop"><center><div class="k">Super + G</div></center><div class="v">Gaming Mode — Steam Big Picture.</div></div>
      <div class="prop"><center><div class="k">Super + C</div></center><div class="v">Code editor.</div></div>
      <div class="prop"><center><div class="k">Super + T</div></center><div class="v">Terminal — rarely needed, but always here.</div></div>
    </div>

    <h2>Shortcuts for your layout</h2>
    <p>Windows can tile a few different ways — dwindle, master, scrolling, monocle, or float — and you can pick one per workspace in <a href="#layouts">Settings → Layouts</a>. Some of them add shortcuts of their own: rearranging the master stack, stepping through a monocle, scrolling between windows. If you switch off the default, press <code>SUPER</code> + <code>TAB</code> and look under <strong>Master Layout</strong>, <strong>Scrolling Layout</strong>, and <strong>Monocle Layout</strong> — the cheat sheet lists exactly what each one adds.</p>

    ${callout('tip','Make them yours','<p>Every shortcut is remappable from <a href="#keybinds">Settings → Keybinds</a> — search, rebind, and reset to defaults without touching a config file.</p>')}
  `
};

// ---------- VERIFY YOUR ISO ----------
PAGES.verify = {
  group: 'Security', title: 'Verify your ISO', icon: 'shield', navTitle: 'Verify your ISO',
  lede: 'Thirty seconds to prove the image you downloaded is exactly the one we published — untouched, byte for byte.',
  render: () => `
    <h2>Two files, two different jobs</h2>
    <p>Every release ships with two companion files, and they answer different questions:</p>
    <div class="props">
      <div class="prop"><center><div class="k">.sha256 — the checksum</div></center><div class="v">Proves the download wasn\'t corrupted on the way to you. Anyone can generate one, so it can\'t prove who made the ISO.</div></div>
      <div class="prop"><center><div class="k">.sig — the signature</div></center><div class="v">Proves the ISO genuinely came from Mainstream and hasn\'t been replaced. Only the Mainstream signing key can produce it.</div></div>
    </div>
    <p>Both sit next to every release on the <a href="https://sourceforge.net/projects/mainstreamos/files/">downloads page</a>. The signature is the one that matters most — here\'s how to check it.</p>

    <h2>Verify on Linux or macOS</h2>
    <p>You need <code>gpg</code>, which ships with nearly every Linux distribution (macOS: <code>brew install gnupg</code>). Run these from the folder holding the ISO and its companion files:</p>
    <pre><code># 1. Fetch the Mainstream signing key
curl -O https://mainstreamos.org/mainstream.pub

# 2. Check its fingerprint BEFORE trusting it — it must be exactly:
#    D644 BEB9 C1B7 668E 3A6C  16DA 8D56 7345 B265 848E
gpg --show-keys mainstream.pub

# 3. Import it, then verify the ISO against its signature
gpg --import mainstream.pub
gpg --verify mainstream-1.0.0.iso.sig mainstream-1.0.0.iso

# 4. (optional) Confirm the download wasn\'t corrupted
sha256sum -c mainstream-1.0.0.iso.sha256</code></pre>
    <p>Using the NVIDIA edition? Same steps — just swap in its filenames.</p>

    <h2>What a good result looks like</h2>
    <p>Step 3 prints <strong>Good signature from "MainstreamOS Packages"</strong>, and step 4 prints <strong>OK</strong>. You\'ll also see a warning that the key "is not certified with a trusted signature" — that\'s normal: it only means you haven\'t personally marked the key as trusted in your own keyring. What matters is that the fingerprint from step 2 matches the one printed above, and step 3 says <em>Good</em>.</p>

    ${callout('warn','If anything doesn\'t match','<p>Stop — don\'t flash or boot the image. Delete it, download again from <a href="https://mainstreamos.org/download">mainstreamos.org/download</a>, and verify once more. If it still fails, tell us on <a href="https://discord.gg/WJ3AUK5Aqd">Discord</a> so we can look into the mirror that served it.</p>')}

    <h2>Verifying from Windows</h2>
    <p>Downloading from Windows before you switch? The checksum check is built in — open PowerShell in your Downloads folder and compare the output to the contents of the <code>.sha256</code> file:</p>
    <pre><code>certutil -hashfile mainstream-1.0.0.iso SHA256</code></pre>
    <p>For the signature, install <a href="https://gpg4win.org">Gpg4win</a> and run the same three <code>gpg</code> commands above — they work unchanged in PowerShell.</p>

    <h2>Where the trust comes from</h2>
    <p>The ISO is signed with the same key that signs every package in the <a href="#security">[mainstream] repository</a> — the key your installed system verifies on every single update. Its public half is published at <a href="https://mainstreamos.org/mainstream.pub">mainstreamos.org/mainstream.pub</a>, and the build system that produces everything it signs is <a href="https://github.com/MainstreamOS">public on GitHub</a>.</p>
  `
};

PAGES['overview-launcher'] = {
  group: 'Desktop', title: 'Overview & Launcher', icon: 'overview',
  lede: 'A zoomed-out map of every workspace, and a launcher that finds apps, folders, files, and answers.',
  render: () => `
    ${shot('Overview.webp','The scrolling overview showing ten workspaces and the application grid','The overview: every workspace at a glance, with the launcher and app grid ready below.')}

    <h2>The app launcher</h2>
    <p>Tap <code>SUPER</code> (the ⊞ Windows or ⌘ Command key) and the launcher and overview open. The grid below the workspaces puts every installed app one gesture away, and it behaves the way phones taught you: drag tiles to rearrange them, organize apps into named folders, and drag an app or a folder full of apps straight out of the grid onto any workspace in the overview to launch them there.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Application-Launcher-Tour.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Open single apps or whole folders of apps at once, and rearrange your open apps across your workspaces.</figcaption>
    </figure>

    <h2>The scrolling overview</h2>
    <p>Sweep the cursor into the hot corner (top left) or press <code>SUPER</code> + <code>O</code> and the desktop zooms out into a map of your workspaces. Scroll to glide through them, drag windows between them, and click anywhere to dive back in. Combine it with the Scrolling layout in <strong><a href="#layouts">Settings → Layouts</a></strong> and you get the full niri-like experience.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Hotcorner-Scrolling-Overview.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Hot corner in, scroll across ten workspaces, drop into the one you want.</figcaption>
    </figure>

    <h2>Move files across workspaces</h2>
    <p>The overview isn\'t just for windows. Pick up a file or folder, glide through the overview, and drop it on any workspace — or straight into an app or browser waiting there.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Moving-Files-Across-Workspaces.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Dragging a file from one workspace\'s Files window to another, through the overview.</figcaption>
    </figure>

    <h2>A launcher that finds everything</h2>
    <p>Start typing — in the launcher or with the overview up — and the search looks well beyond apps: folders and files jump straight to Files, math evaluates inline, and anything else can run as a command or head to the web.</p>
    ${shot('Overview-Search.webp','Launcher results showing an app, a folder, files, a command, and a math result','One query, five kinds of answers — apps, folders, files, a runnable command, and inline math.')}

    <h2>Search what you see</h2>
    <p>The <strong>Google Lens</strong> button on the search bar hands anything on your screen to a visual search. Click it, draw a box around whatever you're curious about — a product in a video, a plant in a photo, text you want translated — and the selection opens in Google Lens in your browser: identified, translated, or searched.</p>
    ${shot('Google-Lens-Button.webp','The Google Lens button on the launcher search bar','The Google Lens button, on the launcher search bar.')}

    <h2>Name that song</h2>
    <p>The <strong>Recognize music</strong> button on the search bar names whatever is playing — one click starts listening, to your computer's own audio by default or the microphone for music in the room.</p>
    ${shot('Recognize-Music-Button.webp','The Recognize music button on the launcher search bar','The Recognize music button, on the launcher search bar.')}
    <p>As soon as it finds a match, a notification names the track alongside its cover art, with one-tap actions to open it on <strong>Shazam</strong>, search <strong>YouTube</strong>, or copy the title. Recognition timing is tunable in <strong>Settings → <a href="#services">Services</a></strong>.</p>
    ${shot('Recognize-Music-Notification.webp','A Music Recognized notification showing the song title, album art, and Shazam, YouTube, and copy actions','The result — the track named with its album art, plus Shazam, YouTube, and copy actions.')}
  `
};

PAGES.sidebars = {
  group: 'Desktop', title: 'Sidebars', icon: 'sidebar',
  lede: 'Two slide-out panels bookend the desktop: intelligence and translation on the left, system controls and your day on the right.',
  render: () => `
    <figure>
      <div class="shot">
        <video src="assets/docs/Sidebars-Demo.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Both sidebars in action — quick toggles and your day on the right, the Intelligence panel on the left.</figcaption>
    </figure>

    <p>Opening them is a single click on the bar: click the <strong>left side of the top bar</strong> for the Intelligence sidebar, or the <strong>right side</strong> for toggles, notifications, and your calendar — exactly what the clip above shows.</p>

    ${twoShot('Full-Left-Sidebar.webp','The left sidebar: chat with local or online models, or translate.','Full-Right-Sidebar.webp','The right sidebar: quick toggles, notifications, and the calendar.')}

    <h2>Left: Intelligence</h2>
    <p>A chat panel for large language models — bring an API key for online models or run local ones, with a translator one tab away. <strong>Ctrl + O</strong> expands it, <strong>Ctrl + P</strong> pins it open, and it stays entirely out of the way until asked.</p>

    <h2>Right: your system and your day</h2>
    <p>The right sidebar starts with one-tap toggles — network, Bluetooth, microphone, audio output, Night Light — and system shortcuts for editing, reloading, settings, and power.</p>
    ${shot('Right-Sidebar-Toggles.webp','Quick toggles row in the right sidebar')}
    <p>Below the toggles, notifications collect until you\'ve dealt with them, and the bottom half is your day: a full calendar with event dots, a To-Do list, and a timer.</p>
    ${shot('Right-Sidebar-Calendar.webp','The calendar with an event popup open','Calendar events pop out in place — deadlines included.')}
    <p>You don\'t even have to open the sidebar to check your schedule — pressing the <strong>date and time</strong> in the bar pops the same calendar events and task list out on their own.</p>
    ${shot('Bar-Task-List-Popup.webp','Calendar events and a task list popping out from the bar\'s clock','Press the date and time in the bar to see your calendar events and task list from anywhere.')}
  `
};

PAGES.sharing = {
  group: 'Desktop', title: 'Sharing', icon: 'send',
  lede: 'Send a file to any phone or laptop connected to your Wi-Fi or Ethernet — and receive from them — without a cloud in sight.',
  render: () => `
    <p>Mainstream speaks the <strong>LocalSend</strong> protocol, so it shares files with any device running the free LocalSend app — iPhone, Android, Mac, Windows, or another Linux box. Files hop directly between your devices over your own Wi-Fi or Ethernet; nothing ever touches the internet, and sharing stays off until you start it.</p>

    <h2>Send</h2>
    <p>Drag any file onto the bar\'s media widget. A picker appears with your nearby devices — click one and the transfer streams with live progress in the same panel.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Localsend-Send.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Drag a file onto the media widget, pick a device, watch it go.</figcaption>
    </figure>

    <h2>Receive</h2>
    <p>Right-click the media widget to turn receiving on — that\'s the only time your computer is visible to other devices. While it\'s on, files sent to you land straight in your Downloads folder, with live progress in the panel (closing the panel never interrupts a transfer). When you\'re done, hit <strong>Turn off</strong> and your computer disappears from every device list again.</p>
    <figure>
      <div class="shot">
        <video src="assets/docs/Localsend-Receive.mp4" autoplay loop muted playsinline controls style="width:100%;display:block"></video>
      </div>
      <figcaption>Right-click to receive: the panel shows the incoming file land in Downloads.</figcaption>
    </figure>

    ${callout('note','Private by design','<p>Sharing is off until you start it, and only devices on your own network can ever see yours. There\'s no account to create, no server in the middle, and no size limit beyond your disk.</p>')}
  `
};

PAGES['desktop-apps'] = {
  group: 'Desktop', title: 'Desktop Apps', icon: 'dock',
  lede: 'Two small apps that keep system chores out of the terminal: drives that mount themselves, and clean app removal.',
  render: () => `
    <h2>Auto Drive Mount</h2>
    <p>Set a new drive up once and it\'s ready every login. Pick a drive, give it a name, and it mounts automatically from then on — blank disks get one-click formatting, encrypted drives unlock right in the app with their passphrase, and network shares (SMB and NFS) get the same treatment. The <strong>Mounted</strong> tab lists everything the app manages, and all mounted drives can easily be removed from the mount list with one click.</p>
    ${shot('Auto-Drive-Mount-App.webp','Auto Drive Mount listing storage, OS, and unformatted drives','Local drives sorted into storage, operating-system, and unformatted — with network shares and mounted drives one tab over.')}

    <h2>Uninstall Apps</h2>
    <p>Remove what you don\'t want — native packages and Flatpaks alike — with size shown up front and system components protected. If removing an app would break something else, the app says so in plain English instead of letting it happen.</p>
    ${shot('Uninstall-Packages-App.webp','Uninstall Apps listing removable applications with sizes','Search, see the real size on disk, and remove — base system and Mainstream components never appear in the list.')}

    ${callout('tip','Both live in the launcher','<p>Search "mount" or "uninstall" from the overview to open them, or find <strong>Auto Mount</strong> and <strong>Uninstall Apps</strong> in the app grid.</p>')}
  `
};
