import react from "react";

import "../Footer/footer.scss";

export default function Footer() {
  return (
    <footer
      className="flex items-end h-20 w-12 justify-center"
      style={{ height: "300px", width: "100%" }}
    >
      {" "}
      <h6 className=" text-2xl text-white mb-8">2024</h6>
    </footer>
  );
}
