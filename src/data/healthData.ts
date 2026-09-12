export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  location: string;
  experience: string;
  rating: number;
  availability: string[];
  fees: string;
  match: string;
};

export const doctors: Doctor[] = [
  {
    id: "dr-sofia-patel",
    name: "Dr. Sofia Patel",
    specialty: "Internal Medicine",
    location: "Meridian Clinic, Downtown",
    experience: "12 years",
    rating: 4.9,
    availability: ["Tue 10:30 AM", "Tue 12:00 PM", "Wed 9:00 AM"],
    fees: "$120",
    match: "93%",
  },
  {
    id: "dr-lucas-nguyen",
    name: "Dr. Lucas Nguyen",
    specialty: "Cardiology",
    location: "Lakeview Heart Center",
    experience: "15 years",
    rating: 4.8,
    availability: ["Mon 2:00 PM", "Wed 4:30 PM", "Thu 9:15 AM"],
    fees: "$180",
    match: "89%",
  },
  {
    id: "dr-maya-johnson",
    name: "Dr. Maya Johnson",
    specialty: "Family Medicine",
    location: "Northside Pediatrics",
    experience: "10 years",
    rating: 4.7,
    availability: ["Wed 11:00 AM", "Thu 1:15 PM", "Fri 10:00 AM"],
    fees: "$95",
    match: "86%",
  },
];

export const adminStats = [
  { label: "Appointments scheduled", value: "2,416", delta: "+14%" },
  { label: "Screening completion", value: "81%", delta: "+6.2%" },
  { label: "High-risk detection", value: "198", delta: "+9.7%" },
  { label: "Doctor satisfaction", value: "4.9/5", delta: "+0.2" },
];

export const queue = [
  {
    name: "Alicia Green",
    risk: "Medium risk",
    wait: "8 min",
    status: "Pending review",
  },
  { name: "Henry Scott", risk: "Low risk", wait: "14 min", status: "Ready" },
  {
    name: "Nina Patel",
    risk: "High risk",
    wait: "5 min",
    status: "Critical review",
  },
];

export const doctorReview = {
  patientName: "Alex Morgan",
  summary:
    "Moderate fatigue and elevated blood pressure trends over the last 8 weeks.",
  recommendations: [
    "Retest blood pressure in 7 days.",
    "Continue hydration tracking and daily activity.",
    "Review medication compliance before next consultation.",
  ],
};

export const initialScreening = {
  age: "29",
  gender: "Female",
  height: "168",
  weight: "64",
  bmi: "22.7",
  smoking: "No",
  alcohol: "Occasionally",
  exercise: "3x per week",
  diet: "Balanced",
  diabetes: "No",
  hypertension: "No",
  heartDisease: "No",
  kidneyDisease: "No",
  asthma: "No",
  cancer: "No",
  surgery: "No",
  fever: "No",
  headache: "Sometimes",
  cough: "No",
  chestPain: "No",
  shortnessOfBreath: "No",
  dizziness: "No",
  familyDiabetes: "Yes",
  familyCardio: "No",
  familyCancer: "No",
  medication: "Vitamin D",
  allergies: "None",
};

export const loginDefaults = {
  email: "alex.morgan@email.com",
  password: "••••••••",
  nextReview: "Tue · 10:30 AM",
};

export const bookingData = {
  paymentMethods: ["Card ending 9842", "HSA account", "Insurance"],
};

export const screeningOptions = {
  gender: ["Female", "Male", "Non-binary"],
  smoking: ["No", "Occasionally", "Daily"],
  alcohol: ["Occasionally", "Never", "Weekly"],
  exercise: ["3x per week", "1x per week", "Daily"],
  diet: ["Balanced", "Low sodium", "High sugar"],
  yesNo: ["Yes", "No"],
};

export const screeningChecks = {
  medical: [
    ["diabetes", "Diabetes"],
    ["hypertension", "Hypertension"],
    ["heartDisease", "Heart disease"],
    ["kidneyDisease", "Kidney disease"],
    ["asthma", "Asthma"],
    ["cancer", "Cancer"],
    ["surgery", "Surgery history"],
  ],
  symptoms: [
    ["fever", "Fever"],
    ["headache", "Headache"],
    ["cough", "Cough"],
    ["chestPain", "Chest pain"],
    ["shortnessOfBreath", "Shortness of breath"],
    ["dizziness", "Dizziness"],
  ],
} as const;

export const summaryData = {
  aiSummary: [
    "Blood pressure trending below concern threshold.",
    "Exercise and hydration patterns are consistent.",
    "Follow-up with your doctor recommended in 2 weeks.",
  ],
  doctorPacket: [
    "Latest screening questionnaire attached.",
    "Measurement timeline included.",
    "Medication and allergy profile reviewed.",
  ],
  recommendations: [
    "Continue current medication plan with weekly hydration tracking.",
    "Maintain exercise routine and add one extra walk each week.",
    "Bring blood pressure readings to the next consultation.",
  ],
};
