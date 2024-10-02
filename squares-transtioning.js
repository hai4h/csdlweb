const container = document.getElementById('container');
const squares = document.querySelectorAll('.square');
const cursor = document.getElementById('cursor');

const margin = 25, containerSize = 500, squareSize = 150;
const cornerPositions = [
    { x: margin, y: margin },
    { x: containerSize - squareSize - margin, y: margin },
    { x: margin, y: containerSize - squareSize - margin },
    { x: containerSize - squareSize - margin, y: containerSize - squareSize - margin }
];

let squarePositions = [0, 1, 2];

const updateSquarePositions = () => {
    squares.forEach((square, index) => {
        const { x, y } = cornerPositions[squarePositions[index]];
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;
    });
};

const moveSquaresAwayFromCursor = (cursorX, cursorY) => {
    const availableCorners = [0, 1, 2, 3].filter(corner => !squarePositions.includes(corner));
    if (availableCorners.length === 0) return;

    const approachingSquareIndex = squarePositions.findIndex((pos) => {
        const { x, y } = cornerPositions[pos];
        const distance = Math.hypot(cursorX - (x + squareSize / 2), cursorY - (y + squareSize / 2));
        return distance < 120;
    });

    if (approachingSquareIndex !== -1) {
        const [emptyCorner] = availableCorners;
        const swapIndex = squarePositions.find((_, idx) => idx !== approachingSquareIndex);
        squarePositions[squarePositions.indexOf(swapIndex)] = emptyCorner;
        squarePositions[approachingSquareIndex] = swapIndex;
        updateSquarePositions();
    }
};

container.addEventListener('mousemove', (e) => {
    const { left, top } = container.getBoundingClientRect();
    const x = e.clientX - left, y = e.clientY - top;
    cursor.style.left = `${x - 10}px`;
    cursor.style.top = `${y - 10}px`;
    moveSquaresAwayFromCursor(x, y);
});

container.addEventListener('mouseleave', () => cursor.style.display = 'none');
container.addEventListener('mouseenter', () => cursor.style.display = 'block');

updateSquarePositions();