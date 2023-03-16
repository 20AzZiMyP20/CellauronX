export function createFilterMiddleware(...args) {
    const filter = args.pop()
    const conditionActions = args;

    return store => next => action => {
        if (!conditionActions.find(act => action.type === act.toString())) return next(action);
        const newAction = filter(action);
        if (!newAction.hasOwnProperty("type")) return;
        return next(newAction);
    }
}