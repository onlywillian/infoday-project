import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import { StyleSheet, StatusBar, Dimensions, View, TouchableOpacity } from 'react-native';

import Nave from '../mingame/Nave';
import Enemy from "../mingame/Enemy";
import Bullet from '../mingame/Bullet';

var Bodies = Matter.Bodies;

const { width, height } = Dimensions.get("window");

const boxSize = Math.trunc(Math.max(width, height) * 0.05); // pegando um tamanho base

const naveBody = Bodies.rectangle(width / 2, height / 5 + height / 2, boxSize, boxSize, { label: "box" }); // Criando a caixa bas
const enemyBox = Bodies.rectangle(width / 2, 0, boxSize, boxSize, { label: "enemy" });

// Config

const moves = {
    left: false,
    right: false
}

var isSpawnEnemy = false,
    isGameStarted = false,
    isMovingEnemy = false,
    isFiring = false,
    isEnemyPassed = false,
    isGameOver = false;

var speedEnemyValue = 5;
var speedBulletValue = 20;

// Events activation

setInterval(() => {
    if (!isSpawnEnemy) isSpawnEnemy = true;

    setTimeout(() => {
        isSpawnEnemy = false;
    }, 5);
}, 2000);

setInterval(() => {
    if (!isMovingEnemy) isMovingEnemy = true;

    setTimeout(() => {
        isMovingEnemy = false;
    }, 5);
}, 50);

// setInterval(() => {
//     speedValue = speedValue + 5;
// }, 10000);

// Events

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

var entitiesIds = 0;

const handleEnemiesSpawn = entities => {
    if(isSpawnEnemy) {
        let randomXPosition = Math.round(Math.random(10) * (width - boxSize));

        let enemyBox = Bodies.rectangle(width / 2, 0, boxSize, boxSize, { label: "enemy" });

        entities[++entitiesIds] = {
            body: enemyBox, 
            size: [boxSize, boxSize], 
            color: 'orange',
            renderer: props => Enemy(randomXPosition, props.body.position.y, props.size[0], props.size[1], props.color)
        }
    }

    return entities;
}

const handleEnemiesMove = entities => {
    let size = Object.keys(entities);

    if (isMovingEnemy) {
        size.map(key => {
            if (entities[key].body.label == "enemy") entities[key].body.position.y += speedEnemyValue;
        });
    }

    size.map(key => {
        if (entities[key].body.label == "bullet") entities[key].body.position.y -= speedBulletValue;
    });
    
    return entities;
}


const handleNaveShoot = entities => {
    if (isFiring) {
        let bullet = Bodies.rectangle(entities.nave.body.position.x, entities.nave.body.position.y, boxSize, boxSize, { label: "bullet" });

        entities[++entitiesIds] = {
            body: bullet, 
            size: [boxSize / 2, boxSize / 2], 
            color: 'black',
            renderer: props => Bullet(props.body.position.x, props.body.position.y, props.size[0], props.size[1], props.color)
        }
    }
    
    isFiring = false;

    return entities;
}

const handleCollisions = entities => {
    // Collisions config
    let bullets = [];
    let enemys = [];
    let allEntities = Object.keys(entities);
    let player = entities.nave;
    
    allEntities.forEach(key => {
        let e = entities[key];

        if (e.body.label == 'bullet') {
            bullets.push(e);
        } else if (e.body.label == 'enemy') {
            enemys.push(e);
        }
    });

    if (bullets == []) return entities;

    for (let i = 0; i < bullets.length; i++) {
        for (let j = 0; j < enemys.length; j++) {
            if (
                bullets[i].body.position.x < enemys[j].body.position.x + enemys[j].size[0] &&
                bullets[i].body.position.x + bullets.size[0] > enemys[j].body.position.x &&
                bullets[i].body.position.y < enemys[j].body.position.y + enemys[j].size[0] &&
                bullets[i].body.position.y + bullets.size[0] > enemys[j].body.position.y
                ) {
                delete enemys[j];
            }
        }
    }

    return entities;
}

const handleLimits = entities => {
    // Limites do player
    let player = entities.nave;
    let leftSide = player.body.position.x;
    let rightSide = player.body.position.x + boxSize;

    if (rightSide >= width) {
        player.body.position.x = width - boxSize;
    } else if (leftSide <= 0) {
        player.body.position.x = 0;
    }

    // Limites dos inimigos
    let allEntities = Object.keys(entities);

    allEntities.forEach(key => {
        if (entities[key].body.label == 'enemy') {
            if (entities[key].body.position.y >= height) {
                isEnemyPassed = true; // Ativando a flag para retirar as vidas
                delete entities[key]; // Deletando o inimigo
            }
        } else if (entities[key].body.label == 'bullet') {
            if (entities[key].body.position.y <= 0) {
                delete entities[key]; // Deletando o inimigo
            }
        }
    })

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
                    handleEnemiesSpawn,
                    handleEnemiesMove,
                    handleNaveShoot,
                    handleCollisions,
                    // handleLimits,
                ]}
                entities={{ 
                    nave: { 
                        body: naveBody, 
                        size: [boxSize, boxSize], 
                        color: 'red', 
                        renderer: (props) => Nave(props.body.position.x, props.body.position.y, props.size[0], props.size[1], props.color)
                    },
                    enemy: {
                        body: enemyBox, 
                        size: [boxSize, boxSize], 
                        color: 'orange',
                        renderer: props => Enemy(props.body.position.x, props.body.position.y, props.size[0], props.size[1], props.color)
                    }
                }}
            >
                <StatusBar hidden={true} />
            </GameEngine>

            {/* Buttons */}

            <View style={styles.box}>
                <TouchableOpacity onPress={() => moves.left = true}>
                    <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => moves.right = true}>
                    <View style={{backgroundColor: 'blue', width: 50, height: 50, marginRight: 100}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => isFiring = true}>
                    <View style={{backgroundColor: 'red', width: 50, height: 50}} />
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