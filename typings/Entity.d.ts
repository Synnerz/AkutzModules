import { JavaClass } from "./External"

declare global {
  /**
   * * A library that provides useful utilities for Entity
   */
  class Entity extends JavaClass<"com.github.synnerz.akutz.api.wrappers.entity.Entity"> {
    constructor(entity: JavaClass<"net.minecraft.entity.Entity">)
    /**
     * * The underlying minecraft Entity
     */
    entity: JavaClass<"net.minecraft.entity.Entity">
    /**
     * * Gets [this] entity's current X position
     */
    getX(): number
    /**
     * * Gets [this] entity's current Y position
     */
    getY(): number
    /**
     * * Gets [this] entity's current Z position
     */
    getZ(): number
    /**
     * * Gets [this] entity's last X position
     */
    getLastX(): number
    /**
     * * Gets [this] entity's last Y position
     */
    getLastY(): number
    /**
     * * Gets [this] entity's last Z position
     */
    getLastZ(): number
    /**
     * * Checks whether [this] entity is dead
     */
    isDead(): boolean
    /**
     * * Gets [this] entity's width (this can be `0`)
     */
    getWidth(): number
    /**
     * * Gets [this] entity's height (this can be `0`)
     */
    getHeight(): number
    /**
     * * Gets [this] entity's eye height
     * * Note: this defaults to 85% of the entity's height but it can be different depending on the entity
     */
    getEyeHeight(): number
    /**
     * * Gets [this] entity's name
     */
    getName(): string
    /**
     * * Gets [this] entity's UUID as string
     */
    getUUID(): `${string}-${string}-${string}-${string}-${string}`
    /**
     * * Gets [this] entity's UUID java object
     */
    getUUIDObj(): JavaClass<"java.util.UUID">
    /**
     * * Checks the distance between [this] entity and the [other] specified entity or position
     */
    distanceTo(other: Entity): number
    distanceTo(other: JavaClass<"net.minecraft.entity.Entity">): number
    distanceTo(other: JavaClass<"net.minecraft.util.BlockPos">): number
    distanceTo(x: number, y: number, z: number): number
    /**
     * * Checks whether [this] entity is currently in the ground
     */
    isOnGround(): boolean
    /**
     * * Checks whether [this] entity is currently collided
     */
    isCollided(): boolean
    /**
     * * Gets [this] entity's ticks that the entity has existed for
     */
    getTicksExisted(): number
    /**
     * * Checks whether [this] entity is currently sneaking
     */
    isSneaking(): boolean
    /**
     * * Checks whether [this] entity is currently sprinting
     */
    isSprinting(): boolean
    /**
     * * Gets [this] entity's current world
     */
    getWorld(): JavaClass<"net.minecraft.world.World">
    /**
     * * Gets [this] entity's current chunk
     */
    getChunk(): Chunk
    /**
     * * Gets [this] entity's id
     */
    getID(): number
    /**
     * * Gets the underlying minecraft Entity
     */
    toMC(): JavaClass<"net.minecraft.entity.Entity">
  }
  /**
   * * A library that provides useful utilities for EntityLivingBase
   */
  class EntityLivingBase extends Entity implements JavaClass<"com.github.synnerz.akutz.api.wrappers.entity.EntityLivingBase"> {
    constructor(entityLivingBase: JavaClass<"net.minecraft.entity.EntityLivingBase">)
    /**
     * * The underlying minecraft EntityLivingBase
     */
    entityLivingBase: JavaClass<"net.minecraft.entity.EntityLivingBase">
    /**
     * * Gets [this] entityLivingBase's active potion effects
     */
    getActivePotionEffects(): PotionEffect[]
    /**
     * * Checks whether [this] entityLivingBase can see the specified [other] entity
     */
    canSeeEntity(other: JavaClass<"net.minecraft.entity.Entity">): boolean
    canSeeEntity(other: Entity): boolean
    /**
     * * Gets [this] entityLivingBase's current health
     */
    getHP(): number
    /**
     * * Gets [this] entityLivingBase's maximum health
     */
    getMaxHP(): number
    /**
     * * Checks whether the specified id or potion effect is currently active in [this] entityLivingBase
     */
    isPotionActive(id: number): boolean
    isPotionActive(potion: JavaClass<"net.minecraft.potion.Potion">): boolean
    isPotionActive(potionEffect: PotionEffect): boolean
    toString(): string
  }
  /**
   * * A library that provides useful utilities for PlayerMP
   */
  class PlayerMP extends EntityLivingBase implements JavaClass<"com.github.synnerz.akutz.api.wrappers.entity.PlayerMP"> {
    constructor(playerMP: JavaClass<"net.minecraft.entity.player.EntityPlayer">)
    /**
     * * The underlying minecraft EntityPlayer
     */
    playerMP: JavaClass<"net.minecraft.entity.player.EntityPlayer">
    /**
     * * Checks whether [this] playerMP is a spectator
     */
    isSpectator(): boolean
    /**
     * * Gets [this] playerMP's team or null if not in a team
     */
    getTeam(): Team | null
    /**
     * * Gets [this] playerMP's display name
     * * Note: this is the name that is displayed in tablist and nametag
     */
    getDisplayName(): string
    /**
     * * Sets [this] playerMP's display name
     * * Note: this is the name that is displayed in tablist and nametag
     */
    setDisplayName(name: string): this
    /**
     * * Gets [this] playerMP's name
     */
    getName(): string
  }
  /**
   * * A library that provides useful utilities for Particle
   */
  class Particle extends Entity implements JavaClass<"com.github.synnerz.akutz.api.wrappers.entity.Particle"> {
    constructor(particleEntity: JavaClass<"net.minecraft.client.particle.EntityFX">)
    /**
     * * The underlying minecraft EntityFX
     */
    particleEntity: JavaClass<"net.minecraft.client.particle.EntityFX">
    /**
     * * Sets [this] particle's X position
     */
    setX(x: number): this
    /**
     * * Sets [this] particle's Y position
     */
    setY(y: number): this
    /**
     * * Sets [this] particle's Z position
     */
    setZ(z: number): this
    /**
     * * Sets [this] particle's scale
     */
    scale(scale: number): this
    /**
     * * Sets [this] particle's velocity multiplier
     */
    multiplyVelocity(mult: number): this
    /**
     * * Sets [this] particle's alpha value
     */
    setAlpha(alpha: number): this
    /**
     * * Sets [this] particle's color
     */
    setColor(r: number, g: number, b: number): this
    setColor(r: number, g: number, b: number, a: number): this
    setColor(color: Color): this
    /**
     * * Gets [this] particle's color
     */
    getColor(): Color
    /**
     * * Removes [this] particle's
     * * Note: this sets the particle entity as dead
     */
    remove(): this
    toString(): string
  }
  /**
   * * A library that provides useful utilities for TileEntity
   */
  class TileEntity extends JavaClass<"com.github.synnerz.akutz.api.wrappers.entity.TileEntity"> {
    constructor(tileEntity: JavaClass<"net.minecraft.tileentity.TileEntity">)
    /**
     * * The underlying minecraft TileEntity
     */
    tileEntity: JavaClass<"net.minecraft.tileentity.TileEntity">
    /**
     * * Gets [this] tileEntity's X position
     */
    getX(): number
    /**
     * * Gets [this] tileEntity's Y position
     */
    getY(): number
    /**
     * * Gets [this] tileEntity's Z position
     */
    getZ(): number
    /**
     * * Gets [this] tileEntity's block
     */
    getBlock(): Block
    /**
     * * Gets [this] tileEntity's block position
     */
    getBlockPos(): JavaClass<"net.minecraft.util.BlockPos">
    /**
     * * Gets [this] tileEntity's metadata
     */
    getMetadata(): number
    /**
     * * Gets the underlying TileEntity
     */
    toMC(): JavaClass<"net.minecraft.tileentity.TileEntity">
    toString(): string
  }
  /**
   * * A library that provides useful utilities for Team
   */
  class Team extends JavaClass<"com.github.synnerz.akutz.api.wrappers.Team"> {
    constructor(team: JavaClass<"net.minecraft.scoreboard.ScorePlayerTeam">)
    /**
     * * The underlying minecraft ScorePlayerTeam
     */
    team: JavaClass<"net.minecraft.scoreboard.ScorePlayerTeam">
    /**
     * * Gets [this] team's registered name
     */
    getRegisteredName(): string
    /**
     * * Gets [this] team's display name
     */
    getName(): string
    /**
     * * Sets [this] team's display name
     */
    setName(name: string): this
    /**
     * * Gets [this] team's members' names
     */
    getMembers(): string[]
    /**
     * * Gets [this] team's prefix
     */
    getPrefix(): string
    /**
     * * Sets [this] team's prefix
     */
    setPrefix(prefix: string): this
    /**
     * * Gets [this] team's suffix
     */
    getSuffix(): string
    /**
     * * Sets [this] team's suffix
     */
    setSuffix(suffix: string): this
    /**
     * * Gets [this] team's friendly fire setting
     */
    getFriendlyFire(): boolean
    /**
     * * Checks whether [this] team can see invisible players of the same team
     */
    canSeeInvisibleTeammates(): boolean
    /**
     * * Gets [this] team's name tag visibility
     */
    getNameTagVisibility(): | "always" | "never" | "hideForOtherTeams" | "hideForOwnTeam"
    /**
     * * Gets [this] team's death message visibility
     */
    getDeathMessageVisibility(): | "always" | "never" | "hideForOtherTeams" | "hideForOwnTeam"
    toString(): string
  }
}

export {}
