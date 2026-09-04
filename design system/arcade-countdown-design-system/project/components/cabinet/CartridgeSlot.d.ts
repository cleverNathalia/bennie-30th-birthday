export interface CartridgeSlotProps {
  /** 1–8. Rendered zero-padded on the plastic. */
  day?: number;
  /** `cleared` = already opened. `ready` = today's, unopened. `locked` = not yet. */
  state?: 'cleared' | 'ready' | 'locked';
  /** Override the status word in the footer. */
  label?: string;
  /** Image URL for the screen still. Desaturated and scrimmed automatically. */
  still?: string;
  /** Countdown copy for locked slots, e.g. "06:41:12". */
  countdown?: string;
  onOpen?: () => void;
}
export declare function CartridgeSlot(props: CartridgeSlotProps): JSX.Element;

export interface SlotRackProps { children?: React.ReactNode }
export declare function SlotRack(props: SlotRackProps): JSX.Element;
