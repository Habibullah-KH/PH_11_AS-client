import ClockLoader from "react-spinners/ClockLoader";
const Loding = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-386px)]">
            <div className="p-5 rounded-full bg-[#ffd573] animate-pulse">
        <ClockLoader />
            </div>
        </div>
        </>
    );
};

export default Loding;