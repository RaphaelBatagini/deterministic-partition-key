const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the same partitionKey when it doesn't exceed maximum partition key length", () => {
    const validPartitionKeyObject = {
      partitionKey: "some_valid_length_key",
    };
    const partitionKey = deterministicPartitionKey(validPartitionKeyObject);
    expect(partitionKey).toBe(validPartitionKeyObject.partitionKey);
  });

  it("Returns the same partitionKey as a string when the input is a number", () => {
    const numericPartitionKeyObject = {
      partitionKey: 100,
    };
    const partitionKey = deterministicPartitionKey(numericPartitionKeyObject);
    expect(typeof partitionKey).toBe("string");
  });

  it("Returns a 128 length string when the input doesn't have a partitionKey property", () => {
    const invalidObject = {
      someInvalidKey: 'something'
    };
    const partitionKey = deterministicPartitionKey(invalidObject);
    expect(partitionKey.length).toBe(128);
  });

  it("Returns a 128 length string when the input is longer than that", () => {
    const longPartitionKeyObject = {
      partitionKey: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ornare risus. Maecenas eget odio quam. Nunc sagittis et mi quis cursus. Quisque tempor neque eu est porttitor, ac pulvinar quam gravida. In ullamcorper, libero id porta dignissim, velit turpis.",
    };
    const partitionKey = deterministicPartitionKey(longPartitionKeyObject);
    expect(partitionKey.length).toBe(128);
  });
});
