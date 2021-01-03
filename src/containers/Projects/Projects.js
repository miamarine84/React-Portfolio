import 'bootstrap/dist/css/bootstrap.min.css';
import '../Projects/style.css'
import Nav from '../../components/NavBar/Navbar';
import ProjectsPortion from '../../components/ProjectsPortion/ProjectsPortion'
function Projects() {
  return (
 
    <div>
      <Nav/>
      <ProjectsPortion/>
      <div id='side-list'>
                <ul>
                    <li id='test1'>
                        <a href='https://docs.google.com/document/d/1EmTwYSCCWO7OgSBuDVptaxlR8p0B4trT-A9chlmsZyI/edit' target='_blank'>
                            <img src='https://image.shutterstock.com/image-vector/resume-icon-260nw-477290071.jpg' />
              
                        <span>Resume</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/miamarine84' target='_blank'>
                            <img src='https://alanferrandiz.files.wordpress.com/2020/09/github_logo.png' />
                      
                        <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/marcos-p-898b701ab/' target='_blank'>
                            <img src='https://image.shutterstock.com/image-vector/logo-icon-vector-template-260nw-1781944223.jpg' />
                      
                        <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:marcos.patrocinio1184@gmail.com" target='_blank'>
                            <img src='https://image.shutterstock.com/image-vector/envelope-icon-vector-260nw-768672523.jpg' />
                     
                        <span>Email me</span>
                        </a>
                    </li>
                </ul>
            </div>
    </div>
  );
}

export default Projects;