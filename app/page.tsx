import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm George!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am going to be joining Google this summer as a Software Engineer working on Machine Learning and Cloud Ai.
          I am currently a masters student at the Columbia University studying Machine Learning and Bioinformatics in Professor Kam Leong's Lab. 
          I did my undergrad at the University of California, Santa Barbara where I obtained a BS in Chemical Engineering and a BS in Data Science and Statistics.
        </p>
      </div>
    </section>
  );
}
