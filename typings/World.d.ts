import { Class, EJavaClass, EmptyClass, JavaClass } from './External';

declare global {
  class Block extends EmptyClass {
    static class: Class<'com.github.synnerz.akutz.api.wrappers.world.block.Block'>;
    constructor(mcBlock: JavaClass<'net.minecraft.block.Block'>, mcPos: JavaClass<'net.minecraft.util.BlockPos'>);
  }
  /**
   * * A library that provides useful utilities for Block
   */
  interface Block extends JavaClass<'com.github.synnerz.akutz.api.wrappers.world.block.Block'> {
    /**
     * * The underlying minecraft block
     */
    mcBlock: JavaClass<'net.minecraft.block.Block'>;
    /**
     * * The underlying minecraft BlockPos
     */
    mcPos: JavaClass<'net.minecraft.util.BlockPos'>;
    /**
     * * The block's X position
     */
    x: number;
    /**
     * * The block's Y position
     */
    y: number;
    /**
     * * The block's Z position
     */
    z: number;
    /**
     * * Gets [this] block's IBlockState
     */
    getState(): JavaClass<'net.minecraft.block.state.IBlockState'>;
    /**
     * * Gets [this] block's metadata
     */
    getMetadata(): number;
    /**
     * * A field with useful utilities about the block type
     */
    type: BlockType;
    toString(): string;
  }
  interface BlockType extends JavaClass<'what is the path'> {
    /**
     * * Gets [this] block's ID
     */
    getID(): number;
    /**
     * * Gets [this] block's RegistryName
     * * e.g: `minecraft:grass`
     */
    getRegistryName(): string;
    /**
     * * Gets [this] block's UnlocalizedName
     * * e.g: `tile.grass`
     */
    getUnlocalizedName(): string;
    /**
     * * Gets [this] block's name
     * * e.g: `Grass Block`
     */
    getName(): string;
    /**
     * * Gets [this] block's default IBlockState
     */
    getDefaultState(): JavaClass<'net.minecraft.block.state.IBlockState'>;
    /**
     * * Gets [this] block's default metadata
     */
    getDefaultStateMetadata(): number;
    /**
     * * Checks whether this block is translucent or not
     */
    isTranslucent(): boolean;
    toString(): string;
  }
  class Sign extends EmptyClass {
    static class: Class<'com.github.synnerz.akutz.api.wrappers.world.block.Sign'>;
    constructor(block: Block);
  }
  /**
   * * A library that provides useful utilities for Sign
   */
  interface Sign extends EJavaClass<Block, 'com.github.synnerz.akutz.api.wrappers.world.block.Sign'> {
    /**
     * * The underlying minecraft TileEntitySign
     */
    sign: JavaClass<'net.minecraft.tileentity.TileEntitySign'>;
    /**
     * * Gets the lines that are in the sign
     */
    getLines(): Message[];
    /**
     * * Gets the lines that are in the sign by their formatted text
     */
    getFormattedLines(): string[];
    /**
     * * Gets the lines that are in the sign by their unformatted text
     */
    getUnformattedLines(): string[];
    toString(): string;
  }
  /**
   *  A library that provides useful utilities for Chunk
   */
  class Chunk extends EmptyClass implements JavaClass<'com.github.synnerz.akutz.api.wrappers.world.Chunk'> {
    static class: Class<'com.github.synnerz.akutz.api.wrappers.world.Chunk'>;
    getClass(): Class<'com.github.synnerz.akutz.api.wrappers.world.Chunk'>;
    constructor(chunk: JavaClass<'net.minecraft.world.chunk.Chunk'>);
    /**
     * * The underlying minecraft Chunk
     */
    chunk: JavaClass<'net.minecraft.world.chunk.Chunk'>;
    /**
     * * Gets the chunk's X position
     */
    getX(): number;
    /**
     * * Gets the chunk's Z position
     */
    getZ(): number;
    /**
     * * Gets the chunk's minimum X position
     * * Note: this is calculated by `getX() * 16`
     */
    getMinBlockX(): number;
    /**
     * * Gets the chunk's minimum Z position
     * * Note: this is calculated by `getZ() * 16`
     */
    getMinBlockZ(): number;
    /**
     * * Gets all of the loaded entities that are inside [this] chunk
     */
    getAllEntities(): Entity[];
    /**
     * * Gets all of the loaded entities that are inside [this] chunk that match the specified class
     */
    getAllEntitiesOfType(clazz: Class<any>): Entity[];
    /**
     * * Gets all of the loaded tileEntities that are inside [this] chunk
     */
    getAllTileEntities(): TileEntity[];
    /**
     * * Gets all of the loaded tileEntities that are inside [this] chunk that match the specified class
     */
    getAllTileEntitiesOfType(clazz: Class<any>): TileEntity[];
    /**
     * * Gets the underlying minecraft [chunk]
     */
    toMC(): JavaClass<'net.minecraft.world.chunk.Chunk'>;
  }

  /**
   *  A library that provides useful utilities for PotionEffect
   */
  class PotionEffect extends EmptyClass implements JavaClass<'com.github.synnerz.akutz.api.wrappers.PotionEffect'> {
    static class: Class<'com.github.synnerz.akutz.api.wrappers.PotionEffect'>;
    getClass(): Class<'com.github.synnerz.akutz.api.wrappers.PotionEffect'>;
    constructor(effect: JavaClass<'net.minecraft.potion.PotionEffect'>);
    /**
     * * The underlying minecraft PotionEffect
     */
    effect: JavaClass<'net.minecraft.potion.PotionEffect'>;
    /**
     * * Gets [this] potion effect's name
     * * e.g: `potion.poison`
     */
    getName(): string;
    /**
     * * Gets [this] potion effect's localized name
     * * e.g: `poison`
     */
    getLocalizedName(): string;
    /**
     * * Gets [this] potion effect's amplifier
     */
    getAmplifier(): number;
    /**
     * * Gets [this] potion effect's ID
     */
    getID(): number;
    /**
     * * Checks whether [this] potion effect is at maximum duration
     */
    isDurationMax(): boolean;
    /**
     * - Checks whether [this] potion effect displays particles
     */
    showsParticles(): boolean;
  }
}
export {};
