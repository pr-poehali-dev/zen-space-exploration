import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Проектирование",
    description: "Разрабатываем оптимальные трассы прокладки кабелей с учётом нагрузок, норм ПУЭ и особенностей объекта.",
    icon: "Ruler",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Поставка",
    description: "Кабельные лотки, короба, кабельные каналы, стойки и аксессуары от ведущих производителей со склада и под заказ.",
    icon: "Package",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Монтаж",
    description: "Профессиональная установка кабеленесущих систем любой сложности — от небольших офисов до крупных промышленных объектов.",
    icon: "Wrench",
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Полный цикл
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">кабельных систем</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        От проектирования до монтажа — берём на себя весь процесс организации кабельной инфраструктуры. Работаем с промышленными предприятиями, торговыми центрами, офисными и жилыми комплексами.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
