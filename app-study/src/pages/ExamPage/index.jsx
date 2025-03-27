import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@nanostores/react';
import { QuestionsData } from '../../questionsData';
import './style.sass';

const CheckBox = ({ item, value = false, updateValue = () => { }, class_name }) => {

	const styles = {
		textDecorationLine: value ? "line-through" : "none"
	};

	const handleChange = () => {
		updateValue(!value, item)
	};

	return (
		<div className={"form-check" + (class_name ? " " + class_name : "")}>
			<input
				type="checkbox"
				onChange={handleChange}
				checked={value}
				id={item}
				name={item}
			/>
			<label style={styles} onClick={handleChange}>{item}</label>
		</div>
	);
};


export const ExamPage = () => {

	const navigate = useNavigate();
	const questionsData = useStore(QuestionsData);
	const listOptions = questionsData.filter(val => val.isSelected).map(val => val.text);
	const [selected, setSelected] = useState([]);

	function handleSubmit (event) {
		event.preventDefault();
		QuestionsData.set(questionsData.filter(val => !selected.includes(val.text)));
		navigate("/");

	}

	function handleSelect (value, item) {
		if (value) {
			setSelected([...selected, item]);
		} else {
			setSelected(selected.filter(val => val !== item));
		}
	}

	function handleAll (value) {
		if (value) {
			setSelected(listOptions);
		} else {
			setSelected([]);
		}
	}

	return (
		<div className="exam-page">
			<form method="post" onSubmit={handleSubmit}>
				<div>
					<div className="questions">
						{listOptions.map((text, index) => (
							<CheckBox key={index} item={text} value={selected.includes(text)} updateValue={handleSelect} />
						))}
					</div>
					<CheckBox class_name="select-all" item="Seleccionar todo" value={selected.length === listOptions.length} updateValue={handleAll} />
				</div>
				<div className="actions">
					<button type="submit">Volver</button>
					<div className="info">
						<p>
							Las preguntas seleccionadas se eliminarán de la lista
						</p>
					</div>
				</div>
			</form>
		</div>
	)
};
