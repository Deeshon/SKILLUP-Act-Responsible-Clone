const StatItem = ({item}: {item: {title: string; description: string;}}) => {
  return (
    <div className="text-white">
    <h1 className="font-bold text-xl sm:text-4xl sm:mb-2">{item.title}</h1>
    <p className="text-sm/relaxed">{item.description}</p>
  </div>
  )
}

export default StatItem