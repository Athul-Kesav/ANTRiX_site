import "./loader.css";

export default function LoadingScreen() {
  return (
    <>
      <div className="wrapper absolute top-0 left-0 w-full h-full bg-main flex justify-center items-center">
        <span className="square bg-accent square-7"></span>
        <span className="square bg-accent square-6"></span>
        <span className="square bg-accent square-5"></span>
        <span className="square bg-accent square-4"></span>
        <span className="square bg-accent square-3"></span>
        <span className="square bg-accent square-2"></span>
        <span className="square bg-accent square-1"></span>
      </div>
    </>
  );
}
