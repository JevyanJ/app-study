import { QuestionsData } from '../../questionsData';
import Question from '../../components/question';


const QuestionsInput = () => {

    function updateQuestions (e) {
        const form = e.target.form;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const questions = formJson.questions.split("\n");
        const nselected = formJson.nselected;

        const shuffled = questions.sort(() => 0.5 - Math.random())
        const selected = nselected == 0 ? shuffled : shuffled.slice(0, nselected);

        console.log("Preguntas: ", questions);
        console.log("Seleccionadas: ", selected);
        QuestionsData.set(questions.map((question) => {
            return new Question(question, selected.includes(question));
        }));
    }

    return (
        <div>
            <p>
                Añade las preguntas en el cuadro y selecciona cuantas quieres (deja 0 para añadir todas).<br />
                Pulsa el botón para comenzar.
            </p>
            <form method="post" onChange={updateQuestions}>
                <textarea
                    name="questions"
                    rows={4}
                    cols={40}
                />
                <label>
                    Número de preguntas a seleccionar:
                    <input
                        name="nselected"
                        type="number"
                        min={0}
                        defaultValue={0}
                    />
                </label>
                <hr />
                <button type="submit">¡Test!</button>
            </form>
        </div>
    );
};

export default QuestionsInput;
