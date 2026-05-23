// Joyatou — shared logo marks (also used by Logo Exploration.html as reference)
// Same 12 primitives, exposed as named globals.

const M_FrameDot = ({ size=22, color='currentColor', stroke=2 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="14" y="14" width="92" height="92" stroke={color} strokeWidth={stroke}/>
    <circle cx="60" cy="60" r="7" fill={color}/>
  </svg>
);
const M_Halo = ({ size=22, color='currentColor', stroke=1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="50" stroke={color} strokeWidth={stroke} opacity="0.35"/>
    <circle cx="60" cy="60" r="32" stroke={color} strokeWidth={stroke} opacity="0.7"/>
    <circle cx="60" cy="60" r="6" fill={color}/>
  </svg>
);
const M_Diamond = ({ size=22, color='currentColor', stroke=2 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="60" y="10" width="70.7" height="70.7" transform="rotate(45 60 10)" stroke={color} strokeWidth={stroke}/>
    <rect x="60" y="42" width="25.5" height="25.5" transform="rotate(45 60 42)" fill={color}/>
  </svg>
);
const M_Radiate = ({ size=22, color='currentColor', stroke=2 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <line x1="60" y1="14" x2="60" y2="46" stroke={color} strokeWidth={stroke}/>
    <line x1="60" y1="74" x2="60" y2="106" stroke={color} strokeWidth={stroke}/>
    <line x1="14" y1="60" x2="46" y2="60" stroke={color} strokeWidth={stroke}/>
    <line x1="74" y1="60" x2="106" y2="60" stroke={color} strokeWidth={stroke}/>
    <circle cx="60" cy="60" r="8" fill={color}/>
  </svg>
);
const M_Stack = ({ size=22, color='currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="36" y="14" width="48" height="6"  fill={color}/>
    <rect x="46" y="26" width="28" height="2"  fill={color}/>
    <rect x="30" y="34" width="60" height="34" stroke={color} strokeWidth="2"/>
    <circle cx="60" cy="51" r="5" fill={color}/>
    <rect x="46" y="74" width="28" height="2"  fill={color}/>
    <rect x="36" y="82" width="48" height="6"  fill={color}/>
    <rect x="50" y="96" width="20" height="10" fill={color}/>
  </svg>
);
const M_Vessel = ({ size=22, color='currentColor', stroke=2 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="42" y="14" width="36" height="92" rx="18" stroke={color} strokeWidth={stroke}/>
    <line x1="50" y1="60" x2="70" y2="60" stroke={color} strokeWidth={stroke}/>
  </svg>
);
const M_Window = ({ size=22, color='currentColor', stroke=2 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="20" y="20" width="80" height="80" stroke={color} strokeWidth={stroke}/>
    <line x1="20" y1="60" x2="100" y2="60" stroke={color} strokeWidth={stroke}/>
    <circle cx="60" cy="40" r="5" fill={color}/>
  </svg>
);
const M_Twin = ({ size=22, color='currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="32" y="20" width="6" height="80" fill={color}/>
    <rect x="82" y="20" width="6" height="80" fill={color}/>
    <circle cx="60" cy="60" r="7" fill={color}/>
  </svg>
);
const M_Crescent = ({ size=22, color='currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path d="M 78 18 a 42 42 0 1 0 0 84 a 32 32 0 1 1 0 -84 z" fill={color}/>
    <circle cx="92" cy="60" r="5" fill={color}/>
  </svg>
);
const M_Wick = ({ size=22, color='currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <rect x="14" y="14" width="92" height="92" stroke={color} strokeWidth="1" opacity="0.25"/>
    <rect x="56" y="30" width="8" height="60" fill={color}/>
    <circle cx="60" cy="22" r="3" fill={color}/>
  </svg>
);
const M_Jmark = ({ size=22, color='currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <line x1="72" y1="22" x2="72" y2="76" stroke={color} strokeWidth="3"/>
    <path d="M 72 76 a 26 26 0 0 1 -52 0" stroke={color} strokeWidth="3" fill="none"/>
    <circle cx="72" cy="14" r="4" fill={color}/>
  </svg>
);
const M_Kanji = ({ size=22, color='currentColor' }) => (
  <div style={{
    width: size, height: size,
    display:'flex', alignItems:'center', justifyContent:'center',
    color, lineHeight: 1
  }} aria-hidden="true">
    <span style={{
      fontFamily: 'Shippori Mincho, serif',
      fontWeight: 500,
      fontSize: size * 0.92,
      letterSpacing: 0
    }}>燈</span>
  </div>
);

const MARKS = {
  '01': { Comp: M_FrameDot, label: 'Frame & Light' },
  '02': { Comp: M_Halo,     label: 'Halo' },
  '03': { Comp: M_Diamond,  label: 'Diamond' },
  '04': { Comp: M_Radiate,  label: 'Radiate' },
  '05': { Comp: M_Stack,    label: 'Stone Lantern' },
  '06': { Comp: M_Vessel,   label: 'Vessel' },
  '07': { Comp: M_Window,   label: 'Window' },
  '08': { Comp: M_Twin,     label: 'Twin Pillars' },
  '09': { Comp: M_Crescent, label: 'Crescent' },
  '10': { Comp: M_Wick,     label: 'Wick' },
  '11': { Comp: M_Jmark,    label: 'J Mark' },
  '12': { Comp: M_Kanji,    label: '燈' },
};

Object.assign(window, {
  M_FrameDot, M_Halo, M_Diamond, M_Radiate, M_Stack, M_Vessel,
  M_Window, M_Twin, M_Crescent, M_Wick, M_Jmark, M_Kanji,
  MARKS
});
