// app/components/VideoSection.tsx
// const VideoSection = () => {
//   return (
//     <section className="bg-lightGray py-20">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           Titta på vår Introduktionsvideo
//         </h2>
//         <div className="relative mb-8">
//           <iframe
//             className="w-full h-64 md:h-96"
//             src="https://www.youtube.com/embed/xfyPPClES5U?si=X_-OeddzadKduCRf" // Byt ut med rätt YouTube ID
//             title="Introduktion till Motorsågskörkortet"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoSection;

// app/components/VideoSection.tsx
// const VideoSection = () => {
//   return (
//     <section className="bg-lightGray py-20">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         {/* Videodelen */}
//         <div className="w-full md:w-2/3 mb-8 md:mb-0">
//           <iframe
//             className="w-full h-64 md:h-96"
//             src="https://www.youtube.com/embed/xfyPPClES5U?si=X_-OeddzadKduCRf" // Ändra med korrekt YouTube-ID
//             title="Introduktion till Motorsågskörkortet"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>

//         {/* Textdelen */}
//         <div className="w-full md:w-1/3 md:pl-8">
//           <h2 className="text-2xl font-bold mb-4">Vår Utbildning</h2>
//           <p className="text-lg">
//             Här är en introduktion till vårt motorsågskörkort. Genom att följa
//             våra kurser kommer du att lära dig säker hantering av motorsågen,
//             riskhantering och säkerhet vid trädfällning. Titta på videon för att
//             få en inblick i hur vi jobbar!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoSection;

const VideoSection = () => {
  return (
    <section className="bg-lightGray py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Videodelen */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <iframe
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/DIN_VIDEO_ID" // Ändra med korrekt YouTube-ID
            title="Introduktion till Motorsågskörkortet"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Textdelen */}
        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Vår Utbildning</h2>
          <p className="text-lg">
            Här är en introduktion till vårt motorsågskörkort. Genom att följa
            våra kurser kommer du att lära dig säker hantering av motorsågen,
            riskhantering och säkerhet vid trädfällning. Titta på videon för att
            få en inblick i hur vi jobbar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
