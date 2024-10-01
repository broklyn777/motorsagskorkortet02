// app/components/UsefulLinksComponent.tsx
const UsefulLinksComponent = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Nyttiga Länkar</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://sakerskog.se/utbildning/motorsagskorkort/"
              target="_blank"
              className="text-blue-600"
            >
              Säker Skog - Utbildning i Motorsågskörkort
            </a>
          </li>
          {/* Lägg till fler länkar här om nödvändigt */}
        </ul>
      </div>
    </section>
  );
};

export default UsefulLinksComponent;
