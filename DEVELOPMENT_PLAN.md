# Convivencia Intercultural Program - Development Plan

**Project:** Rebuild and improve the Convivencia application
**Status:** In Progress
**Target:** All critical fixes and enhancements

## Application Architecture Overview

The Convivencia application is a comprehensive tool for managing an intercultural coexistence program. It consists of three main sections:

### 1. **Programa** (Program Information)
- Inicio (Home/Overview)
- Sobre el Programa (About the Program)
- Las 3 Sesiones (The 3 Sessions)
- Dinámicas (Dynamics/Activities)
- Materiales (Materials/Downloads)
- Guía del Facilitador (Facilitator's Guide)

### 2. **Trabajo** (Work/Evaluation)
- Evaluación (Evaluation Framework)
- Registro de Evaluaciones (Evaluation Registry) - **WITH DATE SELECTION & DELETION**
- Análisis Comparativo (Comparative Analysis)
- Dashboard de Grupos (Group Dashboard)

### 3. **Herramientas** (Tools)
- Calendario (Calendar/Session Planning)
- Búsqueda Avanzada (Advanced Search)
- Resumen Ejecutivo (Executive Summary)

## Critical Fixes Required

1. **Dashboard Warning Icon** - Remove the persistent warning icon and "Recargar Página" button
2. **Date Selection in Agregar Sesión** - Add proper date picker for session creation
3. **Session Deletion** - Implement delete functionality for sessions
4. **Executive Summary Text** - Fix misleading text when data is empty
5. **Data Persistence** - Implement localStorage for session data

## Development Phases

### Phase 1: Architecture & Setup
- [ ] Define data models and state management
- [ ] Create reusable UI components
- [ ] Set up routing structure
- [ ] Plan localStorage schema

### Phase 2: Core Layout
- [ ] Create main navigation (top bar with dropdown menus)
- [ ] Build page layout wrapper
- [ ] Implement responsive design
- [ ] Add theme support

### Phase 3: Programa Section
- [ ] Create content pages for all subsections
- [ ] Add rich content presentation
- [ ] Implement download functionality for materials
- [ ] Add visual enhancements

### Phase 4: Trabajo Section
- [ ] Build evaluation registry form
- [ ] Implement date picker for session creation
- [ ] Add session deletion with confirmation
- [ ] Create data table for evaluation results
- [ ] Build comparative analysis view
- [ ] Create group dashboard

### Phase 5: Herramientas Section
- [ ] Build calendar view for session planning
- [ ] Implement advanced search with filters
- [ ] Create executive summary with charts
- [ ] Add export functionality (CSV, Excel, PDF)

### Phase 6: Data & Integration
- [ ] Implement localStorage persistence
- [ ] Add data export features
- [ ] Create data import functionality
- [ ] Add validation and error handling

### Phase 7: Testing & Polish
- [ ] Test all features across browsers
- [ ] Verify responsive design
- [ ] Test data persistence
- [ ] Performance optimization

## Key Features to Implement

### Session Management
- Create sessions with date, facilitator name, and group
- Edit session details
- **Delete sessions with confirmation dialog**
- View session history

### Evaluation Data
- Record evaluations before, during, and after sessions
- Track indicators: participation, respect, stereotype reduction, etc.
- Store data in localStorage
- Export data as CSV/Excel

### Data Analysis
- Compare before/after metrics
- Generate charts and visualizations
- Create executive summary reports
- Filter and search evaluations

### Materials Management
- Organize downloadable PDFs
- Categorize by type (strategies, soft versions, provocative versions)
- Add download all functionality

## Technology Stack
- **Framework:** React 19 + Wouter (routing)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **State Management:** React hooks + localStorage
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod validation
- **UI Components:** shadcn/ui (Button, Card, Dialog, Select, Input, etc.)

## Data Models

### Session
```typescript
{
  id: string;
  date: Date;
  facilitator: string;
  group: string;
  createdAt: Date;
}
```

### Evaluation
```typescript
{
  id: string;
  sessionId: string;
  phase: 'before' | 'during' | 'after';
  data: {
    grouping: string;
    discomfort: string;
    tensions: string;
    communication: string;
    mixedInteractions: number;
    participation: string;
    respect: string;
    openness: string;
    laughter: string;
    mixedObserved: string;
    // ... more fields
  };
}
```

## Success Criteria

1. ✅ No warning icon on dashboard
2. ✅ Date picker works in session creation
3. ✅ Sessions can be deleted
4. ✅ Executive summary shows accurate data
5. ✅ All data persists in localStorage
6. ✅ Export functionality works
7. ✅ Responsive design on mobile and desktop
8. ✅ All navigation works smoothly

## Timeline
- Phase 1-2: Core setup and layout (2 hours)
- Phase 3: Programa section (1.5 hours)
- Phase 4: Trabajo section (2 hours)
- Phase 5: Herramientas section (1.5 hours)
- Phase 6: Data integration (1 hour)
- Phase 7: Testing and polish (1 hour)
- **Total:** ~9 hours

---

**Author:** Manus AI
**Last Updated:** December 7, 2025
