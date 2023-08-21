import { Link } from "react-router-dom";
import Button from "../common/Button";
const buttonContentArray = [
  "All",
  "Javascript",
  "DSA",
  "Cricket",
  "News",
  "Computer Science",
  "Comedy Shows",
  "React JS",
  "Frontend Interview",
  "Bigboss",
];

export default function FilterList() {
  return (
    <>
      <section className="flex gap-3 my-5 overflow-x-auto px-3 scrollbar-hide">
        {buttonContentArray?.map((textContent, index) => (
          <Link
            key={index}
            to={textContent === "All" ? "/" : `/results?keyword=${textContent}`}
          >
            <Button textContent={textContent} />
          </Link>
        ))}
      </section>
    </>
  );
}
