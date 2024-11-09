



import Image from "next/image";
import Link from "next/link";
import "./project.css"

interface ProjectCardProps {
    title : string;
    description :string ;
    githubLink : string ;
    imageUrl: string
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, imageUrl }) => {
    return (
        <>
        <div className="card">
            <Image src={imageUrl} alt={title} width={200} height={300}  className="card-image"/>
            <div className="card-content">
            <div className="card-title">{title}</div>
            <p className="card-description">{description}</p>
            </div>
            <div className="card-footer">
            <Link href={githubLink} className="card-link">View on GitHub</Link>
        </div>
        </div>



</>
    );
};


  
  export default ProjectCard;