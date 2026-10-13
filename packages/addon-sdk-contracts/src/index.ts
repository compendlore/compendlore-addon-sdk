export interface FoundationIdentity {
	readonly packageName: string;
	readonly description: string;
	readonly status: "foundation";
}

export const foundation: FoundationIdentity = Object.freeze({
	packageName: "@compendlore/addon-sdk-contracts",
	description: "Point d'extraction futur des contrats publics du SDK",
	status: "foundation",
});

export type {
	ThemeDefinition,
	ThemeExtensionDefinition,
	ThemeSurface,
	ThemeTokenDefinition,
	ThemeTokenType,
	ThemeVariantDefinition,
} from "./themes.js";

export type {
	ContentContributionIdentity,
	ContentOwnerKind,
	EntityFieldDefinition,
	EntityFieldFamily,
	EntityInterfaceDefinition,
	EntityRelationDefinition,
	EntityTypeDefinition,
	LocalizedResourceDefinition,
	LocalizedValue,
	MainNavigationItemDefinition,
	NativeContentContribution,
	NavigationLinkDefinition,
	NavigationPosition,
	PageDefinition,
	SidebarDefinition,
	SidebarItemDefinition,
	VisibilityCondition,
} from "./native-content.js";
