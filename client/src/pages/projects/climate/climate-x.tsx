export default function EventsPage() {
  return (
    <div>
      <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
        Humans emit <br className="block md:hidden" />
        <span className="relative">
          <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
            51 billion tons CO2e every year.{" "}
            <span className="text-3xl md:text-2xl">👋</span>
          </span>
          <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"></span>
        </span>
      </h1>
    </div>
  );
}
