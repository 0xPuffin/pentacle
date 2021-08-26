import React, {Component} from "react"
import data from "./eth-data-defi.json"
import ProjectTile from "./project-tile"
import AssetCardBig from "./asset-card-big"


class Projects extends Component {

    state = {
        data: data,
        dataCardBig: data[0],
        selectedName: null
    }

    componentDidMount() {
        this.setState({
            selectedName: data[0].name
        })
    }

    setSelection(name) {
        this.setState({
          selectedName: name,
          dataCardBig: this.state.data
      },
      this.filteredData
        )}

    filteredData() {
        const filter = this.state.dataCardBig.filter(data => (data.name === this.state.selectedName)
      );
      this.setState({
        dataCardBig: filter[0]
    })
    }


    render() {
        return <section className={"flex justify-start"}>
            {data.map((data) => (
                <ProjectTile key={data.name}
                             {...data} onClick={() => {
                    this.setSelection(data.name);
                }}/>
            ))}
            <AssetCardBig
                key={this.state.dataCardBig.name}
                {...this.state.dataCardBig}
            />
        </section>
    }
}

export default Projects
