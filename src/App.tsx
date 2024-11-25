import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Brain,
  Cpu,
  Database,
  Network,
  Cloud
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Akshay Gaiwkad
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transforming complex data into intelligent solutions. Specializing in machine  learning,               and natural language processing.
            </p>
            <div className="flex justify-center space-x-4">
              <SocialLink href="https://github.com/Gaikwad000Akshay" icon={Github} />
              <SocialLink href="https://www.linkedin.com/in/akshay1296/" icon={Linkedin} />
              <SocialLink href="https://x.com/mech_66" icon={Twitter} />
              <SocialLink href="mailto:" icon={Mail} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-600">Specialized in cutting-edge ML technologies</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExpertiseCard
              icon={Brain}
              title="Python"
              description="Pandas, Numpy, Matplotlib, Seaborn."
            />
            <ExpertiseCard
              icon={Cpu}
              title="Machine Learning"
              description="Regression, Decision Tree, SVM, PCA."
            />
            <ExpertiseCard
              icon={Database}
              title="DataBases"
              description="MySQL, MongoDB, PostgreSQL"
            />
            <ExpertiseCard
              icon={Brain}
              title="Deep Learning"
              description="Neural Networks(CNN, ANN), Transformers"
            />
             <ExpertiseCard
              icon={Network}
            title="Natural Language Processing"
              description="Tokenization, Text Summarization, Sentiment Analysis"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Recent work in machine learning and AI</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">           
            <ProjectCard
              title="Sentiment Analysis on Social Media Data"
              description="project involves analyzing social media posts to determine the sentiment. It helps businesses understand public opinion, customer satisfaction, and market trends."
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
              tags={['Python', 'NLTK', 'SpaCy','TextBlob']}
              
            />
            <ProjectCard
              title="Flight Fare Prediction System"
              description="This project uses machine learning algorithms to predict flight fares based on various factors like departure time, destination, season, historical price trends, and demand. By analyzing these factors, the system helps travelers and airlines forecast fare fluctuations, enabling smarter decisions and price optimization"
              image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
              tags={['Scikit-learn', 'XGBoost', 'Google Colab']}
              github="https://github.com/Gaikwad000Akshay/Flight-Fare-Prediction/blob/9b239cc9225817dc18e7e946fdd1c865f4f898fa/app.py"
demo ="https://youtu.be/pxUlEa11QhE?si=DhjXINBh9LvhP4d8"
            />
            <ProjectCard
              title="AI-Driven Chatbot for Customer Service FAQ."
              description="AI-powered chatbot capable of handling customer service queries and providing solutions for common issues. It uses Natural Language Processing (NLP) to understand customer requests and can be deployed on websites or mobile applications."
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
              tags={['Scikit-learn', 'TensorFlow', 'NLTK','Flask/Django','AWS Lambda']}
              
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8">
              I’m happy to answer any questions or discuss potential collaborations..
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
    >
      <Icon className="w-6 h-6 text-gray-600 hover:text-purple-600 transition-colors" />
    </a>
  );
}

function ExpertiseCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default App;