import { JavaClass } from './External';
import './World';

declare class Score extends JavaClass<'internal'> {
  constructor(score: JavaClass<'net.minecraft.scoreboard.Score'>);

  /**
   * * Gets the [mcScore] team points
   */
  getPoints(): number;
  /**
   * * Gets the [mcScore] team name
   */
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
   * * A library with useful utilities for the Player
   */
  class Player extends JavaClass<"com.github.synnerz.akutz.api.wrappers.Player"> {
    /**
     * * Gets the current minecraft entity of the player
     */
    static getPlayer(): JavaClass<"net.minecraft.client.entity.EntityPlayerSP">
    /**
     * * Gets the current player entity as a PlayerMP one
     */
    static asPlayerMP(): PlayerMP | null
    /**
     * * Gets the current X position of the player
     */
    static getX(): number
    /**
     * * Gets the current Y position of the player
     */
    static getY(): number
    /**
     * * Gets the current Z position of the player
     */
    static getZ(): number
    /**
     * * Gets the last X position of the player
     */
    static getLastX(): number
    /**
     * * Gets the last Y position of the player
     */
    static getLastY(): number
    /**
     * * Gets the last Z position of the player
     */
    static getLastZ(): number
    /**
     * * Gets the X rendering position of the player
     * * Note: this is the lerp value between last position and current position multiplied by the partialTicks
     */
    static getRenderX(): number
    /**
     * * Gets the Y rendering position of the player
     * * Note: this is the lerp value between last position and current position multiplied by the partialTicks
     */
    static getRenderY(): number
    /**
     * * Gets the Z rendering position of the player
     * * Note: this is the lerp value between last position and current position multiplied by the partialTicks
     */
    static getRenderZ(): number
    /**
     * * Gets the name of the player
     */
    static getName(): string
    /**
     * * Gets the UUID of the player in string
     */
    static getUUID(): `${string}-${string}-${string}-${string}-${string}`
    /**
     * * Gets the UUID java object
     */
    static getUUIDObj(): JavaClass<"java.util.UUID">
    /**
     * * Gets the player's current Health
     */
    static getHP(): number
    /**
     * * Checks whether the player is moving
     */
    static isMoving(): boolean
    /**
     * * Checks whether the player is sneaking
     */
    static isSneaking(): boolean
    /**
     * * Checks whether the player is sprinting
     */
    static isSprinting(): boolean
    /**
     * * Checks whether the player is flying
     */
    static isFlying(): boolean
    /**
     * * Gets the [Entity/Block/Sign] that the player is currently looking at
     * * This returns `null` if it's not looking at anything
     * * Note: the reach for this is about 6 blocks
     */
    static lookingAt(): null | Block | Entity | Sign
    /**
     * * Gets the player's current active potion effects
     */
    static getActivePotionEffects(): PotionEffect[]
    /**
     * * Gets the current container the player is in
     */
    static getContainer(): Inventory | null
    /**
     * * Gets the player's inventory
     * * Note: the same inventory that can be accessed by pressing `e`
     */
    static getInventory(): Inventory | null
    /**
     * * A field with useful utilities for armor
     */
    static armor: {
      /**
       * * Gets the current helmet the player is wearing
       */
      getHelmet(): Item | null
      /**
       * * Gets the current chestplate the player is wearing
       */
      getChestplate(): Item | null
      /**
       * * Gets the current leggings the player is wearing
       */
      getLeggings(): Item | null
      /**
       * * Gets the current boots the player is wearing
       */
      getBoots(): Item | null
    }
  }
  /**
   * * A library that provides useful utilities for Scoreboard
   */
  class Scoreboard extends JavaClass<"com.github.synnerz.akutz.api.wrappers.Scoreboard"> {
    /**
     * * Gets the current Scoreboard
     */
    static getScoreboard(): JavaClass<"net.minecraft.scoreboard.Scoreboard"> | null
    /**
     * * Gets the current Sidebar
     */
    static getSidebar(): JavaClass<"net.minecraft.scoreboard.ScoreObjective"> | null
    /**
     * * Gets the current scoreboard title
     */
    static getScoreboardTitle(): string
    /**
     * * Gets the current scoreboard title
     * * Alias for `#getScoreboardTitle`
     */
    static getTitle(): string
    /**
     * * Sets the current scoreboard title
     */
    static setTitle(name: string): void
    /**
     * * Gets the current scoreboard lines
     */
    static getLines(): Score[]
    /**
     * * Gets the current scoreboard lines by descending order (`true` by default)
     */
    static getLines(descending: boolean): Score[]
    /**
     * * Gets the current scoreboard line by the index
     */
    static getLineByIndex(index: number): Score
    /**
     * * Gets all of the scores that match the given score
     */
    static getLinesByScore(score: number): Score[]
    /**
     * * Sets a line in the scoreboard to the specified name and score
     */
    static setLine(score: number, line: string): void
    /**
     * * Sets a line in the scoreboard to the specified name, score
     * * and whether it should override the current one if there is one or not (`false` by default)
     */
    static setLine(score: number, line: string, override: boolean): void
    /**
     * * Sets whether the scoreboard should render or not
     */
    static setShouldRender(bool: boolean): void
    /**
     * * Checks whether the scoreboard should render or not
     */
    static getShouldRender(): boolean
    /**
     * * Marks the scoreboard as dirty so it can cache new values
     * * Note: this is mostly used internally
     */
    static markDirty(): void
    static Score: typeof Score
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
