import './Entity';
import {
  Vector3f,
  JavaEnumValue,
  StringOrJavaEnumValueE,
  StringOrJavaEnumValue,
  JavaClass,
  JavaEnum,
  JavaEnumValueE,
  EmptyClass,
  Class,
  EJavaClass
} from './External';
import './Inventory';
import './World';

export interface AZEvent {
  setCanceled(): void;
  setCanceled(newVal: boolean): void;
  setCancelled(): void;
  setCancelled(newVal: boolean): void;
  isCancelable(): boolean;
  isCancellable(): boolean;
  isCanceled(): boolean;
  isCancelled(): boolean;
}
export interface CancelableAZEvent extends AZEvent {
  isCancelable(): true;
  isCancellable(): true;
}

export class Trigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.engine.impl.Register'>;
  constructor(callback: Function);
}
export interface Trigger extends JavaClass<'com.github.synnerz.akutz.engine.impl.Register'> {
  register(): this;
  unregister(): this;
  trigger(...args: any[]): void;
  setPriority(priority: JavaEnumValueE<typeof Priority>): this;
}
export class ChatEvent extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.ChatEvent'>;
  static Parameter: JavaEnum<'CONTAINS' | 'START' | 'END'>;
}
export interface ChatEvent extends EJavaClass<Trigger, 'com.github.synnerz.akutz.api.events.ChatEvent'> {
  addParameter(parameter: StringOrJavaEnumValueE<typeof ChatEvent.Parameter>): this;
  addParameters(...parameters: StringOrJavaEnumValueE<typeof ChatEvent.Parameter>[]): this;
  setParameter(parameter: StringOrJavaEnumValueE<typeof ChatEvent.Parameter>): this;
  setParameters(...parameter: StringOrJavaEnumValueE<typeof ChatEvent.Parameter>[]): this;
  setCriteria(criteria: string): this;
  setCriteria(criteria: RegExp): this;
  setContains(): this;
  setCaseInsensitive(): this;
  setEnd(): this;
  setExact(): this;
  setStart(): this;
  triggerIfCanceled(bool: boolean): this;
}
export interface ClassFilterTrigger extends EJavaClass<Trigger, 'com.github.synnerz.akutz.api.events.ClassFilterEvent'> {
  setFilteredClass(clazz: Class<any>): ReturnType<typeof this.setFilteredClasses>;
  setFilteredClasses(clazzes: Class<any>[]): this;
}
export class CommandTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.CommandEvent'>;
}
export interface CommandTrigger extends EJavaClass<Trigger, 'com.github.synnerz.akutz.api.events.CommandEvent'> {
  setAliases(...args: string[]): this;
  /**
   * Example: `setname('test')` would result in the command being `/test`
   */
  setName(commandName: string): this;
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
export class EventTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.CancelableEvent'>;
}
export interface EventTrigger extends EJavaClass<ClassFilterTrigger, 'com.github.synnerz.akutz.api.events.CancelableEvent'> {
  triggerIfCanceled(bool: boolean): this;
}
export class ForgeTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.ForgeEvent'>;
}
export interface ForgeTrigger extends EJavaClass<ClassFilterTrigger, 'com.github.synnerz.akutz.api.events.ForgeEvent'> {}
export class PacketTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.PacketEvent'>;
}
export interface PacketTrigger extends EJavaClass<ClassFilterTrigger, 'com.github.synnerz.akutz.api.events.PacketEvent'> {
  evalTriggerType(args: JavaClass<'net.minecraft.network.Packet'>[]): JavaClass<'net.minecraft.network.Packet'>;
}
export class RegularTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.NormalEvent'>;
}
export interface RegularTrigger extends EJavaClass<ClassFilterTrigger, 'com.github.synnerz.akutz.api.events.NormalEvent'> {}
export class RenderEntityTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.RenderEntityEvent'>;
}
export interface RenderEntityTrigger extends EJavaClass<ClassFilterTrigger, 'com.github.synnerz.akutz.api.events.RenderEntityEvent'> {
  evalTriggerType(args: JavaClass<'net.minecraft.entity.Entity'>[]): JavaClass<'net.minecraft.entity.Entity'>;
}
export class RenderTileEntityTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.RenderTileEntityEvent'>;
}
export interface RenderTileEntityTrigger extends EJavaClass<ClassFilterTrigger, 'com.github.synnerz.akutz.api.events.RenderTileEntityEvent'> {
  evalTriggerType(
    args: JavaClass<'net.minecraft.tileentity.TileEntity'>[]
  ): JavaClass<'net.minecraft.tileentity.TileEntity'>;
}
export class SoundPlayTrigger extends EmptyClass {
  static class: Class<'com.github.synnerz.akutz.api.events.SoundPlayEvent'>;
}
export interface SoundPlayTrigger extends EJavaClass<Trigger, 'com.github.synnerz.akutz.api.events.SoundPlayEvent'> {
  setCriteria(soundNameCriteria: string): this;
}
// export class StepTrigger extends EmptyClass {
//   static class: Class<'what is the path'>;
// }
// export interface StepTrigger extends EJavaClass<Trigger, 'what is the path'> {
//   /**
//    * Sets the delay in seconds between the trigger activation. This has a minimum of one second between steps. This will override setFps.
//    */
//   setDelay(delay: number): this;
//   /**
//    * Sets the frames per second that the trigger activates. This has a minimum of one step per second.
//    */
//   setFps(fps: number): this;
// }

/**
 * com.chattriggers.ctjs.engine.langs.js.JSRegister
 */
declare interface JSRegister extends JavaClass<'com.chattriggers.ctjs.engine.langs.js.JSRegister'> {
  register(triggerType: 'actionBar', callback: (...args: Array<string | CancelableAZEvent>) => void): ChatEvent;
  register(triggerType: 'chat', callback: (...args: Array<string | CancelableAZEvent>) => void): ChatEvent;

  register(triggerType: 'command', callback: (...args: string[]) => void): CommandTrigger;

  register(
    triggerType: 'attackEntity',
    callback: (target: Entity, source: PlayerMP, event: CancelableAZEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'drawBlockHighlight',
    callback: (position: Vector3f, event: CancelableAZEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'dropItem',
    callback: (item: Item, player: PlayerMP, position: Vector3f, motion: Vector3f, event: CancelableAZEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'guiKey',
    callback: (
      char: string,
      keyCode: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'guiMouseClick',
    callback: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'guiMouseDrag',
    callback: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'guiMouseRelease',
    callback: (
      mouseX: number,
      mouseY: number,
      mouseButton: number,
      guiScreen: JavaClass<'net.minecraft.client.gui.GuiScreen'>,
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;
  register(triggerType: 'guiOpened', callback: (event: CancelableAZEvent) => void): EventTrigger;
  /**
   * Note: this is not continuously called while the block is being broken, only once when first left clicked.
   */
  register(triggerType: 'hitBlock', callback: (block: Block, event: CancelableAZEvent) => void): EventTrigger;
  register(
    triggerType: 'itemTooltip',
    callback: (lore: string[], stack: JavaClass<'net.minecraft.item.ItemStack'>, event: CancelableAZEvent) => void
  ): EventTrigger;
  register(triggerType: 'messageSent', callback: (message: string, event: CancelableAZEvent) => void): EventTrigger;
  register(
    triggerType: 'pickupItem',
    callback: (item: Item, player: PlayerMP, position: Vector3f, motion: Vector3f, event: CancelableAZEvent) => void
  ): EventTrigger;
  /**
   * activates when the player right clicks the air or a block
   */
  register(
    triggerType: 'playerInteract',
    callback: (
      action: JavaEnumValue<'RIGHT_CLICK_EMPTY' | 'RIGHT_CLICK_BLOCK' | 'UNKNOWN'>,
      position: Vector3f,
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;
  register(triggerType: 'renderChat', callback: (event: CancelableAZEvent) => void): EventTrigger;
  register(
    triggerType: 'renderItemIntoGui',
    callback: (item: Item, x: number, y: number, event: CancelableAZEvent) => void
  ): EventTrigger;
  register(
    triggerType: 'renderItemOverlayIntoGui',
    callback: (item: Item, x: number, y: number, event: CancelableAZEvent) => void
  ): EventTrigger;
  register(triggerType: 'renderOverlay', callback: (event: AZEvent) => void): EventTrigger;
  register(triggerType: 'renderScoreboard', callback: (event: CancelableAZEvent) => void): EventTrigger;
  register(
    triggerType: 'renderSlot',
    callback: (
      slot: Slot,
      guiContainer: JavaClass<'net.minecraft.client.gui.inventory.GuiContainer'>,
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'renderSlotHighlight',
    callback: (
      mouseX: number,
      mouseY: number,
      slot: JavaClass<'net.minecraft.inventory.Slot'>,
      guiContainer: JavaClass<'net.minecraft.client.gui.inventory.GuiContainer'>,
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;
  register(
    triggerType: 'renderTitle',
    callback: (displayedTitle: string, displayedSubtitle: string, event: CancelableAZEvent) => void
  ): EventTrigger;
  register(triggerType: 'serverConnect', callback: (event: AZEvent) => void): EventTrigger;
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
      event: CancelableAZEvent
    ) => void
  ): EventTrigger;

  register(
    triggerType: 'packetReceived',
    callback: (packet: JavaClass<'net.minecraft.network.Packet'>, event: CancelableAZEvent) => void
  ): PacketTrigger;
  register(
    triggerType: 'packetSent',
    callback: (packet: JavaClass<'net.minecraft.network.Packet'>, event: CancelableAZEvent) => void
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
  register(triggerType: 'serverDisconnect', callback: (event: AZEvent) => void): RegularTrigger;
  register(triggerType: 'tick', callback: (totalTicks: number) => void): RegularTrigger;
  register(triggerType: 'worldLoad', callback: () => void): RegularTrigger;
  register(triggerType: 'worldUnload', callback: () => void): RegularTrigger;

  register(
    triggerType: 'postRenderEntity',
    callback: (entity: Entity, position: Vector3f, partialTicks: number) => void
  ): RenderEntityTrigger;
  register(
    triggerType: 'renderEntity',
    callback: (entity: Entity, position: Vector3f, partialTicks: number, event: CancelableAZEvent) => void
  ): RenderEntityTrigger;

  register(
    triggerType: 'postRenderTileEntity',
    callback: (tileEntity: TileEntity, position: Vector3f, partialTicks: number) => void
  ): RenderTileEntityTrigger;
  register(
    triggerType: 'renderTileEntity',
    callback: (tileEntity: TileEntity, position: Vector3f, partialTicks: number, event: CancelableAZEvent) => void
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
      event: CancelableAZEvent
    ) => void
  ): SoundPlayTrigger;

  // register(triggerType: 'step', callback: (totalSteps: number) => void): StepTrigger;

  // register(triggerType: string, callback: Function): Trigger;
  register(
    triggerType: JavaClass<'net.minecraftforge.fml.common.eventhandler.Event'>,
    callback: (event: AZEvent) => void
  ): RegularTrigger;
}

declare global {
  const EventTrigger: JSRegister
  const register: JSRegister['register'];
  const Priority: JavaEnum<'LOWEST' | 'LOW' | 'NORMAL' | 'HIGH' | 'HIGHEST'>;
}
export {};
