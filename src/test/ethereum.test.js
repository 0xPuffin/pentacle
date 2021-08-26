import React from 'react'
import {expect, test} from "@jest/globals";
import '@testing-library/jest-dom'

const ethData = require("../../public/ethDataDefi.json");

test('it loads the correct json file' , () => {
    expect(ethData.name).toBe('ethereumdefi');
});

test("the json file parses with no exceptions", () => {
    const parseJson = () => {
        const json = JSON.stringify(ethData);
        JSON.parse(json);
    };
    expect(parseJson).not.toThrow();
});

test('section titles are rendered', () => {
    expect(ethData.children[0].name).toBe('DeFi protocols');
    expect(ethData.children[1].name).toBe('Decentralized exchanges');
    expect(ethData.children[2].name).toBe('DeFi tools');
    expect(ethData.children[3].name).toBe('DeFi insurance');
});
