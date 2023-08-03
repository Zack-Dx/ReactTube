export default function Button(props) {
  const { textContent } = props;
  return (
    <>
      <button className="bg-gray-100 outline-none transition whitespace-nowrap hover:bg-gray-200 rounded-md py-2 px-5 text-sm">
        {textContent}
      </button>
    </>
  );
}
