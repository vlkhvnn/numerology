import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string | JSX.Element;
};

const Services = ({ icon, title, description }: Props) => {
  return (
    <motion.div
    variants={childVariant}
    className="mt-8 md:mt-0 flex flex-col justify-between w-full md:w-1/3 rounded-md border-2 border-gray-100 px-5 py-8 text-center"
  >
    <div className="mb-4 flex justify-center">
      <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
        {icon}
      </div>
    </div>
  
    <h4 className="font-bold">{title}</h4>
    <div className="flex-grow">
      <p className="my-3">{description}</p>
    </div>
  </motion.div>
  );
};

export default Services;
