import { Link } from 'react-router-dom';

export default function Thumb({ link, cover, title }) {
  return (
    <article className="Thumb__content">
      <Link className="Thumb__img" to={`/logement/${link}`}>
        <img src={cover} alt="Miniature de l'appartement" />
        <p>{title}</p>
      </Link>
    </article>
  );
}