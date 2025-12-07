import { useState } from "react";
import { useEvaluationData } from "@/hooks/useEvaluationData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Download, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

export default function EvaluationRegistry() {
  const { sessions, createSession, deleteSession, getSessionEvaluations, exportAsCSV } =
    useEvaluationData();
  const [openDialog, setOpenDialog] = useState(false);
  const [expandedSession, setExpandedSession] = useState<string | null>(null);
  const [deleteSessionId, setDeleteSessionId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    facilitator: "",
    group: "",
  });

  const handleCreateSession = () => {
    if (!formData.facilitator.trim() || !formData.group.trim() || !formData.date) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    createSession({
      date: formData.date,
      facilitator: formData.facilitator,
      group: formData.group,
    });

    toast.success("Sesión creada exitosamente");
    setFormData({
      date: new Date().toISOString().split("T")[0],
      facilitator: "",
      group: "",
    });
    setOpenDialog(false);
  };

  const handleDeleteSession = (sessionId: string) => {
    deleteSession(sessionId);
    toast.success("Sesión eliminada exitosamente");
    setDeleteSessionId(null);
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Registro de Evaluaciones</h1>
        <p className="text-lg text-muted-foreground">
          Gestiona las sesiones y registra las evaluaciones del programa
        </p>
      </div>

      {/* Instructions Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Instrucciones</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-800 space-y-2">
          <p>
            <strong>1. ANTES:</strong> Completa esta sección al inicio del programa para establecer la línea base
          </p>
          <p>
            <strong>2. DURANTE:</strong> Registra observaciones inmediatamente después de cada sesión
          </p>
          <p>
            <strong>3. DESPUÉS:</strong> Completa al final del programa para medir cambios
          </p>
          <p>
            <strong>4.</strong> Descarga los datos en CSV o Excel para análisis comparativo
          </p>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Agregar Sesión
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nueva Sesión</DialogTitle>
              <DialogDescription>
                Ingresa los detalles de la nueva sesión. Asegúrate de seleccionar la fecha correcta.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="date">Fecha de la Sesión *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="facilitator">Nombre del Facilitador *</Label>
                <Input
                  id="facilitator"
                  placeholder="Ej: Juan García"
                  value={formData.facilitator}
                  onChange={(e) =>
                    setFormData({ ...formData, facilitator: e.target.value })
                  }
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="group">Grupo *</Label>
                <Input
                  id="group"
                  placeholder="Ej: Grupo 1"
                  value={formData.group}
                  onChange={(e) =>
                    setFormData({ ...formData, group: e.target.value })
                  }
                  className="mt-1"
                />
              </div>
              <Button onClick={handleCreateSession} className="w-full">
                Crear Sesión
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          className="gap-2"
          onClick={exportAsCSV}
          disabled={sessions.length === 0}
        >
          <Download className="w-4 h-4" />
          Descargar CSV
        </Button>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        {sessions.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                No hay sesiones registradas. Crea la primera sesión para comenzar.
              </p>
            </CardContent>
          </Card>
        ) : (
          sessions.map((session) => {
            const evaluations = getSessionEvaluations(session.id);
            const isExpanded = expandedSession === session.id;

            return (
              <Card key={session.id} className="overflow-hidden">
                <div
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/50 transition-colors"
                  onClick={() =>
                    setExpandedSession(isExpanded ? null : session.id)
                  }
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <h3 className="font-semibold">{session.group}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(session.date)} • Facilitador: {session.facilitator}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {evaluations.length} evaluaciones
                    </span>
                    <AlertDialog open={deleteSessionId === session.id} onOpenChange={(open) => {
                      if (!open) setDeleteSessionId(null);
                    }}>
                      <AlertDialog open={deleteSessionId === session.id}>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Eliminar Sesión</AlertDialogTitle>
                            <AlertDialogDescription>
                              ¿Estás seguro de que deseas eliminar esta sesión? Se eliminarán todas las evaluaciones asociadas. Esta acción no se puede deshacer.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <div className="flex gap-3 justify-end">
                            <AlertDialogCancel onClick={() => setDeleteSessionId(null)}>
                              Cancelar
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteSession(session.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Eliminar
                            </AlertDialogAction>
                          </div>
                        </AlertDialogContent>
                      </AlertDialog>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteSessionId(session.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </AlertDialog>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-border px-6 py-4 bg-muted/50">
                    {evaluations.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        No hay evaluaciones registradas para esta sesión.
                      </p>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Fase</TableHead>
                              <TableHead>Agrupación</TableHead>
                              <TableHead>Malestar</TableHead>
                              <TableHead>Tensiones</TableHead>
                              <TableHead>Comunicación</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {evaluations.map((evaluation) => (
                              <TableRow key={evaluation.id}>
                                <TableCell className="capitalize">{evaluation.phase}</TableCell>
                                <TableCell>{evaluation.grouping}</TableCell>
                                <TableCell>{evaluation.discomfort}</TableCell>
                                <TableCell>{evaluation.tensions}</TableCell>
                                <TableCell>{evaluation.communication}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}
