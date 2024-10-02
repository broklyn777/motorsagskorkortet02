import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-forestGreen p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Vänster: Logo länkar till hem */}
        <Link href="/" className="text-white text-2xl font-bold">
          Motorsågskörkortet
        </Link>

        {/* Höger: Länkar centrerade */}
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link
              href="/courses"
              className="text-white hover:text-safetyOrange"
            >
              Kurser
            </Link>
          </li>
          <li>
            <Link
              href="/affiliate"
              className="text-white hover:text-safetyOrange"
            >
              Affiliate
            </Link>
          </li>
          <li>
            <Link href="/blogg" className="text-white hover:text-safetyOrange">
              Blogg
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="text-white hover:text-safetyOrange"
            >
              Resurser
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
