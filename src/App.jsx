import './index.css'

function App() {
  const data ={
    foto : "../fto.jpg",
    name : "Botak Gacor",
    born : "25 Mei 2004",
    age : "20 Tahun",
    hobby : ["bola","raket","renang"]
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
          <h3 className='coret'>&#128526;{data.name}&#128526;</h3>
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
