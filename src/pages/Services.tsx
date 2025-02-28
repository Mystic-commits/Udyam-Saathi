
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Building, 
  Users, 
  Briefcase,
  BookOpen, 
  Scale,
  CheckCircle, 
  ArrowRight,
  AlertCircle,
  BarChart3,
  ClipboardList,
  Landmark
} from "lucide-react";

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const registrationServices = [
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      title: "Udyam Registration",
      description: "Official registration of your enterprise as a micro, small, or medium enterprise with the Ministry of MSME."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      title: "GST Registration",
      description: "Complete assistance with Goods and Services Tax registration process for your business."
    },
    {
      icon: <Scale className="h-10 w-10 text-blue-600" />,
      title: "Trademark Registration",
      description: "Protect your brand identity with official trademark registration and legal protection."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Partnership Registration",
      description: "Register your partnership firm with proper legal documentation and compliance."
    }
  ];

  const documentationServices = [
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Business Plan Development",
      description: "Professional development of comprehensive business plans for funding and strategic planning."
    },
    {
      icon: <ClipboardList className="h-10 w-10 text-blue-600" />,
      title: "Compliance Documentation",
      description: "Preparation of all necessary documentation to maintain regulatory compliance."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: "Financial Documentation",
      description: "Assistance with preparing financial statements, projections, and other financial documents."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: "Legal Agreements",
      description: "Drafting and review of various business agreements, contracts, and legal documents."
    }
  ];

  const legalServices = [
    {
      icon: <Landmark className="h-10 w-10 text-blue-600" />,
      title: "Legal Compliance Audit",
      description: "Comprehensive audit of your business's legal compliance status and requirements."
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-blue-600" />,
      title: "Dispute Resolution",
      description: "Professional assistance with business disputes and legal conflict resolution."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: "Contract Review",
      description: "Expert review and analysis of business contracts and legal agreements."
    },
    {
      icon: <Scale className="h-10 w-10 text-blue-600" />,
      title: "Legal Advisory",
      description: "Ongoing legal advisory services for various business matters and decisions."
    }
  ];

  const benefits = [
    "Access to government schemes and subsidies",
    "Priority lending from banks",
    "Protection under MSMED Act",
    "Reduction in interest rates",
    "Tax benefits and exemptions",
    "Lower electricity bills",
    "Marketing assistance"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="bg-blue-50 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-blue-600">MSME Services</span> for Your Business
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              From business registration to documentation and legal support, we provide all the services you need to establish and grow your MSME.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md">
                Get Started
              </Button>
              <Link to="#service-categories">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-md">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="service-categories" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of services designed to support every aspect of your MSME journey.
            </p>
          </div>
          
          <Tabs defaultValue="registration" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="registration">Business Registration</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="legal">Legal Support</TabsTrigger>
            </TabsList>
            
            <TabsContent value="registration">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {registrationServices.map((service, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Link to="/contact" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-sm font-medium">
                        Learn more <ArrowRight size={16} />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="documentation">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {documentationServices.map((service, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Link to="/contact" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-sm font-medium">
                        Learn more <ArrowRight size={16} />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="legal">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {legalServices.map((service, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Link to="/contact" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-sm font-medium">
                        Learn more <ArrowRight size={16} />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of MSME Registration</h2>
              <p className="text-gray-600 mb-8">
                Registering your business as an MSME unlocks numerous advantages that can significantly boost your business growth and sustainability.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="MSME Benefits"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined our service delivery process to make it easy and hassle-free for you.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600 max-w-xs">
                Initial discussion to understand your specific business needs and requirements.
              </p>
            </div>
            
            <div className="hidden md:block w-24 border-t-2 border-dashed border-blue-300 mt-8"></div>
            
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600 max-w-xs">
                Collection and preparation of all necessary documents and information.
              </p>
            </div>
            
            <div className="hidden md:block w-24 border-t-2 border-dashed border-blue-300 mt-8"></div>
            
            <div className="flex flex-col items-center text-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Processing</h3>
              <p className="text-gray-600 max-w-xs">
                We handle the complete application and submission process on your behalf.
              </p>
            </div>
            
            <div className="hidden md:block w-24 border-t-2 border-dashed border-blue-300 mt-8"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Completion</h3>
              <p className="text-gray-600 max-w-xs">
                Successful delivery of your required documents, registrations, or services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Free Consultation Call</h2>
              <p className="text-blue-100 mb-6">
                Schedule a call with our experts to discuss your business needs and how we can help you grow your MSME.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Free 30-minute consultation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>No obligation or pressure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Expert advice tailored to your business</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Discuss specific challenges you're facing</span>
                </li>
              </ul>
            </div>
            
            <BookCallForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Book a Call Form Component
const BookCallForm = () => {
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

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600 mb-4">Your consultation request has been received.</p>
        <p className="text-gray-600 mb-6">We're connecting you to our expert now...</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
          Calling... +91 7247076274
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Enter Your Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Your Phone Number"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service Interested In
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              required
            >
              <option value="Registration">Business Registration</option>
              <option value="Documentation">Documentation</option>
              <option value="Legal">Legal Support</option>
              <option value="Consultancy">Consultancy</option>
              <option value="Other">Other Services</option>
            </select>
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">
            Book Your Call Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Services;
