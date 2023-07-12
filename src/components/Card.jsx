export default function Card({ item }) {
  return (
    <article
      className={`p-8 rounded-xl lg:rounded-lg ${item.backgroundColor} bg-tw-grayish-blue drop-shadow-2xl ${item.classes} flex flex-col justify-between relative`}
    >
      <header className="flex items-center justify-between gap-3 mb-4">
        <figure className={`rounded-full overflow-hidden w-8 h-8 ${item.ring}`}>
          <img src={item.avatarUrl} alt={`avatar of ${item.name}`} />
        </figure>

        <div className="flex-1">
          <p className={`${item.color} text-base`}>{item.name}</p>
          <p className={`${item.color} opacity-50`}>{item.description}</p>
        </div>
      </header>

      <h1 className={`${item.color} text-[1.5rem] font-bold leading-7`}>
        {item.heading}
      </h1>

      <p className={`${item.color} opacity-70 mt-4`}>{item.body}</p>

      {item.pattern && (
        <img
          src={item.pattern}
          className="absolute top-0 right-5 lg:right-20 -z-10 select-none"
          alt="quote icon"
        />
      )}
    </article>
  );
}
