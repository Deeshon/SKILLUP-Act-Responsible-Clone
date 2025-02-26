const AwarenessItem = ({
  item,
}: {
  item: { number: string; title: string; buttonTitle: string };
}) => {
  const { buttonTitle, number, title } = item;
  return (
    <div className="flex flex-col items-center justify-center w-50">
      <p className="text-gray-600 text-sm">{number}</p>
      <h1 className="text-red-000 text-2xl font-bold">{title}</h1>
      <div className="w-14 mt-2 mb-6 h-1 bg-red-000"></div>
      <button className="bg-red-000 px-5 py-2 rounded-3xl text-white font-bold">
        {buttonTitle}
      </button>
    </div>
  );
};

export default AwarenessItem;
