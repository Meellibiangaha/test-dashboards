export const randomData = () => {
    const oneDay = 24 * 3600 * 1000;
    let base = +new Date(1968, 9, 3);
    let date = [];
    let data = [Math.random() * 300];
    for (let i = 1; i < 20000; i++) {
        const now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
    return data;
};
