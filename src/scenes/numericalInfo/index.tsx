import Services from "@/scenes/services/Services";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const NumericalInfo = ({ setSelectedPage }: Props) => {
  const services = [
    {
      icon: <HomeModernIcon className="h-6 w-6 text-primary-500" />, 
      title: "Для онлайн-сессии и письменных расчётов",
      description: (
        <ul className="text-left list-none pl-5">
          <li>ФИО на русском и английском языках (как в паспорте)</li><br />
          <li>Дата рождения (фактическая и по паспорту)</li><br />
          <li>Место и Время рождения (если известно)</li><br />
          <li>Способ рождения: естественное или кесарево</li><br />
          <li>Если меняли Фамилию, то данные старой и дата смены</li><br />
          <li>ФИО и Дата рождения Родителей, Бабушек и Дедушек (если известно)</li>
        </ul>
      ),
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-secondary-500" />, 
      title: "Для онлайн-сессии \"Разбор Родовой Структуры\"",
      description: (
        <p className="text-left">
          Расчёты и анализ проводятся на основе данных, внесённых в специальную Анкету, которая заранее отправляется Клиенту на e-mail.
        </p>
      ),
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6 text-tertiary-500" />, 
      title: "Для онлайн-разборов в рамках Фокус-группы",
      description: (
        <p className="text-left">
          Расчёты проводятся на основе заполненной Анкеты, которая заранее отправляется на e-mail. Информация публикуется в Telegram.
        </p>
      ),
    },
  ];

  return (
    <section id="numericalInfo" className="mx-auto w-5/6 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.NumericalInfo)}
      >
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }}
        >
          <HText>Цифровые данные, необходимые для расчёта и диагностики</HText>
          <p className="mt-5 text-gray-800 max-w-2xl mx-auto">
            Пожалуйста, предоставьте необходимые данные для точных расчётов и диагностики.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {services.map((service, index) => (
            <Services key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default NumericalInfo;
