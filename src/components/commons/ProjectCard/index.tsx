import React from 'react';
import Image from 'next/image';

import Text from '../../foundations/Text';
import Button from '../Button';

import IProjectCard from './types';

import { ProjectsCard, ImgWrapper, InfoWrapper } from './ProjectCard.styled';

export default ({ project }: IProjectCard) => (
  <ProjectsCard key={project.title}>
    <ImgWrapper>
      <Image
        className="imageCard"
        src={project.path}
        width={320 * 16}
        height={300 * 9}
        layout="responsive"
      />
    </ImgWrapper>
    <InfoWrapper>
      <Text variant="subTitle" tag="h3">
        {project.title}
      </Text>
      <Text variant="paragraph2" tag="p">
        {project.description}
      </Text>
      <div className="buttonWrapper">
        <a
          target="_blank"
          href={`https://github.com/schultz-gabriel/${project.links.github}`}
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button fullWidth>
            <Text variant="paragraph1" tag="span" color="#fff">
              Repository
            </Text>
          </Button>
        </a>
        {project.links.prod && (
          <a
            target="_blank"
            href={project.links.prod}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button fullWidth>
              <Text variant="paragraph1" tag="span" color="#fff">
                Running
              </Text>
            </Button>
          </a>
        )}
      </div>
    </InfoWrapper>
  </ProjectsCard>
);
