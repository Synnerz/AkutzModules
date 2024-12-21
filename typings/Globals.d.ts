import { JavaClass } from './External';

declare global {
  namespace Java {
    const type: <T extends string>(clazz: T) => JavaClass<T>;
  }

  interface String {
    addFormatting(): string;
    addColor(): string;
    removeFormatting(): string;
    replaceFormatting(): string;
  }
  function easeOut(
    start: number,
    finish: number,
    speed: number,
    jump?: number
  ): number;
  function easeColor(
    start: number,
    finish: number,
    speed: number,
    jump?: number
  ): number;
  interface Number {
    easeOut(finish: number, speed: number, jump?: number): number;
    easeColor(finish: number, speed: number, jump?: number): number;
  }
  /**
   * java.util.ArrayList
   */
  class ArrayList extends JavaClass<'java.util.ArrayList'> {}
  /**
   * java.util.HashMap
   */
  class HashMap extends JavaClass<'java.util.HashMap'> {}
  /**
   * net.minecraftforge.fml.relauncher.ReflectionHelper
   */
  class ReflectionHelper extends JavaClass<'net.minecraftforge.fml.relauncher.ReflectionHelper'> {}
  /**
   * org.lwjgl.input.Keyboard
   */
  class Keyboard extends JavaClass<'org.lwjgl.input.Keyboard'> {
    /**
     * The special character meaning that no character was translated for the event.
     */
    static readonly CHAR_NONEL: number;
    /**
     * Internal use - event size in bytes
     */
    static readonly EVENT_SIZE: number;

    static KEY_0: number;
    static KEY_1: number;
    static KEY_2: number;
    static KEY_3: number;
    static KEY_4: number;
    static KEY_5: number;
    static KEY_6: number;
    static KEY_7: number;
    static KEY_8: number;
    static KEY_9: number;
    static KEY_A: number;
    static KEY_ADD: number;
    static KEY_APOSTROPHE: number;
    static KEY_APPS: number;
    static KEY_AT: number;
    static KEY_AX: number;
    static KEY_B: number;
    static KEY_BACK: number;
    static KEY_BACKSLASH: number;
    static KEY_C: number;
    static KEY_CAPITAL: number;
    static KEY_CIRCUMFLEX: number;
    static KEY_CLEAR: number;
    static KEY_COLON: number;
    static KEY_COMMA: number;
    static KEY_CONVERT: number;
    static KEY_D: number;
    static KEY_DECIMAL: number;
    static KEY_DELETE: number;
    static KEY_DIVIDE: number;
    static KEY_DOWN: number;
    static KEY_E: number;
    static KEY_END: number;
    static KEY_EQUALS: number;
    static KEY_ESCAPE: number;
    static KEY_F: number;
    static KEY_F1: number;
    static KEY_F10: number;
    static KEY_F11: number;
    static KEY_F12: number;
    static KEY_F13: number;
    static KEY_F14: number;
    static KEY_F15: number;
    static KEY_F16: number;
    static KEY_F17: number;
    static KEY_F18: number;
    static KEY_F19: number;
    static KEY_F2: number;
    static KEY_F3: number;
    static KEY_F4: number;
    static KEY_F5: number;
    static KEY_F6: number;
    static KEY_F7: number;
    static KEY_F8: number;
    static KEY_F9: number;
    static KEY_FUNCTION: number;
    static KEY_G: number;
    static KEY_GRAVE: number;
    static KEY_H: number;
    static KEY_HOME: number;
    static KEY_I: number;
    static KEY_INSERT: number;
    static KEY_J: number;
    static KEY_K: number;
    static KEY_KANA: number;
    static KEY_KANJI: number;
    static KEY_L: number;
    static KEY_LBRACKET: number;
    static KEY_LCONTROL: number;
    static KEY_LEFT: number;
    static KEY_LMENU: number;
    static KEY_LMETA: number;
    static KEY_LSHIFT: number;
    /**
     * Deprecated.
     * Use KEY_LMETA instead
     */
    static KEY_LWIN: number;
    static KEY_M: number;
    static KEY_MINUS: number;
    static KEY_MULTIPLY: number;
    static KEY_N: number;
    static KEY_NEXT: number;
    static KEY_NOCONVERT: number;
    /**
     * The special keycode meaning that only the translated character is valid.
     */
    static KEY_NONE: number;
    static KEY_NUMLOCK: number;
    static KEY_NUMPAD0: number;
    static KEY_NUMPAD1: number;
    static KEY_NUMPAD2: number;
    static KEY_NUMPAD3: number;
    static KEY_NUMPAD4: number;
    static KEY_NUMPAD5: number;
    static KEY_NUMPAD6: number;
    static KEY_NUMPAD7: number;
    static KEY_NUMPAD8: number;
    static KEY_NUMPAD9: number;
    static KEY_NUMPADCOMMA: number;
    static KEY_NUMPADENTER: number;
    static KEY_NUMPADEQUALS: number;
    static KEY_O: number;
    static KEY_P: number;
    static KEY_PAUSE: number;
    static KEY_PERIOD: number;
    static KEY_POWER: number;
    static KEY_PRIOR: number;
    static KEY_Q: number;
    static KEY_R: number;
    static KEY_RBRACKET: number;
    static KEY_RCONTROL: number;
    static KEY_RETURN: number;
    static KEY_RIGHT: number;
    static KEY_RMENU: number;
    static KEY_RMETA: number;
    static KEY_RSHIFT: number;
    /**
     * Deprecated.
     * Use KEY_RMETA instead
     */
    static KEY_RWIN: number;
    static KEY_S: number;
    static KEY_SCROLL: number;
    static KEY_SECTION: number;
    static KEY_SEMICOLON: number;
    static KEY_SLASH: number;
    static KEY_SLEEP: number;
    static KEY_SPACE: number;
    static KEY_STOP: number;
    static KEY_SUBTRACT: number;
    static KEY_SYSRQ: number;
    static KEY_T: number;
    static KEY_TAB: number;
    static KEY_U: number;
    static KEY_UNDERLINE: number;
    static KEY_UNLABELED: number;
    static KEY_UP: number;
    static KEY_V: number;
    static KEY_W: number;
    static KEY_X: number;
    static KEY_Y: number;
    static KEY_YEN: number;
    static KEY_Z: number;
    static KEYBOARD_SIZE: number;

    /**
     * Check whether repeat events are currently reported or not.
     */
    static areRepeatEventsEnabled(): boolean;

    /**
     * "Create" the keyboard.
     */
    static create(): void;

    /**
     * "Destroy" the keyboard.
     */
    static destroy(): void;

    /**
     * Controls whether repeat events are reported or not.
     */
    static enableRepeatEvents(enable: boolean): void;

    static getEventCharacter(): number;
    /**
     * Please not that the key code returned is NOT valid against the current keyboard layout.
     */
    static getEventKey(): number;

    /**
     * Gets the state of the key that generated the current event
     */
    static getEventKeyState(): boolean;

    /**
     * Gets the time in nanoseconds of the current event.
     */
    static getEventNanoseconds(): number;

    static getKeyCount(): number;

    /**
     * Get's a key's index.
     */
    static getKeyIndex(keyName: string): number;

    /**
     * Gets a key's name
     */
    static getKeyName(key: number): string;

    /**
     * Gets the number of keyboard events waiting after doing a buffer enabled poll().
     */
    static getNumKeyboardEvents(): number;

    static isCreated(): boolean;

    /**
     * Checks to see if a key is down.
     */
    static isKeyDown(key: number): boolean;

    static isRepeatEvent(): boolean;

    /**
     * Gets the next keyboard event.
     */
    static next(): boolean;

    /**
     * Polls the keyboard for its current state.
     */
    static poll(): void;
  }
  // TODO: finish
}

export {};
