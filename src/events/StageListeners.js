import CreateEventListener from "./CreateEventListener.js";

const StageListeners = new CreateEventListener();

StageListeners.add(
    function () {
        let isPointerDown = false;
        const parent = {};

        this.on("pointerdown", (event) => {
            isPointerDown = true;

            parent.startGlobalX = event.globalX;
            parent.startGlobalY = event.globalY;
            parent.stageGlobalX = this.x;
            parent.stageGlobalY = this.y;
        });

        this.on("pointerup", () => isPointerDown = false);
        //this.self.on("pointerout", () => isPointerDown = false);

        this.on("globalpointermove", (event) => {
            if (!isPointerDown) return;

            Object.assign(event, parent);

            this.emit("globalpointermovewhiledown", event);
        });
    },

    function () {
        const startPosition = {
            globalX: this.x,
            globalY: this.y,
        };

        this.on("globalpointermovewhiledown", (event) => {

            const offsetX = event.startGlobalX - event.stageGlobalX;
            const offsetY = event.startGlobalY - event.stageGlobalY;

            this.x = event.globalX - offsetX;
            this.y = event.globalY - offsetY;

            event.startStageGlobalX = startPosition.globalX;
            event.startStageGlobalY = startPosition.globalY;

            this.emit("move", event);
        });
    }
);

export  default StageListeners;