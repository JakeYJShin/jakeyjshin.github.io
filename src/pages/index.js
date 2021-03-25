import * as React from "react"

import "./index.css"

import { nanoid } from 'nanoid'

import Layout from "../components/layout"
import Main from "src/components/Main/Main"
import About from "src/components/About/About"
import Portfolio from "src/components/Portfolio/Portfolio"

const IndexPage = () => {
  const [selected, setSelect] = React.useState("about")
  const getRandomKey = () => nanoid()

  return (
    <Layout>
      <div className="main-container">
        <Main selected={selected} setSelect={setSelect}/>
      </div>
      <div className="secondary-container">
        {selected === "about" ?    
          <div key={getRandomKey()} className="fadeIn">
            <About setSelect={setSelect} />
          </div> :
          <div key={getRandomKey()} className="fadeIn">
           <Portfolio />
         </div>  
        }
      </div>
    </Layout>
  )
}

export default IndexPage
