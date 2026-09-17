// Shared content for the v2 site: publications feed both index.html (highlights)
// and publications.html (full searchable/filterable list).

const SKILLS = [
    "AI agents",
    "Harness optimization",
    "Agentic evals & hillclimbing",
    "LLM evals & benchmarking",
    "Certified machine learning",
    "Optimization",
    "Adversarial robustness",
    "Formal methods"
];

const TOOLS = [
    "Python", "C/C++", "PyTorch", "TensorFlow", "W&B", "transformers",
    "Pydantic AI", "Langfuse", "Unsloth", "Qdrant", "Temporal",
    "git", "CI/CD", "AWS", "Docker", "React", "TypeScript"
];

const HONORS = [
    {
        title: "Outstanding Paper Award",
        org: "European Lighthouse on Secure and Safe AI — 2nd Workshop on Formal Verification of ML @ ICML",
        year: 2023
    },
    {
        title: "Honorable Mention, Using Computer Vision for Social Good",
        org: "LauzHack",
        year: 2018
    },
    {
        title: "Graduate Research Fellowship",
        org: "Institute for Systems and Robotics",
        year: 2017
    },
    {
        title: "Undergraduate Research Fellowship",
        org: "Institute for Systems and Robotics",
        year: 2016
    },
    {
        title: "Undergraduate Academic Excellency Award",
        org: "Técnico Lisboa",
        year: "2013–2016"
    }
];

const PUBLICATIONS = [
    {
        title: "Know Thy Judge: On the Robustness Meta-Evaluation of LLM Safety Judges",
        authors: "<strong>F. Eiras</strong>, E. Zemour, E. Lin, V. Mugunthan",
        venue: "ICLR Workshop (ICBINB), 2025",
        venueHref: "https://sites.google.com/view/icbinb-2025",
        year: 2025,
        type: "workshop",
        highlight: true,
        links: [
            { label: "paper", href: "https://www.arxiv.org/abs/2503.04474" }
        ]
    },
    {
        title: "Do as I do (Safely): Mitigating Task-Specific Fine-tuning Risks in Large Language Models",
        authors: "<strong>F. Eiras</strong>, A. Petrov, P. H. S. Torr, M. Pawan Kumar, A. Bibi",
        venue: "ICLR, 2025",
        venueHref: "https://iclr.cc/Conferences/2025",
        year: 2025,
        type: "conference",
        highlight: true,
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2406.10288" }
        ]
    },
    {
        title: "Risks and Opportunities of Open-Source Generative AI",
        authors: "<strong>F. Eiras</strong>, A. Petrov, B. Vidgen, [...], T. Darrell, Y. Lee, J. Foerster",
        venue: "arXiv, 2024",
        year: 2024,
        type: "preprint",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2405.08597" }
        ]
    },
    {
        title: "Near to Mid-term Risks and Opportunities of Open-Source Generative AI",
        authors: "<strong>F. Eiras</strong>, A. Petrov, B. Vidgen, [...], T. Darrell, Y. Lee, J. Foerster",
        venue: "ICML - Position Paper, 2024",
        venueHref: "https://icml.cc/Conferences/2024",
        year: 2024,
        type: "conference",
        award: "oral",
        highlight: true,
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2404.17047" }
        ]
    },
    {
        title: "Efficient Error Certification for Physics-Informed Neural Networks",
        authors: "<strong>F. Eiras</strong>, R. Bunel, K. Dj Dvijotham, A. Bibi, P. H. S. Torr, M. Pawan Kumar",
        venue: "ICML, 2024",
        venueHref: "https://icml.cc/Conferences/2024",
        year: 2024,
        type: "conference",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2305.10157" }
        ]
    },
    {
        title: "Segment, Select, Correct: A Framework for Weakly-Supervised Referring Segmentation",
        authors: "<strong>F. Eiras</strong>, Kemal Oksuz, A. Bibi, P. H. S. Torr, P. K. Dokania",
        venue: "ECCV Workshop Proceedings, 2024",
        venueHref: "https://link.springer.com/book/10.1007/978-3-031-73232-4",
        year: 2024,
        type: "workshop",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2310.13479" }
        ]
    },
    {
        title: "Provably Correct Physics-Informed Neural Networks",
        authors: "<strong>F. Eiras</strong>, R. Bunel, K. Dj Dvijotham, A. Bibi, P. H. S. Torr, M. Pawan Kumar",
        venue: "2nd Workshop on Formal Verification of Machine Learning, ICML, 2023",
        venueHref: "https://www.ml-verification.com/",
        year: 2023,
        type: "workshop",
        award: "outstanding paper award",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2305.10157" }
        ]
    },
    {
        title: "On Fine-Tuning Risks in Closed Large Language Models",
        authors: "<strong>F. Eiras</strong>",
        venue: "Invited talk — OxAI (Oxford AI Society) Mini-Conference",
        year: 2024,
        type: "talk",
        links: []
    },
    {
        title: "Towards Certified Machine Learning",
        authors: "<strong>F. Eiras</strong>",
        venue: "Invited talk — Columbia, NYU, UC Berkeley, Stanford",
        year: 2023,
        type: "talk",
        links: [
            { label: "slides", href: "docs/certified_ml_07_2023.pdf" }
        ]
    },
    {
        title: "Provably Correct Physics-Informed Neural Networks",
        authors: "<strong>F. Eiras</strong>",
        venue: "Invited talk — UK AI Fellows Conference, Turing Institute",
        year: 2023,
        type: "talk",
        links: []
    },
    {
        title: "Certifying Ensembles: A General Certification Theory with S-Lipschitzness",
        authors: "A. Petrov*, <strong>F. Eiras</strong>, A. Sanyal, P. H. S. Torr, A. Bibi*",
        venue: "ICML, 2023",
        venueHref: "https://icml.cc/Conferences/2023",
        year: 2023,
        type: "conference",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2304.13019" }
        ]
    },
    {
        title: "RANCER: Non-Axis Aligned Anisotropic Certification with Randomized Smoothing",
        authors: "T. Rumezhak, <strong>F. Eiras</strong>, P. H. S. Torr, A. Bibi",
        venue: "WACV, 2023",
        venueHref: "https://wacv2023.thecvf.com/",
        year: 2023,
        type: "conference",
        links: [
            { label: "paper", href: "https://openaccess.thecvf.com/content/WACV2023/papers/Rumezhak_RANCER_Non-Axis_Aligned_Anisotropic_Certification_With_Randomized_Smoothing_WACV_2023_paper.pdf" }
        ]
    },
    {
        title: "ANCER: Anisotropic Certification via Sample-wise Volume Maximization",
        authors: "<strong>F. Eiras</strong>*, M. Alfarra*, M. Pawan Kumar, P. H. S. Torr, P. K. Dokania, B. Ghanem, A. Bibi*",
        venue: "TMLR, 2022",
        venueHref: "https://www.jmlr.org/tmlr/index.html",
        year: 2022,
        type: "journal",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2107.04570" }
        ]
    },
    {
        title: "A Two-Stage Optimization-based Motion Planner for Safe Urban Driving",
        authors: "<strong>F. Eiras</strong>, M. Hawasly, S. V. Albrecht, S. Ramamoorthy",
        venue: "IEEE Transactions on Robotics (T-RO), 2021",
        venueHref: "https://www.ieee-ras.org/publications/t-ro",
        year: 2021,
        type: "journal",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2002.02215" },
            { label: "bibtex", href: "docs/eiras2021twostage.bib" }
        ]
    },
    {
        title: "PILOT: Efficient Planning by Imitation Learning and Optimisation for Safe Autonomous Driving",
        authors: "H. Pulver, <strong>F. Eiras</strong>, L. Carozza, M. Hawasly, S. V. Albrecht, S. Ramamoorthy",
        venue: "IROS, 2021",
        venueHref: "https://www.iros2021.org/",
        year: 2021,
        type: "conference",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2011.00509" }
        ]
    },
    {
        title: "Interpretable Goal-based Prediction and Planning for Autonomous Driving",
        authors: "S. V. Albrecht, C. Brewitt, J. Wilhelm, B. Gyevnar, <strong>F. Eiras</strong>, M. Dobre, S. Ramamoorthy",
        venue: "ICRA, 2021",
        venueHref: "http://www.icra2021.org/",
        year: 2021,
        type: "conference",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/2002.02277" },
            { label: "bibtex", href: "docs/albrecht2021interpretable.bib" }
        ]
    },
    {
        title: "Correct-by-Construction Advanced Driver Assistance Systems based on a Cognitive Architecture",
        authors: "<strong>F. Eiras</strong>, M. Lahajinan, M. Kwiatkowska",
        venue: "IEEE CAVS, 2019",
        venueHref: "http://ieee-cavs.edu.umh.es/",
        year: 2019,
        type: "conference",
        award: "oral",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/1907.09603" },
            { label: "bibtex", href: "docs/eiras2019correct.bib" }
        ]
    },
    {
        title: "Analytical Modeling of Vanishing Points and Curves in Catadioptric Cameras",
        authors: "P. Miraldo, <strong>F. Eiras</strong>, S. Ramalingam",
        venue: "CVPR, 2018",
        venueHref: "http://cvpr2018.thecvf.com/",
        year: 2018,
        type: "conference",
        links: [
            { label: "paper", href: "https://arxiv.org/abs/1804.09460" },
            { label: "bibtex", href: "docs/miraldo2018analytical.bib" }
        ]
    }
];
