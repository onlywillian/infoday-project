import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, StatusBar, Dimensions, View, TouchableOpacity } from 'react-native';

import Nave from '../mingame/Nave';

var Bodies = Matter.Bodies;

const { width, height } = Dimensions.get("window");

const boxSize = Math.trunc(Math.max(width, height) * 0.05); // pegando um tamanho base

const initialBox = Bodies.rectangle(width / 2 - boxSize, height / 2, boxSize, boxSize, { label: "box" }); // Criando a caixa base
const enemyBox = Bodies.rectangle(width / 2 - boxSize, 0, boxSize, boxSize);

const moves = {
    left: false,
    right: false
}

const handleTouchLeft = entities => {
    if (moves.left) {
        entities.nave.body.position.x -= 20;
    }

    moves.left = false;

    return entities;
}

const handleTouchRight = entities => {
    if (moves.right) {
        entities.nave.body.position.x += 20;
    }

    moves.right = false;

    return entities;
}

var boxIds = 0;

const invocarInimigo = (entities, { touches }) => {
    touches.filter(t => t.type === "press").forEach(t => {   
        let randomXPosition = Math.round(Math.random(10) * width);

        entities[++boxIds] = {
            body: enemyBox, 
            size: [boxSize, boxSize], 
            color: 'orange',
            renderer: props => Nave(randomXPosition, 0, props.size[0], props.size[1], props.color)
        }
    });

    return entities;
}

export default function GameScreen() {
    return (
        <View style={styles.container}>
            <GameEngine 
                style={styles.engine}
                systems={[
                    handleTouchLeft, 
                    handleTouchRight, 
                    invocarInimigo
                ]}
                entities={{ 
                    nave: { 
                        body: initialBox, 
                        size: [boxSize, boxSize], 
                        color: 'red', 
                        renderer: (props) => Nave(props.body.position.x, props.body.position.y, props.size[0], props.size[1], props.color)
                    },
                    enemy: {
                        body: enemyBox, 
                        size: [boxSize, boxSize], 
                        color: 'orange',
                        renderer: (props) => Nave(props.body.position.x, props.body.position.y, props.size[0], props.size[1], props.color)
                    }
                }}
            >
                <StatusBar hidden={true} />
            </GameEngine>

            {/* Buttons */}

            <View style={styles.box}>
                <TouchableOpacity onPress={() => moves.left = true}>
                    <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => moves.right = true}>
                    <View style={{backgroundColor: 'blue', width: 50, height: 50, marginRight: 100}}></View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
                </TouchableOpacity>
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  engine: {
    flex: 5
  },
  box: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});