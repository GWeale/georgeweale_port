import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        showCaption={true}
        images={[
          {
            src: "/photos/photo1.png",
            alt: "First Big Sea Bass"
          },
          {
            src: "/photos/photo2.png",
            alt: "Chem E's graduating"
          },
          {
            src: "/photos/photo3.png",
            alt: "Senior Design Project Presentation"
          },
          {
            src: "/photos/photo5.png",
            alt: "Professor Bowers!"
          },
          {
            src: "/photos/photo6.png",
            alt: "Heavenly Ski Trip"
          },
          {
            src: "/photos/photo7.png",
            alt: "Reactions Class"
          },
        ]}
      />
    </section>
  );
}
