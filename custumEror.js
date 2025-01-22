// throw new Error("Arish has thrown an error");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
throw new ValidationError("Arish has thrown an error");
    