export interface Project {
  title: string;
  year: number;
  description: string;
  url?: string;
  pdf?: string;
}

export const projects: Project[] = [
  {
    title: "Time Series Prediction",
    year: 2024,
    description:
      "Our project enhances the LSTM-FCN architecture for time series classification, incorporating modifications like SE blocks, achieving improved performance across datasets compared to replication models.",
    pdf: "/pdfs/LSTM_FCN.pdf"
  },
  {
    title: "Pico Size Chatbot",
    year: 2024,
    description:
      "Built a chatbot for you to ask about my experience in different projects and jobs. I built this from scratch only using Pytorch, numpy, and AWS. Trained on school cluster.",

  },
  {
    title: "MealMapper - Columbia Startup Lab",
    year: 2024,
    description:
      "Delivered a full stack development of an AI meal tracking app for use by highschool sports teams and local nutritionist centers to quantitatively assess food cataloging, adopted by Los Altos High Football Team. Pytorch, YOLOv8, AWS",
    url: "https://earlibird.work/en"
  },
  {
    title: "Senior Design 2 - UCSB ",
    year: 2024,
    description:
      "I developed a conceptual process design and conducted an analysis for a carbon-negative dimethyl carbonate (DMC) plant, including the evaluation of equipment and economic factors. After optimizing the design, I found profitability improvements, by leveraging carbon credits in the European market.",
    pdf: "/pdfs/DMCProduction.pdf",
  },
  {
    title: "Senior Design 1 - UCSB ",
    year: 2023,
    description:
      "I preformed a techno-economic analysis for a profitable and carbon-neutral steam ethane cracker. The optimization covered distillation, reactor, and heat exchanger networks, with optimized conditions yielding favorable profitability metrics.",
    pdf: "/pdfs/ThermalCracking.pdf",
  },
  {
    title: "EarliBird - UCSB New Venture Incubator",
    year: 2023,
    description:
      "Developed a natural language processes system using tensorflow uses the existing cash registers to optimize store item placement and supply chain restocking, while reducing upfront costs by 200x than cloud business",

  },
  {
    title: "SeePrint - UCSB New Venture Incubator",
    year: 2022,
    description:
      "Developed neural netowrk system to optimize OSIsoft PI, and lead Scrum, I modled the schimal process with Python and Aspen Dynamics",

  },
];
