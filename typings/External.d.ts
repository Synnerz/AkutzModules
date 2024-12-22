import { MCClasses } from './MCClasses';

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

export type MCClass<T extends string> = T extends keyof MCClasses ? MCClasses[T] : {};

/**
 * `loaded using `Java.type`.
 *
 * e.g. `Java.type('net.minecraft');`
 */
export type JavaClass<T extends string> = {
  getClass(): Class<T>;
} & MCClass<T>;
export type EJavaClass<C extends JavaClass<any>, T extends string> = Omit<C, 'getClass' | 'constructor'> & JavaClass<T>;
export class EmptyClass {
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

export interface Class<T extends string> {
  asSubclass<U extends string>(clazz: Class<U>): Class<U>;
  cast(obj: any): T;
  desiredAssertionStatus(): boolean;
  getAnnotatedInterfaces(): JavaClass<'java.lang.reflect.AnnotatedType'>[];
  getAnnotatedSuperclass(): JavaClass<'java.lang.reflect.AnnotatedType'>;
  getAnnotation<A extends string>(annotationClass: Class<A>): JavaClass<A> | null;
  getAnnotations(): JavaClass<'java.lang.annotation.Annotation'>[];
  getAnnotationsByType<A extends string>(annotationClass: Class<A>): JavaClass<A>[];
  getCanonicalName(): T;
  getClasses(): Class<any>[];
  getClassLoader(): JavaClass<'java.lang.ClassLoader'>;
  getComponentType(): Class<any> | null;
  getConstructor<P extends Class<any>[]>(...parameterTypes: P): Constructor<T, P> | null;
  getConstructors(): Constructor<T, Class<any>[]>[];
  getDeclaredAnnotation<A extends string>(annotationClass: Class<A>): JavaClass<A> | null;
  getDeclaredAnnotations(): JavaClass<'java.lang.annotation.Annotation'>[];
  getDeclaredAnnotationsByType<A extends string>(annotationClass: Class<A>): JavaClass<A>[];
  getDeclaredClasses(): Class<any>[];
  getDeclaredConstructor<P extends Class<any>[]>(...parameterTypes: P): Constructor<T, P> | null;
  getDeclaredConstructors(): Constructor<T, Class<any>[]>[];
  getDeclaredField(name: string): Field<T>;
  getDeclaredFields(): Field<T>[];
  getDeclaredMethod<P extends Class<any>[]>(name: string, ...parameterTypes: P): Method<T, P>;
  getDeclaredMethods(): Method<T, Class<any>[]>[];

  getDeclaringClass(): Class<any> | null;
  getEnclosingClass(): Class<any> | null;
  getEnclosingConstructor(): Constructor<any, Class<any>[]> | null;
  getEnclosingMethod(): Method<T, Class<any>[]> | null;

  getEnumConstants(): JavaClass<T>[] | null;
  getField(name: string): Field<T>;
  getFields(): Field<T>[];
  getGenericInterfaces(): JavaClass<'java.lang.reflect.Type'>[];
  getGenericSuperclass(): JavaClass<'java.lang.reflect.Type'> | null;
  getInterfaces(): Class<any>[];
  getMethod<P extends Class<any>[]>(name: string, ...parameterTypes: P): Method<T, P>;
  getMethods(): Method<T, Class<any>[]>[];

  getModifiers(): number;
  getName(): string;
  getPackage(): JavaClass<'java.lang.Package'>;
  getProtectionDomain(): JavaClass<'java.security.ProtectionDomain'>;
  getResource(name: string): JavaClass<'java.net.URL'> | null;
  getResourceAsStream(name: string): JavaClass<'java.io.InputStream'> | null;
  getSigners(): any[];
  getSimpleName(): string;
  getSuperclass(): Class<any> | null;
  getTypeName(): string;
  getTypeParameters(): JavaClass<'java.lang.reflect.TypeVariable'>[];

  isAnnotation(): boolean;
  isAnnotationPresent(annotationClass: Class<'java.lang.annotation.Annotation'>): boolean;
  isAnonymousClass(): boolean;
  isArray(): boolean;
  isAssignableFrom(cls: Class<any>): boolean;
  isEnum(): boolean;
  isInstance(obj: any): boolean;
  isInterface(): boolean;
  isLocalClass(): boolean;
  isMemberClass(): boolean;
  isPrimitive(): boolean;
  isSynthetic(): boolean;

  newInstance(): T;

  toGenericString(): string;
  toString(): string;
}

interface Constructor<T extends string, P extends Class<any>[]> {
  setAccessible(flag: boolean): void;
  newInstance(...initargs: P): JavaClass<T>;
}

interface Field<T extends string> {
  setAccessible(flag: boolean): void;
  get(obj: JavaClass<T> | null): any;
  set(obj: JavaClass<T> | null, value: any): any;
}

interface Method<T extends string, P extends Class<any>[]> {
  setAccessible(flag: boolean): void;
  invoke(obj: JavaClass<T> | null, ...args: P): any;
}
