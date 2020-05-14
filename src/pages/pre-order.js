import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PreSale from "../components/presale"

const PreOrder = () => (
  <div>
    <SEO
      title="Pre-Order Rock 'n Roll Disease - Warrior Soul - Official Band Website - Kory Clarke"
      keywords={[
        `Warrior Soul`,
        `Kory Clarke`,
        `rock 'n roll`,
        `Rock 'n Roll Disease`,
      ]}
    />
    <Layout>
      <section className="section">
        <div className="container">
          <PreSale />
        </div>
      </section>
    </Layout>
  </div>
)

export default PreOrder
