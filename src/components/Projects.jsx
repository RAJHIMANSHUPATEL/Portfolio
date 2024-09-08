import { RxDividerVertical } from 'react-icons/rx';
import {projects} from '../data';

const Projects = () => {

  return (
    <div className="projects">
      <section className='section section-center' id='work'>
      <div className='title'>
        <h2>Recent Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { image, url, title } = project;
          return (
            <a
              key={title}
              href={url}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={image} alt='title' className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
    </div>
  );
};
export default Projects;
