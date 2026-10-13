/** Surfaces on which a theme can be activated.
 *
 * @remarks FR — Surfaces sur lesquelles un thème peut être activé.
 */
export type ThemeSurface = "administration" | "public" | "recovery";

/** Token types accepted by the CMS theme projection.
 *
 * @remarks FR — Types de jetons acceptés par la projection de thème du CMS.
 */
export type ThemeTokenType =
	"color" | "font-family" | "font-weight" | "length" | "number" | "shadow" | "time";

/** Declares one typed, localizable theme token.
 *
 * @remarks FR — Déclare un jeton de thème typé et documenté dans plusieurs langues.
 */
export interface ThemeTokenDefinition {
	/** Token value. FR — Valeur du jeton. */
	readonly value: string | number;
	/** Expected value family. FR — Famille de valeur attendue. */
	readonly type: ThemeTokenType;
	/** Localized purpose shown to administrators. FR — Utilité localisée affichée aux administrateurs. */
	readonly description: Readonly<Record<string, string>>;
}

/** Named token overrides such as light, dark or high contrast.
 *
 * @remarks FR — Surcharge nommée de jetons, par exemple clair, sombre ou contraste élevé.
 */
export interface ThemeVariantDefinition {
	readonly identifier: string;
	readonly label: Readonly<Record<string, string>>;
	readonly tokens: Readonly<Record<string, string | number>>;
}

/** Public declarative contract for an installable theme.
 *
 * @remarks FR — Contrat déclaratif public d’un thème installable. Raw CSS and executable values
 * are intentionally excluded. Le CSS arbitraire et les valeurs exécutables sont exclus.
 */
export interface ThemeDefinition {
	readonly schemaVersion: string;
	readonly surfaces: readonly ThemeSurface[];
	readonly tokens: Readonly<Record<string, ThemeTokenDefinition>>;
	readonly variants: readonly ThemeVariantDefinition[];
	readonly fallbackThemeIdentifier?: string;
}

/** Public contract for a bounded extension of another theme.
 *
 * @remarks FR — Contrat public d’une extension bornée d’un autre thème.
 */
export interface ThemeExtensionDefinition {
	readonly schemaVersion: string;
	readonly targetThemeIdentifier: string;
	readonly tokens: Readonly<Record<string, string | number>>;
	readonly conflictsWith?: readonly string[];
	readonly order: number;
}
