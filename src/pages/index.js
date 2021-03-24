import * as React from "react"

import "./index.css"

import Layout from "../components/layout"
import Main from "src/components/Main/Main"
import About from "src/components/About/About"
import Portfolio from "src/components/Portfolio/Portfolio"

const IndexPage = () => {
  const [selected, setSelect] = React.useState("about")
  return (
    <Layout>
      <div className="main-container">
        <Main setSelect={setSelect}/>
      </div>
      <div className="secondary-container">
        {selected === "about" ?        
          <About /> :
          <Portfolio />
        }
      </div>
    </Layout>
  )
}

export default IndexPage
