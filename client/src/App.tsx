import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardLayout from "@/components/DashboardLayout";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProgramOverview from "./pages/programa/ProgramOverview";
import AboutProgram from "./pages/programa/AboutProgram";
import ThreeSessions from "./pages/programa/ThreeSessions";
import Dynamics from "./pages/programa/Dynamics";
import Materials from "./pages/programa/Materials";
import FacilitatorGuide from "./pages/programa/FacilitatorGuide";
import Evaluation from "./pages/trabajo/Evaluation";
import EvaluationRegistry from "./pages/trabajo/EvaluationRegistry";
import ComparativeAnalysis from "./pages/trabajo/ComparativeAnalysis";
import GroupDashboard from "./pages/trabajo/GroupDashboard";
import Calendar from "./pages/herramientas/Calendar";
import AdvancedSearch from "./pages/herramientas/AdvancedSearch";
import ExecutiveSummary from "./pages/herramientas/ExecutiveSummary";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      
      {/* Programa Routes */}
      <Route path={"/programa"} component={ProgramOverview} />
      <Route path={"/programa/inicio"} component={ProgramOverview} />
      <Route path={"/programa/sobre"} component={AboutProgram} />
      <Route path={"/programa/sesiones"} component={ThreeSessions} />
      <Route path={"/programa/dinamicas"} component={Dynamics} />
      <Route path={"/programa/materiales"} component={Materials} />
      <Route path={"/programa/guia"} component={FacilitatorGuide} />
      
      {/* Trabajo Routes */}
      <Route path={"/trabajo"} component={Evaluation} />
      <Route path={"/trabajo/evaluacion"} component={Evaluation} />
      <Route path={"/trabajo/registro"} component={EvaluationRegistry} />
      <Route path={"/trabajo/analisis"} component={ComparativeAnalysis} />
      <Route path={"/trabajo/dashboard"} component={GroupDashboard} />
      
      {/* Herramientas Routes */}
      <Route path={"/herramientas"} component={Calendar} />
      <Route path={"/herramientas/calendario"} component={Calendar} />
      <Route path={"/herramientas/busqueda"} component={AdvancedSearch} />
      <Route path={"/herramientas/resumen"} component={ExecutiveSummary} />
      
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <DashboardLayout>
            <Router />
          </DashboardLayout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
