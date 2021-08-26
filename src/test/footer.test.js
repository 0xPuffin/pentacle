import React from "react";
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from "../components/footer";

test('It displays the footer', () => {
    const {container, getByText} = render(<Router><Footer /></Router>)
    expect(container.firstChild).toHaveClass("p-footer")
})
