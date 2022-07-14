import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

import Nave from '../mingame/Nave';
import Controls from '../mingame/Controls'

var Engine = Matter.Engine, 
    Bodies = Matter.Bodies,
    World = Matter.World;

const engine = Engine.create({ enableSleeping: false });
const world = engine.world;

const { width, height } = Dimensions.get("screen")

const boxSize = Math.trunc(Math.max(width, height) * 0.05);

const initialBox = Bodies.rectangle(width / 2 - boxSize, height / 2, boxSize, boxSize);

World.add(world, [initialBox]);

export default function GameScreen() {
    return (
        <GameEngine 
            style={styles.container}
            entities={{ 
                initialBox: { 
                    body: initialBox, 
                    size: [boxSize, boxSize], 
                    color: 'red', 
                    renderer: (props) => Nave(props.body.position.x, props.body.position.y, props.size[0], props.size[1], props.color)
                },
                left: {
                    body: initialBox, 
                    size: [boxSize, boxSize],
                    renderer: () => Controls(boxSize, height - boxSize, boxSize, boxSize, 'green')
                },
                right: {
                    body: initialBox, 
                    size: [boxSize, boxSize],
                    renderer: () => Controls(boxSize * 3, height - boxSize, boxSize, boxSize, 'green')
                },
                power: {
                    body: initialBox, 
                    size: [boxSize, boxSize],
                    renderer: () => Controls(width - boxSize * 2, height - boxSize, boxSize, boxSize, 'blue')
                }
            }}
        >
            <StatusBar hidden={true} />
        </GameEngine>
    );
} 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
});