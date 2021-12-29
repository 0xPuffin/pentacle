import React, {Component} from 'react';
import Layout from "../components/layout";
import Gist from "../components/gist";

class Box extends Component {
    render() {
        return <Layout>
            <h1>Box</h1>
            <section>
               <article className={"box padding-1"}><p>I am a box</p></article>
            </section>
            <Gist gist="15da639fed2af58f211933a48afd8299" />
        </Layout>;
    }
}

export default Box;
