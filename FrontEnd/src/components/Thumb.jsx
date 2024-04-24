import { Link } from 'react-router-dom';

export default function Thumb({ link, cover, title }) {
  return (
    <article className="Thumb__content">
      {/* Utilisation de React Router Link pour créer un lien vers le détail de l'appartement */}
      <Link className="Thumb__img" to={`/logement/${link}`}>
       {/* Image miniature de l'appartement avec l'URL spécifiée dans la prop 'cover' */}
        <img src={cover} alt="Miniature de l'appartement" />
        {/* Titre de l'appartement provenant de la prop 'title' */}
        <p>{title}</p>
      </Link>
    </article>
  );
}