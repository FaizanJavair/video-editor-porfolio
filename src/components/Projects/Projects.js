import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";
import ProjectCard from './ProjectCard';
import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.secondary70, 
            backgroundColor: theme.primary,
            padding: '0.5rem',
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}} className='font-bold'>My Work</h1>
                    </div>
                    <div className="projects--body">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
                            {projectsData.slice(0, 8).map(project => (
                                <ProjectCard
                                theme={theme}
                                key={project.id}
                                id={project.id}
                                project={project}
                            />
                            ))}
                        </div> 
                        <div className="projects--viewAll">
                                <Link href='https://www.youtube.com/@arshifatima15'>
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                        </div>
                        {/* {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
