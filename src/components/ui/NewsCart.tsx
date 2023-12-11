import Link from "next/link";
import { INews } from "./AllNews";

const NewsCart = ({ news }: { news: INews }) => {
  return (
    <Link href={`/${news?.objectID}`}>
      <li className="text-xl hover:font-semibold hover:text-blue-400 hover:underline cursor-pointer my-1 ">
        {news?.title}
      </li>
    </Link>
  );
};

export default NewsCart;
