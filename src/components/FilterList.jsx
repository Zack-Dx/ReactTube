import Button from "./Button";

export default function FilterList() {
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
    "bigboss",
  ];
  return (
    <>
      <section className="flex gap-3 mx-2 my-5 overflow-x-scroll scrollbar-hide pr-10 w-auto">
        {buttonContentArray?.map((textContent, index) => (
          <Button key={index} textContent={textContent} />
        ))}
      </section>
    </>
  );
}
