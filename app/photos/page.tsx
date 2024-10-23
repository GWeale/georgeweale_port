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
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "First Big Sea Bass"
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Chem E's graduating"
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Senior Design Project Presentation"
          },
          {
            src: "/photos/photo4.jpg",
            alt: "First arduino circuit"
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Professor Bowers!"
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Heavenly Ski Trip"
          },
          {
            src: "/photos/photo7.jpg",
            alt: "Reactions Class"
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
        ]}
      />
    </section>
  );
}
