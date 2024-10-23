export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Pico Size Chatbot",
    year: 2024,
    description:
      "Built a chatbot from scratch only using Pytorch and numpy. Trained on school cluster.",
    url: "https://example.com/",
  },
  {
    title: "MealMapper - Columbia Startup Lab",
    year: 2024,
    description:
      "Delivered a full stack development of an AI meal tracking app for use by highschool sports teams and local nutritionist centers to quantitatively assess food cataloging, adopted by Los Altos High Football Team. Pytorch, YOLOv8, AWS",
    url: "https://example.com/",
  },
  {
    title: "EarliBird - UCSB New Venture Incubator",
    year: 2023,
    description:
      "Led development of a neural network-driven process for two system chemical plants using tensorflow, utilizing stochastic modeling and aspens equations of state to optimize plant cost, developed DLMPC package on Matlab",
    url: "https://example.com/",
  },
  {
    title: "SeePrint - UCSB New Venture Incubator",
    year: 2022,
    description:
      "Developed a natural language processes system using tensorflow uses the existing cash registers to optimize store item placement and supply chain restocking, while reducing upfront costs by 200x than cloud business",
    url: "https://example.com/",
  },
];
