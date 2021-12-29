import React, {Component} from 'react';
import Layout from "../components/layout";
import Gist from "../components/gist";


class Typography extends Component {
    render() {
        return <Layout>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>Paragraph</p>
            <em>Emphasis</em>
            <Gist gist="7409863fdf5e876d15419b22485e3ade" />

        </Layout>;
    }
}

export default Typography;
