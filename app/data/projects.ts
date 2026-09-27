export type Project = {
  slug: string;
  label: string;
  title: string;
  tagline: string;
  track: "hardware" | "security" | "software";
  summary: string;
  detail: string;
  highlights: string[];
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "pke-fpga",
    label: "01",
    title: "Post-Quantum PKE on FPGA",
    tagline: "Grant-funded RTL implementation of a quantum-safe public-key cryptosystem.",
    track: "hardware",
    summary:
      "Classical public-key cryptography breaks under a sufficiently large quantum computer. This project implements a post-quantum key encapsulation mechanism directly in RTL on an FPGA — moving the algorithm from a research paper to silicon logic, with timing analysis and testbench verification.",
    detail:
      "Funded by a ₹1,27,500 research grant. The implementation covers key generation, encapsulation, and decapsulation in Verilog, targeting an FPGA development board. Work included block-level design, RTL simulation, synthesis, and place-and-route. The project sits at the boundary between hardware design and applied cryptography.",
    highlights: [
      "₹1,27,500 grant-funded research project",
      "Full RTL implementation in Verilog — not a software simulation",
      "Covers key generation, encapsulation, and decapsulation",
      "Timing-verified via synthesis and place-and-route",
    ],
    stack: ["Verilog", "FPGA", "RTL Design", "Cryptography", "Post-Quantum"],
    repoUrl: "https://github.com/LeoTheEmperor",
  },
  {
    slug: "ml-ids",
    label: "02",
    title: "ML-Based Intrusion Detection System",
    tagline: "A live threat-detection dashboard trained on the NSL-KDD dataset.",
    track: "security",
    summary:
      "Most network intrusion detection is rule-based — it catches known threats and misses novel ones. This system uses supervised machine learning to classify network traffic, with a live Streamlit dashboard that makes the model's decisions visible in real time.",
    detail:
      "Built end-to-end: data preprocessing, feature selection, model training (multiple classifiers benchmarked), and a Streamlit dashboard for live inference. Trained on the NSL-KDD dataset, a standard benchmark for network intrusion research. The dashboard is the part that matters — it bridges the gap between a trained model and something a security analyst can actually use.",
    highlights: [
      "End-to-end pipeline: data to model to live dashboard",
      "Trained and benchmarked on NSL-KDD, a standard IDS research dataset",
      "Streamlit dashboard for real-time traffic classification",
      "Multiple classifiers compared with documented metrics",
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "NSL-KDD", "ML"],
    repoUrl: "https://github.com/LeoTheEmperor/ml-idm",
  },
  {
    slug: "verilog-buzzer",
    label: "03",
    title: "8-Player Quiz Buzzer System",
    tagline: "Priority-locking hardware buzzer with live scoring and 7-segment display.",
    track: "hardware",
    summary:
      "A fully hardware-implemented 8-player buzzer system with priority locking, live scoring, and 7-segment display multiplexing. More complex than it sounds: the priority arbitration and display multiplexing are non-trivial in digital logic.",
    detail:
      "Designed in Verilog with a comprehensive testbench. Handles simultaneous button presses via priority encoding, maintains per-player scores, and drives a multiplexed 7-segment display. The testbench covers edge cases including simultaneous presses and score overflow.",
    highlights: [
      "8-player support with hardware priority arbitration",
      "Real-time score tracking and 7-segment display multiplexing",
      "Comprehensive testbench covering simultaneous-press edge cases",
      "Pure digital logic, no microcontroller",
    ],
    stack: ["Verilog", "Digital Logic", "FPGA", "Testbench Design"],
    repoUrl: "https://github.com/LeoTheEmperor",
  },
  {
    slug: "rnn-sentiment",
    label: "04",
    title: "RNN / GRU / LSTM Sentiment Analysis",
    tagline: "Comparative study of recurrent architectures on text classification.",
    track: "software",
    summary:
      "A comparative implementation of three recurrent architectures — RNN, GRU, and LSTM — for sentiment classification. The goal was not just to run the models but to understand where and why performance diverges across architectures.",
    detail:
      "Implemented and benchmarked all three architectures. Results: RNN 0.82 accuracy, GRU 0.84, LSTM 0.85. A Word2Vec + LSTM variant was developed as an exploratory extension. The comparison makes the gradient-flow tradeoffs between architectures concrete rather than theoretical.",
    highlights: [
      "RNN 0.82, GRU 0.84, LSTM 0.85 accuracy progression",
      "Word2Vec + LSTM explored as an extension",
      "Architecture comparison grounded in gradient-flow analysis",
    ],
    stack: ["Python", "PyTorch", "Word2Vec", "NLP", "Deep Learning"],
    repoUrl: "https://github.com/LeoTheEmperor",
  },
  {
    slug: "wellnest",
    label: "05",
    title: "WellNest",
    tagline: "Solo full-stack mental wellness app built with React and Flask.",
    track: "software",
    summary:
      "A full-stack wellness application built solo. React frontend, Flask backend. Built to understand the full vertical of a web application rather than let a framework abstract it away.",
    detail:
      "Solo project covering frontend (React), backend (Flask), database design, and deployment. The focus was on understanding the full stack without shortcuts.",
    highlights: [
      "Solo end-to-end build: frontend, backend, database, deployment",
      "React + Flask stack",
    ],
    stack: ["React", "Flask", "Python", "Full-Stack"],
    repoUrl: "https://github.com/LeoTheEmperor",
  },
];
