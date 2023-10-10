import { useState, useEffect } from 'react';
import './App.css';
import { ShowTasks } from './component/showTasks';
import { AddTasks } from './component/addTasks';
import { Pages } from './component/pages';




function App() {
  const [data, setData] = useState('')
  const [editTask, setEditTask] = useState(false)
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("TaskData");
    setData(saved)
    if (saved) {

      const saved = localStorage.getItem("TaskData");
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    } else {
      return []
    }
  }

  )
  const [currentIndex, setCurrentIndex] = useState(1)
  const storedData = localStorage.getItem('TaskData')
  const pages = 5
  const lastIndex = currentIndex * pages
  const firstIndex = lastIndex - pages
  const records = storedData.slice(firstIndex, lastIndex)
  const npages = Math.ceil(storedData.length / pages)
  const numbers = [...Array(npages + 1).keys()].slice(1)

  const prev = () => {
    if (currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const next = () => {
    if (currentIndex !== npages) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const changeIndex = (id) => {
    setCurrentIndex(id)
  }

  useEffect(() => {
    console.log(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    localStorage.setItem('TaskData', JSON.stringify(tasks))
  }, [tasks])

  const addTest = (data) => {
    tasks.push({ ...data, id: Date.now() })
    setTasks([...tasks])
    console.log(tasks);

  }
  const deleteById = (id) => {
    setTasks([...tasks.filter(e => e.id != id)])
  }

  const editClick = () => {
    setEditTask(true)
  }

  const saveClick = () => {
    localStorage.setItem('TaskData', data)
  }


  const inputChange = (event) => {
    setData(event.target.value)
  }

  return (
    <div className='dv1' style={{ display: 'block', justifyContent: "center", alignItems: "center", width: "1000px", }} >

      <Pages />
      <h1 style={{ display: "flex", justifyContent: "center" }}>Tasks</h1>
      <div className='ddd1'>
        <div className='ddd1'>
          <ShowTasks tasks={tasks} deleteById={deleteById} editTask={editTask} inputChange={inputChange} saveClick={saveClick} editClick={editClick} data={data} prev={prev} next={next} currentIndex={currentIndex}  changeIndex={changeIndex} numbers={numbers} records={records} />
        </div>
        <hr />

        <div className='ddd1'>
          <AddTasks addTest={addTest} />
        </div>
      </div>



    </div >
  );
}

export default App;
