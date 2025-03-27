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
      "Engineered an AI-powered meal tracking application, implementing computer vision models (PyTorch, YOLOv8) for automated food recognition and nutritional estimation from images. Deployed the deep learning system on GCP for use by sports team nutritionists.",
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
    title: "SeePrint - UCSB New Venture Incubator",
    year: 2022,
    description:
      "Developed and deployed neural network systems on AWS to optimize OSIsoft PI process control, achieving up to 20% efficiency gains. Implemented data pipelines integrating plant sensor data for cloud-based analytics and model training/validation.",

  },
  {
    title: "EarliBird - UCSB New Venture Incubator",
    year: 2021,
    description:
      "Developed a TensorFlow-based natural language processing system, including custom tokenization, to analyze transaction patterns for optimizing retail store item placement and supply chain logistics, significantly reducing operational costs compared to cloud alternatives.",

  }
];
