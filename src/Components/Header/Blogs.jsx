
import profile from '../../assets/images/profile.png'
function Header() {
    return (
        <div className='flex justify-between items-center container mx-auto'>
            <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
            <img className='w-24' src={profile} alt="" />
        </div>
    )
}

export default Header;
