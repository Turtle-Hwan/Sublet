import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export default function RoomProfile(props) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      margin: '1em',
    },
    roomImage: {
      width: '100%',
    },
    roomTitleAndLike: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    heart: {
      fontSize: '0.9em',
    }
  }

  return (
    <div style={styles.container}>
      <img style={styles.roomImage} src={props.room.images[0]} alt='방 이미지' />
      <div style={styles.roomTitleAndLike}>
        {props.room.title}
        <IconButton style={styles.heart}>
          {(props.room.roomLike !== undefined) ? <Favorite /> : <FavoriteBorder />} {props.room.likeCount}
        </IconButton>
      </div>
      <div>
        {props.room.position}
        {props.room.price + '원'} / 1개월
      </div>
    </div>
  );
}
