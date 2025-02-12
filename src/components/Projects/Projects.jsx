
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="production-Website"
          main="A project assesment given by a client based on html,css,js,Php,sql. include user authentication and product information"
          demoLink="http://websign.infinityfreeapp.com/?i=1"
            sourceCodeLink="https://github.com/Charu-sarswat/php"
             hoverColor="hover:bg-red-300"
        />
        <ProjectCard
          title="Quiz app"
          main="A Quiz app for play the game and enhance the knowlwdge based on react project include user Authentication and all features"
          demoLink="https://app.netlify.com/sites/savitaworld/overview"
            sourceCodeLink="https://github.com/Charu-sarswat/Quiz"
            hoverColor="hover:bg-green-300"
        />
        <ProjectCard
          title="Omegal-like website"
          main="Omegal like website connect the user on the basis of hobby and provided chat and video call feature."
          demoLink="https://drive.google.com/file/d/1ppV0zbi452hyZbgmRUR7XKa4pV53jnEd/view"
            sourceCodeLink="https://github.com/Charu-sarswat/Hobby-matcher"
              hoverColor="hover:bg-purple-300"
        />
        <ProjectCard
          title="Online-virtual-teaching"
          main="Online teaching platform is a best industrial project based on real world project based on mongo,express,react,nodejs technology. where online teaching, video conferencing,notes upload,delete ,besst UI-Ux design"
          demoLink="https://github.com/Charu-sarswat/Online-virtual-platform"
            sourceCodeLink="https://github.com/Charu-sarswat/Online-virtual-platform"
              hoverColor="hover:bg-yellow-300"
        />
        <ProjectCard
          title="virtual try on"
          main="Industial project for automatically changed clothes a hackthon project on react Best project for all the markets. include excellent features user authentication and well ui-ux designd full of chat gpt used."
          demoLink="https://drive.google.com/drive/folders/1N20iV80GPnwtWxY_yS1Rm5Aos4v_ZyPG?usp=drive_link"
          sourceCodeLink="https://github.com/Charu-sarswat/Try-Clothes"
            hoverColor="hover:bg-indigo-300"
        />
        <ProjectCard
          title="Ecommerce website"
          main="Ecommerece website related to claothes and we can Order any cloth and check the prices . poject based on the shops and moles it is based on the html ,css,js."
          demoLink="https://boisterous-praline-7192f1.netlify.app/"
            sourceCodeLink="https://github.com/Charu-sarswat/Ecommerce"
               hoverColor="hover:bg-pink-300"

            


        />
      </div>
    </div>
  );
};

export default Projects;