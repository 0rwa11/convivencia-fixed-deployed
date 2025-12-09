import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, CheckCircle, Lightbulb, TrendingUp, Code2, Zap } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

/**
 * Página de Análisis Técnico Interactivo
 * Presenta hallazgos, correcciones, mejoras y adiciones sugeridas
 */

// Datos para gráficos
const stackData = [
  { name: "React", value: 19, color: "#3B82F6" },
  { name: "TypeScript", value: 18, color: "#1E40AF" },
  { name: "Tailwind CSS", value: 16, color: "#60A5FA" },
  { name: "Express.js", value: 12, color: "#F59E0B" },
  { name: "Otros", value: 15, color: "#D97706" },
];

const issuesData = [
  { category: "Correcciones", count: 3, fill: "#DC2626" },
  { category: "Mejoras", count: 3, fill: "#3B82F6" },
  { category: "Adiciones", count: 3, fill: "#F59E0B" },
];

export default function Analysis() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        {/* Encabezado */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Análisis Técnico Detallado
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Informe completo sobre mejoras, correcciones y nuevas características
          </p>
          <div className="h-1 w-24 bg-primary rounded-full mb-8"></div>
        </section>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="corrections">Correcciones</TabsTrigger>
            <TabsTrigger value="improvements">Mejoras</TabsTrigger>
            <TabsTrigger value="additions">Adiciones</TabsTrigger>
          </TabsList>

          {/* Resumen */}
          <TabsContent value="overview" className="space-y-8 mt-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Resumen Ejecutivo
              </h2>
              <p className="text-foreground mb-6">
                Este proyecto es una aplicación web moderna con React 19, TypeScript y Tailwind CSS. 
                El análisis identifica 9 hallazgos clave en tres categorías.
              </p>

              {/* Gráficos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Pila Tecnológica</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={stackData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {stackData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">Hallazgos por Categoría</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={issuesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis dataKey="category" stroke="#6B7280" />
                      <YAxis stroke="#6B7280" />
                      <Tooltip contentStyle={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }} />
                      <Bar dataKey="count" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Correcciones */}
          <TabsContent value="corrections" className="space-y-6 mt-8">
            <Card className="p-8 border-l-4 border-l-destructive">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    1. Rutas sin Barra Diagonal
                  </h3>
                  <p className="text-foreground mb-4">
                    ✓ CORREGIDO: Las rutas de Herramientas ahora tienen la barra diagonal inicial.
                  </p>
                  <Button variant="outline" size="sm" disabled>
                    ✓ Aplicado
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    2. Dependencias Desactualizadas
                  </h3>
                  <p className="text-foreground mb-4">
                    Actualizar todas las dependencias a sus últimas versiones estables.
                  </p>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-secondary">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    3. Servidor Express Redundante
                  </h3>
                  <p className="text-foreground mb-4">
                    Evaluar si el servidor Express.js es necesario para un sitio estático.
                  </p>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Mejoras */}
          <TabsContent value="improvements" className="space-y-6 mt-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    1. Code Splitting y Lazy Loading
                  </h3>
                  <p className="text-foreground mb-4">
                    Implementar carga diferida para reducir el tiempo de carga inicial.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    2. Gestión de Estado Centralizada
                  </h3>
                  <p className="text-foreground mb-4">
                    Evaluar Zustand o Jotai para mejor manejo de estado complejo.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    3. Auditoría de Accesibilidad
                  </h3>
                  <p className="text-foreground mb-4">
                    Realizar auditoría completa de A11y, especialmente para gráficos.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Adiciones */}
          <TabsContent value="additions" className="space-y-6 mt-8">
            <Card className="p-8 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    1. Autenticación y Autorización
                  </h3>
                  <p className="text-foreground mb-4">
                    Implementar OAuth o JWT para proteger datos sensibles.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    2. Base de Datos Local (Offline-First)
                  </h3>
                  <p className="text-foreground mb-4">
                    Añadir IndexedDB o PouchDB para funcionalidad offline.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    3. Generador de Informes Personalizado
                  </h3>
                  <p className="text-foreground mb-4">
                    Mejorar exportación para permitir seleccionar métricas específicas.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Conclusión */}
        <section className="mt-16 p-8 bg-card border border-border rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Conclusión
          </h2>
          <p className="text-foreground mb-4">
            Este proyecto es un ejemplo de una aplicación web moderna y bien diseñada. 
            Las correcciones aplicadas mejoran la estabilidad y el rendimiento del sitio.
          </p>
        </section>
      </main>
    </div>
  );
}
