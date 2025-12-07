import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Target, Heart } from "lucide-react";

export default function AboutProgram() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Sobre el Programa</h1>
        <p className="text-lg text-muted-foreground">
          Conoce los objetivos y justificación del Programa de Convivencia Intercultural
        </p>
      </div>

      {/* Main Description */}
      <Card>
        <CardHeader>
          <CardTitle>¿Qué es el Programa de Convivencia Intercultural?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            El <strong>Programa de Convivencia Intercultural: La Fuerza de la Trayectoria</strong> es una iniciativa diseñada para promover la convivencia pacífica, reducir estereotipos y fortalecer la comunidad entre migrantes adultos.
          </p>
          <p>
            A través de dinámicas participativas y reflexivas, el programa busca crear espacios seguros donde los participantes puedan compartir sus experiencias, reconocer sus fortalezas colectivas y construir relaciones basadas en el respeto y la solidaridad.
          </p>
        </CardContent>
      </Card>

      {/* Objectives */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Objetivos del Programa
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Promover la Convivencia</p>
                  <p className="text-sm text-muted-foreground">Crear espacios seguros para la interacción intercultural</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Reducir Estereotipos</p>
                  <p className="text-sm text-muted-foreground">Cuestionar prejuicios mediante el diálogo reflexivo</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Fortalecer la Comunidad</p>
                  <p className="text-sm text-muted-foreground">Construir redes de apoyo y solidaridad</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Empoderar Participantes</p>
                  <p className="text-sm text-muted-foreground">Reconocer fortalezas y capacidades individuales</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Target Audience */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          Población Objetivo
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              El programa está diseñado para <strong>migrantes adultos</strong> que buscan:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Construir relaciones significativas en su nueva comunidad</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Comprender perspectivas diferentes a la suya</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Superar barreras culturales y lingüísticas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Participar activamente en su comunidad de acogida</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Key Principles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-600" />
          Principios Fundamentales
        </h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Respeto e Inclusión</CardTitle>
            </CardHeader>
            <CardContent>
              Valoramos todas las perspectivas y experiencias. Cada participante es respetado por su identidad única.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Participación Activa</CardTitle>
            </CardHeader>
            <CardContent>
              Los participantes son protagonistas de su propio aprendizaje. El diálogo y la reflexión son centrales.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Empoderamiento Colectivo</CardTitle>
            </CardHeader>
            <CardContent>
              Reconocemos que la fuerza está en la unidad. Juntos, podemos lograr cambios significativos.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
