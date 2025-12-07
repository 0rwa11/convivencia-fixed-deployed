import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, BarChart3, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Programa de Convivencia Intercultural
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            La Fuerza de la Trayectoria
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un programa integral para promover la convivencia intercultural, reducir estereotipos y fortalecer la comunidad entre migrantes adultos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/programa/sobre">
              <a className="cursor-pointer">
                <Button size="lg">Conocer el Programa</Button>
              </a>
            </Link>
            <Link href="/trabajo/registro">
              <a className="cursor-pointer">
                <Button size="lg" variant="outline">Comenzar Evaluación</Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Características Principales</h2>
          <p className="text-lg text-muted-foreground">Todo lo que necesitas para implementar el programa</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Contenido Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Acceso a todas las dinámicas, materiales y guías del facilitador
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Evaluación Integrada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Registra y analiza el impacto del programa en tiempo real
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Gestión de Grupos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Administra múltiples grupos y sesiones fácilmente
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="w-8 h-8 text-orange-600 mb-2" />
              <CardTitle>Herramientas Avanzadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Búsqueda, calendario y resumen ejecutivo de resultados
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Acceso Rápido</h2>
          <p className="text-lg text-muted-foreground">Navega a las secciones principales</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/programa/inicio">
            <a className="group cursor-pointer">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">📚 Programa</CardTitle>
                  <CardDescription>Información completa del programa</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Consulta los objetivos, sesiones, dinámicas y materiales.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

          <Link href="/trabajo/evaluacion">
            <a className="group cursor-pointer">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="group-hover:text-green-600 transition-colors">📊 Trabajo</CardTitle>
                  <CardDescription>Evaluación y análisis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Registra evaluaciones y analiza el impacto del programa.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>

          <Link href="/herramientas/calendario">
            <a className="group cursor-pointer">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="group-hover:text-purple-600 transition-colors">🛠️ Herramientas</CardTitle>
                  <CardDescription>Calendario y búsqueda</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Planifica sesiones y busca evaluaciones con filtros avanzados.
                  </p>
                </CardContent>
              </Card>
            </a>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12 text-white text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">¿Listo para comenzar?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Inicia tu primera sesión y comienza a registrar el impacto del programa de convivencia intercultural.
        </p>
        <Link href="/trabajo/registro">
          <a className="cursor-pointer inline-block">
            <Button size="lg" variant="secondary">
              Crear Primera Sesión
            </Button>
          </a>
        </Link>
      </section>
    </div>
  );
}
