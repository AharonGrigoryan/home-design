import React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const YetAnother = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/src/images/im3rd-media-9USszO6wZqU-unsplash.jpg" },
          { src: "/src/images/mainBcg.png" },
          { src: "/src/images/sidekix-media-wRzBarqn3hs-unsplash.jpg" },
        ]}
      />
    </div>
  );
};

export default YetAnother;
