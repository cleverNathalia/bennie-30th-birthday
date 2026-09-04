/* @ds-bundle: {"format":4,"namespace":"ArcadeCountdownDesignSystem_b791c4","components":[{"name":"Bezel","sourcePath":"components/cabinet/Bezel.jsx"},{"name":"CartridgeSlot","sourcePath":"components/cabinet/CartridgeSlot.jsx"},{"name":"SlotRack","sourcePath":"components/cabinet/CartridgeSlot.jsx"},{"name":"CRTOverlay","sourcePath":"components/chrome/CRTOverlay.jsx"},{"name":"Marquee","sourcePath":"components/chrome/Marquee.jsx"},{"name":"StatusBar","sourcePath":"components/chrome/StatusBar.jsx"},{"name":"StatCell","sourcePath":"components/chrome/StatusBar.jsx"},{"name":"ControlDeck","sourcePath":"components/controls/ControlDeck.jsx"},{"name":"ArcadeButton","sourcePath":"components/controls/ControlDeck.jsx"},{"name":"Joystick","sourcePath":"components/controls/ControlDeck.jsx"},{"name":"GlyphButton","sourcePath":"components/controls/GlyphButton.jsx"},{"name":"PhotoReel","sourcePath":"components/readout/PhotoReel.jsx"},{"name":"Timer","sourcePath":"components/readout/Timer.jsx"},{"name":"AttractScreen","sourcePath":"components/views/AttractScreen.jsx"},{"name":"DayView","sourcePath":"components/views/DayView.jsx"},{"name":"DayText","sourcePath":"components/views/DayView.jsx"},{"name":"DayList","sourcePath":"components/views/DayView.jsx"},{"name":"DayScreen","sourcePath":"components/views/DayView.jsx"},{"name":"HighScore","sourcePath":"components/views/HighScore.jsx"}],"sourceHashes":{"components/cabinet/Bezel.jsx":"849b45151162","components/cabinet/CartridgeSlot.jsx":"b83b71e1ff0d","components/chrome/CRTOverlay.jsx":"7f90dff89f5d","components/chrome/Marquee.jsx":"a14934ad6ab4","components/chrome/StatusBar.jsx":"548ce3620ea9","components/controls/ControlDeck.jsx":"2a278fc97cca","components/controls/GlyphButton.jsx":"9ee6e24c17ee","components/readout/PhotoReel.jsx":"f0737bcba601","components/readout/Timer.jsx":"ba49f0353225","components/views/AttractScreen.jsx":"9c14a86475c6","components/views/DayView.jsx":"ade9cb8b4de2","components/views/HighScore.jsx":"6df4ffc3ee64","explorations/image-slot.js":"fff26d081c8d","ui_kits/cabinet/CabinetApp.jsx":"c4bf654a7045"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArcadeCountdownDesignSystem_b791c4 = window.ArcadeCountdownDesignSystem_b791c4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cabinet/Bezel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* A moulded plastic bezel with a recessed CRT screen in it. The base surface
   for every card in this system — the cartridge slot is one of these. */
function Bezel({
  interactive = false,
  lit = false,
  ratio = '3/4',
  children,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const on = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      position: 'relative',
      background: 'var(--surface-chassis)',
      border: '1px solid var(--hairline)',
      boxShadow: on ? 'var(--mat-bezel-hover)' : 'var(--mat-bezel)',
      padding: 'var(--bezel-pad) var(--bezel-pad) 13px',
      cursor: interactive ? 'pointer' : 'default',
      transform: press ? 'translateY(var(--lift-press)) scale(var(--press-scale))' : on ? 'translateY(var(--lift-hover))' : 'none',
      transition: 'transform var(--dur-quick) var(--ease-mech),box-shadow var(--dur-quick) var(--ease-mech)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      background: 'var(--surface-screen)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      boxShadow: lit ? 'var(--mat-screen-on)' : 'var(--mat-screen)'
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--crt-scanlines-fine)',
      pointerEvents: 'none'
    }
  })), footer);
}
Object.assign(__ds_scope, { Bezel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cabinet/Bezel.jsx", error: String((e && e.message) || e) }); }

// components/cabinet/CartridgeSlot.jsx
try { (() => {
/* One day. Unlocked slots show a still with a play bar; locked slots show a
   dead screen with a countdown. */
function CartridgeSlot({
  day = 1,
  state = 'locked',
  label,
  still,
  countdown,
  onOpen
}) {
  const open = state !== 'locked';
  const statusText = label || (state === 'ready' ? 'Ready' : state === 'cleared' ? 'Cleared' : day === 8 ? 'Final' : 'Locked');
  const footer = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 'var(--s-3)',
      padding: '0 2px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-sm)',
      color: open ? 'var(--phos-bright)' : 'var(--phos-faint)'
    }
  }, String(day).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: open ? 'var(--cyan-55)' : 'var(--pink-50)'
    }
  }, statusText));
  return /*#__PURE__*/React.createElement(__ds_scope.Bezel, {
    interactive: open,
    lit: open,
    footer: footer,
    role: open ? 'button' : undefined,
    tabIndex: open ? 0 : -1,
    "aria-label": open ? `Play day ${day}` : `Day ${day}, locked`,
    onClick: open ? onOpen : undefined,
    onKeyDown: e => {
      if (open && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onOpen && onOpen();
      }
    }
  }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, still ? /*#__PURE__*/React.createElement("img", {
    src: still,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.5) contrast(1.1)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-still)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: 'var(--s-3)',
      display: 'flex',
      alignItems: 'center',
      gap: '9px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      border: '1px solid var(--cyan)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--cyan)',
      fontSize: 10,
      boxShadow: 'var(--glow-sm)'
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--phos-bright)'
    }
  }, state === 'ready' ? 'New' : 'Play'))) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--s-3)',
      background: 'radial-gradient(circle at 50% 40%,var(--pink-10),transparent 70%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      border: '1px solid var(--pink-50)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--pink)',
      fontSize: 20,
      boxShadow: 'var(--glow-pink-sm),inset 0 0 18px var(--pink-10)'
    }
  }, "\u25FC"), countdown ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '.16em',
      color: 'var(--pink)',
      fontVariantNumeric: 'tabular-nums',
      textShadow: 'var(--glow-text-pink)'
    }
  }, countdown) : null));
}

/* The 4-column rack the slots live in. */
function SlotRack({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
      gap: 'var(--rack-gap)'
    }
  }, children);
}
Object.assign(__ds_scope, { CartridgeSlot, SlotRack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cabinet/CartridgeSlot.jsx", error: String((e && e.message) || e) }); }

// components/chrome/CRTOverlay.jsx
try { (() => {
/* Page-level CRT treatment: scanline multiply + corner vignette.
   Fixed, non-interactive, sits above everything. One per page. */
function CRTOverlay({
  scanlines = true,
  vignette = true,
  flicker = false
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, vignette && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'fixed',
      inset: '-10%',
      pointerEvents: 'none',
      zIndex: 59,
      background: 'var(--crt-vignette)'
    }
  }), scanlines && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 60,
      background: 'var(--crt-scanlines)',
      mixBlendMode: 'multiply',
      animation: flicker ? 'flicker 7s steps(1,end) infinite' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { CRTOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/CRTOverlay.jsx", error: String((e && e.message) || e) }); }

// components/chrome/Marquee.jsx
try { (() => {
/* The backlit sign at the top of the cabinet. One per page, always first. */
function Marquee({
  kickerLeft,
  kickerRight,
  title,
  subtitle,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1px solid var(--edge)',
      background: 'var(--surface-marquee)',
      boxShadow: 'var(--mat-marquee)',
      padding: 'var(--marquee-pad)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 110,
      background: 'var(--marquee-backlight)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '8%',
      right: '8%',
      bottom: -1,
      height: 2,
      background: 'var(--marquee-underline)',
      filter: 'blur(1px)'
    }
  }), (kickerLeft || kickerRight) && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--s-4)',
      font: 'var(--type-label)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--cyan-55)'
    }
  }, /*#__PURE__*/React.createElement("span", null, kickerLeft), /*#__PURE__*/React.createElement("span", null, kickerRight)), title && /*#__PURE__*/React.createElement("h1", {
    style: {
      position: 'relative',
      margin: 'var(--s-5) 0 var(--s-3)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-marquee)',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 'var(--lh-display)',
      color: 'var(--phos-bright)',
      textShadow: 'var(--glow-text)',
      animation: 'marqueeBuzz 5.5s steps(1,end) infinite'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body-sm)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--pink)',
      textShadow: 'var(--glow-text-pink)'
    }
  }, subtitle), children);
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/chrome/StatusBar.jsx
try { (() => {
/* A row of readouts in a hairline-divided strip. Two to four cells. */
function StatusBar({
  children,
  columns
}) {
  const n = columns || React.Children.count(children) || 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${n},1fr)`,
      gap: 1,
      background: 'var(--edge)',
      border: '1px solid var(--edge)'
    }
  }, children);
}

/* One readout. Label above, Michroma value below. */
function StatCell({
  label,
  value,
  tone = 'cyan'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-recess)',
      padding: 'var(--s-4) var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      fontSize: '9.5px',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--phos-dim)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '19px',
      marginTop: 'var(--s-2)',
      fontVariantNumeric: 'tabular-nums',
      color: tone === 'pink' ? 'var(--pink)' : 'var(--cyan)',
      textShadow: tone === 'pink' ? 'var(--glow-text-pink)' : 'var(--glow-text-sm)'
    }
  }, value));
}
Object.assign(__ds_scope, { StatusBar, StatCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/controls/ControlDeck.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The joystick-and-buttons strip along the bottom of the cabinet. */
function ControlDeck({
  children,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--edge)',
      background: 'var(--surface-marquee)',
      boxShadow: 'var(--mat-deck)',
      padding: 'var(--s-6) var(--s-7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--s-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--s-5)'
    }
  }, children), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--phos-dim)'
    }
  }, note) : null);
}

/* A physical arcade button. A sphere lit from upper-left, not a flat circle. */
function ArcadeButton({
  tone = 'cyan',
  size = 28,
  onClick,
  label,
  ...rest
}) {
  const [press, setPress] = React.useState(false);
  const pink = tone === 'pink';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    "aria-label": label,
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onMouseLeave: () => setPress(false),
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-button)',
      border: 'none',
      padding: 0,
      background: pink ? 'var(--mat-button-pink)' : 'var(--mat-button-cyan)',
      boxShadow: pink ? 'var(--mat-button-shadow-pink)' : 'var(--mat-button-shadow)',
      cursor: onClick ? 'pointer' : 'default',
      transform: press ? 'translateY(2px) scale(.94)' : 'none',
      transition: 'transform var(--dur-tap) var(--ease-mech)'
    }
  }, rest));
}

/* The ball-top joystick. Decorative. */
function Joystick({
  size = 34
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-button)',
      background: 'var(--mat-button-pink)',
      boxShadow: 'var(--mat-button-shadow-pink)'
    }
  });
}
Object.assign(__ds_scope, { ControlDeck, ArcadeButton, Joystick });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/ControlDeck.jsx", error: String((e && e.message) || e) }); }

// components/controls/GlyphButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Squared-off glyph control — close, previous, next. Not a rounded pill. */
function GlyphButton({
  tone = 'cyan',
  size = 34,
  children,
  onClick,
  disabled,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pink = tone === 'pink';
  const c = pink ? 'var(--pink)' : 'var(--cyan)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      padding: 0,
      borderRadius: 'var(--radius-none)',
      border: `1px solid ${hover && !disabled ? 'var(--cyan)' : c}`,
      background: hover && !disabled ? 'var(--cyan-08)' : 'rgba(0,0,0,.55)',
      color: hover && !disabled ? 'var(--cyan)' : c,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1,
      display: 'grid',
      placeItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .35 : 1,
      boxShadow: disabled ? 'none' : hover ? 'var(--glow-md)' : 'var(--glow-sm)',
      transition: 'all var(--dur-tap) var(--ease-mech)'
    }
  }, rest), children);
}
Object.assign(__ds_scope, { GlyphButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/GlyphButton.jsx", error: String((e && e.message) || e) }); }

// components/readout/PhotoReel.jsx
try { (() => {
/* Framed photo carousel — a screen in a bezel, with a counter and caption. */
function PhotoReel({
  photos = [],
  autoplay = true,
  interval = 4000,
  height = 340
}) {
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (!autoplay || paused || photos.length <= 1) return;
    const id = setInterval(() => setI(p => (p + 1) % photos.length), interval);
    return () => clearInterval(id);
  }, [autoplay, paused, interval, photos.length]);
  if (!photos.length) return null;
  const go = n => setI(p => (p + n + photos.length) % photos.length);
  const cur = photos[i];
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      border: '1px solid var(--edge)',
      background: 'var(--surface-marquee)',
      boxShadow: 'var(--mat-deck)',
      padding: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      background: 'var(--surface-screen)',
      overflow: 'hidden',
      boxShadow: 'var(--mat-screen)'
    }
  }, photos.map((p, n) => /*#__PURE__*/React.createElement("img", {
    key: n,
    src: p.url,
    alt: p.caption || '',
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: n === i ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-out)',
      filter: 'saturate(.85) contrast(1.05)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--crt-scanlines-fine)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,transparent 55%,rgba(3,6,12,.9))',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--s-4)',
      padding: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, cur.caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--phos-bright)'
    }
  }, cur.caption) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--cyan-55)',
      marginTop: 5,
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0'), " / ", String(photos.length).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GlyphButton, {
    size: 30,
    onClick: () => go(-1),
    "aria-label": "Previous photo"
  }, "\u276E"), /*#__PURE__*/React.createElement(__ds_scope.GlyphButton, {
    size: 30,
    onClick: () => go(1),
    "aria-label": "Next photo"
  }, "\u276F")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      marginTop: 'var(--s-3)'
    }
  }, photos.map((_, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    onClick: () => setI(n),
    style: {
      flex: 1,
      height: 3,
      cursor: 'pointer',
      background: n === i ? 'var(--cyan)' : 'var(--cyan-14)',
      boxShadow: n === i ? 'var(--glow-sm)' : 'none',
      transition: 'background var(--dur-quick)'
    }
  }))));
}
Object.assign(__ds_scope, { PhotoReel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/readout/PhotoReel.jsx", error: String((e && e.message) || e) }); }

// components/readout/Timer.jsx
try { (() => {
/* Tabular countdown. Segmented so the digits sit in fixed cells and never jitter. */
function Timer({
  target,
  value,
  size = 'md',
  tone = 'cyan',
  segmented = false
}) {
  const [txt, setTxt] = React.useState(value || '');
  React.useEffect(() => {
    if (value !== undefined || !target) return;
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setTxt('00:00:00');
      const d = Math.floor(diff / 86400000);
      const h = Math.floor(diff % 86400000 / 3600000);
      const m = Math.floor(diff % 3600000 / 60000);
      const s = Math.floor(diff % 60000 / 1000);
      const p = n => String(n).padStart(2, '0');
      setTxt(d > 0 ? `${d}D ${p(h)}:${p(m)}:${p(s)}` : `${p(h)}:${p(m)}:${p(s)}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target, value]);
  const out = value !== undefined ? value : txt;
  const fs = size === 'lg' ? 34 : size === 'sm' ? 11 : 19;
  const col = tone === 'pink' ? 'var(--pink)' : 'var(--cyan)';
  const base = {
    fontFamily: size === 'sm' ? 'var(--font-mono)' : 'var(--font-display)',
    fontSize: fs,
    fontVariantNumeric: 'tabular-nums',
    color: col,
    letterSpacing: size === 'sm' ? '.16em' : 'var(--ls-display)',
    textShadow: tone === 'pink' ? 'var(--glow-text-pink)' : 'var(--glow-text-sm)'
  };
  if (!segmented) return /*#__PURE__*/React.createElement("span", {
    style: base
  }, out);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 3
    }
  }, out.split('').map((ch, i) => /[0-9]/.test(ch) ? /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...base,
      display: 'inline-grid',
      placeItems: 'center',
      minWidth: fs * 0.72,
      padding: '4px 2px',
      background: 'rgba(0,0,0,.45)',
      border: '1px solid var(--edge)'
    }
  }, ch) : /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...base,
      display: 'inline-grid',
      placeItems: 'center',
      opacity: .55,
      animation: ch === ':' ? 'tick 1s steps(1,end) infinite' : 'none'
    }
  }, ch)));
}
Object.assign(__ds_scope, { Timer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/readout/Timer.jsx", error: String((e && e.message) || e) }); }

// components/views/AttractScreen.jsx
try { (() => {
/* The arrival moment. A full-bleed still, an insert-coin prompt, one keypress
   or click to enter the rack. Shown once per session. */
function AttractScreen({
  image,
  title,
  subtitle,
  prompt = 'Press any key to begin',
  onStart
}) {
  React.useEffect(() => {
    const h = () => onStart && onStart();
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onStart]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onStart,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'var(--ink)',
      cursor: 'pointer',
      overflow: 'hidden'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .5,
      filter: 'saturate(.7) contrast(1.05)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(ellipse 60% 55% at 50% 45%,rgba(4,5,10,.35),rgba(4,5,10,.94) 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: '18%',
      background: 'linear-gradient(180deg,transparent,var(--cyan-08),transparent)',
      animation: 'sweep 5.5s linear infinite',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'var(--s-7)',
      gap: 'var(--s-5)'
    }
  }, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase',
      color: 'var(--cyan-55)'
    }
  }, subtitle) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(28px,6vw,66px)',
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--phos-bright)',
      textShadow: 'var(--glow-text)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-6)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body-sm)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--pink)',
      textShadow: 'var(--glow-text-pink)',
      animation: 'tick 1.4s steps(1,end) infinite'
    }
  }, prompt)));
}
Object.assign(__ds_scope, { AttractScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/views/AttractScreen.jsx", error: String((e && e.message) || e) }); }

// components/views/DayView.jsx
try { (() => {
/* A day, opened. NOT a modal — the whole page becomes this. Enters with a
   CRT power-up: a horizontal line that snaps open vertically. */
function DayView({
  day,
  eyebrow,
  title,
  onClose,
  children
}) {
  React.useEffect(() => {
    const h = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--ink)',
      overflowY: 'auto',
      animation: 'pageIn var(--dur-page) var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      animation: 'powerUp var(--dur-page) var(--ease-out) both',
      transformOrigin: '50% 45%',
      background: 'radial-gradient(ellipse 70% 60% at 50% 40%,var(--cyan-04),transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 940,
      margin: '0 auto',
      padding: 'var(--s-8) var(--s-6) var(--s-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--s-6)',
      borderBottom: '1px solid var(--edge)',
      paddingBottom: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-widest)',
      textTransform: 'uppercase',
      color: 'var(--cyan-55)'
    }
  }, eyebrow || `Cartridge ${String(day).padStart(2, '0')}`), title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--s-4) 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display-lg)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--phos-bright)',
      textShadow: 'var(--glow-text)'
    }
  }, title) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.GlyphButton, {
    tone: "pink",
    onClick: onClose,
    "aria-label": "Back to the rack"
  }, "\u2715") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-8)'
    }
  }, children), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      marginTop: 'var(--s-9)',
      background: 'none',
      border: '1px solid var(--edge)',
      color: 'var(--cyan-55)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      padding: 'var(--s-4) var(--s-6)',
      cursor: 'pointer'
    }
  }, "\u25C0 Back to the rack") : null));
}

/* Body copy inside a DayView. Wide measure, generous leading, no glow. */
function DayText({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--s-6)',
      maxWidth: '62ch',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--phos)'
    }
  }, children);
}

/* Numbered list — the "thirty true things" pattern, as a scoreboard. */
function DayList({
  items = []
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 1,
      background: 'var(--edge)',
      border: '1px solid var(--edge)'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '58px 1fr',
      background: 'var(--surface-recess)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 'var(--s-4)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--pink)',
      borderRight: '1px solid var(--edge)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 'var(--s-4) var(--s-5)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body)',
      lineHeight: 1.6,
      color: 'var(--phos)'
    }
  }, item))));
}

/* A framed media well — video embed or a single image. */
function DayScreen({
  children,
  height = 480,
  caption
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--edge)',
      background: 'var(--surface-marquee)',
      boxShadow: 'var(--mat-deck)',
      padding: 'var(--s-3)',
      marginBottom: 'var(--s-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      background: 'var(--surface-screen)',
      overflow: 'hidden',
      boxShadow: 'var(--mat-screen-on)'
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--crt-scanlines-fine)',
      pointerEvents: 'none'
    }
  })), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--s-3) 2px 2px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--cyan-55)'
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { DayView, DayText, DayList, DayScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/views/DayView.jsx", error: String((e && e.message) || e) }); }

// components/views/HighScore.jsx
try { (() => {
/* Day eight. The rack is complete — this replaces the status bar with a
   high-score board. Pink-dominant; the only screen where pink leads. */
function HighScore({
  title = 'ALL CARTRIDGES CLEARED',
  rows = [],
  footnote
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1px solid var(--edge-alert)',
      background: 'linear-gradient(180deg,rgba(30,12,24,.85),rgba(11,8,15,.85))',
      boxShadow: '0 0 48px var(--pink-10),inset 0 1px 0 var(--sheen-1)',
      padding: 'var(--s-8) var(--s-7)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 1,
      background: 'var(--marquee-underline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      letterSpacing: 'var(--ls-display)',
      color: '#FFE6EF',
      textShadow: 'var(--glow-text-pink)',
      textAlign: 'center'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-8)',
      display: 'grid',
      gap: 1,
      background: 'var(--edge-alert)',
      border: '1px solid var(--edge-alert)'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '58px 1fr auto',
      background: 'rgba(11,8,15,.9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 'var(--s-4)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--pink)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 'var(--s-4) 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body)',
      color: 'var(--phos)'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 'var(--s-4) var(--s-5)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--cyan-55)'
    }
  }, r.value)))), footnote ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-7)',
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-body-sm)',
      letterSpacing: 'var(--ls-label)',
      lineHeight: 1.8,
      color: 'var(--phos-dim)'
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { HighScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/views/HighScore.jsx", error: String((e && e.message) || e) }); }

// explorations/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "explorations/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/cabinet/CabinetApp.jsx
try { (() => {
const NS = window.ArcadeCountdownDesignSystem_b791c4;
const {
  CRTOverlay,
  Marquee,
  StatusBar,
  StatCell,
  CartridgeSlot,
  SlotRack,
  ControlDeck,
  ArcadeButton,
  Joystick,
  Timer,
  PhotoReel,
  DayView,
  DayText,
  DayList,
  DayScreen,
  AttractScreen,
  HighScore
} = NS;
const PORTRAIT = '../../assets/bennie-portrait.png';
const DAYS = [{
  day: 1,
  title: 'Notice of intent',
  date: '03 Sep',
  kind: 'video',
  text: 'Something is coming every day until Thursday. Same time, 18:00, every evening. You do not have to do anything except show up.'
}, {
  day: 2,
  title: 'The empty chair',
  date: '04 Sep',
  kind: 'video',
  text: 'No explanation. Just watch it.'
}, {
  day: 3,
  title: 'Thirty true things',
  date: '05 Sep',
  kind: 'list',
  text: 'One for every year.',
  items: ['You make every room warmer than you found it.', 'You have never once made me feel small.', 'You learn things for the joy of knowing them, not to win an argument.', 'You would give the shirt off your back and then apologise for the fit.', 'You laugh with your whole body.', 'You remember how everyone takes their coffee.', 'You are the best thing I ever said yes to.']
}, {
  day: 4,
  title: 'Ours now',
  date: '06 Sep',
  kind: 'video',
  text: 'We never picked a song. This one is ours now.'
}, {
  day: 5,
  title: 'Sealed',
  date: '07 Sep',
  locked: '06:41:12'
}, {
  day: 6,
  title: 'Sealed',
  date: '08 Sep',
  locked: '1D 06:41'
}, {
  day: 7,
  title: 'Sealed',
  date: '09 Sep',
  locked: '2D 06:41'
}, {
  day: 8,
  title: 'Sealed',
  date: '10 Sep',
  locked: '3D 06:41'
}];
const PHOTOS = [{
  url: PORTRAIT,
  caption: 'High school · 2013'
}, {
  url: PORTRAIT,
  caption: 'The wedding · April 2026'
}, {
  url: PORTRAIT,
  caption: 'Dublin · now'
}];
function Rack({
  unlocked,
  onOpen,
  onArchive
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--shell-max)',
      margin: '0 auto',
      padding: 'var(--shell-pad)',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    kickerLeft: "Cabinet No. 30",
    kickerRight: "Dublin \xB7 18:00 daily",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "PLAYER ONE", /*#__PURE__*/React.createElement("br", null), "TURNS THIRTY"),
    subtitle: "Eight cartridges \xB7 one unlocks a day"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--s-5)'
    }
  }), /*#__PURE__*/React.createElement(StatusBar, null, /*#__PURE__*/React.createElement(StatCell, {
    label: "Credits unlocked",
    value: `0${unlocked} / 08`
  }), /*#__PURE__*/React.createElement(StatCell, {
    label: "Next cartridge",
    value: "06:41:12"
  }), /*#__PURE__*/React.createElement(StatCell, {
    label: "Time to birthday",
    value: "6D 04:12",
    tone: "pink"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--s-8)'
    }
  }), /*#__PURE__*/React.createElement(SlotRack, null, DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.day,
    style: {
      animation: `slotIn var(--dur-base) var(--ease-mech) both`,
      animationDelay: `${i * 60}ms`
    }
  }, /*#__PURE__*/React.createElement(CartridgeSlot, {
    day: d.day,
    still: d.day <= unlocked ? PORTRAIT : undefined,
    state: d.day < unlocked ? 'cleared' : d.day === unlocked ? 'ready' : 'locked',
    countdown: d.locked,
    onOpen: () => onOpen(d)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--s-8)'
    }
  }), /*#__PURE__*/React.createElement(ControlDeck, {
    note: "Press start \xB7 next cartridge loads at 18:00"
  }, /*#__PURE__*/React.createElement(Joystick, null), /*#__PURE__*/React.createElement(ArcadeButton, {
    label: "Open the newest day",
    onClick: () => onOpen(DAYS[unlocked - 1])
  }), /*#__PURE__*/React.createElement(ArcadeButton, {
    label: "Open the archive",
    onClick: onArchive
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--s-9)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--s-4)',
      flexWrap: 'wrap',
      marginBottom: 'var(--s-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-display)',
      color: 'var(--phos-bright)'
    }
  }, "ATTRACT MODE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--phos-dim)'
    }
  }, "Thirteen years \xB7 20 frames")), /*#__PURE__*/React.createElement(PhotoReel, {
    photos: PHOTOS,
    height: 360
  }));
}
function Archive({
  onClose
}) {
  return /*#__PURE__*/React.createElement(DayView, {
    eyebrow: "Service menu",
    title: "THE ARCHIVE",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(DayText, null, "Every cartridge, kept. The cabinet does not close."), /*#__PURE__*/React.createElement(HighScore, {
    rows: DAYS.map(d => ({
      label: d.locked ? 'Sealed until ' + d.date : d.title,
      value: d.date
    })),
    footnote: "Come back whenever you want. It will all still be here."
  }));
}
function Day({
  d,
  onClose
}) {
  if (d.day === 8) {
    return /*#__PURE__*/React.createElement(DayView, {
      day: 8,
      eyebrow: "Cartridge 08 \xB7 Final",
      title: "HAPPY THIRTIETH",
      onClose: onClose
    }, /*#__PURE__*/React.createElement(DayScreen, {
      height: 420,
      caption: "Filmed in Port Elizabeth"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        placeItems: 'center',
        height: '100%',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-label-lg)',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--cyan-55)'
      }
    }, "Video")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 'var(--s-8)'
      }
    }), /*#__PURE__*/React.createElement(HighScore, {
      rows: DAYS.slice(0, 7).map(x => ({
        label: x.title,
        value: x.date
      })),
      footnote: "Eight days. One every evening. Nothing missed."
    }));
  }
  return /*#__PURE__*/React.createElement(DayView, {
    day: d.day,
    title: d.title.toUpperCase(),
    onClose: onClose
  }, /*#__PURE__*/React.createElement(DayText, null, d.text), d.kind === 'video' && /*#__PURE__*/React.createElement(DayScreen, {
    caption: `Filmed ${d.date}`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      height: '100%',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label-lg)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--cyan-55)'
    }
  }, "Video")), d.kind === 'list' && /*#__PURE__*/React.createElement(DayList, {
    items: d.items
  }));
}
function CabinetApp() {
  const [entered, setEntered] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const [archive, setArchive] = React.useState(false);
  const unlocked = 4;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CRTOverlay, null), !entered && /*#__PURE__*/React.createElement(AttractScreen, {
    image: PORTRAIT,
    subtitle: "Cabinet No. 30 \xB7 Dublin",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "PLAYER ONE", /*#__PURE__*/React.createElement("br", null), "TURNS THIRTY"),
    prompt: "Press any key to begin",
    onStart: () => setEntered(true)
  }), /*#__PURE__*/React.createElement(Rack, {
    unlocked: unlocked,
    onOpen: d => !d.locked && setOpen(d),
    onArchive: () => setArchive(true)
  }), open && /*#__PURE__*/React.createElement(Day, {
    d: open,
    onClose: () => setOpen(null)
  }), archive && /*#__PURE__*/React.createElement(Archive, {
    onClose: () => setArchive(false)
  }));
}
window.CabinetApp = CabinetApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/cabinet/CabinetApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Bezel = __ds_scope.Bezel;

__ds_ns.CartridgeSlot = __ds_scope.CartridgeSlot;

__ds_ns.SlotRack = __ds_scope.SlotRack;

__ds_ns.CRTOverlay = __ds_scope.CRTOverlay;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.StatCell = __ds_scope.StatCell;

__ds_ns.ControlDeck = __ds_scope.ControlDeck;

__ds_ns.ArcadeButton = __ds_scope.ArcadeButton;

__ds_ns.Joystick = __ds_scope.Joystick;

__ds_ns.GlyphButton = __ds_scope.GlyphButton;

__ds_ns.PhotoReel = __ds_scope.PhotoReel;

__ds_ns.Timer = __ds_scope.Timer;

__ds_ns.AttractScreen = __ds_scope.AttractScreen;

__ds_ns.DayView = __ds_scope.DayView;

__ds_ns.DayText = __ds_scope.DayText;

__ds_ns.DayList = __ds_scope.DayList;

__ds_ns.DayScreen = __ds_scope.DayScreen;

__ds_ns.HighScore = __ds_scope.HighScore;

})();
