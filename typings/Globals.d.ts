import { JavaClass } from './External';

declare global {
  namespace Java {
    const type: <T extends string>(clazz: T) => JavaClass<T>;
  }

  interface String {
    addFormatting(): string;
    addColor(): string;
    removeFormatting(): string;
    replaceFormatting(): string;
  }
  function easeOut(
    start: number,
    finish: number,
    speed: number,
    jump?: number
  ): number;
  function easeColor(
    start: number,
    finish: number,
    speed: number,
    jump?: number
  ): number;
  interface Number {
    easeOut(finish: number, speed: number, jump?: number): number;
    easeColor(finish: number, speed: number, jump?: number): number;
  }
  /**
   * java.util.ArrayList
   */
  class ArrayList extends JavaClass<'java.util.ArrayList'> {}
  /**
   * java.util.HashMap
   */
  class HashMap extends JavaClass<'java.util.HashMap'> {}
  /**
   * net.minecraftforge.fml.relauncher.ReflectionHelper
   */
  class ReflectionHelper extends JavaClass<'net.minecraftforge.fml.relauncher.ReflectionHelper'> {}
  /**
   * org.lwjgl.input.Keyboard
   */
  class Keyboard extends JavaClass<'org.lwjgl.input.Keyboard'> {}
  // TODO: finish
}

export {};
