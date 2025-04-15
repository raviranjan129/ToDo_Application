import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full h-[60px] flex items-center justify-between p-6 bg-violet-400 text-2xl font-[500] text-white overflow-hidden'>
            <div className='flex gap-10'>
                <p className='cursor-pointer hover:text-red-400 transition'>ToDo</p>
                <p className='cursor-pointer hover:text-red-400 transition' onClick={() => navigate('/')}>Home</p>
            </div>
            <div className='flex items-center gap-1'>
                <p className='cursor-pointer hover:text-red-400 transition' onClick={() => navigate('/users/signin')}>Login</p>/
                <p className='cursor-pointer hover:text-red-400 transition' onClick={() => navigate('/users/signup')}>Register</p>
            </div>
        </div>
    );
};

export default Nav;