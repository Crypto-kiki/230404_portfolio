// import { useEffect } from "react";
import { Link } from "react-router-dom";

function PortfolioCard({ title, desc, image, index }) {
  const colors = [
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ];
  // useEffect(() => {
  //   console.log(title);
  //   console.log(desc);
  //   console.log(image);
  // }, []);      useEffect로 데이터 잘 들어오는지 확인 가능.

  return (
    <li className="bg-purple-100 w-60 h-72 rounded-xl relative">
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          // ../public/images 가 기본적으로 내장되어 있는것임.
          alt="프로젝트 이미지"
        />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      <Link
        to={`/portfolio1/${index}?title=${title}&desc=${desc}&image=${image}`}
      >
        <button
          className={`absolute bottom-0 right-0 m-4 px-4 py-2 bg-red-300 rounded-md ${
            colors[index % colors.length]
          }`}
        >
          View
        </button>
      </Link>
    </li>
  );
}

export default PortfolioCard;
