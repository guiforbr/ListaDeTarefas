import './ListaDeTarefas.css'
import Tarefas from './Tarefas'

function ListaDeTarefas(){
    return(
        <div>
            <h1 className='titulo'>Lista de Tarefas</h1>
            <div className='inputTarefa'>
                <form action="" >
                    <input type="text" placeholder='Insira sua tarefa' id='teste'/>
                    <button type='button' className='adicionar' onClick={Tarefas}>Adicionar</button>
                </form>
            </div>
            <div className='tarefas'>
                <h2 className='tarefas' id='tarefa'></h2>
                <button className='remover'>Remover</button>
            </div>
        </div>
    )
} 

export default ListaDeTarefas