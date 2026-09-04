The control panel along the bottom of the cabinet — a pink ball-top joystick, two cyan buttons, and a line of status text.

```jsx
<ControlDeck note="Press start · next cartridge loads at 18:00">
  <Joystick /><ArcadeButton label="Select" /><ArcadeButton label="Start" />
</ControlDeck>
```

- The buttons are spheres: a radial highlight at 34%/30%, a coloured midtone, and a dark rim, plus an inner bottom shadow. Never a flat filled circle.
- Press moves 2px down and shrinks to 0.94 in 140ms — a physical microswitch.
- Circles here are the ONLY radius in the system.
