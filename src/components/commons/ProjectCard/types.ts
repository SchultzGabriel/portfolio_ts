/* eslint-disable semi */
export default interface IProjectCard {
  project: {
    title: string;
    path: string;
    description: string;
    links: {
      github: string;
      prod?: string;
    };
  };
}
