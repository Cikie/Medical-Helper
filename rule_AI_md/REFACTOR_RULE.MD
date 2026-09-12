=====================
CODE REFACTORING RULES
=====================

When generating or refactoring React code, follow these mandatory rules:

1. FILE SIZE LIMIT

Any file larger than 200-300 lines must be analyzed and split into smaller components.

Avoid:
- God Components
- Massive JSX files
- Monolithic business logic

Target:

Pages:
< 200 lines

Components:
< 150 lines

Hooks:
Single responsibility only

=====================
COMPONENT EXTRACTION
=====================

Identify and extract:

- Repeated UI blocks
- Form sections
- Modal dialogs
- Table components
- Cards
- Filter panels
- Search bars
- Loading states
- Empty states
- Error states

Create reusable components inside:

src/shared/components/

Example:

shared/
└── components/
    ├── Button
    ├── Card
    ├── Modal
    ├── Input
    ├── Select
    ├── DataTable
    ├── SearchBar
    ├── EmptyState
    ├── LoadingView
    └── ErrorView

=====================
CSS PRESERVATION
=====================

CRITICAL REQUIREMENT:

When splitting files:

- Preserve existing UI appearance exactly
- Preserve all styling behavior
- Preserve all responsive layouts
- Preserve dark/light mode support
- Preserve animations
- Preserve transitions

Never remove styling accidentally.

After extraction:

- Verify all Tailwind classes are retained
- Verify CSS modules continue working
- Verify responsive behavior remains unchanged
- Verify visual output is pixel-identical

=====================
STYLE ORGANIZATION
=====================

Move reusable styles into:

shared/styles/

Examples:

shared/styles/
├── colors.ts
├── spacing.ts
├── typography.ts
├── shadows.ts
├── animations.ts

Avoid:

- Duplicated Tailwind utility groups
- Duplicated CSS Modules
- Repeated inline styles

=====================
BUSINESS LOGIC EXTRACTION
=====================

Extract all business logic from UI files.

Move:

API calls ->
services/

Data transformation ->
utils/

Complex state logic ->
hooks/

Validation ->
schemas/

Example:

features/
└── appointment/
    ├── ui/
    ├── hooks/
    ├── services/
    ├── schemas/
    ├── utils/
    └── types/

Pages and Components should be mostly presentational.

=====================
CUSTOM HOOK EXTRACTION
=====================

Extract logic into custom hooks whenever:

- State exceeds 5+ variables
- Effects exceed 2+ useEffect
- Business logic exceeds 30 lines
- API handling exists

Example:

useAppointmentBooking()
useHealthScreening()
usePatientProfile()
useDoctorSearch()

=====================
COMMON COMPONENT DETECTION
=====================

Before creating a new component:

Check whether a similar component already exists.

If 80% similar:

- Reuse existing component
- Add props/configuration
- Avoid duplication

Create:

Generic Components

NOT

AppointmentButton
DoctorButton
PatientButton

Prefer:

Button variant="appointment"
Button variant="doctor"

=====================
IMPORT RULES
=====================

Use barrel exports.

index.ts

Avoid:

../../../components/Button

Prefer:

@/shared/components

=====================
OUTPUT FORMAT
=====================

For every refactoring task provide:

1. Existing structure analysis

2. Refactoring plan

3. New folder structure

4. Extracted components list

5. Shared/Common components list

6. Custom hooks list

7. Files moved

8. CSS preservation checklist

9. Performance improvements

10. Final code

NEVER generate one huge file.

Always generate maintainable production-ready code following Clean Architecture and Feature-Sliced Design principles.