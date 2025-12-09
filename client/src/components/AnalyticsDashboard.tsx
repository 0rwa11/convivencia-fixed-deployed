/**
 * Dashboard de Análisis Avanzados
 * Muestra gráficos, métricas y análisis estadísticos
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, BarChart3, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  TrendLineChart,
  ComparisonBarChart,
  RadarChartComponent,
  MetricCard,
  HeatmapTable,
} from './AdvancedCharts';
import { generatePDF, generateExcel } from '@/lib/reportGenerator';
import { calculateMetrics, analyzeTrend } from '@/lib/analytics';
import { toast } from 'sonner';

/**
 * Datos de ejemplo para demostración
 */
const generateSampleData = () => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  return months.map((month, i) => ({
    name: month,
    value: 65 + Math.random() * 30 + i * 5,
    trend: 65 + i * 8,
  }));
};

const generateComparisonData = () => {
  return [
    { name: 'Grupo A', evaluacion1: 85, evaluacion2: 78, evaluacion3: 82 },
    { name: 'Grupo B', evaluacion1: 92, evaluacion2: 88, evaluacion3: 90 },
    { name: 'Grupo C', evaluacion1: 78, evaluacion2: 85, evaluacion3: 80 },
    { name: 'Grupo D', evaluacion1: 88, evaluacion2: 92, evaluacion3: 89 },
  ];
};

const generateRadarData = () => {
  return [
    { subject: 'Comunicación', A: 85, B: 92, fullMark: 100 },
    { subject: 'Liderazgo', A: 78, B: 88, fullMark: 100 },
    { subject: 'Empatía', A: 82, B: 90, fullMark: 100 },
    { subject: 'Resolución', A: 88, B: 92, fullMark: 100 },
    { subject: 'Colaboración', A: 80, B: 85, fullMark: 100 },
  ];
};

const generateHeatmapData = () => {
  return {
    data: [
      [85, 78, 82, 88, 90],
      [92, 88, 90, 85, 87],
      [78, 85, 80, 82, 84],
      [88, 92, 89, 91, 93],
    ],
    labels: {
      rows: ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D'],
      cols: ['Sesión 1', 'Sesión 2', 'Sesión 3', 'Sesión 4', 'Sesión 5'],
    },
  };
};

export const AnalyticsDashboard: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);
  const trendData = generateSampleData();
  const comparisonData = generateComparisonData();
  const radarData = generateRadarData();
  const heatmapData = generateHeatmapData();

  // Calcular métricas
  const trendValues = trendData.map(d => d.value);
  const metrics = calculateMetrics(trendValues);
  const trend = analyzeTrend(trendValues);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      const reportData = {
        title: 'Reporte de Análisis - Programa Convivencia',
        date: new Date().toLocaleDateString('es-ES'),
        summary: 'Análisis completo del desempeño del programa de convivencia intercultural con métricas estadísticas y comparativas entre grupos.',
        metrics: {
          'Evaluaciones Generales': metrics,
        },
        tables: [
          {
            name: 'Comparativa por Grupo',
            headers: ['Grupo', 'Evaluación 1', 'Evaluación 2', 'Evaluación 3'],
            rows: comparisonData.map(d => [
              d.name,
              d.evaluacion1,
              d.evaluacion2,
              d.evaluacion3,
            ]),
          },
        ],
      };

      await generatePDF(reportData, 'reporte_convivencia.pdf');
      toast.success('Reporte PDF generado correctamente');
    } catch (error) {
      toast.error('Error al generar el reporte PDF');
      console.error(error);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportExcel = () => {
    setIsExporting(true);
    try {
      const reportData = {
        title: 'Reporte de Análisis - Programa Convivencia',
        date: new Date().toLocaleDateString('es-ES'),
        summary: 'Análisis completo del desempeño del programa de convivencia intercultural.',
        metrics: {
          'Evaluaciones Generales': metrics,
        },
        tables: [
          {
            name: 'Comparativa por Grupo',
            headers: ['Grupo', 'Evaluación 1', 'Evaluación 2', 'Evaluación 3'],
            rows: comparisonData.map(d => [
              d.name,
              d.evaluacion1,
              d.evaluacion2,
              d.evaluacion3,
            ]),
          },
        ],
      };

      generateExcel(reportData, 'reporte_convivencia.xlsx');
      toast.success('Reporte Excel generado correctamente');
    } catch (error) {
      toast.error('Error al generar el reporte Excel');
      console.error(error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full space-y-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard de Análisis
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Análisis estadístico avanzado del programa de convivencia
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleExportPDF}
            disabled={isExporting}
            variant="outline"
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            PDF
          </Button>
          <Button
            onClick={handleExportExcel}
            disabled={isExporting}
            variant="outline"
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Excel
          </Button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <MetricCard
          title="Promedio General"
          value={metrics.mean.toFixed(1)}
          unit="puntos"
          icon={<BarChart3 className="w-5 h-5 text-blue-600" />}
          change={{ value: trend.percentageChange, direction: trend.direction === 'up' ? 'up' : 'down' }}
        />
        <MetricCard
          title="Mediana"
          value={metrics.median.toFixed(1)}
          unit="puntos"
          icon={<TrendingUp className="w-5 h-5 text-green-600" />}
        />
        <MetricCard
          title="Desviación Est."
          value={metrics.stdDev.toFixed(2)}
          unit="σ"
          icon={<Users className="w-5 h-5 text-purple-600" />}
        />
        <MetricCard
          title="Rango"
          value={`${metrics.min.toFixed(0)} - ${metrics.max.toFixed(0)}`}
          unit="puntos"
          icon={<BarChart3 className="w-5 h-5 text-orange-600" />}
        />
      </motion.div>

      {/* Charts Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Trend Chart */}
        <TrendLineChart
          data={trendData}
          title="Tendencia de Evaluaciones"
          description="Evolución de las puntuaciones a lo largo del tiempo"
        />

        {/* Comparison Chart */}
        <ComparisonBarChart
          data={comparisonData}
          dataKeys={['evaluacion1', 'evaluacion2', 'evaluacion3']}
          title="Comparativa por Grupo"
          colors={['#2563eb', '#10b981', '#f59e0b']}
        />

        {/* Radar Chart */}
        <RadarChartComponent
          data={radarData}
          dataKey="A"
          title="Análisis de Competencias"
          angleKey="subject"
        />

        {/* Heatmap */}
        <HeatmapTable
          data={heatmapData.data}
          labels={heatmapData.labels}
          title="Matriz de Evaluaciones"
        />
      </motion.div>

      {/* Statistics Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Estadísticas Detalladas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Media</p>
                <p className="text-lg font-bold">{metrics.mean.toFixed(2)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Mediana</p>
                <p className="text-lg font-bold">{metrics.median.toFixed(2)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Q1</p>
                <p className="text-lg font-bold">{metrics.q1.toFixed(2)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Q3</p>
                <p className="text-lg font-bold">{metrics.q3.toFixed(2)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">IQR</p>
                <p className="text-lg font-bold">{metrics.iqr.toFixed(2)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Desv. Est.</p>
                <p className="text-lg font-bold">{metrics.stdDev.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Insights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle>Insights Clave</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              📈 <strong>Tendencia:</strong> Los datos muestran una tendencia{' '}
              <span className={trend.direction === 'up' ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                {trend.direction === 'up' ? 'ascendente' : trend.direction === 'down' ? 'descendente' : 'estable'}
              </span>
              {' '}con un cambio del {trend.percentageChange.toFixed(1)}%.
            </p>
            <p>
              📊 <strong>Dispersión:</strong> La desviación estándar de {metrics.stdDev.toFixed(2)} indica{' '}
              {metrics.stdDev < 10 ? 'una distribución consistente' : 'una distribución variable'} de los datos.
            </p>
            <p>
              🎯 <strong>Rango:</strong> Las evaluaciones varían entre {metrics.min.toFixed(0)} y {metrics.max.toFixed(0)} puntos,
              con un rango de {metrics.range.toFixed(0)} puntos.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AnalyticsDashboard;
