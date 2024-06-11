import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#f7ab0a] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-[#f7ab0a] " />
          Go To Website
        </Link>
        <div className="hidden md:flex p-5 rounded-lg justify-center  border-2 border-[#F7AB0A]" >
          <h1 className="font-bold text-white">
            Want Contribute to the Project, Pull Request to this Repo 👉
          </h1>
          <Link href="/" className="text-[#F7AB0A] font-bold ml-2">
            www.eventsblog.com
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
