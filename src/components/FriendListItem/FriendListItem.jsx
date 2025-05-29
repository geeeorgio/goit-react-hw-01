import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div className={css.wrapper}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
