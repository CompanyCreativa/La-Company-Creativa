"use client";

export default function page() {
  return (
    <div className="relative min-h-screen bg-[#090916] overflow-hidden">
      {/* Luces difuminadas */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 rounded-full blur-3xl opacity-30 animate-float1 z-0" />
      <div className="absolute bottom-[-100px] right-[-150px] w-[250px] h-[250px] bg-pink-500 rounded-full blur-2xl opacity-20 animate-float2 z-0" />
      <div className="absolute top-[30%] left-[50%] w-[200px] h-[200px] bg-blue-400 rounded-full blur-2xl opacity-25 animate-float3 z-0" />

      {/* Capa de granulado */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] mix-blend-overlay bg-[url('/noise.png')] bg-cover" />

      {/* Contenido */}
      <div className="relative z-10 text-white p-8">Hola</div>

      {/* Animaciones */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(-15px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(20px);
          }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 12s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
