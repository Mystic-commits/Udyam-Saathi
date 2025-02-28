
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Users, BarChart3, BookOpen, Building, Phone } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Registration");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally this would be an API call to store the data
    console.log("Form submitted:", { name, phone, email, service });

    // For demo, simulate success
    setSubmitted(true);
    
    // Simulating a phone call by opening the phone dialer
    setTimeout(() => {
      window.location.href = `tel:+917247076274`;
    }, 1500);
  };

  const services = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Business Registration",
      description: "Register your business with ease and get started quickly with our streamlined process."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      title: "Consultancy Services",
      description: "Get expert advice to grow your business and navigate the complexities of the market."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Documentation",
      description: "We help with all the paperwork and documentation needed for your business to thrive."
    },
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: "Legal Support",
      description: "Our legal experts ensure your business complies with all relevant regulations."
    }
  ];

  const benefits = [
    "Quick and hassle-free business registration",
    "Expert consultancy services",
    "Comprehensive documentation support",
    "Legal compliance assistance",
    "Ongoing business growth support",
    "Access to a network of professionals"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-28 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Helping MSMEs <span className="text-blue-600">Grow and Thrive</span>
              </h1>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                We provide comprehensive support services for Micro, Small, and Medium Enterprises to help them succeed in today's competitive market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg">
                  Get Started
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-md text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="MSME Support"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Udyam Saathi is a collaborative project developed by 5 dedicated students from Rishihood University. 
              We're passionate about supporting MSMEs and have created this platform to provide comprehensive resources 
              and services to help small businesses thrive in today's challenging economic environment.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 lg:w-2/5">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Our Team"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 lg:w-2/5">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As students passionate about entrepreneurship, we've created Udyam Saathi to bridge the knowledge gap 
                for MSMEs in India and provide accessible resources for business growth and development.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team consists of 5 students with diverse skills in business, technology, and design. Together, 
                we're committed to supporting the MSME sector through innovative solutions and accessible services.
              </p>
              <Button className="mt-2 bg-blue-600 hover:bg-blue-700">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We offer a range of services designed to support the growth and development of MSMEs at every stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none hover:shadow-xl transition duration-300 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <CardContent className="p-8">
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 inline-flex items-center gap-2 text-lg px-8 py-6">
                View All Services 
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="MSME Support Team"
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="w-24 h-1 bg-blue-600 mb-8"></div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                With our expert team and comprehensive services, we provide everything your MSME needs to succeed and grow in today's competitive market.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a Free Consultation Call</h2>
              <div className="w-24 h-1 bg-white mb-8"></div>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Schedule a call with our experts to discuss your business needs and how we can help you grow your MSME.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="text-lg">Free 30-minute consultation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="text-lg">No obligation or pressure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="text-lg">Expert advice tailored to your business</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0" />
                  <span className="text-lg">Discuss specific challenges you're facing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              {submitted ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6 text-lg">Your consultation request has been received.</p>
                  <p className="text-gray-600 mb-8 text-lg">We're connecting you to our expert now...</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-lg">
                    Calling... +91 7247076274
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Enter Your Details</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                          placeholder="Your Phone Number"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                          required
                        >
                          <option value="Registration">Business Registration</option>
                          <option value="Documentation">Documentation</option>
                          <option value="Legal">Legal Support</option>
                          <option value="Consultancy">Consultancy</option>
                          <option value="Other">Other Services</option>
                        </select>
                      </div>
                      
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                        Book Your Call Now
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Business to the Next Level?</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Contact us today to learn how our services can help your MSME thrive in the competitive market.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 rounded-md text-lg">
              Get Started
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-10 py-6 rounded-md inline-flex items-center gap-2 text-lg">
                Contact Us <Phone size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
