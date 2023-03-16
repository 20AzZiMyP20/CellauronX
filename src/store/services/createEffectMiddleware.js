export function createEffectMiddleware(...args) {
    const filter = args.pop();
    const conditionActions = args;

    return store => next => action => {
        if (!conditionActions.find(act => action.type === act.toString())) return next(action);
        const result = next(action);
        filter(action);
        return result
    }
}