import { JavaClass, JavaEnum, JavaEnumValueE, StringOrJavaEnumValueE } from './External';
import './NBT';
import { RegularTrigger } from './IRegister';

/**
 * * A library that provides useful utilities for GuiHandler
 */
declare class GuiHandler extends JavaClass<"com.github.synnerz.akutz.api.objects.gui.GuiHandler"> {
  onTick(event: JavaClass<'net.minecraftforge.fml.common.gameevent.TickEvent.ClientTickEvent'>): void;
  /**
   * * Sets the specified Gui to be opened
   */
  openGui(gui: JavaClass<'net.minecraft.client.gui.GuiScreen'>): void;
}

declare global {
  /**
   * * A library that provides useful utilities for Sound
   */
  class Sound extends JavaClass<"com.github.synnerz.akutz.api.objects.sound.Sound"> {
    constructor(config: {
      source: string
      priority?: boolean
      loop?: boolean
      stream?: boolean
      category: 'master' | 'music' | 'record' | 'weather' | 'block' | 'hostile' | 'neutral' | 'player' | 'ambient'
      volume: number
      pitch: number
      x: number
      y: number
      z: number
      attenuation: 0 | 1 | 2
    })
    /**
     * * Plays [this] sound
     */
    play(): void
    /**
     * * Pauses [this] sound
     */
    pause(): void
    /**
     * * Stops [this] sound
     */
    stop(): void
    /**
     * * Rewinds [this] sound
     */
    rewind(): void
    /**
     * * Sets the attenuation (fade out over space) of the song. Models are: NONE(0) - no fade ROLLOFF(1) - this is the default, meant to be somewhat realistic LINEAR(2) - fades out linearly, as the name implies
     */
    setAttenuation(model: number): this
    /**
     * * Gets [this] sound's pitch
     */
    getPitch(): number
    /**
     * * Sets [this] sound's pitch
     */
    setPitch(pitch: number): this
    /**
     * * Sets [this] sound's position
     */
    setPosition(x: number, y: number, z: number): this
    /**
     * * Gets [this] sound's volume
     */
    getVolume(): number
    /**
     * * Sets [this] sound's volume
     */
    setVolume(vol: number): this
    /**
     * * Sets the category of this sound, making it respect the Player's sound volume sliders
     */
    setCategory(
      category: 'master' | 'music' | 'record' | 'weather' | 'block' | 'hostile' | 'neutral' | 'player' | 'ambient'
    ): this
  }
  /**
   * com.chattriggers.ctjs.engine.langs.js.JSDisplay
   */
  class Display extends JavaClass<'com.chattriggers.ctjs.engine.langs.js.JSDisplay'> {
    constructor(config?: {
      backgroundColor?: number;
      textColor?: number;
      background?: StringOrJavaEnumValueE<typeof DisplayHandler.Background>;
      align?: StringOrJavaEnumValueE<typeof DisplayHandler.Align>;
      order?: 'UP' | 'DOWN' | StringOrJavaEnumValueE<typeof DisplayHandler.Order>;
      renderX?: number;
      renderY?: number;
      shouldRender?: boolean;
      minWidth?: boolean;
      registerType?: StringOrJavaEnumValueE<typeof DisplayHandler.RegisterType>;
    });

    addLine(line: string | DisplayLine): this;
    addLine(index: number, line: string | DisplayLine): this;
    addLines(...lines: (string | DisplayLine)[]): this;
    clearLines(): this;
    getAlign(): JavaEnumValueE<typeof DisplayHandler.Align>;
    getBackground(): JavaEnumValueE<typeof DisplayHandler.Background>;
    getBackgroundColor(): number;
    getHeight(): number;
    getLine(index: number): DisplayLine;
    getLines(): DisplayLine[];
    getMinWidth(): number;
    getOrder(): JavaEnumValueE<typeof DisplayHandler.Order>;
    getRegisterType(): JavaEnumValueE<typeof DisplayHandler.RegisterType>;
    getRenderX(): number;
    getRenderY(): number;
    getShouldRender(): boolean;
    getTextColor(): number;
    getWidth(): number;
    hide(): this;
    removeLine(index: number): this;
    render(): void;
    setAlign(align: StringOrJavaEnumValueE<typeof DisplayHandler.Align>): this;
    setBackground(background: StringOrJavaEnumValueE<typeof DisplayHandler.Background>): this;
    setLine(index: number, line: string | DisplayLine): this;
    setLines(lines: DisplayLine[]): this;
    setMinWidth(minWidth: number): this;
    setOrder(order: StringOrJavaEnumValueE<typeof DisplayHandler.Order>): this;
    setRegisterType(registerType: StringOrJavaEnumValueE<typeof DisplayHandler.RegisterType>): this;
    setRenderLoc(renderX: number, renderY: number): this;
    setRenderX(renderX: number): this;
    setRenderY(renderY: number): this;
    setShouldRender(shouldRender: boolean): this;
    setTextColor(textColor: number): this;
    show(): this;
    toString(): string;
  }
  /**
   * com.chattriggers.ctjs.minecraft.objects.display.DisplayHandler
   */
  class DisplayHandler extends JavaClass<'com.chattriggers.ctjs.minecraft.objects.display.DisplayHandler'> {
    static Align: JavaEnum<'LEFT' | 'CENTER' | 'RIGHT'>;
    static Background: JavaEnum<'NONE' | 'FULL' | 'PER_LINE'>;
    static Order: JavaEnum<'UP' | 'DOWN'>;
    static RegisterType: JavaEnum<'RENDER_OVERLAY' | 'POST_GUI_RENDER'>;

    constructor();

    clearDisplays(): void;
    registerDisplay(display: Display): boolean;
    renderDisplayGui(event: JavaClass<'net.minecraftforge.client.event.GuiScreenEvent.DrawScreenEvent.Post'>): void;
    renderDisplayOverlay(event: JavaClass<'net.minecraftforge.client.event.RenderGameOverlayEvent.Text'>): void;
  }
  /**
   * com.chattriggers.ctjs.engine.langs.js.JSDisplayLine
   */
  class DisplayLine extends JavaClass<'com.chattriggers.ctjs.engine.langs.js.JSDisplayLine'> {
    constructor(text: string);
    constructor(
      text: string,
      config: {
        textColor: number;
        backgroundColor: number;
        align: StringOrJavaEnumValueE<typeof DisplayHandler.Align>;
        background: StringOrJavaEnumValueE<typeof DisplayHandler.Background>;
      }
    );

    draw(
      x: number,
      y: number,
      totalWidth: number,
      background: JavaEnumValueE<typeof DisplayHandler.Background>,
      backgroundColor: number,
      textColor: number,
      align: JavaEnumValueE<typeof DisplayHandler.Align>
    ): void;
    getAlign(): JavaEnumValueE<typeof DisplayHandler.Align> | null;
    getBackground(): JavaEnumValueE<typeof DisplayHandler.Background> | null;
    getBackgroundColor(): number | null;
    getText(): Text;
    getTextColor(): number | null;
    getTextWidth(): number;
    registerClicked(method: (x: number, y: number, button: number, pressed: boolean) => void): RegularTrigger;
    registerDragged(
      method: (deltaX: number, deltaY: number, x: number, y: number, pressed: boolean) => void
    ): RegularTrigger;
    registerHovered(method: (x: number, y: number) => void): RegularTrigger;
    registerMouseLeave(method: (x: number, y: number) => void): RegularTrigger;
    setAlign(align: StringOrJavaEnumValueE<typeof DisplayHandler.Align>): this;
    setBackground(background: StringOrJavaEnumValueE<typeof DisplayHandler.Background>): this;
    setBackgroundColor(backgroundColor: number): this;
    setScale(scale: number): this;
    setShadow(shadow: boolean): this;
    setText(text: string): this;
    setTextColor(textColor: number): this;
    toString(): string;
    unregisterClicked(): void;
    unregisterDragged(): void;
    unregisterHovered(): void;
    unregisterMouseLeave(): void;
  }
  /**
   * com.chattriggers.ctjs.engine.langs.js.JSGui
   */
  class Gui extends JavaClass<'net.minecraft.client.gui.GuiScreen'> {
    constructor();

    addButton(button: JavaClass<'net.minecraft.client.gui.GuiButton'>): this;
    addButton(buttonId: number, x: number, y: number, buttonText: string): this;
    addButton(buttonId: number, x: number, y: number, width: number, buttonText: string): this;
    addButton(buttonId: number, x: number, y: number, width: number, height: number, buttonText: string): this;
    clearButtons(): this;
    close(): void;
    /**
     * @deprecated
     */
    doesGuiPauseGame(): boolean;
    drawCreativeTabHoveringString(text: string, mouseX: number, mouseY: number): void;
    drawHoveringString(text: string[], x: number, y: number): void;
    /**
     * @deprecated
     */
    drawScreen(mouseX: number, mouseY: number, partialTicks: number): void;
    drawString(text: string, x: number, y: number, color: number): void;
    getButton(buttonId: number): JavaClass<'net.minecraft.client.gui.GuiButton'> | null;
    getButtonEnabled(buttonId: number): boolean;
    getButtonHeight(buttonId: number): number;
    getButtonVisibility(buttonId: number): boolean;
    getButtonWidth(buttonId: number): number;
    getButtonX(buttonId: number): number;
    getButtonY(buttonId: number): number;
    /**
     * @deprecated
     */
    initGui(): void;
    isAltDown(): boolean;
    isControlDown(): boolean;
    isOpen(): boolean;
    isShiftDown(): boolean;
    /**
     * @deprecated
     */
    onGuiClosed(): void;
    open(): void;
    registerActionPreformed(method: (buttonId: number) => void): RegularTrigger;
    registerClicked(method: (mouseX: number, mouseY: number, button: number) => void): RegularTrigger;
    registerClosed(method: (gui: this) => void): RegularTrigger;
    registerDraw(method: (mouseX: number, mouseY: number, partialTicks: number) => void): RegularTrigger;
    registerKeyTyped(method: (typedChar: number, keyCode: number) => void): RegularTrigger;
    registerMouseDragged(
      method: (mouseX: number, mouseY: number, button: number, timeSinceLastClick: number) => void
    ): RegularTrigger;
    registerMouseReleased(method: (mouseX: number, mouseY: number, button: number) => void): RegularTrigger;
    registerOpened(method: (gui: this) => void): RegularTrigger;
    registerScrolled(method: (mouseX: number, mouseY: number, delta: number) => void): RegularTrigger;
    removeButton(buttonId: number): this;
    setButtonEnabled(buttonId: number, enabled: boolean): this;
    setButtonHeight(buttonId: number, height: number): this;
    setButtonLoc(buttonId: number, x: number, y: number): this;
    setButtonVisibility(buttonId: number, visible: boolean): this;
    setButtonWidth(buttonId: number, width: number): this;
    setButtonX(buttonId: number, x: number): this;
    setButtonY(buttonId: number, y: number): this;
    setDoesPauseGame(doesPauseGame: boolean): this;
  }
  const GuiHandler: GuiHandler;
  /**
   * com.chattriggers.ctjs.engine.langs.js.JSKeyBind
   */
  class KeyBind extends JavaClass<'com.chattriggers.ctjs.engine.langs.js.JSKeyBind'> {
    static removeKeyBind(keyBind: KeyBind): void;
    static clearKeyBinds(): void;

    constructor(keyBinding: JavaClass<'net.minecraft.client.settings.KeyBinding'>);
    constructor(description: string, keyCode: number);
    constructor(description: string, keyCode: number, category: string);

    getCategory(): string;
    getDescription(): string;
    getKeyCode(): number;
    /**
     * Returns true if the key is pressed (used for continuous querying).
     */
    isKeyDown(): boolean;
    /**
     * Returns true on the initial key press. For continuous querying use isKeyDown.
     */
    isPressed(): boolean;
    registerKeyDown(method: () => void): RegularTrigger;
    registerKeyPress(method: () => void): RegularTrigger;
    registerKeyRelease(method: () => void): RegularTrigger;
    setState(pressed: boolean): void;
    toString(): string;
    unregisterKeyDown(): this;
    unregisterKeyPress(): this;
    unregisterKeyRelease(): this;
  }
  /**
   * com.chattriggers.ctjs.minecraft.objects.message.Message
   */
  class Message extends JavaClass<'com.chattriggers.ctjs.minecraft.objects.message.Message'> {
    constructor(event: JavaClass<'net.minecraftforge.client.event.ClientChatReceivedEvent'>);
    constructor(component: JavaClass<'net.minecraft.util.IChatComponent'>);
    constructor(messageParts: (string | TextComponent | Item)[]);
    constructor(...messageParts: (string | TextComponent | Item)[]);

    actionBar(): void;
    addTextComponent(component: string | TextComponent): this;
    addTextComponent(index: number, component: string | TextComponent): this;
    chat(): void;
    clone(): Message;
    copy(): Message;
    edit(...replacements: Message[]): void;
    getChatLineId(): number;
    getChatMessage(): JavaClass<'net.minecraft.util.IChatComponent'>;
    getFormattedText(): string;
    getMessageParts(): TextComponent[];
    getUnformattedText(): string;
    isFormatted(): boolean;
    isRecursive(): boolean;
    setChatLineId(id: number): this;
    setFormatted(formatted: boolean): this;
    setRecursive(recursive: boolean): this;
    setTextComponent(index: number, component: string | TextComponent): this;
    toString(): string;
  }
  /**
   * com.chattriggers.ctjs.minecraft.objects.message.TextComponent
   */
  class TextComponent extends JavaClass<'com.chattriggers.ctjs.minecraft.objects.message.TextComponent'> {
    constructor(text: string);
    constructor(chatComponent: JavaClass<'net.minecraft.util.IChatComponent'>);

    actionBar(): void;
    chat(): void;
    getClickAction(): 'open_url' | 'open_file' | 'run_command' | 'suggest_command' | 'change_page' | null;
    getClickValue(): string | null;
    getHoverAction(): 'show_text' | 'show_achievement' | 'show_item' | 'show_entity' | null;
    getHoverValue(): string | null;
    getText(): string;
    isFormatted(): boolean;
    setClick(action: 'open_url' | 'open_file' | 'run_command' | 'suggest_command' | 'change_page', value: string): this;
    setClickAction(action: 'open_url' | 'open_file' | 'run_command' | 'suggest_command' | 'change_page'): this;
    setClickValue(value: string): this;
    setFormatted(formatted: boolean): this;
    setHover(action: 'show_text' | 'show_achievement' | 'show_item' | 'show_entity', value: string): this;
    setHoverAction(action: 'show_text' | 'show_achievement' | 'show_item' | 'show_entity'): this;
    setHoverValue(value: string): this;
    setText(text: string): this;
    toString(): string;

    chatComponentText: JavaClass<'net.minecraft.util.IChatComponent'>;
  }
}

export {};
