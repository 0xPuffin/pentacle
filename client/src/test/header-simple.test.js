import React from "react";
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderSimple from "../components/header-simple";

test('renders a message', () => {
    const {container, getByText} = render(<Router><HeaderSimple /></Router>)
    expect(container.firstChild).toHaveClass(`p-header-simple`)
})