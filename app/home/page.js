"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Clock,
  Shield,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  FlaskConical,
  Heart,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Microscope,
  Activity,
  FileText,
  Calendar,
  Download,
  Zap,
  Target,
  Beaker,
} from "lucide-react";

const AccessMedLabHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Primary Care Physician",
      content:
        "Access Med Lab consistently delivers accurate results within 24 hours. Their specialized testing has been crucial for my patients' care.",
      rating: 5,
    },
    {
      name: "Dr. Michael Chen",
      role: "Endocrinologist",
      content:
        "The hormone testing services are exceptional. The detailed reports help me provide better treatment plans for my patients.",
      rating: 5,
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Internal Medicine",
      content:
        "Outstanding customer service and reliable results. Access Med Lab has become our go-to laboratory partner.",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hormone Testing",
      description:
        "Comprehensive hormone panels for optimal health and wellness",
      features: [
        "Thyroid Function",
        "Reproductive Hormones",
        "Adrenal Testing",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Anti-Aging Testing",
      description: "Advanced biomarkers for longevity and vitality assessment",
      features: ["Cellular Health", "Nutritional Status", "Metabolic Markers"],
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Weight Loss Testing",
      description: "Targeted testing to support effective weight management",
      features: [
        "Metabolic Panel",
        "Food Sensitivity",
        "Micronutrient Analysis",
      ],
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Specialty Testing",
      description: "Advanced diagnostic solutions for complex conditions",
      features: ["Toxicology", "Genetic Testing", "Infectious Disease"],
    },
  ];

  const stats = [
    {
      number: "24hrs",
      label: "Average Turnaround",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "10,000+",
      label: "Physicians Served",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "99.9%",
      label: "Accuracy Rate",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const partners = [
    "Evexia Diagnostics",
    "Rupa Health",
    "Precision Medicine",
    "Wellness Partners",
    "HealthTech Solutions",
  ];

  const UserFlowSection = () => {
    const [activeTab, setActiveTab] = useState("patients");

    const patientFlow = [
      {
        icon: <Calendar className="w-8 h-8 text-blue-600" />,
        title: "Schedule Visit",
        description: "Book your appointment with your healthcare provider",
      },
      {
        icon: <Beaker className="w-8 h-8 text-blue-600" />,
        title: "Sample Collection",
        description: "Quick, efficient blood, urine, or saliva collection",
      },
      {
        icon: <Clock className="w-8 h-8 text-blue-600" />,
        title: "Rapid Processing",
        description: "Advanced lab analysis within 24 hours",
      },
      {
        icon: <Target className="w-8 h-8 text-blue-600" />,
        title: "Get Results",
        description: "Receive accurate results through your provider",
      },
    ];

    const providerFlow = [
      {
        icon: <Phone className="w-8 h-8 text-teal-600" />,
        title: "Contact Us",
        description: "Reach out to set up your lab services",
      },
      {
        icon: <Shield className="w-8 h-8 text-teal-600" />,
        title: "Free Supplies",
        description: "Complimentary lab kits delivered to your office",
      },
      {
        icon: <Zap className="w-8 h-8 text-teal-600" />,
        title: "Efficient Collection",
        description: "50% less blood draw with our advanced technology",
      },
      {
        icon: <Users className="w-8 h-8 text-teal-600" />,
        title: "Daily Pickup",
        description: "Convenient courier service at your preferred time",
      },
    ];

    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Serve You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamlined processes for both patients and healthcare providers
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <button
                onClick={() => setActiveTab("patients")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === "patients"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                For Patients
              </button>
              <button
                onClick={() => setActiveTab("providers")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === "providers"
                    ? "bg-teal-600 text-white shadow-md"
                    : "text-gray-600 hover:text-teal-600"
                }`}
              >
                For Providers
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(activeTab === "patients" ? patientFlow : providerFlow).map(
              (step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-2">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="text-center mt-12">
            <button
              className={`${
                activeTab === "patients"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-teal-600 hover:bg-teal-700"
              } text-white px-8 py-4 rounded-lg transition-colors font-semibold text-lg shadow-lg`}
            >
              {activeTab === "patients"
                ? "Find a Provider"
                : "Get Started Today"}
            </button>
          </div>
        </div>
      </section>
    );
  };

  // About Section Component
  const AboutSection = () => {
    const features = [
      {
        icon: <Heart className="w-8 h-8 text-red-500" />,
        title: "Patient-Centered Care",
        description:
          "Focus on delivering superior care with minimal patient discomfort",
      },
      {
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        title: "Advanced Technology",
        description:
          "Ultra-automated facility with cutting-edge laboratory equipment",
      },
      {
        icon: <Clock className="w-8 h-8 text-green-500" />,
        title: "Rapid Turnaround",
        description:
          "24-hour results delivery to help you make timely decisions",
      },
      {
        icon: <Shield className="w-8 h-8 text-blue-500" />,
        title: "Quality Assurance",
        description:
          "Rigorous quality control measures ensure accurate results",
      },
    ];

    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Nation's Premier Specialty Lab
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our ultra-automated facility delivers results to physicians
                within 24 hours and offers a tailored, personalized service
                experience. We help healthcare providers save time by
                significantly minimizing blood draw requirements for each
                patient.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    50% reduction in blood draw requirements
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary supplies delivered to your office
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">
                    Daily courier pickup at your preferred time
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-xl">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Access Med Lab
                </h1>
                <p className="text-sm text-gray-600">
                  Premier Specialty Laboratory
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#physicians"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                For Physicians
              </a>
              <a
                href="#patients"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                For Patients
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Physician Login
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Patient Portal
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#services"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <a
                href="#physicians"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                For Physicians
              </a>
              <a
                href="#patients"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                For Patients
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Physician Login
                </button>
                <button className="w-full border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Patient Portal
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 pb-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Nation's Premier
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  {" "}
                  Specialty Laboratory
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ultra-automated facility delivering accurate results within 24
                hours. Specialized testing for hormone analysis, anti-aging,
                weight loss, and comprehensive diagnostic solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Order Tests Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  View Test Menu
                  <FileText className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">
                    24hr Turnaround
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">
                    CLIA Certified
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 font-medium">
                    Nationwide Service
                  </span>
                </div>
              </div>
            </div>
            <di className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Beaker className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Advanced Testing
                      </h3>
                      <p className="text-gray-600">Blood, Urine & Saliva</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Fast Results
                      </h3>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Secure & Reliable
                      </h3>
                      <p className="text-gray-600">HIPAA Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            </di>
          </div>
        </div>
      </section>

      {/* how we serve */}
      <UserFlowSection />

      {/* about section */}
      <AboutSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Testing Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced diagnostic solutions tailored to support optimal health
              and wellness outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Physicians Section */}
      <section id="physicians" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                For Healthcare Providers
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Streamlined ordering, rapid results, and comprehensive support
                for your practice
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      24-Hour Turnaround
                    </h4>
                    <p className="text-gray-600">
                      Fast, reliable results when you need them most
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Comprehensive Reports
                    </h4>
                    <p className="text-gray-600">
                      Detailed analysis with clinical interpretations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Dedicated Support
                    </h4>
                    <p className="text-gray-600">
                      Personal account management and technical support
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Create Account
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Download Test Menu
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Quick Order System
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Order tests online 24/7 with our intuitive platform
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Result Notifications
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Instant alerts when results are ready
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Insurance Billing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Seamless insurance processing and billing support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Healthcare Providers
            </h3>
            <p className="text-xl text-gray-600">
              See what physicians are saying about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Strategic Partners
            </h3>
            <p className="text-xl text-gray-600">
              Working with leading healthcare organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-6 mb-3">
                  <div className="text-gray-400 font-semibold">{partner}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container lg:mt-6 mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Become a Partner
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join our network of healthcare providers and experience the
                benefits of our personalized lab services. We offer competitive
                rates, reliable results, and dedicated support for all our
                partners.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">
                    Dedicated account management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">
                    Flexible pricing options
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">
                    Training and support included
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 font-semibold text-lg shadow-lg transform hover:-translate-y-1">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust Access Med Lab for
            their diagnostic needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Create Physician Account
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-xl">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Access Med Lab</h4>
                  <p className="text-gray-400 text-sm">
                    Premier Specialty Laboratory
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Nation's premier specialty laboratory delivering accurate
                results within 24 hours.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hormone Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Anti-Aging Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Weight Loss Testing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Specialty Testing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Providers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Physician Login
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Test Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Order Supplies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>1-800-ACCESS-LAB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@accessmedlab.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Jupiter, Florida</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Access Med Lab. All rights reserved. CLIA Certified
              Laboratory.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AccessMedLabHomepage;
