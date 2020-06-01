const test = require("ava")
const prettyFraction = require(".")

test("main", t => {
	t.is(prettyFraction([1, 2]), "½")
	t.is(prettyFraction([3, 50]), "³/₅₀")
})
