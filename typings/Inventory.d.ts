import { Class, EmptyClass, JavaClass } from './External';

declare global {
  /**
   * * A library that provides useful utilities for Inventory
   */
  class Inventory extends EmptyClass implements JavaClass<'com.github.synnerz.akutz.api.wrappers.inventory.Inventory'> {
    static class: Class<'com.github.synnerz.akutz.api.wrappers.inventory.Inventory'>;
    getClass(): Class<'com.github.synnerz.akutz.api.wrappers.inventory.Inventory'>;
    constructor(inventory: JavaClass<'net.minecraft.inventory.IInventory'>);
    constructor(container: JavaClass<'net.minecraft.inventory.Container'>);
    /**
     * * The underlying minecraft IInventory
     */
    inventory: JavaClass<'net.minecraft.inventory.IInventory'> | null;
    /**
     * * The underlying minecraft Container
     */
    container: JavaClass<'net.minecraft.inventory.Container'> | null;
    /**
     * * Gets [this] inventory's size
     */
    getSize(): number;
    /**
     * * Gets the Item that is in the specified slot
     */
    getStackInSlot(slot: number): Item | null;
    /**
     * * Gets [this] inventory's window id
     * * Note: returns `-1` if the window id was not found
     */
    getWindowId(): number;
    /**
     * * Gets [this] inventory's items
     * * Note: if a slot is empty it'll be `null`
     */
    getItems(): Item[];
    /**
     * * Checks whether [this] inventory contains the specified Item
     */
    contains(item: Item): boolean;
    /**
     * * Checks whether [this] inventory contains the specified item id
     */
    contains(id: number): boolean;
    /**
     * * Gets the first index of the specified item if it exists in [this] inventory
     */
    indexOf(item: Item): number;
    /**
     * * Gets the first index of the specified item id if it exists in [this] inventory
     */
    indexOf(id: number): number;
    /**
     * * Checks whether [this] inventory is a Container or not
     */
    isContainer(): boolean;
    /**
     * * Gets [this] inventory's name
     * * Note: returns `container` if it was not found
     */
    getName(): string;
    /**
     * * Gets [this] inventory class name
     */
    getClassName(): string;
    /**
     * * Gets the underlying minecraft IInventory or Container
     */
    toMC(): JavaClass<'net.minecraft.inventory.IInventory'> | JavaClass<'net.minecraft.inventory.Container'>;
    toString(): string;
  }
  /**
   * * A library that provides useful utilities for Item
   */
  class Item extends EmptyClass implements JavaClass<'com.github.synnerz.akutz.api.wrappers.inventory.Item'> {
    static class: Class<'com.github.synnerz.akutz.api.wrappers.inventory.Item'>;
    getClass(): Class<'com.github.synnerz.akutz.api.wrappers.inventory.Item'>;
    constructor(itemStack: JavaClass<'net.minecraft.item.ItemStack'>);
    constructor(itemName: string);
    constructor(itemID: number);
    constructor(block: Block);
    constructor(block: JavaClass<'net.minecraft.block.Block'>);
    constructor(entityItem: JavaClass<'net.minecraft.entity.item.EntityItem'>);
    constructor(entity: Entity);
    /**
     * * The underlying minecraft Item
     */
    item: JavaClass<'net.minecraft.item.Item'>;
    /**
     * * The underlying minecraft ItemStack
     */
    itemStack: JavaClass<'net.minecraft.item.ItemStack'>;
    /**
     * * Gets [this] item's raw nbt as string
     */
    getRawNBT(): string;
    /**
     * * Gets [this] item's id
     */
    getID(): number;
    /**
     * * Gets [this] item's stack size
     */
    getStackSize(): number;
    /**
     * * Gets [this] item's unlocalized name
     * * E.g: `tile.wood`
     */
    getUnlocalizedName(): string;
    /**
     * * Gets [this] item's registry name
     * * E.g: `minecraft:planks`
     */
    getRegistryName(): string;
    /**
     * * Gets [this] item's name
     */
    getName(): string;
    /**
     * * Sets [this] item's name
     */
    setName(name: string): this;
    /**
     * * Checks whether [this] item is enchanted
     */
    isEnchanted(): boolean;
    /**
     * * Gets [this] item's metadata
     */
    getMetadata(): number;
    /**
     * * Gets [this] item's durability
     */
    getDurability(): number;
    /**
     * * Gets [this] item's damage
     */
    getDamage(): number;
    /**
     * * Sets [this] item's damage
     */
    setDamage(damage: number): this;
    /**
     * * Gets [this] item's maximum damage
     */
    getMaxDamage(): number;
    /**
     * * Gets [this] item's lore
     */
    getLore(): string[];
    /**
     * * Draws [this] item into the player's screen at the specified location
     */
    draw(x: number, y: number): void;
    draw(x: number, y: number, scale: number): void;
    draw(x: number, y: number, scale: number, zlvl: number): void;
    /**
     * * Gets [this] item's IChatComponent and returns it as a TextComponent
     */
    getTextComponent(): TextComponent;
    toString(): string;
  }
  /**
   * * A library that provides useful utilities for Slot
   */
  class Slot extends EmptyClass implements JavaClass<'com.github.synnerz.akutz.api.wrappers.inventory.Slot'> {
    static class: Class<'com.github.synnerz.akutz.api.wrappers.inventory.Slot'>;
    getClass(): Class<'com.github.synnerz.akutz.api.wrappers.inventory.Slot'>;
    constructor(mcSlot: JavaClass<'net.minecraft.inventory.Slot'>);
    /**
     * * The underlying minecraft Slot
     */
    mcSlot: JavaClass<'net.minecraft.inventory.Slot'>;
    /**
     * * Gets [this] slot's index
     */
    getIndex(): number;
    /**
     * * Gets [this] slot's X position in screen
     */
    getDisplayX(): number;
    /**
     * * Gets [this] slot's Y position in screen
     */
    getDisplayY(): number;
    /**
     * * Gets [this] slot's inventory
     */
    getInventory(): Inventory;
    /**
     * * Gets [this] slot's item
     */
    getItem(): Item;
    /**
     * * Checks whether this slot is a creative slot or not
     */
    isCreativeSlot(): boolean
    /**
     * * Gets the underlying minecraft Slot
     */
    toMC(): JavaClass<'net.minecraft.inventory.Slot'>;
    toString(): string;
  }
}
export {};
