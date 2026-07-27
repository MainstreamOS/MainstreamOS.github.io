# Mainstream OS — Features

A tiling Linux desktop is normally built by hand, in text files. Mainstream OS is built by clicking, making your choices inside a single settings app. It comes with a full theming system: the interface recolors itself around your wallpaper, and that — along with every other change you make — saves as a complete theme you can swap or share whenever you like. And one keypress hands the whole machine to a Steam Deck-style gaming session.

## The headlines

- **Hyprland you never have to configure** — Wallpaper and colors, displays, per-workspace layouts, keybinds, touchpad gestures, apps, updates, and recovery all live in one Settings app. A tiling desktop with no config file, and never a terminal.
- **SteamOS-style Gaming Mode** — Press `Super+G` and the whole desktop swaps for the same gamescope Steam Big Picture session a Steam Deck boots into, and one click brings it back exactly as you left it. AMD, Intel, and NVIDIA alike.
- **Whole-desktop Material You** — Pick any wallpaper and the entire system recolors from it — the shell, the Settings app, your terminal, your GTK and Qt apps, and the lock screen. It happens live, with nothing to restart.
- **One-minute rollback** — A Btrfs snapshot is taken before every update, so a bad day is one boot-menu entry away. Restore the earlier system from the boot menu or from Settings, in about a minute.

## Gaming and the big screen

- **Console Mode install** — An install option that boots straight into Big Picture, turning a mini-PC under the TV into a console. A full tiling desktop and a real console mode, in one system.
- **Proton GE, preinstalled** — Proton GE ships installed and set as Steam's default compatibility tool, with Steam Play on for every title. Windows games run without a setup step.

## Everything in Settings

- **Native display settings** — Arrange your monitors and set resolution, refresh rate, scale, orientation, HDR, and color profiles. Mirror one screen onto another when you need to present.
- **A layout per workspace** — Dwindle, master, scrolling, monocle, or float. Every workspace keeps its own layout, changed on the fly.
- **Configurable keybinds** — See every keyboard shortcut in a visual editor and remap any of them there. `Super+Tab` puts the whole list on screen whenever you need it.
- **Touchpad gestures** — Remap every swipe and pinch to the action you expect, applied the moment you set it.
- **Title bars, on or off** — On for a familiar desktop, off for pure tiling. It takes effect instantly, without logging out.

## Making it yours

- **Theme system** — A theme is your whole look — wallpaper, the generated palette, app style, icon theme, pointer, and window decorations — saved under a name with a preview. Switch between saved themes in one tap, pair a Day and Night theme that follow Night Light or hours you set, or export a theme to a single file and import it on another computer.
- **A bar you arrange** — Show, hide, reorder, and group any widget on your bar. Drag two of them together to merge them into a single pill.
- **App style, icons, and fonts** — Choose your app style, icon theme, and mouse cursor in Settings, and pick fonts from a searchable list that shows each one in its own typeface. Your font carries into most of your apps, not just the shell.
- **Video wallpapers** — Set a video as your wallpaper and it simply plays, with no extra package for you to track down first.
- **Shake to Locate** — Switch it on, give the mouse a shake, and the pointer grows until you spot it.

## Day to day

- **A ready-made set of apps** — A browser, files, editor, calculator, calendar, photo viewer, music, and a system monitor are all there from first boot. Every one is a checkbox during install, so you can uncheck anything you don't want.
- **A software store** — Browse and install more apps from a store with pictures and descriptions, no terminal and no package names to memorize.
- **A launcher that finds everything** — Apps, folders, files, and quick math, all from one search box.
- **Scrolling overview** — A hot corner or `Super+O` zooms out to a map of every workspace. Scroll across the lot, drag windows between them, and drop files and folders in from the drawer.
- **Quick settings and notifications** — Wi-Fi, Bluetooth, volume, night light, your calendar, and your notifications all live in one panel off the side of the screen.
- **Screen sharing and recording** — Share your screen in video calls and record it on Wayland, with GPU-accelerated encoding.
- **LocalSend built in** — Drag a file onto the bar's media widget to send it to any phone or laptop on your network, and right-click to receive. Live transfer progress in a panel, and no cloud in the middle.
- **Session restore** — Log out or reboot and your windows come back on the workspaces you left them on. Browsers, terminals, file managers, and Electron apps alike.

## Apps for the fiddly parts

- **Auto Mount** — Set a drive up once and it's ready at every login. Blank disks get one-click formatting and naming, network shares are just another entry, and encrypted drives unlock right in the app.
- **Uninstall Apps** — Remove anything you installed, with the system's own components protected so you can't break the desktop by accident.

## Getting installed

- **A real graphical installer** — Boot the ISO and click through a Calamares installer, choosing Default, Custom, or Gaming from the Get Started picker. No terminal.
- **Dual-boot and full-disk encryption** — Install alongside an existing Windows and it's added to the boot menu, so you pick between them every time you start up. Or lock the whole system behind a passphrase you enter at boot. Both are set up during the install itself.
- **GPU auto-configuration** — Your card is detected during install and fitted with matching drivers across AMD, Intel, and NVIDIA. An experimental legacy edition covers pre-Turing cards.
- **A first-boot welcome** — The Welcome app meets you at first login, shows you around the desktop, and offers one-click installs for the extras you want.
- **Made with creators in mind** — One click in the Welcome app sets up DaVinci Resolve or OBS, with GPU encoding on Wayland. Neither ships with the system; you install them when you want them.
- **On an existing Arch install** — One command turns an Arch install you already have into Mainstream OS, in about ten minutes.

## Updates, recovery, and the base

- **One-click full update** — System packages, Flatpaks, and the desktop update together from a single button in Settings, with a safety snapshot taken first. A bar icon and a notification let you know when a new release is out.
- **Repair Install** — One button on the Recovery page re-runs the desktop setup and rebuilds its components.
- **Install self-check** — After every install, a 19-point self-verification runs and writes you a health report, so a bad install tells you instead of failing quietly.
- **Signed downloads and packages** — Every ISO is GPG-signed with a published key and a verification walkthrough, and everything Mainstream adds is prebuilt and GPG-signed in its own repository. Nothing is compiled from the AUR at install time.
- **A lean, native base** — Arch underneath, native apps as the defaults, and the AUR off by default.
