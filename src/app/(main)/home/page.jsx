import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Utensils,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Sección Hero */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Interior del restaurante Burger Smoke"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-5xl font-bold mb-4">
              Vive la Experiencia Burger Smoke
            </h2>
            <p className="text-xl mb-8">
              Excelencia culinaria en el corazón de Maracaibo
            </p>
            <Button size="lg">Hacer tu pedido</Button>
          </div>
        </section>

        {/* Platos Destacados */}
        <section id="menu" className="py-20 bg-zinc-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Platos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Hamburguesa Urbana",
                  description:
                    "Carne Angus, cebollas caramelizadas, queso artesanal",
                  image: "/burger.png",
                },
                {
                  name: "Ensalada Cityscape",
                  description:
                    "Verduras frescas, vegetales asados, vinagreta de cítricos",
                },
                {
                  name: "Pasta Metropolis",
                  description:
                    "Linguine casero, hongos silvestres, aceite de trufa",
                },
              ].map((dish, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  {/* <div className="h-48 bg-zinc-300 rounded-md mb-4"></div> */}
                  <Image
                    src={dish.image || "/placeholder.svg?height=400&width=400"}
                    alt={dish.name}
                    width={400}
                    height={400}
                    className="rounded-md"
                  />
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-zinc-600">{dish.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Chef preparando un plato"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
                <p className="text-lg mb-6">
                  Burger Smoke fue establecido en 2015 con una pasión por la
                  comida urbana. Desde hamburguesas hasta pizzas y focaccias,
                  traemos sabores gourmet a Maracaibo. Nuestros chefs combinan
                  ingredientes locales con inspiraciones globales para crear
                  experiencias gastronómicas inolvidables.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Utensils className="mr-4 text-zinc-600" />
                    <span>Ingredientes de origen local</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="mr-4 text-zinc-600" />
                    <span>Abierto de jueves a domingo</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-4 text-zinc-600" />
                    <span>Ubicado en Maracaibo, Venezuela</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto y Reservaciones */}
        <section id="contact" className="py-20 bg-zinc-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Contacto y Reservaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contáctanos</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="mr-4" />
                    <span>(123) 456-7890</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-4" />
                    <span>123 Calle Urbana, Ciudad, ST 12345</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-zinc-300">
                      <Instagram />
                    </a>
                    <a href="#" className="hover:text-zinc-300">
                      <Facebook />
                    </a>
                    <a href="#" className="hover:text-zinc-300">
                      <Twitter />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Haz una Reservación
                </h3>
                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <Input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <Input
                    type="tel"
                    placeholder="Teléfono"
                    className="bg-zinc-800 border-zinc-700"
                  />
                  <Input type="date" className="bg-zinc-800 border-zinc-700" />
                  <Input type="time" className="bg-zinc-800 border-zinc-700" />
                  <Button type="submit" className="w-full">
                    Reservar Ahora
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
