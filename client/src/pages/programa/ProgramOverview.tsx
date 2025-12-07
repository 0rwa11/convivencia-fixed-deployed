import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function ProgramOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Programa de Convivencia Intercultural</h1>
        <p className="text-lg text-muted-foreground">La Fuerza de la Trayectoria</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/programa/sobre">
          <a className="group cursor-pointer">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Sobre el Programa</CardTitle>
                <CardDescription>Conoce los objetivos y justificación</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Descubre la misión y los objetivos del Programa de Convivencia Intercultural.
                </p>
              </CardContent>
            </Card>
          </a>
        </Link>

        <Link href="/programa/sesiones">
          <a className="group cursor-pointer">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Las 3 Sesiones</CardTitle>
                <CardDescription>Estructura del programa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explora la estructura de las tres sesiones del programa.
                </p>
              </CardContent>
            </Card>
          </a>
        </Link>

        <Link href="/programa/dinamicas">
          <a className="group cursor-pointer">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Dinámicas</CardTitle>
                <CardDescription>Actividades detalladas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Consulta las dinámicas y actividades de cada sesión.
                </p>
              </CardContent>
            </Card>
          </a>
        </Link>

        <Link href="/programa/materiales">
          <a className="group cursor-pointer">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Materiales</CardTitle>
                <CardDescription>Recursos descargables</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Descarga todos los materiales y recursos necesarios.
                </p>
              </CardContent>
            </Card>
          </a>
        </Link>

        <Link href="/programa/guia">
          <a className="group cursor-pointer">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">Guía del Facilitador</CardTitle>
                <CardDescription>Instrucciones y consejos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Consulta la guía completa para facilitar el programa.
                </p>
              </CardContent>
            </Card>
          </a>
        </Link>
      </div>
    </div>
  );
}
