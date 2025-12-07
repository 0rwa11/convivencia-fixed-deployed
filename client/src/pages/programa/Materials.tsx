import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Package } from "lucide-react";

const materials = [
  { name: "Guía del Facilitador", file: "Guia_Facilitador.pdf", category: "Guías" },
  { name: "Carteles Grandes Sesiones", file: "Carteles_Grandes_Sesiones.pdf", category: "Materiales" },
  { name: "Certificado de Convivencia", file: "Certificado_Convivencia.pdf", category: "Certificados" },
  { name: "Árbol de Contribución - Plantilla", file: "D10_Arbol_Contribucion_Plantilla.pdf", category: "Dinámicas" },
  { name: "Mapa de Recursos y Metas - Tarjetas", file: "D11_Mapa_Recursos_Metas_Tarjetas.pdf", category: "Dinámicas" },
  { name: "La Maleta Común - Lista", file: "D3_Maleta_Comun_Lista.pdf", category: "Dinámicas" },
  { name: "La Maleta Común - Tarjetas", file: "D3_Maleta_Comun_Tarjetas.pdf", category: "Dinámicas" },
  { name: "Maleta - Estereotipos Flashcards", file: "D3_Maleta_Estereotipos_Flashcards.pdf", category: "Dinámicas" },
  { name: "Termómetro de Estereotipos - Tarjetas", file: "D4_Termometro_Estereotipo_Tarjetas.pdf", category: "Dinámicas" },
  { name: "Termómetro de Estereotipos - Lista", file: "D4_Termometro_Estereotipo_Lista.pdf", category: "Dinámicas" },
];

const categories = ["Guías", "Materiales", "Dinámicas", "Certificados"];

export default function Materials() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Materiales Descargables</h1>
        <p className="text-lg text-muted-foreground">
          Accede a todos los recursos necesarios para implementar el programa
        </p>
      </div>

      {categories.map((category) => {
        const categoryMaterials = materials.filter((m) => m.category === category);
        return (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold">{category}</h2>
            </div>
            <div className="grid gap-3">
              {categoryMaterials.map((material) => (
                <Card key={material.file} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-semibold">{material.name}</p>
                          <p className="text-sm text-muted-foreground">PDF Document</p>
                        </div>
                      </div>
                      <a href={`/pdfs/${material.file}`} download>
                        <Button size="sm" className="gap-2">
                          <Download className="w-4 h-4" />
                          Descargar
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
