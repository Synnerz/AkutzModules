import { Class, EmptyClass, JavaClass } from './External';

export class BaseUniform<T> extends EmptyClass {
    constructor(location: number)
    /**
     * * Gets the specified location of [this] uniform
     */
    getLocation(): number
    /**
     * * Sets the value for [this] uniform
     */
    setValue(value: T): void
}
export class BaseVector<T> extends EmptyClass {
    toString(): string
    hashCode(): number
    /**
     * * Checks whether [this] vector is equals to another vector
     */
    equals(other: BaseVector<T>): boolean
}

declare global {
    class Shader extends EmptyClass implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.Shader"> {
        constructor(vertSrc: string, fragSrc: string)
        static class: Class<'com.github.synnerz.akutz.api.libs.render.shaders.Shader'>
        getClass(): Class<'com.github.synnerz.akutz.api.libs.render.shaders.Shader'>;
        /**
         * * Binds [this] shader to be used in rendering
         */
        bind(): void
        /**
         * * Unbinds [this] shader from rendering
         */
        unbind(): void
        /**
         * * Deletes the underlying shader from the GPU memory
         */
        delete(): void
        /**
         * * Gets the location of a uniform
         * * Used for creating new uniforms for the shader
         */
        getUniformLoc(name: string): number
        /**
         * * Gets the specified vert and frag shaders from the resource location of Akutz mod
         * * Then makes a new shader with them and returns its instance
         */
        static fromResources(vertName: string, fragName: string): Shader
    }
    class Uniform<T> extends BaseUniform<T> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.Uniform"> {
        static class: Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Uniform'>;
        getClass(): Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Uniform'>;
    }
    class IntUniform extends BaseUniform<number> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.IntUniform"> {
        static class: Class<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.IntUniform">
        getClass(): Class<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.IntUniform">
    }
    class FloatUniform extends BaseUniform<number> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.FloatUniform"> {
        static class: Class<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.FloatUniform">
        getClass(): Class<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.FloatUniform">
    }
    class Vector2f extends BaseVector<number> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector2f"> {
        constructor(x: number, y: number)
        static class: Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector2f'>;
        getClass(): Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector2f'>;
        /**
         * * Gets the X value of [this] vector
         */
        getX(): number
        /**
         * * Gets the Y value of [this] vector
         */
        getY(): number
        /**
         * * Makes a new vector with the specified params
         */
        copy(x: number, y: number): Vector2f
    }
    class Vector3f extends BaseVector<number> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector3f"> {
        constructor(x: number, y: number, z: number)
        static class: Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector3f'>;
        getClass(): Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector3f'>;
        /**
         * * Gets the X value of [this] vector
         */
        getX(): number
        /**
         * * Gets the Y value of [this] vector
         */
        getY(): number
        /**
         * * Gets the Z value of [this] vector
         */
        getZ(): number
        /**
         * * Makes a new vector with the specified params
         */
        copy(x: number, y: number, z: number): Vector3f
    }
    class Vector4f extends BaseVector<number> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector4f"> {
        constructor(x: number, y: number, z: number, w: number)
        static class: Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector4f'>;
        getClass(): Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vector4f'>;
        /**
         * * Gets the X value of [this] vector
         */
        getX(): number
        /**
         * * Gets the Y value of [this] vector
         */
        getY(): number
        /**
         * * Gets the Z value of [this] vector
         */
        getZ(): number
        /**
         * * Gets the W value of [this] vector
         */
        getW(): number
        /**
         * * Makes a new vector with the specified params
         */
        copy(x: number, y: number, z: number, w: number): Vector4f
    }
    class Vec2Uniform extends BaseUniform<Vector2f> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vec2Uniform"> {
        static class: Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vec2Uniform'>;
        getClass(): Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vec2Uniform'>;
    }
    class Vec4Uniform extends BaseUniform<Vector4f> implements JavaClass<"com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vec4Uniform"> {
        static class: Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vec4Uniform'>;
        getClass(): Class<'com.github.synnerz.akutz.api.libs.render.shaders.uniform.Vec4Uniform'>;
    }
}