export default function reducer(state, action) {
    switch (action.type) {
        case "gumarum": return { count :state.count + 1};
        case "hanum": return { count :state.count - 1};
        case "add": return { count :state.count + Math.floor(Math.random()*action.number)};
        case "reset": return { count : 0};
        default: throw new Error("invalid type for action")
    }
}