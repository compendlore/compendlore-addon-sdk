import assert from "node:assert/strict";
import test from "node:test";

import { foundation } from "../packages/addon-sdk-contracts/build/index.js";

test("exposes the public addon SDK contract foundation", () => {
	assert.equal(foundation.packageName, "@compendlore/addon-sdk-contracts");
	assert.equal(foundation.status, "foundation");
});
