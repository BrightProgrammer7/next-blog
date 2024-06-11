import Image from "next/image";
import Link from "next/link";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
          <Link href={"/"}>
    <div className="flex items-center">

      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://links.papareact.com/1m8"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
      <h1 className={`text-3xl font-extrabold uppercase`}>
        {title || "Bloggers"}
      </h1>
      {/* {<>{renderDefault(props)}</>} */}
    </div>

    </Link>

  );
}

export default Logo;
