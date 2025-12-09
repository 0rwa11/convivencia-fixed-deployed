/**
 * Componente de Gráficos Avanzados
 * Proporciona visualizaciones interactivas para análisis de datos
 */

import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Gráfico de líneas con tendencia
 */
export const TrendLineChart: React.FC<{
  data: Array<{ name: string; value: number; trend?: number }>;
  title: string;
  description?: string;
}> = ({ data, title, description }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            dot={{ fill: '#2563eb', r: 4 }}
            activeDot={{ r: 6 }}
          />
          {data[0]?.trend !== undefined && (
            <Line
              type="monotone"
              dataKey="trend"
              stroke="#10b981"
              strokeDasharray="5 5"
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

/**
 * Gráfico de área apilada
 */
export const StackedAreaChart: React.FC<{
  data: any[];
  dataKeys: string[];
  title: string;
  colors?: string[];
}> = ({ data, dataKeys, title, colors = ['#2563eb', '#10b981', '#f59e0b'] }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              stroke={colors[index % colors.length]}
              fill={colors[index % colors.length]}
              fillOpacity={0.6}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

/**
 * Gráfico de barras comparativo
 */
export const ComparisonBarChart: React.FC<{
  data: any[];
  dataKeys: string[];
  title: string;
  colors?: string[];
}> = ({ data, dataKeys, title, colors = ['#2563eb', '#10b981'] }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[index % colors.length]}
              radius={[8, 8, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

/**
 * Gráfico de dispersión (Scatter)
 */
export const ScatterPlotChart: React.FC<{
  data: any[];
  xKey: string;
  yKey: string;
  title: string;
  description?: string;
}> = ({ data, xKey, yKey, title, description }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey={xKey} />
          <YAxis type="number" dataKey={yKey} />
          <Tooltip />
          <Scatter name="Datos" data={data} fill="#2563eb" />
        </ScatterChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

/**
 * Gráfico de radar (Spider)
 */
export const RadarChartComponent: React.FC<{
  data: any[];
  dataKey: string;
  title: string;
  angleKey: string;
}> = ({ data, dataKey, title, angleKey }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey={angleKey} />
          <PolarRadiusAxis />
          <Radar
            name={dataKey}
            dataKey={dataKey}
            stroke="#2563eb"
            fill="#2563eb"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

/**
 * Gráfico compuesto (línea + barras)
 */
export const ComposedChartComponent: React.FC<{
  data: any[];
  barKey: string;
  lineKey: string;
  title: string;
}> = ({ data, barKey, lineKey, title }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={barKey} fill="#2563eb" radius={[8, 8, 0, 0]} />
          <Line
            type="monotone"
            dataKey={lineKey}
            stroke="#10b981"
            strokeWidth={2}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

/**
 * Heatmap simple usando tabla con colores
 */
export const HeatmapTable: React.FC<{
  data: number[][];
  labels: { rows: string[]; cols: string[] };
  title: string;
}> = ({ data, labels, title }) => {
  const maxValue = Math.max(...data.flat());
  const minValue = Math.min(...data.flat());

  const getColor = (value: number) => {
    const normalized = (value - minValue) / (maxValue - minValue);
    if (normalized < 0.33) return 'bg-red-200';
    if (normalized < 0.66) return 'bg-yellow-200';
    return 'bg-green-200';
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 text-left bg-gray-100"></th>
              {labels.cols.map(col => (
                <th key={col} className="border p-2 text-center bg-gray-100 text-sm">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border p-2 font-semibold bg-gray-50 text-sm">
                  {labels.rows[rowIndex]}
                </td>
                {row.map((value, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={`border p-2 text-center text-sm ${getColor(value)}`}
                  >
                    {value.toFixed(1)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

/**
 * Componente de tarjeta de métrica
 */
export const MetricCard: React.FC<{
  title: string;
  value: string | number;
  unit?: string;
  change?: { value: number; direction: 'up' | 'down' };
  icon?: React.ReactNode;
}> = ({ title, value, unit, change, icon }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon && <div className="text-2xl">{icon}</div>}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">
        {value}
        {unit && <span className="text-sm font-normal text-gray-500 ml-1">{unit}</span>}
      </div>
      {change && (
        <p className={`text-xs mt-2 ${change.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {change.direction === 'up' ? '↑' : '↓'} {Math.abs(change.value)}% vs período anterior
        </p>
      )}
    </CardContent>
  </Card>
);
