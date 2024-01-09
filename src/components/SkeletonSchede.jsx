import { useState } from "react";
import { DataView } from "primereact/dataview";
import { Skeleton } from "primereact/skeleton";
import { styled } from "@mui/system";

function SkeletonSchede() {
  const [products, setProducts] = useState(["Ciao"]);

  const BouncingElement = styled("div")({
    width: "50px",
    height: "50px",
    backgroundColor: "blue",
    animation: "$bounce 1s infinite",
    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-20px)",
      },
      "60%": {
        transform: "translateY(-10px)",
      },
    },
  });

  const listItem = () => {
    return <BouncingElement />;
  };

  return (
    <div className="card">
      <DataView value={products} itemTemplate={listItem} layout="list" />
    </div>
  );
}

export default SkeletonSchede;
