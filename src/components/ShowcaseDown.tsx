import { useRef } from "react";

function ShowcaseDown() {
  const targetRef = useRef<HTMLDivElement>(null);

  const smoothScrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="text-4xl text-center my-20">
        Showcase
        <div
          className="mt-5 cursor-pointer animate-bounce"
          onClick={smoothScrollToTarget}
        >
          ↓
        </div>
      </div>
      <div
        ref={targetRef}
        id="targetSection"
        className="h-screen bg-blue-200 mt-10"
      >
        Target Section
      </div>
    </div>
  );
}

export default ShowcaseDown;
