import { JavaClass } from "./External"

declare global {
  /**
   * * A library that provides useful utilities for Block
   */
  class Block extends JavaClass<"com.github.synnerz.akutz.api.wrappers.world.block.Block"> {
    constructor(mcBlock: JavaClass<"net.minecraft.block.Block">, mcPos: JavaClass<"net.minecraft.util.BlockPos">)
    /**
     * * The underlying minecraft block
     */
    mcBlock: JavaClass<"net.minecraft.block.Block">
    /**
     * * The underlying minecraft BlockPos
     */
    mcPos: JavaClass<"net.minecraft.util.BlockPos">
    /**
     * * The block's X position
     */
    x: number
    /**
     * * The block's Y position
     */
    y: number
    /**
     * * The block's Z position
     */
    z: number
    /**
     * * Gets [this] block's IBlockState
     */
    getState(): JavaClass<"net.minecraft.block.state.IBlockState">
    /**
     * * Gets [this] block's metadata
     */
    getMetadata(): number
    /**
     * * A field with useful utilities about the block type
     */
    type: {
      /**
       * * Gets [this] block's ID
       */
      getID(): number
      /**
       * * Gets [this] block's RegistryName
       * * e.g: `minecraft:grass`
       */
      getRegistryName(): string
      /**
       * * Gets [this] block's UnlocalizedName
       * * e.g: `tile.grass`
       */
      getUnlocalizedName(): string
      /**
       * * Gets [this] block's name
       * * e.g: `Grass Block`
       */
      getName(): string
      /**
       * * Gets [this] block's default IBlockState
       */
      getDefaultState(): JavaClass<"net.minecraft.block.state.IBlockState">
      /**
       * * Gets [this] block's default metadata
       */
      getDefaultStateMetadata(): number
      /**
       * * Checks whether this block is translucent or not
       */
      isTranslucent(): boolean
      toString(): string
    }
    toString(): string
  }
  class BlockType {}
  class Sign {}
  class Chunk {}

  /**
   * com.chattriggers.ctjs.minecraft.wrappers.world.PotionEffect
   */
  class PotionEffect extends JavaClass<"com.chattriggers.ctjs.minecraft.wrappers.world.PotionEffect"> {}
}
export {}
