import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useColorMode } from '@docusaurus/theme-common';
import {
  BarChart as RechartsBarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './BarChart.module.css';

const DEFAULT_COLORS = [
  '#388e3c',
  '#1976d2',
  '#f57c00',
  '#7b1fa2',
  '#c62828',
  '#00838f',
  '#558b2f',
  '#4e342e',
  '#37474f',
  '#6a1b9a',
];

const DARK_GRID = '#444';
const DARK_TICK = '#bbb';
const DARK_TOOLTIP_BG = '#1e1e1e';
const DARK_TOOLTIP_BORDER = '#555';

function BarChartInternal({
  title,
  data,
  yAxisLabel,
  maxValue,
  colorMap,
  colors = DEFAULT_COLORS,
}) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const axisProps = isDark
    ? { tick: { fontSize: 12, fill: DARK_TICK }, stroke: DARK_TICK }
    : { tick: { fontSize: 12 } };

  return (
    <div className={styles.container}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart data={data} margin={{ bottom: 20 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={isDark ? DARK_GRID : '#e0e0e0'}
          />
          <XAxis
            dataKey="name"
            angle={-45}
            textAnchor="end"
            height={80}
            {...axisProps}
          />
          <YAxis
            label={
              yAxisLabel
                ? { value: yAxisLabel, angle: -90, position: 'insideLeft', fill: isDark ? DARK_TICK : '#333' }
                : undefined
            }
            domain={[0, maxValue || 'auto']}
            {...axisProps}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? DARK_TOOLTIP_BG : '#fff',
              border: `1px solid ${isDark ? DARK_TOOLTIP_BORDER : '#ccc'}`,
              color: isDark ? '#eee' : '#333',
            }}
            itemStyle={{ color: isDark ? '#eee' : '#333' }}
            cursor={{ fill: isDark ? 'rgba(255,255,255,0.08)' : '#ccc' }}
          />
          <Legend wrapperStyle={{ color: isDark ? '#ccc' : '#333' }} />
          <Bar dataKey="value" fillOpacity={0.85} radius={[4, 4, 0, 0]}>
            {data.map((entry, i) => (
              <Cell
                key={entry.name}
                fill={colorMap?.[entry.name] || colors[i % colors.length]}
              />
            ))}
          </Bar>
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function BarChart(props) {
  return (
    <BrowserOnly fallback={<div>Loading chart...</div>}>
      {() => <BarChartInternal {...props} />}
    </BrowserOnly>
  );
}
