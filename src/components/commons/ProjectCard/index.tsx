import React from 'react';

import Text from '../../foundations/Text';
import IProjectCard from './types';

import {
  ProjectsCard, ImgWrapper, InfoWrapper, LinkWraper,
} from './ProjectCard.styled';

export default ({ project }: IProjectCard) => (
  <ProjectsCard>
    <LinkWraper
      style={{ width: '100%', display: 'flex' }}
      href={`https://github.com/schultz-gabriel/${project.link}`}
      target="_blank"
      rel="noreferrer"
    >
      <ImgWrapper>
        <img
          src={project.path}
          className="image"
          alt=""
        />
      </ImgWrapper>
      <InfoWrapper>
        <div
          className="infoText"
        >
          <Text variant="subTitle" tag="h3">
            {project.title}
          </Text>
          <Text variant="paragraph2" tag="p">
            {project.description}
          </Text>
        </div>
      </InfoWrapper>
    </LinkWraper>
  </ProjectsCard>
);
