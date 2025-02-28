
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart3, TrendingUp, FileText, Users, Building, Calendar, CheckCircle, ArrowRight } from "lucide-react";

const Consultancy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Consultancy");
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

  const consultancyAreas = [
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
      title: "Business Growth",
      description: "Strategies to scale your business, increase market share, and drive sustainable growth."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
      title: "Financial Planning",
      description: "Expert guidance on financial management, budgeting, and securing funding for your business."
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Compliance & Legal",
      description: "Navigating complex regulations and ensuring your business remains legally compliant."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "HR Management",
      description: "Building effective teams, managing talent, and creating a positive workplace culture."
    },
    {
      icon: <Building className="h-10 w-10 text-blue-600" />,
      title: "Operational Efficiency",
      description: "Streamlining processes and operations to maximize productivity and reduce costs."
    }
  ];

  const consultancyProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We begin with a thorough assessment of your business needs and challenges."
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Our experts develop a customized strategy tailored to your specific business goals."
    },
    {
      step: "3",
      title: "Implementation Support",
      description: "We guide you through implementing the recommended strategies and solutions."
    },
    {
      step: "4",
      title: "Monitoring & Adjustment",
      description: "Regular check-ins to monitor progress and adjust strategies as needed."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      company: "Crafts & Creations",
      content: "The consultancy services provided by Udyam Saathi transformed my small handicrafts business. Their strategic guidance helped me expand my market reach and increase revenue by 40% in just six months."
    },
    {
      name: "Rajesh Kumar",
      role: "CEO",
      company: "TechServe Solutions",
      content: "As a medium-sized tech company, we were struggling with operational inefficiencies. The Udyam Saathi consultants provided actionable insights that streamlined our processes and boosted our productivity significantly."
    },
    {
      name: "Ananya Patel",
      role: "Founder",
      company: "Organic Essentials",
      content: "The financial planning consultation I received was invaluable. They helped secure funding for my organic products startup and created a sustainable growth plan that's been our roadmap to success."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="bg-blue-50 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expert <span className="text-blue-600">Consultancy Services</span> for Your Business
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experienced consultants provides strategic guidance to help your MSME overcome challenges and achieve sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md" onClick={() => window.location.href = '#book-call'}>
                Book a Consultation
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-md">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consultancy Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide expert consultancy across various business domains to address your specific needs and challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultancyAreas.map((area, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
                <CardFooter>
                  <Link to="/contact" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-sm font-medium">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consultancy Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to deliver effective consultancy services tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultancyProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have transformed with our consultancy services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 bg-gray-50">
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consultancy Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the consultancy package that best fits your business needs and budget.
            </p>
          </div>
          
          <Tabs defaultValue="standard" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Basic Package</CardTitle>
                  <CardDescription>For startups and micro enterprises</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹9,999</span>
                    <span className="text-gray-500 ml-2">One-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['Initial business assessment', 'Basic strategy development', '2 consultation sessions', 'Basic implementation guidance', '1 month follow-up support'].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = '#book-call'}>Get Started</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="standard">
              <Card>
                <CardHeader>
                  <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">Most Popular</div>
                  <CardTitle className="text-2xl">Standard Package</CardTitle>
                  <CardDescription>For growing small businesses</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹24,999</span>
                    <span className="text-gray-500 ml-2">One-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['Comprehensive business assessment', 'Detailed strategy development', '5 consultation sessions', 'Implementation roadmap', '3 months follow-up support', 'Monthly progress reports', 'Access to business resources'].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = '#book-call'}>Get Started</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="premium">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Premium Package</CardTitle>
                  <CardDescription>For established medium enterprises</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">₹49,999</span>
                    <span className="text-gray-500 ml-2">One-time</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['In-depth business analysis', 'Comprehensive strategy development', 'Unlimited consultation sessions', 'Hands-on implementation support', '6 months follow-up support', 'Weekly progress reports', 'Access to premium business resources', 'Direct access to senior consultants', 'Emergency consultations'].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = '#book-call'}>Get Started</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Free Consultation Call</h2>
              <p className="text-blue-100 mb-6">
                Schedule a call with our consultancy experts to discuss your business challenges and growth opportunities.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Free 30-minute consultation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Personalized business strategy discussion</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>Expert advice from industry professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>No obligation to purchase any services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {submitted ? (
                <div className="text-center">
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
              ) : (
                <>
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
                        <label htmlFor="consultancyService" className="block text-sm font-medium text-gray-700 mb-1">
                          Consultancy Area
                        </label>
                        <select
                          id="consultancyService"
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                          required
                        >
                          <option value="Business Growth">Business Growth</option>
                          <option value="Financial Planning">Financial Planning</option>
                          <option value="Compliance & Legal">Compliance & Legal</option>
                          <option value="HR Management">HR Management</option>
                          <option value="Operational Efficiency">Operational Efficiency</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2">
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free initial consultation with our experts to discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-md" onClick={() => window.location.href = '#book-call'}>
              Book a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-6 rounded-md inline-flex items-center gap-2">
              <Calendar size={18} /> View Calendar
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Consultancy;
