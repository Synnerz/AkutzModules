import { JavaClass } from './External';

declare global {
  class Block {}
  class BlockType {}
  class Sign {}

  /**
   * com.chattriggers.ctjs.minecraft.wrappers.world.PotionEffect
   */
  class PotionEffect extends JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.world.PotionEffect'> {}
}
export {};
