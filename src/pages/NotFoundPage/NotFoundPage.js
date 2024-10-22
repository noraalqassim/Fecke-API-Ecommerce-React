import React from "react";

import notfound from "../../Images/error.png";
function NotFoundPage() {
  return (
    <div className="error">
      <h2>404 Not Found Page</h2>
      <img src={notfound} alt="404" />
    </div>
  );
}

export default NotFoundPage;
