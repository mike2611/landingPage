import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alejandro Rivas",
    role: "CEO, Tech Ventures",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClYzutSXIDNp4pRzE-ujJ2ml1lMqfz0qCMYxeolIYausLNhdCgi4WGdbFrtNpY-RqzrvqvygKfWqHp1Q_hCXDHaSxOeZNyqpSWCko8NvjpiN3nPRczhgOSxxsrisLa6CN6HrKonoaIDp39Xmyb_lFMyuXCcLNws-L8KyS2y_UxiH4L8qgoKb4jGUsIjHYKyb3USww4iS-RX774GoSg-P57JOdO3nG3B3Z7f5f_Sg795Nsoyfrbo73eykomueK1PJcV1yXwj1-Xe2jI",
    quote: "El nivel de detalle técnico y la capacidad de MP Web Solutions para entender nuestros objetivos de negocio superaron cualquier expectativa previa."
  },
  {
    name: "Elena Martinez",
    role: "Founder, Creative Studio",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHnctubi1U3e73ilam81ndXdMUZsQzXIXgdKwXhsNCpF5MRLEXmLNDSOvUdHGjVlP7B3lmhaWLCj8A1WNIjMiiq4UJmhzdd_5rtivieYimW2n4bjIHftgABqL6Cbwjoj1PmQmklY5Ym5-AoKQTDL0pWedcECEYoOkF8MoLXLuBaOg__b_LYvIBZcu8HprYB4m-cAXg1AvCEiOMC1LgfVakVQAnksqIlwybnrWRAqix5bTv4udfuhYyjSVS7ZVQ07Z0wfPMT5g3mQdL",
    quote: "MP Web Solutions nos entregó un sistema de ventas automatizado que duplicó nuestros leads orgánicos en solo tres meses."
  },
  {
    name: "Marcos Vega",
    role: "Technical Lead, Frame Scale",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtBJDuP7yR8ikMpCiMxKhYuQOZAkW7g_Uhql3OpmM1gtMRrvwvnju8xBpKT7K0yBydNNLmrAcnLRJXOqeXmshXF4fs_sZVlRmA3hbmze9RBtiQCH7J9xNmwtqGxunG_W8_4uOYuegbvuF_yjyVJxeP-lOzZyZq30plk28Z9DwJ52XQfUflC82ixJP9sETsa9amNbv9beWqgFntjGygZzCdgG3Bb7KYeg61LKL55nsBcsTMpbPngr6Jc8eIhIUN3OgJdzhekXc2BTEV",
    quote: "Implementación impecable. La integración con WhatsApp ha sido el cambio más significativo para nuestro equipo técnico de soporte."
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Confianza Institucional
          </motion.h2>
          <motion.p
            className="text-tertiary text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Líderes que han escalado sus operaciones con nuestra ayuda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-10 glass-panel rounded-2xl flex flex-col justify-between hover:translate-y-[-8px] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div>
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-white text-lg italic leading-relaxed mb-8">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-tertiary text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
