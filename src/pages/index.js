import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useGarden } from '../data/garden';
import styles from './index.module.css';

function ToolList({ tools }) {
  return (
    <ul className={styles.benchList}>
      {tools.map((tool) => (
        <li key={tool.to}>
          <Link className={styles.toolLink} to={tool.to}>
            <span className={styles.toolName}>{tool.label}</span>
            <span className={styles.toolBlurb}>{tool.blurb}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { title, tagline, sections, tools, startHere } = useGarden();
  const photo = useBaseUrl('/img/sdr-forest-01.jpg');

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.home}>
        <div className="container">
          <div className={styles.split}>
            <div
              className={styles.plate}
              style={{ backgroundImage: `url(${photo})` }}
              aria-hidden="true"
            />
            <div className={styles.copy}>
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.tagline}>{tagline}</p>
              <nav className={styles.quick}>
                <Link className={styles.pill} to="/docs/docs-intro/">
                  Docs
                </Link>
                <Link className={styles.pill} to="/tutorial/tutorial-intro/">
                  Tutorial
                </Link>
                <Link className={styles.pill} to="/blog/">
                  Journal
                </Link>
              </nav>

              <p className={styles.garden}>
                A <a href="https://joelhooks.com/digital-garden">digital garden</a> is a
                metaphor for thinking and writing that focuses on the process, care, and
                craft of growth. This is a living space where ideas are planted and
                nurtured over time.
              </p>

              <h3 className={styles.startHeading}>Start here</h3>
              <ul className={styles.start}>
                {startHere.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section className={styles.index}>
            <h2>Index</h2>
            <ul className={styles.ledger}>
              {sections.map((section) => (
                <li key={section.dir}>
                  <Link className={styles.entry} to={section.to}>
                    <span className={styles.entryHead}>
                      <span className={styles.entryTitle}>{section.label}</span>
                      <span className={styles.entryCount}>{section.count}</span>
                    </span>
                    <span className={styles.entryBlurb}>{section.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.bench}>
            <h2>Workbenches</h2>
            <ToolList tools={tools} />
          </section>
        </div>
      </main>
    </Layout>
  );
}
