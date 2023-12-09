import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/home">Return Home</Link>
    </div>
  );
};

export default Custom404;
