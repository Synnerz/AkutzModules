import { JavaClass, JavaEnumValue } from './External';
import './World';

/**
 * com.chattriggers.ctjs.minecraft.wrappers.Settings
 */
declare class Settings extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.Settings'> {
  getDifficulty(): number;
  getFOV(): number;
  getSettings(): JavaClass<'net.minecraft.client.settings.GameSettings'>;
  setDifficulty(difficulty: number): void;
  setFOV(fov: number): void;

  chat: {
    setWidth(width: number): void;
    setWebLinks(toggled: boolean): void;
    setVisibility(visibility: 'HIDDEN' | 'SYSTEM' | 'FULL' | (string & {})): void;
    setUnfocusedHeight(height: number): void;
    setScale(scale: number): void;
    setReducedDebugInfo(toggled: boolean): void;
    setPromptOnWebLinks(toggled: boolean): void;
    setOpacity(opacity: number): void;
    setFocusedHeight(height: number): void;
    setColors(toggled: boolean): void;
    getWidth(): number;
    getWebLinks(): boolean;
    getVisibility(): JavaEnumValue<'FULL' | 'HIDDEN' | 'SYSTEM'>;
    getUnfocusedHeight(): number;
    getScale(): number;
    getReducedDebugInfo(): boolean;
    getPromptOnWebLinks(): boolean;
    getOpacity(): boolean;
    getFocusedHeight(): number;
    getColors(): boolean;
  };
  skin: {
    getCape(): boolean;
    getHat(): boolean;
    getJacket(): boolean;
    getLeftPantsLeg(): boolean;
    getLeftSleeve(): boolean;
    getRightPantsLeg(): boolean;
    getRightSleeve(): boolean;
    setCape(toggled: boolean): void;
    setHat(toggled: boolean): void;
    setJacket(toggled: boolean): void;
    setLeftPantsLeg(toggled: boolean): void;
    setLeftSleeve(toggled: boolean): void;
    setRightPantsLeg(toggled: boolean): void;
    setRightSleeve(toggled: boolean): void;
  };
  sound: {
    getAmbient(): number;
    getBlocks(): number;
    getFriendlyCreatures(): number;
    getHostileCreatures(): number;
    getMasterVolume(): number;
    getMusicVolume(): number;
    getNoteblockVolume(): number;
    getPlayers(): number;
    getWeather(): number;
    setAmbient(level: number): void;
    setBlocks(level: number): void;
    setFriendlyCreatures(level: number): void;
    setHostileCreatures(level: number): void;
    setMasterVolume(level: number): void;
    setMusicVolume(level: number): void;
    setNoteblockVolume(level: number): void;
    setPlayers(level: number): void;
    setWeather(level: number): void;
  };
  video: {
    get3dAnaglyph(): boolean;
    getAlternateBlocks(): boolean;
    getBobbing(): boolean;
    getBrightness(): number;
    getClouds(): number;
    getEntityShadows(): boolean;
    getFullscreen(): boolean;
    getGraphics(): boolean;
    getGuiScale(): number;
    getMaxFrameRate(): number;
    getMipmapLevels(): number;
    getParticles(): number;
    getRenderDistance(): number;
    getSmoothLighting(): number;
    getVBOs(): boolean;
    getVsync(): boolean;
    set3dAnaglyph(toggled: boolean): void;
    setAlternateBlocks(toggled: boolean): void;
    setBobbing(toggled: boolean): void;
    setBrightness(brightness: number): void;
    setClouds(clouds: number): void;
    setEntityShadows(toggled: boolean): void;
    setFullscreen(toggled: boolean): void;
    setGraphics(fancy: boolean): void;
    setGuiScale(scale: number): void;
    setMaxFrameRate(frameRate: number): void;
    setMipmapLevels(mipmapLevels: number): void;
    setParticles(particles: number): void;
    setRenderDistance(distance: number): void;
    setSmoothLighting(level: number): void;
    setVBOs(toggled: boolean): void;
    setVsync(toggled: boolean): void;
  };
}

/**
 * com.chattriggers.ctjs.engine.langs.js.JSClient
 */
declare class JSClient extends JavaClass<'com.chattriggers.ctjs.engine.langs.js.JSClient'> {
  connect(ip: string): void;
  disconnect(): void;
  getChatGUI(): JavaClass<'net.minecraft.client.gui.GuiNewChat'> | null;
  getConnection(): JavaClass<'net.minecraft.client.network.NetHandlerPlayClient'> | null;
  getCurrentChatMessage(): string;
  getFreeMemory(): number;
  getFPS(): number;
  getKeyBindFromKey(keyCode: number): KeyBind | null;
  getKeyBindFromKey(keyCode: number, description: string): KeyBind;
  getKeyBindFromKey(keyCode: number, description: string, category: string): KeyBind;
  getKeyBindFromDescription(description: string): KeyBind | null;
  getMaxMemory(): number;
  /**
   * 0 - 100
   */
  getMemoryUsage(): number;
  getMinecraft(): JavaClass<'net.minecraft.client.Minecraft'>;
  getMouseX(): number;
  getMouseY(): number;
  getSystemTime(): number;
  getTabGui(): JavaClass<'net.minecraft.client.gui.GuiPlayerTabOverlay'> | null;
  getTotalMemory(): number;
  getVersion(): string;
  isAltDown(): boolean;
  isControlDown(): boolean;
  isInChat(): boolean;
  isInGui(): boolean;
  isInTab(): boolean;
  isShiftDown(): boolean;
  isTabbedIn(): boolean;
  scheduleTask(callback: () => void): boolean;
  /**
   * Schedule's a task to run on Minecraft's main thread in [delay] ticks.
   * Defaults to the next tick.
   * @param delay The delay in ticks
   * @param callback The task to run on the main thread
   */
  scheduleTask(delay: number, callback: () => void): boolean;
  sendPacket(packet: JavaClass<'net.minecraft.network.Packet'>): void;
  setCurrentChatMessage(message: string): void;
  showTitle(title: string, subtitle: string, fadeIn: number, time: number, fadeOut: number): void;

  camera: {
    getX(): number;
    getY(): number;
    getZ(): number;
  };
  currentGui: {
    get(): JavaClass<'net.minecraft.client.gui.GuiScreen'> | null;
    getClassName(): 'null' | (string & {});
    getSlotUnderMouse(): Slot | null;
    close(): void;
  };
  settings: Settings;
}

declare class Score extends JavaClass<'internal'> {
  constructor(score: JavaClass<'net.minecraft.scoreboard.Score'>);

  getPoints(): number;
  getName(): string;
  toString(): string;
}

declare global {
  const Client: JSClient;
  /**
   * com.chattriggers.ctjs.minecraft.wrappers.CPS
   */
  class CPS extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.CPS'> {
    static getLeftClicks(): number;
    static getLeftClicksAverage(): number;
    static getLeftClicksMax(): number;
    static getRightClicks(): number;
    static getRightClicksAverage(): number;
    static getRightClicksMax(): number;

    click(event: JavaClass<'net.minecraftforge.client.event.MouseEvent'>): void;
    update(event: JavaClass<'net.minecraftforge.client.event.RenderGameOverlayEvent'>): void;
  }
  /**
   * com.chattriggers.ctjs.minecraft.wrappers.Player
   */
  class Player extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.Player'> {
    static asPlayerMP(): PlayerMP | null;
    static draw(x: number, y: number): typeof Player;
    static draw(x: number, y: number, rotate: boolean): typeof Player;
    static draw(x: number, y: number, rotate: boolean, showNametag: boolean): typeof Player;
    static draw(x: number, y: number, rotate: boolean, showNametag: boolean, showArmor: boolean): typeof Player;
    static draw(
      x: number,
      y: number,
      rotate: boolean,
      showNametag: boolean,
      showArmor: boolean,
      showCape: boolean
    ): typeof Player;
    static draw(
      x: number,
      y: number,
      rotate: boolean,
      showNametag: boolean,
      showArmor: boolean,
      showCape: boolean,
      showHeldItem: boolean
    ): typeof Player;
    static draw(
      x: number,
      y: number,
      rotate: boolean,
      showNametag: boolean,
      showArmor: boolean,
      showCape: boolean,
      showHeldItem: boolean,
      showArrows: boolean
    ): typeof Player;
    static facing():
      | ''
      | 'South'
      | 'South West'
      | 'West'
      | 'North West'
      | 'North'
      | 'North East'
      | 'East'
      | 'South East';
    static getActivePotionEffects(): PotionEffect[];
    static getAirLevel(): number;
    static getArmorPoints(): number;
    static getBiome(): string;
    static getContainer(): Inventory | null;
    static getDisplayName(): TextComponent;
    static getHeldItem(): Item | null;
    static getHeldItemIndex(): number;
    static getHP(): number;
    static getHunger(): number;
    static getInventory(): Inventory | null;
    static getLastX(): number;
    static getLastY(): number;
    static getLastZ(): number;
    static getLightLevel(): number;
    static getMotionX(): number;
    static getMotionY(): number;
    static getMotionZ(): number;
    static getName(): string;
    static getPitch(): number;
    static getPlayer(): JavaClass<'net.minecraft.client.entity.EntityPlayerSP'> | null;
    static getRawYaw(): number;
    static getRenderX(): number;
    static getRenderY(): number;
    static getRenderZ(): number;
    static getSaturation(): number;
    static getTeam(): Team | null;
    static getUUID(): `${string}-${string}-${string}-${string}-${string}`;
    static getUUIDObj(): JavaClass<'java.util.UUID'>;
    static getX(): number;
    static getXPLevel(): number;
    static getXPProgress(): number;
    static getY(): number;
    static getYaw(): number;
    static getZ(): number;
    static isFlying(): boolean;
    static isMoving(): boolean;
    static isSleeping(): boolean;
    static isSneaking(): boolean;
    static isSprinting(): boolean;
    /**
     * Gets the current object that the player is looking at, whether that be a block or an entity. Returns an air BlockType when not looking at anything.
     */
    static lookingAt(): BlockType | Sign | Block | Entity;
    static setHeldItemIndex(index: number): void;
    static setNametagName(textComponent: TextComponent): void;
    static setTabDisplayName(textComponent: TextComponent): void;

    static armor: {
      getBoots(): Item | null;
      getChestplate(): Item | null;
      getHelmet(): Item | null;
      getLeggings(): Item | null;
    };
  }
  /**
   * com.chattriggers.ctjs.minecraft.wrappers.Scoreboard
   */
  class Scoreboard extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.Scoreboard'> {
    static getLineByIndex(index: number): Score;
    static getLines(): Score[];
    static getLines(descending: boolean): Score[];
    static getLinesByScore(score: number): Score[];
    static getScoreboard(): JavaClass<'net.minecraft.scoreboard.Scoreboard'> | null;
    static getScoreboardTitle(): string;
    static getShouldRender(): boolean;
    static getSidebar(): JavaClass<'net.minecraft.scoreboard.ScoreObjective'>;
    static getTitle(): string;
    static resetCache(): void;
    static setLine(score: number, line: string, override: boolean): void;
    static setShouldRender(shouldRender: boolean): void;
    static setTitle(title: string): void;

    static Score: typeof Score;
  }
  /**
   * com.chattriggers.ctjs.minecraft.wrappers.Server
   */
  class Server extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.Server'> {
    static getIP(): 'localhost' | (string & {});
    static getMOTD(): 'SinglePlayer' | (string & {});
    static getName(): 'SinglePlayer' | (string & {});
    static getPing(): 5 | (number & {});
  }
  /**
   * com.chattriggers.ctjs.minecraft.wrappers.TabList
   */
  class TabList extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.TabList'> {
    static clearFooter(): void;
    static clearHeader(): void;
    static getFooter(): string | null;
    static getFooterMessage(): Message | null;
    static getHeader(): string | null;
    static getHeaderMessage(): Message | null;
    static getNames(): string[];
    static getNamesByObjectives(): string[];
    static getUnformattedNames(): string[];
    static setFooter(footer: string | Message | JavaClass<'net.minecraft.util.IChatComponent'> | null): void;
    static setHeader(footer: string | Message | JavaClass<'net.minecraft.util.IChatComponent'> | null): void;
  }
  /**
   * com.chattriggers.ctjs.minecraft.wrappers.World
   */
  class World extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.World'> {
    static getAllEntities(): Entity[];
  }
}

export {};
