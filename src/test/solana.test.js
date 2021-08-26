import React from 'react'
import {expect, test} from "@jest/globals";
import '@testing-library/jest-dom'

const solanaData = require("../../public/solData.json");

test('it loads the correct json file' , () => {
    expect(solanaData.name).toBe('solana');
});

test("the json file parses with no exceptions", () => {
    const parseJson = () => {
        const json = JSON.stringify(solanaData);
        JSON.parse(json);
    };
    expect(parseJson).not.toThrow();
});

test('section titles are rendered', () => {
    expect(solanaData.children[0].name).toBe('Fiat on-ramps and exchange');
    expect(solanaData.children[1].name).toBe('DeFi');
    expect(solanaData.children[2].name).toBe('Infra');
    expect(solanaData.children[3].name).toBe('Launchpad');
    expect(solanaData.children[4].name).toBe('Tools');
    expect(solanaData.children[5].name).toBe('Insight and analytics');
    expect(solanaData.children[6].name).toBe('Wallets');
    expect(solanaData.children[7].name).toBe('NFT and games');
});
