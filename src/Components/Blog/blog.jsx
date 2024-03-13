import PropTypes from 'prop-types'

function Blog({ blog }) {
    const { title, cover, reading_time, author,hashtags, author_img, posted_date } = blog;
    return (
        <div className=''>
            <img className='w-[600px]' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div className='  items-center m-5'>
                        <h3 className='mr-4'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} Min Read</span>
                </div>
            </div>
            <h1 className="text-2xl">{title}</h1>
            <p>
                {
                    hashtags.map(hash => <span className='mr-5'><a href="">#{hashtags}</a></span>)
                }
            </p>

        </div>
    )
}
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog
