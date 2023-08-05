import Button from "./Button";
const buttonContentArray = [
  "All",
  "Javascript",
  "Computer Science",
  "Live",
  "Gaming",
  "Computer and Information",
  "Game Shows",
  "Driving",
  "Coding",
  "Bigboss",
];

export default function FilterList() {
  return (
    <>
      <section className="flex gap-3 my-5 overflow-x-auto scrollbar-hide md:px-10">
        {buttonContentArray.map((textContent, index) => (
          <Button key={index} textContent={textContent} />
        ))}
      </section>
    </>
  );
}
