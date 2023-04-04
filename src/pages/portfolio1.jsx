import { useSearchParams } from "react-router-dom";

function Portfolio1() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const image = searchParams.get("image");

  return (
    <div className="bg-green-200 max-w-screen-xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      <div>{title}</div>
      <div>{desc}</div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
      </div>
    </div>
  );
}

export default Portfolio1;
