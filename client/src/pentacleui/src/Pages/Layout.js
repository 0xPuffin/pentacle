import React, {Component} from 'react';
import Layout from "../components/layout";


class LayoutPage extends Component {
    render() {
        return <Layout>
            <h1>Layout</h1>
            <h2>Page structure guidelines</h2>
            <ul>
                <li>html</li>
                <ul>
                    <li>body</li>
                    <ul>
                        <li>header</li>
                        <li>nav</li>
                        <li>main</li>
                        <ul>
                            <li>h1</li>
                            <li>section</li>
                            <ul>
                                <li>article</li>
                                <li>article</li>
                                <li>article</li>
                            </ul>
                            <li>section</li>
                            <ul>
                                <li>article</li>
                                <li>article</li>
                            </ul>
                        </ul>
                        <li>footer</li>
                    </ul>
                </ul>
            </ul>
            <article className={"margin-top-2"}>
                <p>More info at Mozilla's <a
                    href={"https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"}>document
                    structure guidelines</a> and their <a
                    href={"https://developer.mozilla.org/en-US/docs/Web/HTML/Element"}>HTML elements reference</a>.</p>
            </article>
        </Layout>;
    }
}

export default LayoutPage;
