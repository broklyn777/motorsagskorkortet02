// app/components/MediaSection.tsx
// const MediaSection = () => {
//   return (
//     <section className="bg-lightGray py-20">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           Titta på vår Introduktionsvideo
//         </h2>
//         <div className="relative mb-8">
//           <iframe
//             className="w-full h-64 md:h-96"
//             src="https://www.youtube.com/embed/DIN_VIDEO_ID"
//             title="Introduktion till Motorsågskörkortet"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//         <h3 className="text-2xl font-semibold">
//           Eller se bilder från våra utbildningar
//         </h3>
//         <img
//           className="w-full h-auto mt-6 rounded-lg shadow-lg"
//           src="/images/utbildning.jpg"
//           alt="Motorsågskörkort utbildning"
//         />
//       </div>
//     </section>
//   );
// };

// export default MediaSection;
// app/components/MediaSection.tsx
const MediaSection = () => {
  return (
    <section className="bg-lightGray py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Se bilder från våra utbildningar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/images/utbildning.jpg"
            alt="Motorsågskörkort utbildning 1"
          />
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/images/utbildning.jpg"
            alt="Motorsågskörkort utbildning 2"
          />
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="/images/utbildning.jpg"
            alt="Motorsågskörkort utbildning 3"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
