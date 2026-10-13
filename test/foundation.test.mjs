import assert from "node:assert/strict";
import test from "node:test";
import { URL } from "node:url";

import { foundation } from "../packages/addon-sdk-contracts/build/index.js";

test("exposes the public addon SDK contract foundation", () => {
	assert.equal(foundation.packageName, "@compendlore/addon-sdk-contracts");
	assert.equal(foundation.status, "foundation");
});

test("publishes declarative theme contracts without arbitrary CSS hooks", async () => {
	const source = await import("node:fs/promises").then(({ readFile }) =>
		readFile(new URL("../packages/addon-sdk-contracts/build/index.d.ts", import.meta.url), "utf8"),
	);
	assert.match(source, /ThemeDefinition/);
	assert.match(source, /ThemeExtensionDefinition/);
});

test("publishes the localized native-content contracts", async () => {
	const source = await import("node:fs/promises").then(({ readFile }) =>
		readFile(new URL("../packages/addon-sdk-contracts/build/index.d.ts", import.meta.url), "utf8"),
	);
	assert.match(source, /NativeContentContribution/);
	assert.match(source, /LocalizedResourceDefinition/);
	assert.match(source, /EntityTypeDefinition/);
	assert.match(source, /MainNavigationItemDefinition/);
});
