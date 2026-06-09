import { SyncLoader } from "react-spinners";

const LoaderComponent = () => {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center bg-[#131313] font-[Playfair_Display] text-[48px] text-[#e5e2e1]">
      <SyncLoader
        color="#f2ca50"
        loading={true}
        size={18}
        aria-label="Loading Spinner"
        data-testid="loader"
      ></SyncLoader>
      <p className="pt-6">Cargando</p>
    </main>
  );
};

export default LoaderComponent;
