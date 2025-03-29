import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { useNavigate } from 'react-router-dom';
import { QuestionsData, NQuestions } from '../../questionsData';
import Question from '../../components/question';
import './index.sass';


export const HomePage = () => {
	const navigate = useNavigate();
	const questionsStore = useStore(QuestionsData);
	const nquestionsStore = useStore(NQuestions);
	const [questionsText, setQuestionsText] = useState(questionsStore.map((question) => question.text).join("\n"));
	const [nselected, setNselected] = useState(nquestionsStore);

	function onChange (e) {
		const form = e.target.form;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		setQuestionsText(formJson.questions);
		setNselected(formJson.nselected);
	}

	function onSubmit (e) {
		e.preventDefault();
		if (questionsText.length == 0) {
			alert("No hay más preguntas, señoría");
			return;
		}
		const questions = [...new Set(questionsText.split("\n").filter(val => val.length > 0))];
		const shuffled = questions.sort(() => 0.5 - Math.random())
		const selected = nselected == 0 ? shuffled : shuffled.slice(0, nselected);
		QuestionsData.set(questions.map((question) => {
			return new Question(question, selected.includes(question));
		}));
		NQuestions.set(nselected);
		navigate("/exam");
	}

	return (
		<main>
			<div className="left">
				<div className="instructions">
					<p>
						Añade las preguntas en el cuadro, una por línea.
					</p>
					<p>
						Luego selecciona cuantas quieres para el test.
					</p>
					<p>
						Deja 0 si las quieres todas.
					</p>
				</div>
			</div>
			<div className="right">
				<form method="post" onSubmit={onSubmit}>
					<div className='section'>
						<label>
							Preguntas:
						</label>
						<textarea
							name="questions"
							rows={4}
							cols={40}
							value={questionsText}
							onChange={onChange}
						/>
					</div>
					<div className='section'>
						<label>
							Número de preguntas:
						</label>
						<div>
							<input
								name="nselected"
								type="number"
								min={0}
								value={nselected}
								onChange={onChange}
							/>
						</div>
					</div>
					<div className='section divbutton'>
						<button type="submit">Ir al test</button>
					</div>
				</form>
			</div>
		</main>
	);
};

