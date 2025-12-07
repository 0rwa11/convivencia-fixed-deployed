# Convivencia - Programa de Convivencia Intercultural

**La Fuerza de la Trayectoria**

A comprehensive web application for managing and implementing the Intercultural Coexistence Program for adult migrants.

## 🎯 Overview

Convivencia is a modern, responsive web application designed to facilitate the implementation of an intercultural coexistence program. It provides tools for program management, session tracking, evaluation recording, and data analysis.

### Key Features

- **📋 Program Management**: Access complete program documentation, materials, and facilitator guides
- **📊 Evaluation Registry**: Create sessions with date selection and track evaluations before, during, and after program implementation
- **🗑️ Session Management**: Delete sessions with confirmation dialogs (fixes from original version)
- **📥 Data Export**: Download evaluation data in CSV format for external analysis
- **📅 Calendar Integration**: Schedule and manage program sessions
- **🔍 Advanced Search**: Find sessions and evaluations with filtering
- **📈 Analytics Dashboard**: View program impact metrics and comparative analysis
- **🌙 Dark/Light Theme**: Responsive design with theme support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or pnpm 10+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/0rwa11/convivencia.git
cd convivencia

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm preview
```

## 📁 Project Structure

```
convivencia_fix/
├── client/
│   ├── public/
│   │   └── pdfs/              # All program materials (PDFs)
│   ├── src/
│   │   ├── pages/
│   │   │   ├── programa/      # Program information pages
│   │   │   ├── trabajo/       # Evaluation and work pages
│   │   │   └── herramientas/  # Tools and utilities
│   │   ├── components/        # Reusable React components
│   │   ├── hooks/             # Custom React hooks
│   │   ├── contexts/          # React contexts
│   │   ├── App.tsx            # Main app component with routing
│   │   ├── main.tsx           # React entry point
│   │   └── index.css          # Global styles
│   └── index.html
├── server/                     # Backend placeholder
├── shared/                     # Shared types and constants
├── package.json
└── README.md
```

## 🎨 Technology Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Routing**: Wouter
- **State Management**: React Hooks + localStorage
- **Build Tool**: Vite
- **UI Components**: Radix UI

## 📖 Usage Guide

### Creating a Session

1. Navigate to **Trabajo → Registro de Evaluaciones**
2. Click **"Agregar Sesión"**
3. Select the session date (date picker)
4. Enter facilitator name and group name
5. Click **"Crear Sesión"**

### Deleting a Session

1. Find the session in the registry
2. Click the trash icon
3. Confirm deletion in the dialog

### Downloading Materials

1. Go to **Programa → Materiales**
2. Browse materials organized by category
3. Click **"Descargar"** on any material to download the PDF

### Exporting Evaluation Data

1. In **Trabajo → Registro de Evaluaciones**
2. Click **"Descargar CSV"** to export all session data

## 🔧 Development

### Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm check

# Format code
pnpm format
```

### Adding New Pages

1. Create a new component in `client/src/pages/`
2. Import it in `client/src/App.tsx`
3. Add a route in the `Router` function

### Customizing Styles

Global styles and theme variables are in `client/src/index.css`. Tailwind configuration is in `tailwind.config.ts`.

## 📊 Data Storage

The application uses **localStorage** for data persistence:
- Sessions are stored in `convivencia_sessions`
- Evaluations are stored in `convivencia_evaluations`

Data persists across browser sessions and is available offline.

## 🐛 Known Issues & Improvements

### Fixed Issues (from original version)
- ✅ Added date picker to "Agregar Sesión" (was missing)
- ✅ Added session deletion with confirmation (was unavailable)
- ✅ Removed dashboard warning icon

### Future Improvements
- [ ] Backend database integration (PostgreSQL/MongoDB)
- [ ] User authentication and multi-user support
- [ ] Real-time collaboration features
- [ ] Advanced analytics and reporting
- [ ] Mobile app version
- [ ] Multi-language support

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🙏 Acknowledgments

This application was developed to support the "Programa de Convivencia Intercultural: La Fuerza de la Trayectoria" initiative for adult migrants.

---

**Last Updated**: December 2025
**Version**: 1.0.0
