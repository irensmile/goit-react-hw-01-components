import css from './FriendListItem.module.css'


export const FriendListItem = ({friend}) => (
<li className={css.item}>
        <span className={[css.status, friend.isOnline ? css.online : css.offline].join(' ')}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name }</p>
</li>
)