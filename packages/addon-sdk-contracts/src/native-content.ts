/** A text value explicitly associated with a BCP 47 locale.
 *
 * @remarks FR : valeur textuelle explicitement associée à une locale BCP 47.
 */
export interface LocalizedValue {
	readonly locale: string;
	readonly value: string;
}

/** Declares one stable localized resource owned by a contribution.
 *
 * @remarks FR : déclare une ressource localisée stable possédée par une contribution.
 */
export interface LocalizedResourceDefinition {
	readonly identifier: string;
	readonly namespace: string;
	readonly format: "multiline" | "plain";
	readonly required?: boolean;
	readonly allowInstanceOverride?: boolean;
	readonly values: readonly LocalizedValue[];
}

/** Supported ownership kinds for declarative CMS content.
 *
 * @remarks FR : types de propriétaires acceptés pour le contenu déclaratif du CMS.
 */
export type ContentOwnerKind = "addon" | "core" | "instance" | "native-module";

/** Identifies the owner and version of a declarative contribution.
 *
 * @remarks FR : identifie le propriétaire et la version d'une contribution déclarative.
 */
export interface ContentContributionIdentity {
	readonly contributionKey: string;
	readonly owner: {
		readonly kind: ContentOwnerKind;
		readonly identifier: string;
	};
	readonly version: string;
}

/** Native field families understood by the entity engine.
 *
 * @remarks FR : familles de champs natives comprises par le moteur d'entités.
 */
export type EntityFieldFamily =
	| "boolean"
	| "choice"
	| "identifier"
	| "integer"
	| "measurement"
	| "media"
	| "number"
	| "relation"
	| "rich-text"
	| "short-text"
	| "structured-collection"
	| "taxonomy";

/** Declares one field on an entity type.
 *
 * @remarks FR : déclare un champ appartenant à un type d'entité.
 */
export interface EntityFieldDefinition {
	readonly identifier: string;
	readonly family: EntityFieldFamily | (string & {});
	readonly labelTextIdentifier: string;
	readonly descriptionTextIdentifier?: string;
	readonly required?: boolean;
	readonly localized?: boolean;
	readonly collection?: boolean;
	readonly immutable?: boolean;
	readonly configuration?: Readonly<Record<string, unknown>>;
}

/** Declares an entity type and its direct fields.
 *
 * @remarks FR : déclare un type d'entité et ses champs directs.
 */
export interface EntityTypeDefinition {
	readonly identifier: string;
	readonly parentIdentifier?: string;
	readonly abstract?: boolean;
	readonly required?: boolean;
	readonly allowsExtensions?: boolean;
	readonly nameTextIdentifier: string;
	readonly descriptionTextIdentifier?: string;
	readonly fields: readonly EntityFieldDefinition[];
}

/** Declares a relation between two entity types.
 *
 * @remarks FR : déclare une relation entre deux types d'entités.
 */
export interface EntityRelationDefinition {
	readonly identifier: string;
	readonly sourceTypeIdentifier: string;
	readonly targetTypeIdentifier: string;
	readonly sourceCardinality: "many" | "one";
	readonly targetCardinality: "many" | "one";
	readonly onTargetRemoval: "block" | "nullify" | "preserve";
}

/** Declares one generated entity interface.
 *
 * @remarks FR : déclare une interface d'entité générée.
 */
export interface EntityInterfaceDefinition {
	readonly identifier: string;
	readonly entityTypeIdentifier: string;
	readonly purpose: "create" | "detail" | "edit" | "list" | "select" | "summary";
	readonly fieldIdentifiers: readonly string[];
}

/** Supported positions in the main navigation bar.
 *
 * @remarks FR : emplacements pris en charge par la barre de navigation principale.
 */
export type NavigationPosition = "action" | "brand" | "primary";

/** A declarative condition controlling whether a navigation element is projected.
 *
 * @remarks FR : condition déclarative contrôlant la projection d'un élément de navigation.
 */
export type VisibilityCondition =
	| { readonly kind: "authenticated"; readonly expected: boolean }
	| { readonly kind: "capability" | "permission" | "role"; readonly identifier: string }
	| { readonly kind: "date-window"; readonly startsAt?: string; readonly endsAt?: string }
	| { readonly kind: "event" | "feature"; readonly identifier: string; readonly active: boolean };

/** Declares a reusable navigation destination or action.
 *
 * @remarks FR : déclare une destination ou une action de navigation réutilisable.
 */
export interface NavigationLinkDefinition {
	readonly identifier: string;
	readonly mode: "action" | "route" | (string & {});
	readonly target: string;
	readonly titleTextIdentifier: string;
	readonly tooltipTextIdentifier?: string;
	readonly iconIdentifier?: string;
	readonly requiredCapabilities?: readonly string[];
}

/** Declares an element of the main navigation bar.
 *
 * @remarks FR : déclare un élément de la barre de navigation principale.
 */
export interface MainNavigationItemDefinition {
	readonly identifier: string;
	readonly position: NavigationPosition;
	readonly linkIdentifier: string;
	readonly subtitleTextIdentifier?: string;
	readonly sidebarIdentifier?: string;
	readonly colorToken?: string;
	readonly enabled?: boolean;
	readonly order?: number;
	readonly removable?: boolean;
	readonly editableProperties?: readonly string[];
	readonly conditions?: readonly VisibilityCondition[];
}

/** Declares a sidebar.
 *
 * @remarks FR : déclare un menu latéral.
 */
export interface SidebarDefinition {
	readonly identifier: string;
	readonly titleTextIdentifier?: string;
	readonly subtitleTextIdentifier?: string;
	readonly iconIdentifier?: string;
	readonly allowsExtensions?: boolean;
	readonly enabled?: boolean;
	readonly removable?: boolean;
}

/** Declares one sidebar element. Child links use the same `link` kind as root links.
 *
 * @remarks FR : déclare un élément de sidebar ; un sous-lien reste de type `link`.
 */
export interface SidebarItemDefinition {
	readonly identifier: string;
	readonly sidebarIdentifier: string;
	readonly kind: "category" | "link" | "separator";
	readonly parentIdentifier?: string;
	readonly sectionSeparatorIdentifier?: string;
	readonly linkIdentifier?: string;
	readonly textIdentifier?: string;
	readonly accessibleLabelTextIdentifier?: string;
	readonly tooltipTextIdentifier?: string;
	readonly iconIdentifier?: string;
	readonly initiallyExpanded?: boolean;
	readonly allowsChildren?: boolean;
	readonly enabled?: boolean;
	readonly order?: number;
	readonly removable?: boolean;
	readonly requiredCapabilities?: readonly string[];
}

/** Declares a minimal page used by the first native vertical slice.
 *
 * @remarks FR : déclare une page minimale utilisée par la première tranche verticale native.
 */
export interface PageDefinition {
	readonly identifier: string;
	readonly route: string;
	readonly surface: "account" | "administration" | "site";
	readonly titleTextIdentifier: string;
	readonly descriptionTextIdentifier?: string;
	readonly requiredCapabilities?: readonly string[];
	readonly editable?: boolean;
	readonly removable?: boolean;
	readonly published?: boolean;
}

/** Complete declarative payload materialized by the CMS Registry.
 *
 * @remarks FR : charge déclarative complète matérialisée par le CMS Registry.
 */
export interface NativeContentContribution extends ContentContributionIdentity {
	/** Contribution keys that must be active before this contribution is materialized.
	 *
	 * @remarks FR : clés des contributions qui doivent être actives avant la matérialisation.
	 */
	readonly dependencies?: readonly string[];
	readonly localizedResources?: readonly LocalizedResourceDefinition[];
	readonly entityTypes?: readonly EntityTypeDefinition[];
	readonly entityRelations?: readonly EntityRelationDefinition[];
	readonly entityInterfaces?: readonly EntityInterfaceDefinition[];
	readonly navigationLinks?: readonly NavigationLinkDefinition[];
	readonly navigationItems?: readonly MainNavigationItemDefinition[];
	readonly sidebars?: readonly SidebarDefinition[];
	readonly sidebarItems?: readonly SidebarItemDefinition[];
	readonly pages?: readonly PageDefinition[];
}
