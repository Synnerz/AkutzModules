import { Class, EmptyClass, JavaClass } from './External';

declare global {
  /**
   * com.chattriggers.ctjs.minecraft.wrappers.inventory.nbt.NBTTagList
   */
  class NBTTagList
    extends EmptyClass
    implements JavaClass<'com.chattriggers.ctjs.minecraft.wrappers.inventory.nbt.NBTTagList'>
  {
    getClass(): Class<'com.chattriggers.ctjs.minecraft.wrappers.inventory.nbt.NBTTagList'>;
  }
}

export {};
