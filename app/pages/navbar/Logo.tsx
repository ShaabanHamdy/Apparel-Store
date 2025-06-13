import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
        <Link href="/">Name</Link>
      </div>
    </div>
  );
};

export default Logo;
