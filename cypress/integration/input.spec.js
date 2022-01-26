describe("Input", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("focuses the input on load", () => {
		cy.focused().should("have.class", "form-control");
	});

	it("accepts input", () => {
		const input = "die hard";

		cy.get(".form-control").type(input).should("have.value", input);
	});

	it("displays all search results from API for the given search term", () => {
		const input = "die hard";

		cy.get(".form-control")
			.type(input)
			.should("have.value", input)
			.get(".card")
			.should("have.length", 10);
	});
});
