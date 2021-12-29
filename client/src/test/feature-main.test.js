const features = require("../data/featuresMain.json");

test('Check json title say ETH or SOL' , () => {
const data = features

    const expectedValue = ['Ethereum', 'Solana']
    expect(data[0].title).toBe('Eth DeFi');
    expect(data[1].title).toBe('Sol DeFi');
});
