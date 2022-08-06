import React from 'react';

import ProjectCard from '../ProjectCard';
import ProjectsWrapper from './MyWork.styled';

const githubProjectsList = [
  {
    title: 'Website pessoal',
    description: 'Repositório deste website. Também meu primeiro projeto desenvolvido inteiramente em TypeScript, onde consolidei meu conhecimento nesse superset.',
    link: 'Gabriel_Schultz',
    path: '/img/Gabriel_Schultz.png',
  },
  {
    title: 'Instalura',
    description: 'Meu primeiro projeto usando ReactJS, ainda com conhecimentos básicos de JavaScript. Desenvolvido durante o bootcamp de front-end avançado da Alura, na qual fui bolsista por mérito de entregar um bom trabalho na Imersão React da Alura.',
    link: 'instalura',
    path: '/img/instalura.png',
  },
  {
    title: 'DEVolucionário',
    description: 'Meu blog pessoal, temporariamente "abandonado" por estar em transição de domínio, logo será transformado em um complexo projeto educacional.',
    link: 'DEVolucionario',
    path: '/img/DEVolucionario.png',
  },
  {
    title: 'api-rentx',
    description: 'Projeto de desenvolvimento back-end com Noje.js. Utilizado para iniciar a transição de front-end para o desenvolvimento fullstack. Desenvolvido durante a conclusão do Ignite da Rocketseat.',
    link: 'api-rentx',
    path: '/img/api-rentx.png',
  },
  {
    title: 'SOLID_ignite_challenge',
    description: 'Desafio de back-end do Ignite para fixar os conceitos do SOLID no desenvolvimento backend com Node.js. Projeto desenvolvido com orientação a objetos.',
    link: 'SOLID_ignite_challenge',
    path: '/img/SOLID_ignite_challenge.png',
  },
];

const MyWork = () => (
  <ProjectsWrapper>
    {githubProjectsList.map((project) => (
      <ProjectCard key={project.title} project={project} />
    ))}
  </ProjectsWrapper>
);

export default MyWork;
