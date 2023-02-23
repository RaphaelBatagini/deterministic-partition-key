const { deterministicPartitionKey } = require("./dpk");
const { faker } = require("@faker-js/faker");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the same partitionKey when it doesn't exceed maximum partition key length", () => {
    const validPartitionKeyObject = {
      partitionKey: faker.datatype.string(faker.datatype.number({ max: 256 })),
    };
    const partitionKey = deterministicPartitionKey(validPartitionKeyObject);
    expect(partitionKey).toBe(validPartitionKeyObject.partitionKey);
  });

  it("Returns the same partitionKey as a string when the input is a number", () => {
    const numericPartitionKeyObject = {
      partitionKey: faker.datatype.number(),
    };
    const partitionKey = deterministicPartitionKey(numericPartitionKeyObject);
    expect(typeof partitionKey).toBe("string");
  });

  it("Returns a 128 length string when the input doesn't have a partitionKey property", () => {
    const invalidObject = {
      someInvalidKey: faker.lorem.word(),
    };
    const partitionKey = deterministicPartitionKey(invalidObject);
    expect(partitionKey.length).toBe(128);
  });

  it("Returns a 128 length string when the input is longer than 256 characters", () => {
    const longPartitionKeyObject = {
      partitionKey: faker.datatype.string(257),
    };
    const partitionKey = deterministicPartitionKey(longPartitionKeyObject);
    expect(partitionKey.length).toBe(128);
  });
});
