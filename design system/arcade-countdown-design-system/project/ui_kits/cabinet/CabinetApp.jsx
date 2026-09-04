const NS = window.ArcadeCountdownDesignSystem_b791c4;
const { CRTOverlay, Marquee, StatusBar, StatCell, CartridgeSlot, SlotRack, ControlDeck, ArcadeButton, Joystick, Timer, PhotoReel, DayView, DayText, DayList, DayScreen, AttractScreen, HighScore } = NS;

const PORTRAIT = '../../assets/bennie-portrait.png';

const DAYS = [
  { day: 1, title: 'Notice of intent', date: '03 Sep', kind: 'video', text: 'Something is coming every day until Thursday. Same time, 18:00, every evening. You do not have to do anything except show up.' },
  { day: 2, title: 'The empty chair', date: '04 Sep', kind: 'video', text: 'No explanation. Just watch it.' },
  { day: 3, title: 'Thirty true things', date: '05 Sep', kind: 'list', text: 'One for every year.', items: ['You make every room warmer than you found it.', 'You have never once made me feel small.', 'You learn things for the joy of knowing them, not to win an argument.', 'You would give the shirt off your back and then apologise for the fit.', 'You laugh with your whole body.', 'You remember how everyone takes their coffee.', 'You are the best thing I ever said yes to.'] },
  { day: 4, title: 'Ours now', date: '06 Sep', kind: 'video', text: 'We never picked a song. This one is ours now.' },
  { day: 5, title: 'Sealed', date: '07 Sep', locked: '06:41:12' },
  { day: 6, title: 'Sealed', date: '08 Sep', locked: '1D 06:41' },
  { day: 7, title: 'Sealed', date: '09 Sep', locked: '2D 06:41' },
  { day: 8, title: 'Sealed', date: '10 Sep', locked: '3D 06:41' },
];

const PHOTOS = [
  { url: PORTRAIT, caption: 'High school · 2013' },
  { url: PORTRAIT, caption: 'The wedding · April 2026' },
  { url: PORTRAIT, caption: 'Dublin · now' },
];

function Rack({ unlocked, onOpen, onArchive }) {
  return (
    <div style={{ maxWidth: 'var(--shell-max)', margin: '0 auto', padding: 'var(--shell-pad)', position: 'relative', zIndex: 1 }}>
      <Marquee kickerLeft="Cabinet No. 30" kickerRight="Dublin · 18:00 daily"
        title={<>PLAYER ONE<br />TURNS THIRTY</>} subtitle="Eight cartridges · one unlocks a day" />
      <div style={{ height: 'var(--s-5)' }} />
      <StatusBar>
        <StatCell label="Credits unlocked" value={`0${unlocked} / 08`} />
        <StatCell label="Next cartridge" value="06:41:12" />
        <StatCell label="Time to birthday" value="6D 04:12" tone="pink" />
      </StatusBar>
      <div style={{ height: 'var(--s-8)' }} />
      <SlotRack>
        {DAYS.map((d, i) => (
          <div key={d.day} style={{ animation: `slotIn var(--dur-base) var(--ease-mech) both`, animationDelay: `${i * 60}ms` }}>
            <CartridgeSlot day={d.day} still={d.day <= unlocked ? PORTRAIT : undefined}
              state={d.day < unlocked ? 'cleared' : d.day === unlocked ? 'ready' : 'locked'}
              countdown={d.locked} onOpen={() => onOpen(d)} />
          </div>
        ))}
      </SlotRack>
      <div style={{ height: 'var(--s-8)' }} />
      <ControlDeck note="Press start · next cartridge loads at 18:00">
        <Joystick />
        <ArcadeButton label="Open the newest day" onClick={() => onOpen(DAYS[unlocked - 1])} />
        <ArcadeButton label="Open the archive" onClick={onArchive} />
      </ControlDeck>
      <div style={{ height: 'var(--s-9)' }} />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--s-4)', flexWrap: 'wrap', marginBottom: 'var(--s-5)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-display)', color: 'var(--phos-bright)' }}>ATTRACT MODE</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--phos-dim)' }}>Thirteen years · 20 frames</div>
      </div>
      <PhotoReel photos={PHOTOS} height={360} />
    </div>
  );
}

function Archive({ onClose }) {
  return (
    <DayView eyebrow="Service menu" title="THE ARCHIVE" onClose={onClose}>
      <DayText>Every cartridge, kept. The cabinet does not close.</DayText>
      <HighScore rows={DAYS.map((d) => ({ label: d.locked ? 'Sealed until ' + d.date : d.title, value: d.date }))}
        footnote="Come back whenever you want. It will all still be here." />
    </DayView>
  );
}

function Day({ d, onClose }) {
  if (d.day === 8) {
    return (
      <DayView day={8} eyebrow="Cartridge 08 · Final" title="HAPPY THIRTIETH" onClose={onClose}>
        <DayScreen height={420} caption="Filmed in Port Elizabeth"><div style={{ display: 'grid', placeItems: 'center', height: '100%', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--cyan-55)' }}>Video</div></DayScreen>
        <div style={{ height: 'var(--s-8)' }} />
        <HighScore rows={DAYS.slice(0, 7).map((x) => ({ label: x.title, value: x.date }))}
          footnote="Eight days. One every evening. Nothing missed." />
      </DayView>
    );
  }
  return (
    <DayView day={d.day} title={d.title.toUpperCase()} onClose={onClose}>
      <DayText>{d.text}</DayText>
      {d.kind === 'video' && <DayScreen caption={`Filmed ${d.date}`}><div style={{ display: 'grid', placeItems: 'center', height: '100%', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label-lg)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--cyan-55)' }}>Video</div></DayScreen>}
      {d.kind === 'list' && <DayList items={d.items} />}
    </DayView>
  );
}

function CabinetApp() {
  const [entered, setEntered] = React.useState(false);
  const [open, setOpen] = React.useState(null);
  const [archive, setArchive] = React.useState(false);
  const unlocked = 4;
  return (
    <>
      <CRTOverlay />
      {!entered && <AttractScreen image={PORTRAIT} subtitle="Cabinet No. 30 · Dublin"
        title={<>PLAYER ONE<br />TURNS THIRTY</>} prompt="Press any key to begin" onStart={() => setEntered(true)} />}
      <Rack unlocked={unlocked} onOpen={(d) => !d.locked && setOpen(d)} onArchive={() => setArchive(true)} />
      {open && <Day d={open} onClose={() => setOpen(null)} />}
      {archive && <Archive onClose={() => setArchive(false)} />}
    </>
  );
}

window.CabinetApp = CabinetApp;
