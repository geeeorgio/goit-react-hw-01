import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.userCard}>
        {name && image && (
          <>
            <img className={css.userImg} src={image} alt={name} />
            <p className={css.description}>{name}</p>
          </>
        )}
        {tag && <p className={css.description}>@{tag}</p>}
        {location && <p className={css.description}>{location}</p>}
      </div>

      {stats && (
        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
