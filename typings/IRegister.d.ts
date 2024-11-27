import './Entity';
import {
  Vector3f,
  JavaEnumValue,
  StringOrJavaEnumValueE,
  StringOrJavaEnumValue,
  JavaClass,
  JavaEnum,
  JavaEnumValueE
} from './External';
import './Inventoy';
import './World';

export interface CTEvent {
  setCanceled(): void;
  setCanceled(newVal: boolean): void;
  setCancelled(): void;
  setCancelled(newVal: boolean): void;
  isCancelable(): boolean;
  isCancellable(): boolean;
  isCanceled(): boolean;
  isCancelled(): boolean;
}
export interface CancellableCTEvent extends CTEvent {
  isCancelable(): true;
  isCancellable(): true;
}

export class Trigger extends JavaClass<'com.chattriggers.ctjs.engine.langs.js.JSRegister'> {
  constructor(callback: Function);

  register(): this;
  unregister(): this;
  trigger(...args: any[]): void;
  setPriority(priority: JavaEnumValueE<typeof Priority>): this;
}
export class ChatTrigger extends Trigger {
  static Parameter: JavaEnum<'CONTAINS' | 'START' | 'END'>;

  addParameter(parameter: StringOrJavaEnumValueE<typeof ChatTrigger.Parameter>): this;
  addParameters(...parameters: StringOrJavaEnumValueE<typeof ChatTrigger.Parameter>[]): this;
  setParameter(parameter: StringOrJavaEnumValueE<typeof ChatTrigger.Parameter>): this;
  setParameters(...parameter: StringOrJavaEnumValueE<typeof ChatTrigger.Parameter>[]): this;
  /**
   * Sets the chat criteria for matchesChatCriteria. Arguments for the trigger's method can be passed in using `${variable}`. Example: `setChatCriteria('<${name}> ${message}');` Use `${*}` to match a chat message but ignore the pass through.
   */
  setChatCriteria(chatCriteria: string): this;
  /**
   * Alias for `setChatCriteria`.
   */
  setCriteria(chatCriteria: string): this;
  setContains(): this;
  setCaseInsensitive(): this;
  setEnd(): this;
  setExact(): this;
  setStart(): this;
  triggerIfCanceled(bool: boolean): this;
}
export abstract class ClassFilterTrigger extends Trigger {
  /**
   * @deprecated use `setFilteredClass(clazz);`
   */
  setPacketClass(clazz: typeof JavaClass): ReturnType<typeof this.setFilteredClasses>;
  /**
   * @deprecated use `setFilteredClass([clazzA, clazzB, clazzB]);`
   */
  setPacketClasses(clazzes: (typeof JavaClass)[]): ReturnType<typeof this.setFilteredClass>;
  setFilteredClass(clazz: typeof JavaClass): ReturnType<typeof this.setFilteredClasses>;
  setFilteredClasses(clazzes: (typeof JavaClass)[]): this;

  abstract evalTriggerType(args: any[]): any;
}
export class CommandTrigger extends Trigger {
  setAliases(...args: string[]): this;
  setCommandName(commandName: string): this;
  /**
   * Example: `setCommandName('test')` would result in the command being `/test`
   */
  setCommandName(commandName: string, overrideExisting: boolean): this;
  setName(commandName: string): this;
  /**
   * Alias for setCommandName
   */
  setName(commandName: string, overrideExisting: boolean): this;
  /**
   * This method must be used before setting the command name, otherwise, the tab completions will not be set.
   */
  setTabCompletions(...args: string[]): this;
  /**
   * This method must be used before setting the command name, otherwise, the tab completions will not be set.
   */
  setTabCompletions(callback: (args: string[]) => Array<string>): this;
}
export class EventTrigger extends Trigger {
  triggerIfCanceled(bool: boolean): this;
}
export class ForgeTrigger extends Trigger {}
export class PacketTrigger extends ClassFilterTrigger {
  evalTriggerType(args: JavaClass<'net.minecraft.network.Packet'>[]): JavaClass<'net.minecraft.network.Packet'>;
}
export class RegularTrigger extends Trigger {}
export class RenderEntityTrigger extends ClassFilterTrigger {
  evalTriggerType(args: JavaClass<'net.minecraft.entity.Entity'>[]): JavaClass<'net.minecraft.entity.Entity'>;
}
export class RenderTileEntityTrigger extends ClassFilterTrigger {
  evalTriggerType(
    args: JavaClass<'net.minecraft.tileentity.TileEntity'>[]
  ): JavaClass<'net.minecraft.tileentity.TileEntity'>;
}
export class SoundPlayTrigger extends Trigger {
  setCriteria(soundNameCriteria: string): this;
}
export class StepTrigger extends Trigger {
  /**
   * Sets the delay in seconds between the trigger activation. This has a minimum of one second between steps. This will override setFps.
   */
  setDelay(delay: number): this;
  /**
   * Sets the frames per second that the trigger activates. This has a minimum of one step per second.
   */
  setFps(fps: number): this;
}

/**
 * com.chattriggers.ctjs.engine.langs.js.JSRegister
 */
declare class JSRegister extends JavaClass<'com.chattriggers.ctjs.engine.langs.js.JSRegister'> {
  register(triggerType: 'actionBar', callback: (...args: Array<string | CancellableCTEvent>) => void): ChatTrigger;
  register(triggerType: 'chat', callback: (...args: Array<string | CancellableCTEvent>) => void): ChatTrigger;

  register(triggerType: 'command', callback: (...args: string[]) => void): CommandTrigger;

  register(
    triggerType: 'attackEntity',
    callback: (target: Entity, source: PlayerMP, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'chatComponentClicked',
    callback: (component: TextComponent, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'chatComponentHovered',
    callback: (component: TextComponent, x: number, y: number, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'drawBlockHighlight',
    callback: (position: Vector3f, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'dropItem',
    callback: (item: Item, player: PlayerMP, position: Vector3f, motion: Vector3f, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'guiDrawBackground',
    callback: (guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'guiKey',
    callback: (
      char: string,
      keyCode: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'guiMouseClick',
    callback: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'guiMouseDrag',
    callback: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'guiMouseRelease',
    callback: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(triggerType: 'guiOpened', callback: (event: CancellableCTEvent) => void): EventTrigger;
  /**
   * Note: this is not continuously called while the block is being broken, only once when first left clicked.
   */
  register(triggerType: 'hitBlock', callback: (block: Block, event: CancellableCTEvent) => void): EventTrigger;
  register(
    triggerType: 'itemTooltip',
    callback: (lore: string[], stack: JavaClass<'net.minecraft.item.ItemStack'>, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(triggerType: 'messageSent', callback: (message: string, event: CancellableCTEvent) => void): EventTrigger;
  register(
    triggerType: 'noteblockChange',
    callback: (
      position: Vector3f,
      name: JavaEnumValue<
        'A' | 'A_SHARP' | 'B' | 'C' | 'C_SHARP' | 'D' | 'D_SHARP' | 'E' | 'F' | 'F_SHARP' | 'G' | 'G_SHARP'
      >,
      octave: JavaEnumValue<'LOW' | 'MID' | 'HIGH'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'noteblockPlay',
    callback: (
      position: Vector3f,
      name: JavaEnumValue<
        'A' | 'A_SHARP' | 'B' | 'C' | 'C_SHARP' | 'D' | 'D_SHARP' | 'E' | 'F' | 'F_SHARP' | 'G' | 'G_SHARP'
      >,
      octave: JavaEnumValue<'LOW' | 'MID' | 'HIGH'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'pickupItem',
    callback: (item: Item, player: PlayerMP, position: Vector3f, motion: Vector3f, event: CancellableCTEvent) => void
  ): EventTrigger;
  /**
   * activates when the player right clicks the air or a block
   */
  register(
    triggerType: 'playerInteract',
    callback: (
      action: JavaEnumValue<'RIGHT_CLICK_EMPTY' | 'RIGHT_CLICK_BLOCK' | 'UNKNOWN'>,
      position: Vector3f,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(triggerType: 'renderAir', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderArmor', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderBossHealth', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderChat', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderCrosshair', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderDebug', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderExperience', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderFood', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderHand', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderHealth', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderHelmet', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderHotbar', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(
    triggerType: 'renderItemIntoGui',
    callback: (item: Item, x: number, y: number, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'renderItemOverlayIntoGui',
    callback: (item: Item, x: number, y: number, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(triggerType: 'renderJumpBar', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderMountHealth', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderOverlay', callback: (event: CTEvent) => void): EventTrigger;
  register(triggerType: 'renderPlayerList', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderPortal', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'renderScoreboard', callback: (event: CancellableCTEvent) => void): EventTrigger;
  register(
    triggerType: 'renderSlot',
    callback: (
      slot: Slot,
      guiContainer: JavaClass<'net.minecraft.client.gui.inventory.GuiContainer'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'renderSlotHighlight',
    callback: (
      mouseX: number,
      mouseY: number,
      slot: JavaClass<'net.minecraft.inventory.Slot'>,
      guiContainer: JavaClass<'net.minecraft.client.gui.inventory.GuiContainer'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'renderTitle',
    callback: (displayedTitle: string, displayedSubtitle: string, event: CancellableCTEvent) => void
  ): EventTrigger;
  register(triggerType: 'screenshotTaken', callback: (name: string, event: CancellableCTEvent) => void): EventTrigger;
  register(triggerType: 'serverConnect', callback: (event: CTEvent) => void): EventTrigger;
  register(
    triggerType: 'spawnParticle',
    callback: (
      particle: Particle,
      id: JavaEnumValue<
        | 'BARRIER'
        | 'BLOCK_CRACK'
        | 'BLOCK_DUST'
        | 'CLOUD'
        | 'CRIT'
        | 'CRIT_MAGIC'
        | 'DRIP_LAVA'
        | 'DRIP_WATER'
        | 'ENCHANTMENT_TABLE'
        | 'EXPLOSION_HUGE'
        | 'EXPLOSION_LARGE'
        | 'EXPLOSION_NORMAL'
        | 'FIREWORKS_SPARK'
        | 'FLAME'
        | 'FOOTSTEP'
        | 'HEART'
        | 'ITEM_CRACK'
        | 'ITEM_TAKE'
        | 'LAVA'
        | 'MOB_APPEARANCE'
        | 'NOTE'
        | 'PORTAL'
        | 'REDSTONE'
        | 'SLIME'
        | 'SMOKE_LARGE'
        | 'SMOKE_NORMAL'
        | 'SNOW_SHOVEL'
        | 'SNOWBALL'
        | 'SPELL'
        | 'SPELL_INSTANT'
        | 'SPELL_MOB'
        | 'SPELL_MOB_AMBIENT'
        | 'SPELL_WITCH'
        | 'SUSPENDED'
        | 'SUSPENDED_DEPTH'
        | 'TOWN_AURA'
        | 'VILLAGER_ANGRY'
        | 'VILLAGER_HAPPY'
        | 'WATER_BUBBLE'
        | 'WATER_DROP'
        | 'WATER_SPLASH'
        | 'WATER_WAKE'
      >,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;

  register(
    triggerType: 'packetReceived',
    callback: (packet: JavaClass<'net.minecraft.network.Packet'>, event: CancellableCTEvent) => void
  ): PacketTrigger;
  register(
    triggerType: 'packetSent',
    callback: (packet: JavaClass<'net.minecraft.network.Packet'>, event: CancellableCTEvent) => void
  ): PacketTrigger;

  register(triggerType: 'blockBreak', callback: (block: Block) => void): RegularTrigger;
  register(
    triggerType: 'clicked',
    callback: (x: number, y: number, button: number, isPressed: boolean) => void
  ): RegularTrigger;
  register(triggerType: 'dragged', callback: (dx: number, dy: number, x: number, y: number) => void): RegularTrigger;
  register(triggerType: 'entityDamage', callback: (entity: Entity, player: PlayerMP) => void): RegularTrigger;
  register(triggerType: 'entityDeath', callback: (entity: Entity) => void): RegularTrigger;
  register(triggerType: 'gameLoad', callback: () => void): RegularTrigger;
  register(triggerType: 'gameUnload', callback: () => void): RegularTrigger;
  register(
    triggerType: 'guiClosed',
    callback: (guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>) => void
  ): RegularTrigger;
  register(
    triggerType: 'guiRender',
    callback: (mouseX: number, mouseY: number, guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>) => void
  ): RegularTrigger;
  register(triggerType: 'playerJoined', callback: (player: PlayerMP) => void): RegularTrigger;
  register(triggerType: 'playerLeft', callback: (player: PlayerMP) => void): RegularTrigger;
  register(
    triggerType: 'postGuiRender',
    callback: (mouseX: number, mouseY: number, guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>) => void
  ): RegularTrigger;
  register(
    triggerType: 'preItemRender',
    callback: (
      mouseX: number,
      mouseY: number,
      slot: JavaClass<'net.minecraft.inventory.Slot'>,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>
    ) => void
  ): RegularTrigger;
  register(triggerType: 'renderWorld', callback: (partialTicks: number) => void): RegularTrigger;
  register(triggerType: 'scrolled', callback: (x: number, y: number, delta: number) => void): RegularTrigger;
  register(triggerType: 'serverDisconnect', callback: (event: CTEvent) => void): RegularTrigger;
  register(triggerType: 'tick', callback: (totalTicks: number) => void): RegularTrigger;
  register(triggerType: 'worldLoad', callback: () => void): RegularTrigger;
  register(triggerType: 'worldUnload', callback: () => void): RegularTrigger;

  register(
    triggerType: 'postRenderEntity',
    callback: (entity: Entity, position: Vector3f, partialTicks: number) => void
  ): RenderEntityTrigger;
  register(
    triggerType: 'renderEntity',
    callback: (entity: Entity, position: Vector3f, partialTicks: number, event: CancellableCTEvent) => void
  ): RenderEntityTrigger;

  register(
    triggerType: 'postRenderTileEntity',
    callback: (tileEntity: TileEntity, position: Vector3f, partialTicks: number) => void
  ): RenderTileEntityTrigger;
  register(
    triggerType: 'renderTileEntity',
    callback: (tileEntity: TileEntity, position: Vector3f, partialTicks: number, event: CancellableCTEvent) => void
  ): RenderTileEntityTrigger;

  register(
    triggerType: 'soundPlay',
    callback: (
      position: Vector3f,
      name: string,
      volume: number,
      pitch: number,
      categoryName: StringOrJavaEnumValue<
        'AMBIENT' | 'ANIMALS' | 'BLOCKS' | 'MASTER' | 'MOBS' | 'MUSIC' | 'PLAYERS' | 'RECORDS' | 'WEATHER'
      >,
      event: CancellableCTEvent
    ) => void
  ): SoundPlayTrigger;

  register(triggerType: 'step', callback: (totalSteps: number) => void): StepTrigger;

  // register(triggerType: string, callback: Function): Trigger;
  register(
    triggerType: JavaClass<'net.minecraftforge.fml.common.eventhandler.Event'>,
    callback: (event: CTEvent) => void
  ): RegularTrigger;

  registerActionBar(cb: (...args: Array<string | CancellableCTEvent>) => void): ChatTrigger;
  registerChat(cb: (...args: Array<string | CancellableCTEvent>) => void): ChatTrigger;

  registerCommand(cb: (...args: string[]) => void): CommandTrigger;

  registerAttackEntity(cb: (target: Entity, event: CancellableCTEvent) => void): EventTrigger;
  registerChatComponentClicked(cb: (component: TextComponent, event: CancellableCTEvent) => void): EventTrigger;
  registerChatComponentHovered(
    cb: (component: TextComponent, x: number, y: number, event: CancellableCTEvent) => void
  ): EventTrigger;
  registerDrawBlockHighlight(cb: (position: Vector3f, event: CancellableCTEvent) => void): EventTrigger;
  registerDropItem(
    cb: (item: Item, player: PlayerMP, position: Vector3f, motion: Vector3f, event: CancellableCTEvent) => void
  ): EventTrigger;
  registerGuiDrawBackground(
    cb: (guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>, event: CancellableCTEvent) => void
  ): EventTrigger;
  registerGuiKey(
    cb: (
      char: string,
      keyCode: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerGuiMouseClick(
    cb: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerGuiMouseDrag(
    cb: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerGuiMouseRelease(
    cb: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerGuiOpened(cb: (event: CancellableCTEvent) => void): EventTrigger;
  /**
   * Note: this is not continuously called while the block is being broken, only once when first left clicked.
   */
  registerHitBlock(cb: (block: Block, event: CancellableCTEvent) => void): EventTrigger;
  registerItemTooltip(
    cb: (lore: string[], stack: JavaClass<'net.minecraft.item.ItemStack'>, event: CancellableCTEvent) => void
  ): EventTrigger;
  registerMessageSent(cb: (message: string, event: CancellableCTEvent) => void): EventTrigger;
  registerNoteblockChange(
    cb: (
      position: Vector3f,
      name: StringOrJavaEnumValue<
        'A' | 'A_SHARP' | 'B' | 'C' | 'C_SHARP' | 'D' | 'D_SHARP' | 'E' | 'F' | 'F_SHARP' | 'G' | 'G_SHARP'
      >,
      octave: StringOrJavaEnumValue<'LOW' | 'MID' | 'HIGH'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerNoteblockPlay(
    cb: (
      position: Vector3f,
      name: StringOrJavaEnumValue<
        'A' | 'A_SHARP' | 'B' | 'C' | 'C_SHARP' | 'D' | 'D_SHARP' | 'E' | 'F' | 'F_SHARP' | 'G' | 'G_SHARP'
      >,
      octave: StringOrJavaEnumValue<'LOW' | 'MID' | 'HIGH'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerPickupItem(
    cb: (item: Item, player: PlayerMP, position: Vector3f, motion: Vector3f, event: CancellableCTEvent) => void
  ): EventTrigger;
  /**
   * activates when the player right clicks the air or a block
   */
  registerPlayerInteract(
    cb: (
      action: StringOrJavaEnumValue<'RIGHT_CLICK_EMPTY' | 'RIGHT_CLICK_BLOCK' | 'UNKNOWN'>,
      position: Vector3f,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerRenderAir(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderArmor(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderBossHealth(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderChat(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderCrosshair(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderDebug(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderExperience(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderFood(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderHand(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderHealth(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderHelmet(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderHotbar(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderItemIntoGui(cb: (item: Item, x: number, y: number, event: CancellableCTEvent) => void): EventTrigger;
  registerRenderItemOverlayIntoGui(
    cb: (item: Item, x: number, y: number, event: CancellableCTEvent) => void
  ): EventTrigger;
  registerRenderJumpBar(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderMountHealth(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderOverlay(cb: (event: CTEvent) => void): EventTrigger;
  registerRenderPlayerList(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderPortal(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderScoreboard(cb: (event: CancellableCTEvent) => void): EventTrigger;
  registerRenderSlot(
    cb: (
      slot: Slot,
      guiContainer: JavaClass<'net.minecraft.client.gui.inventory.GuiContainer'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerRenderSlotHighlight(
    cb: (
      mouseX: number,
      mouseY: number,
      slot: JavaClass<'net.minecraft.inventory.Slot'>,
      guiContainer: JavaClass<'net.minecraft.client.gui.inventory.GuiContainer'>,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;
  registerRenderTitle(
    cb: (displayedTitle: string, displayedSubtitle: string, event: CancellableCTEvent) => void
  ): EventTrigger;
  registerScreenshotTaken(cb: (name: string, event: CancellableCTEvent) => void): EventTrigger;
  registerServerConnect(cb: (event: CTEvent) => void): EventTrigger;
  registerSpawnParticle(
    cb: (
      particle: Particle,
      id: StringOrJavaEnumValue<
        | 'BARRIER'
        | 'BLOCK_CRACK'
        | 'BLOCK_DUST'
        | 'CLOUD'
        | 'CRIT'
        | 'CRIT_MAGIC'
        | 'DRIP_LAVA'
        | 'DRIP_WATER'
        | 'ENCHANTMENT_TABLE'
        | 'EXPLOSION_HUGE'
        | 'EXPLOSION_LARGE'
        | 'EXPLOSION_NORMAL'
        | 'FIREWORKS_SPARK'
        | 'FLAME'
        | 'FOOTSTEP'
        | 'HEART'
        | 'ITEM_CRACK'
        | 'ITEM_TAKE'
        | 'LAVA'
        | 'MOB_APPEARANCE'
        | 'NOTE'
        | 'PORTAL'
        | 'REDSTONE'
        | 'SLIME'
        | 'SMOKE_LARGE'
        | 'SMOKE_NORMAL'
        | 'SNOW_SHOVEL'
        | 'SNOWBALL'
        | 'SPELL'
        | 'SPELL_INSTANT'
        | 'SPELL_MOB'
        | 'SPELL_MOB_AMBIENT'
        | 'SPELL_WITCH'
        | 'SUSPENDED'
        | 'SUSPENDED_DEPTH'
        | 'TOWN_AURA'
        | 'VILLAGER_ANGRY'
        | 'VILLAGER_HAPPY'
        | 'WATER_BUBBLE'
        | 'WATER_DROP'
        | 'WATER_SPLASH'
        | 'WATER_WAKE'
      >,
      event: CancellableCTEvent
    ) => void
  ): EventTrigger;

  registerPacketReceived(
    cb: (packet: JavaClass<'net.minecraft.network.Packet'>, event: CancellableCTEvent) => void
  ): PacketTrigger;
  registerPacketSent(
    cb: (packet: JavaClass<'net.minecraft.network.Packet'>, event: CancellableCTEvent) => void
  ): PacketTrigger;

  registerBlockBreak(cb: (block: Block) => void): RegularTrigger;
  registerClicked(cb: (x: number, y: number, button: number, isPressed: boolean) => void): RegularTrigger;
  registerDragged(cb: (dx: number, dy: number, x: number, y: number) => void): RegularTrigger;
  registerEntityDamage(cb: (entity: Entity, player: PlayerMP) => void): RegularTrigger;
  registerEntityDeath(cb: (entity: Entity) => void): RegularTrigger;
  registerGameLoad(cb: () => void): RegularTrigger;
  registerGameUnload(cb: () => void): RegularTrigger;
  registerGuiClosed(cb: (guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>) => void): RegularTrigger;
  registerGuiRender(
    cb: (mouseX: number, mouseY: number, guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>) => void
  ): RegularTrigger;
  registerPlayerJoined(cb: (player: PlayerMP) => void): RegularTrigger;
  registerPlayerLeft(cb: (player: PlayerMP) => void): RegularTrigger;
  registerPostGuiRender(
    cb: (mouseX: number, mouseY: number, guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>) => void
  ): RegularTrigger;
  registerPreItemRender(
    cb: (
      mouseX: number,
      mouseY: number,
      slot: JavaClass<'net.minecraft.inventory.Slot'>,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>
    ) => void
  ): RegularTrigger;
  registerRenderWorld(cb: (partialTicks: number) => void): RegularTrigger;
  registerScrolled(cb: (x: number, y: number, delta: number) => void): RegularTrigger;
  registerServerDisconnect(cb: (event: CTEvent) => void): RegularTrigger;
  registerTick(cb: (totalTicks: number) => void): RegularTrigger;
  registerWorldLoad(cb: () => void): RegularTrigger;
  registerWorldUnload(cb: () => void): RegularTrigger;

  registerPostRenderEntity(cb: (entity: Entity, position: Vector3f, partialTicks: number) => void): RenderEntityTrigger;
  registerRenderEntity(
    cb: (entity: Entity, position: Vector3f, partialTicks: number, event: CancellableCTEvent) => void
  ): RenderEntityTrigger;

  registerPostRenderTileEntity(
    cb: (tileEntity: TileEntity, position: Vector3f, partialTicks: number) => void
  ): RenderTileEntityTrigger;
  registerRenderTileEntity(
    cb: (tileEntity: TileEntity, position: Vector3f, partialTicks: number, event: CancellableCTEvent) => void
  ): RenderTileEntityTrigger;

  registerSoundPlay(
    cb: (
      position: Vector3f,
      name: string,
      volume: number,
      pitch: number,
      categoryName: StringOrJavaEnumValue<
        'AMBIENT' | 'ANIMALS' | 'BLOCKS' | 'MASTER' | 'MOBS' | 'MUSIC' | 'PLAYERS' | 'RECORDS' | 'WEATHER'
      >,
      event: CancellableCTEvent
    ) => void
  ): SoundPlayTrigger;

  registerStep(cb: (totalSteps: number) => void): StepTrigger;
}

declare global {
  const TriggerRegister: JSRegister;
  const register: JSRegister['register'];
  const onChatTrigger: typeof ChatTrigger;
  const onCommandTrigger: typeof CommandTrigger;
  const onRegularTrigger: typeof RegularTrigger;
  const onRenderTrigger: typeof EventTrigger;
  const onSoundPlayTrigger: typeof SoundPlayTrigger;
  const onStepTrigger: typeof StepTrigger;
  const onTrigger: typeof Trigger;
  const Priority: JavaEnum<'LOWEST' | 'LOW' | 'NORMAL' | 'HIGH' | 'HIGHEST'>;
}
export {};
