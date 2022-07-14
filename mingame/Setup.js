import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen")

const boxSize = Math.trunc(Math.max(width, height) * 0.075);

const initialBox = Matter.Bodies.rectangle(width / 2, height / 2, boxSize, boxSize);

export default { initialBox, boxSize };