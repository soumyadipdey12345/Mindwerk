import React from 'react';
import { Linkedin, Target, Eye, Users, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  const leadership = [
    {
      id: 1,
      name: 'Nilanjan Mitra',
      title: 'MD, Founder',
      image: '/images/nilanjan-mitra.png',
      linkedin: 'https://www.linkedin.com',
      bio: 'Visionary founder with extensive experience in IT consulting and digital transformation.'
    },
    {
      id: 2,
      name: 'Anindya Chakraborty',
      title: 'CTO',
      image: '/images/anindya-chakraborty.png',
      linkedin: 'https://www.linkedin.com',
      bio: 'Technology leader driving innovation and technical excellence across all platforms.'
    },
    {
      id: 3,
      name: 'Soumyadip Ghosh',
      title: 'Media and UX Head',
      image: '/images/soumyadip-ghosh.png',
      linkedin: 'https://www.linkedin.com',
      bio: 'Creative director ensuring exceptional user experiences and brand presence.'
    },
    {
      id: 4,
      name: 'Husniddin Abbasov',
      title: 'CEO - Uzbekistan',
      image: '/images/husniddin-abbasov.png',
      linkedin: 'https://www.linkedin.com',
      bio: 'Leading operations and growth strategy in Central Asian markets.'
    }
  ];

  const team = [
    {
      id: 1,
      name: 'Amit Singh',
      title: 'Senior AI Engineer',
      image: '/images/amit-singh.png'
    },
    {
      id: 2,
      name: 'Sneha Desai',
      title: 'RPA Consultant',
      image: '/images/sneha-desai.png'
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      title: 'Cloud Architect',
      image: '/images/vikram-mehta.png'
    },
    {
      id: 4,
      name: 'Kavita Reddy',
      title: 'Business Analyst',
      image: '/images/kavita-reddy.png'
    },
    {
      id: 5,
      name: 'Arjun Nair',
      title: 'DevOps Engineer',
      image: '/images/arjun-nair.png'
    },
    {
      id: 6,
      name: 'Pooja Gupta',
      title: 'UI/UX Designer',
      image: '/images/pooja-gupta.png'
    },
    {
      id: 7,
      name: 'Sanjay Iyer',
      title: 'Data Scientist',
      image: '/images/sanjay-iyer.png'
    },
    {
      id: 8,
      name: 'Neha Kapoor',
      title: 'Project Manager',
      image: '/images/neha-kapoor.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-red-600">Mindwerk</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Pioneering digital transformation through innovative technology solutions and expert consulting services.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {/* Founded */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-red-600 transition-all duration-300 text-center shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">2020</div>
              <div className="text-sm text-gray-600 mb-1">Founded</div>
              <div className="text-base text-gray-900 font-medium">5+ years of excellence</div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-red-600 transition-all duration-300 text-center shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">2</div>
              <div className="text-sm text-gray-600 mb-1">Locations</div>
              <div className="text-base text-gray-900 font-medium">India & Uzbekistan</div>
            </div>

            {/* Team Size */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-red-600 transition-all duration-300 text-center shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">2-10</div>
              <div className="text-sm text-gray-600 mb-1">Team Size</div>
              <div className="text-base text-gray-900 font-medium">Boutique consulting</div>
            </div>

            {/* Experience */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-red-600 transition-all duration-300 text-center shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">Fortune 500</div>
              <div className="text-sm text-gray-600 mb-1">Experience</div>
              <div className="text-base text-gray-900 font-medium">Enterprise expertise</div>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl p-8 md:p-10 border-2 border-red-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Founded in <span className="text-red-600 font-semibold">2020</span>, <span className="text-red-600 font-semibold">Mindwerk Technology Solution</span> emerged from a vision to bridge the gap between complex technology and business success. With offices in <span className="font-semibold">Calcutta, India</span> and <span className="font-semibold">Ferghana, Uzbekistan</span>, we've grown into a trusted partner for organizations seeking digital transformation.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Our journey began with a simple belief: technology should empower businesses, not complicate them. Today, we serve clients across industries, delivering AI-powered solutions, RPA implementations, and comprehensive cloud strategies that drive real results.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed">
              Our boutique consulting approach ensures personalized attention and tailored solutions for each client. With extensive <span className="text-red-600 font-semibold">Fortune 500 experience</span>, we bring enterprise-grade expertise to organizations of all sizes, focusing on AI implementation, RPA solutions, cloud enablement, and comprehensive process optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-gray-100 hover:border-red-600 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the global leader in digital transformation consulting, empowering organizations to harness the full potential of AI, automation, and cloud technologies. We envision a world where businesses seamlessly integrate cutting-edge technology to drive innovation, efficiency, and sustainable growth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-gray-100 hover:border-red-600 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver exceptional IT consulting and digital transformation services that create measurable business value. We are committed to understanding our clients' unique challenges and providing tailored solutions through AI, RPA, cloud computing, and strategic consulting that drive operational excellence and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core <span className="text-red-600">Values</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'Committed to delivering the highest quality in everything we do.' },
              { icon: Users, title: 'Collaboration', desc: 'Building strong partnerships with clients and team members.' },
              { icon: Target, title: 'Innovation', desc: 'Continuously exploring new technologies and methodologies.' },
              { icon: Eye, title: 'Integrity', desc: 'Operating with transparency, honesty, and ethical practices.' }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership <span className="text-red-600">Team</span>
            </h2>
            <p className="text-xl text-white/70">
              Meet the visionaries driving Mindwerk's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-lg"
                  >
                    <Linkedin className="text-white" size={24} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-red-600 font-medium mb-3">{leader.title}</p>
                <p className="text-white/70 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Talented professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium text-sm">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
