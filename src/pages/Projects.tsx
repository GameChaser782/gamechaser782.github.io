import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio-Analyser",
      description: "AI-powered portfolio analysis tool that evaluates investment portfolios using machine learning algorithms. Provides insights and recommendations to optimize asset allocation and maximize returns based on historical data and market trends.",
      technologies: ["Finance", "Data Analysis", "Python", "GenAI"],
      githubLink: "https://github.com/gamechaser782/Portfolio-Analyser",
      projectName: "portfolio-analyser",
      demoLink: "https://gamechaser782.github.io/Portfolio-Analyser/"
    },
    {
      title: "Certificates",
      description: "Recruiter-friendly showcase of my academic and professional certificates with filters, search, and direct PDF verification links.",
      technologies: ["GitHub Pages", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/gamechaser782/Certificates",
      projectName: "certificates",
      demoLink: "https://gamechaser782.github.io/Certificates/"
    },
    {
      title: "Transfer Learning using Tensorflow Hub",
      description: "Implemented pre-trained NLP text embedding models like USE, NNLM, and BERT from TF Hub. Performed Transfer Learning to fine-tune 12 models, increasing its accuracy from 93% to over 97%. Utilized matplotlib and TensorBoard to visualize model accuracy, ranking USE-large highest at 97.41%.",
      technologies: ["Natural Language Processing", "TensorFlow Hub", "Python"],
      githubLink: "https://github.com/gamechaser782/Transfer_Learning_NLP_TF_Hub",
      projectName: "transfer-learning-nlp"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Visualized the credit card dataset using pandas, seaborn, and matplotlib, conducting fraud analysis. Employed t-SNE for dimensionality reduction, confirming the feasibility of anomaly detection modeling. Compared various classification algorithms on ROC-AUC score, ranking XGBoost highest at 97.22%. Applied Gaussian anomaly detection, used autoencoder for enhanced unsupervised fraud detection.",
      technologies: ["Predictive Modelling", "XGBoost", "Python"],
      githubLink: "https://github.com/gamechaser782/Credit-Card-Fraud-Detection",
      projectName: "credit-card-fraud",
      demoLink: "https://gamechaser782.github.io/Credit-Card-Fraud-Detection/"
    },
    {
      title: "Face Recognition using OpenCV",
      description: "Incorporated Resnet-34 architecture trained on 3M+ images with 99% accuracy for image recognition. Employed pre-trained Caffe2 models for fast and robust Age and Gender recognition on live webcam feeds. Utilized CNN based method for detection owing to its 3% accuracy boost over HOG based method.",
      technologies: ["Computer Vision", "ResNet", "CNN"],
      githubLink: "https://github.com/gamechaser782/Face-Recognition-using-OpenCV",
      projectName: "face-recognition"
    },
    {
      title: "COVID19 Data Analysis",
      description: "Conducted COVID-19 EDA of 150+ countries; merged COVID-19 & Happiness data to find correlations. Created Seaborn-Matplotlib visuals, precisely illuminating nuanced infection-happiness correlations.",
      technologies: ["Time Series Analysis", "Data Visualization", "Python"],
      githubLink: "https://github.com/gamechaser782/Covid-19-Data-Analysis",
      projectName: "covid19-analysis"
    },
    {
      title: "Object Detection with AWS Sagemaker",
      description: "Visualized 3500+ images using SageMaker, employing ImageDraw and ImageFont for object detection. Skillfully orchestrated full workflow from instance setup to model training, and visualizing predictions.",
      technologies: ["Cloud Computing", "AWS", "Computer Vision"],
      githubLink: "https://github.com/gamechaser782/Object-Detection-with-AWS-Sagemaker",
      projectName: "object-detection-aws"
    },
    {
      title: "Tweet Emotion Recognition",
      description: "Retrieved emotion dataset from Hugging Face's NLP library, preprocessed tweets through tokenization. Constructed a bidirectional LSTM model, categorizing tweet emotions with a 98.18% training accuracy. Implemented early stopping for regularization, achieving 87.2% test accuracy in sentiment analysis.",
      technologies: ["Sentiment Analysis", "LSTM", "NLP"],
      githubLink: "https://github.com/gamechaser782/Tweet-Emotion-recognition-with-Tensorflow",
      projectName: "tweet-emotion-recognition"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
