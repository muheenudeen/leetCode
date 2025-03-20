const maxDifference = (s) => {
    const fr = Object.values([...s].reduce((o, c) => (o[c] = (o[c] | 0) + 1, o), {}));
    return Math.max(...fr.filter(v => v%2)) - Math.min(...fr.filter(v => !(v%2)));
};