import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Layout from "./components/layout";

import Box from "./Pages/Box";
import Flex from "./Pages/Flex";
import Inputs from "./Pages/Inputs";
import Typography from "./Pages/Typography";
import Fonts from "./Pages/Fonts";
import LayoutPage from "./Pages/Layout";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={Main} />
        <Route path="/box" component={Box} />
        <Route path="/flex" component={Flex} />
        <Route path="/inputs" component={Inputs} />
        <Route path="/fonts" component={Fonts} />
        <Route path="/layout" component={LayoutPage} />
        <Route path="/typography" component={Typography} />
      </HashRouter>
    );
  }
}

function Main() {
  return (
    <>
      <Layout>
        <section className={"editorial-content"}>
          <h1>Hello</h1>
          <article>
            <p>Pentacle ui contains our react components and scss patterns</p>
            <p>Currently work in progress but the basics are here</p>
            <p>
              Do not use any custom or inline css in projects as it just adds
              tech debt
            </p>
            <p>
              If a style doesn't exist, use semantic HTML5 which can then be
              styled
            </p>
            <p>
              Note: Gists currently not working - contact @0xPentacle for markup
              or inspect code
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
}

export default App;
