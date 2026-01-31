import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Focus on documentation',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Built using <i><a href="https://docusaurus.io">Docusaurus</a></i>, this site provides
        high-quality documentation with support for Markdown, versioning, and translations,
        offering a robust foundation for building an extensive knowledge base.
      </>
    ),
  },
  {
    title: 'Digital Garden',
    Svg: require('../../static/img/trees-02.svg').default,
    description: (
      <>
        A <i><a href="https://joelhooks.com/digital-garden">digital garden</a></i> is a
        metaphor for thinking and writing that focuses on the process, care, and craft
        of growth. This is a living space where ideas are planted and nurtured over time.
      </>
    ),
  },
  {
    title: 'Mathematical Precision',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Fully equipped for technical and scientific writing with integrated
        <i> KaTeX</i> support for complex math equations and <i>Mermaid</i> for
        dynamic, responsive diagrams and charts.
      </>
    ),
  },
  {
    title: 'Easy to add Content',
    Svg: require('../../static/img/leaves-02.svg').default,
    description: (
      <>
        Leverage MDX to use React components directly within your markdown.
        Go to the <i><a href="/tutorial/tutorial-intro/">Add content</a></i> section
        to see how effortlessly you can expand this forest.
      </>
    ),
  },
  {
    title: 'Powerful Explorer',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Navigate the forest with ease using Algolia-powered search. Find exactly
        what you need across all documents, tutorials, and blog posts with
        instant, relevant results.
      </>
    ),
  },
  {
    title: 'Living Journal',
    Svg: require('../../static/img/tree.svg').default,
    description: (
      <>
        Follow the journey through our integrated Blog. A chronological log of
        findings, updates, and deep dives into the ever-changing landscape of
        the Golden Forest.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return <El className={`Section ${className} ${background}`}>{children}</El>;
}

function TwoColumns({ columnOne, columnTwo, reverse }) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      ┆ <div className={`column first ${reverse ? 'right' : 'left'}`}>
        ┆   {columnOne}
        ┆ </div>
      ┆ <div className={`column last ${reverse ? 'left' : 'right'}`}>
        ┆   {columnTwo}
        ┆ </div>
    </div>
  );
}

function LineOne() {
  return (
    <Section className="LineOne" background="light">
      <TwoColumns
        reverse
        columnOne={
          <TextColumn
            tilte="titulo"
            text="Text"
          />
        }
        columnTwo={
          <TextColumn
            tilte="titulo columna 2"
            text="Text columna 2"
          />
        }
      />
    </Section>
  )
}


function ThreePhrases() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures() {
  return (
    <ThreePhrases />
  )
}
