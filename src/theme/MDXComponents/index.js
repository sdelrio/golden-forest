import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@theme/Admonition';
import TabItem from '@theme/TabItem';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardGroup from '../../components/Card/CardGroup';
import CardImage from '../../components/Card/CardImage';
import Steps from '../../components/Steps/Steps';
import Step from '../../components/Steps/Step';
import Accordion from '../../components/Accordion/Accordion';
import AccordionGroup from '../../components/Accordion/AccordionGroup';
import ParamField from '../../components/ParamField/ParamField';
import CodeGroup from '../../components/CodeGroup/CodeGroup';

export default {
  ...MDXComponents,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardGroup,
  CardImage,
  Steps,
  Step,
  Accordion,
  AccordionGroup,
  ParamField,
  CodeGroup,
  // Map some common aliases that might be in the markdown
  Tab: TabItem,
  Note: (props) => <Admonition type="note" {...props} />,
  Tip: (props) => <Admonition type="tip" {...props} />,
  Info: (props) => <Admonition type="info" {...props} />,
  Warning: (props) => <Admonition type="warning" {...props} />,
};
