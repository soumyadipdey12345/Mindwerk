import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Send, Heart, TrendingUp, Users, Coffee } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      location: 'Calcutta, India',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Join our AI team to develop cutting-edge machine learning solutions for enterprise clients.',
      requirements: [
        '5+ years of experience in AI/ML development',
        'Strong knowledge of Python, TensorFlow, PyTorch',
        'Experience with NLP and computer vision',
        'Masters or PhD in Computer Science or related field'
      ],
      responsibilities: [
        'Design and implement AI models for client projects',
        'Collaborate with cross-functional teams',
        'Research and prototype new AI technologies',
        'Mentor junior engineers'
      ]
    },
    {
      id: 2,
      title: 'RPA Consultant',
      location: 'Ferghana, Uzbekistan',
      type: 'Full-time',
      department: 'Consulting',
      description: 'Help businesses automate their processes using RPA tools and methodologies.',
      requirements: [
        '3+ years of RPA implementation experience',
        'Expertise in UiPath, Automation Anywhere, or Blue Prism',
        'Strong process analysis skills',
        'Client-facing experience'
      ],
      responsibilities: [
        'Assess client automation opportunities',
        'Design and implement RPA solutions',
        'Provide training and support to clients',
        'Document processes and best practices'
      ]
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      location: 'Calcutta, India',
      type: 'Full-time',
      department: 'Cloud Services',
      description: 'Design and implement scalable cloud infrastructure for enterprise clients.',
      requirements: [
        '5+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of DevOps practices'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead cloud migration projects',
        'Optimize cloud costs and performance',
        'Provide technical leadership to teams'
      ]
    },
    {
      id: 4,
      title: 'Business Analyst',
      location: 'Remote',
      type: 'Full-time',
      department: 'Consulting',
      description: 'Bridge the gap between business needs and technical solutions.',
      requirements: [
        '3+ years of business analysis experience',
        'Strong analytical and communication skills',
        'Experience with requirement gathering',
        'Knowledge of Agile methodologies'
      ],
      responsibilities: [
        'Gather and document business requirements',
        'Analyze business processes',
        'Create functional specifications',
        'Facilitate stakeholder meetings'
      ]
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      location: 'Calcutta, India',
      type: 'Full-time',
      department: 'Design',
      description: 'Create intuitive and beautiful user experiences for our digital solutions.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe XD, Sketch',
        'Strong portfolio showcasing design work',
        'Understanding of user research methodologies'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile',
        'Conduct user research and testing',
        'Create wireframes and prototypes',
        'Collaborate with developers'
      ]
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      location: 'Ferghana, Uzbekistan',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation.',
      requirements: [
        '3+ years of DevOps experience',
        'Experience with Jenkins, GitLab CI, or similar',
        'Strong knowledge of Linux and scripting',
        'Experience with cloud platforms'
      ],
      responsibilities: [
        'Build and maintain CI/CD pipelines',
        'Automate infrastructure provisioning',
        'Monitor system performance',
        'Implement security best practices'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development programs'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive environment'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', position: '', coverLetter: '', resume: null });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join <span className="text-red-600">Mindwerk</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Be part of a dynamic team shaping the future of technology consulting and digital transformation.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Briefcase className="text-red-600" size={24} />
            <span className="text-white text-lg">{jobOpenings.length} Open Positions</span>
          </div>
        </div>
      </section>

      {/* HR Message */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-3xl p-12 border-2 border-red-100">
            <div className="flex items-start gap-6 mb-6">
              <img 
                src={`${process.env.PUBLIC_URL}/images/hr-team.png`}
                alt="HR Team"
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Message from Our HR Team</h3>
                <p className="text-red-600 font-medium">Human Resources Department</p>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg">
                <span className="text-2xl text-red-600 font-serif">"</span>
                Welcome to Mindwerk's career portal! We're thrilled that you're considering joining our team.
              </p>
              <p>
                At Mindwerk, we believe our people are our greatest asset. We're not just looking for employees; we're seeking passionate individuals who want to make a real impact in the world of technology and innovation. Our culture is built on collaboration, continuous learning, and pushing the boundaries of what's possible.
              </p>
              <p>
                Whether you're an experienced professional or just starting your career journey, we offer an environment where you can grow, learn, and contribute to meaningful projects that transform businesses. We value diversity, creativity, and dedication.
              </p>
              <p>
                If you're ready to challenge yourself, work with cutting-edge technologies, and be part of a team that's making a difference, we'd love to hear from you. Explore our open positions and take the first step toward an exciting career with Mindwerk.
                <span className="text-2xl text-red-600 font-serif">"</span>
              </p>
              <p className="font-semibold text-gray-900 italic pt-4">
                Best regards,<br />
                The HR Team at Mindwerk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join <span className="text-red-600">Mindwerk?</span>
            </h2>
            <p className="text-xl text-gray-600">
              We offer more than just a job – we offer a career and a community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open <span className="text-red-600">Positions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find your perfect role and apply today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-red-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-red-600" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-red-600" />
                    <span>{job.department}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                  View Details & Apply
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Apply <span className="text-red-600">Now</span>
            </h2>
            <p className="text-xl text-white/70">
              Send us your application and we'll get back to you soon
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/10">
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500 rounded-lg p-8 text-center">
                <p className="text-green-400 text-xl font-medium">
                  ✓ Thank you for your application! We'll review it and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40"
                      placeholder="+91 9830429608"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Position *</label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white"
                    >
                      <option value="" className="bg-gray-800">Select Position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title} className="bg-gray-800">
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Cover Letter *</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white placeholder-white/40 resize-none"
                    placeholder="Tell us why you'd be a great fit for this position..."
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Resume/CV *</label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-red-600 transition-colors text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-red-600 file:text-white file:cursor-pointer hover:file:bg-red-700"
                  />
                  <p className="text-white/50 text-sm mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors text-lg"
                >
                  Submit Application
                  <Send size={20} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
