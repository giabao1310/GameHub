import { useState } from 'react';
import grayHeart from '../assets/grayheart.png';
import redHeart from '../assets/redheart.png';
import { Image, Box } from '@chakra-ui/react';

interface Props {
  initialLiked: boolean;
}

const Emoji = ({ initialLiked }: Props) => {
  const [liked, setLiked] = useState(initialLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Image
      src={liked ? redHeart : grayHeart}
      alt="heart"
      width={35}
      height={10}
      cursor="pointer"
      onClick={toggleLike}
    />
  );
}

export default Emoji;