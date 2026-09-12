Act as a Senior Staff Software Engineer, Senior Product Designer, Healthcare Domain Expert, and React Architect.

Design and generate a complete medical healthcare web platform where patients can register medical appointments and complete a pre-consultation health screening before meeting a doctor.

The system must follow modern software architecture principles, React best practices, accessibility standards, scalable frontend architecture, and enterprise-level code quality.

=====================
BUSINESS OBJECTIVE
=====================

Build a healthcare platform that allows users to:

1. Create and manage accounts.
2. Search for hospitals, clinics, and doctors.
3. Book medical appointments online.
4. Complete a health pre-screening questionnaire.
5. Detect possible chronic diseases and risk factors.
6. Generate a health summary report.
7. Send screening results to doctors before consultation.
8. Allow doctors to review screening information before meeting patients.
9. Reduce waiting time and improve diagnosis efficiency.

=====================
TARGET USERS
=====================

Patient:
- Register medical appointments
- Manage medical history
- Complete health screening forms
- Upload health documents
- Receive recommendations

Doctor:
- View appointment queue
- Review patient pre-screening reports
- View medical history timeline
- Add diagnosis notes

Admin:
- Manage hospitals
- Manage doctors
- Manage appointments
- Manage questionnaire forms
- Analytics dashboard

=====================
CORE FEATURES
=====================

PATIENT PORTAL

1. Authentication
- Email login
- Phone login
- OTP verification
- Social login
- Password recovery
- MFA support

2. Patient Dashboard
- Upcoming appointments
- Appointment history
- Screening history
- Health reports
- Notifications

3. Doctor Search
- Search by specialty
- Search by location
- Search by symptoms
- Search by hospital

4. Appointment Booking
- Multi-step booking flow
- Doctor selection
- Time slot selection
- Payment integration
- Booking confirmation

5. Health Screening

The patient completes a dynamic questionnaire.

Categories:

Personal Information:
- Age
- Gender
- Height
- Weight
- BMI

Lifestyle:
- Smoking
- Alcohol
- Exercise frequency
- Diet habits

Medical History:
- Diabetes
- Hypertension
- Heart disease
- Kidney disease
- Asthma
- Cancer
- Surgery history

Symptoms:
- Fever
- Headache
- Cough
- Chest pain
- Shortness of breath
- Dizziness

Family History:
- Diabetes
- Cardiovascular disease
- Cancer

Medication:
- Current medication
- Allergies

Risk Assessment Engine:
- Risk score calculation
- Disease screening indicators
- Health recommendations
- Priority level

Output:

Low Risk
Medium Risk
High Risk
Emergency Review Required

Generate:
- AI summary
- Screening report
- Doctor review packet

=====================
DOCTOR PORTAL
=====================

Doctor dashboard should provide:

Patient Profile
Medical History
Screening Result Timeline
Appointments
Notes
Treatment Plans

Doctor can:

- Review risk score
- Review questionnaire responses
- Add remarks
- Export PDF reports

=====================
ADMIN PORTAL
=====================

Analytics dashboard including:

- Appointment volume
- Screening completion rate
- Disease trend reports
- User growth metrics
- Doctor performance

=====================
DESIGN REQUIREMENTS
=====================

Create a professional medical UI inspired by:

- Microsoft Fluent Design
- NHS Digital
- Mayo Clinic
- Cleveland Clinic
- Google Material 3

Visual style:

- Clean
- Modern
- Trustworthy
- Human-centered

Colors:

Primary:
#0066FF

Secondary:
#00B2A9

Success:
#22C55E

Warning:
#F59E0B

Danger:
#EF4444

Background:
#F8FAFC

Use:

- Card-based layouts
- Large spacing system
- Accessible typography
- WCAG AA compliance
- Responsive design

Breakpoints:

Mobile
Tablet
Desktop
4K Monitor

=====================
UX REQUIREMENTS
=====================

Create complete user journeys for:

Patient Registration

Doctor Search

Appointment Booking

Pre-Screening Flow

Doctor Review Flow

Admin Management Flow

Include:

- Empty states
- Loading states
- Error states
- Offline states
- Success states

=====================
TECHNICAL REQUIREMENTS
=====================

Frontend Stack:

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Zustand
- React Hook Form
- Zod
- Axios
- TailwindCSS
- shadcn/ui

State Management:

- Feature-based architecture
- Domain-driven modules
- Typed APIs
- Global state only when necessary

=====================
ARCHITECTURE
=====================

Follow:

- Clean Architecture
- SOLID Principles
- Feature Slice Design
- Separation of Concerns
- Dependency Injection
- Reusable Components
- Testability First

Suggested structure:

src/
 ├── app
 ├── shared
 ├── entities
 ├── features
 ├── widgets
 ├── pages
 ├── processes

Every feature must include:

- UI
- Hooks
- Services
- Types
- Validation
- API layer

=====================
PERFORMANCE
=====================

Implement:

- Lazy loading
- Route splitting
- Optimistic updates
- Memoization
- Virtualization
- Image optimization
- Suspense boundaries

Target:

Lighthouse >= 95

=====================
SECURITY
=====================

Implement:

- HIPAA-inspired security considerations
- GDPR considerations
- Secure authentication
- JWT refresh flow
- RBAC permissions
- Input sanitization
- API rate limits
- Sensitive data masking

=====================
TESTING
=====================

Generate:

Unit Testing:
- Vitest

Component Testing:
- React Testing Library

E2E:
- Playwright

Coverage target:
>80%

=====================
DELIVERABLES
=====================

Generate:

1. Complete Information Architecture

2. User Flows

3. Sitemap

4. Design System

5. Screen Inventory

6. High-Fidelity UI Layouts

7. Database Schema

8. API Design

9. React Project Structure

10. Component Architecture

11. Clean Architecture Diagram

12. State Management Strategy

13. Validation Strategy

14. Security Architecture

15. Testing Strategy

16. Folder Structure

17. Coding Standards

18. Example TypeScript Interfaces

19. Example API Contracts

20. Development Roadmap

Provide everything in a production-ready enterprise-level format suitable for a real healthcare system.