// app/resources/page.tsx (eller pages/resources.tsx beroende på din struktur)
const ResourcesPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Nyttiga Länkar och Resurser</h1>
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
        {/* Lägg till fler länkar här */}
      </ul>
    </div>
  );
};

export default ResourcesPage;
