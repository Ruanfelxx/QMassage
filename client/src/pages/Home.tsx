import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Calendar, Star, MapPin, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Massagem Relaxante",
      description: "Para alívio do estresse e melhora do sono",
      color: "bg-blue-50",
      benefits: ["Reduz tensão", "Melhora sono", "Relaxamento profundo"]
    },
    {
      title: "Massagem Terapêutica",
      description: "Foco em dores crônicas e tensão muscular",
      color: "bg-green-50",
      benefits: ["Alívio de dores", "Recuperação muscular", "Mobilidade"]
    },
    {
      title: "Massagem Facial",
      description: "Revitalização e drenagem",
      color: "bg-purple-50",
      benefits: ["Pele revitalizada", "Drenagem linfática", "Rejuvenescimento"]
    },
    {
      title: "Reflexologia",
      description: "Massagem nos pés para alívio de fadiga",
      color: "bg-orange-50",
      benefits: ["Alívio de fadiga", "Equilíbrio energético", "Relaxamento"]
    },
    {
      title: "Liberação Miofascial",
      description: "Restauração da mobilidade e flexibilidade",
      color: "bg-pink-50",
      benefits: ["Mobilidade", "Flexibilidade", "Recuperação"]
    },
    {
      title: "Quick Massage",
      description: "Massagem na cadeira para relaxamento rápido",
      color: "bg-yellow-50",
      benefits: ["Rápido", "Eficaz", "Sem compromisso"]
    }
  ];

  const pricing = [
    {
      location: "Estúdio (Maca)",
      address: "Rua Dom Vilares, 1246 – Sala 1",
      sessions: [
        { duration: "60 min", price: "R$ 150,00" },
        { duration: "90 min", price: "R$ 200,00" },
        { duration: "120 min", price: "R$ 250,00" }
      ]
    },
    {
      location: "Em Domicílio (Maca)",
      address: "Atendimento em sua casa",
      sessions: [
        { duration: "60 min", price: "R$ 200,00" },
        { duration: "90 min", price: "R$ 250,00" },
        { duration: "120 min", price: "R$ 300,00" }
      ]
    },
    {
      location: "Quick Massage (Cadeira)",
      address: "Massagem rápida e eficaz",
      sessions: [
        { duration: "20 min", price: "R$ 40,00" },
        { duration: "30 min", price: "R$ 60,00" },
        { duration: "40 min", price: "R$ 80,00" },
        { duration: "50 min", price: "R$ 100,00" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Cliente Verificado no Google",
      text: "Excelente atendimento! Profissional muito atencioso e competente. O ambiente é aconchegante e limpo. Recomendo muito!",
      rating: 5,
      verified: true
    },
    {
      name: "Cliente Verificado no Google",
      text: "Melhor massagem que já tive! Profissional conhece muito bem o que faz. Saí totalmente relaxado e sem dores.",
      rating: 5,
      verified: true
    },
    {
      name: "Cliente Verificado no Google",
      text: "Ótima qualidade de atendimento. Profissional muito preparado e atencioso. Voltarei com certeza!",
      rating: 5,
      verified: true
    },
    {
      name: "Cliente Verificado no Google",
      text: "Ambiente profissional e acolhedor. O terapeuta é muito atencioso e realmente entende do assunto. Muito bom!",
      rating: 5,
      verified: true
    },
    {
      name: "Cliente Verificado no Google",
      text: "Excelente! Profissional de alta qualidade. Recomendo para qualquer pessoa que procura uma boa massagem.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <div className="w-9 md:w-10 h-9 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg flex-shrink-0">
              EQ
            </div>
            <div className="min-w-0">
              <h1 className="text-base md:text-xl font-bold text-slate-900 truncate">Estação QMassage</h1>
              <p className="text-xs text-slate-600 truncate">Bem-estar com excelência</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <a href="#servicos" className="text-sm lg:text-base text-slate-700 hover:text-blue-600 transition font-medium">Serviços</a>
            <a href="#precos" className="text-sm lg:text-base text-slate-700 hover:text-blue-600 transition font-medium">Preços</a>
            <a href="#sobre" className="text-sm lg:text-base text-slate-700 hover:text-blue-600 transition font-medium">Sobre</a>
            <a href="#contato" className="text-sm lg:text-base text-slate-700 hover:text-blue-600 transition font-medium">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              A Massagem que Você Precisa
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto">
              Desde 2018, transformando vidas com terapias personalizadas e um toque de excelência
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base">
              <Calendar className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Agendar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base">
              <MessageCircle className="w-4 md:w-5 h-4 md:h-5 mr-2" />
              Fale Conosco
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Nossas Terapias</h3>
            <p className="text-xl text-slate-600">Escolha o serviço perfeito para suas necessidades</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className={`cursor-pointer transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  activeService === idx ? "ring-2 ring-blue-600 shadow-2xl border-blue-600" : "border-slate-200 hover:border-blue-300"
                }`}
                onClick={() => setActiveService(idx)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${service.color} rounded-lg mb-3 flex items-center justify-center font-bold text-slate-700`}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <CardTitle className="text-lg md:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Investimento em Seu Bem-Estar</h3>
            <p className="text-xl text-slate-600">Preços acessíveis para qualidade premium</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((category, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-slate-200">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <CardTitle className="text-lg md:text-xl">{category.location}</CardTitle>
                  <CardDescription className="text-blue-100 text-sm">{category.address}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {category.sessions.map((session, i) => (
                      <div key={i} className="flex justify-between items-center pb-4 border-b border-slate-200 last:border-b-0">
                        <span className="text-slate-700 font-medium text-sm md:text-base">{session.duration}</span>
                        <span className="text-blue-600 font-bold text-base md:text-lg">{session.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-slate-900 mb-6">Sobre a Estação QMassage</h3>
              <p className="text-lg text-slate-700 mb-4">
                <strong>Desde 2018</strong>, a Estação QMassage é referência em qualidade e profissionalismo no segmento de terapias corporais em São Paulo. Com <strong>5.0 estrelas e 77 avaliações reais</strong> no Google, somos a escolha de clientes que entendem de qualidade.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Nossa equipe é composta por profissionais altamente qualificados, dedicados a oferecer muito mais do que massagens: oferecemos um refúgio para seu bem-estar. Cada sessão é personalizada para atender à sua necessidade específica, seja alívio de dores, redução de estresse ou relaxamento profundo.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Trabalhamos com uma abordagem integrativa, utilizando técnicas comprovadas e um ambiente profissional e aconchegante. Nossos clientes saem não apenas relaxados, mas transformados.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-sm text-slate-700">
                  <strong>O que nossos clientes dizem:</strong> \"Profissional muito atencioso e competente. O ambiente é aconchegante e limpo. Recomendo muito!\"
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">2018</div>
                  <p className="text-slate-700 font-semibold">Desde</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">5.0 ⭐</div>
                  <p className="text-slate-700 font-semibold">77 Reviews</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">8+</div>
                  <p className="text-slate-700 font-semibold">Terapias</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">Qualidade</div>
                  <p className="text-slate-700 font-semibold">Premium</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                <span className="text-lg font-bold">★★★★★</span>
                <span>5.0 - 77 Avaliações Reais no Google</span>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">O que Dizem Nossos Clientes</h3>
            <p className="text-xl text-slate-600">Comentários verificados de clientes reais</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-slate-200 relative">
                {testimonial.verified && (
                  <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <span>✓</span> Verificado
                  </div>
                )}
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic text-sm md:text-base">"{ testimonial.text}"</p>
                  <p className="font-semibold text-slate-900 text-sm md:text-base">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-8">Fale Conosco</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Telefone</h4>
                    <p className="text-slate-700 font-medium">(11) 9 4043-9190</p>
                    <p className="text-xs text-slate-500 mt-1">Atendimento rápido e profissional</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">WhatsApp</h4>
                    <p className="text-slate-700 font-medium">(11) 9 4043-9190</p>
                    <p className="text-xs text-slate-500 mt-1">Resposta em minutos</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Localização</h4>
                    <p className="text-slate-700 font-medium">Rua Dom Vilares, 1246 – Sala 1</p>
                    <p className="text-slate-600 text-sm">Vila das Mercês, São Paulo, SP</p>
                    <p className="text-xs text-slate-500 mt-1">Perto do Shopping Tatuapé</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Horário de Funcionamento</h4>
                    <p className="text-slate-700"><strong>Segunda a Sexta:</strong> 9h às 20h</p>
                    <p className="text-slate-700"><strong>Sábado:</strong> 9h às 18h</p>
                    <p className="text-xs text-slate-500 mt-1">Agende com antecedência</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Agende Sua Sessão</h4>
              <p className="mb-6 text-blue-100">
                Entre em contato conosco para agendar sua sessão personalizada. Estamos prontos para ajudá-lo!
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Abrir WhatsApp
                </Button>
                <Button className="w-full bg-blue-700 text-white hover:bg-blue-900 font-semibold border border-white/30">
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-3 md:gap-4 z-40">
        <button
          onClick={() => window.open("https://wa.me/5511940439190", "_blank")}
          className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-glow"
          title="Abrir WhatsApp"
        >
          <MessageCircle className="w-7 md:w-8 h-7 md:h-8" />
        </button>
        <button
          onClick={() => window.location.href = "tel:+5511940439190"}
          className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-glow"
          title="Ligar"
        >
          <Phone className="w-7 md:w-8 h-7 md:h-8" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">Estação QMassage</h4>
              <p className="text-sm">Bem-estar com excelência desde 2018</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Serviços</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#servicos" className="hover:text-white transition">Massagem Relaxante</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Massagem Terapêutica</a></li>
                <li><a href="#servicos" className="hover:text-white transition">Quick Massage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="text-sm space-y-2">
                <li>(11) 9 4043-9190</li>
                <li>estacaoqmassage@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Localização</h4>
              <p className="text-sm">Rua Dom Vilares, 1246 – Sala 1</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>&copy; 2024 Estação QMassage. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
