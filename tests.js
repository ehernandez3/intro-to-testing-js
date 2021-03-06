// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when calling sayHello("Jane")', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!" when calling sayHello("Alex")', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when calling sayHello("Pat")', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when calling sayHello()', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when calling sayHello(true)', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when calling sayHello(false)', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
