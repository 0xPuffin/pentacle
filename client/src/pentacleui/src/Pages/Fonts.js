import React, {Component} from 'react';
import Layout from "../components/layout";
import Gist from "../components/gist";


class Fonts extends Component {
    render() {
        return <Layout>
            <h1>Fonts</h1>
            <article>
                <p>Currently there is only one font, Fira Code.</p>
                <p>The fonts are self-hosted and live in the `assets/fonts` dir. Licencing is via the Open Font Licence
                    –
                    via <a
                        href={"https://fonts.google.com/specimen/Fira+Code?selection.family=Fira+Code&sidebar.open=true#license"}>Google
                        fonts</a>.</p>
            </article>
            <article className={"margin-top-2"}>
                <p className={"bold"}>Fira Code Bold</p>
                <p className={"semibold"}>Fira Code SemiBold</p>
                <p className={"medium"}>Fira Code Medium</p>
                <p className={"regular"}>Fira Code Regular</p>
                <p className={"light"}>Fira Code Light</p>
            </article>
            <Gist gist="35ee5195ed5d59aafa6134e499328b72" />

        </Layout>;
    }
}

export default Fonts;
