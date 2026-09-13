export type ScreeningForm = {
  age: string; gender: string; height: string; weight: string; bmi: string;
  smoking: string; alcohol: string; exercise: string; diet: string;
  diabetes: string; hypertension: string; heartDisease: string; kidneyDisease: string;
  asthma: string; cancer: string; surgery: string; fever: string; headache: string;
  cough: string; chestPain: string; shortnessOfBreath: string; dizziness: string;
  familyDiabetes: string; familyCardio: string; familyCancer: string;
  medication: string; allergies: string;
};

export const emptyScreeningForm: ScreeningForm = {
  age: "", gender: "", height: "", weight: "", bmi: "", smoking: "", alcohol: "",
  exercise: "", diet: "", diabetes: "No", hypertension: "No", heartDisease: "No",
  kidneyDisease: "No", asthma: "No", cancer: "No", surgery: "No", fever: "No",
  headache: "No", cough: "No", chestPain: "No", shortnessOfBreath: "No", dizziness: "No",
  familyDiabetes: "No", familyCardio: "No", familyCancer: "No", medication: "", allergies: "",
};
