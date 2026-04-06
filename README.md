# Wealth Management — Clients Listing

Angular 19 + PrimeNG 19 enterprise client management interface.

## Architecture

```
src/
├── app/
│   ├── layout/
│   │   ├── sidebar.component.ts        # Fixed vertical icon sidebar
│   │   └── header.component.ts         # Top bar with branding & user actions
│   ├── clients/
│   │   ├── clients-page.component.ts   # Page layout: breadcrumb, tabs, actions
│   │   └── clients-table.component.ts  # PrimeNG p-table with sorting & pagination
│   ├── shared/
│   │   ├── table-cell-address.component.ts
│   │   └── table-cell-phone.component.ts
│   ├── data/
│   │   └── clients.data.ts             # 35 mock client records
│   ├── app.component.ts
│   ├── app.config.ts                   # PrimeNG Aura preset + animations
│   └── app.routes.ts
└── styles/
    └── _variables.scss                 # Design tokens (single source of truth)
```

## Design System

- **Primary:** #2F6F5E (green)
- **Font:** Nunito (400/500/600/700) via @fontsource/nunito
- **Spacing:** 8pt grid (4, 8, 12, 16, 24px)
- **Sidebar:** 64px fixed | **Header:** 56px fixed
- **Table rows:** 56px height, 12x16px cell padding

All values are CSS custom properties in :root — override them to re-theme.

## Setup

```bash
npm install
ng serve        # http://localhost:4200
ng build        # production build
```

## Features

- Column sorting (click table headers)
- Pagination with page-size selector (10/25/50)
- Tab switching (Individual / CRM / Business / Trusts)
- Hover states on rows and buttons
- PrimeNG Aura preset overridden to match enterprise design
- Fully standalone components (no NgModules)
