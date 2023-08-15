import { BaseState } from './BaseState.js';
import { applyDMG } from '../combat.js';

export class PlayerTurnState extends BaseState {
    constructor() {
        super('PlayerTurn');
    }

    enter() {
        super.enter();
        //console.log("In the Player Turn State");
    }

    exit() {
        super.exit();
        // logic TBD
    }

    update(enemy, player) {
        super.update();

        // console.log(actionQueue.currentActionIndex);
        //console.log(`Calling the ${actionQueue.returnNextAction().title} action.`);

        applyDMG(enemy, player.baseStats.damage);
    }
}