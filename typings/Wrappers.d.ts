import { JavaClass } from './External';
import './World';

declare class Score extends JavaClass<'internal'> {
  constructor(score: JavaClass<'net.minecraft.scoreboard.Score'>);

  getPoints(): number;
  getName(): string;
  toString(): string;
}

declare global {
  /**
   * * A library that provides some useful utilities about the Client
   */
  class Client extends JavaClass<"com.github.synnerz.akutz.api.wrappers.Client"> {
    /**
     * * Gets the current Minecraft instance
     */
    static getMinecraft(): JavaClass<"net.minecraft.client.Minecraft">
    /**
     * * Gets the current NetHandlerPlayClient
     */
    static getConnection(): JavaClass<"net.minecraft.client.network.NetHandlerPlayClient"> | null
    /**
     * * Gets the current ChatGui
     */
    static getChatGui(): JavaClass<"net.minecraft.client.gui.GuiNewChat"> | null
    /**
     * * Checks whether the player is currently in chat
     */
    static isInChat(): boolean
    /**
     * * Gets the current Tablist Gui
     */
    static getTabGui(): JavaClass<"net.minecraft.client.gui.GuiPlayerTabOverlay"> | null
    /**
     * * Checks whether the player is holding the tab key
     */
    static isInTab(): boolean
    /**
     * * Checks whether the player is currently tabbed into minecraft
     */
    static isTabbedIn(): boolean
    /**
     * * Checks whether the [control]/[ctrl] key is held down
     */
    static isControlDown(): boolean
    /**
     * * Checks whether the [shift] key is held down
     */
    static isShiftDown(): boolean
    /**
     * * Checks whether the [alt] key is held down
     */
    static isAltDown(): boolean
    /**
     * * Gets the current FPS
     */
    static getFPS(): number
    /**
     * * Gets the current system time in milliseconds
     */
    static getSystemTime(): number
    /**
     * * Checks whether the player is currently inside any type of gui
     */
    static isInGui(): boolean
    /**
     * * Sends a packet
     */
    static sendPacket(packet: JavaClass<"net.minecraft.network.Packet">): void
    /**
     * * Schedules a task to be ran after 1 tick (default)
     */
    static scheduleTask(cb: () => void): void
    /**
     * * Schedules a task to be ran after n tick (n being whatever is specified as the `delay` param)
     */
    static scheduleTask(delay: number, cb: () => void): void
    /**
     * * Disconnects the player from the current world
     */
    static disconnect(): void
    /**
     * * Connects the player to the given server [IP]
     * * e.g: `Client.connect("hypixel.net")`
     */
    static connect(ip: string): void
    /**
     * * Reconnects the player to the current server
     */
    static reconnect(): void
    /**
     * * Reconnects the player into the given server [IP]
     */
    static reconnect(ip: string): void
    /**
     * * Shows a title like "alert" in the middle of the player's screen
     * * Current behavior is: `subtitle = null`, `ticks = 5` and `shadow = true`
     */
    static showTitle(title: string): void
    /**
     * * Shows a title like "alert" in the middle of the player's screen
     * * Current behavior is: `ticks = 5` and `shadow = true`
     */
    static showTitle(title: string, subtitle: string): void
    /**
     * * Shows a title like "alert" in the middle of the player's screen
     * * Current behavior is: `shadow = true`
     */
    static showTitle(title: string, subtitle: string, ticks: number): void
    /**
     * * Shows a title like "alert" in the middle of the player's screen
     */
    static showTitle(title: string, subtitle: string, ticks: number, shadow: boolean): void
    /**
     * * A field that contains some utilities for the current Gui
     */
    static currentGui: {
      /**
       * * Gets the current [GuiScreen] or null if there is none
       */
      get(): JavaClass<"net.minecraft.client.gui.GuiScreen"> | null
      /**
       * * Gets the current gui's class name
       * * Note: if the gui is none it'll return `"null"` as string
       */
      getClassName(): string;
      /**
       * * Gets the slot under the current mouse position
       */
      getSlotUnderMouse(): Slot | null
      /**
       * * Closes the current gui
       * * Note: this closes it on both server side and client side
       */
      close(): void
    }
    /**
     * * A field that contains some [camera] utilities
     */
    static camera: {
      /**
       * * Gets the current RenderX
       */
      getX(): number
      /**
       * * Gets the current RenderY
       */
      getY(): number
      /**
       * * Gets the current RenderZ
       */
      getZ(): number
    }
    /**
     * * A field that contains clipboard utilities
     */
    static clipboard: {
      /**
       * * Gets the current clipboard's data as string
       */
      get(): string;
      /**
       * * Sets the current clipboard's data
       */
      set(value: string): void;
    }
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
