import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, FileText, Workflow, Users, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import WaitlistForm from './components/WaitlistForm';
import CookieConsent from './components/CookieConsent';
import { initGA } from './lib/analytics';

function App() {
  useEffect(() => {
    initGA();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <CookieConsent />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            Your AI Project Manager:<br />Organize Less, Achieve More
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Automate your project planning and management with AI-powered insights
          </motion.p>
          <motion.a
            href="#signup"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Join the Waitlist
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <FileText className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">AI-Powered PRD Generation</h3>
              <p className="text-gray-600">
                Transform your ideas into comprehensive Product Requirement Documents in minutes, not hours.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
              className="text-center p-6"
            >
              <Workflow className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Intelligent Workflow Builder</h3>
              <p className="text-gray-600">
                Automatically convert your PRD into an actionable workflow, complete with tasks and dependencies.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.6 }}
              className="text-center p-6"
            >
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Smart Task Assignment</h3>
              <p className="text-gray-600">
                Let AI match tasks to team members based on skills and workload for optimal efficiency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Input Your Project Goals", icon: Brain },
              { step: 2, title: "AI Generates Your PRD and Workflow", icon: FileText },
              { step: 3, title: "Assign Tasks and Track Progress", icon: Users },
              { step: 4, title: "Deliver Projects Faster and Smarter", icon: Workflow }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Step {item.step}</h3>
                <p className="text-gray-600">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
          <div className="max-w-md mx-auto">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Beta Access</h3>
              <div className="text-6xl font-bold mb-4">
                <span className="text-2xl align-top">$</span>
                0
                <span className="text-2xl">/mo</span>
              </div>
              <p className="text-lg mb-8">Special beta pricing. Lock in this rate by joining our waitlist!</p>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Full access to all features
                </li>
                <li className="flex items-center">
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Early access to new features
                </li>
              </ul>
              <a
                href="#signup"
                className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join the Waitlist
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Join the Waitlist</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Be among the first to revolutionize your project management. Sign up for exclusive beta access!
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">Organi</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing project management with AI
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <a
                href="mailto:anshul.ganu@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                anshul.ganu@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Social</h4>
              <a
                href="https://x.com/anshulcreates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Organi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
