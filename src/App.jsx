import './index.css'

function App() {
  const data ={
    foto : "./foto bagus.jpg",
    name : "Kang Joki Handal",
    born : "10 Januari 2004",
    age : "20 Tahun",
    hobby : ["Joki Jurnal","Joki Makalah","Joki UAS"]
  }

  return (
    <div className='container'>
      <div className='container2'>
        <div className='title'>
          <h1>Tugas 1 Kelompok Nebula</h1>
        </div>
        <div className='content'>
          <h1>Biodata</h1>
          <img src={data.foto} alt="" />
          <h3>{data.name}</h3>
          <p className='isi1'>{data.born}</p>
          <p className='isi2'>{data.age}</p>
          <ul className='hobby'>
            {data.hobby.map((items,index)=>(<li key={index} >{items}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
