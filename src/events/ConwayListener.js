import { conwayGetSpeed, conwayGetStatus } from "../store/actions/conwayAction.js";
import CreateEventListener from "./CreateEventListener.js";

const ConwayListener = new CreateEventListener();

ConwayListener.add(
    function () {
        let intervalId;

        const pause = () => clearInterval(intervalId);
        const play = (speed) => {
            clearInterval(intervalId);
            if (speed > 0) {
                intervalId = setInterval(() => this.step(), 1000 / speed);            
            }
        }

        let speedUnsubscribe = () => {};

        conwayGetStatus(status => {
            speedUnsubscribe();
            conwayGetSpeed(speed => status === "plays" ? play(speed) : pause(), (unsubscribe) => speedUnsubscribe = unsubscribe);

        }, this);
    }
);
export default ConwayListener;