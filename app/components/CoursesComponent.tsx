// app/components/CoursesComponent.tsx
const CoursesComponent = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Våra Kurser</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Motorsågskörkort AB</h3>
            <p className="text-gray-600 mb-4">
              Lär dig grunderna i motorsågskörning.
            </p>
            <a
              href="/courses/grundkurs"
              className="text-blue-600 font-semibold"
            >
              Läs mer
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Avancerad Kurs</h3>
            <p className="text-gray-600 mb-4">
              För de som vill ta sin kunskap till nästa nivå.
            </p>
            <a
              href="/courses/avancerad"
              className="text-blue-600 font-semibold"
            >
              Läs mer
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Säkerhetskurs</h3>
            <p className="text-gray-600 mb-4">
              Fokus på säkerhet och riskhantering.
            </p>
            <a href="/courses/sakerhet" className="text-blue-600 font-semibold">
              Läs mer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesComponent;
