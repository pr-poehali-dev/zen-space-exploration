import Icon from "@/components/ui/icon"

const projects = [
  {
    id: 1,
    slug: "factory-cable-trays",
    title: "Завод «МеталлПром»",
    shortDescription: "Монтаж 2 400 п.м. перфорированных лотков в цехах производственного предприятия",
    mainImage: "https://cdn.poehali.dev/projects/b4ef3ac1-b1dc-4511-b9ad-5131524c49c6/files/48d232e8-e795-4988-bf8f-b37f01e924ec.jpg",
  },
  {
    id: 2,
    slug: "commercial-building",
    title: "ТЦ «Галерея»",
    shortDescription: "Комплексная кабельная трасса торгового центра площадью 45 000 м²",
    mainImage: "https://cdn.poehali.dev/projects/b4ef3ac1-b1dc-4511-b9ad-5131524c49c6/files/be772eb4-0ea3-4008-8d05-4e3bef3c9e95.jpg",
  },
  {
    id: 3,
    slug: "data-center",
    title: "Дата-центр DataHub",
    shortDescription: "Организация структурированной кабельной инфраструктуры серверного зала",
    mainImage: "https://cdn.poehali.dev/projects/b4ef3ac1-b1dc-4511-b9ad-5131524c49c6/files/b17f86d9-89cb-45eb-abf0-9d3e3fc184a3.jpg",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Реализованные
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">объекты</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Мы успешно реализовали сотни объектов по всей России — от небольших офисов до крупных промышленных предприятий. Каждый проект выполнен в срок и в соответствии с нормами.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group">
                Подробнее{" "}
                <Icon name="ArrowUpRight" size={16} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Все проекты
        </a>
      </div>
    </section>
  )
}
