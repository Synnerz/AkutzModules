import { JavaClass, JavaEnumValueE, StringOrJavaEnumValueE, Vector2f, Vector3f } from './External';
import { CTEvent } from './IRegister';

/**
 * com.chattriggers.ctjs.minecraft.libs.renderer.Image
 */
export class Image extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.renderer.Image'> {
  constructor(image: JavaClass<'java.awt.image.BufferedImage'>);

  /**
   * Clears the image from GPU memory and removes its references CT side that way it can be garbage collected if not referenced in js code.
   */
  destroy(): void;
  draw(x: number, y: number): this;
  draw(x: number, y: number, width: number): this;
  draw(x: number, y: number, width: number, height: number): this;
  getTexture(): JavaClass<'net.minecraft.client.renderer.texture.DynamicTexture'>;
  getTextureHeight(): number;
  getTextureWidth(): number;
  onRender(event: JavaClass<'net.minecraftforge.client.event.RenderGameOverlayEvent::Pre'>): void;

  image: JavaClass<'java.awt.image.BufferedImage'>;

  static fromAsset(file: string): Image;
  static fromFile(file: JavaClass<'java.io.File'>): Image;
  static fromFile(file: string): Image;
  static fromUrl(url: string): Image;
  static fromUrl(url: string, cachedImageName: string): Image;
}

declare global {
  /**
   * com.chattriggers.ctjs.minecraft.libs.ChatLib
   */
  class ChatLib extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.ChatLib'> {
    static actionBar(str: string): void;
    static actionBar(msg: Message): void;
    static actionBar(textComponent: TextComponent): void;
    static actionBar(obj: any): void;
    /**
     * replaces & with §
     */
    static addColor(message: string): string;
    static addToSentMessageHistory(message: string): void;
    /**
     * Adds a message to the player's chat history. This allows the message to show up for the player when pressing the up/down keys while in the chat gui
     */
    static addToSentMessageHistory(index: number, message: string): void;
    static chat(str: string): void;
    static chat(msg: Message): void;
    static chat(textComponent: TextComponent): void;
    static chat(obj: any): void;
    static clearChat(): void;
    /**
     * clears specific message ids
     */
    static clearChat(...chatLineIDs: number[]): void;
    /**
     * executes a command (not client side)
     */
    static command(text: string): void;
    static command(text: string, clientSide: boolean): void;
    static deleteChat(message: Message): void;
    static deleteChat(chatLineId: number): void;
    static deleteChat(str: string): void;
    static deleteChat(regexp: RegExp): void;
    static editChat(message: Message, ...newMessages: Message[]): void;
    static editChat(chatLineId: number, ...newMessages: Message[]): void;
    static editChat(str: string, ...newMessages: Message[]): void;
    static editChat(regexp: RegExp, ...newMessages: Message[]): void;
    static getCenteredText(text: string): string;
    /**
     * Get a message that will be perfectly one line of chat, the separator repeated as many times as necessary. The separator defaults to '-'
     */
    static getChatBreak(): string;
    static getChatBreak(separator: string): string;
    /**
     * Gets the previous 1000 lines of chat
     */
    static getChatLines(): string[];
    static getChatMessage(event: JavaClass<'net.minecraftforge.client.event.ClientChatReceivedEvent'>): string;
    static getChatMessage(
      event: JavaClass<'net.minecraftforge.client.event.ClientChatReceivedEvent'>,
      formatted: boolean
    ): string;
    static getChatWidth(): number;
    /**
     * checks if player exists
     * @param errorMessage error message to be printed out if no player is found
     */
    static isPlayer(errorMessage: string): boolean;
    static removeFormatting(text: string): string;
    /**
     * replaces § with &
     */
    static replaceFormatting(text: string): string;
    /**
     * says chat message (not client side)
     */
    static say(text: string): void;
    static simulateChat(message: Message): void;
    static simulateChat(chatLineId: number): void;
    static simulateChat(str: string): void;
    static simulateChat(regexp: RegExp): void;
  }
  /**
   * com.chattriggers.ctjs.minecraft.libs.EventLib
   */
  class EventLib extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.EventLib'> {
    static cancel(event: CTEvent): void;
    static getMessage(
      event: JavaClass<'net.minecraftforge.client.event.ClientChatReceivedEvent'>
    ): JavaClass<'net.minecraft.util.IChatComponent'>;
    static getName(event: JavaClass<'net.minecraftforge.client.event.sound.PlaySoundEvent'>): string;
    static getType(event: JavaClass<'net.minecraftforge.client.event.ClientChatReceivedEvent'>): number;
  }
  const cancel: typeof EventLib.cancel;
  /**
   * com.chattriggers.ctjs.minecraft.libs.FileLib
   */
  class FileLib extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.FileLib'> {
    /**
     * Appends a file to anywhere on the system. Use './' for the '.minecraft' folder.
     */
    static append(fileLocation: string, data: string): void;
    /**
     * relative to ct modules folder
     */
    static append(moduleName: string, fileName: string, data: string): void;
    static decodeBase64(b64: string): string;
    /**
     * Deletes a file from anywhere on the system. Use './' for the '.minecraft' folder.
     */
    static delete(fileLocation: string): boolean;
    /**
     * relative to ct modules folder
     */
    static delete(moduleName: string, fileName: string): boolean;
    static deleteDirectory(file: JavaClass<'java.io.File'>): boolean;
    /**
     * Deletes a folder from anywhere on the system. Use './' for the '.minecraft' folder.
     */
    static deleteDirectory(directory: string): boolean;
    static encodeBase64(data: string): string;
    /**
     * Determines if a file or directly exists at the specified location. Use './' for the '.minecraft' folder.
     */
    static exists(fileLocation: string): boolean;
    /**
     * relative to ct modules folder
     */
    static exists(moduleName: string, fileName: string): boolean;
    static getUrlContent(url: string): string;
    /**
     * Gets the content of a url as a string
     * note: user agent (at current ct version of writing) is not used
     */
    static getUrlContent(url: string, userAgent: string): string;
    /**
     * Determines if the assumed to exist path is a directory. Use './' for the '.minecraft' folder.
     */
    static isDirectory(dirLocation: string): boolean;
    /**
     * relative to ct modules folder
     */
    static isDirectory(moduleName: string, dirName: string): boolean;
    static read(file: JavaClass<'java.io.file'>): string | null;
    /**
     * Reads a file from anywhere on the system. Use './' for the '.minecraft' folder.
     */
    static read(fileLocation: string): string | null;
    /**
     * relative to ct modules folder
     */
    static read(moduleName: string, fileName: string): string | null;
    /**
     * Extracts a zip file specified by the zipFilePath to a directory specified by destDirectory (will be created if does not exist).
     */
    static unzip(zipFilePath: string, destDirectory: string): void;
    /**
     * Writes a file to anywhere on the system. Use './' for the '.minecraft' folder.
     */
    static write(fileLocation: string, data: string): void;
    /**
     * Writes a file to anywhere on the system. Use './' for the '.minecraft' folder.
     */
    static write(fileLocation: string, data: string, recursive: boolean): void;
    /**
     * relative to ct modules folder
     */
    static write(moduleName: string, fileName: string, data: string): void;
    /**
     * relative to ct modules folder
     */
    static write(moduleName: string, fileName: string, data: string, recursive: boolean): void;
  }
  /**
   * com.chattriggers.ctjs.minecraft.libs.MathLib
   */
  class MathLib extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.MathLib'> {
    static clamp(number: number, min: number, max: number): number;
    static clampFloat(number: number, min: number, max: number): number;
    static map(number: number, in_min: number, in_max: number, out_min: number, out_max: number): number;
  }
  /**
   * com.chattriggers.ctjs.minecraft.libs.Tessellator
   */
  class Tessellator extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.Tessellator'> {
    static alphaFunc(func: number, ref: number): typeof Tessellator;
    static begin(): typeof Tessellator;
    static begin(drawMode: number): typeof Tessellator;
    static begin(drawMode: number, textured: boolean): typeof Tessellator;
    static bindTexture(texture: Image): typeof Tessellator;
    static blendFunc(sourceFactor: number, destFactor: number): typeof Tessellator;
    static colorize(red: number, green: number, blue: number): typeof Tessellator;
    static colorize(red: number, green: number, blue: number, alpha: number): typeof Tessellator;
    static deleteTexture(texture: Image): typeof Tessellator;
    static depthFunc(depthFunc: number): typeof Tessellator;
    static depthMask(flagIn: boolean): typeof Tessellator;
    static disableAlpha(): typeof Tessellator;
    static disableBlend(): typeof Tessellator;
    static disableDepth(): typeof Tessellator;
    static disableLighting(): typeof Tessellator;
    static disableTexture2D(): typeof Tessellator;
    static draw(): typeof Tessellator;
    static drawString(text: string, x: number, y: number, z: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawString(text: string, x: number, y: number, z: number, color: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawString(text: string, x: number, y: number, z: number, color: number, renderBlackBox: boolean): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawString(
      text: string,
      x: number,
      y: number,
      z: number,
      color: number,
      renderBlackBox: boolean,
      scale: number
    ): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawString(
      text: string,
      x: number,
      y: number,
      z: number,
      color: number,
      renderBlackBox: boolean,
      scale: number,
      increase: boolean
    ): void;
    static enableAlpha(): typeof Tessellator;
    static enableBlend(): typeof Tessellator;
    static enableDepth(): typeof Tessellator;
    static enableLighting(): typeof Tessellator;
    static enableTexture2D(): typeof Tessellator;
    static getRenderPos(x: number, y: number, z: number): Vector3f;
    static popMatrix(): typeof Tessellator;
    static pos(x: number, y: number, z: number): typeof Tessellator;
    static pushMatrix(): typeof Tessellator;
    static rotate(angle: number, x: number, y: number, z: number): typeof Tessellator;
    static scale(scale: number): typeof Tessellator;
    static scale(x: number, y: number): typeof Tessellator;
    static scale(x: number, y: number, z: number): typeof Tessellator;
    static tex(u: number, v: number): typeof Tessellator;
    static translate(x: number, y: number, z: number): typeof Tessellator;
    static tryBlendFuncSeparate(
      sourceFactor: number,
      destFactor: number,
      sourceFactorAlpha: number,
      destFactorAlpha: number
    ): typeof Tessellator;

    static partialTicks: number;
  }
  // @ts-expect-error
  const Image: Image;
  /**
   * com.chattriggers.ctjs.minecraft.libs.renderer.Rectangle
   */
  class Rectangle extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.renderer.Rectangle'> {
    constructor(color: number, x: number, y: number, width: number, height: number);

    draw(): this;
    getColor(): number;
    getHeight(): number;
    getOutline(): boolean;
    getOutlineColor(): number;
    getShadowColor(): number;
    getShadowOffset(): Vector2f;
    getShadowOffsetX(): number;
    getShadowOffsetY(): number;
    getThickness(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
    isShadow(): boolean;
    setColor(color: number): this;
    setHeight(height: number): this;
    setOutline(outline: boolean): this;
    setOutline(color: number, thickness: number): this;
    setOutlineColor(color: number): this;
    setShadow(shadow: boolean): this;
    setShadow(color: number, x: number, y: number): this;
    setShadowColor(color: number): this;
    setShadowOffset(x: number, y: number): this;
    setShadowOffsetX(x: number): this;
    setShadowOffsetY(y: number): this;
    setThickness(thickness: number): this;
    setWidth(width: number): this;
    setX(x: number): this;
    setY(y: number): this;
  }
  /**
   * com.chattriggers.ctjs.minecraft.libs.renderer.Renderer
   */
  class Renderer extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.renderer.Renderer'> {
    static color(red: number, green: number, blue: number): number;
    static color(red: number, green: number, blue: number, alpha: number): number;
    static colorize(red: number, green: number, blue: number): void;
    static colorize(red: number, green: number, blue: number, alpha: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawCircle(color: number, x: number, y: number, radius: number, steps: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawCircle(color: number, x: number, y: number, radius: number, steps: number, drawMode: number): void;
    static drawImage(image: Image, w: number, y: number, width: number, height: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawLine(color: number, x1: number, y1: number, x2: number, y2: number, thickness: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawLine(
      color: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      thickness: number,
      drawMode: number
    ): void;
    static drawPlayer(player: PlayerMP, x: number, y: number): void;
    static drawPlayer(player: PlayerMP, x: number, y: number, rotate: boolean): void;
    static drawPlayer(player: PlayerMP, x: number, y: number, rotate: boolean, showNametag: boolean): void;
    static drawPlayer(
      player: PlayerMP,
      x: number,
      y: number,
      rotate: boolean,
      showNametag: boolean,
      showArmor: boolean
    ): void;
    static drawPlayer(
      player: PlayerMP,
      x: number,
      y: number,
      rotate: boolean,
      showNametag: boolean,
      showArmor: boolean,
      showCape: boolean
    ): void;
    static drawPlayer(
      player: PlayerMP,
      x: number,
      y: number,
      rotate: boolean,
      showNametag: boolean,
      showArmor: boolean,
      showCape: boolean,
      showHeldItem: boolean
    ): void;
    static drawPlayer(
      player: PlayerMP,
      x: number,
      y: number,
      rotate: boolean,
      showNametag: boolean,
      showArmor: boolean,
      showCape: boolean,
      showHeldItem: boolean,
      showArrows: boolean
    ): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawRect(color: number, x: number, y: number, width: number, height: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawShape(color: number, vertexes: number[][], drawMode: number): void;
    /**
     * @param color msb ARGB lsb
     */
    static drawShape(color: number, vertexes: number[][]): void;
    static drawString(text: string, x: number, y: number): void;
    static drawString(text: string, x: number, y: number, shadow: boolean): void;
    static drawStringWithShadow(text: string, x: number, y: number): void;
    static finishDraw(): void;
    static fixAlpha(color: number): number;
    static getColor(color: number): number;
    static getDrawMode(): number | null;
    static getFontRenderer(): JavaClass<'net.minecraft.client.gui.FontRenderer'>;
    static getRainbow(step: number): number;
    static getRainbow(step: number, speed: number): number;
    static getRainbowColors(step: number): number[];
    static getRainbowColors(step: number, speed: number): number[];
    static getRenderManager(): JavaClass<'net.minecraft.client.renderer.entity.RenderManager'>;
    static getStringWidth(text: string): number;
    static retainTransforms(retain: boolean): void;
    static rotate(angle: number): void;
    static scale(scale: number): void;
    static scale(scaleX: number, scaleY: number): void;
    static setDrawMode(drawMode: number): typeof Renderer;
    static translate(x: number, y: number): void;
    static translate(x: number, y: number, z: number): void;

    static AQUA: number;
    static BLACK: number;
    static BLUE: number;
    static colorized: number | null;
    static DARK_AQUA: number;
    static DARK_BLUE: number;
    static DARK_GRAY: number;
    static DARK_GREEN: number;
    static DARK_PURPLE: number;
    static DARK_RED: number;
    static GOLD: number;
    static GRAY: number;
    static GREEN: number;
    static LIGHT_PURPLE: number;
    static RED: number;
    static WHITE: number;
    static YELLOW: number;

    static screen: {
      getWidth(): number;
      getHeight(): number;
      getScale(): number;
    };
  }
  /**
   * com.chattriggers.ctjs.minecraft.libs.renderer.Shape
   */
  class Shape extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.renderer.Shape'> {
    constructor(color: number);

    addVertex(x: number, y: number): this;
    clone(): Shape;
    copy(): Shape;
    draw(): this;
    getColor(): number;
    getDrawMode(): number;
    getVertexes(): Vector2f[];
    insertVertex(index: number, x: number, y: number): this;
    removeVertex(index: number): this;
    setCircle(x: number, y: number, radius: number, steps: number): this;
    setColor(color: number): this;
    setDrawMode(drawMode: number): this;
    setLine(x1: number, y1: number, x2: number, y2: number, thickness: number): this;
  }
  /**
   * com.chattriggers.ctjs.minecraft.libs.renderer.Text
   */
  // @ts-expect-error
  class Text extends JavaClass<'com.chattriggers.ctjs.minecraft.libs.renderer.Text'> {
    constructor(text: string);
    constructor(text: string, x: number);
    constructor(text: string, x: number, y: number);
    constructor(
      text: string,
      config: {
        color?: `0x${string | number}` | number;
        formatted?: boolean;
        shadow?: boolean;
        align?: StringOrJavaEnumValueE<typeof DisplayHandler.Align>;
        x?: number;
        y?: number;
        maxLines?: number;
        scale?: number;
        maxWidth?: number;
      }
    );

    draw(): this;
    draw(x: number): this;
    draw(x: number, y: number): this;
    exceedsMaxLines(): boolean;
    getAlign(): JavaEnumValueE<typeof DisplayHandler.Align>;
    getColor(): number;
    getFormatted(): boolean;
    getHeight(): number;
    getLines(): string[];
    getMaxLines(): number;
    getMaxWidth(): number;
    getScale(): number;
    getShadow(): boolean;
    getString(): string;
    getWidth(): number;
    getX(): number;
    getY(): number;
    setAlign(align: StringOrJavaEnumValueE<typeof DisplayHandler.Align>): this;
    setColor(color: number): this;
    setFormatted(formatted: boolean): this;
    setMaxLines(maxLines: number): this;
    setMaxWidth(maxWidth: number): this;
    setScale(scale: number): this;
    setShadow(shadow: boolean): this;
    setString(string: string): this;
    setX(x: number): this;
    setY(y: number): this;
    toString(): string;
  }
}
export {};
