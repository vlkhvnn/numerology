import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Rules = ({ setSelectedPage }: Props) => {
  return (
    <section id="rules" className="w-full bg-gray-20 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Rules)}
      >
        <motion.div
          className="mx-auto w-4/5 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>Правила Работы</HText>
          <p className="py-5 text-lg text-gray-600">
            Ознакомьтесь с правилами работы по онлайн-сессиям и письменным расчётам.
          </p>
        </motion.div>

        <div className="mt-10 mx-auto w-4/5 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-500">
            <h3 className="text-2xl font-semibold mb-4">По онлайн-сессиям</h3>
            <p className="text-gray-700 leading-relaxed">
  Запись на онлайн-сессии производится по итогам полной предоплаты через ссылку в Taplink или WhatsApp.<br /><br />
  Сессии с несовершеннолетними проводятся только с согласия родителя или законного представителя ребенка.<br /><br />
  Расписание на онлайн-сессии и трансформационную игру "Путь Желаний" формируется заранее (за две-три недели)<br /><br />
  Дата и время каждой сессии обговариваются с Клиентом заранее. На сессию нельзя опаздывать<br /><br />
  Для онлайн-сессии по арт-терапии необходимо заранее подготовить материалы для работы (список отправляется заранее)<br /><br />
  Сессии проходят по WhatsApp Video.
</p>

          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-500">
            <h3 className="text-2xl font-semibold mb-4">По письменным расчётам</h3>
            <p className="text-gray-700 leading-relaxed">
              Расчёт "Денежный Сет" и PDF-запись по итогам нумерологической сессии отправляются на e-mail в течение трёх рабочих дней 
              с момента поступления оплаты.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Rules;
