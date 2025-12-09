/**
 * Página de Análisis Avanzados
 * Muestra el dashboard completo de análisis estadísticos
 */

import React from 'react';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

export default function AnalyticsPage() {
  return (
    <div className="container py-8">
      <AnalyticsDashboard />
    </div>
  );
}
