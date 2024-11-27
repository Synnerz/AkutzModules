export class Vector3f {
  x: number;
  y: number;
  z: number;

  equals(obj: Vector3f): boolean;
  toString(): string;

  getX(): number;
  getY(): number;
  getZ(): number;
  setX(x: number): void;
  setY(y: number): void;
  setZ(z: number): void;
  set(x: number, y: number): void;
  set(x: number, y: number, z: number): void;

  length(): number;
  lengthSquared(): number;
  normalize(dest: Vector3f): Vector3f;
  scale(scale: number): Vector3f;
  negate(): Vector3f;
  negate(dest: Vector3f): Vector3f;
  translate(x: number, y: number, z: number): Vector3f;
}

export class Vector2f {
  x: number;
  y: number;

  equals(obj: Vector2f): boolean;
  toString(): string;

  getX(): number;
  getY(): number;
  setX(x: number): void;
  setY(y: number): void;
  set(x: number, y: number): void;

  length(): number;
  lengthSquared(): number;
  normalize(dest: Vector2f): Vector2f;
  scale(scale: number): Vector2f;
  negate(): Vector2f;
  negate(dest: Vector2f): Vector2f;
  translate(x: number, y: number): Vector2f;
}

export type JavaEnum<T extends string> = { [x in T]: JavaEnumValue<x> };
export type JavaEnumC<T extends string, C extends string> = JavaEnum<T> & JavaClass<C>;
export interface JavaEnumValue<T extends string> {
  toString(): T;
}
export type JavaEnumValueE<T extends JavaEnum<string>> = ValueOf<T>;
type ValueOf<T> = T[keyof T];
export type StringOrJavaEnumValue<T extends string> = T | JavaEnumValue<T>;
export type StringOrJavaEnumValueE<T extends JavaEnum<string>> = StringOrJavaEnumValue<
  ReturnType<JavaEnumValueE<T>['toString']>
>;

/**
 * `loaded using `Java.type`. e.g. `Java.type('net.minecraft');`
 */
export class JavaClass<T extends string> {
  protected constructor();

  private static apply();
  private static arguments;
  private static bind();
  private static call();
  private static caller;
  private static length;
  private static name;
  private static prototype;
  private static toString();
}
