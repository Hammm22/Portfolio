import Profile from '../assets/poto1.jpeg'


function hero(){
    return(
        <main id='home' className="h-[100vh] bg-gradient-to-r from-slate-950 via-sky-950 to-black bg-cover bg-center flex items-center justify-evenly font-poppins">
                <div className='w-[500px] h-[650px] bg-black/40 flex justify-center items-center rounded-[30px] backdrop-blur-lg'>
                    <div>
                        <img src={Profile} alt="Profile" className='w-[420px] h-[550px] rounded-[15px]'/>
                    </div>
                </div>

                <div className='text-white mr-20 bg-black/40 backdrop-blur-lg h-[400px] w-[800px] flex flex-col items-center px-10 py-20 rounded-[30px]'>
                    <h1 className='text-6xl'>Hello, I'm <span className='text-sky-500'>Ilham</span>.</h1>
                    <p className='text-white text-3xl my-20'>I’m a <span className='text-sky-500'>Computer Science Student</span> that passionate about coding, design, and creating modern web experiences.</p>
                    <a className='bg-black h-24 w-64 flex justify-center items-center hover:text-sky-500 cursor-pointer rounded-[25px]'>
                        <h2 className='text-2xl'>See My Project's</h2>
                    </a>
                </div>
        </main>
    )
}

export default hero;