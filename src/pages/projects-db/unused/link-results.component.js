import React, {useState} from "react"
import data from "./data"

function LinkResults() {
    const [projectContentData] = useState(data[0])

    return (
        <section>
            <h3>Related links</h3>
        </section>
    );
}

export default LinkResults
