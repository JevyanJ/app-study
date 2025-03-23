import React, { useState } from 'react';
import './index.sass';


export const HomePage = () => {
	const [questions, setQuestions] = useState([]);
	const [nselected, setNSelected] = useState(0);
	const [selected, setSelected] = useState([]);

	function goToExam (e) {
		// Prevent the browser from reloading the page
		e.preventDefault();
		if (questions.length === 0) {
			alert("Sin preguntas no hay examen");
			return;
		}
		setSelected([]);
		const shuffled = questions.sort(() => 0.5 - Math.random())
		if (nselected === 0) {
			setSelected(shuffled)
		} else {
			setSelected(shuffled.slice(0, nselected));
		}

	}

	function saveQuestions (e) {
		const form = e.target.form;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		setQuestions(formJson.questions.split("\n"));
	}

	function finishExam (e) {
		// Prevent the browser from reloading the page
		e.preventDefault();
		setSelected([]);
	}

	return (
		<main>
			{selected.length === 0 && (
				<div className="questions">
					<p>
						Añade las preguntas en el cuadro y selecciona cuantas quieres (deja 0 para añadir todas).<br />
						Pulsa el botón para comenzar.
					</p>
					<form method="post" onSubmit={goToExam}>
						<textarea
							name="questions"
							value={questions.join("\n")}
							onChange={saveQuestions}
							rows={4}
							cols={40}
						/>
						<label>
							Número de preguntas a seleccionar:
							<input
								name="nselected"
								type="number"
								min={0}
								max={questions.length}
								value={nselected}
								onChange={(e) => setNSelected(e.target.value)}
							/>
						</label>
						<hr />
						<button type="submit">¡Test!</button>
					</form>
				</div>
			)}
			{selected.length > 0 && (
				<div className="exam">
					<form method="post" onSubmit={finishExam}>
						<h2>Preguntas</h2>
						{selected.map((item, idx) => {
							return (
								<label key={idx}>
									{item}
									<input
										type="checkbox"
										name={`question-${idx}`}
										id={item}
										value={item}
									/>
								</label>
							);
						})}
						<button type="submit">Finalizar</button>
					</form>
				</div>
			)}
		</main>
	);
};
