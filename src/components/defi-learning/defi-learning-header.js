import React, {Component} from "react"
import {Link} from "react-router-dom";
import data from "./eth-data-defi.json"
import AssetCard from "./asset-card"
import AssetCardBig from "./asset-card-big"


class DefiLearningHeader extends Component {

state = {
    data: data,
    dataCardBig: data,
    alteredData: data,
    selection: null,
    selectedName: null
}

componentDidMount() {
this.setState({
    selectedName: data[0].name
})

}

  setSelection(name) {
      const itemName = name
      console.log(typeof itemName)
      this.setState({
        selectedName: name
    })

    const filteredData = this.state.dataCardBig.filter(() => (itemName === this.state.selectedName)
      );
      console.log(filteredData)
}


    render() {
        return <header>
            <div className="header-content flex-group">
                <Link className={"logo"} to="/">Pentacle</Link>
            {/* UNFUNCTIONING SEARCH BOX */}
            <div className={'field inline'}>
            <form>
              <label>Search</label>
               <input type="text"/>
              <input type="padding-left-0-75reset"  name="placeholder"  value="Clear"/>
            </form>
            </div>
         </div>

        <section className="flex-group  margin-top-1">
                {data.map((data) => (
                    <AssetCard
                    key={data.name}
                    {...data}
                    onClick={() => {
                        this.setSelection(data.name);
                      }}/>
                ))}
            <AssetCardBig
            key={data.name}
            {...data}
            />
        </section>
        </header>
    }
}
export default DefiLearningHeader
