import BenefitsPageGraphic from "@/assets/hero-image.jpg";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Services from "./Services";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Онлайн-сессии по нумерологии",
    description: (
      <>
        <strong>Разбор одного вопроса,</strong> <br /> продолжительность - <strong>50 минут</strong>
        <br />
        (запись не предоставляется)
        <br />
        <br />
        <strong>Разбор Родовой Структуры,</strong> продолжительность - <strong>90 минут</strong>
        <br />
        (PDF-запись предоставляется)
      </>
    ),
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Письменные расчеты и PDF-записи",
    description: (
      <>
       <strong>"Денежный Сет"</strong> <br /> (расчет Цифрового Кода, Денежный Комбинаций, Кода Успеха)
        <br />
        <br />
        <strong>Доплата за запись в PDF-формате по итогам онлайн сессии по нумерологии с рекомендациями</strong>
      </>
    ),
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Онлайн Сессии по Психологии, Арт-Терапии, Участие в Трансформационной Игре",
    description: (
      <>
        <strong>Индивидуальная онлайн-сессия</strong> <br />
        (гештальт-метод, арт-терапия, МАК-терапия, психодиагностика, продолжительность - 90 минут)
        <br />
        <br />
        <strong>
          Участие в психологической трансформационной игре "Путь Желаний" (группа до
          4-х участников
        </strong>{" "}
        продолжительность игры - 120-150 минут)
      </>
    ),
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="services" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Виды услуг</HText>
          <p className="mt-5 text-m">Запишитесь на консультацию через WhatsApp.</p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="items-stretch justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Services
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div className="mt-8 md:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                Узнайте больше о себе с помощью{" "}
                <span className="text-primary-500">нумерологии</span>.
              </HText>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Нумерология поможет вам понять свои сильные и слабые стороны,
                раскрыть потенциал и преодолеть жизненные препятствия. Она предоставляет ценные
                инструменты для самопознания, помогает улучшить личную жизнь и карьеру, а также
                понять свое предназначение и жизненный путь.

              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;