import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import logo from "@site/static/img/insect_totem_800_374.jpg";
import rust_logo from "@site/static/img/Rust.png";




function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx( styles.heroBanner)}  style={{backgroundImage: `url('../../slash/img/bg_Plain_SVG.svg')`}}  >
      <div className="container">
	    
		<img src={logo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <span className="hero__title"><Link
            to="/docs/docs-map">
            {siteConfig.tagline}
          </Link><img src={rust_logo} /></span>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Insect Totem">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
