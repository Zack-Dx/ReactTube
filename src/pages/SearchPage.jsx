import { useSearchParams } from "react-router-dom";
export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  return <section className="col-span-10">Search Page :{keyword}</section>;
}
