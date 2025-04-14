
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Transfer Learning using Tensorflow Hub",
      description: "Implemented pre-trained NLP text embedding models like USE, NNLM, and BERT from TF Hub. Performed Transfer Learning to fine-tune 12 models, increasing its accuracy from 93% to over 97%. Utilized matplotlib and TensorBoard to visualize model accuracy, ranking USE-large highest at 97.41%.",
      technologies: ["Natural Language Processing", "TensorFlow Hub", "Python"]
    },
    {
      title: "Anomaly Detection in Credit Card Transactions",
      description: "Visualized the credit card dataset using pandas, seaborn, and matplotlib, conducting fraud analysis. Employed t-SNE for dimensionality reduction, confirming the feasibility of anomaly detection modeling. Compared various classification algorithms on ROC-AUC score, ranking XGBoost highest at 97.22%. Applied Gaussian anomaly detection, used autoencoder for enhanced unsupervised fraud detection.",
      technologies: ["Predictive Modelling", "XGBoost", "Python"]
    },
    {
      title: "Real-time Age and Gender Recognition",
      description: "Incorporated Resnet-34 architecture trained on 3M+ images with 99% accuracy for image recognition. Employed pre-trained Caffe2 models for fast and robust Age and Gender recognition on live webcam feeds. Utilized CNN based method for detection owing to its 3% accuracy boost over HOG based method.",
      technologies: ["Computer Vision", "ResNet", "CNN"]
    },
    {
      title: "COVID19 Data Analysis",
      description: "Conducted COVID-19 EDA of 150+ countries; merged COVID-19 & Happiness data to find correlations. Created Seaborn-Matplotlib visuals, precisely illuminating nuanced infection-happiness correlations.",
      technologies: ["Time Series Analysis", "Data Visualization", "Python"]
    },
    {
      title: "Object Detection with AWS Sagemaker",
      description: "Visualized 3500+ images using SageMaker, employing ImageDraw and ImageFont for object detection. Skillfully orchestrated full workflow from instance setup to model training, and visualizing predictions.",
      technologies: ["Cloud Computing", "AWS", "Computer Vision"]
    },
    {
      title: "Stock Market Indices",
      description: "Imported FAANG companies' prices via Google Finance, constructing a weighted Stock Market index. Calculated free-float weight, enhancing index representation for accurate market performance analysis.",
      technologies: ["Finance", "Data Analysis", "Python"]
    },
    {
      title: "Tweet Emotion Recognition",
      description: "Retrieved emotion dataset from Hugging Face's NLP library, preprocessed tweets through tokenization. Constructed a bidirectional LSTM model, categorizing tweet emotions with a 98.18% training accuracy. Implemented early stopping for regularization, achieving 87.2% test accuracy in sentiment analysis.",
      technologies: ["Sentiment Analysis", "LSTM", "NLP"]
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
