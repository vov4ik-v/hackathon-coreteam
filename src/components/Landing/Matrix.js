import React from "react";
import "./Landing.css";

function MatrixEffect() {
    const columns = 20; // Кількість стовпців тексту
    const rows = 20; // Кількість рядків тексту

    const generateMatrix = () => {
        const matrix = [];
        for (let col = 0; col < columns; col++) {
            const column = (
                <div
                    className="matrix-column"
                    key={col}
                    style={{ "--col": col }}
                >
                    {Array(rows)
                        .fill(null)
                        .map((_, row) => (
                            <span key={row}>
                                {Math.random() > 0.5
                                    ? "HACKath0n"
                                    : "0hACK"}
                            </span>
                        ))}
                </div>
            );
            matrix.push(column);
        }
        return matrix;
    };

    return <div className="matrix-effect">{generateMatrix()}</div>;
}

export default MatrixEffect;
