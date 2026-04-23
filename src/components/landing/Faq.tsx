import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Какие виды кабеленесущих систем вы поставляете?",
    answer:
      "Мы поставляем полный ассортимент: перфорированные и неперфорированные лотки, лестничные лотки, кабельные короба и каналы, проволочные лотки, стойки и кронштейны, а также все необходимые аксессуары и крепёжные элементы.",
  },
  {
    id: 2,
    question: "Работаете ли вы с крупными промышленными объектами?",
    answer:
      "Да, это наш ключевой профиль. Мы реализуем проекты на заводах, производственных комплексах, нефтегазовых объектах, складах и дата-центрах. Объём не является ограничением — работаем с любыми масштабами.",
  },
  {
    id: 3,
    question: "Соответствует ли продукция нормативным требованиям?",
    answer:
      "Вся поставляемая продукция сертифицирована и соответствует требованиям ПУЭ, ГОСТ и противопожарным нормам. По запросу предоставляем полный пакет сертификатов и технической документации.",
  },
  {
    id: 4,
    question: "Какие сроки поставки?",
    answer:
      "Позиции со склада — от 1 до 3 рабочих дней. Крупные партии и нестандартные изделия — от 5 до 15 рабочих дней в зависимости от объёма. Точные сроки согласовываются при оформлении заказа.",
  },
  {
    id: 5,
    question: "Можете ли вы разработать проект кабельной трассы?",
    answer:
      "Да, наши инженеры разрабатывают проектную документацию, выполняют расчёты нагрузок и подбирают оптимальное решение под ваш объект. Проектирование осуществляется в соответствии с действующими нормами.",
  },
  {
    id: 6,
    question: "Предоставляете ли вы гарантию на монтажные работы?",
    answer:
      "Да, на все выполненные монтажные работы предоставляется гарантия 2 года. На поставляемую продукцию действует гарантия производителя. Также оказываем сервисное обслуживание после сдачи объекта.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаем на самые распространённые вопросы о поставке и монтаже кабеленесущих систем. Не нашли ответ — свяжитесь с нами напрямую.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
