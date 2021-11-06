import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    //Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
          Site built using Docusaurus. Go ahead to the <a href="/docs/docs-intro/">Docs</a> Menu to see the content.
      </>
    ),
  },
  {
    title: 'Digital Garden',
    //Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        The phrase <i>digital garden</i> is a metaphor for thinking about writing and 
        creating that focuses less on the resulting <i>showpiece</i> and more on the 
        process, care, and craft it takes to get there.
      </>
    ),
  },
  {
    title: 'Easy to add Content',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    //Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
          Go to <i><a href="/tutorial/tutorial-intro/">Add content</a></i> section to see how easily can add and update content.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

function TwoColumns({columnOne, columnTwo, reverse}) {                                       
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
